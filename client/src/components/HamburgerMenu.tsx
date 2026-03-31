import { MoreVertical, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  // Hide menu on newspaper page for full-width reading
  if (location === '/newspaper' || location === '/newspaper-reader') {
    return null;
  }

  const sections = [
    {
      titleKey: 'menu.justiceForBarran',
      links: [
        { labelKey: 'menu.home', href: '/' },
        { labelKey: 'menu.story', href: '/timeline' },
        { labelKey: 'menu.readNewspaper', href: '/newspaper-reader' },
      ],
    },
    {
      titleKey: 'menu.takeAction',
      links: [
        { labelKey: 'menu.monthlyDonation', href: '/donate-recurring' },
        { labelKey: 'menu.donationHub', href: '/donation-hub' },
        { labelKey: 'menu.donateETransfer', href: '/donate-etransfer' },
        { labelKey: 'menu.donationImpact', href: '/donation-impact' },
        { labelKey: 'menu.signPetition', href: '/accountability-petition' },
        { labelKey: 'menu.shareStory', href: '/share-story' },
        { labelKey: 'menu.getAlerts', href: '/email-alerts' },
      ],
    },
    {
      titleKey: 'menu.learnMore',
      links: [
        { labelKey: 'menu.governmentAccountability', href: '/government-accountability' },
        { labelKey: 'menu.corporateAccountability', href: '/corporate-accountability' },
        { labelKey: 'menu.dpjAccountability', href: '/dpj-accountability' },
        { labelKey: 'menu.podcastEpisodes', href: '/podcast-hub' },
        { labelKey: 'menu.resources', href: '/resources' },
      ],
    },
    {
      titleKey: 'menu.connect',
      links: [
        { labelKey: 'menu.followTwitter', href: 'https://x.com/helpbarran?s=21' },
        { labelKey: 'menu.followInstagram', href: 'https://www.instagram.com/justiceforbarran' },
        { labelKey: 'menu.followFacebook', href: 'https://www.facebook.com/share/1JbsMBESqK/?mibextid=wwXIfr' },
        { labelKey: 'menu.contactUs', href: '/contact' },
      ],
    },
    {
      titleKey: 'menu.memorials',
      links: [
        { labelKey: 'menu.humanRightsActivists', href: '/obituaries' },
        { labelKey: 'menu.indigenousSoldiers', href: '/fallen-soldiers' },
        { labelKey: 'menu.mediaKit', href: '/media-kit' },
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
              <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-3">{t('menu.language')}</h4>
              <LanguageToggle />
            </div>
            
            {sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-3 border-b-3 border-black pb-2">
                  {t(section.titleKey)}
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
                        {t(link.labelKey)}
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
