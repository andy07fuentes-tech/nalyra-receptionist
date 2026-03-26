import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, ArrowUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, ArrowUp,
};

export function Footer() {
  const { t } = useLanguage();

  // Define social links
  const socialLinks = [
    { icon: 'Twitter', label: 'Twitter', href: 'https://twitter.com' },
    { icon: 'Linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: 'Facebook', label: 'Facebook', href: 'https://facebook.com' },
    { icon: 'Instagram', label: 'Instagram', href: 'https://instagram.com' },
  ];

  // Define link groups from translations
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
          href: ['#about', '#careers', '#blog', '#press'][i]
        })),
      },
    ];
  };

  const linkGroups = getLinkGroups();

  // Define contact items
  const contactItems = [
    { icon: 'MapPin', text: t('contact.contactItems.address.value') },
    { icon: 'Phone', text: t('contact.contactItems.phone.value') },
    { icon: 'Mail', text: t('contact.contactItems.email.value') },
  ];

  // Legal links from translations
  const getLegalLinks = () => {
    return t('footer.legalLinks') as string[];
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    // Simulate newsletter submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch {
      setNewsletterStatus('error');
    }

    setTimeout(() => setNewsletterStatus('idle'), 4000);
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
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <nav aria-label="Social media links">
              <div className="flex gap-3">
                {socialLinks.map((social: { icon: string; label: string; href: string }) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                    </a>
                  );
                })}
              </div>
            </nav>
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

          {/* Contact Info + Newsletter */}
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

            {/* Newsletter */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-slate-500 text-sm mb-3">{t('footer.newsletterLabel')}</p>
              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>{t('footer.newsletterSuccessText')}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">{t('footer.newsletterLabel')}</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t('footer.newsletterPlaceholder')}
                    required
                    autoComplete="email"
                    className="w-full sm:flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme text-sm placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-blue-500/20 shadow-lg whitespace-nowrap"
                  >
                    {t('footer.newsletterButtonText')}
                  </button>
                </form>
              )}
              {newsletterStatus === 'error' && (
                <p className="text-red-600 text-xs mt-2">{t('footer.newsletterErrorText')}</p>
              )}
            </div>
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
