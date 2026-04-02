import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronDown, ChevronUp, Volume2, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  transcript: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: 'The Silence of Politicians',
    description: 'An investigation into government accountability and the failure of elected officials to serve their constituents.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politicians-en_f098563e.wav',
    duration: '8:45',
    transcript: `THE SILENCE OF POLITICIANS: An Investigation into Government Accountability

For 1,873 days, a family has been seeking help from elected officials. Federal, provincial, and municipal representatives. All silent. All ghosting.

This is the story of systemic failure. This is the investigation into why politicians who swore to serve their constituents are instead ignoring desperate pleas for justice.

In 2021, a family reached out to their Member of National Assembly, Céline Haytayan, representing Laval-des-Rapides in Quebec. They had a serious problem. A child in their family had been stabbed multiple times. The Department of Youth Protection was involved but had withdrawn support without adequate follow-up.

They asked their elected representative for help. What they received instead was a cease-and-desist letter. A warning not to contact the office again. A threat of criminal harassment charges.

This is not an isolated incident. This is a pattern. A systematic failure of elected officials to fulfill their constitutional duty to serve their constituents.`
  },
  {
    id: 2,
    title: 'System Failure: DPJ Accountability',
    description: 'An investigation into institutional failure and child protection collapse in Quebec.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-system-failure-dpj-en_a4cd9326.wav',
    duration: '9:12',
    transcript: `SYSTEM FAILURE: An Investigation into DPJ Accountability and Child Protection Collapse

The Direction de la Protection de la Jeunesse. DPJ. In Quebec, this is the institution responsible for protecting children from abuse and neglect. But what happens when the system designed to protect children becomes the system that abandons them?

This is the investigation into institutional failure. This is the story of a child who needed help and received abandonment instead.

In 2021, after a serious traumatic incident involving a teenager who was stabbed three times, the family sought help from DPJ. The system became involved. There was hope that professional intervention would provide support, counseling, and protection.

But in January 2023, DPJ withdrew. No adequate follow-up. No transition plan. No continued support.`
  },
  {
    id: 3,
    title: '1873 Days of Injustice',
    description: 'A timeline investigation into five years of waiting for accountability.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-days-en_a9cb1b8f.wav',
    duration: '7:58',
    transcript: `1873 DAYS OF INJUSTICE: A Timeline Investigation

1,873 days. That's five years and two months. That's how long a family has been waiting for justice. That's how long they've been seeking help from institutions that were supposed to protect them.

Each day that passes is a day without resolution. Each day is a day of continued injustice. Each day is a day the system fails.

February 14, 2021. The date that changed everything. A teenager in an Indigenous family is stabbed three times. Serious trauma. Life-threatening injuries.`
  },
  {
    id: 4,
    title: 'Indigenous Rights Under Attack',
    description: 'A legal investigation into systemic violations and institutional failure.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-indigenous-rights-en_c6cf99e6.wav',
    duration: '8:34',
    transcript: `INDIGENOUS RIGHTS UNDER ATTACK: A Legal Investigation

The United Nations Declaration on the Rights of Indigenous Peoples. The Canadian Charter of Rights and Freedoms. Bill C-92. These are not just legal documents. They are promises. Promises to protect Indigenous peoples from systemic discrimination and abuse.

But what happens when governments fail to honor those promises? What happens when Indigenous rights become words on paper while Indigenous children suffer?

This is the legal investigation into systemic violations and institutional failure.`
  },
  {
    id: 5,
    title: 'Justice Delayed is Justice Denied',
    description: 'The human cost of systemic failure and the power of collective resistance.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-delayed-en_c3757edf.wav',
    duration: '8:21',
    transcript: `JUSTICE DELAYED IS JUSTICE DENIED: The Impact of Systemic Failure

Justice delayed is justice denied. This is not just a legal principle. This is the lived reality of families waiting for accountability. This is the reality of children suffering while systems fail.

When a child needs help and the system abandons them, every day of delay compounds the trauma. Every day of waiting deepens the wound. Every day of injustice becomes part of the child's story.`
  }
];

export default function StickyRadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { t } = useTranslation();

  const currentEpisode = episodes.find(ep => ep.id === currentEpisodeId);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      // Auto-play next episode
      if (currentEpisodeId < episodes.length) {
        setCurrentEpisodeId(currentEpisodeId + 1);
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
  }, [currentEpisodeId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Audio play error:', error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleEpisodeChange = (episodeId: number) => {
    setCurrentEpisodeId(episodeId);
    setCurrentTime(0);
    // Delay play to ensure audio source is loaded
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentEpisode) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={currentEpisode.audioUrl}
        crossOrigin="anonymous"
        controls={false}
        preload="metadata"
      />

      {/* Sticky Radio Player */}
      <div className="fixed top-20 left-0 right-0 z-40 px-4 py-4">
        <div className={`max-w-6xl mx-auto transition-all duration-300 ${
          isMinimized ? 'bg-red-600 rounded-lg shadow-lg' : 'bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-2xl'
        }`}>
          {!isMinimized ? (
            <div className="p-6 text-white">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold opacity-90">LIVE PODCAST</h3>
                    <h2 className="text-2xl font-bold">{currentEpisode.title}</h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition"
                  >
                    {showTranscript ? 'Hide' : 'Show'} Transcript
                  </button>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-2 hover:bg-white/20 rounded-lg transition"
                  >
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 mb-4">{currentEpisode.description}</p>

              {/* Player Controls */}
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={handlePlayPause}
                  className="flex-shrink-0 w-16 h-16 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-red-50 transition shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 fill-current ml-1" />
                  )}
                </button>

                {/* Progress Bar */}
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={(e) => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = parseFloat(e.target.value);
                      }
                    }}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-sm text-white/80 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>

              {/* Episode Selector */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {episodes.map((ep) => (
                  <button
                    key={ep.id}
                    onClick={() => handleEpisodeChange(ep.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                      currentEpisodeId === ep.id
                        ? 'bg-white text-red-600'
                        : 'bg-white/20 hover:bg-white/30 text-white'
                    }`}
                  >
                    Ep {ep.id}
                  </button>
                ))}
              </div>

              {/* Transcript */}
              {showTranscript && (
                <div className="mt-4 bg-white/10 rounded-lg p-4 max-h-64 overflow-y-auto">
                  <h4 className="font-bold mb-2">Transcript</h4>
                  <p className="text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
                    {currentEpisode.transcript}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => setIsMinimized(false)}>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                  className="flex-shrink-0 w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-red-50 transition"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{currentEpisode.title}</p>
                  <p className="text-white/80 text-xs">{formatTime(currentTime)} / {formatTime(duration)}</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(false);
                }}
                className="p-2 hover:bg-white/20 rounded-lg transition"
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
