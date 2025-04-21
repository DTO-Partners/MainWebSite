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
      id="About"
      className="min-h-screen flex flex-col justify-center bg-white text-black px-6 py-20"
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">
            About DTO Partners
          </h2>
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
            className="w-full bg-gradient-to-br from-[#f4f4f4] to-[#ffffff] border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Industries We Operate In
            </h3>
            <p className="text-gray-700 mb-6">
              We work across diverse sectors to help organizations access top
              talent that matches the unique dynamics of each industry.
            </p>
            <div className="space-y-3">
              {[
                "Finance",
                "Healthcare",
                "IT & Cybersecurity",
                "Hospitality",
                "Food Engineering",
              ].map((item) => (
                <div
                  key={item}
                  className="border-l-4 border-accent pl-4 py-2 text-lg font-medium hover:text-primary transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          {/* Languages Section - Vertical, Underlined Style */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full bg-gradient-to-br from-[#f4f4f4] to-[#ffffff] border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Languages We Speak
            </h3>
            <p className="text-gray-700 mb-6">
              Our multicultural team ensures communication is clear and
              effective — whether you're local or global. We speak your
              language.
            </p>

            <ul className="space-y-4 text-lg font-medium">
              {["English", "Polish", "Italian", "German", "Russian"].map(
                (lang) => (
                  <li
                    key={lang}
                    className="relative group w-fit text-gray-800 hover:text-primary cursor-default"
                  >
                    {lang}
                    <span className="block h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300 ease-in-out"></span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
