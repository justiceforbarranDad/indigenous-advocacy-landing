import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Episode {
  id: number;
  title: string;
  duration: string;
  language: 'en' | 'fr' | 'ht';
}

const episodes: Episode[] = [
  // English
  { id: 1, title: "Political Silence", duration: "3:08", language: 'en' },
  { id: 2, title: "System Failure", duration: "2:45", language: 'en' },
  // French
  { id: 3, title: "Silans Politisyen", duration: "3:08", language: 'fr' },
  { id: 4, title: "Echèk Sistèm", duration: "2:45", language: 'fr' },
  { id: 5, title: "1873 Jou Injistis", duration: "4:12", language: 'fr' },
  // Kreyòl
  { id: 6, title: "Silans Politisyen yo", duration: "3:08", language: 'ht' },
  { id: 7, title: "Echèk Sistèm - Responsabilité", duration: "2:45", language: 'ht' },
  { id: 8, title: "1873 Jou Injistis", duration: "4:12", language: 'ht' },
  { id: 9, title: "Dwa Endyen yo Anba Atak", duration: "3:55", language: 'ht' },
];

const languageGroups = {
  en: episodes.filter(e => e.language === 'en'),
  fr: episodes.filter(e => e.language === 'fr'),
  ht: episodes.filter(e => e.language === 'ht'),
};

export function BookReader() {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);
  
  const isFrontCover = currentPage === 0;
  const languageOrder: Array<'en' | 'fr' | 'ht'> = ['en', 'fr', 'ht'];
  const languageIndex = Math.floor((currentPage - 1) / 1);
  const currentLanguage = languageOrder[languageIndex] as 'en' | 'fr' | 'ht' | undefined;
  const currentEpisodes = currentLanguage ? languageGroups[currentLanguage] : [];
  
  const goNext = () => {
    if (currentPage < 4 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };
  
  const goPrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const getLanguageName = (lang: 'en' | 'fr' | 'ht') => {
    if (lang === 'en') return 'ENGLISH';
    if (lang === 'fr') return 'FRANÇAIS';
    return 'KREYÒL';
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabloid Title */}
        <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-2 tracking-wider" style={{fontFamily: 'Georgia, serif'}}>
          SUNDAY BLOODY SUNDAY
        </h2>
        <p className="text-center text-red-600 text-xl font-bold mb-12 tracking-widest">
          {i18n.language === 'fr' ? "ÉDITION SPÉCIALE" : i18n.language === 'ht' ? "EDISYON ESPESYAL" : "SPECIAL EDITION"}
        </p>

        {/* Tabloid Container */}
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-6xl">
            {/* Front Cover */}
            {isFrontCover && (
              <div className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-opacity duration-400 ${isFlipping ? 'opacity-75' : 'opacity-100'}`}>
                {/* Front Page - Hero Section */}
                <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col justify-between p-8 md:p-16">
                  {/* Language Selector */}
                  <div className="flex gap-2 justify-end">
                    <button className="px-3 py-1 bg-white text-black text-sm font-bold rounded">EN</button>
                    <button className="px-3 py-1 bg-gray-600 text-white text-sm font-bold rounded">FR</button>
                    <button className="px-3 py-1 bg-gray-600 text-white text-sm font-bold rounded">HT</button>
                  </div>

                  {/* Main Headline */}
                  <div className="text-center">
                    <p className="text-red-600 text-2xl font-bold mb-4 tracking-widest">SINCE 2021</p>
                    <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                      Canada's Sunday Bloody Sunday
                    </h1>
                    <p className="text-white text-2xl mb-4">February 14, 2021</p>
                    <p className="text-red-500 text-lg italic mb-8"> — Justice for Barran</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105">
                      🎙️ Listen
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105">
                      ▶️ Play
                    </button>
                  </div>

                  {/* Silence Clock */}
                  <div className="border-4 border-red-600 rounded-lg p-8 text-center">
                    <h3 className="text-white text-2xl font-bold mb-6 tracking-widest">THE SILENCE CLOCK</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-red-600 p-4 rounded">
                        <p className="text-white text-3xl font-bold">1875</p>
                        <p className="text-white text-sm font-bold">DAYS</p>
                      </div>
                      <div className="bg-red-600 p-4 rounded">
                        <p className="text-white text-3xl font-bold">14</p>
                        <p className="text-white text-sm font-bold">HOURS</p>
                      </div>
                      <div className="bg-red-600 p-4 rounded">
                        <p className="text-white text-3xl font-bold">19</p>
                        <p className="text-white text-sm font-bold">MINUTES</p>
                      </div>
                      <div className="bg-red-600 p-4 rounded">
                        <p className="text-white text-3xl font-bold">34</p>
                        <p className="text-white text-sm font-bold">SECONDS</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="text-center text-white text-sm">
                    <p className="font-bold">TURN PAGE TO READ</p>
                  </div>
                </div>
              </div>
            )}

            {/* Interior Pages - Language Groups */}
            {!isFrontCover && currentLanguage && currentEpisodes.length > 0 && (
              <div className={`grid grid-cols-2 gap-0 bg-white rounded-lg shadow-2xl overflow-hidden transition-opacity duration-400 ${isFlipping ? 'opacity-75' : 'opacity-100'}`}>
                {/* Left Page - Episode List */}
                <div className="bg-amber-50 p-12 border-r-2 border-gray-300 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold tracking-widest mb-2 uppercase">
                      {i18n.language === 'fr' ? 'Langue' : i18n.language === 'ht' ? 'Lang' : 'Language'}
                    </p>
                    <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-wider">
                      {getLanguageName(currentLanguage)}
                    </h2>
                    
                    <div className="space-y-3">
                      {currentEpisodes.map((ep) => (
                        <div
                          key={ep.id}
                          onClick={() => setPlayingEpisode(ep.id)}
                          className={`p-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 ${
                            playingEpisode === ep.id
                              ? 'bg-red-600 text-white shadow-lg'
                              : 'bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-300'
                          }`}
                        >
                          <p className="font-bold text-lg">Ep. {ep.id}</p>
                          <p className="text-sm">{ep.title}</p>
                          <p className="text-xs mt-1 opacity-75">{ep.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mt-8 font-serif">
                    Page {currentPage} of 4
                  </div>
                </div>

                {/* Right Page - Audio Player */}
                <div className="bg-white p-12 flex flex-col justify-between">
                  {playingEpisode && episodes.find(e => e.id === playingEpisode) && (
                    <>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold tracking-widest mb-4 uppercase">
                          {i18n.language === 'fr' ? "En Lecture" : i18n.language === 'ht' ? "Ap Jwe" : "Now Playing"}
                        </p>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
                          {episodes.find(e => e.id === playingEpisode)?.title}
                        </h3>
                      </div>

                      {/* Audio Player */}
                      <div className="space-y-8">
                        {/* Player Controls */}
                        <div className="flex justify-center gap-6">
                          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 p-4 rounded-full transition-transform hover:scale-110 shadow-md">
                            <ChevronLeft size={24} />
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white p-8 rounded-full transition-transform hover:scale-110 shadow-lg">
                            <Play size={40} fill="white" />
                          </button>
                          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 p-4 rounded-full transition-transform hover:scale-110 shadow-md">
                            <ChevronRight size={24} />
                          </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-3">
                          <div className="w-full bg-gray-300 rounded-full h-3">
                            <div className="bg-red-600 h-3 rounded-full" style={{width: '35%'}}></div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600 font-semibold">
                            <span>1:05</span>
                            <span>{episodes.find(e => e.id === playingEpisode)?.duration}</span>
                          </div>
                        </div>

                        {/* Volume Control */}
                        <div className="flex items-center gap-4">
                          <Volume2 size={24} className="text-gray-600" />
                          <div className="flex-1 bg-gray-300 rounded-full h-2">
                            <div className="bg-gray-600 h-2 rounded-full" style={{width: '70%'}}></div>
                          </div>
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="text-xs text-gray-500 mt-8 font-serif">
                        Justice for Barran • Indigenous Rights Advocacy
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 px-4">
              <button
                onClick={goPrev}
                disabled={currentPage === 0 || isFlipping}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all transform ${
                  currentPage > 0 && !isFlipping
                    ? 'bg-red-600 hover:bg-red-700 text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
                {i18n.language === 'fr' ? 'Précédent' : i18n.language === 'ht' ? 'Anvan' : 'Previous'}
              </button>

              <div className="text-white text-center">
                <p className="text-lg font-bold">
                  {i18n.language === 'fr' ? 'Page' : i18n.language === 'ht' ? 'Paj' : 'Page'} {currentPage} {i18n.language === 'fr' ? 'de' : i18n.language === 'ht' ? 'nan' : 'of'} 4
                </p>
              </div>

              <button
                onClick={goNext}
                disabled={currentPage >= 4 || isFlipping}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all transform ${
                  currentPage < 4 && !isFlipping
                    ? 'bg-red-600 hover:bg-red-700 text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                {i18n.language === 'fr' ? 'Suivant' : i18n.language === 'ht' ? 'Apre' : 'Next'}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
