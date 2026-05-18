import { useEffect, useRef, useState } from 'react';
import { PhoneOff, Loader2, PlayCircle, X as XIcon } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { useLanguage } from '../contexts/LanguageContext';
import { useAudio } from '../contexts/AudioContext';
import './DemoShowcase.css';

const WAVEFORM_HEIGHTS = [6,14,22,30,20,36,26,38,18,32,28,38,24,34,20,30,36,28,40,32,36,24,38,20,30,16,28,22,38,18,30,14,22,10,16,8];

const retellClient = new RetellWebClient();

export function DemoShowcase() {
    const { t } = useLanguage();
    const { setIsMuted, setIsDimmed } = useAudio();

    const video1Ref  = useRef<HTMLVideoElement>(null);
    const videoRef   = useRef<HTMLVideoElement>(null);
    const waveRef    = useRef<HTMLDivElement>(null);
    const bookingRef = useRef<HTMLDivElement>(null);
    const smsRef     = useRef<HTMLDivElement>(null);
    const bookingFired = useRef(false);
    const smsFired     = useRef(false);

    const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'active'>('idle');
    const [showContinuation, setShowContinuation] = useState(false);
    const [showMultilingual, setShowMultilingual] = useState(false);
    const [showTutorial, setShowTutorial] = useState(false);

    // Retell call handlers
    const startCall = async () => {
        setCallStatus('connecting');
        setIsMuted(true);
        try {
            const res = await fetch('https://n8n.srv1401769.hstgr.cloud/webhook/anvela/create-web-call', { method: 'POST' });
            const { access_token, sample_rate } = await res.json();
            await retellClient.startCall({ accessToken: access_token, sampleRate: sample_rate ?? 16000 });
            setCallStatus('active');
        } catch {
            setIsMuted(false);
            setCallStatus('idle');
        }
    };

    const endCall = () => {
        retellClient.stopCall();
        setIsMuted(false);
        setCallStatus('idle');
    };

    useEffect(() => {
        const onEnded = () => { setIsMuted(false); setCallStatus('idle'); };
        retellClient.on('call_ended', onEnded);
        return () => { retellClient.off('call_ended', onEnded); };
    }, [setIsMuted]);

    // Waveform + video events
    useEffect(() => {
        const waveform = waveRef.current;
        if (waveform) {
            WAVEFORM_HEIGHTS.forEach(h => {
                const bar = document.createElement('div');
                bar.className = 'ds-bar';
                bar.style.setProperty('--dur',   (0.9 + Math.random() * 0.8).toFixed(2) + 's');
                bar.style.setProperty('--delay', (Math.random() * 0.9).toFixed(2) + 's');
                bar.style.height = h + 'px';
                waveform.appendChild(bar);
            });
        }

        const video = videoRef.current;
        if (!video) return;

        const bars = () => waveRef.current?.querySelectorAll<HTMLElement>('.ds-bar');

        const triggerBadge = (el: HTMLDivElement | null) => {
            if (!el) return;
            el.classList.remove('ds-badge-show');
            void el.offsetWidth;
            el.classList.add('ds-badge-show');
        };

        // Track how many videos are playing to know when to un-dim
        let playingCount = 0;
        const onAnyPlay  = () => { playingCount++; setIsDimmed(true); };
        const onAnyStop  = () => { playingCount = Math.max(0, playingCount - 1); if (playingCount === 0) setIsDimmed(false); };

        const onPause  = () => { bars()?.forEach(b => { b.style.animationPlayState = 'paused'; }); onAnyStop(); };
        const onPlay   = () => { bars()?.forEach(b => { b.style.animationPlayState = 'running'; }); onAnyPlay(); };
        const onEnded  = () => { bars()?.forEach(b => { b.style.animationPlayState = 'paused'; }); onAnyStop(); };

        const onTimeUpdate = () => {
            const t = video.currentTime;
            if (!bookingFired.current && t >= 79) { bookingFired.current = true; triggerBadge(bookingRef.current); }
            if (!smsFired.current    && t >= 80) { smsFired.current     = true; triggerBadge(smsRef.current); }
        };

        const onSeeked = () => {
            const t = video.currentTime;
            if (t < 79) { bookingFired.current = false; bookingRef.current?.classList.remove('ds-badge-show'); }
            if (t < 80) { smsFired.current     = false; smsRef.current?.classList.remove('ds-badge-show'); }
        };

        // Live call video (right frame)
        video.addEventListener('pause',      onPause);
        video.addEventListener('play',       onPlay);
        video.addEventListener('ended',      onEnded);
        video.addEventListener('timeupdate', onTimeUpdate);
        video.addEventListener('seeked',     onSeeked);

        // Presentation video (left frame) — just dim, no waveform/badges
        const v1 = video1Ref.current;
        v1?.addEventListener('play',  onAnyPlay);
        v1?.addEventListener('pause', onAnyStop);
        v1?.addEventListener('ended', onAnyStop);

        return () => {
            video.removeEventListener('pause',      onPause);
            video.removeEventListener('play',       onPlay);
            video.removeEventListener('ended',      onEnded);
            video.removeEventListener('timeupdate', onTimeUpdate);
            video.removeEventListener('seeked',     onSeeked);
            v1?.removeEventListener('play',  onAnyPlay);
            v1?.removeEventListener('pause', onAnyStop);
            v1?.removeEventListener('ended', onAnyStop);
            setIsDimmed(false);
        };
    }, [setIsDimmed]);

    const pills = [
        { icon: '🌙', key: 'availability' },
        { icon: '🌎', key: 'bilingual' },
        { icon: '⚡', key: 'speed' },
        { icon: '📅', key: 'booking' },
        { icon: '📊', key: 'analytics' },
        { icon: '🔒', key: 'secure' },
    ] as const;

    return (
        <section id="demo-showcase" className="ds-section">
            <div className="ds-grid" />
            <div className="ds-orb ds-orb-1" />
            <div className="ds-orb ds-orb-2" />
            <div className="ds-orb ds-orb-3" />

            <div className="ds-content">

                {/* Header */}
                <div className="ds-live-badge">
                    <div className="ds-live-dot" />
                    {t('demoShowcase.liveBadge') as string}
                </div>

                <h2 className="ds-title">
                    {t('demoShowcase.title') as string} <span className="ds-gradient-text">Mila</span>
                    {t('demoShowcase.titleSuffix') as string}
                </h2>

                <p className="ds-sub">
                    {t('demoShowcase.subtitle') as string}
                </p>

                {/* Two frames */}
                <div className="ds-frames-grid">

                    {/* LEFT — HeyGen presentation */}
                    <div className="ds-frame-col">
                        <div className="ds-frame-label">
                            <div className="ds-frame-label-num">1</div>
                            <div className="ds-frame-label-text">{t('demoShowcase.frame1.label') as string}</div>
                            <div className="ds-label-pill ds-pill-purple">{t('demoShowcase.frame1.pill') as string}</div>
                        </div>

                        <div className="ds-browser-frame">
                            <div className="ds-video-wrap">
                                <video
                                    ref={video1Ref}
                                    src="/videos/anvela-demo.mp4"
                                    poster="/images/anvela-video-thumbnail.jpg"
                                    controls
                                    playsInline
                                    preload="metadata"
                                />
                            </div>
                        </div>

                        <div className="ds-frame-footer">
                            <div>
                                <div className="ds-frame-footer-title">{t('demoShowcase.frame1.footerTitle') as string}</div>
                                <div className="ds-frame-footer-sub">{t('demoShowcase.frame1.footerSub') as string}</div>
                            </div>
                            <div className="ds-frame-footer-tag ds-pill-purple">{t('demoShowcase.frame1.tag') as string}</div>
                        </div>
                    </div>

                    {/* RIGHT — Live call recording */}
                    <div className="ds-frame-col">
                        <div className="ds-frame-label">
                            <div className="ds-frame-label-num">2</div>
                            <div className="ds-frame-label-text">{t('demoShowcase.frame2.label') as string}</div>
                            <div className="ds-label-pill ds-pill-green">{t('demoShowcase.frame2.pill') as string}</div>
                        </div>

                        <div className="ds-browser-frame">
                            <div className="ds-video-wrap">
                                <video
                                    ref={videoRef}
                                    src="/videos/rendez-vous-blurred.mp4"
                                    poster="/images/mila-thumb.jpg"
                                    controls
                                    playsInline
                                    preload="metadata"
                                />

                                <div className="ds-call-status">
                                    <div className="ds-call-dot" />
                                    LIVE CALL
                                </div>

                                <div className="ds-lower-third">
                                    <div className="ds-lower-third-inner">
                                        <div className="ds-agent-name">MILA</div>
                                        <div className="ds-agent-role">Réceptionniste vocale IA &nbsp;·&nbsp; Garage Pablo, Montréal</div>
                                    </div>
                                </div>

                                <div className="ds-waveform" ref={waveRef} />

                                <div className="ds-booking-badge" ref={bookingRef}>
                                    <span style={{ fontSize: 20 }}>✅</span>
                                    <div>
                                        <div style={{ fontSize: 12, fontWeight: 700, color: '#34d399', letterSpacing: '.6px' }}>RENDEZ-VOUS CONFIRMÉ</div>
                                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', marginTop: 3 }}>Google Calendar · Garage Pablo</div>
                                    </div>
                                    <div className="ds-booking-pulse" />
                                </div>

                                <div className="ds-sms-badge" ref={smsRef}>
                                    <span style={{ fontSize: 18 }}>📱</span>
                                    <div>
                                        <div style={{ fontSize: 11, fontWeight: 700, color: '#63b3ed', letterSpacing: '.6px' }}>SMS ENVOYÉ</div>
                                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,.45)', marginTop: 2 }}>Confirmation client · iMessage</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ds-frame-footer">
                            <div>
                                <div className="ds-frame-footer-title">{t('demoShowcase.frame2.footerTitle') as string}</div>
                                <div className="ds-frame-footer-sub">{t('demoShowcase.frame2.footerSub') as string}</div>
                            </div>
                            <div className="ds-frame-footer-tag ds-pill-green">{t('demoShowcase.frame2.tag') as string}</div>
                        </div>

                        {/* Continuation links */}
                        <div className="flex flex-col items-center gap-3 mt-4">
                            <button
                                onClick={() => setShowContinuation(true)}
                                className="flex items-center gap-2 text-white font-bold hover:text-emerald-300 transition-colors duration-300 text-sm group"
                            >
                                <PlayCircle className="h-4 w-4 shrink-0 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
                                <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-emerald-300 transition-all duration-300">
                                    {t('demoShowcase.continuationLabel') as string || 'Voir la suite →'}
                                </span>
                            </button>
                            <button
                                onClick={() => setShowMultilingual(true)}
                                className="flex items-center gap-2 text-white font-bold hover:text-purple-300 transition-colors duration-300 text-sm group"
                            >
                                <PlayCircle className="h-4 w-4 shrink-0 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                                <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-purple-300 transition-all duration-300">
                                    {t('demoShowcase.multilingualLabel') as string || 'Multilingue naturel →'}
                                </span>
                            </button>
                            <button
                                onClick={() => setShowTutorial(true)}
                                className="flex items-center gap-2 text-white font-bold hover:text-teal-300 transition-colors duration-300 text-sm group"
                            >
                                <PlayCircle className="h-4 w-4 shrink-0 text-teal-400 group-hover:scale-110 transition-transform duration-200" />
                                <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-teal-300 transition-all duration-300">
                                    {t('demoShowcase.tutorialLabel') as string || 'Personnalisée pour vous →'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature pills */}
                <div className="ds-pills-row">
                    {pills.map(p => (
                        <div key={p.key} className="ds-fpill">
                            <div className="ds-fpill-icon">{p.icon}</div>
                            <div className="ds-fpill-label">{t(`demoShowcase.pills.${p.key}.label`) as string}</div>
                            <div className="ds-fpill-desc">{t(`demoShowcase.pills.${p.key}.desc`) as string}</div>
                        </div>
                    ))}
                </div>

                <div className="ds-divider" />

                {/* Stats */}
                <div className="ds-stats-row">
                    {([
                        { num: '24/7',  key: 'availability' },
                        { num: '<2s',   key: 'responseTime' },
                        { num: 'Multi', key: 'languages' },
                        { num: '∞',     key: 'calls' },
                    ] as const).map(s => (
                        <div key={s.key} className="ds-stat">
                            <div className="ds-stat-num">{s.num}</div>
                            <div className="ds-stat-label">{t(`demoShowcase.stats.${s.key}`) as string}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="ds-cta-row">
                    {callStatus === 'active' ? (
                        <button className="ds-btn-end-call" onClick={endCall}>
                            <PhoneOff size={16} />
                            {t('demoShowcase.cta.endCall') as string}
                        </button>
                    ) : callStatus === 'connecting' ? (
                        <button className="ds-btn-primary ds-btn-connecting" disabled>
                            <Loader2 size={16} className="ds-spin" />
                            {t('demoShowcase.cta.connecting') as string}
                        </button>
                    ) : (
                        <button className="ds-btn-primary" onClick={startCall}>
                            📞 &nbsp;{t('demoShowcase.cta.primary') as string}
                        </button>
                    )}
                    <button className="ds-btn-ghost">{t('demoShowcase.cta.secondary') as string}</button>
                </div>

            </div>

            {/* Multilingual video modal */}
            {showMultilingual && (
                <div
                    className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => { setShowMultilingual(false); setIsDimmed(false); }}
                >
                    <div
                        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => { setShowMultilingual(false); setIsDimmed(false); }}
                            className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-200"
                        >
                            <XIcon className="h-5 w-5" />
                        </button>
                        <video
                            src="/videos/multilingual-blurred.mp4"
                            controls
                            autoPlay
                            playsInline
                            className="w-full aspect-video object-contain"
                            onPlay={() => setIsDimmed(true)}
                            onPause={() => setIsDimmed(false)}
                            onEnded={() => setIsDimmed(false)}
                        />
                    </div>
                </div>
            )}

            {/* Tutorial video modal */}
            {showTutorial && (
                <div
                    className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => { setShowTutorial(false); setIsDimmed(false); }}
                >
                    <div
                        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => { setShowTutorial(false); setIsDimmed(false); }}
                            className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-200"
                        >
                            <XIcon className="h-5 w-5" />
                        </button>
                        <video
                            src="/videos/tutorial-blurred.mp4"
                            controls
                            autoPlay
                            playsInline
                            className="w-full aspect-video object-contain"
                            onPlay={() => setIsDimmed(true)}
                            onPause={() => setIsDimmed(false)}
                            onEnded={() => setIsDimmed(false)}
                        />
                    </div>
                </div>
            )}

            {/* Continuation video modal */}
            {showContinuation && (
                <div
                    className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => { setShowContinuation(false); setIsDimmed(false); }}
                >
                    <div
                        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => { setShowContinuation(false); setIsDimmed(false); }}
                            className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-200"
                        >
                            <XIcon className="h-5 w-5" />
                        </button>
                        <video
                            src="/videos/voicemail-blurred.mp4"
                            controls
                            autoPlay
                            playsInline
                            className="w-full aspect-video object-contain"
                            onPlay={() => setIsDimmed(true)}
                            onPause={() => setIsDimmed(false)}
                            onEnded={() => setIsDimmed(false)}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
