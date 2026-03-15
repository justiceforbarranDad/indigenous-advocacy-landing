import { ReactNode } from 'react';

interface NewspaperLayoutProps {
  children: ReactNode;
  className?: string;
}

export function NewspaperLayout({ children, className = '' }: NewspaperLayoutProps) {
  return (
    <div className={`min-h-screen bg-cream text-charcoal ${className}`}>
      {/* Vintage newspaper border top */}
      <div className="bg-black h-1"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </div>

      {/* Vintage newspaper border bottom */}
      <div className="bg-black h-1 mt-12"></div>
      
      {/* Footer */}
      <footer className="bg-charcoal text-cream py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p className="font-serif italic">
            Sunday Bloody Sunday — Indigenous Justice Advocacy Platform
          </p>
          <p className="text-xs mt-2 text-cream/70">
            © 2026 Indigenous Justice Movement. All content protected under Charter s.2(b).
          </p>
        </div>
      </footer>
    </div>
  );
}
