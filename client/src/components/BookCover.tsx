import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

interface BookCoverProps {
  onEnter: () => void;
}

export function BookCover({ onEnter }: BookCoverProps) {
  const { i18n } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);
  const [flameActive, setFlameActive] = useState(true);
  const [bloodDrops, setBloodDrops] = useState<Array<{ id: number; left: number }>>([]);
  const [dropCounter, setDropCounter] = useState(0);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  // Flame animation - burns for 8 seconds then extinguishes
  useEffect(() => {
    const flameTimer = setTimeout(() => {
      setFlameActive(false);
    }, 8000);
    return () => clearTimeout(flameTimer);
  }, []);

  // Blood drops animation - one drop every 1 second
  useEffect(() => {
    if (!flameActive) return;
    const dropInterval = setInterval(() => {
      setDropCounter(prev => prev + 1);
      setBloodDrops(prev => [
        ...prev,
        { id: dropCounter, left: Math.random() * 100 }
      ]);
      setTimeout(() => {
        setBloodDrops(prev => prev.filter(drop => drop.id !== dropCounter));
      }, 2000);
    }, 1000);
    return () => clearInterval(dropInterval);
  }, [dropCounter, flameActive]);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* PARLIAMENT BUILDING BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1200&h=800&fit=crop')`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* LEFT SIDE: FOUNTAIN VIDEO */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center z-5">
        <div className="relative w-64 h-80 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-2xl overflow-hidden">
          {/* Water fountain effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Fountain base */}
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-blue-900 to-blue-700" />

            {/* Water streams */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-40">
              {/* Left stream */}
              <div className="absolute left-0 bottom-0 w-8 h-32 bg-gradient-to-t from-blue-300 to-cyan-200 rounded-full opacity-70 animate-pulse" />
              {/* Center stream */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-40 bg-gradient-to-t from-blue-300 to-cyan-200 rounded-full opacity-80 animate-pulse" />
              {/* Right stream */}
              <div className="absolute right-0 bottom-0 w-8 h-32 bg-gradient-to-t from-blue-300 to-cyan-200 rounded-full opacity-70 animate-pulse" />
            </div>
          </div>

          {/* Blood drops animation */}
          {bloodDrops.map(drop => (
            <div
              key={drop.id}
              className="absolute w-3 h-3 bg-red-600 rounded-full"
              style={{
                left: `${drop.left}%`,
                top: '-10px',
                animation: 'fall 2s linear forwards',
              }}
            />
          ))}

          {/* Blood pool at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-red-900 to-red-700 opacity-60" />
        </div>
      </div>

      {/* RIGHT SIDE: CENTENNIAL FLAME */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center z-5">
        <div className="relative w-40 h-64 flex items-end justify-center">
          {/* Flame container */}
          {flameActive && (
            <div className="relative w-32 h-48">
              {/* Outer flame - red/orange */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-40 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-t-full opacity-90 animate-flame" />
              {/* Middle flame - orange */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-200 rounded-t-full opacity-80 animate-flame-middle" />
              {/* Inner flame - yellow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-20 bg-gradient-to-t from-yellow-400 to-white rounded-t-full opacity-70 animate-flame-inner" />
              {/* Glow effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            </div>
          )}
          {/* Extinguished state */}
          {!flameActive && (
            <div className="text-center">
              <div className="text-6xl mb-4">💨</div>
              <p className="text-yellow-300 font-bold text-lg">Press to Enter</p>
            </div>
          )}
        </div>
      </div>

      {/* BOOK COVER DESIGN */}
      <div className="relative z-20 text-center px-4 max-w-2xl">
        {/* TITLE */}
        <h1 className="text-6xl md:text-7xl font-black text-yellow-300 mb-4 drop-shadow-2xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {i18n.language === 'fr' 
            ? "Le Dimanche Sanglant du Canada" 
            : i18n.language === 'ht' 
            ? "Dimanch Sanglant Kanada a" 
            : "Canada's Sunday Bloody Sunday"}
        </h1>

        {/* DATE */}
        <p className="text-2xl md:text-3xl text-red-500 font-bold mb-6 drop-shadow-lg">
          February 14, 2021
        </p>

        {/* TAGLINE - LIGHT YELLOW */}
        <p className="text-lg md:text-xl text-yellow-300 mb-8 italic drop-shadow-lg">
          {i18n.language === 'fr' 
            ? "Vérité actuelle avant la réconciliation" 
            : i18n.language === 'ht' 
            ? "Verite aktyèl anvan rekonsilyasyon" 
            : "Current Truth Before Reconciliation"}
        </p>

        {/* LANGUAGE SELECTOR BUTTON */}
        {showLanguageSelector ? (
          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            <button
              onClick={() => {
                i18n.changeLanguage('en');
                setShowLanguageSelector(false);
              }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all"
            >
              JUSTICE FOR BARRAN
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage('fr');
                setShowLanguageSelector(false);
              }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all"
            >
              JUSTICE POUR BARRAN
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage('ht');
                setShowLanguageSelector(false);
              }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all"
            >
              JISTIS POU BARRAN
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowLanguageSelector(true)}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition-all transform hover:scale-105 drop-shadow-lg mb-8"
          >
            JUSTICE FOR BARRAN
          </button>
        )}

        {/* CLICK TO ENTER BUTTON */}
        {!showLanguageSelector && (
          <button
            onClick={onEnter}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            disabled={flameActive}
            className={`inline-flex items-center gap-3 px-10 py-4 rounded-lg font-black text-lg transition-all transform duration-300 shadow-2xl ${
              flameActive
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : isHovering
                ? 'bg-yellow-400 text-black scale-110 shadow-yellow-500/50'
                : 'bg-white text-black hover:bg-yellow-300'
            }`}
          >
            {i18n.language === 'fr' 
              ? "📖 Entrer" 
              : i18n.language === 'ht' 
              ? "📖 Antre" 
              : "📖 Enter"}
            <ChevronRight size={24} />
          </button>
        )}

        {/* FOOTER TEXT */}
        {!flameActive && !showLanguageSelector && (
          <p className="mt-12 text-yellow-300 text-sm font-bold animate-pulse">
            {i18n.language === 'fr' 
              ? "Cliquez pour ouvrir le livre" 
              : i18n.language === 'ht' 
              ? "Klike pou louvri liv la" 
              : "Click to open the book"}
          </p>
        )}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes flame {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(0.8);
          }
          50% {
            transform: translateX(-50%) scaleY(1.1) scaleX(0.9);
          }
        }

        @keyframes flame-middle {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(0.7);
          }
          50% {
            transform: translateX(-50%) scaleY(1.05) scaleX(0.8);
          }
        }

        @keyframes flame-inner {
          0%, 100% {
            transform: translateX(-50%) scaleY(1) scaleX(0.6);
          }
          50% {
            transform: translateX(-50%) scaleY(1.02) scaleX(0.7);
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(0) opacity(1);
          }
          100% {
            transform: translateY(300px) opacity(0);
          }
        }

        .animate-flame {
          animation: flame 0.6s ease-in-out infinite;
        }

        .animate-flame-middle {
          animation: flame-middle 0.5s ease-in-out infinite;
        }

        .animate-flame-inner {
          animation: flame-inner 0.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
