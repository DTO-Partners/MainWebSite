import emailjs from '@emailjs/browser';
import type { 
  ApplicationFormData, 
  ApplicationSubmissionResult, 
  ValidationResult
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
  
  // EmailJS Configuration
  private static readonly EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
  private static readonly EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
  private static readonly EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
  
  private static readonly API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT ?? 'https://api.dtopartners.com';
  
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
        errors.cvFile = fileValidation.error ?? 'Invalid file';
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
   * Submits the application using EmailJS
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
      
      // Prepare email data for EmailJS
      const emailData = this.prepareEmailData(data, applicationId);
      
      // Send email using EmailJS
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        emailData,
        this.EMAILJS_PUBLIC_KEY
      );
      
      // Log successful submission
      this.logSubmission(applicationId, 'success');
      
      return {
        success: true,
        message: 'Application submitted successfully! We will review your application and get back to you soon.',
        applicationId
      };
      
    } catch (error) {
      console.error('Application submission error:', error);
      
      // Log failed submission
      this.logSubmission('unknown', 'error', error instanceof Error ? error.message : 'Unknown error');
      
      return {
        success: false,
        message: 'We apologize, but there was an error submitting your application. Please try again or contact us directly at candidates@dtopartners.com.',
        errors: { general: error instanceof Error ? error.message : 'Submission failed' }
      };
    }
  }
  
  /**
   * Prepares email data for EmailJS template
   */
  private static prepareEmailData(data: ApplicationFormData, applicationId: string) {
    const submissionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return {
      // Email routing
      to_email: 'candidates@dtopartners.com',
      
      // Application details
      application_id: applicationId,
      submission_date: submissionDate,
      
      // Applicant information
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      nationality: data.nationality ?? 'Not specified',
      
      // Work authorization
      work_authorization: data.workAuthorization || 'Not specified',
      visa_assistance: data.visaAssistance || 'Not specified',
      
      // Professional summary
      professional_summary: data.professionalSummary ?? 'Not provided',
      
      // File information
      cv_file_name: data.cvFile?.name ?? 'No file uploaded',
      cv_file_size: data.cvFile ? `${(data.cvFile.size / 1024 / 1024).toFixed(2)} MB` : 'N/A',
      
      // GDPR consent
      gdpr_consent: data.gdprConsent ? 'Yes' : 'No',
      
      // Additional metadata
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Email validation helper
   */
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Phone validation helper
   */
  private static isValidPhone(phone: string): boolean {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 7 && cleanPhone.length <= 15;
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
    const extension = filename.toLowerCase().split('.').pop() ?? '';
    const typeMap: Record<string, string> = {
      'pdf': 'application/pdf',
      'doc': 'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    };
    return typeMap[extension] || 'unknown';
  }
}
