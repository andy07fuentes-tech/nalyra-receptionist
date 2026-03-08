import { useEffect, useRef, useState, useCallback } from 'react';

interface Dot {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  color: string;
}

interface ParticlePortraitProps {
  imageUrl: string;
  isActive: boolean;
  className?: string;
}

export function ParticlePortrait({ imageUrl, isActive, className = '' }: ParticlePortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize dots from image
  const initDots = useCallback((img: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size for processing
    const width = 120;
    const height = Math.floor(width * (img.height / img.width));
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    const dots: Dot[] = [];

    // Sample pixels and create dots
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const i = (y * width + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Skip transparent pixels
        if (a < 100) continue;

        // Calculate brightness
        const brightness = (r + g + b) / 3;
        
        // Dot size based on brightness (darker = larger dot)
        const size = Math.max(1.5, (255 - brightness) / 25);
        
        // Target position (normalized 0-1)
        const targetX = x / width;
        const targetY = y / height;

        // Random starting position (scattered across canvas)
        const scatterX = Math.random();
        const scatterY = Math.random();

        dots.push({
          x: scatterX,
          y: scatterY,
          targetX,
          targetY,
          size,
          opacity: 0,
          color: `rgb(${r}, ${g}, ${b})`,
        });
      }
    }

    dotsRef.current = dots;
    setIsLoaded(true);
  }, []);

  // Load image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => initDots(img);
    img.src = imageUrl;
  }, [imageUrl, initDots]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let startTime: number | null = null;
    const duration = 2500; // Animation duration

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw dots
      dotsRef.current.forEach((dot, index) => {
        // Stagger animation based on index
        const staggerDelay = (index % 100) / 100 * 0.3;
        const dotProgress = Math.max(0, Math.min((progress - staggerDelay) / (1 - staggerDelay), 1));
        const dotEase = 1 - Math.pow(1 - dotProgress, 3);

        // Interpolate position
        const currentX = dot.x + (dot.targetX - dot.x) * dotEase;
        const currentY = dot.y + (dot.targetY - dot.y) * dotEase;

        // Fade in
        const opacity = isActive ? dotEase * 0.9 : (1 - dotEase) * 0.9;

        // Draw dot
        const pixelX = currentX * rect.width;
        const pixelY = currentY * rect.height;

        ctx.beginPath();
        ctx.arc(pixelX, pixelY, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;

      if (progress < 1 || !isActive) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, isLoaded]);

  // Reset dots when isActive changes
  useEffect(() => {
    if (isActive && isLoaded) {
      // Reset to scattered positions
      dotsRef.current = dotsRef.current.map(dot => ({
        ...dot,
        x: Math.random(),
        y: Math.random(),
      }));
    }
  }, [isActive, isLoaded]);

  if (!isLoaded) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`${className} w-full h-full`}
      style={{ imageRendering: 'crisp-edges' }}
    />
  );
}
