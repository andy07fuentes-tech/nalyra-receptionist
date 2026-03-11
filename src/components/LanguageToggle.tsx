import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, type Language } from '../contexts/LanguageContext';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export function LanguageToggle({ isScrolled }: { isScrolled?: boolean }) {
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
        className={`flex items-center gap-2 px-3 py-2 text-sm transition-all duration-300 rounded-xl border ${isScrolled
          ? 'text-dark-theme border-slate-100 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-200'
          : 'text-white/80 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white'
          }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('language.title') as string}
      >
        <Globe className={`w-4 h-4 transition-colors ${isScrolled ? 'text-blue-600' : 'text-blue-400'}`} />
        <span className="hidden sm:inline opacity-80">{currentLang?.flag}</span>
        <span className="uppercase text-xs font-bold tracking-wider">{language}</span>
      </button>

      {/* Dropdown - Premium Glassmorphism (Works for both themes) */}
      <div
        className={`absolute top-full right-0 mt-3 py-2 min-w-[180px] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300 z-50 ${isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
        role="listbox"
        aria-label={t('language.title') as string}
      >
        <div className="px-3 py-1 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Select Language</span>
        </div>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 ${language === lang.code
              ? 'text-blue-600 bg-blue-50/50 font-medium'
              : 'text-slate-600 hover:bg-slate-50 hover:text-blue-500'
              }`}
            role="option"
            aria-selected={language === lang.code}
          >
            <span className="flex items-center gap-3">
              <span className="text-base">{lang.flag}</span>
              <span className="tracking-tight">{lang.label}</span>
            </span>
            {language === lang.code && <Check className="w-4 h-4 stroke-[3px]" />}
          </button>
        ))}
      </div>
    </div>
  );
}
