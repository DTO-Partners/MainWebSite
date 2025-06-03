import { motion } from 'framer-motion';
import { Slide } from '@/hooks/useHeroSlideshow';

interface BackgroundSlideshowProps {
  slides: Slide[];
  current: number;
}

export function BackgroundSlideshow({ slides, current }: BackgroundSlideshowProps) {
  return (
    <div className="absolute inset-0 z-0">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: current === index ? 1 : 0
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut"
          }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </motion.div>
      ))}
    </div>
  );
}