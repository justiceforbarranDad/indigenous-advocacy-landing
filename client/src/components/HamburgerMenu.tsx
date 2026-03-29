import { MoreVertical, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Hide menu on newspaper page for full-width reading
  if (location === '/newspaper') {
    return null;
  }

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
        { label: 'French Podcast 🎙️', href: '/french-podcast' },
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
      title: 'Memorials',
      links: [
        { label: 'Interactive Newspaper', href: '/newspaper' },
        { label: 'Issue Archive', href: '/issue-archive' },
        { label: 'Human Rights Activists', href: '/obituaries' },
        { label: 'Indigenous Soldiers', href: '/fallen-soldiers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Sponsorship & Pro Bono Legal', href: '/sponsorship' },
        { label: 'Corporate Accountability', href: '/corporate-accountability' },
        { label: 'Accountability Petition', href: '/accountability-petition' },
        { label: 'Contact & Accountability', href: '/contact' },
        { label: 'Credits & Acknowledgments', href: '/credits' },
      ],
    },
  ];

  return (
    <>
      {/* 3-Dot Menu Button - Top Right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors border-2 border-black"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={28} className="text-black" />
        ) : (
          <MoreVertical size={28} className="text-black" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-16 right-4 z-40 bg-white rounded-lg shadow-2xl border-4 border-black w-72 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="p-6 space-y-6">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-black text-xs uppercase tracking-wider mb-3 border-b-2 border-black pb-2">
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
                        className="text-sm text-black hover:font-bold transition-colors block py-1 hover:pl-1"
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
