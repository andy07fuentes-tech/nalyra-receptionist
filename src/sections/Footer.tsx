import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUp, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QuebecFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 36" className="w-8 h-auto inline-block align-middle rounded-[2px] shadow-sm">
    <rect width="54" height="36" fill="#003399"/>
    <path d="M25 0h4v36h-4zM0 16h54v4H0z" fill="#fff"/>
    <path d="M10.3 6.9c-.3 0-.4.3-.4.3s-.2 1.4-1.3 2.1c-.5.3-1.1.2-1.1.2s.3.3.3 1c0 .8-.5 1.5-1.3 1.5h-.1c-.8 0-1.3-.7-1.3-1.5 0-.7.3-1 .3-1s-.6.1-1.1-.2c-1.1-.7-1.3-2.1-1.3-2.1s-.1-.3-.4-.3c-.3 0-.6.3-.6.9 0 1.2.6 2.3 2.1 2.8 0 0 .5.3.5.7l-.4 1.3h5l-.4-1.3c0-.4.5-.7.5-.7 1.5-.5 2.1-1.6 2.1-2.8 0-.6-.3-.9-.6-.9zM10.3 29.1c-.3 0-.4.3-.4.3s-.2 1.4-1.3 2.1c-.5.3-1.1.2-1.1.2s.3.3.3 1c0 .8-.5 1.5-1.3 1.5h-.1c-.8 0-1.3-.7-1.3-1.5 0-.7.3-1 .3-1s-.6.1-1.1-.2c-1.1-.7-1.3-2.1-1.3-2.1s-.1-.3-.4-.3c-.3 0-.6.3-.6.9 0 1.2.6 2.3 2.1 2.8 0 0 .5.3.5.7l-.4 1.3h5l-.4-1.3c0-.4.5-.7.5-.7 1.5-.5 2.1-1.6 2.1-2.8 0-.6-.3-.9-.6-.9zM43.7 6.9c-.3 0-.4.3-.4.3s-.2 1.4-1.3 2.1c-.5.3-1.1.2-1.1.2s.3.3.3 1c0 .8-.5 1.5-1.3 1.5h-.1c-.8 0-1.3-.7-1.3-1.5 0-.7.3-1 .3-1s-.6.1-1.1-.2c-1.1-.7-1.3-2.1-1.3-2.1s-.1-.3-.4-.3c-.3 0-.6.3-.6.9 0 1.2.6 2.3 2.1 2.8 0 0 .5.3.5.7l-.4 1.3h5l-.4-1.3c0-.4.5-.7.5-.7 1.5-.5 2.1-1.6 2.1-2.8 0-.6-.3-.9-.6-.9zM43.7 29.1c-.3 0-.4.3-.4.3s-.2 1.4-1.3 2.1c-.5.3-1.1.2-1.1.2s.3.3.3 1c0 .8-.5 1.5-1.3 1.5h-.1c-.8 0-1.3-.7-1.3-1.5 0-.7.3-1 .3-1s-.6.1-1.1-.2c-1.1-.7-1.3-2.1-1.3-2.1s-.1-.3-.4-.3c-.3 0-.6.3-.6.9 0 1.2.6 2.3 2.1 2.8 0 0 .5.3.5.7l-.4 1.3h5l-.4-1.3c0-.4.5-.7.5-.7 1.5-.5 2.1-1.6 2.1-2.8 0-.6-.3-.9-.6-.9z" fill="#fff"/>
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
      <div className="bg-[#E8E3DD] py-20">
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
      </div>

      {/* 2. Main Footer Grid */}
      <div className="bg-white pt-24 pb-12 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 relative z-10">
            {/* Brand/Contact Column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <img 
                  src="/anvela-logo.jpg" 
                  alt="Anvela Logo" 
                  className="h-16 w-auto object-contain mix-blend-multiply"
                />
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold leading-none ml-1">
                  {t('footer.tagline')}
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { Icon: MapPin, label: t('contact.contactItems.address.label'), value: t('contact.contactItems.address.value') },
                  { Icon: Phone, label: t('contact.contactItems.phone.label'), value: t('contact.contactItems.phone.value') },
                  { Icon: Mail, label: t('contact.contactItems.email.label'), value: t('contact.contactItems.email.value') },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <item.Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-widest text-blue-900/40">{item.label}</p>
                      <p className="text-blue-900 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 flex items-center gap-3">
                  <QuebecFlag />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-900/60 font-medium">
                    {t('footer.madeInQuebec')}
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

          {/* 3. Large Watermark Branding */}
          <div className="mt-20 relative pointer-events-none select-none">
            <h2 className="text-[clamp(4rem,20vw,24rem)] font-black text-blue-900/[0.08] leading-[0.8] tracking-tighter text-center uppercase italic antialiased">
              Anvela
            </h2>
          </div>
        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="border-t border-slate-100 bg-white py-8">
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
      </div>
    </footer>
  );
}
