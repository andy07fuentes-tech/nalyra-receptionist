import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, MapPin, Phone, Mail, ArrowUp,
};

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
    { icon: 'MapPin', text: t('contact.contactItems.address.value') },
    { icon: 'Phone', text: t('contact.contactItems.phone.value') },
    { icon: 'Mail', text: t('contact.contactItems.email.value') },
  ];

  const getLegalLinks = () => t('footer.legalLinks') as string[];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <div>
                <span className="font-serif text-xl text-dark-theme block">{t('footer.brandName')}</span>
                <span className="text-[10px] text-blue-600 tracking-widest uppercase">{t('footer.tagline')}</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group: { title: string; links: { name: string; href: string }[] }, index: number) => (
            <nav key={index} aria-label={group.title}>
              <h3 className="font-serif text-lg text-dark-theme mb-5">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link: { name: string; href: string }) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-500 text-sm hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg text-dark-theme mb-5">{t('footer.linkGroups.company.title')}</h3>
            <ul className="space-y-4">
              {contactItems.map((item: { icon: string; text: string }, index: number) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li key={index} className="flex items-start gap-3">
                    {IconComponent && <IconComponent className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />}
                    <span className="text-slate-500 text-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-400 text-[10px] md:text-xs">
            <span>{t('footer.copyrightText')}</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {getLegalLinks().map((link: string, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="hidden md:inline mr-3 text-slate-300">|</span>
                  <Link to="/privacy" className="hover:text-blue-600 transition-colors font-medium">{link}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 text-sm hover:text-blue-600 transition-colors group"
            aria-label={t('footer.backToTopText')}
          >
            <span>{t('footer.backToTopText')}</span>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
