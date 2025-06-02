import { useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { 
    country: "pl", 
    value: 1, 
    color: "#daa520", 
    name: "Poland",
    description: "Our headquarters and primary operational base",
    industries: ["Finance", "IT", "Healthcare"],
    established: "2025"
  },
  { 
    country: "de", 
    value: 1, 
    color: "#3e5c76", 
    name: "Germany",
    description: "Strategic partnership for Central European expansion",
    industries: ["Engineering", "Manufacturing", "Finance"],
    established: "2025"
  },
  { 
    country: "lu", 
    value: 1, 
    color: "#008080", 
    name: "Luxembourg",
    description: "Financial services and investment management hub",
    industries: ["Finance", "Investment", "Banking"],
    established: "2025"
  },
  { 
    country: "ie", 
    value: 1, 
    color: "#ffd700", 
    name: "Ireland",
    description: "Technology and pharmaceutical sector partnerships",
    industries: ["Technology", "Pharmaceuticals", "Finance"],
    established: "2025"
  },
  { 
    country: "sa", 
    value: 1, 
    color: "#708090", 
    name: "Saudi Arabia",
    description: "Energy sector and infrastructure development",
    industries: ["Energy", "Infrastructure", "Engineering"],
    established: "2025"
  },
  { 
    country: "ae", 
    value: 1, 
    color: "#333333", 
    name: "UAE",
    description: "Middle East business development and hospitality",
    industries: ["Hospitality", "Business Development", "Finance"],
    established: "2025"
  },
];

export default function WorldMapComponent() {
  const [selectedCountry, setSelectedCountry] = useState<typeof data[0] | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const handleCountryClick = (countryCode: string) => {
    const country = data.find(d => d.country.toLowerCase() === countryCode.toLowerCase());
    if (country) {
      setSelectedCountry(country);
    }
  };

  const handleCountryHover = (countryCode: string | null) => {
    setHoveredCountry(countryCode);
  };

  return (
    <div className="w-full">
      <div 
        className="relative bg-gradient-to-br from-white via-[#fdf6e3]/30 to-white backdrop-blur-lg border-2 border-[#daa520]/20 hover:border-[#daa520]/40 rounded-3xl shadow-xl px-8 py-10 transition-all hover:shadow-2xl duration-300 overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#daa520]/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fff7d4]/40 to-transparent rounded-full blur-xl" />
        
        {/* Header Section */}
        <div 
          className="text-left mb-8 relative z-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#daa520] to-[#b8860b] flex items-center justify-center shadow-lg">
              <span className="text-xl">🌍</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a2e]">
                Global Partner Network
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-[#daa520] to-[#b8860b] rounded-full mt-1" />
            </div>
          </div>
          <p className="text-[#708090] font-medium leading-relaxed">
            Click on any highlighted country to discover our partnerships, 
            industry focus, and expansion timeline in that region.
          </p>
        </div>

        {/* World Map Container */}
        <div 
          className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#fdf6e3]/50 border border-[#daa520]/20 p-6"
        >
          <div className="max-h-[28rem] max-w-[28rem] w-full">
            <WorldMap
              title=""
              valueSuffix=""
              color="#daa520"
              size={1800}
              data={data}
              frame={false}
              richInteraction
              tooltipTextFunction={(context) => {
                const countryCode = context.countryCode;
                const country = data.find(d => d.country.toLowerCase() === countryCode?.toLowerCase());
                return country ? `${country.name} - Click to learn more` : 'Partnership Available';
              }}
              onClickFunction={(context) => handleCountryClick(context.countryCode)}
              styleFunction={(context) => {
                const countryCode = context.countryCode;
                const country = data.find(
                  (d) => d.country.toLowerCase() === countryCode?.toLowerCase()
                );
                
                // Enhanced visible countries list
                const visibleEU = [
                  ...data.map((d) => d.country),
                  "at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "es", "fi", 
                  "fr", "gr", "hu", "it", "lt", "lv", "mt", "nl", "pt", "ro", 
                  "se", "si", "sk", "lu"
                ];
                
                const isHovered = hoveredCountry === countryCode?.toLowerCase();
                const isPartner = !!country;
                
                if (!visibleEU.includes(countryCode?.toLowerCase() || '') && !isPartner) {
                  return {
                    display: "none",
                    cursor: "default",
                    pointerEvents: "none",
                  };
                }
                
                return {
                  fill: country 
                    ? isHovered 
                      ? country.color 
                      : country.color + 'E6' 
                    : isHovered 
                      ? "#e8e8e8" 
                      : "#f0f0f0",
                  stroke: country ? "#1a1a2e" : "#d0d0d0",
                  strokeWidth: country ? (isHovered ? 2 : 1.5) : 0.8,
                  cursor: country ? "pointer" : "default",
                  transition: "all 0.2s ease",
                  filter: country && isHovered ? "brightness(1.1)" : "none",
                };
              }}
            />
          </div>
          
          {/* Floating stats */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-[#daa520]/20 rounded-2xl px-4 py-3 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#daa520]">{data.length}</div>
              <div className="text-xs text-[#708090] font-medium">Partner Countries</div>
            </div>
          </div>
        </div>

        {/* Partnership Statistics - simplified */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 relative z-10">
          {data.map((country) => (
            <button
              key={country.country}
              onClick={() => setSelectedCountry(country)}
              onMouseEnter={() => handleCountryHover(country.country)}
              onMouseLeave={() => handleCountryHover(null)}
              className="group bg-gradient-to-br from-white to-[#fdf6e3]/50 border border-[#daa520]/20 hover:border-[#daa520]/40 rounded-2xl p-3 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <div className="flex flex-col items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: country.color }}
                />
                <div className="text-center">
                  <div className="font-bold text-[#1a1a2e] group-hover:text-[#daa520] transition-colors text-xs">
                    {country.name}
                  </div>
                  <div className="text-xs text-[#708090]">
                    {country.industries.length} Industries
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Legend - simplified */}
        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#708090] relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#daa520] rounded-full"></div>
            <span>Active Partnerships</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#f0f0f0] border border-[#d0d0d0] rounded-full"></div>
            <span>European Union</span>
          </div>
        </div>
      </div>

      {/* Enhanced Country Details Modal - simplified animations */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-white via-[#fdf6e3]/30 to-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden border-2 border-[#daa520]/20"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCountry(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-[#daa520]/30 hover:border-[#daa520] flex items-center justify-center transition-all duration-200 z-10"
              >
                <svg className="w-5 h-5 text-[#1a1a2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    style={{ backgroundColor: `${selectedCountry.color}20`, border: `2px solid ${selectedCountry.color}40` }}
                  >
                    🏛️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e]">{selectedCountry.name}</h3>
                    <p className="text-[#708090] font-medium">Partnership established {selectedCountry.established}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#1a1a2e] mb-2">Partnership Overview</h4>
                  <p className="text-[#708090] leading-relaxed">{selectedCountry.description}</p>
                </div>

                {/* Industries */}
                <div className="mb-6">
                  <h4 className="font-bold text-[#1a1a2e] mb-3">Key Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-2 bg-gradient-to-r from-[#daa520]/10 to-[#daa520]/20 border border-[#daa520]/30 rounded-xl text-sm font-medium text-[#1a1a2e]"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button - simplified */}
                <button
                  className="w-full bg-gradient-to-r from-[#daa520] to-[#b8860b] hover:from-[#b8860b] hover:to-[#daa520] text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Opportunities in {selectedCountry.name}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
