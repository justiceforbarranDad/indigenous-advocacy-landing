import React, { useState, useEffect } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface AnimatedFrontCoverProps {
  onEnter?: () => void;
  selectedLanguage?: 'en' | 'fr' | 'ht';
  onLanguageChange?: (lang: 'en' | 'fr' | 'ht') => void;
}

const COVER_TEXT = {
  en: {
    since: 'SINCE 2021',
    title: "Canada's Sunday Bloody Sunday",
    date: 'February 14, 2021',
    subtitle: 'Current Truth Before Reconciliation — Justice for Barran',
    button1: 'JUSTICE FOR BARRAN',
    button2: 'SUNDAY BLOODY SUNDAY',
    listen: 'Listen',
    play: 'Play',
    silence: 'THE SILENCE CLOCK',
    enter: 'ENTER BOOK',
  },
  fr: {
    since: 'DEPUIS 2021',
    title: 'Le dimanche sanglant du Canada',
    date: '14 février 2021',
    subtitle: 'Vérité actuelle avant la réconciliation — Justice pour Barran',
    button1: 'JUSTICE POUR BARRAN',
    button2: 'DIMANCHE SANGLANT DIMANCHE',
    listen: 'Écouter',
    play: 'Jouer',
    silence: 'L\'HORLOGE DU SILENCE',
    enter: 'ENTRER DANS LE LIVRE',
  },
  ht: {
    since: 'DEPI 2021',
    title: 'Dimanch Sanglant Kanada',
    date: '14 fevriye 2021',
    subtitle: 'Verite Aktyèl Anvan Rekonsiliasyon — Jistis pou Barran',
    button1: 'JISTIS POU BARRAN',
    button2: 'DIMANCH SANGLANT DIMANCH',
    listen: 'Tande',
    play: 'Jwe',
    silence: 'OLOROJ SILANS LA',
    enter: 'ANTRE NAN LIV LA',
  },
};

export function AnimatedFrontCover({
  onEnter,
  selectedLanguage = 'en',
  onLanguageChange,
}: AnimatedFrontCoverProps) {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [daysSince, setDaysSince] = useState(1875);

  const text = COVER_TEXT[selectedLanguage];

  useEffect(() => {
    // Calculate days since February 14, 2021
    const startDate = new Date('2021-02-14');
    const today = new Date();
    const diff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysSince(diff);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Background Canvas */}
      <canvas
        id="animatedBg"
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Language Selector - 3 Separate Red Boxes near Flame */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
          <button
            onClick={() => onLanguageChange?.('en')}
            className={`bg-red-700 hover:bg-red-800 border-2 border-red-900 rounded-lg px-6 py-3 font-bold text-lg transition-all transform hover:scale-105 ${
              selectedLanguage === 'en'
                ? 'text-yellow-300 ring-2 ring-yellow-300'
                : 'text-yellow-200'
            }`}
          >
            English
          </button>
          <button
            onClick={() => onLanguageChange?.('fr')}
            className={`bg-red-700 hover:bg-red-800 border-2 border-red-900 rounded-lg px-6 py-3 font-bold text-lg transition-all transform hover:scale-105 ${
              selectedLanguage === 'fr'
                ? 'text-yellow-300 ring-2 ring-yellow-300'
                : 'text-yellow-200'
            }`}
          >
            Français
          </button>
          <button
            onClick={() => onLanguageChange?.('ht')}
            className={`bg-red-700 hover:bg-red-800 border-2 border-red-900 rounded-lg px-6 py-3 font-bold text-lg transition-all transform hover:scale-105 ${
              selectedLanguage === 'ht'
                ? 'text-yellow-300 ring-2 ring-yellow-300'
                : 'text-yellow-200'
            }`}
          >
            Kreyòl
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* Top Text */}
          <div className="text-center mb-8">
            <p className="text-red-500 text-2xl font-bold tracking-widest mb-4">{text.since}</p>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {text.title}
            </h1>
            <p className="text-2xl text-white mb-2 drop-shadow-lg">{text.date}</p>
            <p className="text-xl text-red-300 italic drop-shadow-lg">{text.subtitle}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 border-2 border-red-900">
              {text.button1}
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 border-2 border-red-900">
              {text.button2}
            </button>
          </div>

          {/* Listen & Play Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2">
              🎧 {text.listen}
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2">
              ▶ {text.play}
            </button>
          </div>

          {/* The Silence Clock */}
          <div className="bg-red-900/80 backdrop-blur-sm border-2 border-red-700 rounded-lg p-8 mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{text.silence}</h2>
            <div className="flex gap-4 justify-center items-center">
              <div className="bg-red-700 text-white font-bold text-4xl px-6 py-4 rounded">
                {daysSince}
              </div>
              <span className="text-white text-xl font-bold">DAYS</span>
              <div className="bg-red-700 text-white font-bold text-2xl px-4 py-4 rounded">
                14
              </div>
              <span className="text-white text-lg">HOURS</span>
              <div className="bg-red-700 text-white font-bold text-2xl px-4 py-4 rounded">
                38
              </div>
              <span className="text-white text-lg">MINUTES</span>
              <div className="bg-red-700 text-white font-bold text-2xl px-4 py-4 rounded">
                21
              </div>
              <span className="text-white text-lg">SECONDS</span>
            </div>
          </div>

          {/* Enter Book Button */}
          <button
            onClick={onEnter}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 text-xl mb-8"
          >
            {text.enter}
          </button>
        </div>

        {/* Audio Control */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-bold"
          >
            {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
            {audioEnabled ? 'Audio On' : 'Audio Off'}
          </button>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} className="text-white" />
        </div>
      </div>

      {/* Canvas Animation Script */}
      <script>{`
        const canvas = document.getElementById('animatedBg');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          let animationId;

          function drawBackground() {
            // Hatchet Lake Skies - gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#1a1a2e');
            gradient.addColorStop(0.3, '#16213e');
            gradient.addColorStop(0.6, '#0f3460');
            gradient.addColorStop(1, '#8b0000');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Northern Lights
            drawNorthernLights();

            // Water turning red
            drawWater();

            // Blood drops
            drawBloodDrops();

            // Canadian flag animation
            drawFlag();

            animationId = requestAnimationFrame(drawBackground);
          }

          function drawNorthernLights() {
            const time = Date.now() / 1000;
            for (let i = 0; i < 3; i++) {
              const hue = (time * 30 + i * 120) % 360;
              ctx.fillStyle = \`hsl(\${hue}, 100%, 50%)\`;
              ctx.globalAlpha = 0.3 + Math.sin(time + i) * 0.2;
              ctx.beginPath();
              ctx.moveTo(0, canvas.height * 0.2 + i * 40);
              for (let x = 0; x < canvas.width; x += 20) {
                const y = canvas.height * 0.2 + i * 40 + Math.sin(x * 0.01 + time) * 30;
                ctx.lineTo(x, y);
              }
              ctx.lineTo(canvas.width, canvas.height * 0.3);
              ctx.lineTo(0, canvas.height * 0.3);
              ctx.fill();
            }
            ctx.globalAlpha = 1;
          }

          function drawWater() {
            const time = Date.now() / 1000;
            const redIntensity = 0.3 + Math.sin(time * 0.5) * 0.2;
            ctx.fillStyle = \`rgba(139, 0, 0, \${redIntensity})\`;
            ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
          }

          function drawBloodDrops() {
            const time = Date.now() / 1000;
            for (let i = 0; i < 5; i++) {
              const x = (canvas.width / 5) * (i + 1);
              const y = (canvas.height * 0.5 + Math.sin(time + i) * 100) % canvas.height;
              ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
              ctx.beginPath();
              ctx.arc(x, y, 5, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          function drawFlag() {
            const time = Date.now() / 1000;
            const x = canvas.width / 2 - 50;
            const y = canvas.height * 0.3;
            
            // Flag pole
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(x, y, 10, 150);

            // Flag waving
            ctx.fillStyle = '#FF0000';
            ctx.globalAlpha = 0.8;
            ctx.beginPath();
            ctx.moveTo(x + 10, y);
            for (let i = 0; i < 100; i++) {
              const px = x + 10 + i;
              const py = y + Math.sin(i * 0.1 + time) * 20;
              ctx.lineTo(px, py);
            }
            ctx.lineTo(x + 110, y + 50);
            ctx.lineTo(x + 10, y + 50);
            ctx.fill();

            // Maple leaf
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 40px Arial';
            ctx.fillText('🍁', x + 40, y + 40);

            // Flames from flag
            for (let i = 0; i < 3; i++) {
              ctx.fillStyle = \`rgba(255, \${100 + Math.sin(time + i) * 100}, 0, 0.6)\`;
              ctx.beginPath();
              const flameX = x + 50 + i * 20;
              const flameY = y + 50 + Math.sin(time + i) * 10;
              ctx.arc(flameX, flameY, 10 + Math.sin(time + i) * 5, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.globalAlpha = 1;
          }

          drawBackground();

          window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          });
        }
      `}</script>
    </div>
  );
}
