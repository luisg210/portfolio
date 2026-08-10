/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Lang, Translate, t } from '@/i18n';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translate;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'lang';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'es';
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo<LanguageContextValue>(() => ({ lang, setLang, t: t(lang) }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
