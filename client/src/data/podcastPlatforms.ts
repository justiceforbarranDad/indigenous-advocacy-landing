import { Music, Headphones, Radio, Podcast, Zap, Volume2 } from 'lucide-react';

export interface PodcastPlatform {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  color: string;
  bgColor: string;
  featured: boolean;
}

export const podcastPlatforms: PodcastPlatform[] = [
  {
    id: 'apple-podcasts',
    name: 'Apple Podcasts',
    description: 'Listen on iPhone, iPad, Mac, Apple Watch, and HomePod',
    url: 'https://podcasts.apple.com/podcast/justice-for-barran/id1234567890',
    icon: Podcast,
    color: 'text-black',
    bgColor: 'bg-gray-100 hover:bg-gray-200',
    featured: true,
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Stream on Spotify with millions of listeners',
    url: 'https://open.spotify.com/show/justiceforbarran',
    icon: Music,
    color: 'text-green-500',
    bgColor: 'bg-green-50 hover:bg-green-100',
    featured: true,
  },
  {
    id: 'google-podcasts',
    name: 'Google Podcasts',
    description: 'Listen on Google Podcasts and Google Assistant',
    url: 'https://podcasts.google.com/feed/justiceforbarran',
    icon: Radio,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    featured: true,
  },
  {
    id: 'amazon-music',
    name: 'Amazon Music',
    description: 'Stream on Amazon Music and Alexa devices',
    url: 'https://music.amazon.com/podcasts/justiceforbarran',
    icon: Volume2,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 hover:bg-orange-100',
    featured: false,
  },
  {
    id: 'iheartradio',
    name: 'iHeartRadio',
    description: 'Listen on iHeartRadio and iHeartRadio app',
    url: 'https://www.iheartradio.ca/podcast/justice-for-barran',
    icon: Headphones,
    color: 'text-red-500',
    bgColor: 'bg-red-50 hover:bg-red-100',
    featured: false,
  },
  {
    id: 'rss-feed',
    name: 'RSS Feed',
    description: 'Subscribe using your favorite podcast app',
    url: '/api/podcast/feed.xml',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 hover:bg-yellow-100',
    featured: false,
  },
];

export const featuredPlatforms = podcastPlatforms.filter(p => p.featured);
export const otherPlatforms = podcastPlatforms.filter(p => !p.featured);
