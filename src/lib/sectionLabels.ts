/**
 * Section names shown on the navigation curtain (see smoothNavigate.ts).
 * Kept here rather than in translations.ts so the curtain stays self-contained.
 */
type Lang = 'fr' | 'en' | 'es' | 'it';

const LABELS: Record<Lang, Record<string, string>> = {
  fr: {
    hero: 'Accueil',
    'demo-showcase': 'Démo',
    capabilities: 'Fonctionnalités',
    pricing: 'Tarifs',
    faq: 'Questions',
    founder: 'Le fondateur',
    contact: 'Contact',
  },
  en: {
    hero: 'Home',
    'demo-showcase': 'Demo',
    capabilities: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    founder: 'The founder',
    contact: 'Contact',
  },
  es: {
    hero: 'Inicio',
    'demo-showcase': 'Demo',
    capabilities: 'Funciones',
    pricing: 'Precios',
    faq: 'Preguntas',
    founder: 'El fundador',
    contact: 'Contacto',
  },
  it: {
    hero: 'Home',
    'demo-showcase': 'Demo',
    capabilities: 'Funzionalità',
    pricing: 'Prezzi',
    faq: 'Domande',
    founder: 'Il fondatore',
    contact: 'Contatto',
  },
};

export function sectionLabel(id: string, lang: string): string | undefined {
  const l = (['fr', 'en', 'es', 'it'].includes(lang) ? lang : 'fr') as Lang;
  return LABELS[l][id];
}
