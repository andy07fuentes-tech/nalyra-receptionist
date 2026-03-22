import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, any>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations } from '../i18n/translations';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string, params?: Record<string, any>): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    const findValue = (obj: any, ks: string[]) => {
      let current = obj;
      for (const k of ks) {
        if (current && typeof current === 'object' && k in current) {
          current = current[k];
        } else {
          return undefined;
        }
      }
      return current;
    };

    value = findValue(translations[language], keys);
    
    if (value === undefined) {
      value = findValue(translations['fr'], keys);
    }

    if (value === undefined) return key;

    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce((acc, [k, v]) => {
        return acc.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      }, value);
    }

    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
