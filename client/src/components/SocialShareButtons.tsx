import { Share2, MessageCircle, Mail, Link2 } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  text: string;
  url?: string;
  hashtags?: string[];
  showLabel?: boolean;
  variant?: 'horizontal' | 'vertical';
}

export function SocialShareButtons({
  title,
  text,
  url = typeof window !== 'undefined' ? window.location.href : '',
  hashtags = ['JusticeForBarran', 'IndigenousRights', 'EveryChildMatters'],
  showLabel = true,
  variant = 'horizontal'
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    twitter: () => {
      const tweetText = `${text} ${hashtags.map(tag => `#${tag}`).join(' ')}`;
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
    },
    facebook: () => {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    },
    linkedin: () => {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    },
    email: () => {
      return `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
    },
    whatsapp: () => {
      const message = `${text}\n\n${url}`;
      return `https://wa.me/?text=${encodeURIComponent(message)}`;
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerClass = variant === 'vertical' ? 'flex flex-col gap-2' : 'flex flex-wrap gap-2';
  const buttonClass = 'flex items-center gap-2 px-3 py-2 rounded border-2 border-black bg-black text-amber-50 hover:bg-gray-800 transition-colors font-bold text-sm';

  return (
    <div className={containerClass}>
      {showLabel && (
        <p className="text-xs font-bold tracking-widest uppercase mb-2 text-gray-700">
          📢 Share This Story
        </p>
      )}
      
      <a
        href={shareUrls.twitter()}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        title="Share on Twitter/X"
      >
        <MessageCircle size={16} />
        <span>X/Twitter</span>
      </a>

      <a
        href={shareUrls.facebook()}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        title="Share on Facebook"
      >
        <Share2 size={16} />
        <span>Facebook</span>
      </a>

      <a
        href={shareUrls.whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        title="Share on WhatsApp"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>

      <a
        href={shareUrls.email()}
        className={buttonClass}
        title="Share via Email"
      >
        <Mail size={16} />
        <span>Email</span>
      </a>

      <button
        onClick={copyToClipboard}
        className={buttonClass}
        title="Copy link to clipboard"
      >
        <Link2 size={16} />
        <span>{copied ? 'Copied!' : 'Copy Link'}</span>
      </button>
    </div>
  );
}
