import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { InputField, TextareaField, SelectField } from './FormField'
import { FileUpload } from './FileUpload'
import { GDPRConsent } from './GDPRConsent'
import { useApplicationForm } from '@/hooks/useApplicationForm'

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const workAuthorizationOptions = [
  { value: 'yes', label: 'Yes, I am authorized' },
  { value: 'no', label: 'No, I require authorization' },
]

const visaAssistanceOptions = [
  { value: 'yes', label: 'Yes, I would need assistance' },
  { value: 'no', label: 'No assistance required' },
  { value: 'na', label: 'Not applicable' },
]

export function ApplicationForm() {
  const {
    formData,
    isSubmitting,
    fileName,
    validationErrors,
    handleInputChange,
    handleFileChange,
    handleSubmit,
  } = useApplicationForm()

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <motion.div
        className="bg-white/95 backdrop-blur-lg border border-[#daa520]/20 rounded-3xl p-10 md:p-12 shadow-2xl"
        variants={itemVariants}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        {/* Form Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 rounded-2xl border border-[#daa520]/30 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-[#daa520]" />
          </div>
          <h2 className="text-4xl font-light text-[#1a1a2e] mb-4">Professional Application</h2>
          <p className="text-[#1a1a2e]/70 max-w-2xl mx-auto leading-relaxed">
            Share your professional journey with us. We handle every application with the utmost care and confidentiality.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField
              id="name"
              label="Full Name"
              required
              value={formData.fullName}
              onChange={(value) => handleInputChange('fullName', value)}
              placeholder="Enter your complete name"
              error={validationErrors.fullName}
            />
            
            <InputField
              id="email"
              label="Email Address"
              type="email"
              required
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder="your.email@example.com"
              error={validationErrors.email}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField
              id="nationality"
              label="Nationality"
              value={formData.nationality || ''}
              onChange={(value) => handleInputChange('nationality', value)}
              placeholder="Your nationality"
            />
            
            <InputField
              id="phone"
              label="Phone Number"
              type="tel"
              required
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              placeholder="+00 000 000 000"
              error={validationErrors.phone}
            />
          </div>
          
          {/* Work Authorization */}
          <SelectField
            id="work-auth"
            label="Work Authorization Status"
            value={formData.workAuthorization}
            onChange={(value) => handleInputChange('workAuthorization', value)}
            placeholder="Are you authorized to work in the target country?"
            options={workAuthorizationOptions}
            error={validationErrors.workAuthorization}
          />
          
          <SelectField
            id="assistance"
            label="Visa Assistance Requirements"
            value={formData.visaAssistance}
            onChange={(value) => handleInputChange('visaAssistance', value)}
            placeholder="Would you require visa/documentation assistance?"
            options={visaAssistanceOptions}
          />
          
          {/* Professional Summary */}
          <TextareaField
            id="additional"
            label="Professional Summary"
            value={formData.professionalSummary || ''}
            onChange={(value) => handleInputChange('professionalSummary', value)}
            placeholder="Share your professional background, key achievements, and career aspirations..."
          />
          
          {/* File Upload */}
          <FileUpload
            id="file"
            label="CV/Resume Upload"
            fileName={fileName}
            onChange={handleFileChange}
            error={validationErrors.cvFile}
          />
          
          {/* GDPR Consent */}
          <GDPRConsent
            id="terms"
            checked={formData.gdprConsent}
            onChange={(checked) => handleInputChange('gdprConsent', checked)}
            error={validationErrors.gdprConsent}
          />
        </div>
        
        {/* Submit Button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#daa520] to-[#daa520]/90 hover:from-[#1a1a2e] hover:to-[#1a1a2e]/90 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl border-0 min-w-[200px] hover:scale-105"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                <span>Processing Application...</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span>Submit Application</span>
                <FileText className="w-5 h-5" />
              </div>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  )
}
