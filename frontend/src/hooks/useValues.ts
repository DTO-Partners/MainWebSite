import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLock, FaGlobe, FaBolt, FaSearch, FaLanguage } from 'react-icons/fa';

export interface ValueItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

export interface UseValuesReturn {
  values: ValueItem[];
  activeIndex: number | null;
  setActiveValue: (index: number | null) => void;
  toggleValue: (index: number) => void;
}

export function useValues(): UseValuesReturn {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const values: ValueItem[] = [
    {
      id: 'confidentiality',
      title: t('values.confidentiality.title', 'Confidentiality'),
      subtitle: t('values.confidentiality.subtitle', 'A value we never compromise.'),
      description: t('values.confidentiality.description', 'We treat confidentiality as the core of our services, safeguarding your information with the highest standards of discretion.'),
      icon: FaLock({}),
    },
    {
      id: 'multiculturalism',
      title: t('values.multiculturalism.title', 'Multiculturalism'),
      subtitle: t('values.multiculturalism.subtitle', 'We see diversity as strength.'),
      description: t('values.multiculturalism.description', 'We honor and respect the culture and practices of each country we operate in, ensuring our recruitment reflects the diversity and uniqueness of those cultures.'),
      icon: FaLanguage({}),
    },
    {
      id: 'efficiency',
      title: t('values.efficiency.title', 'Efficiency'),
      subtitle: t('values.efficiency.subtitle', 'Moving fast, with purpose.'),
      description: t('values.efficiency.description', 'We focus on providing effective and streamlined recruitment solutions that deliver real results.'),
      icon: FaBolt({}),
    },
    {
      id: 'transparency',
      title: t('values.transparency.title', 'Transparency'),
      subtitle: t('values.transparency.subtitle', 'Clarity builds trust.'),
      description: t('values.transparency.description', 'We believe in open, clear communication with clients and candidates at every step of the process.'),
      icon: FaSearch({}),
    },
    {
      id: 'internationalization',
      title: t('values.internationalization.title', 'Internationalization'),
      subtitle: t('values.internationalization.subtitle', 'Connecting people, globally.'),
      description: t('values.internationalization.description', 'Our mission is to connect talent and opportunity across borders, enabling global career growth.'),
      icon: FaGlobe({}),
    },
  ];

  const setActiveValue = (index: number | null) => {
    setActiveIndex(index);
  };

  const toggleValue = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return {
    values,
    activeIndex,
    setActiveValue,
    toggleValue,
  };
}
