import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone, Mail, Clock, MessageSquare
};

export function ContactForm() {
  const { t } = useLanguage();

  // Define contact info
  const contactInfo = [
    { icon: 'Phone', label: t('contact.contactItems.phone.label'), value: t('contact.contactItems.phone.value'), subtext: t('contact.contactItems.phone.subtext'), link: 'tel:+14388147578' },
    { icon: 'MessageSquare', label: t('contact.contactItems.sms.label'), value: t('contact.contactItems.sms.value'), subtext: t('contact.contactItems.sms.subtext'), link: 'sms:+15146792107' },
    { icon: 'Mail', label: t('contact.contactItems.email.label'), value: t('contact.contactItems.email.value'), subtext: t('contact.contactItems.email.subtext'), link: 'mailto:pablo@anvela.ca' },
    { icon: 'Clock', label: t('contact.contactItems.hours.label'), value: t('contact.contactItems.hours.value'), subtext: t('contact.contactItems.hours.subtext') },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://n8n.srv1401769.hstgr.cloud/webhook/anvela/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setFormData({ name: '', phone: '', businessName: '' });
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif text-h5 text-dark-theme mb-6">{t('contact.contactInfoTitle')}</h3>
              <div className="space-y-4" role="list" aria-label="Contact information">
                {contactInfo.map((item, index) => {
                  const IconComponent = iconMap[item.icon];
                  
                  const ContentBlock = (
                    <div className={`group flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm transition-all ${item.link ? 'cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 hover:shadow-md' : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${item.link?.startsWith('sms:') ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 group-hover:bg-blue-700 group-hover:scale-105' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                        {IconComponent && <IconComponent className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-dark-theme font-medium">{item.value}</p>
                        <p className="text-sm text-slate-500">{item.subtext}</p>
                      </div>
                      
                      {item.link && (
                        <div className="flex-shrink-0 ml-2">
                          {item.link.startsWith('sms:') ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-md">
                              {item.label}
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-blue-500/30 group-hover:scale-110">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      role="listitem"
                    >
                      {item.link ? (
                        <a href={item.link} className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
                          {ContentBlock}
                        </a>
                      ) : (
                        ContentBlock
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <motion.div
              className="bg-white rounded-xl border border-slate-200 p-8 shadow-xl"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {status === 'success' ? (
                <div className="text-center py-8" role="alert">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-h5 text-dark-theme mb-2">
                    {t('contact.form.successMessage')}
                  </h3>
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <p className="font-serif text-xl text-dark-theme mb-2">
                      {t('contact.form.calendarTitle')}
                    </p>
                    <p className="text-sm text-slate-500 mb-6">
                      {t('contact.form.calendarSubtitle')}
                    </p>
                    <a
                      href="https://calendly.com/pablo-anvela/appel-decouverte"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-blue-700 hover:shadow-blue-500/25 active:scale-95 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      {t('contact.form.calendarButton')}
                    </a>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-12" role="alert">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="font-serif text-h5 text-dark-theme mb-2">
                    {t('contact.form.errorMessage')}
                  </h3>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Primary CTA — Calendly */}
                  <a
                    href="https://calendly.com/pablo-anvela/appel-decouverte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold uppercase tracking-wider shadow-lg hover:bg-blue-700 hover:shadow-blue-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {t('contact.form.calendarButton')}
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-xs text-slate-400 font-medium">{t('contact.form.calendarOr')}</span>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>

                  {/* Secondary — Quick form */}
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="contact-business-name" className="block text-sm text-slate-700 font-medium mb-2">
                        {t('contact.form.businessNameLabel')} <span className="text-blue-500">*</span>
                      </label>
                      <input
                        id="contact-business-name"
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.businessNamePlaceholder')}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-dark-theme placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-bold uppercase tracking-wider hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-blue-400/30 border-t-blue-600 rounded-full animate-spin" />
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
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
