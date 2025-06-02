import { motion } from "framer-motion";
import WorldMapComponent from "@/components/WorldMap";
import { useState } from "react";
// Optional: If using shadcn/ui for accordion & tooltip
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export default function InternationalReach() {
  const countries = [
    { code: "pl", name: "Poland", type: "png" },
    { code: "de", name: "Germany", type: "jpeg" },
    { code: "lu", name: "Luxembourg", type: "png" },
    { code: "ie", name: "Ireland", type: "png" },
    { code: "sa", name: "Saudi Arabia", type: "png" },
    { code: "ae", name: "UAE", type: "png" },
  ];

  const industries = [
    {
      title: "Finance",
      countries: ["Luxembourg", "Ireland", "Saudi Arabia"],
    },
    {
      title: "IT & Cybersecurity",
      countries: ["Luxembourg", "Poland", "Ireland"],
    },
    {
      title: "Healthcare",
      countries: ["Poland", "Germany", "Saudi Arabia"],
    },
    {
      title: "Hospitality",
      countries: ["Poland", "Germany", "Saudi Arabia"],
    },
  ];

  const [_, setHoveredCountry] = useState<null | string>(null);
  const [selectedCountry, setSelectedCountry] = useState<null | string>(null);

  return (
    <section
      id="Markets"
      className="bg-gradient-to-br from-[#fdf6e3] to-[#f5f7fa] text-[#1a1a2e] py-24 px-4 sm:px-10 space-y-24 animate-fadeIn"
    >
      {/* Section Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6 tracking-tight"
        >
          🌍 Our Partnerships Across The World
        </motion.h3>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#daa520] to-[#1a1a2e] mx-auto mb-8 rounded" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl leading-relaxed text-[#708090] max-w-3xl mx-auto"
        >
          At <span className="font-semibold text-[#1a1a2e]">DTO Partners</span>,
          our network reaches across continents, with strategic focus on{" "}
          <span className="text-[#daa520] font-semibold">Europe</span> and{" "}
          <span className="text-[#daa520] font-semibold">Middle East</span>. We
          deliver tailored solutions to meet unique industry challenges for our
          clients worldwide.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-[#708090] mt-4 max-w-2xl mx-auto"
        >
          Our recruitment covers{" "}
          <span className="text-[#1a1a2e] font-semibold">
            junior to executive search
          </span>
          , including government-authorized professionals.
        </motion.p>
      </div>

      {/* Countries Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-3xl font-bold mb-12 text-center text-[#1a1a2e]">
            Countries We Operate In
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center">
            {countries.map((country, index) => (
              <TooltipProvider key={country.code}>
                <Tooltip>
                  <TooltipTrigger>
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.08,
                        y: -8,
                        boxShadow: "0 20px 40px rgba(218, 165, 32, 0.3)",
                        borderColor: "#daa520",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(country.name)}
                      className="relative bg-gradient-to-br from-white to-[#fdf6e3] border-2 border-[#e5e5e5] hover:border-[#daa520] rounded-3xl p-6 shadow-lg hover:shadow-2xl flex flex-col items-center transition-all duration-500 cursor-pointer group overflow-hidden"
                    >
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#daa520]/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-[#fff7d4]/30 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Flag container with enhanced styling */}
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.6 }}
                        className="relative mb-4 p-3 rounded-2xl bg-gradient-to-br from-[#fff7d4]/30 to-[#daa520]/10 border border-[#daa520]/20 group-hover:border-[#daa520]/40 group-hover:shadow-lg transition-all duration-500"
                      >
                        <img
                          src={`/flags/${country.code}.${country.type}`}
                          alt={country.name}
                          className="w-12 h-8 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                        />
                        
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                      </motion.div>
                      
                      <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#daa520] transition-colors duration-300 text-center leading-tight">
                        {country.name}
                      </span>
                      
                      {/* Subtle hover indicator */}
                      <motion.div
                        className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <div className="w-1 h-1 bg-[#daa520] rounded-full" />
                      </motion.div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gradient-to-r from-[#1a1a2e] to-[#243046] text-white rounded-2xl px-6 py-3 text-sm shadow-xl border border-[#daa520]/30" show>
                    <div className="flex flex-col items-center space-y-1">
                      <strong className="text-[#fff7d4] text-base">{country.name}</strong>
                      <span className="text-[#daa520] text-xs">Click to explore</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Country Modal */}
      {selectedCountry && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 h-full z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-[#fff7d4] via-white to-[#fdf6e3] rounded-3xl shadow-2xl border-2 border-[#daa520]/30 max-w-lg w-full mx-4 p-0 overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#daa520]/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fff7d4]/20 to-transparent rounded-tr-full" />
            
            <div className="absolute top-6 right-6 z-10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="group rounded-full p-3 bg-white/90 backdrop-blur-sm border-2 border-[#daa520] shadow-lg hover:bg-[#daa520] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                onClick={() => setSelectedCountry(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" onClick={() => setSelectedCountry(null)}>
                  <path d="M18 6L6 18M6 6L18 18" stroke="#daa520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
                </svg>
              </motion.button>
            </div>
            
            <div className="relative p-10 pt-12 flex flex-col items-center z-10">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center mb-6"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-14 rounded-2xl bg-gradient-to-br from-[#fff7d4] to-[#daa520]/20 border-2 border-[#daa520] shadow-lg flex items-center justify-center p-2">
                    <img
                      src={`/flags/${countries.find(c => c.name === selectedCountry)?.code}.${countries.find(c => c.name === selectedCountry)?.type}`}
                      alt={selectedCountry}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 border-2 border-[#daa520]/30 rounded-2xl animate-pulse" />
                </div>
                
                <h3 className="text-3xl font-bold text-[#1a1a2e] mb-2 tracking-tight text-center">{selectedCountry}</h3>
                <div className="flex items-center space-x-2 text-[#daa520] text-lg font-semibold mb-4">
                  <span>Industries</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#daa520]/30 to-transparent mb-6" />
              
              <div className="grid grid-cols-1 gap-3 w-full">
                {industries.filter(i => i.countries.includes(selectedCountry)).map((industry, index) => (
                  <motion.div 
                    key={industry.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-white/80 to-[#fff7d4]/30 rounded-2xl px-5 py-4 border border-[#daa520]/20 shadow-sm hover:shadow-md hover:border-[#daa520]/40 transition-all duration-300 group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="text-2xl group-hover:scale-110 transition-transform duration-300"
                    >
                      {{
                        Finance: "💰",
                        "IT & Cybersecurity": "🖥️",
                        Healthcare: "🩺",
                        Hospitality: "🏨",
                      }[industry.title] || "🌍"}
                    </motion.span>
                    <span className="text-[#1a1a2e] font-semibold text-lg group-hover:text-[#daa520] transition-colors duration-300">{industry.title}</span>
                  </motion.div>
                ))}
                {industries.filter(i => i.countries.includes(selectedCountry)).length === 0 && (
                  <div className="text-[#708090] text-center py-4 italic">
                    No industries listed for this country.
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Map & Industries Side-by-Side */}
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto h-full gap-12">
        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 0 4px #daa52055" }}
          className="w-full lg:w-2/3 bg-white/80 backdrop-blur-lg border border-[#ddd] rounded-2xl shadow-2xl p-8 transition-all"
        >
          <WorldMapComponent />
        </motion.div>

        {/* Industries Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full lg:w-1/3"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">
            Industries by Country
          </h4>
          <Accordion type="multiple" className="space-y-3">
            {industries.map((industry) => (
              <AccordionItem key={industry.title} value={industry.title}>
                <AccordionTrigger value={industry.title} className="text-lg font-semibold flex items-center gap-2">
                  <span>
                    {{
                      Finance: "💰",
                      "IT & Cybersecurity": "🖥️",
                      Healthcare: "🩺",
                      Hospitality: "🏨",
                    }[industry.title] || "🌍"}
                  </span>
                  {industry.title}
                </AccordionTrigger>
                <AccordionContent value={industry.title}>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {industry.countries.map((country) => (
                      <span
                        key={country}
                        className="bg-[#f5f5f5] text-sm text-[#1a1a2e] px-3 py-1 rounded-full border border-[#ddd] hover:bg-[#daa520]/20 transition"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
