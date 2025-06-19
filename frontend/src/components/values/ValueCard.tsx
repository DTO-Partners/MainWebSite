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
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={isActive}
      className={`
        value-card min-w-[300px] sm:min-w-[320px] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[320px]
        max-w-[300px] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px]
        flex-shrink-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl 
        border-2 rounded-3xl p-6 md:p-8 shadow-2xl cursor-pointer group outline-none 
        relative overflow-hidden snap-center focus:ring-2 focus:ring-[#daa520]/50
        transition-colors duration-300 text-left
        ${isActive 
          ? "ring-2 ring-[#daa520] border-[#daa520]/60 bg-gradient-to-br from-white/15 via-white/8 to-white/15 shadow-3xl" 
          : "border-white/20 hover:border-[#daa520]/40 hover:shadow-3xl"
        }
      `}
    >
      {/* Static background overlay */}
      <div className={`absolute inset-0 rounded-3xl transition-colors duration-300 ${
        isActive 
          ? "bg-gradient-to-br from-[#daa520]/15 via-[#fff7d4]/10 to-[#daa520]/5" 
          : "bg-gradient-to-br from-[#daa520]/0 to-[#fff7d4]/0 group-hover:from-[#daa520]/8 group-hover:to-[#fff7d4]/12"
      }`} />
      
      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border border-[#daa520]/30 rotate-45 opacity-60" />
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#fff7d4]/30 rounded-full" />
      
      {/* Static icon container */}
      <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-8 mx-auto shadow-2xl transition-colors duration-300 ${
        isActive 
          ? "bg-gradient-to-br from-[#daa520] via-[#b8860b] to-[#daa520] shadow-[#daa520]/40" 
          : "bg-gradient-to-br from-[#fff7d4]/25 to-[#daa520]/20 group-hover:shadow-xl group-hover:shadow-[#daa520]/30"
      }`}>
        <div className={`transition-colors duration-300 ${
          isActive ? "text-white" : "text-[#daa520] group-hover:text-[#fff7d4]"
        }`}>
          {value.icon}
        </div>
      </div>
      
      {/* Enhanced content */}
      <div className="relative z-10">
        <h4 className={`text-2xl font-light mb-3 tracking-wide transition-colors duration-300 ${
          isActive ? "text-[#fff7d4]" : "text-white group-hover:text-[#fff7d4]"
        }`}>
          {value.title}
        </h4>
        
        <p className={`text-sm italic mb-6 font-light transition-colors duration-300 ${
          isActive ? "text-[#fff7d4]/90" : "text-[#daa520] group-hover:text-[#fff7d4]/90"
        }`}>
          {value.subtitle}
        </p>
        
        {/* Static expandable content - no animations */}
        <div className={`${isActive ? 'block' : 'hidden'}`}>
          <p className={`text-sm leading-relaxed font-light transition-colors duration-300 ${
            isActive ? "text-gray-100" : "text-gray-200 group-hover:text-gray-100"
          }`}>
            {value.description}
          </p>
        </div>
        
        {/* Collapsed preview when not active */}
        {!isActive && (
          <div className="block">
            <p className="text-gray-200 group-hover:text-gray-100 text-sm leading-relaxed font-light transition-colors duration-300">
              {value.description.length > 100 
                ? `${value.description.substring(0, 100)}...`
                : value.description
              }
            </p>
          </div>
        )}
        
        {/* Simple expand indicator */}
        <div className="flex items-center justify-center mt-6">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300 ${
            isActive 
              ? 'bg-[#daa520]/20 border-[#daa520]/40 text-[#fff7d4]' 
              : 'bg-white/5 border-[#daa520]/30 text-[#daa520] group-hover:border-[#daa520]/50 group-hover:bg-white/10'
          }`}>
            <span className="text-xs font-medium tracking-wide">
              {isActive ? 'Click to collapse' : 'Click to expand'}
            </span>
            <div 
              className={`w-4 h-0.5 rounded-full transition-colors duration-300 ${
                isActive 
                  ? 'bg-[#fff7d4]' 
                  : 'bg-[#daa520] group-hover:bg-[#fff7d4]'
              }`} 
            />
          </div>
        </div>
        
        {/* Status indicator for active state */}
        {isActive && (
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-[#fff7d4]/80 bg-gradient-to-r from-[#daa520]/15 to-[#fff7d4]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#daa520]/30">
              <div className="w-2 h-2 bg-[#daa520] rounded-full" />
              <span className="font-medium">Expanded</span>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}