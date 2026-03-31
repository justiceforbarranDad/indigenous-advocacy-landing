import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';

export function NewspaperMasthead() {
  const { t } = useTranslation();
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white border-b-4 border-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top bar with language toggle and date */}
        <div className="flex justify-between items-center mb-6 text-xs font-serif">
          <div className="flex-1"></div>
          <div className="text-center">
            <p className="font-bold">{dateStr}</p>
          </div>
          <div className="flex-1 flex justify-end">
            <LanguageToggle />
          </div>
        </div>

        {/* Masthead */}
        <div className="text-center border-y-4 border-black py-6">
          <h1 className="text-6xl md:text-8xl font-black font-serif tracking-tight leading-none mb-2">
            JUSTICE
          </h1>
          <h2 className="text-5xl md:text-7xl font-black font-serif tracking-tight leading-none mb-4">
            FOR BARRAN
          </h2>
          <p className="text-sm md:text-base font-serif italic text-gray-700 mb-3">
            Indigenous Justice Advocacy | Truth & Reconciliation | Systemic Change
          </p>
          <p className="text-xs font-bold tracking-widest">
            VOLUME 1 • ISSUE 1 • MARCH 2026
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center mt-4 border-t-2 border-black pt-4">
          <p className="text-lg md:text-xl font-serif italic font-bold text-gray-900">
            "When silence is complicity, naming becomes necessary."
          </p>
          <p className="text-xs mt-2 font-sans">
            Advocacy rooted in lived experience and urgency
          </p>
        </div>
      </div>
    </header>
  );
}
