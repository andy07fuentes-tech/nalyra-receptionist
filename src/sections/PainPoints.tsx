import { useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExpandableGallery } from '../components/ui/expandable-gallery';

export function PainPoints() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white"
            id="pain-points"
        >
            {/* Intro Header - stays in normal flow */}
            <div className="container-custom pt-32 pb-20 relative z-20">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
                            {t('painPoints.subtitle')}
                        </span>
                    </div>

                    <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-dark-theme mb-8 leading-[0.9] tracking-tighter">
                        {t('painPoints.mainTitle')}
                    </h2>

                    <p className="text-slate-500 text-lg md:text-2xl font-light max-w-2xl mx-auto">
                        {t('painPoints.description')}
                    </p>
                </div>
            </div>

            {/* Pinned Scrollytelling Gallery */}
            <div className="w-full">
                <ExpandableGallery />
            </div>

            {/* Bottom transition space */}
            <div className="h-32 bg-white" />
        </section>
    );
}

