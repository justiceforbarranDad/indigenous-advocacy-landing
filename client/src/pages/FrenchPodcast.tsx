import { useState, useRef } from 'react';
import { Menu, X, Volume2, Play, Pause, Download, Share2 } from 'lucide-react';

interface PodcastEpisode {
  id: number;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  duration: string;
  date: string;
  audioUrl?: string;
  transcriptFr?: string;
  transcriptEn?: string;
}

const episodes: PodcastEpisode[] = [
  {
    id: 1,
    titleFr: "Justice pour Barran - Épisode 1",
    titleEn: "Justice for Barran - Episode 1",
    descriptionFr: "Le début de notre histoire: un adolescent autochtone poignardé trois fois et l'échec systémique du système de protection de l'enfance au Québec.",
    descriptionEn: "The beginning of our story: an Indigenous teenager stabbed three times and the systemic failure of Quebec's child protection system.",
    duration: "12:34",
    date: "2024-03-01",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep1-justice-pour-barran-v2_4328a36d.wav",
    transcriptFr: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/transcript-ep1-justice-pour-barran-fr_850e1e2e.md",
    transcriptEn: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/transcript-ep1-justice-for-barran-en_cdbf24df.md",
  },
  {
    id: 2,
    titleFr: "Dimanche Sanglant - Épisode 2",
    titleEn: "Sunday Bloody Sunday - Episode 2",
    descriptionFr: "Les parallèles historiques entre la violence systémique contre les peuples autochtones et les promesses non tenues de réconciliation.",
    descriptionEn: "Historical parallels between systemic violence against Indigenous peoples and unfulfilled reconciliation promises.",
    duration: "15:22",
    date: "2024-03-08",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep2-dimanche-sanglant-v2_cfabc04f.wav",
    transcriptFr: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/transcript-ep2-dimanche-sanglant-fr_2aead226.md",
  },
  {
    id: 3,
    titleFr: "Le Silence des Politiciens - Épisode 3",
    titleEn: "The Silence of Politicians - Episode 3",
    descriptionFr: "Comment les élus fédéraux, provinciaux et municipaux ont ignoré nos appels à l'aide et à la justice.",
    descriptionEn: "How federal, provincial, and municipal elected officials ignored our calls for help and justice.",
    duration: "14:15",
    date: "2024-03-15",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep3-silence-politiciens-v2_88210269.wav",
    transcriptFr: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/transcript-ep3-silence-politiciens-fr_fa2ce2ad.md",
  },
  {
    id: 4,
    titleFr: "Principes de Jordan - Épisode 4",
    titleEn: "Jordan's Principle - Episode 4",
    descriptionFr: "Comprendre le Principe de Jordan et pourquoi il n'a pas protégé nos enfants autochtones.",
    descriptionEn: "Understanding Jordan's Principle and why it failed to protect our Indigenous children.",
    duration: "11:45",
    date: "2024-03-22",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep4-principes-jordan-v2_e2553f9e.wav",
    transcriptFr: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/transcript-ep4-principes-jordan-fr_e345e6ca.md",
  },
  {
    id: 5,
    titleFr: "Voix des Survivants - Épisode 5",
    titleEn: "Voices of Survivors - Episode 5",
    descriptionFr: "Témoignages d'autres familles autochtones confrontées à l'échec du système de protection de l'enfance.",
    descriptionEn: "Testimonies from other Indigenous families facing child protection system failures.",
    duration: "18:30",
    date: "2024-03-29",
    audioUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/podcast-ep5-voix-survivants-v2_32e874a2.wav",
    transcriptFr: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/transcript-ep5-voix-survivants-fr_050cdf4c.md",
  },
];

export default function FrenchPodcast() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState<'EN' | 'FR'>('FR');
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  const togglePlay = (episodeId: number, audioUrl?: string) => {
    if (!audioUrl) return;

    if (playingId === episodeId) {
      if (audioRefs.current[episodeId]) {
        audioRefs.current[episodeId].pause();
      }
      setPlayingId(null);
    } else {
      if (playingId !== null && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      if (audioRefs.current[episodeId]) {
        audioRefs.current[episodeId].play();
      }
      setPlayingId(episodeId);
    }
  };

  const downloadEpisode = (episode: PodcastEpisode) => {
    if (!episode.audioUrl) return;
    const link = document.createElement('a');
    link.href = episode.audioUrl;
    link.download = `${language === 'FR' ? episode.titleFr : episode.titleEn}.wav`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareEpisode = (episode: PodcastEpisode) => {
    const title = language === 'FR' ? episode.titleFr : episode.titleEn;
    const description = language === 'FR' ? episode.descriptionFr : episode.descriptionEn;
    const text = `${language === 'FR' ? 'Écoutez' : 'Listen to'} "${title}" - Justice for Barran Podcast\n${description}`;
    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert(language === 'FR' ? 'Lien copié!' : 'Link copied!');
    }
  };

  const navigationItems = [
    { labelFr: 'Accueil', labelEn: 'Home', href: '/' },
    { labelFr: 'À Propos', labelEn: 'About', href: '/about' },
    { labelFr: 'Podcast', labelEn: 'Podcast', href: '/french-podcast' },
    { labelFr: 'Contact', labelEn: 'Contact', href: '#contact' },
    { labelFr: 'Soutenir', labelEn: 'Support', href: '/support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-amber-50 to-cream text-foreground flex">
      {/* Right-Hand Navigation Sidebar */}
      <div className={`fixed right-0 top-0 h-screen bg-forest-green text-white shadow-2xl transition-all duration-300 z-50 ${
        sidebarOpen ? 'w-64' : 'w-0'
      } overflow-hidden`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">{language === 'FR' ? 'Navigation' : 'Menu'}</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-forest-green/80 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-lg hover:bg-forest-green/80 transition-colors font-semibold"
              >
                {language === 'FR' ? item.labelFr : item.labelEn}
              </a>
            ))}
          </nav>
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm text-white/80 mb-4">{language === 'FR' ? 'Suivez-nous' : 'Follow Us'}</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/justiceforbarran" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">📱</a>
              <a href="https://x.com/helpbarran" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">𝕏</a>
              <a href="https://www.tiktok.com/@barranneedsjustice" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">🎵</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'mr-64' : 'mr-0'}`}>
        {/* Toggle Button */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed right-6 top-6 z-40 p-3 bg-forest-green text-white rounded-lg hover:bg-forest-green/90 transition-colors shadow-lg"
          >
            <Menu size={24} />
          </button>
        )}

        {/* Hero Section with Language Toggle */}
        <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Volume2 size={32} className="text-white" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {language === 'FR' ? 'Podcast Français' : 'English Podcast'}
                </h1>
              </div>
              
              {/* Language Toggle Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('FR')}
                  className={`px-4 py-2 font-bold border-2 rounded-lg transition-colors ${
                    language === 'FR'
                      ? 'bg-white text-forest-green border-white'
                      : 'bg-transparent text-white border-white hover:bg-white/20'
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-4 py-2 font-bold border-2 rounded-lg transition-colors ${
                    language === 'EN'
                      ? 'bg-white text-forest-green border-white'
                      : 'bg-transparent text-white border-white hover:bg-white/20'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>

            <p className="text-xl text-white/90 mb-2">
              {language === 'FR' ? 'Justice pour Barran - Dimanche Sanglant, Partie Deux' : 'Justice for Barran - Sunday Bloody Sunday, Part Two'}
            </p>
            <p className="text-lg text-white/80">
              {language === 'FR' 
                ? 'Témoignages, enquête systémique et appels à la justice pour les enfants autochtones'
                : 'Testimonies, systemic investigation, and calls for justice for Indigenous children'
              }
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Description */}
          <div className="bg-card rounded-lg p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-forest-green mb-4">
              {language === 'FR' ? 'À Propos de ce Podcast' : 'About This Podcast'}
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {language === 'FR'
                ? 'Ce podcast en français explore l\'histoire de Barran, un adolescent autochtone poignardé trois fois en 2021, et l\'échec systémique du système de protection de l\'enfance au Québec et au Canada.'
                : 'This podcast explores the story of Barran, an Indigenous teenager stabbed three times in 2021, and the systemic failure of child protection systems in Quebec and Canada.'
              }
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              {language === 'FR' ? 'À travers des épisodes détaillés, nous examinons:' : 'Through detailed episodes, we examine:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              {language === 'FR' ? (
                <>
                  <li>Le contexte historique de la violence contre les peuples autochtones</li>
                  <li>Les promesses non tenues de réconciliation après l'apologie de 2008</li>
                  <li>L'échec des systèmes de protection de l'enfance</li>
                  <li>Le silence politique à tous les niveaux (municipal, provincial, fédéral)</li>
                  <li>Le Principe de Jordan et son application insuffisante</li>
                  <li>Les témoignages d'autres familles autochtones</li>
                  <li>Les appels à la justice et à la réforme systémique</li>
                </>
              ) : (
                <>
                  <li>Historical context of violence against Indigenous peoples</li>
                  <li>Unfulfilled reconciliation promises after the 2008 apology</li>
                  <li>Failures of child protection systems</li>
                  <li>Political silence at all levels (municipal, provincial, federal)</li>
                  <li>Jordan's Principle and its insufficient application</li>
                  <li>Testimonies from other Indigenous families</li>
                  <li>Calls for justice and systemic reform</li>
                </>
              )}
            </ul>
          </div>

          {/* Episodes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-forest-green mb-8">
              {language === 'FR' ? 'Épisodes' : 'Episodes'}
            </h2>
            <div className="space-y-6">
              {episodes.map((episode) => (
                <div
                  key={episode.id}
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-orange"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-forest-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {language === 'FR' ? 'Épisode' : 'Episode'} {episode.id}
                        </span>
                        <span className="text-sm text-secondary-text">{episode.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-forest-green mb-2">
                        {language === 'FR' ? episode.titleFr : episode.titleEn}
                      </h3>
                      <p className="text-foreground mb-3">
                        {language === 'FR' ? episode.descriptionFr : episode.descriptionEn}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1 text-sm text-secondary-text">
                          <Volume2 size={16} />
                          {episode.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-amber-orange font-semibold">
                          {language === 'FR' ? '🇫🇷 Français' : '🇬🇧 English'}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 justify-start">
                      <button
                        onClick={() => togglePlay(episode.id, episode.audioUrl)}
                        className="flex items-center gap-2 px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-forest-green/90 transition-colors font-semibold"
                      >
                        {playingId === episode.id ? (
                          <>
                            <Pause size={18} />
                            {language === 'FR' ? 'Pause' : 'Pause'}
                          </>
                        ) : (
                          <>
                            <Play size={18} />
                            {language === 'FR' ? 'Écouter' : 'Listen'}
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => downloadEpisode(episode)}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-orange text-white rounded-lg hover:bg-amber-orange/90 transition-colors font-semibold"
                      >
                        <Download size={18} />
                        {language === 'FR' ? 'Télécharger' : 'Download'}
                      </button>
                      <button
                        onClick={() => shareEpisode(episode)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                      >
                        <Share2 size={18} />
                        {language === 'FR' ? 'Partager' : 'Share'}
                      </button>
                    </div>

                    {/* Audio Player */}
                    {episode.audioUrl && (
                      <audio
                        ref={(el) => {
                          if (el) audioRefs.current[episode.id] = el;
                        }}
                        src={episode.audioUrl}
                        className="w-full mt-4"
                        controls
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transcript Links */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-bold text-blue-900 mb-4">
              {language === 'FR' ? 'Transcriptions' : 'Transcripts'}
            </h3>
            <p className="text-blue-800 mb-4">
              {language === 'FR'
                ? 'Les transcriptions complètes de chaque épisode sont disponibles pour améliorer l\'accessibilité.'
                : 'Full transcripts for each episode are available to improve accessibility.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
