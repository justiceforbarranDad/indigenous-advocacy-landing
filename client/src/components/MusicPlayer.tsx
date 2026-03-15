import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  autoplay?: boolean;
  loop?: boolean;
}

// Royalty-free music sources:
// Pixabay: https://pixabay.com/music/
// Freepik: https://www.freepik.com/music
// Incompetech: https://incompetech.com/music/
// YouTube Audio Library: https://www.youtube.com/audiolibrary

const ROYALTY_FREE_MUSIC = [
  {
    id: 1,
    title: 'Solemn Memorial',
    artist: 'Royalty Free',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder - replace with actual royalty-free track
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Emotional Journey',
    artist: 'Royalty Free',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Placeholder - replace with actual royalty-free track
    duration: '4:12',
  },
  {
    id: 3,
    title: 'Call for Justice',
    artist: 'Royalty Free',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Placeholder - replace with actual royalty-free track
    duration: '3:30',
  },
];

export function MusicPlayer({ autoplay = false, loop = true }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-forest-green text-white p-4 shadow-lg z-50">
      <audio
        ref={audioRef}
        src={track.url}
        onVolumeChange={(e) => {
          const audio = e.currentTarget;
          if (audio.volume === 0) setIsMuted(true);
          else if (isMuted) setIsMuted(false);
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Track Info */}
        <div className="mb-3">
          <p className="font-semibold text-sm">{track.title}</p>
          <p className="text-xs opacity-75">{track.artist}</p>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-amber-orange hover:bg-amber-light transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            <div className="text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Track Navigation */}
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
        </div>

        {/* Info */}
        <p className="text-xs opacity-60 mt-3">
          🎵 Royalty-free music for Indigenous justice advocacy. Sources: Pixabay, Freepik, Incompetech
        </p>
      </div>
    </div>
  );
}
