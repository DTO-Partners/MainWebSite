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
      className="flex justify-center items-center relative w-full bg-gradient-to-br from-[#1a1a2e] via-[#15162c] to-[#243046] py-28 px-6 text-white"
    >
      <div className="relative z-10 max-w-8xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-2 tracking-tight"
        >
          Our Values
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="origin-left h-[3px] w-24 bg-gradient-to-r from-[#daa520] to-[#fff7d4] mx-auto rounded mb-6"
        />
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          These five values define who we are, how we work, and how we grow —
          with our partners, candidates, and team.
        </p>

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
                    bg-white/10 backdrop-blur-md border border-[#fff7d4]/10
                    rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 
                    cursor-pointer group outline-none
                    ${
                      activeIdx === index
                        ? "ring-2 ring-[#daa520] scale-105 z-20"
                        : ""
                    }
                    snap-center
                  `}
                  style={{
                    boxShadow:
                      activeIdx === index
                        ? "0 8px 44px 0 #daa52050"
                        : undefined,
                  }}
                >
                  <motion.div
                    className={`w-14 h-14 bg-[#fff7d4]/30 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:bg-[#daa520]/30 transition-all duration-200`}
                    animate={
                      activeIdx === index ? { rotate: 20 } : { rotate: 0 }
                    }
                  >
                    {iconMap[value.title as keyof typeof iconMap]}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {value.title}
                  </h4>
                  <p className="text-[#daa520] text-sm italic mb-3">
                    {value.subtitle}
                  </p>
                  <motion.p
                    className={`text-gray-200 text-sm leading-relaxed transition-all duration-300
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
                      className="mt-4 text-xs text-[#fff7d4] font-semibold"
                    >
                      Click/tap or press <kbd>Enter</kbd> to close
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
