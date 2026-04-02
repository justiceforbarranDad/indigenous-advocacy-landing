import { useTranslation } from 'react-i18next';
import { SilenceClock } from './SilenceClock';

export default function BloodFlagHero() {
  const { i18n } = useTranslation();

  const heroText = {
    en: {
      knowYourRights: 'KNOW YOUR RIGHTS',
      since: 'SINCE 2021',
      title: "Canada's Sunday Bloody Sunday",
      date: 'February 14, 2021',
      subtitle: 'Current Truth Before Reconciliation - Justice for Barran'
    },
    fr: {
      knowYourRights: 'CONNAISSEZ VOS DROITS',
      since: 'DEPUIS 2021',
      title: 'Dimanche Sanglant du Canada',
      date: '14 février 2021',
      subtitle: 'Vérité actuelle avant la réconciliation - Justice pour Barran'
    }
  };

  const text = heroText[i18n.language as keyof typeof heroText] || heroText.en;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/canada-flag-totem-parliament-centered-E7LKafshVwbSq86RqWKQGC.webp)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 w-full px-4 py-8">
        {/* Red Banner - Know Your Rights */}
        <div className="bg-red-600 text-white text-center py-4 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold tracking-widest">
            {text.knowYourRights}
          </h1>
        </div>

        {/* Main Content */}
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Since 2021 */}
          <p className="text-3xl md:text-5xl font-bold mb-4 tracking-wider">
            {text.since}
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
            {text.title}
          </h2>

          {/* Date */}
          <p className="text-2xl md:text-3xl font-bold mb-6">
            {text.date}
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-semibold text-gray-100 max-w-2xl mx-auto">
            {text.subtitle}
          </p>

          {/* The Silence Clock */}
          <div className="mt-12">
            <SilenceClock />
          </div>
        </div>
      </div>
    </div>
  );
}
