import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();
  const [videoEnded, setVideoEnded] = useState(false);
  const [elapsedTime, setElapsedTime] = useState({ days: 0, hours: 0, minutes: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Calculate elapsed time since Feb 14, 2019 noon
  useEffect(() => {
    const calculateElapsed = () => {
      const startDate = new Date(2021, 1, 14, 12, 0, 0); // Feb 14, 2021 noon
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      
      setElapsedTime({ days, hours, minutes });
    };

    calculateElapsed();
    const interval = setInterval(calculateElapsed, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Handle video end
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  // Blood dripping animation overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Blood drops falling
      const dropCount = 15;
      for (let i = 0; i < dropCount; i++) {
        const dropX = canvas.width * 0.5 + Math.sin(time * 0.5 + i) * 250;
        const dropY = (time * 120 + i * 80) % (canvas.height + 100);
        const dropSize = 4 + Math.sin(time + i) * 2;

        // Blood drop
        ctx.fillStyle = `rgba(220, 0, 0, ${Math.max(0, 0.95 - (dropY / canvas.height) * 0.95)})`;
        ctx.beginPath();
        ctx.arc(dropX, dropY, dropSize, 0, Math.PI * 2);
        ctx.fill();

        // Blood trail
        ctx.strokeStyle = `rgba(200, 0, 0, ${Math.max(0, 0.7 - (dropY / canvas.height) * 0.7)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(dropX, dropY);
        ctx.lineTo(dropX + Math.sin(time + i) * 6, dropY + 50);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLanguageSelect = (lang: string) => {
    navigate(`/book/${lang}`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 1-minute Parliament Hill walkthrough video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/parliament-hill-walkthrough-1min_89191384.mp4"
      />

      {/* Blood dripping animation overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Live counter - wrapping around Centennial Flame base */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="relative w-96 h-96">
          {/* Days - Top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black border-2 border-yellow-400 px-4 py-2 rounded-sm">
            <div className="text-yellow-400 font-bold text-lg text-center">
              {elapsedTime.days}
            </div>
            <div className="text-yellow-400 text-xs text-center font-bold">
              DAYS
            </div>
          </div>

          {/* Hours - Right */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black border-2 border-yellow-400 px-4 py-2 rounded-sm">
            <div className="text-yellow-400 font-bold text-lg text-center">
              {elapsedTime.hours}
            </div>
            <div className="text-yellow-400 text-xs text-center font-bold">
              HOURS
            </div>
          </div>

          {/* Minutes - Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black border-2 border-yellow-400 px-4 py-2 rounded-sm">
            <div className="text-yellow-400 font-bold text-lg text-center">
              {elapsedTime.minutes}
            </div>
            <div className="text-yellow-400 text-xs text-center font-bold">
              MINUTES
            </div>
          </div>

          {/* Left - Since Feb 14, 2019 */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black border-2 border-yellow-400 px-3 py-2 rounded-sm">
            <div className="text-yellow-400 text-xs text-center font-bold whitespace-nowrap">
              SINCE
            </div>
            <div className="text-yellow-400 text-xs text-center font-bold">
              FEB 14
            </div>
            <div className="text-yellow-400 text-xs text-center font-bold">
              2021
            </div>
          </div>
        </div>
      </div>

      {/* Language selector - 3 uniform black boxes at bottom with yellow text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {/* English */}
        <button
          onClick={() => handleLanguageSelect('en')}
          className="w-28 bg-black border-2 border-yellow-400 px-4 py-1.5 rounded-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 group text-center"
        >
          <div className="text-yellow-400 group-hover:text-black font-bold text-xs">
            English
          </div>
        </button>

        {/* Français */}
        <button
          onClick={() => handleLanguageSelect('fr')}
          className="w-28 bg-black border-2 border-yellow-400 px-4 py-1.5 rounded-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 group text-center"
        >
          <div className="text-yellow-400 group-hover:text-black font-bold text-xs">
            Français
          </div>
        </button>

        {/* Kreyòl Ayisyen */}
        <button
          onClick={() => handleLanguageSelect('ht')}
          className="w-28 bg-black border-2 border-yellow-400 px-4 py-1.5 rounded-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 group text-center"
        >
          <div className="text-yellow-400 group-hover:text-black font-bold text-xs">
            Kreyòl
          </div>
        </button>
      </div>

      {/* Video end message - appears after 60 seconds */}
      {videoEnded && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-40">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              The Flame Has Been Extinguished
            </h2>
            <p className="text-white text-xl mb-8">
              Blood has turned the waters red
            </p>
            <p className="text-yellow-400 text-lg">
              Choose a language above to enter the book and learn the truth
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
