import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MediaPlayerProps {
  src: string;
  title: string;
  description?: string;
  duration?: string;
}

export default function NativeMediaPlayer({ src, title, description, duration }: MediaPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0) {
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

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="native-media-player">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="player-container">
        <div className="player-header">
          <h3 className="player-title">{title}</h3>
          {description && <p className="player-description">{description}</p>}
        </div>

        <div className="player-controls">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="control-button play-button"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* Progress Bar */}
          <div className="progress-container">
            <input
              type="range"
              min="0"
              max={totalDuration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="progress-bar"
            />
            <div className="time-display">
              <span className="current-time">{formatTime(currentTime)}</span>
              <span className="total-time">{formatTime(totalDuration)}</span>
            </div>
          </div>

          {/* Volume Controls */}
          <div className="volume-container">
            <button
              onClick={toggleMute}
              className="control-button volume-button"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              title="Volume"
            />
          </div>
        </div>
      </div>

      <style>{`
        .native-media-player {
          width: 100%;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .player-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .player-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .player-title {
          font-size: 18px;
          font-weight: bold;
          color: #1a1a1a;
          margin: 0;
        }

        .player-description {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .player-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .control-button {
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .control-button:hover {
          background: #b91c1c;
          transform: scale(1.05);
        }

        .play-button {
          width: 50px;
          height: 50px;
        }

        .progress-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #ddd;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          transition: all 0.2s;
        }

        .progress-bar::-webkit-slider-thumb:hover {
          background: #b91c1c;
          transform: scale(1.2);
        }

        .progress-bar::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .progress-bar::-moz-range-thumb:hover {
          background: #b91c1c;
          transform: scale(1.2);
        }

        .time-display {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }

        .current-time,
        .total-time {
          font-family: 'Courier New', monospace;
        }

        .volume-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .volume-button {
          width: 40px;
          height: 40px;
        }

        .volume-slider {
          width: 80px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
        }

        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: none;
        }

        @media (max-width: 768px) {
          .native-media-player {
            padding: 16px;
          }

          .player-controls {
            flex-wrap: wrap;
          }

          .progress-container {
            width: 100%;
            order: 3;
          }

          .volume-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
