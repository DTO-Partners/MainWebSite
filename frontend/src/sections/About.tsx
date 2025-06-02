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
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(218,165,32,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(253,246,227,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.04),transparent_70%)]" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(218,165,32,0.4) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(218,165,32,0.4) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Original decorative elements with enhanced styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#daa520]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#fff7d4]/25 to-transparent rounded-full blur-3xl" />
      
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
            
            <h2 className="text-5xl md:text-6xl font-light text-[#1a1a2e] tracking-tight leading-none mb-4">
              About{" "}
              <span className="block text-3xl md:text-4xl bg-gradient-to-r from-[#daa520] to-[#b8860b] bg-clip-text text-transparent font-normal mt-2 tracking-wide">
                DTO Partners
              </span>
            </h2>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="origin-left h-[2px] w-32 bg-gradient-to-r from-transparent via-[#daa520] to-transparent rounded-full shadow-lg mb-8"
            />
          </div>

          {/* Enhanced Badge */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 uppercase text-sm tracking-widest text-[#1a1a2e] font-semibold bg-gradient-to-r from-[#fff7d4]/50 to-[#daa520]/10 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-[#daa520]/30 shadow-lg hover:shadow-xl hover:border-[#daa520]/50 transition-all duration-300"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-[#daa520] rounded-full shadow-sm" 
            />
            International Recruitment Company
          </motion.span>

          {/* Enhanced Content */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl leading-relaxed text-[#1a1a2e]/85 font-light"
            >
              DTO Partners is an{" "}
              <span className="font-medium text-[#daa520]">international recruitment company</span>{" "}
              headquartered in Poland since 2025. Our foundations were built by managers with
              recognized experience in{" "}
              <span className="font-medium text-[#1a1a2e]">Investment Management</span>,{" "}
              <span className="font-medium text-[#1a1a2e]">Food Science and Engineering</span>,
              within major international private and public organizations.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-lg md:text-xl leading-relaxed text-[#708090] font-light"
            >
              DTO Partners has been{" "}
              <span className="font-medium text-[#daa520]">approved and registered</span>{" "}
              with the National Register of Recruitment Firms by the{" "}
              <span className="font-medium text-[#1a1a2e]">
                Ministry of Family, Labour and Social Policies of the Republic of Poland
              </span>
              , highlighting our commitment to provide trustworthy and high-quality services 
              tailored to your needs.
            </motion.p>
          </div>

          {/* Enhanced Fact Chips */}
          <div className="flex gap-3 flex-wrap mt-8">
            {factChips.map((item, index) => (
              <motion.button
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleCopy(item.text)}
                className="group relative bg-gradient-to-r from-white/80 to-[#fdf6e3]/60 backdrop-blur-sm border-2 border-[#daa520]/25 hover:border-[#daa520]/50 px-6 py-3.5 rounded-2xl font-medium cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                aria-label={`Copy fact: ${item.text}`}
                title="Click to copy"
              >
                <div className="flex items-center gap-3">
                  <motion.span 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-lg" 
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-[#1a1a2e] group-hover:text-[#daa520] transition-colors duration-300 tracking-wide">
                    {item.text}
                  </span>
                </div>
                
                {/* Enhanced hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#daa520]/0 via-[#daa520]/5 to-[#fff7d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <AnimatePresence>
                  {copied === item.text && (
                    <motion.span 
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -30, scale: 1 }}
                      exit={{ opacity: 0, y: -45, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-xs text-[#daa520] font-semibold bg-white px-3 py-2 rounded-xl shadow-xl border-2 border-[#daa520]/30 backdrop-blur-sm"
                    >
                      Copied! ✨
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Image with elegant hover effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="rounded-3xl shadow-2xl overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/10 via-transparent to-[#fff7d4]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
          <img
            src={aboutImg}
            alt="DTO Partners team"
            className="object-cover w-full h-[400px] md:h-[500px] group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Refined overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
          
          {/* Elegant corner decoration */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#fff7d4]/20 to-transparent rounded-bl-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </motion.div>

      {/* Enhanced Card Section with Tab Switch on Mobile */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Refined mobile tab buttons */}
        <div className="flex md:hidden mb-8 justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab("industries")}
            className={`px-6 py-3 rounded-2xl font-medium border-2 transition-all duration-300 ${
              activeTab === "industries"
                ? "bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white border-[#daa520] shadow-lg shadow-[#daa520]/30"
                : "bg-white/80 text-[#1a1a2e] border-[#daa520]/30 hover:border-[#daa520]/50 backdrop-blur-sm"
            }`}
          >
            Industries
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab("languages")}
            className={`px-6 py-3 rounded-2xl font-medium border-2 transition-all duration-300 ${
              activeTab === "languages"
                ? "bg-gradient-to-r from-[#daa520] to-[#b8860b] text-white border-[#daa520] shadow-lg shadow-[#daa520]/30"
                : "bg-white/80 text-[#1a1a2e] border-[#daa520]/30 hover:border-[#daa520]/50 backdrop-blur-sm"
            }`}
          >
            Languages
          </motion.button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {(activeTab === "industries" || window.innerWidth >= 768) && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="relative bg-gradient-to-br from-white/90 via-[#fdf6e3]/40 to-white/95 backdrop-blur-xl border-2 border-[#daa520]/20 hover:border-[#daa520]/40 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Enhanced decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#daa520]/12 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fff7d4]/50 to-transparent rounded-full blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/2 to-[#fff7d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Enhanced header with improved spacing */}
              <div className="relative mb-8 flex items-center gap-5">
                <motion.div 
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#daa520] to-[#b8860b] flex items-center justify-center shadow-lg shadow-[#daa520]/30 group-hover:shadow-xl group-hover:shadow-[#daa520]/40 transition-all duration-500"
                >
                  <span className="text-2xl">💼</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#1a1a2e] group-hover:text-[#daa520] transition-colors duration-500 leading-tight tracking-wide">
                    Industries We Operate In
                  </h3>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[2px] w-20 bg-gradient-to-r from-[#daa520] to-[#b8860b] rounded-full mt-3 origin-left" 
                  />
                </div>
              </div>

              <p className="text-[#708090] mb-10 font-light text-base md:text-lg leading-relaxed relative z-10">
                We work across diverse sectors to help organizations access top
                talent that matches the unique dynamics of each industry.
              </p>

              <div className="space-y-5 relative z-10">
                {industries.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group/item relative bg-gradient-to-r from-white/80 to-[#fdf6e3]/60 border border-[#daa520]/20 hover:border-[#daa520]/40 rounded-2xl p-5 md:p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg backdrop-blur-sm transform hover:scale-[1.02] hover:-translate-y-0.5"
                  >
                    {/* Refined hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#daa520]/0 via-[#daa520]/3 to-[#fff7d4]/8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative flex items-center gap-5">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 backdrop-blur-sm"
                        style={{ backgroundColor: `${item.color}15`, border: `2px solid ${item.color}30` }}
                      >
                        <span className="text-xl">{item.icon}</span>
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-[#1a1a2e] group-hover/item:text-[#daa520] transition-colors duration-300 text-lg tracking-wide">
                          {item.label}
                        </h4>
                        <p className="text-sm md:text-base text-[#708090] mt-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Enhanced proficiency indicator */}
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-semibold text-[#708090] tracking-wide">{item.proficiency}%</span>
                        <div className="w-14 h-2 bg-gray-200/80 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.proficiency}%` }}
                            transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                            className="h-full rounded-full transition-all duration-1000 shadow-sm"
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
              className="relative bg-gradient-to-br from-white/90 via-[#fdf6e3]/40 to-white/95 backdrop-blur-xl border-2 border-[#daa520]/20 hover:border-[#daa520]/40 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Enhanced decorative background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#daa520]/12 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#fff7d4]/50 to-transparent rounded-full blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/2 to-[#fff7d4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Enhanced header with improved spacing */}
              <div className="relative mb-8 flex items-center gap-5">
                <motion.div 
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#3a3a5e] flex items-center justify-center shadow-lg shadow-[#1a1a2e]/30 group-hover:shadow-xl group-hover:shadow-[#1a1a2e]/40 transition-all duration-500"
                >
                  <span className="text-2xl">🌍</span>
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#1a1a2e] group-hover:text-[#daa520] transition-colors duration-500 leading-tight tracking-wide">
                    Languages We Speak
                  </h3>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[2px] w-20 bg-gradient-to-r from-[#1a1a2e] to-[#daa520] rounded-full mt-3 origin-left" 
                  />
                </div>
              </div>

              <p className="text-[#708090] mb-10 font-light text-base md:text-lg leading-relaxed relative z-10">
                Our multicultural team ensures communication is clear and
                effective—whether you're local or global. We speak your
                language.
              </p>

              <div className="space-y-5 relative z-10">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group/lang relative bg-gradient-to-l from-white/80 to-[#fdf6e3]/60 border border-[#daa520]/20 hover:border-[#daa520]/40 rounded-2xl p-5 md:p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg backdrop-blur-sm transform hover:scale-[1.02] hover:-translate-y-0.5"
                  >
                    {/* Refined hover background */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#daa520]/0 via-[#daa520]/3 to-[#fff7d4]/8 opacity-0 group-hover/lang:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative flex items-center gap-5">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 backdrop-blur-sm"
                        style={{ backgroundColor: `${lang.color}15`, border: `2px solid ${lang.color}30` }}
                      >
                        <span className="text-xl">{lang.icon}</span>
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-[#1a1a2e] group-hover/lang:text-[#daa520] transition-colors duration-300 text-lg tracking-wide">
                          {lang.label}
                        </h4>
                        <p className="text-sm md:text-base text-[#708090] mt-2 leading-relaxed font-light">
                          {lang.description}
                        </p>
                      </div>
                      
                      {/* Enhanced proficiency indicator */}
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-semibold text-[#708090] tracking-wide">{lang.proficiency}%</span>
                        <div className="w-14 h-2 bg-gray-200/80 rounded-full overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.proficiency}%` }}
                            transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                            className="h-full rounded-full transition-all duration-1000 shadow-sm"
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
