import { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaLock, FaGlobe, FaBolt, FaSearch, FaLanguage } from "react-icons/fa";

// Data
const values = [
  {
    title: "Confidentiality",
    subtitle: "A value we never compromise.",
    description:
      "We treat confidentiality as the core of our services, safeguarding your information with the highest standards of discretion.",
  },
  {
    title: "Multiculturalism",
    subtitle: "We see diversity as strength.",
    description:
      "We honor and respect the culture and practices of each country we operate in, ensuring our recruitment reflects the diversity and uniqueness of those cultures.",
  },
  {
    title: "Efficiency",
    subtitle: "Moving fast, with purpose.",
    description:
      "We focus on providing effective and streamlined recruitment solutions that deliver real results.",
  },
  {
    title: "Transparency",
    subtitle: "Clarity builds trust.",
    description:
      "We believe in open, clear communication with clients and candidates at every step of the process.",
  },
  {
    title: "Internationalization",
    subtitle: "Connecting people, globally.",
    description:
      "Our mission is to connect talent and opportunity across borders, enabling global career growth.",
  },
];

const iconMap = {
  Confidentiality: <FaLock />,
  Multiculturalism: <FaLanguage />,
  Efficiency: <FaBolt />,
  Transparency: <FaSearch />,
  Internationalization: <FaGlobe />,
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  inView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80 },
  },
  hover: { scale: 1.05, boxShadow: "0 8px 36px 0 #fff7d440" },
  tap: { scale: 0.97 },
};

const Values = () => {
  // Track active/expanded card (for more details or just highlight)
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="Values"
      className="flex justify-center items-center relative w-full bg-gradient-to-br from-[#1a1a2e] via-[#15162c] to-[#243046] py-28 px-6 text-white overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#daa520]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-[#fff7d4]/15 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-[#daa520]/10 to-transparent rounded-full blur-xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #daa520 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 max-w-8xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-light mb-2 tracking-tight"
        >
          Our Values
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="origin-center h-[2px] w-32 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto rounded-full shadow-lg mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16 font-light"
        >
          These five values define who we are, how we work, and how we grow —
          with our partners, candidates, and team.
        </motion.p>

        {/* Responsive: Scrollable slider on mobile */}
        <div
          className="flex w-full gap-6 pb-4 min-h-fit md:overflow-x-visible md:scrollbar-none overflow-x-auto scrollbar-thin scrollbar-thumb-[#daa520]/40 scrollbar-track-[#222235] snap-x md:justify-center"
        >
          {values.map((value, index) => (
            <InView triggerOnce threshold={0.25} key={value.title}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  variants={cardVariants}
                  initial="initial"
                  animate={inView ? "inView" : "initial"}
                  whileHover="hover"
                  whileTap="tap"
                  tabIndex={0}
                  onClick={() =>
                    setActiveIdx(activeIdx === index ? null : index)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setActiveIdx(activeIdx === index ? null : index);
                  }}
                  aria-expanded={activeIdx === index}
                  className={`
                    min-w-[280px] max-w-[300px] flex-shrink-0 
                    bg-white/10 backdrop-blur-xl border border-[#fff7d4]/20
                    rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 
                    cursor-pointer group outline-none relative overflow-hidden
                    ${
                      activeIdx === index
                        ? "ring-2 ring-[#daa520] scale-105 z-20 shadow-[0_8px_44px_0_#daa52050]"
                        : "hover:border-[#daa520]/40"
                    }
                    snap-center transform hover:scale-[1.02] hover:-translate-y-1
                  `}
                  style={{
                    boxShadow:
                      activeIdx === index
                        ? "0 8px 44px 0 #daa52050"
                        : undefined,
                  }}
                >
                  {/* Enhanced hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#daa520]/5 to-[#fff7d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-br from-[#fff7d4]/30 to-[#daa520]/20 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:bg-gradient-to-br group-hover:from-[#daa520]/40 group-hover:to-[#fff7d4]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                    animate={
                      activeIdx === index ? { rotate: 20, scale: 1.1 } : { rotate: 0, scale: 1 }
                    }
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {iconMap[value.title as keyof typeof iconMap]}
                  </motion.div>
                  <h4 className="relative text-xl font-light text-white mb-2 group-hover:text-[#fff7d4] transition-colors duration-300 tracking-wide">
                    {value.title}
                  </h4>
                  <p className="relative text-[#daa520] text-sm italic mb-4 font-light group-hover:text-[#fff7d4] transition-colors duration-300">
                    {value.subtitle}
                  </p>
                  <motion.p
                    className={`relative text-gray-200 text-xs md:text-sm leading-relaxed transition-all duration-500 font-light
                      ${
                        activeIdx === index
                          ? "line-clamp-none mt-2"
                          : "line-clamp-3"
                      }
                    `}
                    animate={
                      activeIdx === index ? { opacity: 1 } : { opacity: 0.92 }
                    }
                  >
                    {value.description}
                  </motion.p>
                  {activeIdx === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative mt-6 text-xs text-[#fff7d4]/80 font-light bg-gradient-to-r from-[#daa520]/10 to-transparent backdrop-blur-sm px-4 py-2 rounded-xl border border-[#daa520]/20"
                    >
                      Click/tap or press <kbd className="bg-[#daa520]/20 px-1.5 py-0.5 rounded text-[#fff7d4] font-medium">Enter</kbd> to close
                    </motion.div>
                  )}
                </motion.div>
              )}
            </InView>
          ))}
        </div>
        {/* (Optional) Custom scrollbar style */}
        {/* <style>{`
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #daa52044;
            border-radius: 8px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: #222235;
          }
        `}</style> */}
      </div>
    </section>
  );
};

export default Values;
