import { useState } from 'react';
import { Play, Upload, Eye, EyeOff, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  title: string;
  description: string;
  duration: string;
  anonymous: boolean;
  author?: string;
  date: string;
  views: number;
  likes: number;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "A Mother's Fight for Justice",
    description: "A mother shares her journey fighting systemic failures to protect her Indigenous child after a violent attack.",
    duration: "8:42",
    anonymous: false,
    author: "Sarah",
    date: "March 15, 2026",
    views: 2340,
    likes: 487
  },
  {
    id: 2,
    title: "DPJ Failure: My Story",
    description: "Anonymous testimony from a survivor about years of inadequate child protection services.",
    duration: "6:15",
    anonymous: true,
    date: "March 10, 2026",
    views: 1890,
    likes: 342
  },
  {
    id: 3,
    title: "Political Intimidation & Silence",
    description: "How elected officials ignored pleas for help and intimidated families seeking justice.",
    duration: "7:33",
    anonymous: true,
    date: "March 5, 2026",
    views: 1650,
    likes: 298
  },
  {
    id: 4,
    title: "Jordan's Principle Ignored",
    description: "Why federal legal obligations to Indigenous children continue to be violated.",
    duration: "5:48",
    anonymous: false,
    author: "James",
    date: "February 28, 2026",
    views: 1420,
    likes: 256
  },
  {
    id: 5,
    title: "Healing & Resilience",
    description: "Stories of Indigenous families finding strength and community support despite systemic failures.",
    duration: "9:12",
    anonymous: true,
    date: "February 20, 2026",
    views: 2100,
    likes: 412
  }
];

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    anonymous: true,
    authorName: '',
    videoFile: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would upload the video
    console.log('Video submission:', formData);
    setShowUploadForm(false);
    setFormData({
      title: '',
      description: '',
      anonymous: true,
      authorName: '',
      videoFile: null
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Video Testimonials</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Hear directly from survivors and families affected by systemic failures
          </p>
          <Button 
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            <Upload size={20} className="mr-2" /> Share Your Story
          </Button>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-12 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold mb-6">Share Your Testimonial</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Video Title</label>
                <input
                  type="text"
                  placeholder="e.g., My Journey for Justice"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  placeholder="Tell your story in a few sentences..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Video File</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setFormData({...formData, videoFile: e.target.files?.[0] || null})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">Maximum file size: 500MB. Supported formats: MP4, MOV, WebM</p>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.anonymous}
                    onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="font-semibold">Share anonymously</span>
                </label>

                {!formData.anonymous && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="Your name will be displayed with your video"
                      value={formData.authorName}
                      onChange={(e) => setFormData({...formData, authorName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  <strong>Privacy Notice:</strong> Your video will be reviewed before publication. We respect your privacy and will never share your personal information. You can request anonymity to protect your identity.
                </p>
              </div>

              <div className="flex gap-4">
                <Button 
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 font-semibold rounded-lg"
                >
                  Submit Testimonial
                </Button>
                <Button 
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  variant="outline"
                  className="flex-1 py-3 font-semibold rounded-lg"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setSelectedVideo(testimonial)}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
            >
              {/* Video Thumbnail */}
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 h-48 flex items-center justify-center group-hover:from-red-700 group-hover:to-red-900 transition-colors">
                <Play size={64} className="text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-sm font-semibold">
                  {testimonial.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg flex-1">{testimonial.title}</h3>
                  {testimonial.anonymous && (
                    <EyeOff size={18} className="text-gray-500 flex-shrink-0 ml-2" />
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {testimonial.description}
                </p>

                <div className="text-xs text-gray-500 mb-3">
                  {testimonial.author ? `By ${testimonial.author}` : 'Anonymous'} • {testimonial.date}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{testimonial.views.toLocaleString()} views</span>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
                      <Heart size={16} /> {testimonial.likes}
                    </button>
                    <button className="hover:text-red-600 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative bg-black h-96 flex items-center justify-center">
                <Play size={80} className="text-white opacity-50" />
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {selectedVideo.author ? `By ${selectedVideo.author}` : 'Anonymous'} • {selectedVideo.date}
                    </p>
                  </div>
                  {selectedVideo.anonymous && (
                    <EyeOff size={24} className="text-gray-500 flex-shrink-0" />
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {selectedVideo.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex gap-4 text-gray-600 dark:text-gray-400">
                    <span>{selectedVideo.views.toLocaleString()} views</span>
                    <span>Duration: {selectedVideo.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Heart size={18} /> Like
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Share2 size={18} /> Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
