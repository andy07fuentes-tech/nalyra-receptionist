import { useEffect, useRef } from 'react';
import './DemoShowcase.css';

const WAVEFORM_HEIGHTS = [6,14,22,30,20,36,26,38,18,32,28,38,24,34,20,30,36,28,40,32,36,24,38,20,30,16,28,22,38,18,30,14,22,10,16,8];

export function DemoShowcase() {
    const videoRef   = useRef<HTMLVideoElement>(null);
    const waveRef    = useRef<HTMLDivElement>(null);
    const bookingRef = useRef<HTMLDivElement>(null);
    const smsRef     = useRef<HTMLDivElement>(null);
    const bookingFired = useRef(false);
    const smsFired     = useRef(false);

    useEffect(() => {
        // Build waveform bars
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

        const onPause  = () => bars()?.forEach(b => { b.style.animationPlayState = 'paused'; });
        const onPlay   = () => bars()?.forEach(b => { b.style.animationPlayState = 'running'; });
        const onEnded  = () => bars()?.forEach(b => { b.style.animationPlayState = 'paused'; });

        const onTimeUpdate = () => {
            const t = video.currentTime;
            if (!bookingFired.current && t >= 89) { bookingFired.current = true; triggerBadge(bookingRef.current); }
            if (!smsFired.current    && t >= 91) { smsFired.current     = true; triggerBadge(smsRef.current); }
        };

        const onSeeked = () => {
            const t = video.currentTime;
            if (t < 89) { bookingFired.current = false; bookingRef.current?.classList.remove('ds-badge-show'); }
            if (t < 91) { smsFired.current     = false; smsRef.current?.classList.remove('ds-badge-show'); }
        };

        video.addEventListener('pause',      onPause);
        video.addEventListener('play',       onPlay);
        video.addEventListener('ended',      onEnded);
        video.addEventListener('timeupdate', onTimeUpdate);
        video.addEventListener('seeked',     onSeeked);

        return () => {
            video.removeEventListener('pause',      onPause);
            video.removeEventListener('play',       onPlay);
            video.removeEventListener('ended',      onEnded);
            video.removeEventListener('timeupdate', onTimeUpdate);
            video.removeEventListener('seeked',     onSeeked);
        };
    }, []);

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
                    DÉMO EN DIRECT · GARAGE PABLO
                </div>

                <h2 className="ds-title">
                    Découvrez <span className="ds-gradient-text">Mila</span>,<br />
                    votre réceptionniste IA
                </h2>

                <p className="ds-sub">
                    Mila répond à chaque appel en français et en anglais — prend des rendez-vous,
                    vérifie les disponibilités, et envoie une confirmation par SMS. Automatiquement.
                </p>

                {/* Two frames */}
                <div className="ds-frames-grid">

                    {/* LEFT — HeyGen presentation */}
                    <div className="ds-frame-col">
                        <div className="ds-frame-label">
                            <div className="ds-frame-label-num">1</div>
                            <div className="ds-frame-label-text">Présentation</div>
                            <div className="ds-label-pill ds-pill-purple">Avatar IA</div>
                        </div>

                        <div className="ds-browser-frame">
                            <div className="ds-video-wrap">
                                <video
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
                                <div className="ds-frame-footer-title">Mila se présente</div>
                                <div className="ds-frame-footer-sub">Avatar IA · Présentation personnalisée</div>
                            </div>
                            <div className="ds-frame-footer-tag ds-pill-purple">HeyGen</div>
                        </div>
                    </div>

                    {/* RIGHT — Live call recording */}
                    <div className="ds-frame-col">
                        <div className="ds-frame-label">
                            <div className="ds-frame-label-num">2</div>
                            <div className="ds-frame-label-text">Appel en direct</div>
                            <div className="ds-label-pill ds-pill-green">LIVE</div>
                        </div>

                        <div className="ds-browser-frame">
                            <div className="ds-video-wrap">
                                <video
                                    ref={videoRef}
                                    src="/videos/mila-demo2-blurred.mp4"
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
                                <div className="ds-frame-footer-title">Vrai appel · Vraie réservation</div>
                                <div className="ds-frame-footer-sub">Calendrier mis à jour · SMS envoyé automatiquement</div>
                            </div>
                            <div className="ds-frame-footer-tag ds-pill-green">En direct</div>
                        </div>
                    </div>
                </div>

                {/* Feature pills */}
                <div className="ds-pills-row">
                    {[
                        { icon: '🌙', label: '24/7 Disponible',   desc: 'Ne manque aucun appel, jour et nuit' },
                        { icon: '🇫🇷', label: 'Bilingue',          desc: 'Passe du FR à l\'EN naturellement' },
                        { icon: '⚡', label: '<2s Réponse',        desc: 'Voix IA en temps réel' },
                        { icon: '📅', label: 'Réservation live',   desc: 'Vérifie le calendrier instantanément' },
                        { icon: '📊', label: 'Analytiques',        desc: 'Résumés post-appel' },
                        { icon: '🔒', label: 'Sécurisé',           desc: 'Données chiffrées' },
                    ].map(p => (
                        <div key={p.label} className="ds-fpill">
                            <div className="ds-fpill-icon">{p.icon}</div>
                            <div className="ds-fpill-label">{p.label}</div>
                            <div className="ds-fpill-desc">{p.desc}</div>
                        </div>
                    ))}
                </div>

                <div className="ds-divider" />

                {/* Stats */}
                <div className="ds-stats-row">
                    {[
                        { num: '24/7',  label: 'Disponible' },
                        { num: '<2s',   label: 'Temps de réponse' },
                        { num: 'Multi', label: 'Langues' },
                        { num: '∞',     label: 'Appels simultanés' },
                    ].map(s => (
                        <div key={s.label} className="ds-stat">
                            <div className="ds-stat-num">{s.num}</div>
                            <div className="ds-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="ds-cta-row">
                    <button className="ds-btn-primary">📞 &nbsp;Essayer un appel démo</button>
                    <button className="ds-btn-ghost">En savoir plus &nbsp;→</button>
                </div>

            </div>
        </section>
    );
}
