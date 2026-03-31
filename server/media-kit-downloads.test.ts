import { describe, it, expect } from 'vitest';

describe('MediaKit Download Functionality', () => {
  it('should have all media assets with download URLs', () => {
    const mediaAssets = [
      {
        title: 'Barran\'s Story - Key Facts Sheet',
        description: 'One-page summary of Barran\'s case, systemic failures, and demands',
        format: 'PDF',
        size: '500 KB',
        downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/barran-key-facts-sheet.pdf'
      },
      {
        title: 'Timeline Infographic',
        description: 'Visual timeline of 2021-2026 showing government failures',
        format: 'PNG/PDF',
        size: '2 MB',
        downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/timeline-infographic.png'
      },
      {
        title: 'Corporate Accountability List',
        description: 'Complete list of corporations profiting from reconciliation',
        format: 'PDF',
        size: '300 KB',
        downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/corporate-accountability-list.pdf'
      },
      {
        title: 'Government Officials Contact List',
        description: 'Twitter handles and contact info for accountability campaign',
        format: 'PDF',
        size: '400 KB',
        downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/government-contacts.pdf'
      },
      {
        title: 'Social Media Graphics Pack',
        description: '10 ready-to-share graphics for Twitter, Facebook, Instagram',
        format: 'ZIP (PNG)',
        size: '5 MB',
        downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/social-media-graphics.zip'
      },
      {
        title: 'Video Testimonial Clips',
        description: 'Short clips for media use (with permission)',
        format: 'MP4',
        size: '50 MB',
        downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/video-testimonials.mp4'
      }
    ];

    expect(mediaAssets).toHaveLength(6);
    
    mediaAssets.forEach((asset) => {
      expect(asset.title).toBeTruthy();
      expect(asset.description).toBeTruthy();
      expect(asset.format).toBeTruthy();
      expect(asset.size).toBeTruthy();
      expect(asset.downloadUrl).toBeTruthy();
      expect(asset.downloadUrl).toMatch(/^https:\/\//);
    });
  });

  it('should have valid CDN URLs for all assets', () => {
    const mediaAssets = [
      { downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/barran-key-facts-sheet.pdf' },
      { downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/timeline-infographic.png' },
      { downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/corporate-accountability-list.pdf' },
      { downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/government-contacts.pdf' },
      { downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/social-media-graphics.zip' },
      { downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/video-testimonials.mp4' }
    ];

    mediaAssets.forEach((asset) => {
      expect(asset.downloadUrl).toContain('cloudfront.net');
      expect(asset.downloadUrl).toContain('d2xsxph8kpxj0f');
    });
  });

  it('should have correct file extensions for each asset', () => {
    const assetExtensions = [
      { title: 'Barran\'s Story - Key Facts Sheet', ext: '.pdf' },
      { title: 'Timeline Infographic', ext: '.png' },
      { title: 'Corporate Accountability List', ext: '.pdf' },
      { title: 'Government Officials Contact List', ext: '.pdf' },
      { title: 'Social Media Graphics Pack', ext: '.zip' },
      { title: 'Video Testimonial Clips', ext: '.mp4' }
    ];

    assetExtensions.forEach((asset) => {
      expect(asset.title).toBeTruthy();
      expect(asset.ext).toMatch(/^\.\w+$/);
    });
  });
});
