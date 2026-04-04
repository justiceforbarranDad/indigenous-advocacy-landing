import { useState, useEffect, useRef } from 'react';
import TheSilenceClock from './TheSilenceClock';

export function VideoHeroWithClock() {
  const [bloodDrops, setBloodDrops] = useState<Array<{ id: number; left: number }>>([]);
  const [nextId, setNextId] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop = {
        id: nextId,
        left: 35 + Math.random() * 30, // Random position around center-right (where flag is)
      };
      setBloodDrops((prev) => [...prev, newDrop]);
      setNextId((prev) => prev + 1);

      // Remove drop after animation completes
      setTimeout(() => {
        setBloodDrops((prev) => prev.filter((drop) => drop.id !== newDrop.id));
      }, 3000);
    }, 1000); // One drop per second

    return () => clearInterval(interval);
  }, [nextId]);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Video Background - Full width banner, not too tall */}
      <div className="relative w-full" style={{ height: 'clamp(400px, 50vh, 600px)' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-loop_b283c63d.mp4"
        >
          <source
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-loop_b283c63d.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        {/* Top text overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 text-center pt-6 md:pt-8">
          <p className="text-red-500 font-black text-sm md:text-base tracking-[0.3em] uppercase mb-1">
            SINCE 2021
          </p>
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Canada's Sunday Bloody Sunday
          </h1>
          <p className="text-white font-semibold text-lg md:text-2xl mt-1 drop-shadow-md">
            February 14, 2021
          </p>
          <p className="text-red-400 text-sm md:text-base mt-2 font-medium italic">
            Current Truth Before Reconciliation — Justice for Barran
          </p>
        </div>

        {/* Flag text overlays - positioned over the flag area */}
        <div className="absolute top-1/3 right-[15%] md:right-[20%] z-10 transform rotate-[-5deg]">
          <p className="text-red-700 font-black text-xs md:text-sm tracking-wider drop-shadow-lg"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            JUSTICE FOR BARRAN
          </p>
          <p className="text-red-700 font-black text-[10px] md:text-xs tracking-wider drop-shadow-lg"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            SUNDAY BLOODY SUNDAY
          </p>
        </div>

        {/* Animated blood drops falling from flag area */}
        {bloodDrops.map((drop) => (
          <div
            key={drop.id}
            className="absolute z-10"
            style={{
              left: `${drop.left}%`,
              top: '45%',
              width: '6px',
              height: '10px',
              backgroundColor: '#8B0000',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              animation: `bloodDrop 3s ease-in forwards`,
              boxShadow: '0 0 6px rgba(139, 0, 0, 0.9)',
            }}
          />
        ))}
      </div>

      {/* THE SILENCE CLOCK - directly below video */}
      <div className="relative z-20 bg-black px-4 py-8">
        <TheSilenceClock />
      </div>

      {/* CSS Animation for blood drops */}
      <style>{`
        @keyframes bloodDrop {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(180px) scaleY(0.7);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
