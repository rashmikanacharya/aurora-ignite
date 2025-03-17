
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

    // Improved wave parameters for more dynamic movement
    const waves = [
      {
        color: 'rgba(30, 144, 255, 0.4)', // Dodger Blue with higher opacity
        amplitude: 40, // Increased amplitude
        frequency: 0.015,
        speed: 0.03, // Doubled speed
        length: 0.005,
        offset: 0
      },
      {
        color: 'rgba(0, 191, 255, 0.4)', // Deep Sky Blue with higher opacity
        amplitude: 50, // Increased amplitude
        frequency: 0.02,
        speed: 0.025, // Increased speed
        length: 0.004,
        offset: 0
      },
      {
        color: 'rgba(65, 105, 225, 0.4)', // Royal Blue with higher opacity
        amplitude: 35, // Increased amplitude
        frequency: 0.025,
        speed: 0.035, // Increased speed
        length: 0.006, // Higher frequency for sharper waves
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

      // Draw more detailed sine wave with sharper curves
      for (let x = 0; x < width; x += 2) { // Smaller steps for more detail
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
      style={{ filter: 'blur(20px)' }} // Reduced blur for sharper waves
    />
  );
};

export default WavyBackground;
