import { useEffect, useState } from 'react';
import './TotemPoleHero.css';

export default function TotemPoleHero() {
  const [bloodDrops, setBloodDrops] = useState<number[]>([]);

  useEffect(() => {
    let dropCount = 0;
    const interval = setInterval(() => {
      dropCount++;
      setBloodDrops((prev) => [...prev, dropCount].slice(-10)); // Keep last 10 drops
    }, 1000); // 1 drop per second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="totem-pole-hero">
      {/* Background with Parliament silhouettes */}
      <div className="hero-background">
        <div className="parliament-left"></div>
        <div className="parliament-right"></div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        {/* Totem pole */}
        <div className="totem-pole">
          <div className="totem-section totem-1"></div>
          <div className="totem-section totem-2"></div>
          <div className="totem-section totem-3"></div>
          <div className="totem-base"></div>
        </div>

        {/* Peace flame */}
        <div className="peace-flame">
          <div className="flame-inner"></div>
          <div className="flame-outer"></div>
        </div>

        {/* Blood drops falling */}
        <div className="blood-drops-container">
          {bloodDrops.map((id) => (
            <div key={id} className="blood-drop"></div>
          ))}
        </div>

        {/* Fountain */}
        <div className="fountain">
          <div className="fountain-bowl">
            <div className="fountain-water"></div>
          </div>
        </div>
      </div>

      {/* Overlay text */}
      <div className="hero-overlay">
        <h1>KNOW YOUR RIGHTS</h1>
        <p>SINCE 2021 • Canada's Sunday Bloody Sunday</p>
      </div>
    </div>
  );
}
