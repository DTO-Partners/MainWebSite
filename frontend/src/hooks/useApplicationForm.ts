import { useState } from 'react'
import { ApplicationService } from '@/lib/applicationService'
import type { ApplicationFormData, ApplicationSubmissionResult } from '@/types/application'

export function useApplicationForm() {
  // Form state
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    nationality: '',
    phone: '',
    workAuthorization: '',
    visaAssistance: '',
    professionalSummary: '',
    cvFile: undefined,
    gdprConsent: false,
  })
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState('')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [submissionResult, setSubmissionResult] = useState<ApplicationSubmissionResult | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  // Handle input changes
  const handleInputChange = (field: keyof ApplicationFormData, value: string | boolean | File) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const { [field]: _, ...rest } = prev
        return rest
      })
    }
  }

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFileName(file.name)
      handleInputChange('cvFile', file)
    }
  }

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      nationality: '',
      phone: '',
      workAuthorization: '',
      visaAssistance: '',
      professionalSummary: '',
      cvFile: undefined,
      gdprConsent: false,
    })
    setFileName('')
    setValidationErrors({})
    setSubmissionResult(null)
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setValidationErrors({})
    setSubmissionResult(null)
    
    try {
      // Validate form
      const validation = ApplicationService.validateApplication(formData)
      if (!validation.isValid) {
        setValidationErrors(validation.errors)
        setIsSubmitting(false)
        return
      }
      
      // Submit application
      const result = await ApplicationService.submitApplication(formData)
      setSubmissionResult(result)
      
      if (result.success) {
        setShowSuccess(true)
        resetForm()
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmissionResult({
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    // State
    formData,
    isSubmitting,
    fileName,
    validationErrors,
    submissionResult,
    showSuccess,
    
    // Actions
    handleInputChange,
    handleFileChange,
    handleSubmit,
    resetForm,
    setShowSuccess,
  }
}
