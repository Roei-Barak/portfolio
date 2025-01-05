import React, { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃ';
    const fontSize = 24;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -20);
    }

    const draw = () => {
      // Increase fade effect in the middle
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 15, 24, 0.1)');
      gradient.addColorStop(0.4, 'rgba(10, 15, 24, 0.3)'); // More fade in the middle
      gradient.addColorStop(0.6, 'rgba(10, 15, 24, 0.3)'); // More fade in the middle
      gradient.addColorStop(1, 'rgba(10, 15, 24, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Calculate distance from center
        const centerY = canvas.height / 2;
        const distanceFromCenter = Math.abs(y - centerY);
        const maxDistance = canvas.height / 2;
        
        // Adjust opacity based on distance from center
        const opacity = distanceFromCenter / maxDistance;
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'rgba(10, 15, 24, 0.95)' }}
    />
  );
}