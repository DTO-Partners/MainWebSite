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
                      transition={{ duration: 0.1, delay: index * 0.1 }}
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
                        transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-[#fff7d4] via-white to-[#fdf6e3] rounded-3xl shadow-2xl border-2 border-[#daa520]/30 max-w-lg w-full mx-4 p-0 overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#daa520]/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fff7d4]/20 to-transparent rounded-tr-full" />
            
            <div className="w-full flex justify-end p-5 top-6 right-6 z-10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group rounded-full p-3 bg-white/90 backdrop-blur-sm border-2 border-[#daa520] shadow-lg hover:bg-[#daa520] hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                onClick={() =>  {
                  console.log("ds[ofjiuosgbhoijfop")
                  setSelectedCountry(null)
                }}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#daa520" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-200"/>
                </svg>
              </motion.button>
            </div>
            
            <div className="relative p-10 pt-12 flex flex-col items-center z-10">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
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
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
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
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-white/80 to-[#fff7d4]/30 rounded-2xl px-5 py-4 border border-[#daa520]/20 shadow-sm hover:shadow-md hover:border-[#daa520]/40 transition-all duration-200 group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl group-hover:scale-110 transition-transform duration-200"
                    >
                      {{
                        Finance: "💰",
                        "IT & Cybersecurity": "🖥️",
                        Healthcare: "🩺",
                        Hospitality: "🏨",
                      }[industry.title] || "🌍"}
                    </motion.span>
                    <span className="text-[#1a1a2e] font-semibold text-lg group-hover:text-[#daa520] transition-colors duration-200">{industry.title}</span>
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
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center text-[#1a1a2e]"
          >
            Industries by Country
          </motion.h4>
          
          <Accordion type="multiple" className="space-y-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={industry.title}>
                  <AccordionTrigger value={industry.title}>
                    <div className="flex items-center gap-4 w-full">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fff7d4]/60 to-[#daa520]/30 border border-[#daa520]/40 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-3xl">
                          {{
                            Finance: "💰",
                            "IT & Cybersecurity": "🖥️",
                            Healthcare: "🩺",
                            Hospitality: "🏨",
                          }[industry.title] || "🌍"}
                        </span>
                      </motion.div>
                      <div className="flex-1 text-left">
                        <motion.div 
                          className="text-xl font-bold text-[#1a1a2e] group-hover/trigger:text-[#daa520] transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {industry.title}
                        </motion.div>
                        <motion.div 
                          className="text-sm text-[#708090] font-medium mt-1"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {industry.countries.length} countries • Click to explore
                        </motion.div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent value={industry.title}>
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <motion.p 
                        className="text-[#708090] text-sm font-medium mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Explore our partnerships across these markets:
                      </motion.p>
                      <div className="flex flex-wrap gap-3">
                        {industry.countries.map((country, countryIndex) => (
                          <motion.span
                            key={country}
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: countryIndex * 0.05,
                              ease: "easeOut"
                            }}
                            whileHover={{ 
                              scale: 1.08, 
                              y: -3,
                              boxShadow: "0 8px 25px -5px rgba(218, 165, 32, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#f8f9fa] via-white to-[#fff7d4]/60 text-sm text-[#1a1a2e] px-5 py-3 rounded-full border-2 border-[#daa520]/20 hover:border-[#daa520]/60 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#fff7d4]/80 hover:to-[#daa520]/25 transition-all duration-300 cursor-pointer font-semibold relative overflow-hidden group"
                            onClick={() => setSelectedCountry(country)}
                          >
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">{country}</span>
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
