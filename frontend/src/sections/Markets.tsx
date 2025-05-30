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

  // For demo: track hovered country for interactive map (expand as needed)
  const [hoveredCountry, setHoveredCountry] = useState<null | string>(null);

  return (
    <section
      id="Markets"
      className="bg-gradient-to-br from-[#fdf6e3] to-[#f5f7fa] text-[#1a1a2e] py-24 px-4 sm:px-10 space-y-24"
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
          <h4 className="text-2xl font-bold mb-8 text-center">
            Countries We Operate In
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
            {countries.map((country) => (
              <TooltipProvider key={country.code}>
                <Tooltip>
                  <TooltipTrigger>
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0 6px 32px #daa52022",
                      }}
                      whileTap={{ scale: 0.96 }}
                      onMouseLeave={() => setHoveredCountry(null)}
                      className="bg-[#f5f5f5] border border-[#eee] rounded-2xl p-4 shadow-sm flex flex-col items-center transition-all hover:shadow-xl hover:ring-2 hover:ring-[#daa520] cursor-pointer"
                    >
                      <img
                        src={`/flags/${country.code}.${country.type}`}
                        alt={country.name}
                        className="w-10 h-7 object-cover rounded mb-2"
                      />
                      <span className="text-sm font-medium text-[#1a1a2e]">
                        {country.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#1a1a2e] text-white rounded-xl px-4 py-2 text-sm shadow-lg" show>
                    <div className="flex flex-col items-center">
                      <strong>{country.name}</strong>
                      <span>Click to learn more</span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Map & Industries Side-by-Side */}
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto h-full gap-12">
        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 bg-white/80 backdrop-blur-lg border border-[#ddd] rounded-2xl shadow-2xl p-8 transition-all"
        >
          {/* Pass hoveredCountry as prop for interactive highlight (optional) */}
          <WorldMapComponent highlightCountry={hoveredCountry} />
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
                <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
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
