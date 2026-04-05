import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HomeBookCover() {
  const [, navigate] = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr' | 'ht'>('en');

  const translations = {
    en: {
      title: 'Sunday Bloody Sunday',
      subtitle: 'Part Two',
      date: 'February 14, 2021',
      tagline: 'Current Truth Before Reconciliation — Justice for Barran',
      chooseLanguage: 'Choose Your Language',
      enterBook: 'ENTER BOOK',
      donate: 'DONATE',
      silenceClock: 'THE SILENCE CLOCK',
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINUTES',
      seconds: 'SECONDS',
    },
    fr: {
      title: 'Dimanche Sanglant Dimanche',
      subtitle: 'Deuxième Partie',
      date: '14 février 2021',
      tagline: 'Vérité Actuelle Avant Réconciliation — Justice pour Barran',
      chooseLanguage: 'Choisissez Votre Langue',
      enterBook: 'ENTRER DANS LE LIVRE',
      donate: 'DONNER',
      silenceClock: 'L\'HORLOGE DU SILENCE',
      days: 'JOURS',
      hours: 'HEURES',
      minutes: 'MINUTES',
      seconds: 'SECONDES',
    },
    ht: {
      title: 'Dimanch Sanglant Dimanch',
      subtitle: 'Dezyèm Pati',
      date: '14 fevriye 2021',
      tagline: 'Verite Aktyèl Anvan Rekonsiliasyon — Jistis pou Barran',
      chooseLanguage: 'Chwazi Lang ou yo',
      enterBook: 'ANTRE NAN LIV LA',
      donate: 'DONYE',
      silenceClock: 'ORLOZE SILANS LA',
      days: 'JOU',
      hours: 'ZEU',
      minutes: 'MINIT',
      seconds: 'SEKON',
    },
  };

  const t = translations[selectedLanguage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center px-4 py-8">

      {/* Book Cover Content */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-yellow-400 text-lg font-bold mb-2">SINCE 2021</p>
        <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 mb-4 leading-tight">
          {t.title}
        </h1>
        <h2 className="text-4xl md:text-5xl text-yellow-300 mb-6 font-serif italic">
          {t.subtitle}
        </h2>
        <p className="text-yellow-200 text-xl mb-2">{t.date}</p>
        <p className="text-yellow-300 text-lg mb-8">{t.tagline}</p>
      </div>

      {/* Silence Clock - Smaller at Bottom */}
      <div className="bg-red-900 border-4 border-yellow-400 rounded-lg p-6 mb-8 max-w-2xl">
        <h3 className="text-yellow-400 text-2xl font-bold text-center mb-4">
          {t.silenceClock}
        </h3>
        <div className="flex justify-center gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400">1876</div>
            <div className="text-yellow-300 text-sm">{t.days}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">14</div>
            <div className="text-yellow-300 text-sm">{t.hours}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">38</div>
            <div className="text-yellow-300 text-sm">{t.minutes}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">21</div>
            <div className="text-yellow-300 text-sm">{t.seconds}</div>
          </div>
        </div>
      </div>

      {/* Instant Donation Buttons */}
      <div className="flex gap-4 items-center mb-12 flex-wrap justify-center">
        <Button onClick={() => alert('E-Transfer to: justiceforbarran@gmail.com\nAmount: CAD $5\nTD Bank: Branch 4303, Account 6255007')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">CAD $5</Button>
        <Button onClick={() => alert('E-Transfer to: justiceforbarran@gmail.com\nAmount: CAD $10\nTD Bank: Branch 4303, Account 6255007')} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">CAD $10</Button>
        <Button onClick={() => window.location.href = '/donate?amount=20&currency=USD'} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg">USD $20 (Stripe)</Button>
        <div className="bg-white p-2 rounded-lg border-2 border-yellow-400">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=100&data=https://themcgovernfoundationofhumanrights.com/donate" alt="Donate QR Code" className="w-24 h-24" />
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-8 text-center">
        <p className="text-yellow-400 text-lg font-bold mb-4">{t.chooseLanguage}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setSelectedLanguage('en')}
            className={`px-6 py-2 rounded-lg font-bold text-lg transition-all ${
              selectedLanguage === 'en'
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setSelectedLanguage('fr')}
            className={`px-6 py-2 rounded-lg font-bold text-lg transition-all ${
              selectedLanguage === 'fr'
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
            }`}
          >
            Français
          </button>
          <button
            onClick={() => setSelectedLanguage('ht')}
            className={`px-6 py-2 rounded-lg font-bold text-lg transition-all ${
              selectedLanguage === 'ht'
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
            }`}
          >
            Kreyòl
          </button>
        </div>
      </div>

      {/* Enter Book Button */}
      <Button
        onClick={() => navigate('/book')}
        className="bg-red-600 hover:bg-red-700 text-yellow-400 font-bold text-xl px-12 py-4 rounded-lg border-2 border-yellow-400"
      >
        {t.enterBook}
      </Button>
    </div>
  );
}
