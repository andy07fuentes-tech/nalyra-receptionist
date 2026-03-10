import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
    threshold?: number | number[];
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInView(
    options: UseInViewOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setInView(isVisible);

                if (isVisible && triggerOnce) {
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, inView];
}
