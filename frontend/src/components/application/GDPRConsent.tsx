import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { Checkbox } from '@/components/ui/Checkbox'
import { cn } from '@/lib/cn'

interface GDPRConsentProps {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function GDPRConsent({ id, checked, onChange, error }: GDPRConsentProps) {
  return (
    <motion.div 
      variants={itemVariants} 
      className="bg-[#fdf6e3]/50 rounded-xl p-6 border border-[#daa520]/20"
    >
      <div className="flex items-start space-x-4">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(checked) => onChange(!!checked)}
          className={cn(
            "bg-white border-[#daa520]/40 data-[state=checked]:bg-[#daa520] data-[state=checked]:border-[#daa520] mt-1",
            error && "border-red-500"
          )}
        />
        <div className="flex-1">
          <label htmlFor={id} className="text-sm text-[#1a1a2e]/80 leading-relaxed cursor-pointer">
            <span className="font-semibold text-[#1a1a2e]">Privacy Consent:</span> I consent to the processing of my personal data by DTO Partners Sp. z o.o. 
            for recruitment purposes. I understand my rights regarding data access, correction, and deletion. 
            Data controller: DTO Partners Sp. z o.o., ul. Jana Heweliusza 11 lok. 811, 80-890 Gdańsk, NIP 5833531476. 
            <span className="text-[#daa520] hover:text-[#1a1a2e] cursor-pointer font-medium underline decoration-[#daa520]/30 hover:decoration-[#1a1a2e] ml-1">
              View our privacy policy
            </span>
          </label>
          {error && (
            <div className="flex items-center gap-2 mt-2 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
