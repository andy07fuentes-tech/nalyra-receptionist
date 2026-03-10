import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Phone, Mail, Clock,
};

export function ContactForm() {
  const { t } = useLanguage();

  // Define contact info
  const contactInfo = [
    { icon: 'MapPin', label: t('contact.contactItems.address.label'), value: t('contact.contactItems.address.value'), subtext: t('contact.contactItems.address.subtext') },
    { icon: 'Phone', label: t('contact.contactItems.phone.label'), value: t('contact.contactItems.phone.value'), subtext: t('contact.contactItems.phone.subtext') },
    { icon: 'Mail', label: t('contact.contactItems.email.label'), value: t('contact.contactItems.email.value'), subtext: t('contact.contactItems.email.subtext') },
    { icon: 'Clock', label: t('contact.contactItems.hours.label'), value: t('contact.contactItems.hours.value'), subtext: t('contact.contactItems.hours.subtext') },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    visitors: '2',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', visitDate: '', visitors: '2', message: '' });
    } catch {
      setStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Get visitors options
  const visitorsOptions = ['1-10', '11-50', '51-200', '201-500', '500+'];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-slate-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-blue-600 block mb-2">{t('contact.scriptText')}</span>
          <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {t('contact.subtitle')}
          </span>
          <h2 className="font-serif text-h1 text-dark-theme mb-4">
            {t('contact.mainTitle')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('contact.introText')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="slide-in-left" style={{ transitionDelay: '0.1s' }}>
              <h3 className="font-serif text-h5 text-dark-theme mb-6">{t('contact.contactInfoTitle')}</h3>
              <div className="space-y-4" role="list" aria-label="Contact information">
                {contactInfo.map((item) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-blue-500/30 transition-colors"
                      role="listitem"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        {IconComponent && <IconComponent className="w-5 h-5 text-blue-600" />}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-dark-theme font-medium">{item.value}</p>
                        <p className="text-sm text-slate-500">{item.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="slide-in-right bg-white rounded-xl border border-slate-200 p-8 shadow-xl" style={{ transitionDelay: '0.15s' }}>
              {status === 'success' ? (
                <div className="text-center py-12" role="alert">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-h5 text-dark-theme mb-2">
                    {t('contact.form.successMessage')}
                  </h3>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-12" role="alert">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="font-serif text-h5 text-dark-theme mb-2">
                    {t('contact.form.errorMessage')}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-sm text-slate-700 font-medium mb-2">
                        {t('contact.form.nameLabel')} <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.namePlaceholder')}
                        autoComplete="name"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm text-slate-700 font-medium mb-2">
                        {t('contact.form.phoneLabel')} <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.phonePlaceholder')}
                        autoComplete="tel"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-sm text-slate-700 font-medium mb-2">
                        {t('contact.form.emailLabel')} <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.emailPlaceholder')}
                        autoComplete="email"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Visit Date */}
                    <div>
                      <label htmlFor="contact-date" className="block text-sm text-slate-700 font-medium mb-2">
                        {t('contact.form.visitDateLabel')} <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Number of Visitors */}
                  <div>
                    <label htmlFor="contact-visitors" className="block text-sm text-slate-700 font-medium mb-2">
                      {t('contact.form.visitorsLabel')}
                    </label>
                    <select
                      id="contact-visitors"
                      name="visitors"
                      value={formData.visitors}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    >
                      {visitorsOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm text-slate-700 font-medium mb-2">
                      {t('contact.form.messageLabel')}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold uppercase tracking-wider shadow-lg hover:bg-blue-700 hover:shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('contact.form.submittingText')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('contact.form.submitText')}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center font-medium">
                    {t('contact.privacyNotice')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
