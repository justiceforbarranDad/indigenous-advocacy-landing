import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Share2, Download, FileText } from 'lucide-react';

interface PodcastPlayerProps {
  title: string;
  description?: string;
  audioUrl: string;
  duration?: number;
  language?: string;
  episodeNumber?: number;
  date?: string;
  compact?: boolean;
  speechifyUrl?: string;
  frenchAudioUrl?: string;
  transcript?: string;
  onShare?: () => void;
}

interface Episode {
  id: string;
  title: string;
  language: 'en' | 'fr';
  part: number;
  duration: string;
  url: string;
  description: string;
}

const allEpisodes: Episode[] = [
  {
    id: 'part3-en',
    title: 'Sunday Bloody Sunday, Part Three: The Attack & System Failure',
    language: 'en',
    part: 3,
    duration: '45:32',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-part3-english-final_be3dab41.wav',
    description: 'The attack on Barran, system failure, education destroyed, and mental health crisis. Featuring Bill C-92 and Hatchet Lake Denesuline First Nation context.',
  },
  {
    id: 'part4-en',
    title: 'Sunday Bloody Sunday, Part Four: Political Silence',
    language: 'en',
    part: 4,
    duration: '42:15',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-part4-english-final_494efabb.wav',
    description: '150+ elected officials contacted. Zero meaningful action. Five years of abandonment.',
  },
  {
    id: 'part5-en',
    title: 'Sunday Bloody Sunday, Part Five: The Call to Action',
    language: 'en',
    part: 5,
    duration: '48:20',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-part5-english-final_7ce929ae.wav',
    description: 'Legal framework, what must change, and the call to action for justice.',
  },
  {
    id: 'part3-fr',
    title: 'Dimanche Sanglant, Troisième Partie: L\'Attaque et l\'Échec du Système',
    language: 'fr',
    part: 3,
    duration: '48:45',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-part3-french-final_f73444a3.wav',
    description: 'L\'attaque sur Barran, l\'échec du système, l\'éducation détruite, et la crise de santé mentale.',
  },
  {
    id: 'part4-fr',
    title: 'Dimanche Sanglant, Quatrième Partie: Le Silence Politique',
    language: 'fr',
    part: 4,
    duration: '44:30',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-part4-french-final_dec05c42.wav',
    description: 'Plus de 150 élus contactés. Zéro action significative. Cinq ans d\'abandon.',
  },
  {
    id: 'part5-fr',
    title: 'Dimanche Sanglant, Cinquième Partie: L\'Appel à l\'Action',
    language: 'fr',
    part: 5,
    duration: '51:15',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-part5-french-final_58c66ff7.wav',
    description: 'Cadre juridique, ce qui doit changer, et l\'appel à l\'action pour la justice.',
  },
];

export function PodcastPlayer({
  title,
  description,
  audioUrl,
  duration,
  language = 'EN',
  episodeNumber,
  date,
  compact = false,
  speechifyUrl,
  frenchAudioUrl,
  transcript,
  onShare
}: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(duration || 0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showSpeechify, setShowSpeechify] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'french'>(language === 'FR' ? 'french' : 'english');
  const [currentAudioUrl, setCurrentAudioUrl] = useState(audioUrl);

  const handleLanguageChange = (newLanguage: 'english' | 'french') => {
    setCurrentLanguage(newLanguage);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
    if (newLanguage === 'french' && frenchAudioUrl) {
      setCurrentAudioUrl(frenchAudioUrl);
    } else {
      setCurrentAudioUrl(audioUrl);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setTotalDuration(audio.duration);
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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = `${title}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (compact) {
    return (
      <div className="bg-white border-2 border-black p-3 rounded-lg">
        <audio ref={audioRef} src={currentAudioUrl} />
        
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-black"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={20} className="text-black" />
            ) : (
              <Play size={20} className="text-black" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-black truncate">{title}</p>
            <p className="text-xs text-gray-600">{formatTime(currentTime)} / {formatTime(totalDuration)}</p>
          </div>

          <input
            type="range"
            min="0"
            max={totalDuration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            aria-label="Progress"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-black p-6 rounded-lg shadow-lg">
      <audio ref={audioRef} src={currentAudioUrl} />

      {/* Language Toggle */}
      {frenchAudioUrl && (
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => handleLanguageChange('english')}
            className={`px-4 py-2 rounded font-semibold transition-all ${
              currentLanguage === 'english'
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => handleLanguageChange('french')}
            className={`px-4 py-2 rounded font-semibold transition-all ${
              currentLanguage === 'french'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            🇫🇷 Français
          </button>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-2xl font-bold text-black">{title}</h3>
            {episodeNumber && (
              <p className="text-sm text-gray-600">Episode {episodeNumber}</p>
            )}
          </div>
          <span className="bg-black text-white px-3 py-1 rounded text-xs font-bold">
            {currentLanguage === 'english' ? '🇬🇧 English' : '🇫🇷 Français'}
          </span>
        </div>
        {date && <p className="text-sm text-gray-600">{date}</p>}
        {description && (
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={totalDuration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          aria-label="Progress"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(totalDuration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="p-3 hover:bg-gray-100 rounded-lg transition-colors border-2 border-black"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={24} className="text-black" />
          ) : (
            <Play size={24} className="text-black" />
          )}
        </button>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-black"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX size={20} className="text-black" />
            ) : (
              <Volume2 size={20} className="text-black" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            aria-label="Volume"
          />
        </div>

        {/* Speed Control */}
        <div className="ml-auto">
          <select
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.playbackRate = parseFloat(e.target.value);
              }
            }}
            defaultValue="1"
            className="px-3 py-2 border-2 border-black rounded-lg text-sm font-bold bg-white hover:bg-gray-50 cursor-pointer"
          >
            <option value="0.75">0.75x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
      </div>

      {/* Additional Controls */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold text-sm border-2 border-black"
          title="Download episode"
        >
          <Download size={18} />
          Download
        </button>

        {/* Share Button */}
        {onShare && (
          <button
            onClick={onShare}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold text-sm border-2 border-black"
            title="Share episode"
          >
            <Share2 size={18} />
            Share
          </button>
        )}

        {/* Transcript Button */}
        {transcript && (
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold text-sm border-2 border-black"
            title="Show transcript and translation"
          >
            <FileText size={18} />
            {showTranscript ? 'Hide' : 'Show'} Transcript
          </button>
        )}

        {/* Speechify Button */}
        {speechifyUrl && (
          <a
            href={speechifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-bold text-sm border-2 border-black"
            title="Listen on Speechify"
          >
            🎙️ Speechify
          </a>
        )}
      </div>

      {/* Transcript Section */}
      {showTranscript && transcript && (
        <div className="mt-6 p-4 bg-gray-50 border-2 border-black rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-black">Transcript & Translation</h4>
          <div className="text-sm text-gray-800 whitespace-pre-wrap max-h-96 overflow-y-auto">
            {transcript}
          </div>
        </div>
      )}
    </div>
  );
}
