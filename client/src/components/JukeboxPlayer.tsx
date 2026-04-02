import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronDown, ChevronUp, Share2, Copy, X } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  transcript: string;
  duration: string;
}

const episodes: Record<string, Episode[]> = {
  en: [
    {
      id: 1,
      title: "The Silence of Politicians",
      description: "How elected officials at every level ghosted a constituent seeking help for an Indigenous family in crisis.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_1_The_Silence_of_Politicians_English_1e2b3c4d.mp3",
      transcript: "Transcript: The Silence of Politicians - This episode documents how federal, provincial, and municipal elected officials failed to respond to requests for help...",
      duration: "8:45"
    },
    {
      id: 2,
      title: "System Failure - DPJ Accountability",
      description: "The Direction de la Protection de la Jeunesse (DPJ) withdrew support in January 2023, leaving an Indigenous family without adequate follow-up.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_2_System_Failure_DPJ_Accountability_English_2f3g4h5i.mp3",
      transcript: "Transcript: System Failure - DPJ Accountability - The DPJ's withdrawal created a cascade of failures...",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Days of Injustice",
      description: "A timeline of systemic failures spanning over 5 years, from 2021 to 2026, documenting the ongoing harm to Indigenous children.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_3_1873_Days_of_Injustice_English_3j4k5l6m.mp3",
      transcript: "Transcript: 1873 Days of Injustice - Each day represents a failure of the system...",
      duration: "8:30"
    },
    {
      id: 4,
      title: "Indigenous Rights Under Attack",
      description: "How systemic failures violate fundamental Indigenous rights and international conventions protecting children.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_4_Indigenous_Rights_Under_Attack_English_4n5o6p7q.mp3",
      transcript: "Transcript: Indigenous Rights Under Attack - International law and Canadian Charter protections...",
      duration: "9:05"
    },
    {
      id: 5,
      title: "Justice Delayed is Justice Denied",
      description: "The final call for accountability, independent inquiry, and real systemic change to protect other Indigenous families.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_5_Justice_Delayed_is_Justice_Denied_English_5r6s7t8u.mp3",
      transcript: "Transcript: Justice Delayed is Justice Denied - What comes next...",
      duration: "8:50"
    }
  ],
  fr: [
    {
      id: 1,
      title: "Le Silence des Politiciens",
      description: "Comment les élus à tous les niveaux ont ignoré une demande d'aide d'une famille autochtone en crise.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_1_The_Silence_of_Politicians_French_1e2b3c4d.mp3",
      transcript: "Transcription: Le Silence des Politiciens - Cet épisode documente comment les élus...",
      duration: "8:45"
    },
    {
      id: 2,
      title: "Échec Systémique - Responsabilité de la DPJ",
      description: "La Direction de la Protection de la Jeunesse (DPJ) s'est retirée en janvier 2023, laissant une famille autochtone sans suivi adéquat.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_2_System_Failure_DPJ_Accountability_French_2f3g4h5i.mp3",
      transcript: "Transcription: Échec Systémique - Le retrait de la DPJ a créé une cascade d'échecs...",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Jours d'Injustice",
      description: "Une chronologie des échecs systémiques s'étendant sur plus de 5 ans, documentant les préjudices continus aux enfants autochtones.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_3_1873_Days_of_Injustice_French_3j4k5l6m.mp3",
      transcript: "Transcription: 1873 Jours d'Injustice - Chaque jour représente un échec du système...",
      duration: "8:30"
    },
    {
      id: 4,
      title: "Droits Autochtones Sous Attaque",
      description: "Comment les échecs systémiques violent les droits fondamentaux des autochtones et les conventions internationales protégeant les enfants.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_4_Indigenous_Rights_Under_Attack_French_4n5o6p7q.mp3",
      transcript: "Transcription: Droits Autochtones Sous Attaque - Le droit international et les protections de la Charte canadienne...",
      duration: "9:05"
    },
    {
      id: 5,
      title: "La Justice Retardée est la Justice Refusée",
      description: "L'appel final pour la responsabilité, une enquête indépendante et un véritable changement systémique.",
      audioUrl: "https://manus.cdn.manuscdn.com/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Episode_5_Justice_Delayed_is_Justice_Denied_French_5r6s7t8u.mp3",
      transcript: "Transcription: La Justice Retardée est la Justice Refusée - Qu'est-ce qui vient ensuite...",
      duration: "8:50"
    }
  ]
};

// Indigenous Finger Painting Art Component
function IndigenousArtBorder() {
  return (
    <svg viewBox="0 0 400 100" className="w-full h-auto" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
      {/* Left decorative pattern - concentric circles */}
      <g opacity="0.8">
        <circle cx="30" cy="50" r="20" fill="none" stroke="#8B4513" strokeWidth="2"/>
        <circle cx="30" cy="50" r="15" fill="none" stroke="#D2691E" strokeWidth="2"/>
        <circle cx="30" cy="50" r="10" fill="none" stroke="#CD853F" strokeWidth="2"/>
        <circle cx="30" cy="50" r="5" fill="#8B4513"/>
        
        {/* Dots around circles */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 30 + 25 * Math.cos(rad);
          const y = 50 + 25 * Math.sin(rad);
          return <circle key={angle} cx={x} cy={y} r="2" fill="#D2691E"/>;
        })}
      </g>

      {/* Center decorative pattern - traditional lines and dots */}
      <g opacity="0.8">
        {/* Horizontal lines */}
        <line x1="80" y1="30" x2="320" y2="30" stroke="#8B4513" strokeWidth="1" strokeDasharray="5,3"/>
        <line x1="80" y1="50" x2="320" y2="50" stroke="#D2691E" strokeWidth="2"/>
        <line x1="80" y1="70" x2="320" y2="70" stroke="#8B4513" strokeWidth="1" strokeDasharray="5,3"/>
        
        {/* Decorative dots along center line */}
        {[100, 140, 180, 220, 260, 300].map((x) => (
          <circle key={x} cx={x} cy="50" r="3" fill="#CD853F"/>
        ))}
      </g>

      {/* Right decorative pattern - spiral-like design */}
      <g opacity="0.8">
        <circle cx="370" cy="50" r="20" fill="none" stroke="#8B4513" strokeWidth="2"/>
        <circle cx="370" cy="50" r="15" fill="none" stroke="#D2691E" strokeWidth="2"/>
        <circle cx="370" cy="50" r="10" fill="none" stroke="#CD853F" strokeWidth="2"/>
        <circle cx="370" cy="50" r="5" fill="#8B4513"/>
        
        {/* Dots around circles */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 370 + 25 * Math.cos(rad);
          const y = 50 + 25 * Math.sin(rad);
          return <circle key={`right-${angle}`} cx={x} cy={y} r="2" fill="#D2691E"/>;
        })}
      </g>
    </svg>
  );
}

export function JukeboxPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentEpisode = episodes[language].find(ep => ep.id === currentEpisodeId) || episodes[language][0];

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEpisodeChange = (id: number) => {
    setCurrentEpisodeId(id);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setCurrentEpisodeId(1);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const shareEpisode = (platform: string) => {
    const url = window.location.href;
    const text = `Check out "${currentEpisode.title}" - ${currentEpisode.description}`;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(currentEpisode.title)}&body=${encodeURIComponent(text + '\n' + url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <audio ref={audioRef} src={currentEpisode.audioUrl} />
      
      {/* Jukebox Player - Minimized */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-32 h-40 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-400 rounded-lg shadow-2xl border-4 border-yellow-600 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
            style={{
              backgroundImage: 'linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%)',
              boxShadow: '0 0 20px rgba(217, 119, 6, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
            }}
          >
            {/* Jukebox speaker grille */}
            <div className="absolute top-2 left-2 right-2 h-12 bg-black rounded-sm opacity-70 flex items-center justify-center">
              <div className="text-yellow-300 text-xs font-bold text-center px-1 line-clamp-2">
                {currentEpisode.title}
              </div>
            </div>

            {/* Vinyl record visual */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-gray-800 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black"></div>
              </div>
            </div>

            {/* Play indicator */}
            {isPlaying && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Click to open hint */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Click to play
            </div>
          </button>
        </div>
      )}

      {/* Jukebox Player - Expanded */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-400 rounded-xl shadow-2xl border-4 border-yellow-600 p-6"
          style={{
            backgroundImage: 'linear-gradient(135deg, #fcd34d 0%, #fbbf24 50%, #f59e0b 100%)',
            boxShadow: '0 0 30px rgba(217, 119, 6, 0.6), inset 0 2px 8px rgba(255, 255, 255, 0.4)'
          }}
        >
          {/* Indigenous Art Border - Top */}
          <div className="mb-4 -mx-6 px-6">
            <IndigenousArtBorder />
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 p-1 hover:bg-yellow-500 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-800" />
          </button>

          {/* Jukebox Title */}
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              🎵 PODCAST JUKEBOX 🎵
            </h3>
            <p className="text-xs text-gray-700 mt-1">🪶 Justice for Barran 🪶</p>
          </div>

          {/* Display Screen */}
          <div className="bg-black rounded-lg p-4 mb-4 border-2 border-gray-800">
            <div className="text-yellow-300 font-mono text-sm mb-2">
              <p className="font-bold truncate">{currentEpisode.title}</p>
              <p className="text-xs opacity-75 mt-1">{language === 'en' ? 'Now Playing' : 'En cours de lecture'}</p>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs text-yellow-300 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`flex-1 py-2 px-3 rounded-lg font-bold text-sm transition-all ${
                language === 'en'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`flex-1 py-2 px-3 rounded-lg font-bold text-sm transition-all ${
                language === 'fr'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              🇫🇷 Français
            </button>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            {isPlaying ? (
              <>
                <Pause size={20} /> {language === 'en' ? 'Pause' : 'Pause'}
              </>
            ) : (
              <>
                <Play size={20} /> {language === 'en' ? 'Play' : 'Lecture'}
              </>
            )}
          </button>

          {/* Episode Selector */}
          <div className="bg-black rounded-lg p-3 mb-4 border-2 border-gray-800 max-h-32 overflow-y-auto">
            <p className="text-yellow-300 font-bold text-xs mb-2">
              {language === 'en' ? 'SELECT EPISODE' : 'SÉLECTIONNER ÉPISODE'}
            </p>
            <div className="space-y-1">
              {episodes[language].map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => handleEpisodeChange(ep.id)}
                  className={`w-full text-left px-2 py-1 rounded text-xs font-mono transition-all ${
                    currentEpisodeId === ep.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-yellow-300 hover:bg-gray-600'
                  }`}
                >
                  #{ep.id}: {ep.title}
                </button>
              ))}
            </div>
          </div>

          {/* Transcript Toggle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="w-full bg-gray-800 hover:bg-gray-700 text-yellow-300 font-bold py-2 px-3 rounded-lg mb-3 text-sm transition-all"
          >
            {showTranscript ? '📖 Hide Transcript' : '📖 Show Transcript'}
          </button>

          {/* Transcript Display */}
          {showTranscript && (
            <div className="bg-black rounded-lg p-3 mb-4 border-2 border-gray-800 max-h-32 overflow-y-auto">
              <p className="text-yellow-300 text-xs font-mono leading-relaxed">
                {currentEpisode.transcript}
              </p>
            </div>
          )}

          {/* Share Buttons */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <button
              onClick={() => shareEpisode('twitter')}
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded text-xs transition-all"
              title="Share on Twitter/X"
            >
              𝕏
            </button>
            <button
              onClick={() => shareEpisode('facebook')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs transition-all"
              title="Share on Facebook"
            >
              f
            </button>
            <button
              onClick={() => shareEpisode('whatsapp')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded text-xs transition-all"
              title="Share on WhatsApp"
            >
              💬
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => shareEpisode('linkedin')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded text-xs transition-all"
              title="Share on LinkedIn"
            >
              in
            </button>
            <button
              onClick={copyLink}
              className="bg-gray-700 hover:bg-gray-600 text-yellow-300 font-bold py-2 px-2 rounded text-xs transition-all flex items-center justify-center gap-1"
              title="Copy link"
            >
              <Copy size={14} /> Copy
            </button>
          </div>

          {/* Indigenous Art Border - Bottom */}
          <div className="-mx-6 px-6">
            <IndigenousArtBorder />
          </div>
        </div>
      )}
    </>
  );
}
