import type React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { cn } from '@/lib/cn'

interface FormFieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  children?: React.ReactNode
  className?: string
}

interface InputFieldProps extends FormFieldProps {
  type?: 'text' | 'email' | 'tel'
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

interface TextareaFieldProps extends FormFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
}

interface SelectFieldProps extends FormFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  options: Array<{ value: string; label: string }>
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function FormFieldWrapper({ id, label, required, error, children, className }: FormFieldProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-[#1a1a2e] mb-3">
        {label} {required && '*'}
      </label>
      {children}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </motion.div>
  )
}

export function InputField({ id, label, required, error, type = 'text', value, onChange, placeholder }: InputFieldProps) {
  return (
    <FormFieldWrapper id={id} label={label} required={required} error={error}>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={cn(
          "bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 h-12 rounded-xl",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        )}
      />
    </FormFieldWrapper>
  )
}

export function TextareaField({ id, label, required, error, value, onChange, placeholder, rows = 6 }: TextareaFieldProps) {
  return (
    <FormFieldWrapper id={id} label={label} required={required} error={error}>
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 min-h-[140px] rounded-xl",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        )}
      />
    </FormFieldWrapper>
  )
}

export function SelectField({ id, label, required, error, value, onChange, placeholder, options }: SelectFieldProps) {
  return (
    <FormFieldWrapper id={id} label={label} required={required} error={error}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={cn(
          "bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] h-12 rounded-xl",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
        )}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white border-[#daa520]/30 text-[#1a1a2e] rounded-xl">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormFieldWrapper>
  )
}
