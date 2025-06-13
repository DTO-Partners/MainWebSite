import { useTranslation } from 'react-i18next';

export function ValuesHeader() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 text-center mb-20">
      {/* Enhanced badge */}
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#fff7d4]/20 via-white/10 to-[#fff7d4]/20 backdrop-blur-md px-8 py-3 rounded-full border border-[#daa520]/30 shadow-xl mb-8">
        <span className="w-2 h-2 bg-[#daa520] rounded-full shadow-md"></span>
        <span className="text-sm font-semibold text-white tracking-wider uppercase">Core Values</span>
      </div>

      {/* Enhanced title */}
      <h3 className="text-6xl md:text-7xl font-extralight mb-6 tracking-tight text-white leading-none">
        {t('values.header.title', 'Our Values')}
      </h3>
      
      {/* Enhanced divider */}
      <div className="relative mb-8">
        <div className="h-[3px] w-48 bg-gradient-to-r from-[#daa520] via-[#fff7d4] to-[#daa520] mx-auto rounded-full shadow-2xl" />
        <div className="absolute inset-0 h-[3px] w-48 bg-gradient-to-r from-[#daa520] via-white to-[#daa520] mx-auto rounded-full opacity-50 blur-sm" />
      </div>
      
      {/* Enhanced description */}
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
          {t('values.header.description', 'These five values define who we are, how we work, and how we grow — with our partners, candidates, and team.')}
        </p>
        <p className="text-[#daa520]/80 text-sm mt-4 font-light italic">
          Click on each card to explore our commitment in detail
        </p>
      </div>
    </div>
  );
}