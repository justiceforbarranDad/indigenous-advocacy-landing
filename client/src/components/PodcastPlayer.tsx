import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface PodcastPlayerProps {
  title: string;
  description?: string;
  audioUrl: string;
  duration?: number;
  language?: string;
  episodeNumber?: number;
  date?: string;
  compact?: boolean;
}

export function PodcastPlayer({
  title,
  description,
  audioUrl,
  duration,
  language = 'EN',
  episodeNumber,
  date,
  compact = false
}: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(duration || 0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

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

  if (compact) {
    return (
      <div className="bg-white border-2 border-black p-3 rounded-lg">
        <audio ref={audioRef} src={audioUrl} />
        
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
      <audio ref={audioRef} src={audioUrl} />

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
            {language}
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
    </div>
  );
}
