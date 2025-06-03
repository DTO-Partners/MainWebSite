import type React from 'react'
import { motion } from 'framer-motion'
import { Upload, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/cn'

interface FileUploadProps {
  id: string
  label: string
  fileName: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  accept?: string
  maxSize?: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function FileUpload({ 
  id, 
  label, 
  fileName, 
  error, 
  onChange, 
  accept = ".pdf,.doc,.docx",
  maxSize = "Max 10MB"
}: FileUploadProps) {
  return (
    <motion.div variants={itemVariants}>
      <label htmlFor={id} className="block text-sm font-semibold text-[#1a1a2e] mb-3">
        {label}
      </label>
      <div className="relative">
        <Input 
          id={id} 
          type="file" 
          className="hidden" 
          onChange={onChange} 
          accept={accept} 
        />
        <div
          className={cn(
            "flex items-center justify-between p-6 rounded-xl border-2 border-dashed bg-white/90 transition-all duration-300 hover:bg-white",
            fileName ? "border-[#daa520] bg-[#fdf6e3]/30" : "border-[#daa520]/30",
            error && "border-red-500"
          )}
        >
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center", 
              fileName ? "bg-[#daa520]/20" : "bg-[#daa520]/10"
            )}>
              <Upload className={cn(
                "w-6 h-6", 
                fileName ? "text-[#daa520]" : "text-[#1a1a2e]/40"
              )} />
            </div>
            <div>
              <span className={cn(
                "text-lg font-medium block", 
                fileName ? "text-[#daa520]" : "text-[#1a1a2e]/60"
              )}>
                {fileName || "Select your CV/Resume"}
              </span>
              <span className="text-sm text-[#1a1a2e]/50">
                Supported formats: PDF, DOC, DOCX ({maxSize})
              </span>
            </div>
          </div>
          <label 
            htmlFor={id} 
            className="cursor-pointer bg-[#daa520] hover:bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Files
          </label>
        </div>
        {error && (
          <div className="flex items-center gap-2 mt-2 text-red-600">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
