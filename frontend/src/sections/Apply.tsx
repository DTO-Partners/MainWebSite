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
          <div className="text-center mb-16">
            <div className="inline-block">
              <Badge
                variant="outline"
                className="border-[#daa520] text-[#daa520] mb-4 px-4 py-1 text-sm font-medium tracking-wider bg-[#fdf6e3]/60"
              >
                DTO PARTNERS
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-8 tracking-tight">Apply</h1>
            <div className="w-24 h-1 bg-[#daa520] mx-auto rounded-full mb-8" />
            <p className="text-[#1a1a2e]/80 max-w-2xl mx-auto text-lg">
              If you have any questions or require further assistance, please contact us.
            </p>
          </div>
          {/* Info for Employers and Candidates */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Info for Employers */}
            <div className="flex-1 bg-white border border-[#daa520]/30 rounded-2xl p-8 shadow-lg flex flex-col items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-[#daa520] text-[#daa520] bg-[#fdf6e3]/60 px-3 py-1 text-sm font-semibold">For Employers</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Partner with DTO PARTNERS</h3>
                <p className="text-[#1a1a2e]/90 mb-4 text-sm">
                  For clients interested in our specialized recruitment services, we invite you to reach out to us directly at
                  <span className="text-[#daa520] font-semibold"> business@dtopartners.com</span>.
                </p>
                <p className="text-[#1a1a2e]/80 text-sm mb-2">
                  Our dedicated team is committed to understanding your unique hiring needs and delivering tailored solutions with efficiency and discretion. We look forward to partnering with you to secure top-tier talent that drives your organization’s success.
                </p>
              </div>
            </div>
            {/* Info for Candidates */}
            <div className="flex-1 bg-white border border-[#daa520]/30 rounded-2xl p-8 shadow-lg flex flex-col items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-[#daa520] text-[#daa520] bg-[#fdf6e3]/60 px-3 py-1 text-sm font-semibold">For Candidates</Badge>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Your Career, Our Priority</h3>
                <p className="text-[#1a1a2e]/90 mb-4 text-sm">
                  Job openings are by policy not publicly disclosed. We proactively connect with candidates through our established network and direct outreach, ensuring a personalized service depending on client needs.
                </p>
                <p className="text-[#1a1a2e]/80 text-sm mb-2">
                  At DTO Partners we prioritize data protection and confidentiality. When contacting a candidate about a client mandate, we require your explicit consent to share your CV, in full compliance with GDPR and all applicable data protection legislation.
                </p>
                <p className="text-[#1a1a2e]/80 text-sm">
                  Candidates must also complete the form below with additional details for best profiling.
                </p>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              className="bg-white backdrop-blur-sm border border-[#daa520]/20 rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#daa520]" />
              </div>
              <h3 className="text-[#1a1a2e] font-medium mb-2">For candidates</h3>
              <p className="text-[#1a1a2e] text-sm mb-3">candidates@dtopartners.com</p>
            </motion.div>
            <motion.div
              className="bg-white backdrop-blur-sm border border-[#daa520]/20 rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center mb-4">
                <Building className="w-5 h-5 text-[#daa520]" />
              </div>
              <h3 className="text-[#1a1a2e] font-medium mb-2">For customers and commercial inquiries</h3>
              <p className="text-[#1a1a2e] text-sm mb-3">business@dtopartners.com</p>
            </motion.div>
            <motion.div
              className="bg-white backdrop-blur-sm border border-[#daa520]/20 rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center mb-4">
                <Info className="w-5 h-5 text-[#daa520]" />
              </div>
              <h3 className="text-[#1a1a2e] font-medium mb-2">For general questions</h3>
              <p className="text-[#1a1a2e] text-sm mb-3">info@dtopartners.com</p>
            </motion.div>
          </div>
          {/* Phone Numbers */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#daa520]" />
              </div>
              <span className="text-black">+48 500 785 691</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#daa520]/10 border border-[#daa520]/30 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#daa520]" />
              </div>
              <span className="text-black">+48 573 729 525</span>
            </motion.div>
          </div>
          {/* Company Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16 text-sm text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#daa520]/70" />
              <span>KRS 0001158155</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#daa520]/70" />
              <span>REGON 540998109</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#daa520]/70" />
              <span>NIP 5833531</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#daa520]/70" />
              <span>KRAZ 33616</span>
            </div>
          </motion.div>
          {/* Application Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-8xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm border border-[#daa520]/20 rounded-2xl p-8 md:p-10 shadow-xl"
              variants={itemVariants}
            >
              <h2 className="text-3xl text-center font-semibold text-[#1a1a2e] mb-8">Application Form</h2>
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      Name and surname*
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                      className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e] placeholder:text-[#1a1a2e]/40"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      E-mail*
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e] placeholder:text-[#1a1a2e]/40"
                    />
                  </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="nationality" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      Nationality
                    </label>
                    <Input
                      id="nationality"
                      placeholder="Your nationality"
                      className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e] placeholder:text-[#1a1a2e]/40"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                      Phone*
                    </label>
                    <Input
                      id="phone"
                      placeholder="+00 000 000 000"
                      required
                      className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e] placeholder:text-[#1a1a2e]/40"
                    />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="work-auth" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                    Are you currently legally authorized to work in the country where the job is located?
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#daa520]/30 text-[#1a1a2e]">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="assistance" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                    If not, would you require assistance from the hiring company to obtain the necessary legal
                    documentation/visa for employment?
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#daa520]/30 text-[#1a1a2e]">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="na">Not applicable</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="additional" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    id="additional"
                    placeholder="Tell us more about yourself and your experience..."
                    className="bg-white border-[#daa520]/30 focus:border-[#15162c] focus:ring-2 focus:ring-[#15162c] text-[#1a1a2e] placeholder:text-[#1a1a2e]/40 min-h-[120px]"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="file" className="block text-sm font-medium text-[#1a1a2e] mb-2">
                    Upload CV/Resume
                  </label>
                  <div className="relative">
                    <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
                    <div
                      className={cn(
                        "flex items-center justify-between px-4 py-2 rounded-md border border-dashed bg-white transition-colors",
                        fileName ? "border-[#15162c]" : "border-[#daa520]/20"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Upload className={cn("w-5 h-5", fileName ? "text-[#15162c]" : "text-[#1a1a2e]/40")}/>
                        <span className={cn("text-sm", fileName ? "text-[#15162c]" : "text-[#1a1a2e]/40")}>{fileName || "Choose file (PDF, DOC, DOCX)"}</span>
                      </div>
                      <label htmlFor="file" className="cursor-pointer text-sm text-[#daa520] hover:text-[#15162c]">
                        Browse
                      </label>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start space-x-3 pt-4">
                  <Checkbox
                    id="terms"
                    className="bg-white border-[#daa520]/30 data-[state=checked]:bg-white data-[state=checked]:border-[#daa520]"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="terms" className="text-sm text-[#1a1a2e]/80 leading-relaxed">
                      I consent to the processing of my personal data by DTO Partners Sp. z o.o. for the purpose of
                      responding to and handling the submitted inquiry. I acknowledge that I have the right to access my
                      data, the possibility of correcting it and requesting that it no longer be processed. The data
                      administrator is DTO Partners Sp. z o.o. ul. Jana Heweliusza 11 lok. 811 80-890 Gdańsk, NIP
                      5833531476. Information on the processing of your personal data can be found in our {" "}
                      <span className="text-[#daa520] hover:text-[#1a1a2e] cursor-pointer">privacy policy</span>.
                    </label>
                  </div>
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="mt-10">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#daa520] hover:bg-[#1a1a2e] text-[#1a1a2e] py-6 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#daa520]/20 border border-[#daa520]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin w-5 h-5 border-2 border-[#15162c] border-t-transparent rounded-full" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "SEND APPLICATION"
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
