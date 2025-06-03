import { useTranslation } from 'react-i18next';

export function ValuesHeader() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 text-center mb-16">
      <h3 className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-white">
        {t('values.header.title', 'Our Values')}
      </h3>
      
      <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto rounded-full shadow-lg mb-8" />
      
      <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
        {t('values.header.description', 'These five values define who we are, how we work, and how we grow — with our partners, candidates, and team.')}
      </p>
    </div>
  );
}