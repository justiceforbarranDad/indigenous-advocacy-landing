import { Music, Apple, Radio } from 'lucide-react';

interface PodcastSubscriptionProps {
  language?: 'EN' | 'FR';
}

export function PodcastSubscription({ language = 'EN' }: PodcastSubscriptionProps) {
  const platforms = [
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/show/justiceforbarran',
      color: 'hover:bg-green-100',
      description: language === 'EN' ? 'Listen on Spotify' : 'Écouter sur Spotify'
    },
    {
      name: 'Apple Podcasts',
      icon: Apple,
      url: 'https://podcasts.apple.com/ca/podcast/justice-for-barran/id1234567890',
      color: 'hover:bg-gray-100',
      description: language === 'EN' ? 'Listen on Apple Podcasts' : 'Écouter sur Apple Podcasts'
    },
    {
      name: 'Google Podcasts',
      icon: Radio,
      url: 'https://podcasts.google.com/feed/justiceforbarran',
      color: 'hover:bg-blue-100',
      description: language === 'EN' ? 'Listen on Google Podcasts' : 'Écouter sur Google Podcasts'
    }
  ];

  return (
    <div className="bg-white border-4 border-black p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">
        {language === 'EN' ? 'Subscribe to Podcast' : 'S\'abonner au Podcast'}
      </h3>
      
      <p className="text-gray-700 mb-6">
        {language === 'EN'
          ? 'Get notified when new episodes are released. Subscribe on your favorite platform:'
          : 'Recevez une notification lorsque de nouveaux épisodes sont publiés. Abonnez-vous sur votre plateforme préférée:'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-black p-6 rounded-lg text-center transition-colors ${platform.color}`}
            >
              <Icon size={32} className="text-black mx-auto mb-3" />
              <h4 className="font-bold text-black mb-2">{platform.name}</h4>
              <p className="text-sm text-gray-700">{platform.description}</p>
            </a>
          );
        })}
      </div>

      {/* RSS Feed */}
      <div className="mt-8 border-t-4 border-black pt-6">
        <h4 className="font-bold text-black mb-3">
          {language === 'EN' ? 'RSS Feed' : 'Flux RSS'}
        </h4>
        <div className="bg-gray-100 border-2 border-black p-4 rounded-lg flex items-center justify-between">
          <code className="text-sm text-gray-700 break-all">
            https://indigenousadv-ahjdmzis.manus.space/podcast/feed.xml
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText('https://indigenousadv-ahjdmzis.manus.space/podcast/feed.xml');
            }}
            className="ml-4 px-4 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            {language === 'EN' ? 'Copy' : 'Copier'}
          </button>
        </div>
      </div>
    </div>
  );
}
