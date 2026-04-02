import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, ChevronDown, ChevronUp, Share2, X } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  urlEn: string;
  urlFr: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: 'The Silence of Politicians',
    description: 'An investigation into government accountability',
    urlEn: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-of-politicians-en.wav',
    urlFr: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politiciens-fr.wav',
  },
  {
    id: 2,
    title: 'System Failure: DPJ Accountability',
    description: 'An investigation into institutional failure',
    urlEn: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-system-failure-dpj-en.wav',
    urlFr: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-systeme-echec-dpj-fr.wav',
  },
  {
    id: 3,
    title: '1873 Days of Injustice',
    description: 'A timeline investigation of systemic failures',
    urlEn: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-days-en.wav',
    urlFr: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-jours-injustice-fr.wav',
  },
  {
    id: 4,
    title: 'Indigenous Rights Under Attack',
    description: 'A legal investigation into rights violations',
    urlEn: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-indigenous-rights-en.wav',
    urlFr: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-droits-autochtones-fr.wav',
  },
  {
    id: 5,
    title: 'Justice Delayed is Justice Denied',
    description: 'The impact of systemic delays on families',
    urlEn: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-delayed-en.wav',
    urlFr: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-retardee-fr.wav',
  },
];

const cassetteBg = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/bg_bc659d4c.png';
const playButtonNormal = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Play_Hover_d5491a6d.png';
const stopButtonNormal = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/Stopp_Hover_55a87f27.png';

export default function CassetteTapePlayer() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentEpisode = episodes.find((ep) => ep.id === currentEpisodeId) || episodes[0];
  const audioUrl = language === 'en' ? currentEpisode.urlEn : currentEpisode.urlFr;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    const audio = audioRef.current;
    if (audio) {
      audio.src = lang === 'en' ? currentEpisode.urlEn : currentEpisode.urlFr;
      audio.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handleEpisodeChange = (id: number) => {
    setCurrentEpisodeId(id);
    const audio = audioRef.current;
    if (audio) {
      audio.src = language === 'en' ? episodes.find((ep) => ep.id === id)?.urlEn || '' : episodes.find((ep) => ep.id === id)?.urlFr || '';
      audio.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const shareEpisode = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this podcast episode: "${currentEpisode.title}" - ${currentEpisode.description}`;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(currentEpisode.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank');
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const transcripts: Record<number, Record<'en' | 'fr', string>> = {
    1: {
      en: 'THE SILENCE OF POLITICIANS: An investigation into government accountability and the failure of elected officials to serve their constituents.',
      fr: 'LE SILENCE DES POLITICIENS: Une investigation sur la responsabilité gouvernementale et l\'échec des élus à servir leurs électeurs.',
    },
    2: {
      en: 'SYSTEM FAILURE: An investigation into DPJ accountability and child protection collapse in Quebec.',
      fr: 'L\'ÉCHEC DU SYSTÈME: Une investigation sur la responsabilité de la DPJ et l\'effondrement de la protection de l\'enfance au Québec.',
    },
    3: {
      en: '1873 DAYS OF INJUSTICE: A timeline investigation of systemic failures affecting Indigenous families.',
      fr: '1873 JOURS D\'INJUSTICE: Une investigation chronologique des défaillances systémiques affectant les familles autochtones.',
    },
    4: {
      en: 'INDIGENOUS RIGHTS UNDER ATTACK: A legal investigation into violations of Indigenous rights and systemic oppression.',
      fr: 'LES DROITS AUTOCHTONES SOUS ATTAQUE: Une investigation juridique sur les violations des droits autochtones et l\'oppression systémique.',
    },
    5: {
      en: 'JUSTICE DELAYED IS JUSTICE DENIED: The impact of systemic delays on families seeking accountability.',
      fr: 'LA JUSTICE RETARDÉE EST LA JUSTICE NIÉE: L\'impact des retards systémiques sur les familles cherchant la responsabilité.',
    },
  };

  if (isMinimized) {
    return (
      <div
        className="fixed bottom-4 right-4 z-50 cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setIsMinimized(false)}
        style={{
          backgroundImage: `url('${cassetteBg}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '280px',
          height: '180px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div className="text-center text-xs font-bold text-yellow-900">
          <div>{currentEpisode.title.substring(0, 20)}...</div>
          <div className="text-yellow-700">{formatTime(currentTime)} / {formatTime(duration)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-2xl p-4 max-w-sm">
      {/* Close Button */}
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded transition-colors"
      >
        <X size={16} />
      </button>

      {/* Language Toggle */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
            language === 'en' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇬🇧 EN
        </button>
        <button
          onClick={() => handleLanguageChange('fr')}
          className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
            language === 'fr' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇫🇷 FR
        </button>
      </div>

      {/* Episode Title */}
      <h3 className="font-bold text-sm mb-2 text-gray-800">{currentEpisode.title}</h3>
      <p className="text-xs text-gray-600 mb-3">{currentEpisode.description}</p>

      {/* Play Button */}
      <div className="flex justify-center mb-3">
        <button
          onClick={handlePlayPause}
          className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-3 transition-colors flex items-center justify-center"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            const audio = audioRef.current;
            if (audio) audio.currentTime = parseFloat(e.target.value);
          }}
          className="w-full h-1 bg-gray-300 rounded cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Episode Selector */}
      <div className="grid grid-cols-5 gap-1 mb-3">
        {episodes.map((ep) => (
          <button
            key={ep.id}
            onClick={() => handleEpisodeChange(ep.id)}
            className={`py-1 px-1 rounded text-xs font-semibold transition-colors ${
              currentEpisodeId === ep.id
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Ep {ep.id}
          </button>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="flex gap-1 mb-3 flex-wrap">
        <span className="text-xs font-semibold self-center">Share:</span>
        <button
          onClick={() => shareEpisode('twitter')}
          className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold transition-colors"
        >
          X
        </button>
        <button
          onClick={() => shareEpisode('facebook')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-semibold transition-colors"
        >
          FB
        </button>
        <button
          onClick={() => shareEpisode('whatsapp')}
          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold transition-colors"
        >
          WA
        </button>
      </div>

      {/* Transcript Toggle */}
      <button
        onClick={() => setShowTranscript(!showTranscript)}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs font-semibold transition-colors mb-2"
      >
        {showTranscript ? 'Hide' : 'Show'} Transcript
      </button>

      {/* Transcript */}
      {showTranscript && (
        <div className="bg-gray-100 rounded p-2 max-h-32 overflow-y-auto text-xs text-gray-700 border border-gray-300">
          {transcripts[currentEpisodeId]?.[language] || 'Transcript not available'}
        </div>
      )}

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        crossOrigin="anonymous"
        preload="metadata"
      />
    </div>
  );
}
