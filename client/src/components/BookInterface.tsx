import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TheSilenceClock from './TheSilenceClock';
import { JukeboxPlayer } from './JukeboxPlayer';

interface BookInterfaceProps {
  onClose: () => void;
}

export function BookInterface({ onClose }: BookInterfaceProps) {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: 'SILENCE CLOCK',
      left: <TheSilenceClock />,
      right: (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-2xl font-black text-red-600 mb-4">1875+ DAYS</p>
          <p className="text-gray-600">Since February 14, 2021</p>
          <p className="text-sm text-gray-500 mt-4">Government Silence & Inaction</p>
        </div>
      ),
    },
    {
      title: 'PODCAST EPISODES',
      left: <JukeboxPlayer />,
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-gray-50">
          <p className="text-xl font-bold text-gray-800 mb-4">6 Full Episodes</p>
          <p className="text-gray-600">English • Français • Kreyòl</p>
          <p className="text-sm text-gray-500 mt-4">Listen to the complete story</p>
        </div>
      ),
    },
    {
      title: 'DONATIONS',
      left: (
        <div className="flex flex-col items-center justify-center h-full bg-green-50">
          <h3 className="text-2xl font-black text-green-900 mb-4">💚 Click to Pay</h3>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {[5, 10, 20, 50, 100].map((amount) => (
              <button
                key={amount}
                className="py-2 px-1 bg-green-600 text-white rounded font-bold text-sm hover:bg-green-700"
              >
                ${amount}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-600">Direct Interac e-Transfer</p>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-purple-50">
          <h3 className="text-2xl font-black text-purple-900 mb-4">💳 Credit Cards</h3>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {[5, 10, 20, 50, 100].map((amount) => (
              <button
                key={amount}
                className="py-2 px-1 bg-purple-600 text-white rounded font-bold text-sm hover:bg-purple-700"
              >
                ${amount}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-600">Visa, Mastercard, Amex</p>
        </div>
      ),
    },
    {
      title: 'POLITICAL HYPOCRISY: EAT HEALTHY',
      left: (
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/caricature-water-crisis-1-CZc7NH2hcC66YhQoWLkmC8.webp" alt="Eat Healthy" className="w-full h-full object-cover" />
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-yellow-50 p-4">
          <p className="text-xl font-black text-yellow-900 text-center mb-4">Politicians preach 'Eat Healthy!'</p>
          <p className="text-gray-700 text-center text-sm">While Rez communities have NO CLEAN WATER for decades</p>
          <p className="text-red-600 font-bold mt-4">⚠️ HYPOCRISY EXPOSED ⚠️</p>
        </div>
      ),
    },
    {
      title: 'BILLIONS FOR EVERYONE BUT REZ',
      left: (
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/caricature-water-crisis-2-9VaZcD94aE6Cgw9VTMV7nz.webp" alt="Money Tree" className="w-full h-full object-cover" />
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-green-50 p-4">
          <p className="text-xl font-black text-green-900 text-center mb-4">Billions flowing to:</p>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>✈️ Overseas aid</li>
            <li>🏢 Brookfield & corporate friends</li>
            <li>🏠 Wealthy neighborhoods</li>
            <li>❌ Rez gets: NOTHING</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'DECADES OF BROKEN PROMISES',
      left: (
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/caricature-water-crisis-3-L7QowaCQR9PhLqGt89wXBv.webp" alt="Broken Promises" className="w-full h-full object-cover" />
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-red-50 p-4">
          <p className="text-xl font-black text-red-900 text-center mb-4">Same Promise, Different Suit</p>
          <p className="text-gray-700 text-center text-sm">2000s: "We'll fix it!"</p>
          <p className="text-gray-700 text-center text-sm">2010s: "We'll fix it!"</p>
          <p className="text-gray-700 text-center text-sm">2020s: "We'll fix it!"</p>
          <p className="text-red-600 font-bold mt-4">20+ YEARS OF LIES</p>
        </div>
      ),
    },
    {
      title: 'WE DESERVE CLEAN WATER NOW',
      left: (
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/caricature-water-crisis-4-ASSeqkC9a33VW3jtJGeJ5Q.webp" alt="Action Now" className="w-full h-full object-cover" />
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-blue-50 p-4">
          <p className="text-2xl font-black text-blue-900 text-center mb-4">💪 ACTION NOT WORDS</p>
          <p className="text-gray-700 text-center text-sm mb-4">Kids demanding accountability</p>
          <p className="text-blue-600 font-bold">✓ Vote them out</p>
          <p className="text-blue-600 font-bold">✓ Demand real action</p>
          <p className="text-blue-600 font-bold">✓ Hold them accountable</p>
        </div>
      ),
    },
    {
      title: 'CONTACT',
      left: (
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <a href="mailto:contact@justiceforbarran.com" className="text-blue-600 hover:underline font-semibold">
            contact@justiceforbarran.com
          </a>
          <p className="text-sm text-gray-500 mt-4">justiceforbarran.com</p>
        </div>
      ),
      right: (
        <div className="flex flex-col items-center justify-center h-full bg-red-50">
          <p className="text-xl font-black text-red-600 mb-4">KNOW YOUR RIGHTS</p>
          <p className="text-center text-gray-600 text-sm">
            Every child deserves justice and protection
          </p>
        </div>
      ),
    },
  ];

  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < pages.length - 1;

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 px-4">
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold"
      >
        ✕ Close
      </button>

      {/* BOOK CONTAINER */}
      <div className="max-w-6xl mx-auto">
        {/* PAGE TITLE */}
        <h2 className="text-center text-3xl font-black text-white mb-8">
          {pages[currentPage].title}
        </h2>

        {/* DOUBLE-PAGE SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* LEFT PAGE */}
          <div className="p-8 bg-white border-r-4 border-gray-300 min-h-96 flex items-center justify-center">
            {pages[currentPage].left}
          </div>

          {/* RIGHT PAGE */}
          <div className="p-8 bg-gray-50 min-h-96 flex items-center justify-center">
            {pages[currentPage].right}
          </div>
        </div>

        {/* PAGE COUNTER */}
        <div className="text-center mb-8">
          <p className="text-white text-lg font-semibold">
            Page {currentPage + 1} of {pages.length}
          </p>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={!canGoPrev}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              canGoPrev
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} />
            {i18n.language === 'fr' ? 'Précédent' : i18n.language === 'ht' ? 'Anvan' : 'Previous'}
          </button>

          <button
            onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
            disabled={!canGoNext}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              canGoNext
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {i18n.language === 'fr' ? 'Suivant' : i18n.language === 'ht' ? 'Apre' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
