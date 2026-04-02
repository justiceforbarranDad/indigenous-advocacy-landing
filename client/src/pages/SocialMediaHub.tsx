import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

export default function SocialMediaHub() {
  const { i18n } = useTranslation();

  const socialPlatforms = [
    {
      id: 'x',
      name: 'X (Twitter)',
      handle: '@HelpBarran',
      url: 'https://x.com/HelpBarran',
      icon: '𝕏',
      color: 'bg-black',
      description: i18n.language === 'fr' ? 'Mises à jour en temps réel et appels à l\'action' : 'Real-time updates and calls to action',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: '@barranneedsjustice',
      url: 'https://www.tiktok.com/@barranneedsjustice',
      icon: '🎵',
      color: 'bg-black',
      description: i18n.language === 'fr' ? 'Vidéos courtes et percutantes' : 'Short-form powerful videos',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Justice for Barran',
      url: 'https://www.facebook.com/profile.php?id=61580677865271',
      icon: 'f',
      color: 'bg-blue-600',
      description: i18n.language === 'fr' ? 'Mises à jour et discussions communautaires' : 'Updates and community discussions',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@justiceforbarran',
      url: 'https://www.instagram.com/justiceforbarran/?hl=en',
      icon: '📷',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600',
      description: i18n.language === 'fr' ? 'Photos et histoires visuelles' : 'Photos and visual stories',
    },
    {
      id: 'threads',
      name: 'Threads',
      handle: '@justiceforbarran',
      url: 'https://www.threads.com/@justiceforbarran',
      icon: '💬',
      color: 'bg-gray-900',
      description: i18n.language === 'fr' ? 'Conversations détaillées et discussions' : 'In-depth conversations and discussions',
    },
    {
      id: 'reddit',
      name: 'Reddit',
      handle: 'u/Dear-Pudding3666',
      url: 'https://www.reddit.com/user/Dear-Pudding3666/',
      icon: '🔴',
      color: 'bg-orange-600',
      description: i18n.language === 'fr' ? 'Discussions communautaires et AMA' : 'Community discussions and AMAs',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-900 text-white py-12 border-b-4 border-red-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">
            {i18n.language === 'fr' ? 'CENTRE DE MÉDIAS SOCIAUX' : 'SOCIAL MEDIA HUB'}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            {i18n.language === 'fr' 
              ? 'Suivez Justice pour Barran sur tous les réseaux sociaux. Obtenez les mises à jour en direct, les témoignages et les appels à l\'action.' 
              : 'Follow Justice for Barran across all social media platforms. Get live updates, testimonies, and calls to action.'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${platform.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{platform.icon}</span>
                <ExternalLink size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-1">{platform.name}</h3>
              <p className="text-sm opacity-90 mb-3">{platform.handle}</p>
              <p className="text-sm opacity-80">{platform.description}</p>
              <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors w-full">
                {i18n.language === 'fr' ? 'Suivre' : 'Follow'}
              </button>
            </a>
          ))}
        </div>

        {/* Live Feeds Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest mb-8 text-center">
            {i18n.language === 'fr' ? 'FLUX EN DIRECT' : 'LIVE FEEDS'}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Les mises à jour les plus récentes de tous nos canaux de médias sociaux s\'affichent ci-dessous en temps réel.'
              : 'Latest updates from all our social media channels appear below in real-time.'}
          </p>

          {/* X/Twitter Feed */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border-2 border-black">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">𝕏</span> X (Twitter) - @HelpBarran
            </h3>
            <div className="flex justify-center">
              <a
                href="https://x.com/HelpBarran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                {i18n.language === 'fr' ? 'Voir sur X' : 'View on X'}
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              {i18n.language === 'fr'
                ? 'Les tweets s\'affichent ici. Visitez X pour voir tous les contenus en temps réel.'
                : 'Tweets appear here. Visit X to see all content in real-time.'}
            </p>
          </div>

          {/* TikTok Feed */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border-2 border-black">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🎵</span> TikTok - @barranneedsjustice
            </h3>
            <div className="flex justify-center">
              <a
                href="https://www.tiktok.com/@barranneedsjustice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                {i18n.language === 'fr' ? 'Regarder sur TikTok' : 'Watch on TikTok'}
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              {i18n.language === 'fr'
                ? 'Les vidéos TikTok s\'affichent ici. Visitez TikTok pour voir tous les contenus.'
                : 'TikTok videos appear here. Visit TikTok to see all content.'}
            </p>
          </div>

          {/* Facebook Feed */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">f</span> Facebook - Justice for Barran
            </h3>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61580677865271"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                {i18n.language === 'fr' ? 'Voir sur Facebook' : 'View on Facebook'}
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              {i18n.language === 'fr'
                ? 'Les publications Facebook s\'affichent ici. Visitez Facebook pour voir toutes les mises à jour.'
                : 'Facebook posts appear here. Visit Facebook to see all updates.'}
            </p>
          </div>

          {/* Instagram Feed */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border-2 border-pink-600">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📷</span> Instagram - @justiceforbarran
            </h3>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/justiceforbarran/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                {i18n.language === 'fr' ? 'Voir sur Instagram' : 'View on Instagram'}
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              {i18n.language === 'fr'
                ? 'Les photos et histoires Instagram s\'affichent ici. Visitez Instagram pour voir tout le contenu visuel.'
                : 'Instagram photos and stories appear here. Visit Instagram to see all visual content.'}
            </p>
          </div>

          {/* Threads Feed */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border-2 border-gray-900">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💬</span> Threads - @justiceforbarran
            </h3>
            <div className="flex justify-center">
              <a
                href="https://www.threads.com/@justiceforbarran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                {i18n.language === 'fr' ? 'Voir sur Threads' : 'View on Threads'}
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              {i18n.language === 'fr'
                ? 'Les conversations Threads s\'affichent ici. Visitez Threads pour des discussions détaillées.'
                : 'Threads conversations appear here. Visit Threads for in-depth discussions.'}
            </p>
          </div>

          {/* Reddit Feed */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg border-2 border-orange-600">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🔴</span> Reddit - u/Dear-Pudding3666
            </h3>
            <div className="flex justify-center">
              <a
                href="https://www.reddit.com/user/Dear-Pudding3666/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
              >
                {i18n.language === 'fr' ? 'Voir sur Reddit' : 'View on Reddit'}
              </a>
            </div>
            <p className="text-gray-600 mt-4 text-center">
              {i18n.language === 'fr'
                ? 'Les discussions Reddit s\'affichent ici. Visitez Reddit pour participer à la communauté.'
                : 'Reddit discussions appear here. Visit Reddit to join the community.'}
            </p>
          </div>
        </div>

        {/* Cross-Posting Setup Guide */}
        <div className="bg-blue-50 border-2 border-blue-600 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            {i18n.language === 'fr' ? 'Configuration de la Publication Croisée Automatique' : 'Automatic Cross-Posting Setup'}
          </h2>
          <p className="text-gray-700 mb-6">
            {i18n.language === 'fr'
              ? 'Utilisez IFTTT (If This Then That) pour publier automatiquement sur tous vos comptes sociaux en même temps:'
              : 'Use IFTTT (If This Then That) to automatically post to all your social accounts at the same time:'}
          </p>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 min-w-fit">1.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Visitez ifttt.com et créez un compte gratuit'
                  : 'Visit ifttt.com and create a free account'}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 min-w-fit">2.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Cliquez sur "Create" et sélectionnez "If This" → X (Twitter)'
                  : 'Click "Create" and select "If This" → X (Twitter)'}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 min-w-fit">3.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Choisissez "New tweet by you" comme déclencheur'
                  : 'Choose "New tweet by you" as the trigger'}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 min-w-fit">4.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Cliquez sur "Then That" et sélectionnez Facebook, Instagram, Threads, Reddit, TikTok'
                  : 'Click "Then That" and select Facebook, Instagram, Threads, Reddit, TikTok'}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 min-w-fit">5.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Connectez chaque compte social et configurez le format du message'
                  : 'Connect each social account and set up the message format'}
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 min-w-fit">6.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Activez l\'applet et testez en publiant un tweet'
                  : 'Turn on the applet and test by posting a tweet'}
              </span>
            </li>
          </ol>
          <a
            href="https://ifttt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            {i18n.language === 'fr' ? 'Aller à IFTTT' : 'Go to IFTTT'}
          </a>
        </div>

        {/* Call to Action */}
        <div className="bg-red-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            {i18n.language === 'fr' ? 'Restez Connecté' : 'Stay Connected'}
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Suivez-nous sur tous les réseaux sociaux pour les dernières mises à jour, témoignages et appels à l\'action pour la justice.'
              : 'Follow us on all social media platforms for the latest updates, testimonies, and calls to action for justice.'}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-900 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
