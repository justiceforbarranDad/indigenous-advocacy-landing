import React, { useState } from 'react';
import { Volume2, VolumeX, Share2, Heart } from 'lucide-react';

interface BookCoverEnhancedProps {
  onEnter?: () => void;
  selectedLanguage?: 'en' | 'fr' | 'ht';
}

const DONATION_AMOUNTS = [5, 10, 20, 50, 100];

const COVER_TEXT = {
  en: {
    title: 'SUNDAY BLOODY SUNDAY',
    subtitle: 'PART TWO',
    tagline: "Canada's Sunday Bloody Sunday",
    date: 'February 14, 2021',
    message: '',
    button: 'JUSTICE FOR BARRAN',
    donate: 'SUPPORT JUSTICE',
    donateDesc: 'Your donation supports legal advocacy and systemic reform',
    share: 'SHARE',
    enter: 'ENTER BOOK',
    org: 'The McGovern Foundation of Human Rights',
    website: 'www.themcgovernfondationofhumanrights.com',
    email: 'contact@justiceforbarran.com',
  },
  fr: {
    title: 'DIMANCHE SANGLANT DIMANCHE',
    subtitle: 'PARTIE DEUX',
    tagline: 'Le dimanche sanglant du Canada',
    date: '14 février 2021',
    message: 'Vérité actuelle avant la réconciliation',
    button: 'JUSTICE POUR BARRAN',
    donate: 'SOUTENIR LA JUSTICE',
    donateDesc: 'Votre don soutient l\'plaidoyer juridique et la réforme systémique',
    share: 'PARTAGER',
    enter: 'ENTRER DANS LE LIVRE',
    org: 'La Fondation McGovern pour les droits de l\'homme',
    website: 'www.themcgovernfondationofhumanrights.com',
    email: 'contact@justiceforbarran.com',
  },
  ht: {
    title: 'DIMANCH SANGLANT DIMANCH',
    subtitle: 'DEZYÈM PATI',
    tagline: 'Dimanch Sanglant Kanada',
    date: '14 fevriye 2021',
    message: 'Verite Aktyèl Anvan Rekonsiliasyon',
    button: 'JISTIS POU BARRAN',
    donate: 'SOUTNI JISTIS',
    donateDesc: 'Donasyon ou a soutni plèdwazi legal ak refòm sistematik',
    share: 'PATAJE',
    enter: 'ANTRE NAN LIV LA',
    org: 'Fondasyon McGovern pou Dwa Moun',
    website: 'www.themcgovernfondationofhumanrights.com',
    email: 'contact@justiceforbarran.com',
  },
};

export function BookCoverEnhanced({ onEnter, selectedLanguage = 'en' }: BookCoverEnhancedProps) {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showDonationWarning, setShowDonationWarning] = useState(false);

  const text = COVER_TEXT[selectedLanguage];

  const handleDonate = (amount: number) => {
    setSelectedAmount(amount);
    setShowDonationWarning(true);
  };

  const confirmDonation = () => {
    if (selectedAmount) {
      window.location.href = `mailto:${text.email}?subject=Donation%20Request%20-%20$${selectedAmount}%20CAD&body=I%20would%20like%20to%20donate%20$${selectedAmount}%20CAD%20via%20Interac%20e-Transfer.`;
      setShowDonationWarning(false);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = text.title;
    const hashtags = '#JusticeForBarran #SundayBloodyySunday #IndigenousJustice';

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Full-Screen Background Video Animation */}
      <div className="absolute inset-0">
        {/* Parliament Building Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-90"></div>

        {/* Animated Parliament Silhouette */}
        <svg
          viewBox="0 0 1000 800"
          className="absolute inset-0 w-full h-full opacity-20"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Parliament Building */}
          <g className="text-amber-600">
            <rect x="300" y="200" width="400" height="400" fill="currentColor" opacity="0.3" />
            <polygon points="500,100 600,200 400,200" fill="currentColor" opacity="0.4" />
            {/* Windows */}
            {[...Array(16)].map((_, i) => (
              <rect
                key={i}
                x={320 + (i % 4) * 80}
                y={220 + Math.floor(i / 4) * 80}
                width="30"
                height="30"
                fill="currentColor"
                opacity="0.2"
              />
            ))}
          </g>
        </svg>

        {/* Centennial Flame Animation */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <div className="relative w-32 h-40">
            {/* Flame */}
            <div className="absolute inset-0 animate-pulse">
              <div className="w-full h-full bg-gradient-to-t from-amber-500 via-amber-400 to-amber-300 rounded-full blur-2xl opacity-60"></div>
            </div>
            {/* Inner flame */}
            <div className="absolute inset-2 animate-bounce">
              <div className="w-full h-full bg-gradient-to-t from-amber-400 via-yellow-300 to-yellow-200 rounded-full blur-lg opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Fountain Blood Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-600 rounded-full animate-ping"
              style={{
                left: `${Math.cos((i / 12) * Math.PI * 2) * 60}px`,
                top: `${Math.sin((i / 12) * Math.PI * 2) * 60}px`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0.6,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header with Language Selector */}
        <div className="flex justify-between items-center p-6">
          <div className="text-amber-300 font-bold text-xl">{text.org}</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white text-slate-900 rounded text-sm font-semibold hover:bg-amber-300">
              EN
            </button>
            <button className="px-3 py-1 bg-slate-700 text-white rounded text-sm font-semibold hover:bg-slate-600">
              FR
            </button>
            <button className="px-3 py-1 bg-slate-700 text-white rounded text-sm font-semibold hover:bg-slate-600">
              HT
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-7xl font-black text-amber-300 mb-2 drop-shadow-lg">{text.title}</h1>
            <h2 className="text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">{text.subtitle}</h2>
            <p className="text-2xl text-amber-100 mb-2 drop-shadow-lg">{text.tagline}</p>
            <p className="text-xl text-amber-50 drop-shadow-lg">{text.date}</p>
            <p className="text-lg text-amber-100 mt-4 italic drop-shadow-lg">{text.message}</p>
          </div>

          {/* Center CTA */}
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-amber-300 mb-6 drop-shadow-lg">{text.button}</h3>
            <p className="text-lg text-amber-100 drop-shadow-lg">February 14, 2021</p>
          </div>

          {/* Donation Section */}
          <div className="bg-gradient-to-b from-amber-900/40 to-slate-800/60 backdrop-blur-sm border-2 border-amber-500/50 rounded-lg p-8 max-w-2xl mb-8">
            <h4 className="text-3xl font-bold text-amber-300 mb-3 text-center">{text.donate}</h4>
            <p className="text-amber-100 text-center mb-6">{text.donateDesc}</p>

            {/* Donation Buttons Grid */}
            <div className="grid grid-cols-5 gap-3 mb-6">
              {DONATION_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleDonate(amount)}
                  className="bg-gradient-to-b from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-2 rounded-lg transition-all transform hover:scale-105 text-lg"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <p className="text-center text-amber-100 text-sm italic">
              💳 Interac e-Transfer • 🏦 Direct Deposit • 📱 QR Codes
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            {/* Enter Book Button */}
            <button
              onClick={onEnter}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-xl shadow-lg"
            >
              {text.enter}
            </button>

            {/* Share Button */}
            <button
              onClick={() => handleShare('twitter')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Share2 size={24} /> Twitter
            </button>

            <button
              onClick={() => handleShare('facebook')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Share2 size={24} /> Facebook
            </button>

            <button
              onClick={() => handleShare('linkedin')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Share2 size={24} /> LinkedIn
            </button>
          </div>

          {/* Audio Control */}
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors text-lg font-semibold"
          >
            {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
            {audioEnabled ? 'Audio On' : 'Audio Off'}
          </button>
        </div>

        {/* Footer Contact Info */}
        <div className="bg-slate-900/80 backdrop-blur-sm border-t-2 border-amber-500/30 px-6 py-4 flex justify-between items-center">
          <div className="text-amber-100 text-sm">
            <p className="font-semibold">{text.org}</p>
            <p>{text.website}</p>
            <p>{text.email}</p>
          </div>
          <div className="text-amber-100 text-sm text-right">
            <p className="font-semibold">#JusticeForBarran</p>
            <p>#SundayBloodyySunday</p>
            <p>#IndigenousJustice</p>
          </div>
        </div>
      </div>

      {/* Donation Warning Modal */}
      {showDonationWarning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-amber-500 rounded-lg p-8 max-w-md shadow-2xl">
            <h3 className="text-3xl font-bold text-amber-300 mb-4">Confirm Donation</h3>
            <p className="text-white mb-2 text-lg">
              You are about to donate <span className="font-bold text-amber-300">${selectedAmount} CAD</span>
            </p>
            <p className="text-amber-100 text-sm mb-6">
              This will open your email to arrange Interac e-Transfer to {text.email}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowDonationWarning(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg transition-colors font-bold"
              >
                Cancel
              </button>
              <button
                onClick={confirmDonation}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-4 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
