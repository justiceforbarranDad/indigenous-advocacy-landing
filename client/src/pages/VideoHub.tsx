import React from 'react';
import { Download, Play } from 'lucide-react';

const VideoHub = () => {
  const shortClips = [
    {
      id: 1,
      title: "Justice Demands",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-01-justice-symbolic_6f1c81bb.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 2,
      title: "System Accountability",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-02-system-accountability-symbolic_7a60e34a.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 3,
      title: "Political Ghosting",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-03-political-ghosting-symbolic_b5b6f54e.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 4,
      title: "Electoral Reform",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-04-electoral-reform-symbolic_3eb1cf50.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 5,
      title: "Lifestyle Inequality",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-05-lifestyle-inequality-symbolic_d89f1328.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 6,
      title: "Share Your Story",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-06-share-your-story-symbolic_881a3a01.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 7,
      title: "Reform Blueprint",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-07-reform-blueprint-symbolic_3fd351c2.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 8,
      title: "Call to Action",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-08-call-to-action-symbolic_8f04ab4a.mp4",
      format: "9:16 (YouTube Shorts)"
    }
  ];

  const documentary = {
    title: "Sunday Bloody Sunday Part Two - Full Documentary",
    duration: "12 min",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/full-documentary-sunday-bloody-sunday_1369f384.mp4",
    format: "16:9 (Widescreen)"
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <div className="bg-forest-green text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Hub</h1>
          <p className="text-lg text-amber-light">All videos ready to download and share</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Full Documentary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            Full Documentary
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-orange">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-charcoal mb-2">{documentary.title}</h3>
                <p className="text-gray-600 mb-4">{documentary.format} • {documentary.duration}</p>
                <div className="flex gap-4">
                  <a
                    href={documentary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-forest-green hover:bg-amber-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Play size={18} />
                    Watch
                  </a>
                  <a
                    href={documentary.url}
                    download
                    className="inline-flex items-center gap-2 bg-amber-orange hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Short Clips */}
        <section>
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            Short Clips (8 Videos)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shortClips.map((clip) => (
              <div key={clip.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-orange hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-charcoal mb-2">Clip {clip.id}: {clip.title}</h3>
                <p className="text-gray-600 mb-4">{clip.format} • {clip.duration}</p>
                <div className="flex gap-3">
                  <a
                    href={clip.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-forest-green hover:bg-amber-orange text-white px-4 py-2 rounded font-semibold transition-colors text-sm"
                  >
                    <Play size={16} />
                    Watch
                  </a>
                  <a
                    href={clip.url}
                    download
                    className="inline-flex items-center gap-2 bg-amber-orange hover:bg-forest-green text-white px-4 py-2 rounded font-semibold transition-colors text-sm"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guides Section */}
        <section className="mt-16 bg-forest-green text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Publishing Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">YouTube Upload Guide</h3>
              <p className="mb-4 text-amber-light">Step-by-step instructions for uploading all videos to YouTube with proper titles, descriptions, and tags.</p>
              <a href="/resources" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-4 py-2 rounded font-semibold transition-colors">
                View Guide
              </a>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Social Media Publishing Kit</h3>
              <p className="mb-4 text-amber-light">Complete captions, hashtags, and posting strategy for TikTok, Instagram, Facebook, and Twitter.</p>
              <a href="/resources" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-4 py-2 rounded font-semibold transition-colors">
                View Kit
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoHub;
