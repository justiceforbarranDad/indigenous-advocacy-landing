import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BookPage {
  id: number;
  title: string;
  content: string;
}

const bookPages: BookPage[] = [
  {
    id: 1,
    title: "Five Years of Systemic Abandonment",
    content: "Since February 14, 2021, our family has endured systematic failures from government agencies, politicians, and institutions designed to protect vulnerable children. This is the documented record of how a 14-year-old Indigenous boy was stabbed three times and left without adequate mental health support."
  },
  {
    id: 2,
    title: "The Incident - February 14, 2021",
    content: "Barran was stabbed three times in Côte Saint-Luc. The suspect was never found. Instead of receiving immediate mental health support as required by Jordan's Principle, our family was left to navigate a broken system alone."
  },
  {
    id: 3,
    title: "DPJ Involvement & Withdrawal",
    content: "DYP (Direction de la protection de la jeunesse) became involved but withdrew in January 2023 without providing adequate follow-up care. When we asked where it said they needed to provide a psychiatrist or psychologist, they had no answer. Education was lost. Mental health was destroyed."
  },
  {
    id: 4,
    title: "Political Silence - Provincial Level",
    content: "We contacted our MNA, Céline Haytayan (CAQ, Laval-des-Rapides), for help. Instead of assistance, her office sent a cease-and-desist warning (November 19, 2023): stop all contact or face criminal harassment charges. This is what happens when a constituent asks for help."
  },
  {
    id: 5,
    title: "Federal Level Ghosted",
    content: "Escalated to federal MPs - same silence. No response, no action. Even higher bodies (Protecteur du citoyen, Commissaire à l'éthique, CHRC ref 100021349) say limits on powers, no real change for DPJ decisions."
  },
  {
    id: 6,
    title: "Systemic Failures Documented",
    content: "CDPDJ's 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids' health/development. Our kids pay the price—5+ years of violations. Breaks Article 23 UNCRC, Quebec Charter art. 39, reconciliation spirit."
  },
  {
    id: 7,
    title: "Protected Expression & Rights",
    content: "Our public posts (videos, emails, testimony) call for: independent inquiry, Jordan's Principle application, real support. Protected by Charter s.2(b) freedom of expression (Grant v Torstar 2009 CSC 61), Indigenous rights jurisprudence (2024 CSC 5), responsible communication on public interest."
  },
  {
    id: 8,
    title: "Enough is Enough",
    content: "No threats/intimidation—only demanding accountability to protect other Indigenous families. Enough is enough. Victims today deserve better than 'sorry' without change."
  }
];

export function BookReader() {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  const leftPage = bookPages[currentPage];
  const rightPage = bookPages[currentPage + 1];
  
  const canGoNext = currentPage + 2 < bookPages.length;
  const canGoPrev = currentPage > 0;
  
  const goNext = () => {
    if (canGoNext && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 2);
        setIsFlipping(false);
      }, 400);
    }
  };
  
  const goPrev = () => {
    if (canGoPrev && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(Math.max(0, currentPage - 2));
        setIsFlipping(false);
      }, 400);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Book Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
          {i18n.language === 'fr' ? "Cinq Ans d'Abandon Systémique" : i18n.language === 'ht' ? "Senk Ane Abandone Sistematik" : "Five Years of Systemic Abandonment"}
        </h2>
        <p className="text-center text-red-500 text-lg font-semibold mb-12">
          {i18n.language === 'fr' ? "Le Livre de la Justice" : i18n.language === 'ht' ? "Liv Jistis la" : "The Book of Justice"}
        </p>

        {/* 3D Book Container */}
        <div className="flex justify-center items-center min-h-96">
          <div className="perspective w-full max-w-5xl">
            {/* Book Shadow & 3D Effect */}
            <div className="relative">
              {/* Book Spine Shadow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-gray-800 to-black z-20"></div>

              {/* Book Pages Container */}
              <div className={`grid grid-cols-2 gap-0 bg-white rounded-lg shadow-2xl overflow-hidden transition-opacity duration-400 ${isFlipping ? 'opacity-75' : 'opacity-100'}`}>
                {/* Left Page */}
                <div className="bg-amber-50 p-8 md:p-12 flex flex-col justify-between min-h-96 border-r-2 border-gray-300">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold tracking-widest mb-4 uppercase">
                      {i18n.language === 'fr' ? 'Page' : i18n.language === 'ht' ? 'Paj' : 'Page'} {currentPage + 1}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                      {leftPage?.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {leftPage?.content}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 mt-8 font-serif">
                    Justice for Barran • Indigenous Rights Advocacy
                  </div>
                </div>

                {/* Right Page */}
                <div className="bg-white p-8 md:p-12 flex flex-col justify-between min-h-96">
                  {rightPage ? (
                    <>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold tracking-widest mb-4 uppercase">
                          {i18n.language === 'fr' ? 'Page' : i18n.language === 'ht' ? 'Paj' : 'Page'} {currentPage + 2}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif">
                          {rightPage.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {rightPage.content}
                        </p>
                      </div>
                      <div className="text-xs text-gray-400 mt-8 font-serif">
                        Justice for Barran • Indigenous Rights Advocacy
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <p className="text-2xl font-bold text-gray-900 mb-4">
                        {i18n.language === 'fr' ? 'Fin du Livre' : i18n.language === 'ht' ? 'Fin Liv la' : 'End of Book'}
                      </p>
                      <p className="text-gray-600 text-lg">
                        {i18n.language === 'fr' ? 'Merci de votre attention' : i18n.language === 'ht' ? 'Mèsi pou atansyon ou' : 'Thank you for your attention'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8 px-4">
              <button
                onClick={goPrev}
                disabled={!canGoPrev || isFlipping}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${
                  canGoPrev && !isFlipping
                    ? 'bg-red-600 hover:bg-red-700 text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
                {i18n.language === 'fr' ? 'Précédent' : i18n.language === 'ht' ? 'Anvan' : 'Previous'}
              </button>

              {/* Page Counter */}
              <div className="text-white text-center">
                <p className="text-lg font-semibold">
                  {i18n.language === 'fr' ? 'Pages' : i18n.language === 'ht' ? 'Paj' : 'Pages'} {currentPage + 1}-{Math.min(currentPage + 2, bookPages.length)} {i18n.language === 'fr' ? 'de' : i18n.language === 'ht' ? 'nan' : 'of'} {bookPages.length}
                </p>
              </div>

              <button
                onClick={goNext}
                disabled={!canGoNext || isFlipping}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${
                  canGoNext && !isFlipping
                    ? 'bg-red-600 hover:bg-red-700 text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                {i18n.language === 'fr' ? 'Suivant' : i18n.language === 'ht' ? 'Apre' : 'Next'}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
