import { motion } from "framer-motion";

const values = [
  {
    title: "Confidentiality",
    icon: "🔐",
    subtitle: "A value we never compromise.",
    description:
      "We treat confidentiality as the core of our services, safeguarding your information with the highest standards of discretion.",
  },
  {
    title: "Multiculturalism",
    icon: "🌍",
    subtitle: "We see diversity as strength.",
    description:
      "We honor and respect the culture and practices of each country we operate in, ensuring our recruitment reflects the diversity and uniqueness of those cultures.",
  },
  {
    title: "Efficiency",
    icon: "⚡",
    subtitle: "Moving fast, with purpose.",
    description:
      "We focus on providing effective and streamlined recruitment solutions that deliver real results.",
  },
  {
    title: "Transparency",
    icon: "🔎",
    subtitle: "Clarity builds trust.",
    description:
      "We believe in open, clear communication with clients and candidates at every step of the process.",
  },
  {
    title: "Internationalization",
    icon: "🌐",
    subtitle: "Connecting people, globally.",
    description:
      "Our mission is to connect talent and opportunity across borders, enabling global career growth.",
  },
];

const Values = () => {
  return (
    <section
      id="Values"
      className="relative bg-black w-full py-28 px-4 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Our Values
        </motion.h3>

        {/* Divider Line */}
        <div className="h-[2px] w-16 bg-accent mx-auto mb-6" />

        {/* Intro Text */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          These five values define who we are, how we work, and how we grow —
          with our partners, candidates, and team.
        </p>

        {/* Top Row (2 cards) */}
        <div className="flex justify-center gap-8 flex-wrap mb-12">
          {values.slice(0, 2).map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="w-full md:w-[280px] group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Icon + Title + Divider */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl mb-3">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors mb-1">
                  {value.title}
                </h4>
                <div className="h-[2px] w-10 bg-accent mb-4 rounded-full group-hover:w-16 transition-all duration-300 ease-in-out" />
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 text-base italic mb-3">
                {value.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row (3 cards) */}
        <div className="flex justify-center gap-8 flex-wrap">
          {values.slice(2).map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              className="w-full md:w-[280px] group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Icon + Title + Divider */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl mb-3">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors mb-1">
                  {value.title}
                </h4>
                <div className="h-[2px] w-10 bg-accent mb-4 rounded-full group-hover:w-16 transition-all duration-300 ease-in-out" />
              </div>

              {/* Subtitle */}
              <p className="text-gray-400 text-base italic mb-3">
                {value.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
