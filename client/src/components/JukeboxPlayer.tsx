import { useState, useRef, useEffect } from 'react';
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
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politicians-en_f098563e.wav",
      transcript: "THE SILENCE OF POLITICIANS: An Investigation into Government Accountability\n\nFor 1,873 days, a family has been seeking help from elected officials. Federal, provincial, and municipal representatives. All silent. All ghosting.\n\nThis is the story of systemic failure. This is the investigation into why politicians who swore to serve their constituents are instead ignoring desperate pleas for justice.",
      duration: "8:45"
    },
    {
      id: 2,
      title: "System Failure - DPJ Accountability",
      description: "The Direction de la Protection de la Jeunesse (DPJ) withdrew support in January 2023, leaving an Indigenous family without adequate follow-up.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-system-failure-dpj-en_a4cd9326.wav",
      transcript: "SYSTEM FAILURE: An Investigation into DPJ Accountability and Child Protection Collapse\n\nThe Direction de la Protection de la Jeunesse. DPJ. In Quebec, this is the institution responsible for protecting children from abuse and neglect. But what happens when the system designed to protect children becomes the system that abandons them?",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Days of Injustice",
      description: "A timeline of systemic failures spanning over 5 years, from 2021 to 2026, documenting the ongoing harm to Indigenous children.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-days-en_a9cb1b8f.wav",
      transcript: "1873 DAYS OF INJUSTICE: A Timeline Investigation\n\n1,873 days. That's five years and two months. That's how long a family has been waiting for justice. That's how long they've been seeking help from institutions that were supposed to protect them.",
      duration: "7:58"
    },
    {
      id: 4,
      title: "Indigenous Rights Under Attack",
      description: "How systemic failures violate fundamental Indigenous rights and international conventions protecting children.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-indigenous-rights-en_c6cf99e6.wav",
      transcript: "INDIGENOUS RIGHTS UNDER ATTACK: A Legal Investigation\n\nThe United Nations Declaration on the Rights of Indigenous Peoples. The Canadian Charter of Rights and Freedoms. Bill C-92. These are not just legal documents. They are promises.",
      duration: "8:34"
    },
    {
      id: 5,
      title: "Justice Delayed is Justice Denied",
      description: "The final call for accountability, independent inquiry, and real systemic change to protect other Indigenous families.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-delayed-en_c3757edf.wav",
      transcript: "JUSTICE DELAYED IS JUSTICE DENIED: The Impact of Systemic Failure\n\nJustice delayed is justice denied. This is not just a legal principle. This is the lived reality of families waiting for accountability.",
      duration: "8:21"
    },
    {
      id: 6,
      title: "Ghosted Organizations",
      description: "How major organizations and institutions have remained silent, ignoring calls for accountability and support for Indigenous families in crisis.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep6-ghosted-organizations-en_f21bfa20.wav",
      transcript: "GHOSTED ORGANIZATIONS: When Institutions Fail to Respond\n\nSilence from politicians. Silence from government agencies. But what about the organizations that claim to champion Indigenous rights? What about the NGOs, the advocacy groups, the institutions that have platforms and resources?",
      duration: "9:15"
    }
  ],
  fr: [
    {
      id: 1,
      title: "Le Silence des Politiciens",
      description: "Comment les élus à tous les niveaux ont ignoré une demande d'aide d'une famille autochtone en crise.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-silence-politiciens-fr_ae2cceb3.wav",
      transcript: "LE SILENCE DES POLITICIENS: Une Investigation sur la Responsabilité Gouvernementale\n\nPendant 1 873 jours, une famille cherche de l'aide auprès des élus. Des représentants fédéraux, provinciaux et municipaux. Tous silencieux. Tous qui les abandonnent.",
      duration: "8:45"
    },
    {
      id: 2,
      title: "L'Échec du Système: DPJ",
      description: "Une investigation sur l'échec institutionnel et l'effondrement de la protection de l'enfance au Québec.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-systeme-echec-dpj-fr_5b898699.wav",
      transcript: "L'ÉCHEC DU SYSTÈME: Une Investigation sur la Responsabilité de la DPJ\n\nLa Direction de la Protection de la Jeunesse. La DPJ. Au Québec, c'est l'institution responsable de protéger les enfants contre les abus et la négligence.",
      duration: "9:12"
    },
    {
      id: 3,
      title: "1873 Jours d'Injustice",
      description: "Une investigation chronologique de cinq ans d'attente pour la responsabilité.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-1873-jours-injustice-fr_1d5fcf9b.wav",
      transcript: "1873 JOURS D'INJUSTICE: Une Investigation Chronologique\n\n1 873 jours. C'est cinq ans et deux mois. C'est combien de temps une famille attend la justice.",
      duration: "7:58"
    },
    {
      id: 4,
      title: "Les Droits Autochtones Sous Attaque",
      description: "Une investigation juridique sur les violations systémiques et l'échec institutionnel.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-droits-autochtones-fr_413794de.wav",
      transcript: "LES DROITS AUTOCHTONES SOUS ATTAQUE: Une Investigation Juridique\n\nLa Déclaration des Nations Unies sur les droits des peuples autochtones. La Charte canadienne des droits et libertés. Le projet de loi C-92.",
      duration: "8:34"
    },
    {
      id: 5,
      title: "La Justice Retardée est la Justice Niée",
      description: "L'impact de l'échec systémique et la puissance de la résistance collective.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-justice-retardee-fr_b97c8c25.wav",
      transcript: "LA JUSTICE RETARDÉE EST LA JUSTICE NIÉE: L'Impact de l'Échec Systémique\n\nLa justice retardée est la justice niée. Ce n'est pas qu'un principe juridique. C'est la réalité vécue des familles qui attendent la responsabilité.",
      duration: "8:21"
    },
    {
      id: 6,
      title: "Organisations Abandonnées",
      description: "Comment les organisations majeures et les institutions ont gardé le silence, ignorant les appels à la responsabilité et au soutien des familles autochtones en crise.",
      audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep6-organisations-abandonnees-fr_2104f348.wav",
      transcript: "ORGANISATIONS ABANDONNÉES: Quand les Institutions Refusent de Répondre\n\nSilence des politiciens. Silence des agences gouvernementales. Mais qu'en est-il des organisations qui prétendent défendre les droits autochtones?",
      duration: "9:15"
    }
  ]
};

export function JukeboxPlayer() {
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
      
      {/* Native Design Podcast Player - Inline Display */}
      <div className="w-full bg-gradient-to-b from-amber-50 to-cream rounded-xl border-4 border-amber-orange p-8 shadow-lg">
        
        {/* Language Toggle */}
        <div className="flex gap-3 mb-6 justify-center flex-wrap">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`py-2 px-6 rounded-lg font-bold text-sm transition-all ${
              language === 'en'
                ? 'bg-forest-green text-cream shadow-lg'
                : 'bg-cream text-forest-green border-2 border-forest-green hover:bg-forest-green/10'
            }`}
          >
            Canadian English
          </button>
          <button
            onClick={() => handleLanguageChange('fr')}
            className={`py-2 px-6 rounded-lg font-bold text-sm transition-all ${
              language === 'fr'
                ? 'bg-forest-green text-cream shadow-lg'
                : 'bg-cream text-forest-green border-2 border-forest-green hover:bg-forest-green/10'
            }`}
          >
            Canadian French
          </button>
          <button
            onClick={() => handleLanguageChange('ht')}
            className={`py-2 px-6 rounded-lg font-bold text-sm transition-all ${
              language === 'ht'
                ? 'bg-forest-green text-cream shadow-lg'
                : 'bg-cream text-forest-green border-2 border-forest-green hover:bg-forest-green/10'
            }`}
          >
            Haitian Creole
          </button>
        </div>

        {/* Current Episode Info */}
        <div className="bg-white rounded-lg p-6 mb-6 border-2 border-amber-orange">
          <p className="text-sm font-semibold text-amber-orange uppercase tracking-wider mb-2">
            {language === 'en' ? 'Now Playing' : 'En cours de lecture'}
          </p>
          <h3 className="text-2xl font-bold text-forest-green mb-2">{currentEpisode.title}</h3>
          <p className="text-charcoal-light mb-4">{currentEpisode.description}</p>
          
          {/* Progress Bar */}
          <div className="mb-3">
            <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
              <div
                className="bg-amber-orange h-2 rounded-full transition-all"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-charcoal-light font-semibold">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <button
          onClick={handlePlayPause}
          className="w-full bg-amber-orange hover:bg-amber-light text-forest-green font-bold py-4 px-6 rounded-lg mb-6 flex items-center justify-center gap-3 transition-all shadow-lg text-lg"
        >
          {isPlaying ? (
            <>
              <Pause size={24} /> {language === 'en' ? 'Pause' : 'Pause'}
            </>
          ) : (
            <>
              <Play size={24} /> {language === 'en' ? 'Play' : 'Lecture'}
            </>
          )}
        </button>

        {/* Episode Grid */}
        <div className="mb-6">
          <p className="text-sm font-bold text-forest-green mb-3 uppercase tracking-wider">
            {language === 'en' ? 'All Episodes' : 'Tous les Épisodes'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {episodes[language].map((ep) => (
              <button
                key={ep.id}
                onClick={() => handleEpisodeChange(ep.id)}
                className={`p-3 rounded-lg font-semibold text-sm transition-all ${
                  currentEpisodeId === ep.id
                    ? 'bg-forest-green text-cream shadow-lg'
                    : 'bg-white text-forest-green border-2 border-forest-green hover:bg-forest-green/10'
                }`}
              >
                <div className="font-bold">Ep. {ep.id}</div>
                <div className="text-xs mt-1 line-clamp-2">{ep.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Transcript Toggle */}
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full bg-cream border-2 border-forest-green text-forest-green font-bold py-3 px-4 rounded-lg mb-3 transition-all hover:bg-forest-green/10"
        >
          {showTranscript ? '📖 Hide Transcript' : '📖 Show Transcript'}
        </button>

        {/* Transcript Display */}
        {showTranscript && (
          <div className="bg-white rounded-lg p-4 mb-6 border-2 border-amber-orange max-h-48 overflow-y-auto">
            <p className="text-sm text-charcoal-light leading-relaxed whitespace-pre-wrap font-serif">
              {currentEpisode.transcript}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
