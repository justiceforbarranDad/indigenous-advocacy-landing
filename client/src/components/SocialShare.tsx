import { Share2, Facebook, Mail } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  text: string;
  url?: string;
}

export function SocialShare({ title, text, url = typeof window !== 'undefined' ? window.location.href : '' }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${title}\n\n${text}\n\n#EveryChildMatters #JusticeForBarran #TruthAndReconciliation`;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(title)}`,
    tiktok: `https://www.tiktok.com/@barranneedsjustice`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm text-charcoal-light font-semibold">Share:</span>
      <div className="flex gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-amber-orange/10 hover:bg-amber-orange/20 text-amber-orange transition-colors"
          title="Share on X/Twitter"
        >
          <Share2 size={16} />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-amber-orange/10 hover:bg-amber-orange/20 text-amber-orange transition-colors"
          title="Share on Facebook"
        >
          <Facebook size={16} />
        </a>
        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-amber-orange/10 hover:bg-amber-orange/20 text-amber-orange transition-colors"
          title="Share on Reddit"
        >
          <Share2 size={16} />
        </a>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-amber-orange/10 hover:bg-amber-orange/20 text-amber-orange transition-colors"
          title="Copy to clipboard"
        >
          <Mail size={16} />
        </button>
        {copied && <span className="text-xs text-green-600 font-semibold">Copied!</span>}
      </div>
    </div>
  );
}
