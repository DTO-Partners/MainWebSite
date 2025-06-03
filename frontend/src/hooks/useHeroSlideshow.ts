import { useEffect, useState } from 'react';

// Import your images
import img1 from "@/assets/pic_one.png";
import img2 from "@/assets/pic_two.png";
import img3 from "@/assets/pic_three.png";
import img4 from "@/assets/pic_four.png";
import img5 from "@/assets/pic_five.png";
import img6 from "@/assets/pic_six.png";
import img7 from "@/assets/pic_seven.jpg";

export interface Slide {
  src: string;
  alt: string;
}

export const slides: Slide[] = [
  { src: img1, alt: "Professional Business Meeting" },
  { src: img2, alt: "Global Partnership" },
  { src: img3, alt: "Team Collaboration" },
  { src: img4, alt: "Strategic Planning" },
  { src: img5, alt: "International Growth" },
  { src: img6, alt: "Innovation Excellence" },
  { src: img7, alt: "Leadership Vision" }
];

export interface UseHeroSlideshowReturn {
  current: number;
  isLoaded: boolean;
  slides: Slide[];
  setCurrent: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
}

export function useHeroSlideshow(intervalDuration: number = 4000): UseHeroSlideshowReturn {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload the first few images for better performance
    const preloadImages = async () => {
      const preloadPromises = slides.slice(0, 3).map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = slide.src;
        });
      });

      try {
        await Promise.all(preloadPromises);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setIsLoaded(true); // Continue anyway
      }
    };

    preloadImages();

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, intervalDuration);
    
    return () => clearInterval(interval);
  }, [intervalDuration]);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return {
    current,
    isLoaded,
    slides,
    setCurrent,
    goToNext,
    goToPrevious
  };
}