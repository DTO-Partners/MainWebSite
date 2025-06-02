import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "@/assets/about-us.jpg";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const industries = [
  { 
    label: "Finance", 
    icon: "💼", 
    description: "Investment management & financial services",
    color: "#2563eb",
    proficiency: 95 
  },
  { 
    label: "Healthcare", 
    icon: "🩺", 
    description: "Medical professionals & healthcare solutions",
    color: "#dc2626",
    proficiency: 88 
  },
  { 
    label: "IT & Cybersecurity", 
    icon: "🖥️", 
    description: "Technology experts & security specialists",
    color: "#7c3aed",
    proficiency: 92 
  },
  { 
    label: "Hospitality", 
    icon: "🏨", 
    description: "Tourism & hospitality management",
    color: "#059669",
    proficiency: 85 
  },
  { 
    label: "Food Engineering", 
    icon: "🍽️", 
    description: "Food science & engineering professionals",
    color: "#ea580c",
    proficiency: 90 
  },
];

const languages = [
  { 
    label: "English", 
    icon: "🇬🇧", 
    description: "Native & Business fluency",
    proficiency: 98,
    color: "#1e40af" 
  },
  { 
    label: "Polish", 
    icon: "🇵🇱", 
    description: "Native language",
    proficiency: 100,
    color: "#dc2626" 
  },
  { 
    label: "Italian", 
    icon: "🇮🇹", 
    description: "Professional working proficiency",
    proficiency: 85,
    color: "#059669" 
  },
  { 
    label: "German", 
    icon: "🇩🇪", 
    description: "Business communication level",
    proficiency: 80,
    color: "#7c2d12" 
  },
  { 
    label: "Russian", 
    icon: "🇷🇺", 
    description: "Conversational & business level",
    proficiency: 75,
    color: "#7c3aed" 
  },
];

const factChips = [
  { text: "Founded in 2025", icon: "🏢", color: "#daa520" },
  { text: "Registered in Poland", icon: "🇵🇱", color: "#dc2626" },
  { text: "Multinational Team", icon: "🌍", color: "#059669" },
  { text: "Government Approved", icon: "✅", color: "#2563eb" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<"industries" | "languages">("industries");
  const [copied, setCopied] = useState<string | null>(null);

  // Helper for copy-to-clipboard with enhanced feedback
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="AboutUs"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#fdf6e3] via-[#f5f7fa] to-[#fff7d4]/30 text-[#1a1a2e] px-6 py-24 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#daa520]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#fff7d4]/20 to-transparent rounded-full blur-3xl" />
      
      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24 relative z-10"
      >
        {/* Enhanced Text Block */}
        <motion.div
          variants={cardVariants}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#daa520] to-[#b8860b] flex items-center justify-center shadow-lg shadow-[#daa520]/30 mb-6"
            >
              <span className="text-2xl">🏢</span>
            </motion.div>
            
            <h2 className="text-5xl font-extrabold text-[#1a1a2e] tracking-tight leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-[#daa520] to-[#b8860b] bg-clip-text text-transparent">
                DTO Partners
              </span>
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="origin-left h-1.5 w-32 bg-gradient-to-r from-[#daa520] via-[#b8860b] to-[#daa520] rounded-full shadow-lg"
            />
          </div>

          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 uppercase text-sm tracking-wider text-[#1a1a2e] font-bold bg-gradient-to-r from-[#fff7d4] to-[#daa520]/20 px-6 py-3 rounded-2xl border-2 border-[#daa520]/30 shadow-lg"
          >
            <span className="w-2 h-2 bg-[#daa520] rounded-full animate-pulse" />
            International Recruitment Company
          </motion.span>

          {/* Enhanced Content */}
          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed text-[#1a1a2e]/80 font-medium"
            >
              DTO Partners is an{" "}
              <span className="font-bold text-[#daa520]">international recruitment company</span>{" "}
              headquartered in Poland since 2025. Our foundations were built by managers with
              recognized experience in{" "}
              <span className="font-semibold text-[#1a1a2e]">Investment Management</span>,{" "}
              <span className="font-semibold text-[#1a1a2e]">Food Science and Engineering</span>,
              within major international private and public organizations.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-[#708090] font-medium"
            >
              DTO Partners has been{" "}
              <span className="font-bold text-[#daa520]">approved and registered</span>{" "}
              with the National Register of Recruitment Firms by the{" "}
              <span className="font-semibold text-[#1a1a2e]">
                Ministry of Family, Labour and Social Policies of the Republic of Poland
              </span>
              , highlighting our commitment to provide trustworthy and high-quality services 
              tailored to your needs.
            </motion.p>
          </div>

          {/* Enhanced Fact Chips */}
          <motion.div 
            className="flex gap-4 flex-wrap mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {factChips.map((item, index) => (
              <motion.button
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(218, 165, 32, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy(item.text)}
                className="group relative bg-gradient-to-r from-white to-[#fdf6e3] border-2 border-[#daa520]/30 hover:border-[#daa520] px-5 py-3 rounded-2xl font-semibold cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                aria-label={`Copy fact: ${item.text}`}
                title="Click to copy"
              >
                {/* Background shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#daa520]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className="relative flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-[#1a1a2e] group-hover:text-[#daa520] transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
                
                <AnimatePresence>
                  {copied === item.text && (
                    <motion.span 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: -25 }}
                      exit={{ opacity: 0, y: -40 }}
                      className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-[#daa520] font-bold bg-white px-2 py-1 rounded-lg shadow-lg border border-[#daa520]/30"
                    >
                      Copied! ✨
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </motion.div>
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
      </motion.div>

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
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(218,165,32,0.15)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative bg-gradient-to-br from-white via-[#fdf6e3]/30 to-white border-2 border-[#daa520]/20 hover:border-[#daa520]/40 rounded-3xl p-8 shadow-lg overflow-hidden group"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#daa520]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fff7d4]/40 to-transparent rounded-full blur-xl" />
              
              {/* Header with icon */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#daa520] to-[#b8860b] flex items-center justify-center shadow-lg">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e]">
                    Industries We Operate In
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#daa520] to-[#b8860b] rounded-full mt-2" />
                </div>
              </div>

              <p className="text-[#708090] mb-8 font-medium relative z-10">
                We work across diverse sectors to help organizations access top
                talent that matches the unique dynamics of each industry.
              </p>

              <div className="space-y-4 relative z-10">
                {industries.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.01 }}
                    whileHover={{ 
                      x: 8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group/item relative bg-gradient-to-r from-white to-[#fdf6e3]/50 border border-[#daa520]/20 hover:border-[#daa520]/40 rounded-2xl p-4 cursor-pointer overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#daa520]/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700" />
                    
                    <div className="relative flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover/item:scale-110"
                        style={{ backgroundColor: `${item.color}15`, border: `2px solid ${item.color}30` }}
                      >
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-[#1a1a2e] group-hover/item:text-[#daa520] transition-colors duration-300">
                          {item.label}
                        </h4>
                        <p className="text-sm text-[#708090] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Proficiency indicator */}
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-bold text-[#708090]">{item.proficiency}%</span>
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.proficiency}%` }}
                            transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    </div>
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
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(218,165,32,0.15)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative bg-gradient-to-br from-white via-[#fdf6e3]/30 to-white border-2 border-[#daa520]/20 hover:border-[#daa520]/40 rounded-3xl p-8 shadow-lg overflow-hidden group"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#daa520]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#fff7d4]/40 to-transparent rounded-full blur-xl" />
              
              {/* Header with icon */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#3a3a5e] flex items-center justify-center shadow-lg">
                  <span className="text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e]">
                    Languages We Speak
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#1a1a2e] to-[#daa520] rounded-full mt-2" />
                </div>
              </div>

              <p className="text-[#708090] mb-8 font-medium relative z-10">
                Our multicultural team ensures communication is clear and
                effective—whether you're local or global. We speak your
                language.
              </p>

              <div className="space-y-4 relative z-10">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      x: -8, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group/lang relative bg-gradient-to-l from-white to-[#fdf6e3]/50 border border-[#daa520]/20 hover:border-[#daa520]/40 rounded-2xl p-4 cursor-pointer overflow-hidden"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#daa520]/5 to-transparent translate-x-full group-hover/lang:-translate-x-full transition-transform duration-700" />
                    
                    <div className="relative flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover/lang:scale-110"
                        style={{ backgroundColor: `${lang.color}15`, border: `2px solid ${lang.color}30` }}
                      >
                        <span className="text-lg">{lang.icon}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-[#1a1a2e] group-hover/lang:text-[#daa520] transition-colors duration-300">
                          {lang.label}
                        </h4>
                        <p className="text-sm text-[#708090] mt-1 leading-relaxed">
                          {lang.description}
                        </p>
                      </div>
                      
                      {/* Proficiency indicator */}
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-bold text-[#708090]">{lang.proficiency}%</span>
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.proficiency}%` }}
                            transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: lang.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
