
import { useCallback, useState } from 'react';
import { Language } from '@/lib/types';

export function useLanguage(initialLanguage: Language = 'en') {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);

  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => prev === 'en' ? 'pt' : 'en');
  }, []);

  const setLanguage = useCallback((language: Language) => {
    setCurrentLanguage(language);
  }, []);

  return {
    currentLanguage,
    toggleLanguage,
    setLanguage,
  };
}
