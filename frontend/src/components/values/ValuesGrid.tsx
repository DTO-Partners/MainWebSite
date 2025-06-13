import { ValueCard } from './ValueCard';
import { ValueItem } from '@/hooks/useValues';

interface ValuesGridProps {
  values: ValueItem[];
  activeIndex: number | null;
  onToggleCard: (index: number) => void;
}

export function ValuesGrid({ values, activeIndex, onToggleCard }: ValuesGridProps) {
  return (
    <div className="values-grid-container relative">
      {/* Enhanced container with better spacing */}
      <div className="flex w-full gap-2 pb-8 min-h-fit md:overflow-x-visible md:scrollbar-none overflow-x-auto values-scrollbar snap-x md:justify-center lg:gap-5">
        {values.map((value, index) => (
          <ValueCard
            key={value.id}
            value={value}
            index={index}
            isActive={activeIndex === index}
            onToggle={onToggleCard}
          />
        ))}
      </div>
      
      {/* Scroll hint for mobile */}
      <div className="md:hidden flex justify-center mt-6">
        <div className="flex items-center gap-2 text-xs text-[#daa520]/60 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-[#daa520]/20">
          <span>Swipe to explore</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-[#daa520]/40 rounded-full" />
            <div className="w-1 h-1 bg-[#daa520]/60 rounded-full" />
            <div className="w-1 h-1 bg-[#daa520]/40 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
