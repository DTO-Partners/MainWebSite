import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { ApplicationSubmissionResult } from '@/types/application'

interface StatusMessagesProps {
  submissionResult: ApplicationSubmissionResult | null
  showSuccess: boolean
  onDismissSuccess: () => void
}

export function StatusMessages({ submissionResult, showSuccess, onDismissSuccess }: StatusMessagesProps) {
  if (showSuccess && submissionResult?.success) {
    return (
      <motion.div
        className="max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 text-center shadow-xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted Successfully!</h3>
          <p className="text-green-700 mb-4">{submissionResult.message}</p>
          {submissionResult.applicationId && (
            <p className="text-sm text-green-600">
              Reference ID: <span className="font-mono font-semibold">{submissionResult.applicationId}</span>
            </p>
          )}
          <Button
            onClick={onDismissSuccess}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white"
          >
            Submit Another Application
          </Button>
        </div>
      </motion.div>
    )
  }

  if (submissionResult && !submissionResult.success) {
    return (
      <motion.div
        className="max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 text-center shadow-xl">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-red-800 mb-2">Submission Failed</h3>
          <p className="text-red-700">{submissionResult.message}</p>
        </div>
      </motion.div>
    )
  }

  return null
}
