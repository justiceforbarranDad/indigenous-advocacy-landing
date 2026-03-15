import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Volume1, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  autoplay?: boolean;
  loop?: boolean;
}

// Royalty-free music sources:
// Pixabay: https://pixabay.com/music/
// Freepik: https://www.freepik.com/music
// Incompetech: https://incompetech.com/music/
// YouTube Audio Library: https://www.youtube.com/audiolibrary

// EMOTIONAL JOURNEY PLAYLIST: Quiet Intro → Building Crescendo
// Designed to match the 13-slide testimony arc
const ROYALTY_FREE_MUSIC = [
  {
    id: 1,
    title: 'Solemn Memorial (Intro)',
    artist: 'Ambient Meditation',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Replace with actual royalty-free solemn track
    duration: '4:30',
    description: 'Quiet, contemplative intro - soft ambient sounds',
  },
  {
    id: 2,
    title: 'Emotional Journey (Building)',
    artist: 'Indigenous Healing',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Replace with actual royalty-free slow track
    duration: '5:15',
    description: 'Slow building - soft drums, minimal instrumentation',
  },
  {
    id: 3,
    title: 'Call for Justice (Crescendo)',
    artist: 'Solemn Testimony',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Replace with actual royalty-free powerful track
    duration: '4:45',
    description: 'Powerful crescendo - emotional peak',
  },
];

export function MusicPlayer({ autoplay = false, loop = true }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.35); // Default 35% volume (soft)
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume to 35% (soft)
    audio.volume = volume;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (loop) {
        setCurrentTrack((prev) => (prev + 1) % ROYALTY_FREE_MUSIC.length);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [loop]);

  const track = ROYALTY_FREE_MUSIC[currentTrack];

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
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

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-forest-green text-white p-4 shadow-lg z-50">
      <audio
        ref={audioRef}
        src={track.url}
      />

      <div className="max-w-6xl mx-auto">
        {/* Track Info & Description */}
        <div className="mb-3">
          <p className="font-semibold text-sm">{track.title}</p>
          <p className="text-xs opacity-75">{track.artist}</p>
          <p className="text-xs opacity-60 italic mt-1">{track.description}</p>
        </div>

        {/* Progress Bar */}
        <div
          className="mb-3 h-1 bg-white/20 rounded-full cursor-pointer hover:bg-white/30 transition-colors"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-amber-orange rounded-full transition-all"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Left: Play/Pause & Mute */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-amber-orange hover:bg-amber-light transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Volume Control Button */}
            <div className="relative">
              <button
                onClick={() => setShowVolumeControl(!showVolumeControl)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title="Volume control"
              >
                {getVolumeIcon()}
              </button>

              {/* Volume Slider Popup */}
              {showVolumeControl && (
                <div className="absolute bottom-12 left-0 bg-forest-green/95 backdrop-blur p-3 rounded-lg shadow-lg z-50 w-12">
                  <div className="flex flex-col items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-8 h-24 appearance-none bg-white/20 rounded-full cursor-pointer accent-amber-orange"
                      style={{
                        transform: 'rotate(180deg)',
                      } as React.CSSProperties}
                      title="Adjust volume"
                    />
                    <span className="text-xs font-semibold">
                      {Math.round(volume * 100)}%
                    </span>
                  </div>
                </div>
              )}

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Time Display */}
            <div className="text-xs whitespace-nowrap">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Center: Track Navigation */}
          <div className="flex items-center gap-2 text-xs">
            <span>
              Track {currentTrack + 1} of {ROYALTY_FREE_MUSIC.length}
            </span>
            <button
              onClick={() => setCurrentTrack((prev) => (prev + 1) % ROYALTY_FREE_MUSIC.length)}
              className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              Next
            </button>
          </div>

          {/* Right: Info */}
          <div className="text-xs opacity-60">
            🎵 Solemn, slow music - Default volume 35%
          </div>
        </div>

        {/* Playlist Info */}
        <p className="text-xs opacity-50 mt-2">
          Emotional Journey Playlist: Quiet Intro → Building Crescendo | Royalty-free music from Pixabay, Freepik, Incompetech
        </p>
      </div>
    </div>
  );
}
