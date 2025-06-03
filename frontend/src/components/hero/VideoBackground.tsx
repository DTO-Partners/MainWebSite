import { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  className?: string;
}

export function VideoBackground({ className = '' }: VideoBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(console.error);
    };

    const handleError = () => {
      setHasError(true);
      console.error('Failed to load hero video');
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full bg-gray-900 ${className}`}>
      {/* Fallback background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {!hasError && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
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
        >
          <source src="/hero_video.mp4" type="video/mp4" />
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
