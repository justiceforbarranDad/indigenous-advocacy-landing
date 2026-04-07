import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();
  const [videoEnded, setVideoEnded] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState('0:00:00:00');
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [tickerIndex, setTickerIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const tickerMessages = [
    'JUSTICE FOR BARRAN • SYSTEMIC FAILURE EXPOSED • GHOSTING CONTINUES',
    'INDIGENOUS RIGHTS VIOLATED • DPJ FAIL • JORDAN\'S PRINCIPLE IGNORED',
    'TRUTH AND RECONCILIATION • ACCOUNTABILITY REQUIRED • EVERY CHILD MATTERS',
    'FEDERAL SILENCE • PROVINCIAL FAILURE • MUNICIPAL NEGLECT • JUSTICE DELAYED'
  ];

  // Update timer every second - showing days:hours:minutes:seconds
  useEffect(() => {
    const updateTimer = () => {
      const startDate = new Date(2021, 1, 14, 12, 0, 0); // Feb 14, 2021 noon
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
      
      const display = `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      setTimerDisplay(display);

      // Update current date and time
      const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentDateTime(`${dateStr} • ${timeStr}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Rotate ticker messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 5000); // Change message every 5 seconds

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

      // Blood drops falling - realistic with 1 second spacing
      const dropCount = 8;
      for (let i = 0; i < dropCount; i++) {
        // Calculate drop position with 1 second (60 frames) spacing
        const dropSpacing = 60; // frames between drops
        const dropPhase = (time - i * dropSpacing) % (canvas.height / 100 + 60);
        
        if (dropPhase < 0) continue; // Drop hasn't started yet
        
        const dropX = canvas.width * 0.5 + Math.sin(time * 0.3 + i) * 150;
        const dropY = dropPhase * 100;
        const dropSize = 8 + Math.sin(time + i) * 2; // Larger drops

        if (dropY > canvas.height) continue; // Drop has fallen off screen

        // Main blood drop - more realistic
        ctx.fillStyle = `rgba(180, 0, 0, ${Math.max(0, 1 - (dropY / canvas.height) * 0.8)})`;
        ctx.beginPath();
        ctx.arc(dropX, dropY, dropSize, 0, Math.PI * 2);
        ctx.fill();

        // Outer glow for realism
        ctx.fillStyle = `rgba(220, 0, 0, ${Math.max(0, 0.5 - (dropY / canvas.height) * 0.5)})`;
        ctx.beginPath();
        ctx.arc(dropX, dropY, dropSize + 2, 0, Math.PI * 2);
        ctx.fill();

        // Blood trail below drop
        ctx.strokeStyle = `rgba(150, 0, 0, ${Math.max(0, 0.6 - (dropY / canvas.height) * 0.6)})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(dropX, dropY);
        ctx.lineTo(dropX + Math.sin(time + i) * 4, dropY + 80);
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

      {/* TIMER - SPORTS LED DIGITAL TICKER */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-black border-4 border-yellow-400 px-16 py-6 rounded-sm" style={{
          boxShadow: '0 0 30px rgba(250, 204, 21, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.8)'
        }}>
          <div className="text-center">
            {/* Timer display - LED style */}
            <div className="text-yellow-400 font-bold text-7xl font-mono tracking-wider" style={{
              textShadow: '0 0 10px rgba(250, 204, 21, 0.8), 0 0 20px rgba(250, 204, 21, 0.5)',
              letterSpacing: '0.15em',
              fontFamily: '"Courier New", monospace'
            }}>
              {timerDisplay}
            </div>
            
            {/* Label - smaller */}
            <div className="text-yellow-400 text-xs font-bold mt-2" style={{
              textShadow: '0 0 5px rgba(250, 204, 21, 0.6)'
            }}>
              SINCE FEB 14, 2021
            </div>
          </div>
        </div>
      </div>

      {/* SCROLLING NEWS TICKER - Top of screen */}
      <div className="absolute top-0 left-0 right-0 bg-black border-b-2 border-yellow-400 overflow-hidden z-40">
        <div className="flex items-center h-10">
          {/* Current date and time */}
          <div className="flex-shrink-0 px-4 bg-yellow-400 text-black font-bold text-xs whitespace-nowrap">
            LIVE
          </div>
          
          {/* Scrolling ticker messages */}
          <div className="flex-1 overflow-hidden">
            <div 
              className="inline-block whitespace-nowrap px-4 text-yellow-400 font-bold text-xs animate-pulse"
              style={{
                animation: 'scroll 15s linear infinite'
              }}
            >
              {currentDateTime} • {tickerMessages[tickerIndex]} • {currentDateTime} • {tickerMessages[tickerIndex]}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for scrolling animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

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
