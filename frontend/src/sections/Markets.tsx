import { motion } from "framer-motion";
import WorldMapComponent from "@/components/WorldMap";

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

  return (
    <section
      id="Markets"
      className="bg-white text-[#1a1a2e] py-24 px-6 space-y-24"
    >
      {/* Section Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Our Partnerships Across The World
        </motion.h3>
        <div className="h-[2px] w-16 bg-black mx-auto mb-8" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-[#708090] max-w-3xl mx-auto"
        >
          At <span className="font-semibold text-[#1a1a2e]">DTO Partners</span>,
          we operate across countries and continents, with a strategic focus on{" "}
          <span className="text-[#daa520] font-semibold">Europe</span> and{" "}
          <span className="text-[#daa520] font-semibold">Middle East</span>{" "}
          regions. Our expertise spans diverse markets and industries,
          delivering tailored solutions to meet the unique needs of our clients.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed text-[#708090] mt-4 max-w-2xl mx-auto"
        >
          We recruit from{" "}
          <span className="text-[#1a1a2e] font-semibold">
            junior to executive search
          </span>
          , including individuals authorized by Government Bodies and
          Regulators.
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
              <motion.div
                key={country.code}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f5f5f5] border border-[#eee] rounded-lg p-4 shadow-sm flex flex-col items-center transition-all hover:shadow-md hover:ring-2 hover:ring-[#daa520]"
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
            ))}
          </div>
        </motion.div>
      </div>

      {/* Map & Industries Side-by-Side */}
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-12">
        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 bg-white/60 backdrop-blur-lg border border-[#ddd] rounded-xl shadow-lg p-6"
        >
          <WorldMapComponent />
        </motion.div>

        {/* Industries List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 space-y-6"
        >
          <h4 className="text-2xl font-bold mb-6 text-left">
            Industries by Country
          </h4>

          <div className="grid gap-6">
            {industries.map((industry) => (
              <motion.div
                key={industry.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl bg-white border border-[#eee] shadow-md hover:shadow-lg hover:border-[#daa520] transition-all p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-lg font-semibold text-[#1a1a2e]">
                    {industry.title}
                  </h5>
                  <span className="text-2xl">
                    {{
                      Finance: "💰",
                      "IT & Cybersecurity": "🖥️",
                      Healthcare: "🩺",
                      Hospitality: "🏨",
                    }[industry.title] || "🌍"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.countries.map((country) => (
                    <span
                      key={country}
                      className="bg-[#f5f5f5] text-sm text-[#1a1a2e] px-3 py-1 rounded-full border border-[#ddd] hover:bg-[#daa520]/10 transition"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
