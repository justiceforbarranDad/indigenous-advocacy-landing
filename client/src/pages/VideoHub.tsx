import { useState, useEffect } from 'react';
import { Download, Play, Eye, X } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { ShareButtons } from '@/components/ShareButtons';

const VideoHub = () => {
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const [sortBy, setSortBy] = useState<'title' | 'views'>('title');
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; url: string; title: string } | null>(null);

  // Fetch all video views on mount
  const allViewsQuery = trpc.videos.getAllViews.useQuery();

  useEffect(() => {
    if (allViewsQuery.data) {
      const counts: Record<string, number> = {};
      allViewsQuery.data.forEach(video => {
        counts[video.videoId] = video.viewCount;
      });
      setViewCounts(counts);
    }
  }, [allViewsQuery.data]);

  const recordViewMutation = trpc.videos.recordView.useMutation();

  const shortClips = [
    {
      id: 'clip-01',
      title: "Justice Demands",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-01-justice-symbolic_6f1c81bb.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-02',
      title: "System Accountability",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-02-system-accountability-symbolic_7a60e34a.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-03',
      title: "Political Ghosting",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-03-political-ghosting-symbolic_b5b6f54e.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-04',
      title: "Electoral Reform",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-04-electoral-reform-symbolic_3eb1cf50.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-05',
      title: "Lifestyle Inequality",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-05-lifestyle-inequality-symbolic_d89f1328.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-06',
      title: "Share Your Story",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-06-share-your-story-symbolic_881a3a01.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-07',
      title: "Reform Blueprint",
      duration: "60 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-07-reform-blueprint-symbolic_3fd351c2.mp4",
      format: "9:16 (YouTube Shorts)"
    },
    {
      id: 'clip-08',
      title: "Call to Action",
      duration: "45 sec",
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/clip-08-call-to-action-symbolic_8f04ab4a.mp4",
      format: "9:16 (YouTube Shorts)"
    }
  ];

  const documentary = {
    id: 'doc-01',
    title: "Sunday Bloody Sunday Part Two - Full Documentary",
    duration: "12 min",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/full-documentary-sunday-bloody-sunday_1369f384.mp4",
    format: "16:9 (Widescreen)"
  };

  const handleWatch = (videoId: string, videoTitle: string, url: string) => {
    recordViewMutation.mutate({ videoId, videoTitle }, {
      onSuccess: () => {
        setViewCounts(prev => ({
          ...prev,
          [videoId]: (prev[videoId] || 0) + 1
        }));
      }
    });
    setSelectedVideo({ id: videoId, url, title: videoTitle });
  };

  const sortedClips = [...shortClips].sort((a, b) => {
    if (sortBy === 'views') {
      return (viewCounts[b.id] || 0) - (viewCounts[a.id] || 0);
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Sticky Donation Sidebar - Desktop Only */}
      <div className="hidden lg:block fixed right-0 top-0 h-screen w-80 bg-forest-green text-white p-8 shadow-2xl z-40 overflow-y-auto">
        <div className="flex flex-col gap-6 sticky top-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Support This Advocacy</h3>
            <p className="text-amber-light mb-6 leading-relaxed">
              Your donation directly supports Indigenous families fighting systemic discrimination and demanding accountability.
            </p>
            
            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold text-amber-light">Donations support:</p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-orange mt-1">✓</span>
                  <span>Legal advocacy and court challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-orange mt-1">✓</span>
                  <span>Media campaigns and public awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-orange mt-1">✓</span>
                  <span>Community support for affected families</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-orange mt-1">✓</span>
                  <span>Policy reform and accountability</span>
                </li>
              </ul>
            </div>

            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-amber-orange hover:bg-amber-light text-white font-bold py-3 px-4 rounded-lg text-center transition-colors mb-3"
            >
              Donate Now
            </a>

            <a
              href="mailto:support@justiceforbarran.org"
              className="block w-full bg-white hover:bg-gray-100 text-forest-green font-bold py-3 px-4 rounded-lg text-center transition-colors"
            >
              Other Ways to Help
            </a>
          </div>

          <div className="border-t border-amber-light/30 pt-6">
            <h4 className="font-bold text-amber-light mb-4">Evidence & Documentation</h4>
            <ul className="text-xs space-y-2 mb-6">
              <li>
                <a href="#" className="text-amber-light hover:text-amber-orange transition-colors underline">Cease-and-Desist Letter</a>
                <p className="text-gray-400">MNA office intimidation</p>
              </li>
              <li>
                <a href="#" className="text-amber-light hover:text-amber-orange transition-colors underline">DPJ File Records</a>
                <p className="text-gray-400">5+ years of violations</p>
              </li>
              <li>
                <a href="#" className="text-amber-light hover:text-amber-orange transition-colors underline">Organization Responses</a>
                <p className="text-gray-400">CHRC, CDPDJ, Legal Aid</p>
              </li>
              <li>
                <a href="#" className="text-amber-light hover:text-amber-orange transition-colors underline">Media Coverage</a>
                <p className="text-gray-400">APTN & news articles</p>
              </li>
              <li>
                <a href="#" className="text-amber-light hover:text-amber-orange transition-colors underline">Court Documents</a>
                <p className="text-gray-400">Legal filings & rulings</p>
              </li>
            </ul>
          </div>

          <div className="border-t border-amber-light/30 pt-6">
            <p className="text-xs text-gray-300 mb-4">
              Every dollar makes a difference. Thank you for standing with Indigenous families.
            </p>
            <div className="flex gap-3 justify-center">
              <a href="#" className="text-amber-light hover:text-amber-orange transition-colors">Twitter</a>
              <a href="#" className="text-amber-light hover:text-amber-orange transition-colors">Facebook</a>
              <a href="#" className="text-amber-light hover:text-amber-orange transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Adjust for sidebar on desktop */}
      <div className="lg:mr-80">
        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-black rounded-lg shadow-2xl max-w-4xl w-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-white font-bold text-lg">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-white hover:bg-gray-700 p-2 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="relative bg-black">
                <video
                  controls
                  autoPlay
                  className="w-full"
                  style={{ aspectRatio: '16/9' }}
                >
                  <source src={selectedVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

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
                  
                  {/* View Counter */}
                  <div className="flex items-center gap-2 mb-6 text-amber-orange font-semibold">
                    <Eye size={20} />
                    <span>{viewCounts[documentary.id] || 0} views</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleWatch(documentary.id, documentary.title, documentary.url)}
                        className="inline-flex items-center gap-2 bg-forest-green hover:bg-amber-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Play size={18} />
                        Watch
                      </button>
                      <a
                        href={documentary.url}
                        download
                        className="inline-flex items-center gap-2 bg-amber-orange hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Download size={18} />
                        Download
                      </a>
                    </div>
                    <ShareButtons 
                      videoTitle={documentary.title}
                      videoUrl="/video-hub"
                      hashtags={['#JusticeForBarran', '#EveryChildMatters', '#SundayBloodySunday']}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Short Clips */}
          <section>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-forest-green border-b-4 border-amber-orange pb-4 flex-1">
                Short Clips (8 Videos)
              </h2>
              <div className="ml-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'title' | 'views')}
                  className="px-4 py-2 border-2 border-amber-orange rounded-lg font-semibold text-charcoal bg-white"
                >
                  <option value="title">Sort by Title</option>
                  <option value="views">Sort by Views</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedClips.map((clip) => (
                <div key={clip.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-orange">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{clip.title}</h3>
                  <p className="text-gray-600 mb-4">{clip.format} • {clip.duration}</p>
                  
                  {/* View Counter */}
                  <div className="flex items-center gap-2 mb-6 text-amber-orange font-semibold">
                    <Eye size={20} />
                    <span>{viewCounts[clip.id] || 0} views</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleWatch(clip.id, clip.title, clip.url)}
                        className="inline-flex items-center gap-2 bg-forest-green hover:bg-amber-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1"
                      >
                        <Play size={18} />
                        Watch
                      </button>
                      <a
                        href={clip.url}
                        download
                        className="inline-flex items-center gap-2 bg-amber-orange hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Download size={18} />
                      </a>
                    </div>
                    <ShareButtons 
                      videoTitle={clip.title}
                      videoUrl="/video-hub"
                      hashtags={['#JusticeForBarran', '#EveryChildMatters', '#SundayBloodySunday']}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VideoHub;
