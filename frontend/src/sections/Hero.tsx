import { useHeroSlideshow } from '@/hooks/useHeroSlideshow';
import { BackgroundSlideshow } from '@/components/hero/BackgroundSlideshow';
import { AnimatedParticles } from '@/components/hero/AnimatedParticles';
import { HeroContent } from '@/components/hero/HeroContent';
import { ProgressIndicators } from '@/components/hero/ProgressIndicators';
import { ScrollIndicator } from '@/components/hero/ScrollIndicator';

export default function Hero() {
  const { current, isLoaded, slides, setCurrent } = useHeroSlideshow(4000);

  const scrollToNext = () => {
    const nextSection = document.getElementById("AboutUs");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="Hero" className="relative min-h-screen overflow-hidden">
      {/* Background Slideshow */}
      <BackgroundSlideshow slides={slides} current={current} />
      
      {/* Animated Particles */}
      <AnimatedParticles count={20} />
      
      {/* Hero Content */}
      <HeroContent isLoaded={isLoaded} onScrollToNext={scrollToNext} />
      
      {/* Progress Indicators */}
      <ProgressIndicators 
        slides={slides} 
        current={current} 
        setCurrent={setCurrent}
        intervalDuration={4000}
      />

      {/* Scroll Indicator */}
      <ScrollIndicator onScrollToNext={scrollToNext} />
    </section>
  );
}