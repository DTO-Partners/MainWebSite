import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ScrollIndicatorProps {
  readonly onScrollToNext: () => void;
}

export function ScrollIndicator({ onScrollToNext }: ScrollIndicatorProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="absolute bottom-8 right-8 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
    >
      <motion.button
        onClick={onScrollToNext}
        className="p-3 hero-backdrop-blur hero-glow border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        aria-label={t("hero.cta.scrollIndicator")}
      >
        <ChevronDown size={24} />
      </motion.button>
    </motion.div>
  );
}
