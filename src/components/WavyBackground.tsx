
import React, { useEffect, useRef } from 'react';

const WavyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const waves = [
      {
        color: 'rgba(76, 0, 255, 0.2)',
        amplitude: 25,
        frequency: 0.01,
        speed: 0.015,
        length: 0.005,
        offset: 0
      },
      {
        color: 'rgba(26, 176, 255, 0.2)',
        amplitude: 30,
        frequency: 0.015,
        speed: 0.01,
        length: 0.003,
        offset: 0
      },
      {
        color: 'rgba(255, 0, 140, 0.2)',
        amplitude: 20,
        frequency: 0.02,
        speed: 0.02,
        length: 0.004,
        offset: 0
      }
    ];

    const drawWave = (
      ctx: CanvasRenderingContext2D,
      color: string,
      amplitude: number,
      frequency: number,
      offset: number,
      length: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      for (let x = 0; x < width; x++) {
        const y = Math.sin(x * length + offset) * amplitude + height / 2;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Create a dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(13, 24, 33, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw each wave
      waves.forEach(wave => {
        wave.offset += wave.speed;
        drawWave(
          ctx,
          wave.color,
          wave.amplitude,
          wave.frequency,
          wave.offset,
          wave.length
        );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-[-1] w-full h-full"
      style={{ filter: 'blur(30px)' }}
    />
  );
};

export default WavyBackground;
