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
      {/* Responsive: Scrollable slider on mobile, grid on desktop */}
      <div className="flex w-full gap-6 pb-4 min-h-fit md:overflow-x-visible md:scrollbar-none overflow-x-auto values-scrollbar snap-x md:justify-center">
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
    </div>
  );
}
