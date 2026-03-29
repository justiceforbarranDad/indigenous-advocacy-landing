export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  audioUrl: string;
  duration: number; // in seconds
  date: string;
  language: 'EN' | 'FR';
  tags: string[];
  transcript?: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 'ep-3-fr',
    episodeNumber: 3,
    title: 'Le Silence des Politiciens - Épisode 3',
    description: 'Comment les élus fédéraux, provinciaux et municipaux ont ignoré nos appels à l\'aide et à la justice.',
    audioUrl: 'https://example.com/podcasts/episode-3-fr.mp3',
    duration: 855, // 14:15
    date: 'March 2026',
    language: 'FR',
    tags: ['government', 'accountability', 'systemic-failure', 'french'],
    transcript: 'Transcript coming soon...'
  },
  {
    id: 'ep-2-fr',
    episodeNumber: 2,
    title: 'Barran\'s Story - Part Two',
    description: 'Deep dive into the systemic failures that led to abandonment of a vulnerable Indigenous child.',
    audioUrl: 'https://example.com/podcasts/episode-2-fr.mp3',
    duration: 1245, // 20:45
    date: 'February 2026',
    language: 'FR',
    tags: ['barran-story', 'systemic-failure', 'indigenous-rights', 'french'],
    transcript: 'Transcript coming soon...'
  },
  {
    id: 'ep-1-fr',
    episodeNumber: 1,
    title: 'Sunday Bloody Sunday - Introduction',
    description: 'The beginning of Justice for Barran campaign - understanding the context and systemic issues.',
    audioUrl: 'https://example.com/podcasts/episode-1-fr.mp3',
    duration: 1620, // 27:00
    date: 'January 2026',
    language: 'FR',
    tags: ['introduction', 'context', 'justice', 'french'],
    transcript: 'Transcript coming soon...'
  },
  {
    id: 'ep-3-en',
    episodeNumber: 3,
    title: 'The Silence of Politicians - Episode 3',
    description: 'How federal, provincial, and municipal elected officials ignored our calls for help and justice.',
    audioUrl: 'https://example.com/podcasts/episode-3-en.mp3',
    duration: 855, // 14:15
    date: 'March 2026',
    language: 'EN',
    tags: ['government', 'accountability', 'systemic-failure', 'english'],
    transcript: 'Transcript coming soon...'
  },
  {
    id: 'ep-2-en',
    episodeNumber: 2,
    title: 'Barran\'s Story - Part Two',
    description: 'Deep dive into the systemic failures that led to abandonment of a vulnerable Indigenous child.',
    audioUrl: 'https://example.com/podcasts/episode-2-en.mp3',
    duration: 1245, // 20:45
    date: 'February 2026',
    language: 'EN',
    tags: ['barran-story', 'systemic-failure', 'indigenous-rights', 'english'],
    transcript: 'Transcript coming soon...'
  },
  {
    id: 'ep-1-en',
    episodeNumber: 1,
    title: 'Sunday Bloody Sunday - Introduction',
    description: 'The beginning of Justice for Barran campaign - understanding the context and systemic issues.',
    audioUrl: 'https://example.com/podcasts/episode-1-en.mp3',
    duration: 1620, // 27:00
    date: 'January 2026',
    language: 'EN',
    tags: ['introduction', 'context', 'justice', 'english'],
    transcript: 'Transcript coming soon...'
  }
];

export function getPodcastsByLanguage(language: 'EN' | 'FR'): PodcastEpisode[] {
  return podcastEpisodes.filter(ep => ep.language === language).sort((a, b) => b.episodeNumber - a.episodeNumber);
}

export function getLatestEpisode(language?: 'EN' | 'FR'): PodcastEpisode | undefined {
  if (language) {
    return getPodcastsByLanguage(language)[0];
  }
  return podcastEpisodes[0];
}

export function getPodcastById(id: string): PodcastEpisode | undefined {
  return podcastEpisodes.find(ep => ep.id === id);
}
