import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Import your images
import img1 from "@/assets/pic_one.png";
import img2 from "@/assets/pic_two.png";
import img3 from "@/assets/pic_three.png";
import img4 from "@/assets/pic_four.png";
import img5 from "@/assets/pic_five.png";
import img6 from "@/assets/pic_six.png";
import img7 from "@/assets/pic_seven.jpg";

const slides = [
  { src: img1, alt: "Professional Business Meeting" },
  { src: img2, alt: "Global Partnership" },
  { src: img3, alt: "Team Collaboration" },
  { src: img4, alt: "Strategic Planning" },
  { src: img5, alt: "International Growth" },
  { src: img6, alt: "Innovation Excellence" },
  { src: img7, alt: "Leadership Vision" }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Slightly longer for better viewing
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("AboutUs");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="Hero" className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 20, ease: "linear" }
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full object-cover ${current === index ? 'ken-burns' : ''}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          </motion.div>
        ))}
      </div>

      {/* Animated Particles/Dots */}
      <div className="absolute inset-0 z-[5]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 hero-backdrop-blur hero-glow border border-white/20 rounded-full">
              <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
                Excellence in Global Recruitment
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 tracking-tight leading-none hero-text-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            DTO
            <motion.span 
              className="block font-bold hero-gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Partners
            </motion.span>
          </motion.h1>

          {/* Elegant Divider */}
          <motion.div 
            className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Bridging exceptional talent with visionary organizations across continents.
            <br />
            <span className="text-white/70 text-lg">Where expertise meets opportunity.</span>
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={scrollToNext}
              className="group px-8 py-4 hero-backdrop-blur hero-glow border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Story
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 progress-bar ${
                current === index ? 'bg-white' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.1 }}
            >
              <motion.div
                className="w-full h-full bg-white rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: current === index ? 1 : 0 }}
                transition={{ duration: 7, ease: "linear" }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="p-3 hero-backdrop-blur hero-glow border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}