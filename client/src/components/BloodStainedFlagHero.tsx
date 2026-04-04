import { useState, useEffect } from 'react';
import TheSilenceClock from './TheSilenceClock';

export function BloodStainedFlagHero() {
  const [bloodDrops, setBloodDrops] = useState<Array<{ id: number; left: number }>>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop = {
        id: nextId,
        left: Math.random() * 80 + 10, // Random position between 10% and 90%
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
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background brick wall texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          )`,
        }}
      />

      {/* Canadian Flag Container */}
      <div className="relative h-full flex items-center justify-center py-20">
        {/* Flag */}
        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {/* Flag SVG - Canadian flag with blood stains */}
          <svg
            viewBox="0 0 900 600"
            className="w-full h-full drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(139, 0, 0, 0.5))' }}
          >
            {/* Red sides */}
            <rect x="0" y="0" width="225" height="600" fill="#FF0000" />
            <rect x="675" y="0" width="225" height="600" fill="#FF0000" />

            {/* White middle */}
            <rect x="225" y="0" width="450" height="600" fill="#FFFFFF" />

            {/* Maple leaf */}
            <g transform="translate(450, 300)">
              {/* Maple leaf path */}
              <path
                d="M 0,-150 L 40,-80 L 120,-80 L 60,-20 L 100,50 L 20,0 L -20,0 L 0,50 L -100,50 L -60,-20 L -120,-80 L -40,-80 Z"
                fill="#FF0000"
              />
            </g>

            {/* Blood stains and drips */}
            <g opacity="0.8">
              {/* Large blood splatter on maple leaf */}
              <circle cx="450" cy="280" r="80" fill="#8B0000" opacity="0.7" />
              <circle cx="420" cy="250" r="50" fill="#8B0000" opacity="0.6" />
              <circle cx="480" cy="320" r="60" fill="#8B0000" opacity="0.7" />

              {/* Dripping blood from leaf */}
              <path
                d="M 450 380 Q 445 420 440 460 Q 438 480 440 500"
                stroke="#8B0000"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 480 380 Q 485 420 490 460 Q 492 480 490 500"
                stroke="#8B0000"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 420 380 Q 415 420 410 460 Q 408 480 410 500"
                stroke="#8B0000"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />

              {/* Blood splatter on white section */}
              <circle cx="300" cy="150" r="40" fill="#8B0000" opacity="0.6" />
              <circle cx="600" cy="200" r="35" fill="#8B0000" opacity="0.6" />
              <circle cx="350" cy="450" r="30" fill="#8B0000" opacity="0.5" />
              <circle cx="550" cy="400" r="35" fill="#8B0000" opacity="0.5" />
            </g>
          </svg>

          {/* Animated blood drops falling */}
          {bloodDrops.map((drop) => (
            <div
              key={drop.id}
              className="absolute animate-pulse"
              style={{
                left: `${drop.left}%`,
                top: '-20px',
                width: '12px',
                height: '12px',
                backgroundColor: '#8B0000',
                borderRadius: '50%',
                animation: `bloodDrop 3s ease-in forwards`,
                boxShadow: '0 0 8px rgba(139, 0, 0, 0.8)',
              }}
            />
          ))}

          {/* "KNOW YOUR RIGHTS" Banner */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-2xl shadow-lg z-10 whitespace-nowrap">
            KNOW YOUR RIGHTS
          </div>

          {/* "JUSTICE FOR THE SILENCED" Caption */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-2 rounded-lg font-semibold text-lg shadow-lg z-10">
            JUSTICE FOR THE SILENCED
          </div>
        </div>
      </div>

      {/* THE SILENCE CLOCK */}
      <div className="relative z-20 px-4 py-12">
        <TheSilenceClock />
      </div>

      {/* CSS Animation for blood drops */}
      <style>{`
        @keyframes bloodDrop {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(600px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
