import { describe, it, expect } from 'vitest';
import { generateRSSFeed, getPodcastFeedConfig, getPodcastEpisodesForRSS } from './rss-feed';

describe('RSS Feed Generator', () => {
  it('should generate valid RSS 2.0 feed', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(rssFeed).toContain('<rss version="2.0"');
    expect(rssFeed).toContain('</rss>');
  });

  it('should include podcast title and description', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('<title>Justice for Barran</title>');
    expect(rssFeed).toContain('Indigenous advocacy, systemic failures, and the fight for justice');
  });

  it('should include iTunes namespace', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"');
    expect(rssFeed).toContain('<itunes:author>');
    expect(rssFeed).toContain('<itunes:owner>');
  });

  it('should include Google Play namespace', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0"');
    expect(rssFeed).toContain('<googleplay:author>');
  });

  it('should include Spotify namespace', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('xmlns:spotify="http://www.spotify.com/ns/rss"');
  });

  it('should include all episodes', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    episodes.forEach((episode) => {
      // Titles are XML-escaped, so check for the episode ID and guid
      expect(rssFeed).toContain(`<guid isPermaLink="false">${episode.id}</guid>`);
      expect(rssFeed).toContain(episode.title.substring(0, 10)); // Check partial title
    });
  });

  it('should include episode metadata', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('<itunes:episode>');
    expect(rssFeed).toContain('<itunes:duration>');
    expect(rssFeed).toContain('<itunes:explicit>');
  });

  it('should escape XML special characters', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    // Check that apostrophes are escaped
    expect(rssFeed).toContain("&apos;");
  });

  it('should include enclosure elements for audio files', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('<enclosure');
    expect(rssFeed).toContain('type="audio/mpeg"');
  });

  it('should include atom:link for self reference', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('<atom:link');
    expect(rssFeed).toContain('rel="self"');
    expect(rssFeed).toContain('type="application/rss+xml"');
  });

  it('should include owner information', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('<itunes:owner>');
    expect(rssFeed).toContain('Robert McGovern');
    expect(rssFeed).toContain('justiceforbarran@gmail.com');
  });

  it('should include category information', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    expect(rssFeed).toContain('Government');
    expect(rssFeed).toContain('itunes:category');
    expect(rssFeed).toContain('googleplay:category');
  });

  it('should have proper RSS structure', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    // Check basic RSS structure
    expect(rssFeed).toContain('<channel>');
    expect(rssFeed).toContain('</channel>');
    expect(rssFeed).toContain('<language>en-us</language>');
    expect(rssFeed).toContain('<copyright>');
    expect(rssFeed).toContain('<managingEditor>');
    expect(rssFeed).toContain('<webMaster>');
  });

  it('should return episodes in reverse chronological order', () => {
    const config = getPodcastFeedConfig();
    const episodes = getPodcastEpisodesForRSS();
    const rssFeed = generateRSSFeed(config, episodes);

    // Episode 2 should appear before Episode 1 in the feed
    const episode2Index = rssFeed.indexOf('Jordan');
    const episode1Index = rssFeed.indexOf('Dix dollars');

    expect(episode2Index).toBeLessThan(episode1Index);
  });
});
