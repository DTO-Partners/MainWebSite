import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface VideoBackgroundProps {
  className?: string;
}

export function VideoBackground({ className = '' }: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fallbackUsed, setFallbackUsed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { i18n } = useTranslation();
  
  // Get video source based on current language with fallback
  const getVideoSource = (language: string, useFallback: boolean = false) => {
    if (useFallback) {
      return '/hero_video.mp4'; // Always use default video as fallback
    }
    
    switch (language) {
      case 'pl':
        return '/hero_video_pl.mp4'; // Polish video (needs to be added to public folder)
      case 'en':
      default:
        return '/hero_video.mp4'; // English/default video
    }
  };

  const currentVideoSource = getVideoSource(i18n.language, fallbackUsed);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      setIsTransitioning(false);
      video.play().catch(console.error);
    };

    const handleError = () => {
      // If we're not already using fallback and the Polish video failed, try fallback
      if (!fallbackUsed && i18n.language === 'pl') {
        console.warn('Polish video failed to load, falling back to default video');
        setFallbackUsed(true);
        setIsTransitioning(true);
        return;
      }
      
      setHasError(true);
      setIsTransitioning(false);
      console.error('Failed to load hero video:', currentVideoSource);
    };

    const handleLoadStart = () => {
      setIsLoaded(false);
      setHasError(false);
      setIsTransitioning(true);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [currentVideoSource]);

  // Effect to handle language changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset fallback state when language changes
    setFallbackUsed(false);
    setHasError(false);
    
    // Set the new video source
    video.src = currentVideoSource;
    video.load(); // Reload the video with new source
  }, [i18n.language]); // Watch language directly instead of currentVideoSource

  // Effect to handle fallback changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !fallbackUsed) return;

    video.src = currentVideoSource;
    video.load();
  }, [fallbackUsed, currentVideoSource]);

  return (
    <div className={`absolute inset-0 w-full h-full bg-gray-900 ${className}`}>
      {/* Fallback background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Loading indicator during video transitions */}
      {isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <p className="text-white/80 text-sm">Loading video...</p>
          </div>
        </div>
      )}
      
      {!hasError && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            display: 'block',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={currentVideoSource}
        >
          <source src={currentVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Enhanced Multi-layer Gradient Overlays - same as original */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
      
      {/* Additional center spotlight effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 pointer-events-none" />
      
      {/* Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-10">
          <div className="text-white/60 text-xl font-light">Loading Experience...</div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-10">
          <div className="text-white/60 text-xl font-light">Experience Loading...</div>
        </div>
      )}
    </div>
  );
}
