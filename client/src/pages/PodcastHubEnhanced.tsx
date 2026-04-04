import { useTranslation } from 'react-i18next';
import { Volume2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Episode {
  id: number;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  duration: string;
  audioUrl: string;
  episodeNumber: number;
}

const episodes: Episode[] = [
  {
    id: 1,
    titleEn: "Diaspora Consciousness - International Family Justice",
    titleFr: "Conscience diasporique - Justice familiale internationale",
    descriptionEn: "Exploring what it means to be Haitian in Canada, diaspora consciousness, and Barran's story of systemic failure and resistance.",
    descriptionFr: "Explorer ce que cela signifie d'être haïtien au Canada, la conscience diasporique et l'histoire de Barran face aux défaillances systémiques et à la résistance.",
    duration: "45 min",
    audioUrl: "/podcast-audio/Episode_1_Diaspora_Consciousness_EN.wav",
    episodeNumber: 1,
  },
  {
    id: 2,
    titleEn: "Barran's Story - Haitian Family in Canada (Not Better)",
    titleFr: "L'histoire de Barran - Famille haïtienne au Canada (Pas mieux)",
    descriptionEn: "Detailed exploration of Barran's story and patterns of DPJ targeting of Haitian families in Canada.",
    descriptionFr: "Exploration détaillée de l'histoire de Barran et des modèles de ciblage de la DPJ envers les familles haïtiennes au Canada.",
    duration: "50 min",
    audioUrl: "/podcast-audio/Episode_2_Barrans_Story_EN.wav",
    episodeNumber: 2,
  },
  {
    id: 3,
    titleEn: "The Silence of Politicians - Diaspora Voices Ignored",
    titleFr: "Le silence des politiciens - Voix diasporiques ignorées",
    descriptionEn: "How elected officials have failed diaspora families and what political accountability looks like.",
    descriptionFr: "Comment les élus ont échoué les familles diasporiques et à quoi ressemble la responsabilité politique.",
    duration: "45 min",
    audioUrl: "/podcast-audio/Episode_3_Silence_Politicians_EN.wav",
    episodeNumber: 3,
  },
  {
    id: 4,
    titleEn: "DPJ + Medical System During COVID - Targeting Haitian Diaspora in Crisis",
    titleFr: "DPJ + Système médical pendant la COVID - Ciblage de la diaspora haïtienne en crise",
    descriptionEn: "How the pandemic created a perfect storm for Haitian families facing DPJ and medical system failures.",
    descriptionFr: "Comment la pandémie a créé une tempête parfaite pour les familles haïtiennes face aux défaillances de la DPJ et du système médical.",
    duration: "50 min",
    audioUrl: "/podcast-audio/Episode_4_DPJ_Medical_COVID_EN.wav",
    episodeNumber: 4,
  },
  {
    id: 5,
    titleEn: "Healing Through Culture - Reclaiming Diaspora Identity",
    titleFr: "Guérison par la culture - Récupération de l'identité diasporique",
    descriptionEn: "How diaspora families heal through Haitian culture and the vision of the McGovern Arts Institute.",
    descriptionFr: "Comment les familles diasporiques guérissent par la culture haïtienne et la vision du McGovern Arts Institute.",
    duration: "45 min",
    audioUrl: "/podcast-audio/Episode_5_Healing_Culture_EN.wav",
    episodeNumber: 5,
  },
  {
    id: 6,
    titleEn: "International Family Power - Diaspora Building Legacy",
    titleFr: "Pouvoir familial international - Diaspora construisant un héritage",
    descriptionEn: "How diaspora families are building collective power and creating lasting change for future generations.",
    descriptionFr: "Comment les familles diasporiques construisent le pouvoir collectif et créent un changement durable pour les générations futures.",
    duration: "55 min",
    audioUrl: "/podcast-audio/Episode_6_International_Family_Power_EN.wav",
    episodeNumber: 6,
  },
];

export default function PodcastHubEnhanced() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isEnglish ? "Justice for Barran Podcast" : "Podcast Justice pour Barran"}
          </h1>
          <p className="text-lg text-white/90 mb-6">
            {isEnglish 
              ? "A 6-episode series exploring diaspora consciousness, systemic failures, and international family solidarity."
              : "Une série de 6 épisodes explorant la conscience diasporique, les défaillances systémiques et la solidarité familiale internationale."}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {isEnglish ? "6 Episodes" : "6 épisodes"}
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {isEnglish ? "~290 Minutes" : "~290 minutes"}
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {isEnglish ? "Full Audio" : "Audio complet"}
            </span>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isEnglish ? "All Episodes" : "Tous les épisodes"}
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="bg-card text-card-foreground rounded-lg shadow-lg p-8 border border-border"
              >
                {/* Episode Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-forest-green text-white px-3 py-1 rounded-full text-sm font-bold">
                        {isEnglish ? `Episode ${episode.episodeNumber}` : `Épisode ${episode.episodeNumber}`}
                      </span>
                      <span className="text-sm text-muted-foreground">{episode.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-forest-green mb-2">
                      {isEnglish ? episode.titleEn : episode.titleFr}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground mb-6 leading-relaxed">
                  {isEnglish ? episode.descriptionEn : episode.descriptionFr}
                </p>

                {/* Audio Player */}
                <div className="bg-background rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Volume2 className="text-amber-orange" size={24} />
                    <span className="font-semibold text-foreground">
                      {isEnglish ? "Listen Now" : "Écouter maintenant"}
                    </span>
                  </div>
                  <audio
                    controls
                    className="w-full"
                    style={{
                      accentColor: '#D4A574',
                    }}
                  >
                    <source src={episode.audioUrl} type="audio/wav" />
                    {isEnglish 
                      ? "Your browser does not support the audio element."
                      : "Votre navigateur ne supporte pas l'élément audio."}
                  </audio>
                </div>

                {/* Download Button */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={episode.audioUrl} download>
                      <Download size={18} />
                      {isEnglish ? "Download Episode" : "Télécharger l'épisode"}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series Overview */}
      <section className="bg-card text-card-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            {isEnglish ? "Series Overview" : "Aperçu de la série"}
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              {isEnglish
                ? "This 6-episode podcast series explores the systemic failures facing Haitian diaspora families in Canada. Through the lens of Barran's story, we examine DPJ targeting, medical system discrimination, political silence, and the power of cultural healing and international family solidarity."
                : "Cette série de 6 épisodes explore les défaillances systémiques auxquelles sont confrontées les familles diasporiques haïtiennes au Canada. À travers l'histoire de Barran, nous examinons le ciblage de la DPJ, la discrimination du système médical, le silence politique et le pouvoir de la guérison culturelle et de la solidarité familiale internationale."}
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              {isEnglish ? "Key Topics" : "Sujets clés"}
            </h3>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>{isEnglish ? "Diaspora Consciousness:" : "Conscience diasporique :"}</strong> {isEnglish ? "What it means to maintain ties to Haiti while building a life in Canada" : "Ce que cela signifie de maintenir des liens avec Haïti tout en construisant une vie au Canada"}
              </li>
              <li>
                <strong>{isEnglish ? "Systemic Failures:" : "Défaillances systémiques :"}</strong> {isEnglish ? "DPJ targeting, medical system discrimination, political silence" : "Ciblage de la DPJ, discrimination du système médical, silence politique"}
              </li>
              <li>
                <strong>{isEnglish ? "Cultural Healing:" : "Guérison culturelle :"}</strong> {isEnglish ? "How diaspora families heal through Haitian culture and community" : "Comment les familles diasporiques guérissent par la culture et la communauté haïtiennes"}
              </li>
              <li>
                <strong>{isEnglish ? "International Solidarity:" : "Solidarité internationale :"}</strong> {isEnglish ? "Building collective power across diaspora communities" : "Construire le pouvoir collectif à travers les communautés diasporiques"}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isEnglish ? "Support Justice for Barran" : "Soutenir Justice pour Barran"}
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            {isEnglish
              ? "Share this podcast with your community. Amplify diaspora voices. Support systemic change."
              : "Partagez ce podcast avec votre communauté. Amplifiez les voix diasporiques. Soutenez le changement systémique."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-forest-green hover:bg-forest-green/90">
              {isEnglish ? "Share Podcast" : "Partager le podcast"}
            </Button>
            <Button variant="outline">
              {isEnglish ? "Donate" : "Donner"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
