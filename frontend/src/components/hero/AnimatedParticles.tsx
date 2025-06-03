import { motion } from 'framer-motion';

interface AnimatedParticlesProps {
  count?: number;
}

export function AnimatedParticles({ count = 20 }: AnimatedParticlesProps) {
  return (
    <div className="absolute inset-0 z-[5]">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}