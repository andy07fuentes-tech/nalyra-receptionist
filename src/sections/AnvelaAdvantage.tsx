import { useLanguage } from '../contexts/LanguageContext';

export function AnvelaAdvantage() {
  const { t } = useLanguage();

  // Split advantages text to bold the first sentence
  const advantagesText = t('gallery.clientsList');
  const firstPeriodIndex = advantagesText.indexOf('.');
  const firstSentence = firstPeriodIndex !== -1 ? advantagesText.substring(0, firstPeriodIndex + 1) : '';
  const restOfText = firstPeriodIndex !== -1 ? advantagesText.substring(firstPeriodIndex + 1) : advantagesText;

  return (
    <section id="anvela-advantage" className="bg-white py-24 md:py-32">
      <div className="container-custom px-4">
        <div className="max-w-5xl">
          <p className="text-neutral-900 font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
            <span className="font-bold italic mr-4 block mb-4 text-xl md:text-2xl uppercase tracking-widest text-blue-600 font-sans not-italic">
              {t('gallery.selectClients')}
            </span>
            {firstSentence && <span className="font-bold">{firstSentence}</span>}
            <span className="text-neutral-800 opacity-90"> {restOfText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
