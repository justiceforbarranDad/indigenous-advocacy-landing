import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

interface BookCoverProps {
  onEnter: () => void;
}

export function BookCover({ onEnter }: BookCoverProps) {
  const { i18n } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 8-SECOND VIDEO - CENTENNIAL FLAME */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-blood-dripping-animation_b283c63d.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* BOOK COVER DESIGN */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        {/* TITLE */}
        <h1 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {i18n.language === 'fr' 
            ? "Le Dimanche Sanglant du Canada" 
            : i18n.language === 'ht' 
            ? "Dimanch Sanglant Kanada a" 
            : "Canada's Sunday Bloody Sunday"}
        </h1>

        {/* SUBTITLE */}
        <p className="text-2xl md:text-3xl text-red-400 font-bold mb-6 drop-shadow-lg">
          {i18n.language === 'fr' 
            ? "14 février 2021" 
            : i18n.language === 'ht' 
            ? "14 fevriye 2021" 
            : "February 14, 2021"}
        </p>

        {/* TAGLINE */}
        <p className="text-lg md:text-xl text-white/90 mb-8 italic drop-shadow-lg">
          {i18n.language === 'fr' 
            ? "Vérité actuelle avant la réconciliation" 
            : i18n.language === 'ht' 
            ? "Verite aktyèl anvan rekonsilyasyon" 
            : "Current Truth Before Reconciliation"}
        </p>

        {/* BOOK SPINE EFFECT */}
        <div className="flex gap-4 justify-center mb-12">
          <span className="bg-red-700/90 text-white px-6 py-2 rounded-lg font-black text-sm tracking-wider">
            JUSTICE FOR BARRAN
          </span>
          <span className="bg-red-700/90 text-white px-6 py-2 rounded-lg font-black text-sm tracking-wider">
            SUNDAY BLOODY SUNDAY
          </span>
        </div>

        {/* CLICK TO ENTER BUTTON */}
        <button
          onClick={onEnter}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`inline-flex items-center gap-3 px-10 py-4 rounded-lg font-black text-lg transition-all transform duration-300 shadow-2xl ${
            isHovering
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

        {/* FOOTER TEXT */}
        <p className="mt-12 text-gray-300 text-sm">
          {i18n.language === 'fr' 
            ? "Cliquez pour ouvrir le livre" 
            : i18n.language === 'ht' 
            ? "Klike pou louvri liv la" 
            : "Click to open the book"}
        </p>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
