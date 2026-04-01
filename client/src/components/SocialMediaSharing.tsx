import { Share2, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
  hashtags?: string[];
  position?: 'inline' | 'floating' | 'section';
}

export function SocialMediaSharing({
  title,
  description = 'Justice for Barran - Fighting for Indigenous Rights and Accountability',
  url = 'https://indigenousadv-ahjdmzis.manus.space',
  hashtags = ['JusticeForBarran', 'IndigenousRights', 'Accountability'],
  position = 'inline',
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const messages = {
    twitter: `${title} - ${description} ${hashtags.map(h => `#${h}`).join(' ')} ${url}`,
    facebook: `${title}\n\n${description}\n\n${url}`,
    linkedin: `${title}\n\n${description}\n\n${url}`,
    email: `Check out: ${title}`,
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(messages.twitter)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank',
      'width=600,height=400'
    );
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(messages.email + '\n\n' + url)}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (position === 'inline') {
    return (
      <div className="flex flex-wrap gap-3 items-center">
        <span className="font-bold text-sm">Share:</span>
        <button
          onClick={shareOnTwitter}
          className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
          title="Share on Twitter"
        >
          <Twitter size={18} />
          <span className="hidden sm:inline">Twitter</span>
        </button>
        <button
          onClick={shareOnFacebook}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          title="Share on Facebook"
        >
          <Facebook size={18} />
          <span className="hidden sm:inline">Facebook</span>
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          title="Share on LinkedIn"
        >
          <Linkedin size={18} />
          <span className="hidden sm:inline">LinkedIn</span>
        </button>
        <button
          onClick={shareViaEmail}
          className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          title="Share via Email"
        >
          <Mail size={18} />
          <span className="hidden sm:inline">Email</span>
        </button>
        <button
          onClick={copyLink}
          className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors"
          title="Copy Link"
        >
          <Share2 size={18} />
          <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    );
  }

  if (position === 'floating') {
    return (
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <button
          onClick={shareOnTwitter}
          className="w-14 h-14 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 shadow-lg transition-all hover:scale-110"
          title="Share on Twitter"
        >
          <Twitter size={24} />
        </button>
        <button
          onClick={shareOnFacebook}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 shadow-lg transition-all hover:scale-110"
          title="Share on Facebook"
        >
          <Facebook size={24} />
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 shadow-lg transition-all hover:scale-110"
          title="Share on LinkedIn"
        >
          <Linkedin size={24} />
        </button>
        <button
          onClick={shareViaEmail}
          className="w-14 h-14 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 shadow-lg transition-all hover:scale-110"
          title="Share via Email"
        >
          <Mail size={24} />
        </button>
      </div>
    );
  }

  // Section position
  return (
    <section className="bg-gray-50 border-4 border-black p-8 rounded">
      <div className="flex items-center gap-3 mb-6">
        <Share2 size={24} />
        <h3 className="text-2xl font-bold">Share This</h3>
      </div>
      <p className="mb-6 text-gray-700">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <button
          onClick={shareOnTwitter}
          className="flex flex-col items-center gap-2 p-4 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors font-bold"
        >
          <Twitter size={24} />
          <span className="text-sm">Twitter</span>
        </button>
        <button
          onClick={shareOnFacebook}
          className="flex flex-col items-center gap-2 p-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-bold"
        >
          <Facebook size={24} />
          <span className="text-sm">Facebook</span>
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="flex flex-col items-center gap-2 p-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors font-bold"
        >
          <Linkedin size={24} />
          <span className="text-sm">LinkedIn</span>
        </button>
        <button
          onClick={shareViaEmail}
          className="flex flex-col items-center gap-2 p-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors font-bold"
        >
          <Mail size={24} />
          <span className="text-sm">Email</span>
        </button>
        <button
          onClick={copyLink}
          className="flex flex-col items-center gap-2 p-4 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors font-bold"
        >
          <Share2 size={24} />
          <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </section>
  );
}

export default SocialMediaSharing;
