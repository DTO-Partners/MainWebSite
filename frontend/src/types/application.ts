// Application submission types and interfaces
export interface ApplicationFormData {
  // Personal Information
  fullName: string;
  email: string;
  nationality?: string;
  phone: string;
  
  // Work Authorization
  workAuthorization: 'yes' | 'no' | '';
  visaAssistance: 'yes' | 'no' | 'na' | '';
  
  // Professional Information
  professionalSummary?: string;
  
  // File Upload
  cvFile?: File;
  
  // Consent
  gdprConsent: boolean;
}

export interface ApplicationSubmissionResult {
  success: boolean;
  message: string;
  applicationId?: string;
  errors?: Record<string, string>;
}

export interface EmailNotificationData {
  applicantName: string;
  applicantEmail: string;
  applicationId: string;
  submissionDate: string;
  cvFileName?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Email templates for different scenarios
export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface ApplicationMetrics {
  submissionCount: number;
  successRate: number;
  averageProcessingTime: number;
  commonErrors: Record<string, number>;
}
