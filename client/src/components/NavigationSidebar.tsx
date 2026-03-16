import { ChevronUp, Heart, Share2, BookOpen, Users, AlertCircle, Mail, Music, MessageSquare, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const sections = [
    {
      title: 'Support',
      links: [
        { label: 'Donate Now (e-Transfer)', href: 'mailto:support@justiceforbarran.org?subject=Donation%20Request' },
        { label: 'Donate via GoFundMe', href: '#' },
        { label: 'Share Your Story', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Resources & References', href: '#' },
        { label: 'Ghosted by a Politician?', href: '#' },
        { label: 'Children\'s Rights & Education', href: '#' },
        { label: 'International Legal Support', href: '#' },
        { label: 'Parents & Non-Profit', href: '#' },
        { label: 'Indigenous Nations & Languages', href: '#' },
      ],
    },
    {
      title: 'Our Story',
      links: [
        { label: 'The Trigger Event (Feb 27)', href: '#' },
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
        { label: 'Follow on X/Twitter', href: 'https://twitter.com/justiceforbarran' },
        { label: 'Follow on TikTok', href: 'https://tiktok.com/@justiceforbarran' },
        { label: 'Follow on Instagram', href: 'https://instagram.com/justiceforbarran' },
        { label: 'Join on Reddit', href: 'https://reddit.com/r/justiceforbarran' },
        { label: 'Contact via Email', href: 'mailto:contact@justiceforbarran.org' },
      ],
    },
    {
      title: 'Info',
      links: [
        { label: 'Contact & Accountability', href: '#' },
        { label: 'Credits & Acknowledgments', href: '#' },
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
