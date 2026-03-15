import { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Heart, Share2, DollarSign } from 'lucide-react';
import { Link } from 'wouter';

export function QuickAccessButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    { icon: FileText, label: 'Resources', href: '/resources', color: 'bg-forest-green' },
    { icon: Heart, label: 'Share Story', href: '/share-story', color: 'bg-amber-orange' },
    { icon: DollarSign, label: 'Donate', href: '/donate', color: 'bg-red-600' },
  ];

  return (
    <div className="fixed top-6 right-6 z-40">
      {/* Quick Links Menu */}
      {isOpen && (
        <div className="absolute right-0 top-0 bg-white rounded-lg shadow-xl border-2 border-forest-green p-2 mb-2 min-w-max">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm font-semibold text-charcoal"
                >
                  <Icon size={18} className={link.color.replace('bg-', 'text-')} />
                  {link.label}
                </a>
              </Link>
            );
          })}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-forest-green hover:bg-forest-green/90 text-white rounded-full p-3 shadow-lg transition-all hover:shadow-xl flex items-center justify-center"
        title={isOpen ? 'Close quick access' : 'Open quick access'}
      >
        {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
    </div>
  );
}
