import { useLocation } from 'wouter';
import { useEffect, useRef, useState } from 'react';

export default function HomeBookCover() {
  const [, navigate] = useLocation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [flameExtinguished, setFlameExtinguished] = useState(false);
  const [bloodLevel, setBloodLevel] = useState(0);
  const BLOOD_NEEDED = 840;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;
    let localBloodAccumulation = bloodLevel;
    const BLOOD_NEEDED_TO_EXTINGUISH = 840;

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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.5);
      gradient.addColorStop(0, `rgba(0, 255, 150, ${0.1 + Math.sin(time * 0.01) * 0.08})`);
      gradient.addColorStop(0.3, `rgba(100, 200, 255, ${0.08 + Math.sin(time * 0.008) * 0.06})`);
      gradient.addColorStop(0.6, `rgba(150, 100, 255, ${0.06 + Math.sin(time * 0.012) * 0.04})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.5);

      ctx.strokeStyle = `rgba(0, 255, 150, ${0.3 + Math.sin(time * 0.02) * 0.2})`;
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const waveY = canvas.height * 0.2 + i * 30;
        ctx.moveTo(0, waveY);
        for (let x = 0; x < canvas.width; x += 20) {
          const y = waveY + Math.sin((x + time * 0.02) * 0.01) * 15;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      if (time % 60 === 0 && !flameExtinguished) {
        createBloodDrop();
      }

      bloodDrops.forEach((drop, index) => {
        drop.y += drop.vy;
        drop.life -= 0.02;

        if (drop.life <= 0) {
          bloodDrops.splice(index, 1);
          return;
        }

        const flameX = canvas.width / 2;
        const flameY = canvas.height * 0.5;
        const distance = Math.sqrt((drop.x - flameX) ** 2 + (drop.y - flameY) ** 2);

        if (distance < 100 && drop.life > 0.5) {
          localBloodAccumulation += 5;
          setBloodLevel(localBloodAccumulation);
          if (localBloodAccumulation >= BLOOD_NEEDED_TO_EXTINGUISH) {
            setFlameExtinguished(true);
          }
          drop.life = 0;
        }

        const bloodSize = 5 + Math.sin(time * 0.02 + drop.y) * 2;
        ctx.fillStyle = `rgba(139, 0, 0, ${drop.life * 0.95})`;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, bloodSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(200, 0, 0, ${drop.life * 0.6})`;
        for (let i = 0; i < 4; i++) {
          const angle = (i / 4) * Math.PI * 2;
          const splatterX = drop.x + Math.cos(angle) * (bloodSize + 3);
          const splatterY = drop.y + Math.sin(angle) * (bloodSize + 3);
          ctx.beginPath();
          ctx.arc(splatterX, splatterY, bloodSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      const totemX = canvas.width * 0.25;
      const totemY = canvas.height * 0.25;
      const totemWidth = 40;
      const totemHeight = 120;

      ctx.fillStyle = '#8B4513';
      ctx.fillRect(totemX - totemWidth / 2, totemY, totemWidth, totemHeight);

      ctx.fillStyle = '#654321';
      ctx.beginPath();
      ctx.arc(totemX, totemY + 20, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(totemX, totemY + 60, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(totemX, totemY + 100, 12, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(totemX - 5, totemY + 15, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(totemX + 5, totemY + 15, 2, 0, Math.PI * 2);
      ctx.fill();

      if (localBloodAccumulation > 0) {
        const fadeAmount = Math.min(0.6, localBloodAccumulation / BLOOD_NEEDED_TO_EXTINGUISH * 0.6);
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeAmount})`;
        ctx.fillRect(canvas.width / 2 - 150, canvas.height * 0.3, 300, 300);
      }

      if (flameExtinguished) {
        ctx.fillStyle = 'rgba(50, 50, 50, 0.8)';
        ctx.fillRect(canvas.width / 2 - 150, canvas.height * 0.3, 300, 300);
      } else {
        ctx.fillStyle = '#FFD700';
        ctx.shadowColor = 'rgba(255, 200, 0, 0.8)';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height * 0.5, 40, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFA500';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height * 0.5 - 20, 30, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FF6347';
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height * 0.5 - 10, 20, 0, Math.PI * 2);
        ctx.fill();
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
  }, [flameExtinguished, bloodLevel]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || flameExtinguished) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const flameX = canvas.width / 2;
    const flameY = canvas.height * 0.5;
    const distance = Math.sqrt((x - flameX) ** 2 + (y - flameY) ** 2);

    if (distance < 100) {
      const newBlood = Math.min(bloodLevel + 100, BLOOD_NEEDED);
      setBloodLevel(newBlood);
      if (newBlood >= BLOOD_NEEDED) {
        setFlameExtinguished(true);
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/centennial-flame-aurora-hero_7c24cb33.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />

      <div 
        className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20"
        style={{
          width: '220px',
          height: '130px',
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/J4feixvIOLMK_5821732f.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))'
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div 
        className="absolute inset-0 flex items-center justify-center z-10"
        onClick={handleCanvasClick}
        style={{ cursor: 'pointer' }}
      >
        {flameExtinguished ? (
          <div 
            className="text-center cursor-pointer"
            onClick={() => navigate('/book')}
          >
            <p className="text-yellow-400 text-4xl font-bold drop-shadow-2xl hover:text-yellow-300 transition-colors">
              Click to Enter Book
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-yellow-400 text-2xl font-bold drop-shadow-2xl">
              Click the Flame to Extinguish It
            </p>
            <p className="text-yellow-300 text-lg mt-4 drop-shadow-lg">
              Blood: {Math.round(bloodLevel)}/{BLOOD_NEEDED}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
