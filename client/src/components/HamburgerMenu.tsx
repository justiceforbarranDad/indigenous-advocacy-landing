import { MoreVertical, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { LanguageToggle } from './LanguageToggle';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Hide menu on newspaper page for full-width reading
  if (location === '/newspaper' || location === '/newspaper-reader') {
    return null;
  }

  const sections = [
    {
      title: '🏠 JUSTICE FOR BARRAN',
      links: [
        { label: 'Home', href: '/' },
        { label: 'The Story (Timeline)', href: '/timeline' },
        { label: 'Read Newspaper', href: '/newspaper-reader' },
      ],
    },
    {
      title: '💪 TAKE ACTION',
      links: [
        { label: 'Monthly Recurring Donation', href: '/donate-recurring' },
        { label: 'Donation Hub (All Methods)', href: '/donation-hub' },
        { label: 'Donate via e-Transfer', href: '/donate-etransfer' },
        { label: 'See Donation Impact', href: '/donation-impact' },
        { label: 'Sign Petition', href: '/accountability-petition' },
        { label: 'Share Your Story', href: '/share-story' },
        { label: 'Get Alerts', href: '/email-alerts' },
      ],
    },
    {
      title: '📚 LEARN MORE',
      links: [
        { label: 'Government Accountability', href: '/government-accountability' },
        { label: 'Corporate Accountability', href: '/corporate-accountability' },
        { label: 'DPJ Accountability', href: '/dpj-accountability' },
        { label: 'Podcast Episodes', href: '/podcast-hub' },
        { label: 'Resources & References', href: '/resources' },
      ],
    },
    {
      title: '🤝 CONNECT',
      links: [
        { label: 'Follow on Twitter/X', href: 'https://x.com/helpbarran?s=21' },
        { label: 'Follow on Instagram', href: 'https://www.instagram.com/justiceforbarran' },
        { label: 'Follow on Facebook', href: 'https://www.facebook.com/share/1JbsMBESqK/?mibextid=wwXIfr' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: '🕯️ MEMORIALS',
      links: [
        { label: 'Human Rights Activists', href: '/obituaries' },
        { label: 'Indigenous Soldiers', href: '/fallen-soldiers' },
        { label: 'Media Kit', href: '/media-kit' },
      ],
    },
  ];

  return (
    <>
      {/* 3-Dot Menu Button - Top Right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-black hover:bg-gray-800 rounded-lg transition-all border-3 border-black shadow-lg hover:shadow-xl transform hover:scale-110"
        aria-label="Toggle menu"
        title="Menu"
      >
        {isOpen ? (
          <X size={32} className="text-white" />
        ) : (
          <MoreVertical size={32} className="text-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-16 right-4 z-40 bg-white rounded-lg shadow-2xl border-4 border-black w-80 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Language Toggle */}
            <div className="border-b-3 border-black pb-4">
              <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-3">🌐 Language</h4>
              <LanguageToggle />
            </div>
            
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-3 border-b-3 border-black pb-2">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => setIsOpen(false)}
                        className="text-base text-black hover:font-bold hover:bg-gray-100 transition-colors block py-2 px-2 rounded hover:pl-3"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
