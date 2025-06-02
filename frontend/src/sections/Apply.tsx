import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Upload, Info, Building, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { Badge } from "@/components/ui/Badge"
import { Checkbox } from "@/components/ui/Checkbox"
import { cn } from "@/lib/cn"

export default function ApplyForm() {
  //const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // Show success message or redirect
  }

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

  return (
    <section id="Candidates & Employers">
      <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-[#fdf6e3] to-[#f9fafb]">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.08),transparent_60%)]" />
        <div className="relative py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="border-[#daa520] text-[#daa520] mb-6 px-6 py-2 text-sm font-semibold tracking-widest bg-[#fdf6e3]/80 backdrop-blur-sm"
              >
                DTO PARTNERS
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-[#1a1a2e] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect <span className="font-bold text-[#daa520]">with</span> Excellence
            </motion.h1>
            <motion.div 
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.p 
              className="text-[#1a1a2e]/70 max-w-3xl mx-auto text-xl leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your gateway to exceptional opportunities and strategic partnerships. 
              We connect talent with vision and organizations with excellence.
            </motion.p>
          </div>
          {/* Info for Employers and Candidates */}
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
          {/* Contact Information */}
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
          {/* Phone Numbers */}
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
          {/* Company Info */}
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
          {/* Application Form */}
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
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your complete name"
                      required
                      className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 h-12 rounded-xl"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 h-12 rounded-xl"
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="nationality" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                      Nationality
                    </label>
                    <Input
                      id="nationality"
                      placeholder="Your nationality"
                      className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 h-12 rounded-xl"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      placeholder="+00 000 000 000"
                      required
                      className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 h-12 rounded-xl"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="work-auth" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                    Work Authorization Status
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] h-12 rounded-xl">
                      <SelectValue placeholder="Are you authorized to work in the target country?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#daa520]/30 text-[#1a1a2e] rounded-xl">
                      <SelectItem value="yes">Yes, I am authorized</SelectItem>
                      <SelectItem value="no">No, I require authorization</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="assistance" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                    Visa Assistance Requirements
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] h-12 rounded-xl">
                      <SelectValue placeholder="Would you require visa/documentation assistance?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#daa520]/30 text-[#1a1a2e] rounded-xl">
                      <SelectItem value="yes">Yes, I would need assistance</SelectItem>
                      <SelectItem value="no">No assistance required</SelectItem>
                      <SelectItem value="na">Not applicable</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="additional" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                    Professional Summary
                  </label>
                  <Textarea
                    id="additional"
                    placeholder="Share your professional background, key achievements, and career aspirations..."
                    className="bg-white/90 border-[#daa520]/30 focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/20 text-[#1a1a2e] placeholder:text-[#1a1a2e]/50 min-h-[140px] rounded-xl"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="file" className="block text-sm font-semibold text-[#1a1a2e] mb-3">
                    CV/Resume Upload
                  </label>
                  <div className="relative">
                    <Input id="file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                    <div
                      className={cn(
                        "flex items-center justify-between p-6 rounded-xl border-2 border-dashed bg-white/90 transition-all duration-300 hover:bg-white",
                        fileName ? "border-[#daa520] bg-[#fdf6e3]/30" : "border-[#daa520]/30"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", fileName ? "bg-[#daa520]/20" : "bg-[#daa520]/10")}>
                          <Upload className={cn("w-6 h-6", fileName ? "text-[#daa520]" : "text-[#1a1a2e]/40")} />
                        </div>
                        <div>
                          <span className={cn("text-lg font-medium block", fileName ? "text-[#daa520]" : "text-[#1a1a2e]/60")}>
                            {fileName || "Select your CV/Resume"}
                          </span>
                          <span className="text-sm text-[#1a1a2e]/50">
                            Supported formats: PDF, DOC, DOCX (Max 10MB)
                          </span>
                        </div>
                      </div>
                      <label htmlFor="file" className="cursor-pointer bg-[#daa520] hover:bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                        Browse Files
                      </label>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-[#fdf6e3]/50 rounded-xl p-6 border border-[#daa520]/20">
                  <div className="flex items-start space-x-4">
                    <Checkbox
                      id="terms"
                      className="bg-white border-[#daa520]/40 data-[state=checked]:bg-[#daa520] data-[state=checked]:border-[#daa520] mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor="terms" className="text-sm text-[#1a1a2e]/80 leading-relaxed cursor-pointer">
                        <span className="font-semibold text-[#1a1a2e]">Privacy Consent:</span> I consent to the processing of my personal data by DTO Partners Sp. z o.o. 
                        for recruitment purposes. I understand my rights regarding data access, correction, and deletion. 
                        Data controller: DTO Partners Sp. z o.o., ul. Jana Heweliusza 11 lok. 811, 80-890 Gdańsk, NIP 5833531476. 
                        <span className="text-[#daa520] hover:text-[#1a1a2e] cursor-pointer font-medium underline decoration-[#daa520]/30 hover:decoration-[#1a1a2e] ml-1">
                          View our privacy policy
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              </div>
              
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
        </div>
      </div>
    </section>
  )
}
