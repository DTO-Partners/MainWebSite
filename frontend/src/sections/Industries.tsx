"use client"

import { Card, CardContent } from "@/components/ui/IndustryCard"
import { Badge } from "@/components/ui/Badge"
import { TrendingUp, Heart, Shield, Building, ChefHat } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const industries = [
    {
      title: "FINANCE",
      icon: TrendingUp,
      services: [
        "Asset Management (Funds Management)",
        "Wealth Management and Private Banking (KYC/AML, Legal, Compliance, Lending, Relationship Management, Structuring, Operations, Project Management)",
        "Corporate Banking (KYC/AML, Legal, Compliance, Lending, Relationship Management, Structuring, Operations, Project Management)",
      ],
    },
    {
      title: "HEALTHCARE",
      icon: Heart,
      services: ["Hospitals", "Private Clinics", "Rehabilitation Centers", "Nursing Homes"],
    },
    {
      title: "IT & CYBERSECURITY",
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
      icon: Building,
      services: ["Hotels and Resorts"],
    },
    {
      title: "FOOD ENGINEERING",
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#15162c] via-[#1a1a2e] to-[#243046]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.08),transparent_60%)]" />

      <section className="relative py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Overlay for expanded card */}
        {expandedCard !== null && (
          <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center" onClick={() => setExpandedCard(null)} />
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Industries</h1>
          <div className="w-24 h-1 bg-[#daa520] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 relative z-50">
          {industries.slice(0, 4).map((industry, index) => {
            const IconComponent = industry.icon
            const isExpanded = expandedCard === index
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${isExpanded ? "fixed z-50 left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 scale-105" : "relative"}`}
                style={isExpanded ? { pointerEvents: 'auto' } : {}}
              >
                <Card
                  className={`group bg-[#15162c]/80 backdrop-blur-sm border-[#daa520]/30 hover:border-[#daa520] transition-all duration-500 hover:shadow-2xl hover:shadow-[#daa520]/20 cursor-pointer overflow-hidden ${isExpanded ? "ring-4 ring-[#daa520] scale-105" : ""} h-full min-h-[340px] flex flex-col`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setExpandedCard(index)}
                  style={isExpanded ? { pointerEvents: 'auto' } : {}}
                >
                  <CardContent className="relative p-8 flex-1 flex flex-col justify-between">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-[#fff7d4]/20 border border-[#daa520]/30 flex items-center justify-center group-hover:bg-[#daa520]/20 group-hover:border-[#daa520]/50 transition-all duration-300">
                          <IconComponent
                            className={`w-8 h-8 text-[#daa520] transition-all duration-300 ${
                              hoveredCard === index ? "scale-110" : ""
                            }`}
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#daa520] transition-colors duration-300">
                          {industry.title}
                        </h3>
                        <ul className="space-y-3">
                          {industry.services.map((service, serviceIndex) => (
                            <li
                              key={serviceIndex}
                              className="flex items-start group/item"
                            >
                              <span className="inline-block w-2 h-2 bg-[#daa520] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-[#fff7d4] transition-colors duration-300" />
                              <span className="text-sm text-[#fff7d4] leading-relaxed group-hover:text-white transition-colors duration-300">
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {isExpanded && (
                      <button
                        className="absolute top-4 right-4 text-[#daa520] bg-[#15162c] rounded-full p-2 hover:bg-[#daa520] hover:text-[#15162c] transition z-50 border border-[#daa520]"
                        onClick={e => { e.stopPropagation(); setExpandedCard(null); }}
                        aria-label="Close"
                      >
                        ×
                      </button>
                    )}
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Food Engineering - Full Width Card */}
        <Card
          className="group relative bg-[#15162c]/80 backdrop-blur-sm border-[#daa520]/30 hover:border-[#daa520] transition-all duration-500 hover:shadow-2xl hover:shadow-[#daa520]/20 cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/10 via-transparent to-[#fff7d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#daa520]/20 via-[#fff7d4]/5 to-[#daa520]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

          <CardContent className="relative p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-[#fff7d4]/20 border border-[#daa520]/30 flex items-center justify-center group-hover:bg-[#daa520]/20 group-hover:border-[#daa520]/50 transition-all duration-300">
                  <ChefHat
                    className={`w-8 h-8 text-[#daa520] transition-all duration-300 ${
                      hoveredCard === 4 ? "scale-110" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#daa520] transition-colors duration-300">
                  {industries[4].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industries[4].services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-start group/item"
                      style={{
                        animationDelay: hoveredCard === 4 ? `${serviceIndex * 30}ms` : "0ms",
                      }}
                    >
                      <span className="inline-block w-2 h-2 bg-[#daa520] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-[#fff7d4] transition-colors duration-300" />
                      <span className="text-sm text-[#fff7d4] leading-relaxed group-hover:text-white transition-colors duration-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
