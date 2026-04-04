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
  
  const leftPage = bookPages[currentPage];
  const rightPage = bookPages[currentPage + 1];
  
  const canGoNext = currentPage + 2 < bookPages.length;
  const canGoPrev = currentPage > 0;
  
  const goNext = () => {
    if (canGoNext) setCurrentPage(currentPage + 2);
  };
  
  const goPrev = () => {
    if (canGoPrev) setCurrentPage(Math.max(0, currentPage - 2));
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Book Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          {i18n.language === 'fr' ? "Cinq Ans d'Abandon Systémique" : i18n.language === 'ht' ? "Senk Ane Abandone Sistematik" : "Five Years of Systemic Abandonment"}
        </h2>

        {/* Book Container */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-96">
            {/* Left Page */}
            <div className="bg-amber-50 p-8 md:p-12 border-r border-gray-300 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 font-semibold tracking-widest mb-4">
                  {i18n.language === 'fr' ? 'PAGE' : i18n.language === 'ht' ? 'PAJ' : 'PAGE'} {currentPage + 1}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {leftPage.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {leftPage.content}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-8">Justice for Barran</p>
            </div>

            {/* Right Page */}
            {rightPage && (
              <div className="bg-white p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-semibold tracking-widest mb-4">
                    {i18n.language === 'fr' ? 'PAGE' : i18n.language === 'ht' ? 'PAJ' : 'PAGE'} {currentPage + 2}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {rightPage.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {rightPage.content}
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-8">Justice for Barran</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
            {i18n.language === 'fr' ? 'Précédent' : i18n.language === 'ht' ? 'Anvan' : 'Previous'}
          </button>

          <div className="text-center">
            <p className="text-white font-semibold">
              {i18n.language === 'fr' ? 'Page' : i18n.language === 'ht' ? 'Paj' : 'Page'} {currentPage + 1}-{currentPage + 2} {i18n.language === 'fr' ? 'de' : i18n.language === 'ht' ? 'nan' : 'of'} {bookPages.length}
            </p>
          </div>

          <button
            onClick={goNext}
            disabled={!canGoNext}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {i18n.language === 'fr' ? 'Suivant' : i18n.language === 'ht' ? 'Apre' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
