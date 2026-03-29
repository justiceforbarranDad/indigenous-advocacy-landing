import { useState } from 'react';
import { Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FrenchDocumentary() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/sunday-bloody-sunday-french-8min_59384265.mp4';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Dimanche Sanglant, Partie Deux - Documentaire',
        text: 'Regardez le documentaire en français sur la justice pour Barran',
        url: window.location.href,
      });
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = videoUrl;
    a.download = 'dimanche-sanglant-partie-deux.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dimanche Sanglant, Partie Deux
          </h1>
          <h2 className="text-xl md:text-2xl font-serif italic mb-2">
            Documentaire en Français
          </h2>
          <p className="text-lg text-amber-100">
            Justice pour Barran - Enquête systémique et appels à la justice
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-8">
          <video
            src={videoUrl}
            controls
            className="w-full aspect-video bg-black"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            onClick={handleShare}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Share2 size={18} />
            Partager
          </Button>
          <Button
            onClick={handleDownload}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download size={18} />
            Télécharger
          </Button>
        </div>

        {/* About Section */}
        <div className="bg-card rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">À Propos de ce Documentaire</h3>
          <p className="text-lg leading-relaxed mb-4">
            Ce documentaire de 8 minutes explore l'histoire de Barran, un adolescent autochtone poignardé trois fois en 2021, et l'échec systémique du système de protection de l'enfance au Québec et au Canada.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            À travers une enquête journalistique approfondie, nous examinons:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li>Le contexte historique de la violence contre les peuples autochtones</li>
            <li>Les promesses non tenues de réconciliation après l'apologie de 2008</li>
            <li>L'échec des systèmes de protection de l'enfance</li>
            <li>Le silence politique à tous les niveaux (municipal, provincial, fédéral)</li>
            <li>Le Principe de Jordan et son application insuffisante</li>
            <li>Les appels à la justice et à la réforme systémique</li>
          </ul>
        </div>

        {/* Key Topics */}
        <div className="bg-card rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">Thèmes Principaux</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <h4 className="text-xl font-bold mb-2">Systémique</h4>
              <p>Comprendre comment les systèmes institutionnels échouent à protéger les enfants autochtones</p>
            </div>
            <div className="border-l-4 border-amber-600 pl-4">
              <h4 className="text-xl font-bold mb-2">Politique</h4>
              <p>L'absence de réponse des élus à tous les niveaux gouvernementaux</p>
            </div>
            <div className="border-l-4 border-amber-600 pl-4">
              <h4 className="text-xl font-bold mb-2">Justice</h4>
              <p>Les appels à une enquête indépendante et à des réformes réelles</p>
            </div>
            <div className="border-l-4 border-amber-600 pl-4">
              <h4 className="text-xl font-bold mb-2">Réconciliation</h4>
              <p>Pourquoi les promesses de 2008 restent inachevées en 2026</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-amber-50 dark:bg-amber-950 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Partagez Cette Histoire</h3>
          <p className="text-lg mb-6">
            Aidez-nous à faire connaître cette histoire. Partagez ce documentaire avec vos réseaux et soutenez l'appel à la justice pour Barran et les autres enfants autochtones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/share/1JbsMBESqK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Facebook
            </a>
            <a
              href="https://x.com/helpbarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Twitter/X
            </a>
            <a
              href="https://www.tiktok.com/@barranneedsjustice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
