import React from 'react';

/**
 * Newspaper-style layout components for the advocacy platform
 * Inspired by classic print journalism with modern web accessibility
 */

interface NewspaperHeaderProps {
  title: string;
  subtitle?: string;
  date: string;
  masthead?: string;
}

export function NewspaperHeader({ title, subtitle, date, masthead = "JUSTICE FOR BARRAN" }: NewspaperHeaderProps) {
  return (
    <div className="border-4 border-black bg-white p-6 mb-6 print:border-2">
      {/* Masthead */}
      <div className="text-center border-b-4 border-black pb-4 mb-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          {masthead}
        </h1>
        <p className="text-xs tracking-widest mt-2 font-bold">SUNDAY BLOODY SUNDAY • PART TWO</p>
      </div>

      {/* Main Headline */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-4xl font-black leading-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg italic text-gray-700 mb-3">{subtitle}</p>
        )}
      </div>

      {/* Publication Info */}
      <div className="flex justify-between items-center text-xs font-bold border-t-2 border-black pt-2">
        <span>Published: {date}</span>
        <span>MARCH 28, 2026</span>
        <span>Celebrating Barran's 20th Birthday</span>
      </div>
    </div>
  );
}

interface ArticleProps {
  headline: string;
  byline?: string;
  date?: string;
  children: React.ReactNode;
  featured?: boolean;
}

export function NewsArticle({ headline, byline, date, children, featured = false }: ArticleProps) {
  return (
    <article className={`mb-8 ${featured ? 'border-4 border-black p-6 bg-gray-50' : 'border-l-4 border-black pl-6'}`}>
      <h3 className={`font-black mb-2 ${featured ? 'text-3xl' : 'text-2xl'}`} style={{ fontFamily: 'Georgia, serif' }}>
        {headline}
      </h3>
      {byline && (
        <p className="text-sm font-bold italic mb-2">By {byline}</p>
      )}
      {date && (
        <p className="text-xs text-gray-600 mb-4">{date}</p>
      )}
      <div className="text-justify leading-relaxed" style={{ columnCount: featured ? 2 : 1 }}>
        {children}
      </div>
    </article>
  );
}

interface ObituaryProps {
  name: string;
  title: string;
  birthYear: number;
  deathYear: number;
  imageUrl?: string;
  achievements: string[];
  legacy: string;
}

export function Obituary({ name, title, birthYear, deathYear, imageUrl, achievements, legacy }: ObituaryProps) {
  return (
    <div className="border-4 border-black p-6 bg-white mb-6">
      <div className="flex gap-6 mb-4">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-32 h-40 object-cover border-2 border-black"
          />
        )}
        <div className="flex-1">
          <h3 className="text-3xl font-black mb-1" style={{ fontFamily: 'Georgia, serif' }}>
            {name}
          </h3>
          <p className="text-lg italic mb-3">{title}</p>
          <p className="text-sm font-bold mb-4">
            {birthYear} – {deathYear}
          </p>
        </div>
      </div>

      <div className="border-t-2 border-black pt-4">
        <h4 className="font-bold text-sm mb-2 uppercase">ACHIEVEMENTS</h4>
        <ul className="text-sm mb-4 space-y-1">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="font-bold">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-bold text-sm mb-2 uppercase">LEGACY</h4>
        <p className="text-sm leading-relaxed text-justify">{legacy}</p>
      </div>
    </div>
  );
}

interface MemorialProps {
  name: string;
  rank: string;
  birthYear: number;
  deathYear: number;
  unit: string;
  service: string;
  sacrifice: string;
}

export function SoldierMemorial({ name, rank, birthYear, deathYear, unit, service, sacrifice }: MemorialProps) {
  return (
    <div className="border-2 border-black p-4 bg-gray-100 mb-4 relative">
      <div className="absolute top-2 right-2 text-6xl opacity-10 font-black">✦</div>
      
      <h4 className="text-xl font-black mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        {rank} {name}
      </h4>
      <p className="text-sm font-bold mb-2">{unit}</p>
      <p className="text-xs mb-3">
        <span className="font-bold">{birthYear}</span> – <span className="font-bold">{deathYear}</span>
      </p>
      
      <p className="text-sm mb-2">
        <span className="font-bold">Service:</span> {service}
      </p>
      <p className="text-sm italic">
        "{sacrifice}"
      </p>
    </div>
  );
}

interface ColumnLayoutProps {
  columns?: number;
  children: React.ReactNode;
}

export function ColumnLayout({ columns = 2, children }: ColumnLayoutProps) {
  return (
    <div style={{ columnCount: columns, columnGap: '2rem' }} className="text-justify">
      {children}
    </div>
  );
}
