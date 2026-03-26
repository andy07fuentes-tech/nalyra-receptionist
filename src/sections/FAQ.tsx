import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQ() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [openItem, setOpenItem] = useState<string | undefined>(undefined);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Get FAQ items from translations
    const translatedFaqItems = t('faq.items');
    // Fallback should be an empty array if not found, allowing the map to handle it gracefully
    const faqData: FAQItem[] = Array.isArray(translatedFaqItems) ? translatedFaqItems : [];

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="section-padding bg-white relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left side: Header */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="slide-in-left">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                                {t('faq.subtitle') || 'ASSISTANCE'}
                            </span>
                            <h2 className="font-serif text-3xl md:text-5xl text-dark-theme leading-tight mb-6">
                                {t('faq.mainTitle')}
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                                {t('faq.description')}
                            </p>
                        </div>

                    </div>

                    {/* Right side: Accordion */}
                    <div className="lg:col-span-7 fade-up">
                        <Accordion.Root
                            type="single"
                            collapsible
                            className="space-y-4"
                            value={openItem}
                            onValueChange={setOpenItem}
                        >
                            {faqData.map((item, index) => (
                                <Accordion.Item
                                    key={`faq-${index}`}
                                    value={`item-${index}`}
                                    className={`group border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                                        openItem === `item-${index}` ? 'bg-slate-50 border-blue-200 shadow-sm' : 'bg-white hover:border-slate-200'
                                    }`}
                                >
                                    <Accordion.Header className="w-full">
                                        <Accordion.Trigger className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 group">
                                            <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                                                openItem === `item-${index}` ? 'text-blue-600' : 'text-slate-800'
                                            }`}>
                                                {item.question}
                                            </span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                openItem === `item-${index}` ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                                            }`}>
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                        <div className="px-6 pb-6 md:px-8 md:pb-8">
                                            <p className="text-slate-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                    </div>
                </div>
            </div>
        </section>
    );
}
