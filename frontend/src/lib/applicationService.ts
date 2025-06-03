import type { 
  ApplicationFormData, 
  ApplicationSubmissionResult, 
  ValidationResult,
  EmailNotificationData,
  EmailTemplate
} from '@/types/application';

/**
 * Application Service - Handles all business logic for application submissions
 * 
 * Features:
 * - Form validation with detailed error messages
 * - File upload handling and validation
 * - Email notifications to both applicant and company
 * - GDPR compliance tracking
 * - Application ID generation
 * - Error logging and metrics
 */
export class ApplicationService {
  private static readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  private static readonly ALLOWED_FILE_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  private static readonly API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'https://api.dtopartners.com';
  
  /**
   * Validates the application form data
   */
  static validateApplication(data: ApplicationFormData): ValidationResult {
    const errors: Record<string, string> = {};
    
    // Required field validation
    if (!data.fullName?.trim()) {
      errors.fullName = 'Full name is required';
    } else if (data.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    }
    
    if (!data.email?.trim()) {
      errors.email = 'Email address is required';
    } else if (!this.isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!data.phone?.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!this.isValidPhone(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    // GDPR consent validation
    if (!data.gdprConsent) {
      errors.gdprConsent = 'You must consent to data processing to proceed';
    }
    
    // Professional summary validation (optional but recommended)
    if (data.professionalSummary && data.professionalSummary.length > 2000) {
      errors.professionalSummary = 'Professional summary must be less than 2000 characters';
    }
    
    // File validation
    if (data.cvFile) {
      const fileValidation = this.validateFile(data.cvFile);
      if (!fileValidation.isValid) {
        errors.cvFile = fileValidation.error || 'Invalid file';
      }
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
  
  /**
   * Validates uploaded CV/Resume file
   */
  private static validateFile(file: File): { isValid: boolean; error?: string } {
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        isValid: false,
        error: 'File size must be less than 10MB'
      };
    }
    
    if (!this.ALLOWED_FILE_TYPES.includes(file.type)) {
      return {
        isValid: false,
        error: 'Only PDF, DOC, and DOCX files are allowed'
      };
    }
    
    return { isValid: true };
  }
  
  /**
   * Submits the application with all necessary processing
   */
  static async submitApplication(data: ApplicationFormData): Promise<ApplicationSubmissionResult> {
    try {
      // Validate the application data
      const validation = this.validateApplication(data);
      if (!validation.isValid) {
        return {
          success: false,
          message: 'Please correct the errors in your application',
          errors: validation.errors
        };
      }
      
      // Generate unique application ID
      const applicationId = this.generateApplicationId();
      
      // Prepare form data for submission
      const formData = await this.prepareFormData(data, applicationId);
      
      // Submit to backend API
      const response = await this.sendToAPI(formData);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      // Send confirmation emails
      await this.sendConfirmationEmails({
        applicantName: data.fullName,
        applicantEmail: data.email,
        applicationId,
        submissionDate: new Date().toISOString(),
        cvFileName: data.cvFile?.name
      });
      
      // Log successful submission
      this.logSubmission(applicationId, 'success');
      
      return {
        success: true,
        message: 'Application submitted successfully! You will receive a confirmation email shortly.',
        applicationId
      };
      
    } catch (error) {
      console.error('Application submission error:', error);
      
      // Log failed submission
      this.logSubmission('unknown', 'error', error instanceof Error ? error.message : 'Unknown error');
      
      return {
        success: false,
        message: 'We apologize, but there was an error submitting your application. Please try again or contact us directly.',
        errors: { general: error instanceof Error ? error.message : 'Submission failed' }
      };
    }
  }
  
  /**
   * Prepares FormData object for API submission
   */
  private static async prepareFormData(data: ApplicationFormData, applicationId: string): Promise<FormData> {
    const formData = new FormData();
    
    // Add all form fields
    formData.append('applicationId', applicationId);
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('submissionDate', new Date().toISOString());
    formData.append('gdprConsent', data.gdprConsent.toString());
    
    // Optional fields
    if (data.nationality) formData.append('nationality', data.nationality);
    if (data.workAuthorization) formData.append('workAuthorization', data.workAuthorization);
    if (data.visaAssistance) formData.append('visaAssistance', data.visaAssistance);
    if (data.professionalSummary) formData.append('professionalSummary', data.professionalSummary);
    
    // File upload
    if (data.cvFile) {
      formData.append('cvFile', data.cvFile);
    }
    
    // Add metadata
    formData.append('userAgent', navigator.userAgent);
    formData.append('timestamp', Date.now().toString());
    
    return formData;
  }
  
  /**
   * Sends the application data to the backend API
   */
  private static async sendToAPI(formData: FormData): Promise<Response> {
    const response = await fetch(`${this.API_ENDPOINT}/applications/submit`, {
      method: 'POST',
      body: formData,
      headers: {
        // Note: Don't set Content-Type header for FormData, browser will set it automatically with boundary
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      // Add timeout and retry logic if needed
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });
    
    return response;
  }
  
  /**
   * Sends confirmation emails to applicant and internal team
   */
  private static async sendConfirmationEmails(data: EmailNotificationData): Promise<void> {
    try {
      // Send to applicant
      await this.sendApplicantConfirmation(data);
      
      // Send to internal team
      await this.sendInternalNotification(data);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      // Don't throw here as the application was still submitted successfully
    }
  }
  
  /**
   * Sends confirmation email to the applicant
   */
  private static async sendApplicantConfirmation(data: EmailNotificationData): Promise<void> {
    const template = this.getApplicantEmailTemplate(data);
    
    await fetch(`${this.API_ENDPOINT}/emails/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: data.applicantEmail,
        subject: template.subject,
        html: template.html,
        text: template.text,
        type: 'applicant_confirmation'
      })
    });
  }
  
  /**
   * Sends notification email to internal recruitment team
   */
  private static async sendInternalNotification(data: EmailNotificationData): Promise<void> {
    const template = this.getInternalEmailTemplate(data);
    
    await fetch(`${this.API_ENDPOINT}/emails/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'candidates@dtopartners.com',
        cc: 'business@dtopartners.com',
        subject: template.subject,
        html: template.html,
        text: template.text,
        type: 'internal_notification'
      })
    });
  }
  
  /**
   * Generates email template for applicant confirmation
   */
  private static getApplicantEmailTemplate(data: EmailNotificationData): EmailTemplate {
    const subject = `Application Confirmation - ${data.applicationId}`;
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: #daa520; margin: 0; font-size: 28px; font-weight: 300;">DTO Partners</h1>
          <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Strategic Advisory Excellence</p>
        </div>
        
        <div style="padding: 40px 20px; background: #ffffff;">
          <h2 style="color: #1a1a2e; margin: 0 0 20px 0; font-size: 24px;">Thank you for your application!</h2>
          
          <p style="color: #1a1a2e; line-height: 1.6; margin: 0 0 20px 0;">
            Dear ${data.applicantName},
          </p>
          
          <p style="color: #1a1a2e; line-height: 1.6; margin: 0 0 20px 0;">
            We have successfully received your application and appreciate your interest in opportunities with DTO Partners. 
            Your application has been assigned the reference number: <strong style="color: #daa520;">${data.applicationId}</strong>
          </p>
          
          <div style="background: #fdf6e3; border-left: 4px solid #daa520; padding: 20px; margin: 20px 0;">
            <h3 style="color: #1a1a2e; margin: 0 0 10px 0; font-size: 18px;">What happens next?</h3>
            <ul style="color: #1a1a2e; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Our recruitment team will carefully review your application</li>
              <li>If your profile matches our current opportunities, we will contact you within 5-7 business days</li>
              <li>All communications will be handled with complete confidentiality</li>
            </ul>
          </div>
          
          <p style="color: #1a1a2e; line-height: 1.6; margin: 20px 0;">
            Should you have any questions or need to update your information, please reply to this email 
            referencing your application ID: ${data.applicationId}
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://dtopartners.com" style="background: #daa520; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; font-size: 14px; margin: 0;">
            DTO Partners Sp. z o.o. | ul. Jana Heweliusza 11 lok. 811, 80-890 Gdańsk<br>
            Email: candidates@dtopartners.com | Phone: +48 500 785 691
          </p>
        </div>
      </div>
    `;
    
    const text = `
      DTO Partners - Application Confirmation
      
      Dear ${data.applicantName},
      
      Thank you for your application! We have successfully received your submission.
      
      Application Reference: ${data.applicationId}
      Submission Date: ${new Date(data.submissionDate).toLocaleDateString()}
      
      Our recruitment team will review your application and contact you within 5-7 business days if your profile matches our current opportunities.
      
      For any questions, please contact us at candidates@dtopartners.com referencing your application ID.
      
      Best regards,
      DTO Partners Recruitment Team
      
      ---
      DTO Partners Sp. z o.o.
      ul. Jana Heweliusza 11 lok. 811, 80-890 Gdańsk
      Email: candidates@dtopartners.com
      Phone: +48 500 785 691
    `;
    
    return { subject, html, text };
  }
  
  /**
   * Generates email template for internal team notification
   */
  private static getInternalEmailTemplate(data: EmailNotificationData): EmailTemplate {
    const subject = `New Application Received - ${data.applicantName} (${data.applicationId})`;
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a2e; padding: 20px; text-align: center;">
          <h1 style="color: #daa520; margin: 0; font-size: 24px;">New Application Alert</h1>
        </div>
        
        <div style="padding: 30px 20px; background: #ffffff;">
          <h2 style="color: #1a1a2e; margin: 0 0 20px 0;">Application Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; width: 30%;">Application ID:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${data.applicationId}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Applicant Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${data.applicantName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${data.applicantEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Submission Date:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${new Date(data.submissionDate).toLocaleString()}</td>
            </tr>
            ${data.cvFileName ? `
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">CV File:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${data.cvFileName}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin: 20px 0; padding: 15px; background: #daa520; border-radius: 6px;">
            <p style="color: white; margin: 0; text-align: center; font-weight: bold;">
              Review this application in the admin panel
            </p>
          </div>
        </div>
      </div>
    `;
    
    const text = `
      New Application Received
      
      Application ID: ${data.applicationId}
      Applicant: ${data.applicantName}
      Email: ${data.applicantEmail}
      Submitted: ${new Date(data.submissionDate).toLocaleString()}
      ${data.cvFileName ? `CV File: ${data.cvFileName}` : ''}
      
      Please review this application in the admin panel.
    `;
    
    return { subject, html, text };
  }
  
  /**
   * Generates a unique application ID
   */
  private static generateApplicationId(): string {
    const prefix = 'DTO';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${prefix}${timestamp}${random}`;
  }
  
  /**
   * Logs submission for analytics and monitoring
   */
  private static logSubmission(applicationId: string, status: 'success' | 'error', error?: string): void {
    const logData = {
      applicationId,
      status,
      timestamp: new Date().toISOString(),
      error,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // Send to analytics endpoint (non-blocking)
    fetch(`${this.API_ENDPOINT}/analytics/application-submission`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData)
    }).catch(err => {
      console.warn('Analytics logging failed:', err);
    });
  }
  
  /**
   * Email validation helper
   */
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Phone number validation helper
   */
  private static isValidPhone(phone: string): boolean {
    // Remove all non-digit characters for validation
    const cleaned = phone.replace(/\D/g, '');
    // Accept phone numbers between 7 and 15 digits
    return cleaned.length >= 7 && cleaned.length <= 15;
  }
  
  /**
   * Utility method to format file size for display
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  /**
   * Utility method to check file type from filename
   */
  static getFileTypeFromName(filename: string): string {
    const extension = filename.toLowerCase().split('.').pop() || '';
    const typeMap: Record<string, string> = {
      'pdf': 'application/pdf',
      'doc': 'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    };
    return typeMap[extension] || 'unknown';
  }
}
