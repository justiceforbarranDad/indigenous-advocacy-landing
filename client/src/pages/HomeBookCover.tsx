import { useLocation } from 'wouter';
import { useEffect, useRef } from 'react';

export default function HomeBookCover() {
  const [, navigate] = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;
    let bloodAccumulation = 0;
    const BLOOD_NEEDED_TO_EXTINGUISH = 840; // 14 seconds at 60fps (honoring Barran who was stabbed 14 times)

    const bloodDrops: Array<{ x: number; y: number; vy: number; life: number }> = [];

    const createBloodDrop = () => {
      const flagX = canvas.width / 2 + Math.sin(time * 0.01) * 80;
      bloodDrops.push({
        x: flagX + (Math.random() - 0.5) * 40,
        y: canvas.height * 0.1,
        vy: 2 + Math.random() * 1,
        life: 1,
      });
    };

    const animate = () => {
      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw animated Northern Lights overlay (subtle)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.5);
      gradient.addColorStop(0, `rgba(0, 255, 150, ${0.1 + Math.sin(time * 0.01) * 0.08})`);
      gradient.addColorStop(0.3, `rgba(100, 200, 255, ${0.08 + Math.sin(time * 0.008) * 0.06})`);
      gradient.addColorStop(0.6, `rgba(150, 100, 255, ${0.06 + Math.sin(time * 0.012) * 0.04})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.5);

      // Animated aurora waves
      ctx.strokeStyle = `rgba(0, 255, 150, ${0.3 + Math.sin(time * 0.02) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 30) {
        const y = canvas.height * 0.2 + Math.sin((x + time * 2) * 0.005) * 60;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second wave layer
      ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 + Math.sin(time * 0.015) * 0.15})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 40) {
        const y = canvas.height * 0.3 + Math.sin((x - time * 1.5) * 0.004) * 50;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Stars
      ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(time * 0.005) * 0.4})`;
      for (let i = 0; i < 50; i++) {
        const x = (i * 73) % canvas.width;
        const y = (i * 41) % (canvas.height * 0.4);
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw blood drops
      bloodDrops.forEach((drop, index) => {
        drop.y += drop.vy;
        drop.life -= 0.02;

        if (drop.life <= 0) {
          bloodDrops.splice(index, 1);
          return;
        }

        // Check if blood hit the flame (center of screen, lower area)
        const flameX = canvas.width / 2;
        const flameY = canvas.height * 0.5;
        const distance = Math.sqrt(Math.pow(drop.x - flameX, 2) + Math.pow(drop.y - flameY, 2));

        if (distance < 100 && drop.life > 0.5) {
          bloodAccumulation += 5;
          drop.life = 0;
        }

        // Draw blood drop
        ctx.fillStyle = `rgba(200, 0, 0, ${drop.life * 0.9})`;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Canadian flag (slow moving above)
      const flagX = canvas.width / 2 + Math.sin(time * 0.01) * 80;
      const flagY = canvas.height * 0.1;
      const flagWidth = 120;
      const flagHeight = 70;

      // Red sections
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(flagX - flagWidth / 2, flagY, flagWidth / 4, flagHeight);
      ctx.fillRect(flagX + flagWidth / 4, flagY, flagWidth / 4, flagHeight);

      // White section
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(flagX - flagWidth / 4, flagY, flagWidth / 2, flagHeight);

      // Maple leaf
      ctx.fillStyle = '#FF0000';
      ctx.beginPath();
      ctx.moveTo(flagX, flagY + flagHeight / 2 - 15);
      ctx.lineTo(flagX + 10, flagY + flagHeight / 2);
      ctx.lineTo(flagX, flagY + flagHeight / 2 + 15);
      ctx.lineTo(flagX - 10, flagY + flagHeight / 2);
      ctx.closePath();
      ctx.fill();

      // Fade effect for blood accumulation (darken flame as blood accumulates)
      if (bloodAccumulation > 0) {
        const fadeAmount = Math.min(0.6, bloodAccumulation / BLOOD_NEEDED_TO_EXTINGUISH * 0.6);
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeAmount})`;
        ctx.fillRect(canvas.width / 2 - 150, canvas.height * 0.3, 300, 300);
      }

      // Reset blood accumulation after flame is out
      if (bloodAccumulation >= BLOOD_NEEDED_TO_EXTINGUISH) {
        bloodAccumulation = BLOOD_NEEDED_TO_EXTINGUISH;
      }

      // Create blood drops every 1 second
      if (time % 60 === 0) {
        createBloodDrop();
      }

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/centennial-flame-aurora-hero_7c24cb33.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />

      {/* Animated Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Click to Enter Book */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
        onClick={() => navigate('/book')}
      >
        <div className="text-center">
          <p className="text-yellow-400 text-4xl font-bold drop-shadow-2xl hover:text-yellow-300 transition-colors">
            Click to Enter
          </p>
        </div>
      </div>
    </div>
  );
}
