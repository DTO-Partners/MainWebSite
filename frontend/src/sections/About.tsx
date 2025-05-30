import { useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-us.jpg";

// Shared animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const industries = [
  { label: "Finance", icon: "💼" },
  { label: "Healthcare", icon: "🩺" },
  { label: "IT & Cybersecurity", icon: "🖥️" },
  { label: "Hospitality", icon: "🏨" },
  { label: "Food Engineering", icon: "🍽️" },
];

const languages = [
  { label: "English", icon: "🇬🇧" },
  { label: "Polish", icon: "🇵🇱" },
  { label: "Italian", icon: "🇮🇹" },
  { label: "German", icon: "🇩🇪" },
  { label: "Russian", icon: "🇷🇺" },
];

const factChips = [
  "Founded in 2025",
  "Registered in Poland",
  "Multinational Team",
  "Government Approved",
];

export default function About() {
  const [activeTab, setActiveTab] = useState<"industries" | "languages">(
    "industries"
  );
  // For chip hover/copy feedback (optional):
  const [copied, setCopied] = useState<string | null>(null);

  // Helper for copy-to-clipboard (optional, nice UX)
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <section
      id="AboutUs"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#f5f5f5] via-[#fdf6e3] to-[#f9fafb] text-[#1a1a2e] px-6 py-20"
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-[#1a1a2e] tracking-tight">
            About DTO Partners
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="origin-left h-1 w-24 bg-gradient-to-r from-[#daa520] to-[#1a1a2e] rounded mb-4"
          />

          <span className="uppercase text-xs tracking-wider text-[#daa520] font-semibold bg-[#1a1a2e]/10 px-3 py-1 rounded-full shadow inline-block mb-2">
            international recruitment company
          </span>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg leading-relaxed"
          >
            DTO Partners is an international recruitment company headquartered
            in Poland since 2025. Our foundations were built by managers with
            recognized experience in Investment Management, Food Science and
            Engineering, within major international private and public
            organizations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed"
          >
            DTO Partners has been approved and registered with the National
            Register of Recruitment Firms by the Ministry of Family, Labour and
            Social Policies of the Republic of Poland, highlighting our
            commitment to provide trustworthy and high-quality services tailored
            to your needs.
          </motion.p>

          {/* Fact Chips */}
          <div className="flex gap-4 flex-wrap mt-6">
            {factChips.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.08, backgroundColor: "#daa52022" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCopy(item)}
                className="bg-[#eaeaea]/50 text-[#1a1a2e] border border-[#d3d3d3] px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition relative"
                aria-label={`Copy fact: ${item}`}
                title="Click to copy"
              >
                {item}
                {copied === item && (
                  <span className="absolute right-2 -top-5 text-xs text-[#008080] font-semibold animate-pulse">
                    Copied!
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Image with parallax/blur hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="rounded-2xl shadow-xl overflow-hidden relative group"
        >
          <img
            src={aboutImg}
            alt="DTO Partners team"
            className="object-cover w-full h-[400px] group-hover:blur-[1.5px] group-hover:scale-105 transition-all duration-500"
          />
          {/* Optional overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#daa52033] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none" />
        </motion.div>
      </div>

      {/* Card Section with Tab Switch on Mobile */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex md:hidden mb-6 justify-center gap-3">
          <button
            onClick={() => setActiveTab("industries")}
            className={`px-4 py-2 rounded-full font-semibold border-2 ${
              activeTab === "industries"
                ? "bg-[#daa520]/90 text-white border-[#daa520]"
                : "bg-white text-[#1a1a2e] border-[#eee]"
            } transition`}
          >
            Industries
          </button>
          <button
            onClick={() => setActiveTab("languages")}
            className={`px-4 py-2 rounded-full font-semibold border-2 ${
              activeTab === "languages"
                ? "bg-[#daa520]/90 text-white border-[#daa520]"
                : "bg-white text-[#1a1a2e] border-[#eee]"
            } transition`}
          >
            Languages
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {(activeTab === "industries" || window.innerWidth >= 768) && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.025,
                boxShadow: "0 10px 40px rgba(218,165,32,0.10)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white border border-[#ddd] rounded-2xl p-8 shadow-sm transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                Industries We Operate In
              </h3>
              <div className="h-[3px] w-20 bg-gradient-to-r from-[#daa520] to-[#1a1a2e] rounded mb-4" />
              <p className="text-[#708090] mb-6">
                We work across diverse sectors to help organizations access top
                talent that matches the unique dynamics of each industry.
              </p>
              <div className="space-y-3">
                {industries.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 border-l-4 border-[#daa520] pl-4 py-2 text-lg font-medium hover:text-[#008080] transition-colors cursor-default"
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {(activeTab === "languages" || window.innerWidth >= 768) && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.025,
                boxShadow: "0 10px 40px rgba(218,165,32,0.10)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white border border-[#ddd] rounded-2xl p-8 shadow-sm transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                Languages We Speak
              </h3>
              <div className="h-[3px] w-20 bg-gradient-to-r from-[#1a1a2e] to-[#daa520] rounded mb-4" />
              <p className="text-[#708090] mb-6">
                Our multicultural team ensures communication is clear and
                effective—whether you're local or global. We speak your
                language.
              </p>
              <ul className="space-y-4 text-lg font-medium">
                {languages.map((lang, i) => (
                  <motion.li
                    key={lang.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 group w-fit text-[#333] hover:text-[#008080] cursor-default"
                  >
                    <span className="text-xl">{lang.icon}</span>
                    {lang.label}
                    <span className="block h-[2px] w-0 group-hover:w-full bg-[#008080] transition-all duration-300 ease-in-out"></span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
