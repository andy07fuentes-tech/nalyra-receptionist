import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  const { t } = useLanguage();

  usePageMeta({
    title: `${t('notFound.title')} | Anvela`,
    description: t('notFound.description') as string,
    path: '/404',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-wine-900 flex flex-col items-center justify-center px-4 text-center">
      <span className="font-serif text-3xl text-gold-400 tracking-wide">Anvela</span>
      <p className="mt-8 text-7xl font-serif text-white">404</p>
      <h1 className="mt-4 text-xl font-sans text-white">{t('notFound.title')}</h1>
      <p className="mt-2 text-wine-100/70 font-sans">{t('notFound.description')}</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-gold-500 px-6 py-3 font-sans text-sm text-wine-900 transition-colors hover:bg-gold-400"
      >
        {t('notFound.cta')}
      </Link>
    </div>
  );
}
