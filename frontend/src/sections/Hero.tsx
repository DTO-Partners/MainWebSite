import { VideoBackground } from '@/components/hero/VideoBackground';
import { AnimatedParticles } from '@/components/hero/AnimatedParticles';
import { HeroContent } from '@/components/hero/HeroContent';
import { ScrollIndicator } from '@/components/hero/ScrollIndicator';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("AboutUs");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="Hero" 
      className="relative w-full h-screen min-h-[100vh] max-h-screen overflow-hidden"
      style={{ height: '100vh', minHeight: '100vh' }}
    >
      {/* Video Background - Fixed positioning to prevent scroll issues */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ zIndex: 0 }}>
        <VideoBackground />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full" style={{ zIndex: 10 }}>
        {/* Animated Particles */}
        <AnimatedParticles count={20} />
        
        {/* Hero Content */}
        <HeroContent isLoaded={true} onScrollToNext={scrollToNext} />

        {/* Scroll Indicator */}
        <ScrollIndicator onScrollToNext={scrollToNext} />
      </div>
    </section>
  );
}