import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/IndustryCard";
import { TrendingUp, Heart, Shield, Building, ChefHat } from "lucide-react";

// Add custom styles for animations
const styles = `
  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(80px, 80px); }
  }
  
  @keyframes borderFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gridMove {
    animation: gridMove 20s linear infinite;
  }
  
  .animate-borderFlow {
    animation: borderFlow 3s linear infinite;
    background-size: 200% 200%;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const industries = [
    {
      title: "FINANCE",
      subtitle: "Empowering financial growth.",
      description:
        "We provide expert recruitment for asset management, private banking, and corporate banking, ensuring compliance and operational excellence.",
      keyServices: [
        "Asset Management",
        "Wealth Management",
        "Corporate Banking",
      ],
      icon: TrendingUp,
      services: [
        "Asset Management (Funds Management)",
        "Wealth Management and Private Banking (KYC/AML, Legal, Compliance, Lending, Relationship Management, Structuring, Operations, Project Management)",
        "Corporate Banking (KYC/AML, Legal, Compliance, Lending, Relationship Management, Structuring, Operations, Project Management)",
      ],
    },
    {
      title: "HEALTHCARE",
      subtitle: "Caring for communities.",
      description:
        "We connect top talent with hospitals, clinics, and care centers, supporting quality healthcare delivery across regions.",
      keyServices: ["Hospitals", "Private Clinics", "Rehabilitation Centers"],
      icon: Heart,
      services: [
        "Hospitals",
        "Private Clinics",
        "Rehabilitation Centers",
        "Nursing Homes",
      ],
    },
    {
      title: "IT & CYBERSECURITY",
      subtitle: "Securing digital futures.",
      description:
        "Our network delivers skilled professionals in IT support, project management, and cybersecurity to drive innovation and safety.",
      keyServices: ["IT Support", "Cybersecurity", "Software Development"],
      icon: Shield,
      services: [
        "IT Support and Services",
        "Project Management",
        "Database Management",
        "Cybersecurity",
        "Software Development",
      ],
    },
    {
      title: "HOSPITALITY",
      subtitle: "Excellence in service.",
      description:
        "We recruit for hotels and resorts, focusing on guest experience and operational efficiency in the hospitality sector.",
      keyServices: ["Hotels", "Resorts"],
      icon: Building,
      services: ["Hotels and Resorts"],
    },
    {
      title: "FOOD ENGINEERING",
      subtitle: "Quality from field to table.",
      description:
        "We support the food industry with experts in safety management, documentation, and regulatory compliance for global standards.",
      keyServices: ["Food Safety", "Quality Audits", "Training"],
      icon: ChefHat,
      services: [
        "Quality and food safety management",
        "Creation of documentation according to and working with standards ISO 9001, IFS FOODS, BRC, HACCP, GHP/ GMP",
        "Creation of technological projects",
        "Quality audits",
        "Food and safety training in accordance with national and international legislation",
        "Knowledge of national and international food and nutrition safety regulations",
        "Representation of companies before state authorities in the field of, inter alia, food safety control",
        "Preparation of documentation for the food and beverage industry, inter alia for the expansion of business activities, the opening of catering facilities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(218,165,32,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,247,212,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.05),transparent_70%)]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(218,165,32,0.4) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(218,165,32,0.4) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
        animation: 'gridMove 20s linear infinite'
      }} />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#daa520]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-tl from-[#fff7d4]/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-[#daa520]/12 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <section className="relative py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Backdrop overlay for expanded card */}
        {expandedCard !== null && (
          <div
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setExpandedCard(null)}
          >
            <div 
              className="w-full max-w-4xl max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Expanded card content */}
              {(() => {
                const industry = industries[expandedCard];
                const IconComponent = industry.icon;
                return (
                  <div className="relative bg-gradient-to-br from-[#0f0f23]/98 via-[#1a1a2e]/98 to-[#16213e]/98 backdrop-blur-2xl border-3 border-[#daa520]/60 rounded-3xl shadow-2xl shadow-[#daa520]/40 overflow-hidden">
                    {/* Close button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-8 right-8 text-[#daa520] bg-gradient-to-br from-[#0f0f23]/95 to-[#1a1a2e]/95 backdrop-blur-md rounded-full p-4 hover:bg-gradient-to-br hover:from-[#daa520] hover:to-[#fff7d4] hover:text-[#0f0f23] transition-all duration-300 z-50 border-3 border-[#daa520]/60 hover:border-[#fff7d4] shadow-xl hover:shadow-2xl hover:shadow-[#daa520]/50 group/close"
                      onClick={() => setExpandedCard(null)}
                      aria-label="Close"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover/close:rotate-90">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>

                    {/* Enhanced gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/8 via-[#daa520]/4 to-[#fff7d4]/12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#daa520]/5 via-transparent to-[#daa520]/5" />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#daa520]/20 to-transparent rounded-bl-[4rem]" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#fff7d4]/15 to-transparent rounded-tr-[3rem]" />
                    
                    <div className="relative p-10 md:p-12 lg:p-16 z-10">
                      <div className="space-y-10">
                        {/* Header */}
                        <div className="flex items-start space-x-8">
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#fff7d4]/25 to-[#daa520]/20 border-3 border-[#daa520]/50 flex items-center justify-center shadow-2xl shadow-[#daa520]/30 backdrop-blur-sm">
                              <IconComponent className="w-12 h-12 text-[#daa520]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0 space-y-5">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight tracking-wide">
                              {industry.title}
                            </h3>
                            <div className="text-[#daa520] text-xl md:text-2xl font-medium tracking-wide">
                              {industry.subtitle}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="text-[#fff7d4]/95 text-lg md:text-xl leading-relaxed font-light">
                          {industry.description}
                        </div>
                        
                        {/* Detailed Services */}
                        <div className="space-y-6">
                          <h4 className="text-2xl md:text-3xl font-light text-[#daa520] mb-6">Detailed Services</h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {industry.services.map((service, serviceIndex) => (
                              <motion.div
                                key={serviceIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: serviceIndex * 0.08 }}
                                className="flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-r from-[#fff7d4]/10 to-[#daa520]/10 border border-[#daa520]/30 hover:border-[#daa520]/50 transition-all duration-300 backdrop-blur-sm"
                              >
                                <span className="inline-block w-3 h-3 bg-[#daa520] rounded-full mt-2.5 flex-shrink-0" />
                                <span className="text-base md:text-lg text-[#fff7d4]/95 leading-relaxed">
                                  {service}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Header Section */}
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <Badge
              variant="outline"
              className="border-[#daa520]/50 text-[#daa520] bg-[#daa520]/8 backdrop-blur-sm px-8 py-3 text-sm font-bold tracking-[0.2em] uppercase rounded-full shadow-lg shadow-[#daa520]/20 hover:shadow-xl hover:shadow-[#daa520]/30 transition-all duration-300"
            >
              DTO Partners
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl text-white font-extralight mb-8 tracking-tight leading-[0.9] relative"
          >
            Industries
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-3xl md:text-4xl lg:text-5xl text-[#daa520] font-light mt-4 tracking-wide"
            >
              We Serve
            </motion.span>
            
            {/* Decorative accent */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-40 bg-gradient-to-r from-transparent via-[#daa520] to-transparent rounded-full"
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#fff7d4]/85 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light relative"
          >
            Delivering exceptional talent across diverse sectors with 
            <span className="text-[#daa520] font-medium"> precision</span>, 
            <span className="text-[#daa520] font-medium"> expertise</span>, and 
            <span className="text-[#daa520] font-medium"> unwavering commitment</span> to excellence.
          </motion.p>
          
          {/* Additional decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <div className="w-3 h-3 bg-[#daa520] rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-[#daa520]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-1 h-1 bg-[#daa520]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>

        {/* First 4 Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 relative z-10">
          {industries.slice(0, 4).map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="relative group"
              >
                <Card
                  className="group relative bg-gradient-to-br from-[#0f0f23]/95 via-[#1a1a2e]/98 to-[#16213e]/95 backdrop-blur-xl border-2 border-[#daa520]/20 hover:border-[#daa520]/60 transition-all duration-700 hover:shadow-2xl hover:shadow-[#daa520]/25 cursor-pointer overflow-hidden h-full min-h-[480px] flex flex-col transform hover:scale-[1.03] hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setExpandedCard(index)}
                >
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/5 to-[#fff7d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Refined decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#daa520]/12 to-transparent rounded-bl-[4rem] opacity-70" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fff7d4]/8 to-transparent rounded-tr-[3rem]" />
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#daa520]/20 via-transparent to-[#daa520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: 'linear-gradient(45deg, transparent, rgba(218,165,32,0.1), transparent)',
                    animation: hoveredCard === index ? 'borderFlow 3s linear infinite' : 'none'
                  }} />
                  
                  <CardContent className="relative p-10 md:p-12 flex-1 flex flex-col justify-between z-10">
                    <div className="space-y-10">
                      <div className="flex items-start space-x-8">
                        <div className="flex-shrink-0">
                          <motion.div 
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#fff7d4]/20 to-[#daa520]/15 border-2 border-[#daa520]/30 flex items-center justify-center group-hover:border-[#daa520]/60 group-hover:shadow-2xl group-hover:shadow-[#daa520]/30 transition-all duration-700 backdrop-blur-sm relative overflow-hidden"
                          >
                            {/* Icon background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            
                            <IconComponent
                              className={`w-10 h-10 text-[#daa520] transition-all duration-700 relative z-10 ${
                                hoveredCard === index ? "scale-110 text-[#fff7d4]" : ""
                              }`}
                            />
                          </motion.div>
                        </div>
                        <div className="flex-1 min-w-0 space-y-5">
                          <h3 className="text-3xl md:text-4xl font-extralight text-white mb-3 group-hover:text-[#fff7d4] transition-colors duration-700 leading-tight tracking-wide">
                            {industry.title}
                          </h3>
                          <div className="text-[#daa520] text-lg font-medium mb-4 tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                            {industry.subtitle}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        <div className="text-[#fff7d4]/90 text-base md:text-lg leading-relaxed font-light group-hover:text-[#fff7d4] transition-colors duration-500">
                          {industry.description}
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {industry.keyServices.map((service, serviceIndex) => (
                            <motion.span
                              key={service}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                              className="bg-gradient-to-r from-[#fff7d4]/10 to-[#daa520]/10 text-[#daa520] text-sm font-medium px-5 py-3 rounded-full border border-[#daa520]/30 backdrop-blur-sm hover:bg-[#daa520]/20 hover:text-[#fff7d4] hover:border-[#daa520]/50 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg"
                            >
                              {service}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced hover indicator */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-0 translate-x-4">
                      <div className="flex items-center space-x-4 text-[#daa520] text-base font-light">
                        <span className="tracking-wide">Explore Details</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-xl"
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Food Engineering - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <Card
            className="group relative bg-gradient-to-br from-[#0f0f23]/98 via-[#1a1a2e]/98 to-[#16213e]/98 backdrop-blur-xl border-2 border-[#daa520]/25 hover:border-[#daa520]/70 transition-all duration-700 hover:shadow-2xl hover:shadow-[#daa520]/30 cursor-pointer overflow-hidden transform hover:scale-[1.01] hover:-translate-y-1"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setExpandedCard(4)}
          >
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/10 to-[#fff7d4]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#daa520]/8 via-transparent to-[#daa520]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Enhanced decorative corner elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#daa520]/20 to-transparent rounded-br-full opacity-60" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#fff7d4]/15 to-transparent rounded-tl-full" />
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-l from-[#daa520]/10 to-transparent rounded-l-full" />

            <CardContent className="relative p-12 md:p-16 z-10">
              <div className="flex items-start space-x-10">
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#fff7d4]/25 to-[#daa520]/20 border-3 border-[#daa520]/50 flex items-center justify-center group-hover:border-[#daa520] group-hover:shadow-2xl group-hover:shadow-[#daa520]/40 transition-all duration-700 relative overflow-hidden"
                  >
                    {/* Icon background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                    
                    <ChefHat
                      className={`w-14 h-14 text-[#daa520] transition-all duration-700 relative z-10 ${
                        hoveredCard === 4 ? "scale-110 text-[#fff7d4]" : ""
                      }`}
                    />
                  </motion.div>
                </div>

                <div className="flex-1 min-w-0 space-y-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 group-hover:text-[#fff7d4] transition-colors duration-700 leading-tight tracking-wide">
                      {industries[4].title}
                    </h3>
                    <div className="text-[#daa520] text-xl md:text-2xl font-medium mb-6 tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {industries[4].subtitle}
                    </div>
                    <div className="text-[#fff7d4]/90 text-lg md:text-xl leading-relaxed mb-8 max-w-5xl font-light group-hover:text-[#fff7d4] transition-colors duration-500">
                      {industries[4].description}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries[4].services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="flex items-start group/item p-5 rounded-2xl bg-gradient-to-r from-[#fff7d4]/8 to-[#daa520]/8 hover:from-[#fff7d4]/15 hover:to-[#daa520]/15 transition-all duration-500 border border-[#daa520]/25 hover:border-[#daa520]/50 backdrop-blur-sm"
                        style={{
                          animationDelay:
                            hoveredCard === 4 ? `${serviceIndex * 50}ms` : "0ms",
                        }}
                      >
                        <motion.span 
                          whileHover={{ scale: 1.3, rotate: 180 }}
                          transition={{ duration: 0.5 }}
                          className="inline-block w-4 h-4 bg-gradient-to-br from-[#daa520] to-[#fff7d4] rounded-full mt-2 mr-5 flex-shrink-0 group-hover/item:shadow-lg group-hover/item:shadow-[#daa520]/50 transition-all duration-500" 
                        />
                        <span className="text-sm md:text-base text-[#fff7d4]/95 leading-relaxed group-hover/item:text-white transition-colors duration-500 font-medium">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced hover indicator for full-width card */}
              <div className="absolute bottom-8 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-x-0 translate-x-4">
                <div className="flex items-center space-x-4 text-[#daa520] text-lg font-medium">
                  <span className="tracking-wide">Explore our expertise</span>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-2xl"
                  >
                    ✨
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
