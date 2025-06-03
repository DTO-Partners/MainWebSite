import { motion } from "framer-motion";
import { useValues } from "@/hooks/useValues";
import { ValuesHeader } from "@/components/values/ValuesHeader";
import { ValuesBackground } from "@/components/values/ValuesBackground";
import { ValuesGrid } from "@/components/values/ValuesGrid";

const Values = () => {
  const { values, activeIndex, toggleValue } = useValues();

  return (
    <motion.section
      id="Values"
      className="flex justify-center items-center relative w-full bg-gradient-to-br from-[#1a1a2e] via-[#15162c] to-[#243046] py-28 px-6 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Elements */}
      <ValuesBackground />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-8xl mx-auto w-full">
        {/* Header Section */}
        <ValuesHeader />
        
        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ValuesGrid
            values={values}
            activeIndex={activeIndex}
            onToggleCard={toggleValue}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Values;
