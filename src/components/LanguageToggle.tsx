import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('language.title') as string}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
        <span className="uppercase text-xs font-medium">{language}</span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full right-0 mt-2 py-2 min-w-[160px] bg-wine-800/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl transition-all duration-300 z-50 ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
        role="listbox"
        aria-label={t('language.title') as string}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-200 ${
              language === lang.code
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
            role="option"
            aria-selected={language === lang.code}
          >
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </span>
            {language === lang.code && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}
