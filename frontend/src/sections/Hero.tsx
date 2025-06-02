import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import your images
import img1 from "@/assets/pic_one.png";
import img2 from "@/assets/pic_two.png";
import img3 from "@/assets/pic_three.png";
import img4 from "@/assets/pic_four.png";
import img5 from "@/assets/pic_five.png";
import img6 from "@/assets/pic_six.png";
import img7 from "@/assets/pic_seven.jpg";

const slides = [img1, img2, img3, img4, img5, img6, img7];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Hero" className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 bg-black/50 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Welcome to DTO Partners
          </motion.h1>

          <motion.p
            className="text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A trusted Recruitment Firm, bridging Talents and Countries{" "}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}