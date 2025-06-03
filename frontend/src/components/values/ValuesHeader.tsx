import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ValuesHeader() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 text-center mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-white"
      >
        {t('values.header.title', 'Our Values')}
      </motion.h3>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="origin-center h-[2px] w-32 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto rounded-full shadow-lg mb-8"
      />
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light"
      >
        {t('values.header.description', 'These five values define who we are, how we work, and how we grow — with our partners, candidates, and team.')}
      </motion.p>
    </div>
  );
}