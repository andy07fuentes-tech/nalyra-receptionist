import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUp, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CanadianFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" className="w-6 h-auto inline-block align-middle">
    <path fill="#F00" d="M0 0h20v10H0z"/>
    <path fill="#FFF" d="M5 0h10v10H5z"/>
    <path fill="#F00" d="M10.1 2.3l.2 1.3 1.2-.4-.9 1 1 1.4-1.4-.2.1 1.2-1 .9-1-.9.1-1.2-1.4.2 1-1.4-.9-1 1.2.4.2-1.3z"/>
  </svg>
);

export function Footer() {
  const { t } = useLanguage();

  const getLinkGroups = () => {
    const footerTranslations = t('footer') as any;
    const linkGroupsData = footerTranslations.linkGroups;

    return [
      {
        title: linkGroupsData.product.title,
        links: linkGroupsData.product.links.map((name: string, i: number) => ({
          name,
          href: ['#feature-showcase', '#pricing', '#faq', '#contact'][i]
        })),
      },
      {
        title: linkGroupsData.company.title,
        links: linkGroupsData.company.links.map((name: string, i: number) => ({
          name,
          href: ['#story', '#contact', '#faq', '#contact'][i]
        })),
      },
    ];
  };

  const linkGroups = getLinkGroups();

  const contactItems = [
    { label: t('contact.contactItems.address.label'), value: t('contact.contactItems.address.value') },
    { label: t('contact.contactItems.phone.label'), value: t('contact.contactItems.phone.value') },
    { label: t('contact.contactItems.email.label'), value: t('contact.contactItems.email.value') },
  ];

  const getLegalLinks = () => t('footer.legalLinks') as string[];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white font-sans" role="contentinfo">
      {/* 1. Newsletter Section - Cream Background */}
      <section className="bg-[#E8E3DD] py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 max-w-md leading-tight">
              {t('footer.newsletterHeading')}
            </h2>
            <div className="w-full lg:max-w-xl">
              <form className="relative flex items-center border-b border-blue-900/20 pb-2 group focus-within:border-blue-900 transition-colors duration-300" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="bg-transparent border-none focus:ring-0 w-full py-4 text-xl text-blue-900 placeholder:text-blue-900/40 font-light"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-blue-800 transition-all duration-300 ml-4 whitespace-nowrap"
                >
                  {t('footer.newsletterButtonText')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Footer Grid */}
      <section className="bg-white pt-24 pb-12 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 relative z-10">
            {/* Contact Column */}
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-blue-900/50 font-bold italic">
                {t('contact.subtitle')}
              </h3>
              <div className="space-y-6">
                {contactItems.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-blue-900/40">{item.label}</p>
                    <p className="text-blue-900 text-sm leading-relaxed">{item.value}</p>
                  </div>
                ))}
                <div className="pt-4 flex items-center gap-3">
                  <CanadianFlag />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-900/60 font-medium">
                    {t('footer.madeInCanada')}
                  </span>
                </div>
              </div>
            </div>

            {/* Link Groups */}
            {linkGroups.map((group, idx) => (
              <div key={idx} className="space-y-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-blue-900/50 font-bold italic">
                  {group.title}
                </h3>
                <nav aria-label={group.title}>
                  <ul className="space-y-4">
                    {group.links.map((link: { name: string; href: string }, lIdx: number) => (
                      <li key={lIdx}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-blue-900 text-sm hover:translate-x-1 transition-transform duration-300 block"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}

            {/* Social / About Column */}
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-blue-900/50 font-bold italic">
                {t('footer.socialFollow')}
              </h3>
              <div className="flex flex-wrap gap-4">
                {[Linkedin, Twitter, Instagram, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 border border-blue-900/10 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Large Branding Logo */}
          <div className="mt-20 flex justify-center opacity-[0.05] grayscale brightness-0 select-none pointer-events-none">
            <img 
              src="/anvela-logo.jpg" 
              alt="Anvela Logo" 
              className="max-h-[200px] md:max-h-[300px] lg:max-h-[400px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* 4. Bottom Bar */}
      <section className="border-t border-slate-100 bg-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 order-2 md:order-1">
              <span className="text-[10px] text-blue-900/40 uppercase tracking-widest">
                {t('footer.copyrightText')}
              </span>
              <div className="flex gap-6">
                {getLegalLinks().map((link: string, idx: number) => (
                  <Link
                    key={idx}
                    to="/privacy"
                    className="text-[10px] text-blue-900/60 uppercase tracking-widest hover:text-blue-900 transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 text-blue-900/60 hover:text-blue-900 transition-all duration-300 group order-1 md:order-2"
            >
              <span className="text-[10px] uppercase tracking-widest font-medium">
                {t('footer.backToTopText')}
              </span>
              <div className="w-8 h-8 rounded-full border border-blue-900/10 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
