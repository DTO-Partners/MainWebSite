import { motion } from 'framer-motion';
import { Slide } from '@/hooks/useHeroSlideshow';
import { useState } from 'react';

interface BackgroundSlideshowProps {
  slides: Slide[];
  current: number;
}

export function BackgroundSlideshow({ slides, current }: BackgroundSlideshowProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(slides.length).fill(false));

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full bg-gray-900" style={{ zIndex: 0 }}>
      {/* Fallback background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {slides.map((slide, index) => (
        <motion.div
          key={`slide-${index}`}
          className="absolute inset-0 w-full h-full hero-image-stable"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: current === index && imageLoaded[index] ? 1 : 0
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeInOut"
          }}
          style={{ 
            zIndex: current === index ? 2 : 1,
            willChange: 'opacity',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              display: 'block',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
            loading={index === 0 ? "eager" : "lazy"}
            onLoad={() => handleImageLoad(index)}
            onError={() => {
              console.error(`Failed to load image: ${slide.src}`);
              // Don't hide the image, let the fallback show
            }}
          />
          
          {/* Enhanced Multi-layer Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
          
          {/* Additional center spotlight effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 pointer-events-none" />
        </motion.div>
      ))}
      
      {/* Loading state for first image */}
      {!imageLoaded[0] && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: imageLoaded[0] ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 5 }}
        >
          <div className="text-white/60 text-xl font-light">Loading Experience...</div>
        </motion.div>
      )}
    </div>
  );
}