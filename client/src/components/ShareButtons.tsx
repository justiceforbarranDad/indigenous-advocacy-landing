import { Share2, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  videoTitle: string;
  videoUrl: string;
  hashtags?: string[];
}

export const ShareButtons = ({ videoTitle, videoUrl, hashtags = [] }: ShareButtonsProps) => {
  const [showCopied, setShowCopied] = useState(false);

  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}${videoUrl}`;
  const hashtag = hashtags.length > 0 ? ` ${hashtags.join(' ')}` : ' #JusticeForBarran #EveryChildMatters';

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out: ${videoTitle}${hashtag}`)}&url=${encodeURIComponent(fullUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(videoTitle)}&body=${encodeURIComponent(`Check out this video: ${videoTitle}\n\n${fullUrl}\n\n${hashtag}`)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="flex gap-2 items-center flex-wrap">
      <span className="text-sm font-semibold text-gray-600">Share:</span>
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 bg-blue-400 hover:bg-blue-500 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors"
        title="Share on Twitter"
      >
        <Twitter size={14} />
        <span className="hidden sm:inline">Tweet</span>
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors"
        title="Share on Facebook"
      >
        <Facebook size={14} />
        <span className="hidden sm:inline">Share</span>
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 bg-blue-700 hover:bg-blue-800 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin size={14} />
        <span className="hidden sm:inline">Share</span>
      </a>

      <a
        href={shareLinks.email}
        className="inline-flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors"
        title="Share via Email"
      >
        <Mail size={14} />
        <span className="hidden sm:inline">Email</span>
      </a>

      <button
        onClick={copyToClipboard}
        className="inline-flex items-center gap-1 bg-amber-orange hover:bg-amber-light text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors"
        title="Copy link to clipboard"
      >
        <Share2 size={14} />
        <span className="hidden sm:inline">{showCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
};
