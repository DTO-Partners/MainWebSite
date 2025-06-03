import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { ValueItem } from '@/hooks/useValues';

interface ValueCardProps {
  value: ValueItem;
  index: number;
  isActive: boolean;
  onToggle: (index: number) => void;
  animationDelay?: number;
}

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  inView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80,
      delay: 0
    },
  },
  hover: { 
    scale: 1.03, 
    y: -8,
    boxShadow: "0 20px 60px rgba(218, 165, 32, 0.25)" 
  },
  tap: { scale: 0.97 },
};

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, -5, 5, 0], 
    scale: 1.1,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  active: { 
    rotate: 15, 
    scale: 1.15,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export function ValueCard({ value, index, isActive, onToggle, animationDelay = 0 }: ValueCardProps) {
  const handleClick = () => {
    onToggle(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(index);
    }
  };

  return (
    <InView triggerOnce threshold={0.25}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          variants={cardVariants}
          initial="initial"
          animate={inView ? "inView" : "initial"}
          whileHover="hover"
          whileTap="tap"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-expanded={isActive}
          role="button"
          className={`
            value-card min-w-[280px] max-w-[300px] flex-shrink-0 
            bg-white/5 backdrop-blur-xl border border-white/10
            rounded-2xl p-6 shadow-xl transition-all duration-500 
            cursor-pointer group outline-none relative overflow-hidden
            snap-center transform focus:ring-2 focus:ring-[#daa520]/50
            ${isActive 
              ? "ring-2 ring-[#daa520] scale-105 z-20 border-[#daa520]/40" 
              : "hover:border-[#daa520]/30"
            }
          `}
          style={{
            transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelay}ms`,
          }}
        >
          {/* Enhanced hover background with gradient animation */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ background: "linear-gradient(135deg, rgba(218, 165, 32, 0) 0%, rgba(255, 247, 212, 0) 100%)" }}
            whileHover={{ 
              background: "linear-gradient(135deg, rgba(218, 165, 32, 0.08) 0%, rgba(255, 247, 212, 0.12) 100%)" 
            }}
          />
          
          {/* Shimmer effect on active state */}
          {isActive && (
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent)",
                  "linear-gradient(90deg, transparent, transparent, transparent)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          
          {/* Icon container */}
          <motion.div
            className="relative w-16 h-16 bg-gradient-to-br from-[#fff7d4]/20 to-[#daa520]/15 rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto transition-all duration-300 shadow-lg group-hover:shadow-xl"
            variants={iconVariants}
            animate={isActive ? "active" : "initial"}
            whileHover="hover"
          >
            <div className="text-[#daa520] group-hover:text-[#fff7d4] transition-colors duration-300">
              {value.icon}
            </div>
            
            {/* Icon glow effect */}
            <motion.div 
              className="absolute inset-0 bg-[#daa520]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"
              animate={isActive ? { opacity: 0.4 } : { opacity: 0 }}
            />
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10">
            <h4 className="text-xl font-light text-white mb-2 group-hover:text-[#fff7d4] transition-colors duration-300 tracking-wide">
              {value.title}
            </h4>
            
            <p className="text-[#daa520] text-sm italic mb-4 font-light group-hover:text-[#fff7d4] transition-colors duration-300">
              {value.subtitle}
            </p>
            
            <motion.div
              className="overflow-hidden"
              animate={{ height: isActive ? 'auto' : '4.5rem' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.p
                className="text-gray-200 text-xs md:text-sm leading-relaxed font-light group-hover:text-gray-100 transition-colors duration-300"
                animate={{ opacity: isActive ? 1 : 0.92 }}
                transition={{ duration: 0.2 }}
              >
                {value.description}
              </motion.p>
            </motion.div>
            
            {/* Expand indicator */}
            <motion.div
              className="flex items-center justify-center mt-4"
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-1 bg-[#daa520]/40 rounded-full group-hover:bg-[#daa520]/60 transition-colors duration-300" />
            </motion.div>
            
            {/* Active state hint */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 text-xs text-[#fff7d4]/70 font-light text-center bg-gradient-to-r from-[#daa520]/10 to-transparent backdrop-blur-sm px-3 py-2 rounded-lg border border-[#daa520]/20"
              >
                Click to minimize
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </InView>
  );
}