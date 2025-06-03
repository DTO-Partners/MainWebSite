import { motion } from 'framer-motion';
import { ValueItem } from '@/hooks/useValues';

interface ValueCardProps {
  value: ValueItem;
  index: number;
  isActive: boolean;
  onToggle: (index: number) => void;
}

export function ValueCard({ value, index, isActive, onToggle }: ValueCardProps) {
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
    <div
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={isActive}
      role="button"
      className={`
        value-card min-w-[280px] max-w-[300px] flex-shrink-0 
        bg-white/5 backdrop-blur-xl border border-white/10
        rounded-2xl p-6 shadow-xl transition-all duration-300 
        cursor-pointer group outline-none relative overflow-hidden
        snap-center transform focus:ring-2 focus:ring-[#daa520]/50
        hover:border-[#daa520]/30 hover:shadow-2xl
        ${isActive 
          ? "ring-2 ring-[#daa520] scale-105 z-20 border-[#daa520]/40" 
          : ""
        }
      `}
    >
      {/* Simple hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 to-[#fff7d4]/0 group-hover:from-[#daa520]/8 group-hover:to-[#fff7d4]/12 transition-all duration-300 rounded-2xl" />
      
      {/* Icon container */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-[#fff7d4]/20 to-[#daa520]/15 rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto transition-all duration-300 shadow-lg group-hover:shadow-xl">
        <div className="text-[#daa520] group-hover:text-[#fff7d4] transition-colors duration-300">
          {value.icon}
        </div>
      </div>
      
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
          <p className="text-gray-200 text-xs md:text-sm leading-relaxed font-light group-hover:text-gray-100 transition-colors duration-300">
            {value.description}
          </p>
        </motion.div>
        
        {/* Simple expand indicator */}
        <div className="flex items-center justify-center mt-4">
          <div 
            className={`w-6 h-1 rounded-full transition-all duration-300 ${
              isActive 
                ? 'bg-[#daa520] rotate-180' 
                : 'bg-[#daa520]/40 group-hover:bg-[#daa520]/60'
            }`} 
          />
        </div>
        
        {/* Simple active state hint */}
        {isActive && (
          <div className="mt-4 text-xs text-[#fff7d4]/70 font-light text-center bg-gradient-to-r from-[#daa520]/10 to-transparent backdrop-blur-sm px-3 py-2 rounded-lg border border-[#daa520]/20 opacity-80">
            Click to minimize
          </div>
        )}
      </div>
    </div>
  );
}