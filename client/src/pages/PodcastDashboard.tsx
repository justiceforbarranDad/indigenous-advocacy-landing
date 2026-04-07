import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Headphones, Globe, Heart, Play, Pause, Volume2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';

export default function PodcastDashboard() {
  const { i18n } = useTranslation();
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const episodes = [
    { 
      id: 1, 
      titleKr: 'Silans Politisyen yo', 
      titleFr: 'Le Silence des Politiciens', 
      titleEn: 'The Silence of Politicians', 
      duration: '18:45', 
      plays: 1247,
      audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep1-full-kreyol_3f8c9a2e.wav'
    },
    { 
      id: 2, 
      titleKr: 'Echèk Sistèm yo', 
      titleFr: 'Échec du Système', 
      titleEn: 'System Failure', 
      duration: '16:32', 
      plays: 892,
      audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep2-full-kreyol_4a2b1c5f.wav'
    },
    { 
      id: 3, 
      titleKr: 'Jistis pou Barran', 
      titleFr: 'Justice pour Barran', 
      titleEn: 'Justice for Barran', 
      duration: '15:18', 
      plays: 1564,
      audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep3-full-kreyol_5d7e2f9a.wav'
    },
    { 
      id: 4, 
      titleKr: 'Vwa Timoun yo', 
      titleFr: 'La Voix des Enfants', 
      titleEn: 'Voice of Children', 
      duration: '17:22', 
      plays: 756,
      audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep4-full-kreyol_6e8f3a1b.wav'
    },
    { 
      id: 5, 
      titleKr: 'Rekonsiliasyon Fòs', 
      titleFr: 'Réconciliation Forcée', 
      titleEn: 'Forced Reconciliation', 
      duration: '19:05', 
      plays: 1089,
      audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep5-full-kreyol_7f9g4b2c.wav'
    },
    { 
      id: 6, 
      titleKr: 'Avni Espwa', 
      titleFr: 'L\'Avenir de l\'Espoir', 
      titleEn: 'Future of Hope', 
      duration: '16:48', 
      plays: 634,
      audioUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/ep6-full-kreyol_8g0h5c3d.wav'
    },
  ];

  const currentEpisode = episodes.find(ep => ep.id === selectedEpisode);

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

  const handleEpisodeSelect = (episodeId: number) => {
    setSelectedEpisode(episodeId);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stats = [
    { label: i18n.language === 'fr' ? 'Auditeurs totaux' : i18n.language === 'ht' ? 'Total Oyitè' : 'Total Listeners', value: '6,182', icon: Users, color: 'text-blue-600' },
    { label: i18n.language === 'fr' ? 'Lectures d\'épisodes' : i18n.language === 'ht' ? 'Epizòd Jwe' : 'Episode Plays', value: '6,182', icon: Headphones, color: 'text-purple-600' },
    { label: i18n.language === 'fr' ? 'Pays atteints' : i18n.language === 'ht' ? 'Peyi Rive' : 'Countries Reached', value: '47', icon: Globe, color: 'text-green-600' },
    { label: i18n.language === 'fr' ? 'Dons reçus' : i18n.language === 'ht' ? 'Don Resevwa' : 'Donations Received', value: 'CA$2,847', icon: Heart, color: 'text-red-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal">
      {/* Hero */}
      <div className="py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-orange mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {i18n.language === 'fr' ? 'Tableau de bord du podcast' : i18n.language === 'ht' ? 'Podcast Dashboard' : 'Podcast Dashboard'}
        </h1>
        <p className="text-lg text-cream opacity-90">
          {i18n.language === 'fr' 
            ? 'Écoutez les histoires, partagez la justice'
            : i18n.language === 'ht'
            ? 'Koute istwa yo, pataje jistis'
            : 'Listen to stories, share justice'
          }
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Vintage TV Set */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-2xl">
            {/* TV Bezel - Wood grain effect */}
            <div className="bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 p-8 rounded-3xl shadow-2xl border-8 border-amber-950" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px)',
            }}>
              {/* TV Screen */}
              <div className="bg-black rounded-2xl p-6 shadow-inner border-4 border-gray-800">
                {/* Screen content */}
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 aspect-video flex flex-col justify-between">
                  {/* Episode Title on Screen */}
                  <div className="text-center mb-4">
                    <p className="text-amber-orange text-sm font-bold tracking-widest">EPISODE {currentEpisode?.id}</p>
                    <h2 className="text-cream text-2xl font-bold mt-2">
                      {i18n.language === 'fr' 
                        ? currentEpisode?.titleFr 
                        : i18n.language === 'ht' 
                        ? currentEpisode?.titleKr 
                        : currentEpisode?.titleEn
                      }
                    </h2>
                  </div>

                  {/* Audio Player on Screen */}
                  <div className="flex flex-col items-center justify-center flex-1 gap-6">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handlePlayPause}
                        className="bg-amber-orange hover:bg-amber-light text-black rounded-full p-4 transition transform hover:scale-110"
                      >
                        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                      </button>
                      <Volume2 className="text-amber-orange" size={28} />
                    </div>
                    <p className="text-cream text-sm">{currentEpisode?.duration}</p>
                  </div>

                  {/* Plays counter */}
                  <div className="text-center">
                    <p className="text-amber-orange text-xs">{currentEpisode?.plays.toLocaleString()} PLAYS</p>
                  </div>
                </div>
              </div>

              {/* TV Control Panel */}
              <div className="mt-6 flex items-center justify-between px-4">
                {/* Left speaker */}
                <div className="w-12 h-16 bg-gray-700 rounded-lg border-2 border-gray-600" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent)',
                }}></div>
                
                {/* Center controls */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-600 font-bold">CLASSIC</p>
                </div>

                {/* Right speaker */}
                <div className="w-12 h-16 bg-gray-700 rounded-lg border-2 border-gray-600" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent)',
                }}></div>
              </div>
            </div>

            {/* Hidden audio element */}
            <audio ref={audioRef} src={currentEpisode?.audioUrl} onEnded={() => setIsPlaying(false)} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6 bg-gradient-to-br from-amber-900/30 to-amber-950/30 border-2 border-amber-orange/50 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <p className="text-sm text-cream/80 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-amber-orange">{stat.value}</p>
              </Card>
            );
          })}
        </div>

        {/* Episodes Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-orange mb-8 text-center">
            {i18n.language === 'fr' ? 'Tous les épisodes' : i18n.language === 'ht' ? 'Tout Epizòd' : 'All Episodes'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep) => (
              <button
                key={ep.id}
                onClick={() => handleEpisodeSelect(ep.id)}
                className={`p-6 rounded-lg border-2 transition transform hover:scale-105 text-left ${
                  selectedEpisode === ep.id 
                    ? 'bg-amber-orange/20 border-amber-orange shadow-lg' 
                    : 'bg-amber-900/10 border-amber-orange/30 hover:border-amber-orange'
                }`}
              >
                <div className="mb-4">
                  <p className="text-sm text-amber-orange font-bold">EPISODE {ep.id}</p>
                  <h3 className="font-bold text-cream mt-2">
                    {i18n.language === 'fr' ? ep.titleFr : i18n.language === 'ht' ? ep.titleKr : ep.titleEn}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-xs text-cream/70">
                  <span>{ep.duration}</span>
                  <span>{ep.plays.toLocaleString()} plays</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-orange mb-8 text-center">
            {i18n.language === 'fr' ? 'Histoires des auditeurs' : i18n.language === 'ht' ? 'Istwa Oyitè' : 'Listener Stories'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Marie D.', location: 'Quebec', message: i18n.language === 'fr' ? 'Votre histoire m\'a inspirée à agir' : 'Your story inspired me to act', impact: 'Shared with 500+ people' },
              { name: 'Jean M.', location: 'Ontario', message: i18n.language === 'fr' ? 'Merci de parler pour ceux qui ne peuvent pas' : 'Thank you for speaking for those who cannot', impact: 'Contacted their MP' },
              { name: 'Sophie L.', location: 'British Columbia', message: i18n.language === 'fr' ? 'Cela m\'a rappelé pourquoi la justice est importante' : 'Reminded me why justice matters', impact: 'Monthly donor' },
            ].map((story, idx) => (
              <Card key={idx} className="p-6 bg-amber-900/20 border-2 border-amber-orange/30 hover:shadow-lg transition">
                <p className="font-bold text-amber-orange">{story.name}</p>
                <p className="text-xs text-cream/70">{story.location}</p>
                <p className="text-sm text-cream mt-4 italic">"{story.message}"</p>
                <p className="text-xs text-amber-orange font-semibold mt-4">→ {story.impact}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
