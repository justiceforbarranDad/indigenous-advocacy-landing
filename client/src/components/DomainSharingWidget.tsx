import { Copy, Check, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface DomainSharingWidgetProps {
  title?: string;
  description?: string;
  showLabel?: boolean;
}

export function DomainSharingWidget({
  title = "Share the Right Domain",
  description = "Choose your preferred domain to share with supporters",
  showLabel = true
}: DomainSharingWidgetProps) {
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  const domains = [
    {
      name: 'Canada (.ca)',
      url: 'https://www.justiceforbarran.ca',
      icon: '🍁',
      description: 'Primary Canadian domain'
    },
    {
      name: 'International (.com)',
      url: 'https://www.justiceforbarran.com',
      icon: '🌍',
      description: 'Global reach'
    }
  ];

  const copyToClipboard = (url: string, domain: string) => {
    navigator.clipboard.writeText(url);
    setCopiedDomain(domain);
    setTimeout(() => setCopiedDomain(null), 2000);
  };

  const shareToSocial = (url: string, domain: string) => {
    const text = `Support Justice for Barran's campaign for Indigenous rights and accountability. Visit us at ${url} #JusticeForBarran #EveryChildMatters`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="space-y-4">
      {showLabel && (
        <div>
          <h3 className="text-2xl font-bold text-forest-green mb-2">{title}</h3>
          <p className="text-charcoal-light">{description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="bg-white border-2 border-amber-orange rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{domain.icon}</span>
              <div>
                <h4 className="font-bold text-forest-green">{domain.name}</h4>
                <p className="text-xs text-charcoal-light">{domain.description}</p>
              </div>
            </div>

            {/* URL Display */}
            <div className="bg-gray-50 p-3 rounded mb-4 break-all">
              <p className="text-sm font-mono text-charcoal">{domain.url}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={() => copyToClipboard(domain.url, domain.name)}
                className="flex-1 bg-forest-green hover:bg-forest-green/90 text-white text-sm py-2"
              >
                {copiedDomain === domain.name ? (
                  <>
                    <Check size={16} className="mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-1" />
                    Copy
                  </>
                )}
              </Button>
              <Button
                onClick={() => shareToSocial(domain.url, domain.name)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2"
              >
                Share
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Share Buttons */}
      <div className="bg-amber-orange/5 border-2 border-amber-orange rounded-lg p-6 mt-6">
        <h4 className="font-bold text-forest-green mb-4">📱 Share All Domains</h4>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              const text = `Support Justice for Barran's campaign across all platforms:\n\n🍁 Canada: https://www.justiceforbarran.ca\n🌍 International: https://www.justiceforbarran.com\n\n\n#JusticeForBarran #EveryChildMatters`;
              const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
              window.open(twitterUrl, '_blank');
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold"
          >
            Tweet All Links
          </Button>
          <Button
            onClick={() => {
              const text = `Support Justice for Barran's campaign across all platforms:\n\n🍁 Canada: https://www.justiceforbarran.ca\n🌍 International: https://www.justiceforbarran.com\n\n\n#JusticeForBarran #EveryChildMatters`;
              const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.justiceforbarran.com')}`;
              window.open(facebookUrl, '_blank');
            }}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm font-semibold"
          >
            Share on Facebook
          </Button>
          <Button
            onClick={() => {
              const text = `Support Justice for Barran's campaign across all platforms:\n\n🍁 Canada: https://www.justiceforbarran.ca\n🌍 International: https://www.justiceforbarran.com\n\n\n#JusticeForBarran #EveryChildMatters`;
              const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold"
          >
            Share on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
