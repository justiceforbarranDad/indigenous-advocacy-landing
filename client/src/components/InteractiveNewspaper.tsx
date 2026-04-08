import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewspaperPage {
  id: number;
  title: string;
  content: React.ReactNode;
  columns?: number;
}

interface InteractiveNewspaperProps {
  pages: NewspaperPage[];
  masthead: string;
  tagline: string;
  date: string;
}

export function InteractiveNewspaper({
  pages,
  masthead,
  tagline,
  date
}: InteractiveNewspaperProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const page = pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Newspaper Container */}
        <div className="relative">
          {/* Paper Shadow Effect */}
          <div className="absolute inset-0 bg-black/30 rounded-lg blur-xl"></div>

          {/* Newspaper Page */}
          <div 
            className={`relative bg-amber-50 rounded-lg shadow-2xl overflow-hidden transition-all duration-500 ${
              isFlipping ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{
              perspective: '1000px',
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,.03) 2px,
                  rgba(0,0,0,.03) 4px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,.03) 2px,
                  rgba(0,0,0,.03) 4px
                )
              `,
              backgroundColor: '#faf8f3'
            }}
          >
            {/* Page Content */}
            <div className="p-8 md:p-12 min-h-screen flex flex-col">
              {/* Masthead (only on first page) */}
              {currentPage === 0 && (
                <div className="mb-8 pb-6 border-b-4 border-black text-center">
                  <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-700">Justice for Barran — Part 3</p>
                  <h1 
                    className="text-6xl md:text-8xl font-black tracking-widest mb-2" 
                    style={{ 
                      fontFamily: 'Georgia, serif',
                      letterSpacing: '0.15em',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
                    }}
                  >
                    {masthead}
                  </h1>
                  <div className="h-1 bg-black my-4 w-48 mx-auto"></div>
                  <p className="text-lg tracking-wide mb-2">{tagline}</p>
                  <p className="text-sm tracking-widest font-bold">{date}</p>
                </div>
              )}

              {/* Page Title (for non-front pages) */}
              {currentPage > 0 && (
                <div className="mb-6 pb-4 border-b-2 border-black">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-700 mb-2">
                    PAGE {currentPage + 1}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                    {page.title}
                  </h2>
                </div>
              )}

              {/* Page Content */}
              <div 
                className={`flex-1 ${page.columns === 2 ? 'grid grid-cols-2 gap-6' : 'grid grid-cols-1 gap-6'}`}
                style={{
                  columnCount: page.columns || 1,
                  columnGap: '2rem'
                }}
              >
                {page.content}
              </div>

              {/* Page Footer */}
              <div className="mt-8 pt-4 border-t-2 border-black flex justify-between items-center text-xs">
                <span className="font-bold">JUSTICE FOR BARRAN</span>
                <span className="font-bold">PAGE {currentPage + 1}</span>
                <span className="font-bold">{date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0 || isFlipping}
            className="flex items-center gap-2 px-6 py-3 bg-black text-amber-50 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-bold rounded transition-colors"
          >
            <ChevronLeft size={20} />
            Previous Page
          </button>

          {/* Page Indicator */}
          <div className="flex items-center gap-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isFlipping) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(idx);
                      setIsFlipping(false);
                    }, 400);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentPage
                    ? 'bg-amber-50 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === pages.length - 1 || isFlipping}
            className="flex items-center gap-2 px-6 py-3 bg-black text-amber-50 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-bold rounded transition-colors"
          >
            Next Page
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Page Counter */}
        <div className="mt-6 text-center text-amber-50">
          <p className="text-sm font-bold">
            Reading Page {currentPage + 1} of {pages.length}
          </p>
        </div>
      </div>
    </div>
  );
}
