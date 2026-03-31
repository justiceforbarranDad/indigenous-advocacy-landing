import React, { ReactNode } from 'react';

interface NewspaperLayoutProps {
  title: string;
  subtitle: string;
  date: string;
  language: 'en' | 'fr';
  children: ReactNode;
  accentColor?: 'red' | 'amber' | 'black' | 'blue';
  mastHeadColor?: 'black' | 'charcoal' | 'navy';
}

export const NewspaperLayout: React.FC<NewspaperLayoutProps> = ({
  title,
  subtitle,
  date,
  language,
  children,
  accentColor = 'amber',
  mastHeadColor = 'black'
}) => {
  const accentClasses: Record<string, string> = {
    red: 'border-red-600 bg-red-50',
    amber: 'border-amber-600 bg-amber-50',
    black: 'border-black bg-gray-50',
    blue: 'border-blue-600 bg-blue-50'
  };

  const mastHeadClasses: Record<string, string> = {
    black: 'bg-black text-white',
    charcoal: 'bg-gray-900 text-white',
    navy: 'bg-blue-900 text-white'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* MASTHEAD */}
      <div className={`w-full ${mastHeadClasses[mastHeadColor]} py-8 px-6 border-b-8 border-black`}>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">{title}</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">{subtitle}</p>
          <p className="text-xs md:text-sm tracking-widest">{date}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {children}
      </div>

      {/* FOOTER */}
      <div className={`w-full border-t-8 border-black ${accentClasses[accentColor]} py-8 px-6`}>
        <div className="max-w-5xl mx-auto text-center text-sm">
          <p className="font-bold mb-2">McGovern Institute for Human Rights and Canadian Rights</p>
          <p className="text-gray-600">
            {language === 'en' 
              ? 'Founded through the Justice for Barran Campaign | Fighting for systemic change'
              : 'Fondé par la campagne Justice pour Barran | Combattre le changement systémique'}
          </p>
        </div>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: ReactNode;
  bgColor?: 'white' | 'gray' | 'accent';
  accentBorder?: boolean;
}

export const NewspaperSection: React.FC<SectionProps> = ({
  title,
  children,
  bgColor = 'white',
  accentBorder = false
}) => {
  const bgClasses: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50 border-b-4 border-black',
    accent: 'bg-red-600 text-white border-b-4 border-black'
  };

  return (
    <section className={`py-12 px-6 ${bgClasses[bgColor]} ${accentBorder ? 'border-l-4 border-amber-600' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
};

interface LanguageToggleProps {
  language: 'en' | 'fr';
  onLanguageChange: (lang: 'en' | 'fr') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onLanguageChange
}) => {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-4 py-2 font-bold text-sm ${
          language === 'en'
            ? 'bg-black text-white'
            : 'bg-white text-black border-2 border-black'
        }`}
      >
        🇬🇧 ENGLISH
      </button>
      <button
        onClick={() => onLanguageChange('fr')}
        className={`px-4 py-2 font-bold text-sm ${
          language === 'fr'
            ? 'bg-black text-white'
            : 'bg-white text-black border-2 border-black'
        }`}
      >
        🇫🇷 FRANÇAIS
      </button>
    </div>
  );
};
