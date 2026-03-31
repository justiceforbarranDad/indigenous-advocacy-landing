import { useTranslation } from 'react-i18next';

export interface ArticleCardProps {
  headline: string;
  subheadline?: string;
  excerpt: string;
  image?: string;
  byline?: string;
  date?: string;
  section?: string;
  featured?: boolean;
  columns?: 1 | 2 | 3;
}

export function NewspaperArticleCard({
  headline,
  subheadline,
  excerpt,
  image,
  byline,
  date,
  section,
  featured = false,
  columns = 1
}: ArticleCardProps) {
  const { t } = useTranslation();

  const colClass = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3'
  }[columns];

  return (
    <article className={`${colClass} border-2 border-black p-4 ${featured ? 'bg-gray-100' : 'bg-white'}`}>
      {section && (
        <div className="text-xs font-bold uppercase tracking-widest mb-2 text-red-600">
          {section}
        </div>
      )}

      <h3 className={`font-serif font-black leading-tight mb-2 ${featured ? 'text-4xl' : 'text-2xl'}`}>
        {headline}
      </h3>

      {subheadline && (
        <h4 className="font-serif italic text-lg text-gray-700 mb-3">
          {subheadline}
        </h4>
      )}

      {image && (
        <div className="mb-3 border-2 border-black overflow-hidden">
          <img
            src={image}
            alt={headline}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      <p className="font-serif text-base leading-relaxed mb-3">
        {excerpt}
      </p>

      <div className="flex justify-between items-center text-xs font-sans">
        {byline && <span className="font-bold">{byline}</span>}
        {date && <span className="text-gray-600">{date}</span>}
      </div>
    </article>
  );
}
