import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaLock, FaGlobe, FaBolt, FaSearch, FaLanguage } from "react-icons/fa";

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

const Values = () => {
  return (
    <section
      id="Values"
      className="flex justify-center items-center relative w-full bg-primary py-28 px-6 text-white"
    >
      <div className="relative z-10 max-w-8xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Our Values
        </motion.h3>

        <div className="h-[2px] w-16 bg-accent mx-auto mb-6" />

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          These five values define who we are, how we work, and how we grow —
          with our partners, candidates, and team.
        </p>

        <div className="flex w-full gap-8 pb-4">
          {values.map((value, index) => (
            <InView triggerOnce threshold={0.2} key={value.title}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="min-w-[280px] max-w-[300px] flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl text-accent mb-3">
                      {iconMap[value.title as keyof typeof iconMap]}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm italic mb-2">
                      {value.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
