import { motion } from "framer-motion";
import aboutImg from "@/assets/about-us.jpg";

// Shared animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="AboutUs"
      className="min-h-screen flex flex-col justify-center bg-[#f5f5f5] text-[#1a1a2e] px-6 py-20"
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#1a1a2e]">
            About DTO Partners
          </h2>

          <span className="text-[#daa520] font-semibold">
            international recruitment company
          </span>

          <p className="text-lg leading-relaxed mb-4">
            DTO Partners is an international recruitment company headquartered
            in Poland since 2025. Our foundations were built by managers with
            recognized experience in Investment Management, Food Science and
            Engineering, within major international private and public
            organizations.
          </p>
          <p className="text-lg leading-relaxed">
            DTO Partners has been approved and registered with the National
            Register of Recruitment Firms by the Ministry of Family, Labour and
            Social Policies of the Republic of Poland, highlighting its
            commitment to provide trustworthy and high-quality services tailored
            to your needs.
          </p>

          <div className="flex gap-4 flex-wrap mt-6">
            {[
              "Founded in 2025",
              "Registered in Poland",
              "Multinational Team",
              "Government Approved",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#d3d3d3]/30 text-[#1a1a2e] border border-[#d3d3d3] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#d3d3d3]/50 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={aboutImg}
            alt="DTO Partners team"
            className="object-cover w-full h-[400px]"
          />
        </motion.div>
      </div>

      {/* Cards Below */}
      <div className="max-w-8xl mx-auto flex flex-wrap gap-8 justify-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Industries Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white border border-[#ddd] rounded-xl p-8 shadow-sm transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
              Industries We Operate In
            </h3>
            <p className="text-[#708090] mb-6">
              We work across diverse sectors to help organizations access top
              talent that matches the unique dynamics of each industry.
            </p>
            <div className="space-y-3">
              {[
                { label: "Finance", icon: "💼" },
                { label: "Healthcare", icon: "🩺" },
                { label: "IT & Cybersecurity", icon: "🖥️" },
                { label: "Hospitality", icon: "🏨" },
                { label: "Food Engineering", icon: "🍽️" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 border-l-4 border-[#daa520] pl-4 py-2 text-lg font-medium hover:text-[#008080] transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white border border-[#ddd] rounded-xl p-8 shadow-sm transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
              Languages We Speak
            </h3>
            <p className="text-[#708090] mb-6">
              Our multicultural team ensures communication is clear and
              effective — whether you're local or global. We speak your
              language.
            </p>
            <ul className="space-y-4 text-lg font-medium">
              {[
                { label: "English", icon: "🇬🇧" },
                { label: "Polish", icon: "🇵🇱" },
                { label: "Italian", icon: "🇮🇹" },
                { label: "German", icon: "🇩🇪" },
                { label: "Russian", icon: "🇷🇺" },
              ].map((lang, i) => (
                <motion.li
                  key={lang.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group w-fit text-[#333] hover:text-[#008080] cursor-default"
                >
                  <span className="text-xl">{lang.icon}</span>
                  {lang.label}
                  <span className="block h-[2px] w-0 group-hover:w-full bg-[#008080] transition-all duration-300 ease-in-out"></span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
