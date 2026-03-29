import { Play, Download, Share2, Volume2 } from 'lucide-react';

interface PodcastEpisode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  audioUrl?: string;
  language: 'fr' | 'en';
}

const episodes: PodcastEpisode[] = [
  {
    id: 1,
    title: "Justice pour Barran - Épisode 1",
    description: "Le début de notre histoire: un adolescent autochtone poignardé trois fois et l'échec systémique du système de protection de l'enfance au Québec.",
    duration: "12:34",
    date: "2024-03-01",
    language: 'fr',
  },
  {
    id: 2,
    title: "Dimanche Sanglant - Épisode 2",
    description: "Les parallèles historiques entre la violence systémique contre les peuples autochtones et les promesses non tenues de réconciliation.",
    duration: "15:22",
    date: "2024-03-08",
    language: 'fr',
  },
  {
    id: 3,
    title: "Le Silence des Politiciens - Épisode 3",
    description: "Comment les élus fédéraux, provinciaux et municipaux ont ignoré nos appels à l'aide et à la justice.",
    duration: "14:15",
    date: "2024-03-15",
    language: 'fr',
  },
  {
    id: 4,
    title: "Principes de Jordan - Épisode 4",
    description: "Comprendre le Principe de Jordan et pourquoi il n'a pas protégé nos enfants autochtones.",
    duration: "11:45",
    date: "2024-03-22",
    language: 'fr',
  },
  {
    id: 5,
    title: "Voix des Survivants - Épisode 5",
    description: "Témoignages d'autres familles autochtones confrontées à l'échec du système de protection de l'enfance.",
    duration: "18:30",
    date: "2024-03-29",
    language: 'fr',
  },
];

export default function FrenchPodcast() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volume2 size={32} className="text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Podcast Français
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-2">
            Justice pour Barran - Dimanche Sanglant, Partie Deux
          </p>
          <p className="text-lg text-white/80">
            Témoignages, enquête systémique et appels à la justice pour les enfants autochtones
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Description */}
        <div className="bg-card rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold text-forest-green mb-4">À Propos de ce Podcast</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Ce podcast en français explore l'histoire de Barran, un adolescent autochtone poignardé trois fois en 2021, 
            et l'échec systémique du système de protection de l'enfance au Québec et au Canada.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            À travers des épisodes détaillés, nous examinons:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
            <li>Le contexte historique de la violence contre les peuples autochtones</li>
            <li>Les promesses non tenues de réconciliation après l'apologie de 2008</li>
            <li>L'échec des systèmes de protection de l'enfance</li>
            <li>Le silence politique à tous les niveaux (municipal, provincial, fédéral)</li>
            <li>Le Principe de Jordan et son application insuffisante</li>
            <li>Les témoignages d'autres familles autochtones</li>
            <li>Les appels à la justice et à la réforme systémique</li>
          </ul>
        </div>

        {/* Episodes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Épisodes</h2>
          <div className="space-y-6">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-orange"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block bg-forest-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Épisode {episode.id}
                      </span>
                      <span className="text-sm text-secondary-text">{episode.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-foreground mb-3">
                      {episode.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1 text-sm text-secondary-text">
                        <Volume2 size={16} />
                        {episode.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-amber-orange font-semibold">
                        🇫🇷 Français
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 md:flex-col">
                    <button className="flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-4 py-2 rounded-lg transition-colors">
                      <Play size={18} />
                      <span className="hidden sm:inline">Écouter</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-orange/90 text-white px-4 py-2 rounded-lg transition-colors">
                      <Download size={18} />
                      <span className="hidden sm:inline">Télécharger</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-4 py-2 rounded-lg transition-colors">
                      <Share2 size={18} />
                      <span className="hidden sm:inline">Partager</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-forest-green/10 to-amber-orange/10 rounded-lg p-8 border border-forest-green/20">
          <h2 className="text-2xl font-bold text-forest-green mb-4">Partagez Votre Histoire</h2>
          <p className="text-foreground mb-6">
            Si vous avez une histoire similaire ou des informations pertinentes à partager, nous aimerions vous entendre. 
            Contactez-nous via nos réseaux sociaux ou envoyez-nous un message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/justiceforbarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              📱 Instagram
            </a>
            <a
              href="https://x.com/helpbarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              𝕏 Twitter
            </a>
            <a
              href="https://www.tiktok.com/@barranneedsjustice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-orange/90 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
