import { useAuth } from '@/_core/hooks/useAuth';
import { Link } from 'wouter';

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* French Podcast Announcement Banner */}
      <div className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">🎙️ Nouveau Podcast en Français</h2>
            <p className="text-lg mb-4">Découvrez la série complète de 5 épisodes: <strong>Dimanche Sanglant, Partie Deux</strong></p>
            <p className="text-sm opacity-90">Justice pour Barran - Enquête systémique et appels à la justice</p>
          </div>
          <Link href="/french-podcast">
            <a className="bg-white text-amber-700 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors whitespace-nowrap">
              Écouter les Épisodes →
            </a>
          </Link>
        </div>
      </div>



      {/* Additional CTA Section Below Video */}
      <div className="w-full bg-amber-50 py-8 px-4 border-t-4 border-amber-600">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Soutenez Notre Cause</h3>
          <p className="text-lg text-amber-800 mb-6">Écoutez les témoignages, partagez l'histoire, et rejoignez le mouvement pour la justice.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/french-podcast">
              <a className="bg-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                Podcast Français
              </a>
            </Link>
            <Link href="/donate-etransfer">
              <a className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Donner via e-Transfer
              </a>
            </Link>
            <a href="https://www.gofundme.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              GoFundMe Campaign
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
