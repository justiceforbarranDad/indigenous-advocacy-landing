/**
 * RSS Feed Generator for Justice for Barran Podcast
 * Generates valid RSS 2.0 feed compatible with Apple Podcasts, Spotify, and other platforms
 */

export interface PodcastEpisodeRSS {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  date: string;
  language: string;
  explicit: boolean;
  imageUrl?: string;
}

export interface PodcastFeedConfig {
  title: string;
  description: string;
  link: string;
  language: string;
  copyright: string;
  author: string;
  email: string;
  imageUrl: string;
  category: string;
  explicit: boolean;
  ownerName: string;
  ownerEmail: string;
}

/**
 * Generate RSS 2.0 feed XML
 * Compliant with Apple Podcasts, Spotify, and other major platforms
 */
export function generateRSSFeed(
  config: PodcastFeedConfig,
  episodes: PodcastEpisodeRSS[]
): string {
  const escapeXml = (str: string): string => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const formatDate = (dateStr: string): string => {
    // Convert "March 2026" to RFC 2822 format
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      // If parsing fails, use current date
      return new Date().toUTCString();
    }
    return date.toUTCString();
  };

  const durationToSeconds = (duration: string): number => {
    // Convert "MM:SS" or "HH:MM:SS" to seconds
    const parts = duration.split(':').map(Number);
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    } else if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
  };

  const episodeItems = episodes
    .sort((a, b) => b.episodeNumber - a.episodeNumber) // Most recent first
    .map(
      (episode) => `
    <item>
      <title>${escapeXml(episode.title)}</title>
      <description>${escapeXml(episode.description)}</description>
      <link>${escapeXml(config.link)}</link>
      <guid isPermaLink="false">${escapeXml(episode.id)}</guid>
      <pubDate>${formatDate(episode.date)}</pubDate>
      <author>${escapeXml(config.email)}</author>
      <category>${escapeXml(config.category)}</category>
      <comments>${escapeXml(config.link)}</comments>
      <enclosure url="${escapeXml(episode.audioUrl)}" type="audio/mpeg" />
      <itunes:title>${escapeXml(episode.title)}</itunes:title>
      <itunes:episode>${episode.episodeNumber}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>
      <itunes:duration>${durationToSeconds(episode.duration)}</itunes:duration>
      <itunes:explicit>${episode.explicit ? 'true' : 'false'}</itunes:explicit>
      <itunes:summary>${escapeXml(episode.description)}</itunes:summary>
      ${episode.imageUrl ? `<itunes:image href="${escapeXml(episode.imageUrl)}" />` : ''}
      <content:encoded><![CDATA[${episode.description}]]></content:encoded>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0"
  xmlns:spotify="http://www.spotify.com/ns/rss"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(config.title)}</title>
    <link>${escapeXml(config.link)}</link>
    <description>${escapeXml(config.description)}</description>
    <language>${config.language}</language>
    <copyright>${escapeXml(config.copyright)}</copyright>
    <managingEditor>${escapeXml(config.email)}</managingEditor>
    <webMaster>${escapeXml(config.email)}</webMaster>
    <image>
      <url>${escapeXml(config.imageUrl)}</url>
      <title>${escapeXml(config.title)}</title>
      <link>${escapeXml(config.link)}</link>
    </image>
    <atom:link href="${escapeXml(config.link)}/api/podcast/feed.xml" rel="self" type="application/rss+xml" />
    
    <!-- iTunes/Apple Podcasts Namespace -->
    <itunes:author>${escapeXml(config.author)}</itunes:author>
    <itunes:owner>
      <itunes:name>${escapeXml(config.ownerName)}</itunes:name>
      <itunes:email>${escapeXml(config.ownerEmail)}</itunes:email>
    </itunes:owner>
    <itunes:explicit>${config.explicit ? 'true' : 'false'}</itunes:explicit>
    <itunes:category text="${escapeXml(config.category)}" />
    <itunes:image href="${escapeXml(config.imageUrl)}" />
    <itunes:type>episodic</itunes:type>
    
    <!-- Google Podcasts Namespace -->
    <googleplay:author>${escapeXml(config.author)}</googleplay:author>
    <googleplay:description>${escapeXml(config.description)}</googleplay:description>
    <googleplay:explicit>${config.explicit ? 'true' : 'false'}</googleplay:explicit>
    <googleplay:category text="${escapeXml(config.category)}" />
    <googleplay:image url="${escapeXml(config.imageUrl)}" />
    
    <!-- Spotify Namespace -->
    <spotify:limit>all</spotify:limit>
    
    ${episodeItems}
  </channel>
</rss>`;

  return rss;
}

/**
 * Get podcast feed configuration
 */
export function getPodcastFeedConfig(): PodcastFeedConfig {
  return {
    title: 'Justice for Barran',
    description:
      'A podcast series exploring Indigenous advocacy, systemic failures, and the fight for justice. Hear stories of institutional abandonment and the legal battles for reconciliation.',
    link: process.env.VITE_APP_URL || 'https://justiceforbarran.com',
    language: 'en-us',
    copyright: `© 2026 Justice for Barran. All rights reserved.`,
    author: 'Robert McGovern',
    email: 'justiceforbarran@gmail.com',
    imageUrl:
      'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp',
    category: 'Government',
    explicit: false,
    ownerName: 'Robert McGovern',
    ownerEmail: 'justiceforbarran@gmail.com',
  };
}

/**
 * Get podcast episodes for RSS feed
 * Audio URLs should point to hosted audio files on CDN or S3
 */
export function getPodcastEpisodesForRSS(): PodcastEpisodeRSS[] {
  return [
    {
      id: 'episode-1',
      episodeNumber: 1,
      title: "Dix dollars : l'abandon d'une victime",
      description:
        'Ten dollars per day. This is the amount Quebec\'s victim compensation program deemed sufficient for a 14-year-old Indigenous boy who survived three knife wounds to the chest and back. This episode explores the systemic abandonment of Barran and how institutions failed to provide adequate care despite legal obligations.',
      audioUrl:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/episode-1-dix-dollars.mp3',
      duration: '15:18',
      date: 'March 2026',
      language: 'French / English',
      explicit: false,
    },
    {
      id: 'episode-2',
      episodeNumber: 2,
      title: "Jordan's Principle: A Law That Doesn't Protect",
      description:
        "Jordan's Principle was created to ensure no Indigenous child falls through the cracks between federal and provincial jurisdictions. Yet in 2026, Barran's case proves this principle remains largely unenforced. This episode examines the legal framework, institutional failures, and what real reconciliation would require.",
      audioUrl:
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/episode-2-jordans-principle.mp3',
      duration: '18:45',
      date: 'March 2026',
      language: 'French / English',
      explicit: false,
    },
  ];
}
