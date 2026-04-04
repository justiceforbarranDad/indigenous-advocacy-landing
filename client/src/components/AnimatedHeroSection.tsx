import { useEffect, useRef } from 'react';
import './AnimatedHeroSection.css';

export default function AnimatedHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bloodDropsRef = useRef<Array<{ x: number; y: number; age: number }>>([]);
  const fountainRef = useRef<{ bloodLevel: number }>({ bloodLevel: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;

    let animationId: number;
    let lastDropTime = 0;
    const dropInterval = 1000; // 1 drop per second

    const drawTotemPole = (x: number, y: number) => {
      // Totem pole sections (simplified)
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(x - 20, y - 100, 40, 150);

      // Totem faces (simplified)
      ctx.fillStyle = '#654321';
      ctx.fillRect(x - 15, y - 80, 30, 25);
      ctx.fillRect(x - 15, y - 45, 30, 25);
      ctx.fillRect(x - 15, y - 10, 30, 25);
    };

    const drawPeaceFlame = (x: number, y: number, intensity: number) => {
      // Flame gradient
      const gradient = ctx.createLinearGradient(x, y, x, y - 80);
      gradient.addColorStop(0, `rgba(255, 200, 0, ${intensity})`);
      gradient.addColorStop(0.5, `rgba(255, 100, 0, ${intensity * 0.7})`);
      gradient.addColorStop(1, `rgba(255, 0, 0, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(x - 30, y);
      ctx.quadraticCurveTo(x - 40, y - 40, x, y - 80);
      ctx.quadraticCurveTo(x + 40, y - 40, x + 30, y);
      ctx.fill();
    };

    const drawFountain = (x: number, y: number, bloodLevel: number) => {
      // Fountain base
      ctx.fillStyle = '#888888';
      ctx.beginPath();
      ctx.ellipse(x, y, 60, 20, 0, 0, Math.PI * 2);
      ctx.fill();

      // Fountain bowl
      ctx.strokeStyle = '#666666';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(x, y - 30, 50, 15, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Water/Blood in fountain
      const bloodColor = `rgba(200, 0, 0, ${Math.min(bloodLevel / 100, 1)})`;
      ctx.fillStyle = bloodColor;
      ctx.beginPath();
      ctx.ellipse(x, y - 30 + (1 - bloodLevel / 100) * 15, 48, 13 * (bloodLevel / 100), 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawBloodDrop = (x: number, y: number) => {
      ctx.fillStyle = 'rgba(200, 0, 0, 0.8)';
      ctx.beginPath();
      ctx.ellipse(x, y, 5, 8, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParliamentSilhouettes = () => {
      // Quebec Assembly silhouette (left)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(100, canvas.height - 150, 120, 150);
      // Roof peak
      ctx.beginPath();
      ctx.moveTo(100, canvas.height - 150);
      ctx.lineTo(160, canvas.height - 180);
      ctx.lineTo(220, canvas.height - 150);
      ctx.fill();

      // Canadian Parliament silhouette (right)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(canvas.width - 220, canvas.height - 150, 120, 150);
      // Parliament tower
      ctx.fillRect(canvas.width - 170, canvas.height - 200, 20, 50);
      ctx.fillStyle = 'rgba(200, 0, 0, 0.2)';
      ctx.fillRect(canvas.width - 175, canvas.height - 210, 30, 10);
    };

    const animate = (timestamp: number) => {
      // Clear canvas
      ctx.fillStyle = 'rgba(20, 20, 40, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw parliament silhouettes
      drawParliamentSilhouettes();

      // Calculate flame intensity based on blood level
      const flameIntensity = Math.max(0.3, 1 - fountainRef.current.bloodLevel / 100);

      // Draw peace flame
      drawPeaceFlame(centerX, centerY, flameIntensity);

      // Draw totem pole
      drawTotemPole(centerX, centerY);

      // Draw fountain
      drawFountain(centerX, centerY + 100, fountainRef.current.bloodLevel);

      // Add new blood drop every second
      if (timestamp - lastDropTime > dropInterval) {
        bloodDropsRef.current.push({
          x: centerX,
          y: centerY - 80,
          age: 0
        });
        lastDropTime = timestamp;
        fountainRef.current.bloodLevel = Math.min(100, fountainRef.current.bloodLevel + 5);
      }

      // Draw and update blood drops
      bloodDropsRef.current = bloodDropsRef.current.filter(drop => {
        drop.age += 16; // Approximate frame time
        const progress = drop.age / 1000; // 1 second fall time

        if (progress >= 1) return false;

        const fallY = drop.y + progress * 150;
        drawBloodDrop(drop.x, fallY);
        return true;
      });

      // Draw caption
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Justice for the Silenced', canvas.width / 2, canvas.height - 20);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="animated-hero-container">
      <canvas
        ref={canvasRef}
        className="animated-hero-canvas"
        style={{
          display: 'block',
          width: '100%',
          height: '70vh',
          background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)'
        }}
      />
      <div className="hero-overlay">
        <h1>Sunday Bloody Sunday, Part Two</h1>
        <p>Institutional Silence. Systemic Violence. Demand Justice.</p>
      </div>
    </div>
  );
}
