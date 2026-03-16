import { ChevronUp, Heart, Share2, BookOpen, Users, AlertCircle, Mail, Music, MessageSquare, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    {
      title: 'Support',
      links: [
        { label: 'Donate Now (e-Transfer)', href: '/donate-etransfer' },
        { label: 'Donate via GoFundMe', href: 'https://www.gofundme.com/f/justice-for-barran' },
        { label: 'Share Your Story', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resources & References', href: '/resources' },
        { label: 'Ghosted by a Politician?', href: '/ghosted-by-politician' },
        { label: 'Children\'s Rights & Education', href: '/childrens-rights' },
        { label: 'International Legal Support', href: '/international-legal' },
        { label: 'Parents & Non-Profit', href: '/parents-nonprofits' },
        { label: 'Indigenous Nations & Languages', href: '/indigenous-nations' },
      ],
    },
    {
      title: 'Our Story',
      links: [
        { label: 'The Trigger Event (Feb 27)', href: '/trigger-event' },
        { label: 'Barran\'s Story (Feb 14, 2021)', href: '#' },
        { label: 'Mother\'s Abuse & DPJ Failure', href: '#' },
        { label: 'DPJ Accountability', href: '/dpj-accountability' },
        { label: 'Systemic Failures', href: '/systemic-failures' },
        { label: 'Accountability Tracker', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Follow on X/Twitter', href: 'https://x.com/helpbarran?s=21' },
        { label: 'Follow on TikTok', href: 'https://www.tiktok.com/@barranneedsjustice' },
        { label: 'Follow on Instagram', href: 'https://www.instagram.com/justiceforbarran' },
        { label: 'Follow on Facebook', href: 'https://www.facebook.com/share/1JbsMBESqK/?mibextid=wwXIfr' },
        { label: 'Contact via Email', href: 'mailto:contact@justiceforbarran.org' },
      ],
    },
    {
      title: 'Info',
      links: [
        { label: 'Contact & Accountability', href: '/contact' },
        { label: 'Credits & Acknowledgments', href: '/credits' },
      ],
    },
  ];

  return (
    <div className={`fixed right-0 top-0 h-screen bg-gradient-to-b from-forest-green to-forest-green/90 text-cream shadow-2xl transition-all duration-300 z-40 ${isOpen ? 'w-72' : 'w-16'} overflow-hidden`}>
      {/* Header */}
      <div className="p-4 border-b border-amber-light/30 flex items-center justify-between">
        {isOpen && <h3 className="font-bold text-amber-light text-sm">Navigation</h3>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-amber-orange/20 rounded-lg transition-colors"
        >
          <ChevronUp size={18} className={`transition-transform ${isOpen ? '' : 'rotate-180'}`} />
        </button>
      </div>

      {/* Content */}
      <div className={`overflow-y-auto h-[calc(100vh-70px)] ${isOpen ? 'px-4 py-6' : 'px-2 py-4'}`}>
        {isOpen ? (
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-amber-light text-xs uppercase tracking-wider mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-xs text-cream hover:text-amber-light transition-colors block py-1 hover:pl-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 pt-4">
            <Heart size={16} className="text-amber-light" />
            <Share2 size={16} className="text-amber-light" />
            <BookOpen size={16} className="text-amber-light" />
            <Users size={16} className="text-amber-light" />
            <AlertCircle size={16} className="text-amber-light" />
            <Mail size={16} className="text-amber-light" />
            <Twitter size={16} className="text-amber-light" />
            <Instagram size={16} className="text-amber-light" />
          </div>
        )}
      </div>
    </div>
  );
}
