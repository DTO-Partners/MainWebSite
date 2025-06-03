import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#daa520] via-[#fff7d4] to-[#daa520] origin-left z-10"
      style={{ scaleX }}
      initial={{ scaleX: 0 }}
    />
  );
}
