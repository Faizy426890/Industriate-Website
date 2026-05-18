'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations, type Lang, type Translations } from '@/lib/translations';

type LanguageCtx = {
  lang: Lang;
  t: Translations;
  toggle: () => void;
};

const Ctx = createContext<LanguageCtx>({
  lang: 'en',
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('industritas-lang') as Lang | null;
      if (saved === 'en' || saved === 'es') setLang(saved);
    } catch {}
  }, []);

  function toggle() {
    const next: Lang = lang === 'en' ? 'es' : 'en';
    setLang(next);
    try { localStorage.setItem('industritas-lang', next); } catch {}
  }

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage() {
  return useContext(Ctx);
}
