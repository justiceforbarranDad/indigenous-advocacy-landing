import { useLocation } from 'wouter';
import { VideoHeroWithClock } from '@/components/VideoHeroWithClock';

export default function FrontCover() {
  const [, navigate] = useLocation();

  const handleLanguageSelect = (lang: string) => {
    navigate(`/book/${lang}`);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {/* VIDEO HERO WITH BLOOD DROPS AND SPORTS TICKER */}
      <VideoHeroWithClock />

      {/* LANGUAGE SELECTOR - positioned at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={() => handleLanguageSelect('en')}
          className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all"
        >
          English
        </button>
        <button
          onClick={() => handleLanguageSelect('fr')}
          className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all"
        >
          Français
        </button>
        <button
          onClick={() => handleLanguageSelect('ht')}
          className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all"
        >
          Kreyòl
        </button>
      </div>
    </div>
  );
}
