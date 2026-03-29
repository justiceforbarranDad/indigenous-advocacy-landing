import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewspaperPage {
  id: string;
  pageNumber: number;
  title: string;
  content: React.ReactNode;
}

interface RealisticNewspaperReaderProps {
  pages: NewspaperPage[];
  title: string;
  subtitle?: string;
}

export function RealisticNewspaperReader({ pages, title, subtitle }: RealisticNewspaperReaderProps) {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalSpreads = Math.ceil(pages.length / 2);
  const leftPageIndex = currentSpread * 2;
  const rightPageIndex = currentSpread * 2 + 1;

  const leftPage = pages[leftPageIndex];
  const rightPage = pages[rightPageIndex];

  const handleNextSpread = () => {
    if (currentSpread < totalSpreads - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const handlePrevSpread = () => {
    if (currentSpread > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  return (
    <div className="w-full bg-black p-8 rounded-lg">
      {/* Newspaper Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-2 font-serif">{title}</h1>
        {subtitle && <p className="text-xl text-gray-300 font-serif italic">{subtitle}</p>}
        <div className="border-t-4 border-b-4 border-white mt-4 pt-4">
          <p className="text-white text-sm font-bold">March 29, 2026 | Justice for Barran - Part 3</p>
        </div>
      </div>

      {/* Newspaper Spread */}
      <div className="relative h-screen max-h-[600px] mb-8 perspective">
        <div className={`grid grid-cols-2 gap-8 h-full transition-all duration-500 ${isFlipping ? 'opacity-50' : 'opacity-100'}`}>
          {/* Left Page */}
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-2xl overflow-y-auto">
            {leftPage ? (
              <div>
                <div className="border-b-4 border-black pb-4 mb-6">
                  <p className="text-xs font-bold text-black mb-2">PAGE {leftPage.pageNumber}</p>
                  <h2 className="text-3xl font-bold text-black font-serif">{leftPage.title}</h2>
                </div>
                <div className="text-sm text-black leading-relaxed font-serif">
                  {leftPage.content}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 font-serif italic">End of newspaper</p>
              </div>
            )}
          </div>

          {/* Right Page */}
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-2xl overflow-y-auto">
            {rightPage ? (
              <div>
                <div className="border-b-4 border-black pb-4 mb-6">
                  <p className="text-xs font-bold text-black mb-2">PAGE {rightPage.pageNumber}</p>
                  <h2 className="text-3xl font-bold text-black font-serif">{rightPage.title}</h2>
                </div>
                <div className="text-sm text-black leading-relaxed font-serif">
                  {rightPage.content}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 font-serif italic">End of newspaper</p>
              </div>
            )}
          </div>
        </div>

        {/* Page Flip Shadow Effect */}
        {isFlipping && (
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20 pointer-events-none rounded-lg" />
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevSpread}
          disabled={currentSpread === 0}
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-lg border-2 border-white transition-all ${
            currentSpread === 0
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <div className="text-white text-center">
          <p className="font-bold">
            Spread {currentSpread + 1} of {totalSpreads}
          </p>
          <p className="text-sm text-gray-400">
            Pages {leftPageIndex + 1}-{Math.min(rightPageIndex + 1, pages.length)}
          </p>
        </div>

        <button
          onClick={handleNextSpread}
          disabled={currentSpread === totalSpreads - 1}
          className={`flex items-center gap-2 px-6 py-3 font-bold rounded-lg border-2 border-white transition-all ${
            currentSpread === totalSpreads - 1
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Page Indicator Dots */}
      <div className="flex justify-center gap-2 flex-wrap">
        {Array.from({ length: totalSpreads }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsFlipping(true);
              setTimeout(() => {
                setCurrentSpread(idx);
                setIsFlipping(false);
              }, 400);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSpread ? 'bg-white w-8' : 'bg-gray-500 hover:bg-gray-400'
            }`}
            title={`Go to spread ${idx + 1}`}
          />
        ))}
      </div>

      {/* Print Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-white text-black font-bold rounded-lg border-2 border-white hover:bg-gray-200 transition-colors"
        >
          Print Newspaper
        </button>
      </div>
    </div>
  );
}
