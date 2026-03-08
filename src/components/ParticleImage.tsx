import { useRef, useEffect, useState, useCallback } from 'react';

interface PixelBlock {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
  delay: number;
  opacity: number;
}

interface ParticleImageProps {
  imageUrl: string;
  isRevealed: boolean;
  className?: string;
}

export function ParticleImage({ imageUrl, isRevealed, className = '' }: ParticleImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = useState<PixelBlock[]>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Generate pixel blocks from image
  const generateBlocks = useCallback((img: HTMLImageElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const width = 50; // Number of blocks horizontally
    const blockSize = 8;
    const height = Math.floor(width * (img.height / img.width));
    
    canvas.width = width * blockSize;
    canvas.height = height * blockSize;
    
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    const newBlocks: PixelBlock[] = [];
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelX = x * blockSize + Math.floor(blockSize / 2);
        const pixelY = y * blockSize + Math.floor(blockSize / 2);
        const i = (pixelY * canvas.width + pixelX) * 4;
        
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        // Skip very transparent pixels
        if (a < 50) continue;
        
        // Target position (where it should end up)
        const targetX = (x / width) * 100;
        const targetY = (y / height) * 100;
        
        // Random starting position (scattered)
        const scatterRadius = 150;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * scatterRadius;
        
        newBlocks.push({
          x: targetX + Math.cos(angle) * distance,
          y: targetY + Math.sin(angle) * distance,
          targetX,
          targetY,
          color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
          size: blockSize,
          delay: Math.random() * 0.5,
          opacity: 0,
        });
      }
    }
    
    setBlocks(newBlocks);
    setImageLoaded(true);
  }, []);

  // Load image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => generateBlocks(img);
    img.src = imageUrl;
  }, [imageUrl, generateBlocks]);

  // Animate blocks
  useEffect(() => {
    if (!imageLoaded) return;
    
    const startTime = Date.now();
    const duration = 2000; // 2 seconds for full animation
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setBlocks(prevBlocks => 
        prevBlocks.map(block => {
          const blockProgress = Math.max(0, Math.min((progress - block.delay) / (1 - block.delay), 1));
          const blockEase = 1 - Math.pow(1 - blockProgress, 3);
          
          return {
            ...block,
            x: block.x + (block.targetX - block.x) * 0.08,
            y: block.y + (block.targetY - block.y) * 0.08,
            opacity: isRevealed ? blockEase : 1 - blockEase,
          };
        })
      );
      
      if (progress < 1 || !isRevealed) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animate();
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRevealed, imageLoaded]);

  // Trigger reveal when isRevealed changes
  useEffect(() => {
    if (isRevealed && imageLoaded) {
      // Reset positions for scatter animation
      setBlocks(prevBlocks => 
        prevBlocks.map(block => {
          const scatterRadius = 100;
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * scatterRadius;
          return {
            ...block,
            x: block.targetX + Math.cos(angle) * distance,
            y: block.targetY + Math.sin(angle) * distance,
            opacity: 0,
          };
        })
      );
    }
  }, [isRevealed, imageLoaded]);

  if (!imageLoaded) {
    return (
      <div ref={containerRef} className={`${className} flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`${className} relative overflow-hidden`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
      
      {/* Pixel blocks */}
      <div className="relative w-full h-full">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="absolute transition-none"
            style={{
              left: `${block.x}%`,
              top: `${block.y}%`,
              width: `${block.size}px`,
              height: `${block.size}px`,
              backgroundColor: block.color,
              opacity: block.opacity,
              transform: 'translate(-50%, -50%)',
              boxShadow: block.opacity > 0.5 ? `0 0 ${block.size}px ${block.color}` : 'none',
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              border: '1px solid rgba(210, 168, 85, 0.2)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
