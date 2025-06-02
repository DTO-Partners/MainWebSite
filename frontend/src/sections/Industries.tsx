import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/IndustryCard";
import { TrendingUp, Heart, Shield, Building, ChefHat } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-[#15162c] via-[#1a1a2e] to-[#243046]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.08),transparent_60%)]" />

      <section className="relative py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Overlay for expanded card */}
        {expandedCard !== null && (
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setExpandedCard(null)}
          />
        )}
        <div className="text-center mb-16 relative z-50">
          <div className="inline-block">
            <Badge
              variant="outline"
              className="border-[#daa520] text-[#daa520] mb-4 px-4 py-1 text-sm font-medium tracking-wider"
            >
              DTO PARTNERS
            </Badge>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl text-white font-extrabold mb-2 tracking-tight"
          >
            Industries
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="origin-left h-[3px] w-24 bg-gradient-to-r from-[#daa520] to-[#fff7d4] mx-auto rounded mb-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 relative z-0">
          {industries.slice(0, 4).map((industry, index) => {
            const IconComponent = industry.icon;
            const isExpanded = expandedCard === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`transition-all duration-500 ${
                  isExpanded
                    ? "fixed z-50 left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 scale-105"
                    : "relative"
                }`}
                style={isExpanded ? { pointerEvents: "auto" } : {}}
              >
                <Card
                  className={`group relative bg-gradient-to-br from-[#15162c] via-[#1a1a2e] to-[#243046] backdrop-blur-sm border border-[#daa520]/20 hover:border-[#daa520]/60 transition-all duration-700 hover:shadow-2xl hover:shadow-[#daa520]/25 cursor-pointer overflow-hidden ${
                    isExpanded ? "ring-4 ring-[#daa520] scale-105" : ""
                  } h-full min-h-[380px] flex flex-col transform hover:scale-[1.02]`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setExpandedCard(index)}
                  style={isExpanded ? { pointerEvents: "auto" } : {}}
                >
                  {/* Animated background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/5 to-[#fff7d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Geometric decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#daa520]/20 to-transparent rounded-bl-full opacity-60" />
                  
                  <CardContent className="relative p-8 flex-1 flex flex-col justify-between z-10">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <motion.div 
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#fff7d4]/30 to-[#daa520]/20 border-2 border-[#daa520]/40 flex items-center justify-center group-hover:border-[#daa520] group-hover:shadow-lg group-hover:shadow-[#daa520]/30 transition-all duration-500"
                          >
                            <IconComponent
                              className={`w-10 h-10 text-[#daa520] transition-all duration-500 ${
                                hoveredCard === index ? "scale-110 text-[#fff7d4]" : ""
                              }`}
                            />
                          </motion.div>
                        </div>
                        <div className="flex-1 min-w-0 space-y-3">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#fff7d4] transition-colors duration-500 leading-tight">
                            {industry.title}
                          </h3>
                          <div className="text-[#daa520] text-base font-semibold mb-3 tracking-wide">
                            {industry.subtitle}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-[#fff7d4]/90 text-sm leading-relaxed">
                          {industry.description}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {industry.keyServices.map((service, serviceIndex) => (
                            <motion.span
                              key={service}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                              className="bg-gradient-to-r from-[#fff7d4]/15 to-[#daa520]/15 text-[#daa520] text-xs px-4 py-2 rounded-full border border-[#daa520]/40 backdrop-blur-sm hover:bg-[#daa520]/20 hover:text-[#fff7d4] transition-all duration-300 cursor-default"
                            >
                              {service}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center space-x-2 text-[#daa520] text-sm">
                        <span>Click to expand</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>

                    {isExpanded && (
                      <button
                        className="absolute top-6 right-6 text-[#daa520] bg-[#15162c]/90 backdrop-blur-sm rounded-full p-3 hover:bg-[#daa520] hover:text-[#15162c] transition-all duration-300 z-50 border-2 border-[#daa520] shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(null);
                        }}
                        aria-label="Close"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Food Engineering - Full Width Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card
            className="group relative bg-gradient-to-br from-[#15162c] via-[#1a1a2e] to-[#243046] backdrop-blur-sm border border-[#daa520]/20 hover:border-[#daa520]/60 transition-all duration-700 hover:shadow-2xl hover:shadow-[#daa520]/25 cursor-pointer overflow-hidden transform hover:scale-[1.01]"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/8 to-[#fff7d4]/12 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#daa520]/10 via-transparent to-[#daa520]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#daa520]/15 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#fff7d4]/15 to-transparent rounded-tl-full" />

            <CardContent className="relative p-10 z-10">
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#fff7d4]/30 to-[#daa520]/20 border-2 border-[#daa520]/40 flex items-center justify-center group-hover:border-[#daa520] group-hover:shadow-xl group-hover:shadow-[#daa520]/30 transition-all duration-500"
                  >
                    <ChefHat
                      className={`w-12 h-12 text-[#daa520] transition-all duration-500 ${
                        hoveredCard === 4 ? "scale-110 text-[#fff7d4]" : ""
                      }`}
                    />
                  </motion.div>
                </div>

                <div className="flex-1 min-w-0 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#fff7d4] transition-colors duration-500 leading-tight">
                      {industries[4].title}
                    </h3>
                    <div className="text-[#daa520] text-lg font-semibold mb-4 tracking-wide">
                      {industries[4].subtitle}
                    </div>
                    <div className="text-[#fff7d4]/90 text-base leading-relaxed mb-6 max-w-4xl">
                      {industries[4].description}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industries[4].services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        className="flex items-start group/item p-4 rounded-xl bg-gradient-to-r from-[#fff7d4]/5 to-[#daa520]/5 hover:from-[#fff7d4]/10 hover:to-[#daa520]/10 transition-all duration-300 border border-[#daa520]/20 hover:border-[#daa520]/40"
                        style={{
                          animationDelay:
                            hoveredCard === 4 ? `${serviceIndex * 30}ms` : "0ms",
                        }}
                      >
                        <motion.span 
                          whileHover={{ scale: 1.2 }}
                          className="inline-block w-3 h-3 bg-gradient-to-br from-[#daa520] to-[#fff7d4] rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:shadow-lg transition-all duration-300" 
                        />
                        <span className="text-sm text-[#fff7d4] leading-relaxed group-hover/item:text-white transition-colors duration-300 font-medium">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover indicator for full-width card */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center space-x-2 text-[#daa520] text-sm font-medium">
                  <span>Explore our expertise</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
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
