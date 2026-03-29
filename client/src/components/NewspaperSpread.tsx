import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, BookOpen } from 'lucide-react';
import { InteractiveHighlight, HighlightData } from './InteractiveHighlight';

interface PageContent {
  id: number;
  title: string;
  leftPage: {
    headline: string;
    image?: string;
    content: string;
    section: string;
  };
  rightPage: {
    headline: string;
    image?: string;
    content: string;
    section: string;
  };
}

interface NewspaperSpreadProps {
  pages: PageContent[];
  title?: string;
  date?: string;
  highlights?: HighlightData[];
}

function renderHighlightedText(text: string, highlights?: HighlightData[]): React.ReactNode {
  if (!highlights || highlights.length === 0) return text;

  let lastIndex = 0;
  const elements: React.ReactNode[] = [];

  const sortedHighlights = [...highlights].sort((a, b) => {
    const aIndex = text.indexOf(a.text);
    const bIndex = text.indexOf(b.text);
    return aIndex - bIndex;
  });

  sortedHighlights.forEach((highlight) => {
    const index = text.indexOf(highlight.text, lastIndex);
    if (index !== -1) {
      if (index > lastIndex) {
        elements.push(text.substring(lastIndex, index));
      }
      elements.push(
        <InteractiveHighlight key={highlight.id} highlight={highlight}>
          {highlight.text}
        </InteractiveHighlight>
      );
      lastIndex = index + highlight.text.length;
    }
  });

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <span>{elements}</span>;
}

export function NewspaperSpread({ pages, title = 'JUSTICE FOR BARRAN', date = 'MARCH 29, 2026', highlights }: NewspaperSpreadProps) {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const maxSpreads = Math.ceil(pages.length / 2);

  const handleNextPage = () => {
    if (currentSpread < maxSpreads - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handlePrevPage = () => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = currentSpread * 2 + 1;
  const leftPage = pages[leftPageIndex] || null;
  const rightPage = pages[rightPageIndex] || null;

  const containerClass = isFullscreen 
    ? 'fixed inset-0 z-50 bg-black flex flex-col' 
    : 'w-full bg-black rounded-lg overflow-hidden';

  return (
    <div className={containerClass}>
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black p-4 flex justify-between items-center border-b-2 border-gray-700">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">{title}</h1>
          <p className="text-xs md:text-sm text-gray-400 text-center">{date}</p>
        </div>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 hover:bg-gray-800 rounded transition-colors ml-4"
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? (
            <Minimize2 size={24} className="text-white" />
          ) : (
            <Maximize2 size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Newspaper Spread */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className={`w-full max-w-6xl aspect-[8.5/11] md:aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-600 ${isFlipping ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="h-full flex">
              {/* Left Page */}
              <div className="flex-1 border-r-4 border-gray-300 p-6 md:p-8 overflow-y-auto bg-gradient-to-br from-white to-gray-50">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {leftPage?.leftPage?.section}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black leading-tight">
                    {leftPage?.leftPage?.headline}
                  </h2>
              {leftPage?.leftPage?.image && (
                <img 
                  src={leftPage.leftPage.image} 
                  alt={leftPage.leftPage.headline}
                      className="w-full h-40 md:h-48 object-cover rounded border-2 border-gray-300"
                    />
                  )}
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {renderHighlightedText(leftPage?.leftPage?.content || '', highlights)}
                  </p>
                </div>
              </div>

              {/* Right Page */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-gradient-to-bl from-white to-gray-50">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {rightPage?.rightPage?.section}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black leading-tight">
                    {rightPage?.rightPage?.headline}
                  </h2>
                  {rightPage?.rightPage?.image && (
                    <img 
                      src={rightPage.rightPage.image} 
                      alt={rightPage.rightPage.headline}
                      className="w-full h-40 md:h-48 object-cover rounded border-2 border-gray-300"
                    />
                  )}
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {renderHighlightedText(rightPage?.rightPage?.content || '', highlights)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gradient-to-t from-gray-900 to-black p-4 border-t-2 border-gray-700 flex justify-between items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentSpread === 0 || isFlipping}
            className="p-3 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
            title="Previous page"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-gray-400" />
            <span className="text-gray-300 font-mono text-sm">
              Page {leftPageIndex + 1}–{Math.min(rightPageIndex + 1, pages.length)} of {pages.length}
            </span>
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentSpread >= maxSpreads - 1 || isFlipping}
            className="p-3 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
            title="Next page"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>

        {/* Page Thumbnails */}
        <div className="bg-black border-t-2 border-gray-700 p-3 overflow-x-auto">
          <div className="flex gap-2 min-w-min">
            {Array.from({ length: maxSpreads }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => !isFlipping && setCurrentSpread(idx)}
                className={`flex-shrink-0 w-16 h-20 rounded border-2 transition-all ${
                  idx === currentSpread
                    ? 'border-amber-400 bg-amber-400/20'
                    : 'border-gray-600 hover:border-gray-400 bg-gray-800'
                }`}
                title={`Go to pages ${idx * 2 + 1}–${Math.min((idx + 1) * 2, pages.length)}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-300">
                    {idx * 2 + 1}–{Math.min((idx + 1) * 2, pages.length)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
