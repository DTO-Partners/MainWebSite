import { motion } from 'framer-motion';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  isScrolled?: boolean;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/20 hover:bg-white/10 hover:border-[#daa520]/40 transition-all duration-300 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <motion.span
          className="w-full h-0.5 bg-white rounded-full origin-center"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 9 : 0,
            backgroundColor: isOpen ? "#daa520" : "#ffffff"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="w-full h-0.5 bg-white rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? 20 : 0
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
        <motion.span
          className="w-full h-0.5 bg-white rounded-full origin-center"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -9 : 0,
            backgroundColor: isOpen ? "#daa520" : "#ffffff"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
      
      {/* Background pulse effect */}
      <motion.div
        className="absolute inset-0 bg-[#daa520]/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isOpen ? 1 : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
