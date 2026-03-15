interface NewspaperHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
  byline?: string;
  section?: string;
}

export function NewspaperHeader({
  title,
  subtitle,
  date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  byline,
  section,
}: NewspaperHeaderProps) {
  return (
    <div className="bg-cream border-y-4 border-black py-8 px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Masthead */}
        <div className="text-center mb-6 pb-6 border-b-2 border-black">
          <div className="text-xs font-bold tracking-widest text-charcoal mb-2">
            SUNDAY BLOODY SUNDAY — INDIGENOUS JUSTICE ADVOCACY
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-black mb-2 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-2xl md:text-3xl font-serif italic text-charcoal mb-4">
              {subtitle}
            </p>
          )}
        </div>

        {/* Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-charcoal/70 font-mono">
          <div className="flex gap-4 mb-2 md:mb-0">
            {section && (
              <span className="font-bold text-forest-green uppercase">{section}</span>
            )}
            <span>{date}</span>
          </div>
          {byline && (
            <span className="italic">By {byline}</span>
          )}
        </div>
      </div>
    </div>
  );
}
