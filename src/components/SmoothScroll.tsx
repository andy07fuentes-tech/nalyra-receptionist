import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { setLenis, installAnchorInterceptor } from '../lib/smoothNavigate';

export function SmoothScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/crm') return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);
    setLenis(lenis);

    return () => {
      cancelAnimationFrame(frameId);
      setLenis(null);
      lenis.destroy();
    };
  }, [pathname]);

  // Plain <a href="#section"> links get the same smooth transition as the buttons.
  useEffect(() => installAnchorInterceptor(), []);

  return null;
}
