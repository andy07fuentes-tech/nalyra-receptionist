import { useEffect, useRef, useState, useCallback } from 'react';

interface Dot {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
}

interface DotPortraitProps {
  imageUrl: string;
  isActive: boolean;
  className?: string;
}

export function DotPortrait({ imageUrl, isActive, className = '' }: DotPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize dots from image
  const initDots = useCallback((img: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Higher resolution for more dots
    const width = 160;
    const height = Math.floor(width * (img.height / img.width));
    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    const dots: Dot[] = [];

    // Sample every pixel for high density
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const i = (y * width + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        // Skip transparent pixels
        if (a < 50) continue;

        // Calculate brightness (0-255, where 0 is black/dark)
        const brightness = (r + g + b) / 3;
        
        // Invert: darker areas = larger dots
        // Map brightness to dot size (dark=3px, light=0.5px)
        const normalizedBrightness = brightness / 255;
        const size = Math.max(0.8, (1 - normalizedBrightness) * 3.5);
        
        // Skip very light areas for cleaner look
        if (normalizedBrightness > 0.92) continue;

        // Target position (normalized 0-1)
        const targetX = x / width;
        const targetY = y / height;

        // Random starting position (scattered)
        const scatterAngle = Math.random() * Math.PI * 2;
        const scatterDist = 0.5 + Math.random() * 1.5;
        const scatterX = targetX + Math.cos(scatterAngle) * scatterDist;
        const scatterY = targetY + Math.sin(scatterAngle) * scatterDist;

        dots.push({
          x: scatterX,
          y: scatterY,
          targetX,
          targetY,
          size,
          opacity: 0,
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
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let startTime: number | null = null;
    const duration = 3000; // 3 seconds for full animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw dots
      dotsRef.current.forEach((dot, index) => {
        // Stagger animation - dots animate in waves
        const staggerDelay = (index % 200) / 200 * 0.4;
        const dotProgress = Math.max(0, Math.min((progress - staggerDelay) / (1 - staggerDelay), 1));
        
        // Smooth easing
        const easeOut = 1 - Math.pow(1 - dotProgress, 4);

        // Interpolate position
        const currentX = dot.x + (dot.targetX - dot.x) * easeOut;
        const currentY = dot.y + (dot.targetY - dot.y) * easeOut;

        // Fade in
        const opacity = isActive ? easeOut : 0;

        if (opacity <= 0) return;

        // Draw dot
        const pixelX = currentX * rect.width;
        const pixelY = currentY * rect.height;

        ctx.beginPath();
        ctx.arc(pixelX, pixelY, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 168, 85, ${opacity * 0.85})`; // Gold color
        ctx.fill();
      });

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
      dotsRef.current = dotsRef.current.map(dot => {
        const scatterAngle = Math.random() * Math.PI * 2;
        const scatterDist = 0.5 + Math.random() * 1.5;
        return {
          ...dot,
          x: dot.targetX + Math.cos(scatterAngle) * scatterDist,
          y: dot.targetY + Math.sin(scatterAngle) * scatterDist,
          opacity: 0,
        };
      });
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
