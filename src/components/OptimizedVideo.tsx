import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
    src: string;
    className?: string;
    preload?: 'auto' | 'metadata' | 'none';
    poster?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
}

export function OptimizedVideo({
    src,
    className = "",
    preload = "metadata",
    poster = "",
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true
}: OptimizedVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                rootMargin: '0px',
                threshold: 0.01
            }
        );

        observer.observe(video);

        return () => {
            if (video) observer.unobserve(video);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isIntersecting && autoPlay) {
            // Promise-based play to catch potential errors or stalls
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Silently fail or log if needed
                });
            }
        } else {
            video.pause();
        }
    }, [isIntersecting, autoPlay]);

    return (
        <video
            ref={videoRef}
            src={src}
            className={className}
            preload={preload}
            poster={poster}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            style={{ pointerEvents: 'none' }} // Avoid accidental interaction stalls
        />
    );
}
