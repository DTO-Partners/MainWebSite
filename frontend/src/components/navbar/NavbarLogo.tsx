import { motion } from 'framer-motion';
import logo from "@/assets/tab_logo.png";

interface NavbarLogoProps {
  isScrolled: boolean;
  onLogoClick: () => void;
}

export function NavbarLogo({ isScrolled, onLogoClick }: NavbarLogoProps) {
  return (
    <motion.button 
      onClick={onLogoClick}
      className="flex items-center gap-3 group focus:outline-none h-14"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Logo Container */}
      <motion.div
        className="relative"
        whileHover={{ rotate: [0, -3, 3, 0] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:border-[#daa520]/40 transition-all duration-300">
          <img
            src={logo}
            alt="DTO Partners Logo"
            className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110" 
          />
          {/* Logo glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-[#daa520]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500" />
      </motion.div>

      {/* Company Name */}
      <div className="flex flex-col items-start justify-center h-14">
        <motion.span 
          className="text-xl font-light tracking-tight text-white transition-all duration-300 group-hover:text-[#daa520] leading-tight"
        >
          DTO Partners
        </motion.span>
        
        {/* Tagline - Fixed height container to prevent layout shift */}
        <div className="h-4 overflow-hidden">
          <motion.span 
            className="block text-xs text-white/60 group-hover:text-[#daa520]/80 transition-all duration-300"
            initial={false}
            animate={{ 
              opacity: isScrolled ? 0 : 1,
              y: isScrolled ? -16 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Global Recruitment Excellence
          </motion.span>
        </div>
        
        {/* Animated underline */}
        <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#daa520] to-[#fff7d4] transition-all duration-500 rounded-full" />
      </div>
    </motion.button>
  );
}
