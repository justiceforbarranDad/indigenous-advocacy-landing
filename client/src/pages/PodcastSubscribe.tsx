import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Share2, Mail } from 'lucide-react';
import { podcastPlatforms, featuredPlatforms, otherPlatforms } from '../data/podcastPlatforms';

export default function PodcastSubscribe() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate email subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSharePlatform = (platform: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Justice for Barran Podcast',
        text: `Listen to Justice for Barran on ${platform}. Stories of Indigenous advocacy, systemic failures, and the fight for justice.`,
        url: window.location.href,
      }).catch(err => console.log('Error sharing:', err));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b-4 border-red-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-900">
            Justice for Barran
          </a>
          <div className="flex gap-8">
            <a href="/" className="text-gray-700 hover:text-red-700 font-semibold">FRONT PAGE</a>
            <a href="/" className="text-gray-700 hover:text-red-700 font-semibold">BARRAN'S STORY</a>
            <a href="/" className="text-gray-700 hover:text-red-700 font-semibold">DONATE</a>
            <a href="/" className="text-gray-700 hover:text-red-700 font-semibold">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Subscribe to Our Podcast
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Hear stories of Indigenous advocacy, systemic failures, and the fight for justice.
          </p>
          <p className="text-lg text-red-100">
            Available on all major podcast platforms
          </p>
        </div>
      </section>

      {/* Featured Platforms Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Listen Now
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Subscribe on your favorite platform to get new episodes automatically
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.bgColor} rounded-lg p-8 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent size={40} className={platform.color} />
                    <ArrowRight size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {platform.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(platform.url, '_blank');
                    }}
                    className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Subscribe <ArrowRight size={18} />
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Platforms Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Also Available On
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {otherPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.bgColor} rounded-lg p-6 transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md`}
                >
                  <div className="flex items-center gap-4">
                    <IconComponent size={32} className={platform.color} />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 flex-shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="bg-red-700 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={48} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Get New Episodes in Your Inbox
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Subscribe to our mailing list for episode updates, behind-the-scenes stories, and exclusive content.
          </p>

          <form onSubmit={handleEmailSubscribe} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-red-700 hover:bg-red-50 font-bold py-3 px-8 rounded transition-colors disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {subscribed && (
            <div className="flex items-center justify-center gap-2 text-green-100 bg-green-900 bg-opacity-50 rounded-lg p-4">
              <CheckCircle size={20} />
              <span>Thanks for subscribing! Check your email to confirm.</span>
            </div>
          )}

          <p className="text-sm text-red-100">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Spread the Word
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Help us reach more people by sharing the podcast with your friends and family
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleSharePlatform('Apple Podcasts')}
              className="bg-black text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <Share2 size={20} /> Share on Apple Podcasts
            </button>
            <button
              onClick={() => handleSharePlatform('Spotify')}
              className="bg-green-500 text-white hover:bg-green-600 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <Share2 size={20} /> Share on Spotify
            </button>
            <button
              onClick={() => handleSharePlatform('Social Media')}
              className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <Share2 size={20} /> Share Story
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-red-400">Front Page</a></li>
              <li><a href="/" className="hover:text-red-400">Barran's Story</a></li>
              <li><a href="/" className="hover:text-red-400">Donate</a></li>
              <li><a href="/" className="hover:text-red-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-red-400">Legal Support</a></li>
              <li><a href="/" className="hover:text-red-400">References</a></li>
              <li><a href="/" className="hover:text-red-400">Media Kit</a></li>
              <li><a href="/" className="hover:text-red-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://x.com/HelpBarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">X / Twitter</a></li>
              <li><a href="https://www.tiktok.com/@barranneedsjustice" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">TikTok</a></li>
              <li><a href="https://www.instagram.com/justiceforbarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Instagram</a></li>
              <li><a href="https://www.youtube.com/@justiceforBarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Podcast</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/subscribe" className="hover:text-red-400">Subscribe</a></li>
              <li><a href="/" className="hover:text-red-400">Episodes</a></li>
              <li><a href="/api/podcast/feed.xml" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">RSS Feed</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Justice for Barran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
