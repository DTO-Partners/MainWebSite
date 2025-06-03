import { motion } from 'framer-motion'
import { Mail, Phone, Building, Info, FileText, Shield } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

export function InfoForEmployersAndCandidates() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-20">
      {/* Info for Employers */}
      <motion.div 
        className="flex-1 bg-white/95 backdrop-blur-lg border border-[#daa520]/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:border-[#daa520]/40"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-[#daa520] rounded-full animate-pulse" />
            <Badge variant="outline" className="border-[#daa520] text-[#daa520] bg-[#fdf6e3]/80 px-4 py-2 text-sm font-semibold tracking-wide">
              For Employers
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#daa520] transition-colors duration-300">
            Strategic Partnership Solutions
          </h3>
          <div className="space-y-4">
            <p className="text-[#1a1a2e]/90 leading-relaxed">
              Partner with DTO PARTNERS for specialized recruitment services that redefine excellence. 
              Contact our dedicated team at{" "}
              <a href="mailto:business@dtopartners.com" className="text-[#daa520] font-semibold hover:text-[#1a1a2e] transition-colors duration-300 underline decoration-[#daa520]/30 hover:decoration-[#1a1a2e]">
                business@dtopartners.com
              </a>
            </p>
            <p className="text-[#1a1a2e]/80 leading-relaxed">
              We deliver tailored solutions with unmatched efficiency and absolute discretion, 
              securing top-tier talent that drives transformational success for your organization.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Info for Candidates */}
      <motion.div 
        className="flex-1 bg-white/95 backdrop-blur-lg border border-[#daa520]/20 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:border-[#daa520]/40"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-[#daa520] rounded-full animate-pulse" />
            <Badge variant="outline" className="border-[#daa520] text-[#daa520] bg-[#fdf6e3]/80 px-4 py-2 text-sm font-semibold tracking-wide">
              For Candidates
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#daa520] transition-colors duration-300">
            Your Career, Our Commitment
          </h3>
          <div className="space-y-4">
            <p className="text-[#1a1a2e]/90 leading-relaxed">
              Experience a personalized approach to career advancement. Our exclusive opportunities 
              are curated through our prestigious network and strategic outreach, ensuring perfect alignment 
              with your aspirations.
            </p>
            <p className="text-[#1a1a2e]/80 leading-relaxed">
              Your privacy is paramount. We operate with full GDPR compliance and require explicit consent 
              before sharing your profile, maintaining the highest standards of confidentiality and data protection.
            </p>
            <p className="text-[#1a1a2e]/80 leading-relaxed font-medium">
              Complete our comprehensive profiling form below to unlock exclusive opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ContactInformation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <motion.div
        className="bg-white/95 backdrop-blur-lg border border-[#daa520]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 group hover:border-[#daa520]/40 hover:-translate-y-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Mail className="w-7 h-7 text-[#daa520]" />
        </div>
        <h3 className="text-[#1a1a2e] font-semibold mb-3 text-lg">Candidates</h3>
        <a href="mailto:candidates@dtopartners.com" className="text-[#1a1a2e]/80 hover:text-[#daa520] transition-colors duration-300 font-medium">
          candidates@dtopartners.com
        </a>
      </motion.div>
      
      <motion.div
        className="bg-white/95 backdrop-blur-lg border border-[#daa520]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 group hover:border-[#daa520]/40 hover:-translate-y-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Building className="w-7 h-7 text-[#daa520]" />
        </div>
        <h3 className="text-[#1a1a2e] font-semibold mb-3 text-lg">Business Partnerships</h3>
        <a href="mailto:business@dtopartners.com" className="text-[#1a1a2e]/80 hover:text-[#daa520] transition-colors duration-300 font-medium">
          business@dtopartners.com
        </a>
      </motion.div>
      
      <motion.div
        className="bg-white/95 backdrop-blur-lg border border-[#daa520]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 group hover:border-[#daa520]/40 hover:-translate-y-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Info className="w-7 h-7 text-[#daa520]" />
        </div>
        <h3 className="text-[#1a1a2e] font-semibold mb-3 text-lg">General Inquiries</h3>
        <a href="mailto:info@dtopartners.com" className="text-[#1a1a2e]/80 hover:text-[#daa520] transition-colors duration-300 font-medium">
          info@dtopartners.com
        </a>
      </motion.div>
    </div>
  )
}

export function PhoneNumbers() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
      <motion.div
        className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#daa520]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center">
          <Phone className="w-5 h-5 text-[#daa520]" />
        </div>
        <a href="tel:+48500785691" className="text-[#1a1a2e] font-medium hover:text-[#daa520] transition-colors duration-300">
          +48 500 785 691
        </a>
      </motion.div>
      
      <motion.div
        className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#daa520]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#daa520]/20 to-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center">
          <Phone className="w-5 h-5 text-[#daa520]" />
        </div>
        <a href="tel:+48573729525" className="text-[#1a1a2e] font-medium hover:text-[#daa520] transition-colors duration-300">
          +48 573 729 525
        </a>
      </motion.div>
    </div>
  )
}

export function CompanyInfo() {
  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-20 border border-[#daa520]/20 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
    >
      <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#1a1a2e]/80">
        <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-2">
          <FileText className="w-4 h-4 text-[#daa520]" />
          <span className="font-medium">KRS 0001158155</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-2">
          <FileText className="w-4 h-4 text-[#daa520]" />
          <span className="font-medium">REGON 540998109</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-2">
          <FileText className="w-4 h-4 text-[#daa520]" />
          <span className="font-medium">NIP 5833531476</span>
        </div>
        <div className="flex items-center gap-3 bg-white/50 rounded-lg px-4 py-2">
          <Shield className="w-4 h-4 text-[#daa520]" />
          <span className="font-medium">KRAZ 33616</span>
        </div>
      </div>
    </motion.div>
  )
}
