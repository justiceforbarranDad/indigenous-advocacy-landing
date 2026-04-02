'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronDown, ChevronUp, Volume2, X, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  transcript: string;
}

const episodesEN: Episode[] = [
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

const episodesFR: Episode[] = [
  {
    id: 1,
    title: 'Le Silence des Politiciens',
    description: 'Une investigation sur la responsabilité gouvernementale et l\'échec des élus à servir leurs électeurs.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politiciens-fr_ae2cceb3.wav',
    duration: '8:45',
    transcript: `LE SILENCE DES POLITICIENS: Une Investigation sur la Responsabilité Gouvernementale

Pendant 1 873 jours, une famille cherche de l'aide auprès des élus. Des représentants fédéraux, provinciaux et municipaux. Tous silencieux. Tous qui les abandonnent.

Ceci est l'histoire de l'échec systémique. Ceci est l'investigation sur les raisons pour lesquelles les politiciens qui ont juré de servir leurs électeurs ignorent plutôt les appels désespérés à la justice.

En 2021, une famille a contacté sa députée à l'Assemblée nationale, Céline Haytayan, représentant Laval-des-Rapides au Québec. Ils avaient un problème grave. Un enfant de leur famille avait été poignardé plusieurs fois. Le Département de la Protection de la Jeunesse était impliqué mais avait retiré son soutien sans suivi adéquat.`
  },
  {
    id: 2,
    title: 'L\'Échec du Système: DPJ',
    description: 'Une investigation sur l\'échec institutionnel et l\'effondrement de la protection de l\'enfance au Québec.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-systeme-echec-dpj-fr_5b898699.wav',
    duration: '9:12',
    transcript: `L'ÉCHEC DU SYSTÈME: Une Investigation sur la Responsabilité de la DPJ

La Direction de la Protection de la Jeunesse. La DPJ. Au Québec, c'est l'institution responsable de protéger les enfants contre les abus et la négligence. Mais que se passe-t-il quand le système conçu pour protéger les enfants devient le système qui les abandonne?

Ceci est l'investigation sur l'échec institutionnel. Ceci est l'histoire d'un enfant qui avait besoin d'aide et qui a reçu l'abandon à la place.`
  },
  {
    id: 3,
    title: '1873 Jours d\'Injustice',
    description: 'Une investigation chronologique de cinq ans d\'attente pour la responsabilité.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-jours-injustice-fr_1d5fcf9b.wav',
    duration: '7:58',
    transcript: `1873 JOURS D'INJUSTICE: Une Investigation Chronologique

1 873 jours. C'est cinq ans et deux mois. C'est combien de temps une famille attend la justice. C'est combien de temps ils cherchent de l'aide auprès des institutions qui étaient censées les protéger.

Chaque jour qui passe est un jour sans résolution. Chaque jour est un jour d'injustice continue. Chaque jour est un jour où le système échoue.`
  },
  {
    id: 4,
    title: 'Les Droits Autochtones Sous Attaque',
    description: 'Une investigation juridique sur les violations systémiques et l\'échec institutionnel.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-droits-autochtones-fr_413794de.wav',
    duration: '8:34',
    transcript: `LES DROITS AUTOCHTONES SOUS ATTAQUE: Une Investigation Juridique

La Déclaration des Nations Unies sur les droits des peuples autochtones. La Charte canadienne des droits et libertés. Le projet de loi C-92. Ce ne sont pas que des documents juridiques. Ce sont des promesses.`
  },
  {
    id: 5,
    title: 'La Justice Retardée est la Justice Niée',
    description: 'L\'impact de l\'échec systémique et la puissance de la résistance collective.',
    audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-retardee-fr_b97c8c25.wav',
    duration: '8:21',
    transcript: `LA JUSTICE RETARDÉE EST LA JUSTICE NIÉE: L'Impact de l'Échec Systémique

La justice retardée est la justice niée. Ce n'est pas qu'un principe juridique. C'est la réalité vécue des familles qui attendent la responsabilité.`
  }
];

export default function StickyRadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const audioRef = useRef<HTMLAudioElement>(null);
  const { t, i18n } = useTranslation();

  const episodes = language === 'en' ? episodesEN : episodesFR;
  const currentEpisode = episodes.find(ep => ep.id === currentEpisodeId) || episodes[0];

  // Update language when i18n language changes
  useEffect(() => {
    const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';
    setLanguage(currentLang);
  }, [i18n.language]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
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
  }, [currentEpisodeId, episodes.length]);

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
    setIsPlaying(true);
  };

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setCurrentEpisodeId(1);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const shareEpisode = (platform: string) => {
    const episodeUrl = `${window.location.origin}?episode=${currentEpisode.id}&lang=${language}`;
    const text = `Check out this podcast episode: "${currentEpisode.title}" - ${currentEpisode.description}`;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(episodeUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(episodeUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + episodeUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(episodeUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(currentEpisode.title)}&body=${encodeURIComponent(text + '\n\n' + episodeUrl)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank');
    }
  };

  if (!currentEpisode) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-auto'}`}>
      <div className="bg-red-600 text-white shadow-lg">
        {/* Language Selector */}
        <div className="flex justify-between items-center px-4 py-2 bg-black/20">
          <div className="flex gap-2">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                language === 'en' 
                  ? 'bg-white text-red-600' 
                  : 'bg-red-700 text-white hover:bg-red-800'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                language === 'fr' 
                  ? 'bg-white text-red-600' 
                  : 'bg-red-700 text-white hover:bg-red-800'
              }`}
            >
              🇫🇷 Français
            </button>
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-red-700 p-1 rounded transition-colors"
          >
            {isMinimized ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>

        {!isMinimized && (
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3 flex-1">
                <Volume2 size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">LIVE PODCAST</h3>
                  <h2 className="text-3xl font-serif font-bold mt-2">{currentEpisode.title}</h2>
                  <p className="text-sm mt-3 opacity-90">{currentEpisode.description}</p>
                </div>
              </div>
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded font-semibold text-sm transition-colors flex-shrink-0 ml-4"
              >
                {showTranscript ? 'Hide' : 'Show'} Transcript
              </button>
            </div>

            {/* Player Controls */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handlePlayPause}
                className="bg-white text-red-600 rounded-full p-4 hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={(e) => {
                    const audio = audioRef.current;
                    if (audio) audio.currentTime = parseFloat(e.target.value);
                  }}
                  className="w-full h-2 bg-red-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Episode Selector */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {episodes.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => handleEpisodeChange(ep.id)}
                  className={`py-2 px-3 rounded font-semibold text-sm transition-colors ${
                    currentEpisodeId === ep.id
                      ? 'bg-white text-red-600'
                      : 'bg-red-700 hover:bg-red-800 text-white'
                  }`}
                >
                  Ep {ep.id}
                </button>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="text-sm font-semibold self-center">Share Episode:</span>
              <button
                onClick={() => shareEpisode('twitter')}
                className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold transition-colors flex items-center gap-1"
              >
                <Share2 size={14} /> X/Twitter
              </button>
              <button
                onClick={() => shareEpisode('facebook')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-semibold transition-colors flex items-center gap-1"
              >
                <Share2 size={14} /> Facebook
              </button>
              <button
                onClick={() => shareEpisode('whatsapp')}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold transition-colors flex items-center gap-1"
              >
                <Share2 size={14} /> WhatsApp
              </button>
              <button
                onClick={() => shareEpisode('linkedin')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded text-sm font-semibold transition-colors flex items-center gap-1"
              >
                <Share2 size={14} /> LinkedIn
              </button>
              <button
                onClick={() => shareEpisode('email')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm font-semibold transition-colors flex items-center gap-1"
              >
                <Share2 size={14} /> Email
              </button>
            </div>

            {/* Transcript */}
            {showTranscript && (
              <div className="bg-red-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                <h4 className="font-bold mb-3 text-lg">Transcript</h4>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{currentEpisode.transcript}</p>
              </div>
            )}

            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={currentEpisode.audioUrl}
              crossOrigin="anonymous"
              controls={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
