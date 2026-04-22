import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export function AnvelaAdvantage() {
  const { t } = useLanguage();

  const advantagesText = t('gallery.clientsList');
  const firstPeriodIndex = advantagesText.indexOf('.');
  const firstSentence = firstPeriodIndex !== -1 ? advantagesText.substring(0, firstPeriodIndex + 1) : '';
  const restOfText = firstPeriodIndex !== -1 ? advantagesText.substring(firstPeriodIndex + 1) : advantagesText;

  return (
    <section id="anvela-advantage" className="bg-white py-24 md:py-32">
      <div className="container-custom px-4">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-bold italic mr-4 block mb-4 text-xl md:text-2xl uppercase tracking-widest text-blue-600 font-sans not-italic">
              {t('gallery.selectClients')}
            </span>
          </motion.div>
          <motion.p
            className="text-neutral-900 font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {firstSentence && <span className="font-bold">{firstSentence}</span>}
            <span className="text-neutral-800 opacity-90"> {restOfText}</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
