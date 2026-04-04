import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';
import { JukeboxPlayer } from '@/components/JukeboxPlayer';
import { SirenWarningModal } from '@/components/SirenWarningModal';
import TheSilenceClock from '@/components/TheSilenceClock';
import { trpc } from '@/lib/trpc';

export default function Home() {
  const { i18n } = useTranslation();
  const [showSirenModal, setShowSirenModal] = useState(false);
  const createCheckoutMutation = trpc.donations.createCheckoutSession.useMutation();

  const handleDonateClick = async (amount: number) => {
    try {
      const { url } = await createCheckoutMutation.mutateAsync({ amount });
      if (url) {
        window.open(url, '_blank');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to create checkout session. Please try again.');
    }
  };

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Georgia, serif' }}>
      <SirenWarningModal isOpen={showSirenModal} onClose={() => setShowSirenModal(false)} />

      {/* WARNING LIGHTS - Fixed */}
      <button
        onClick={() => setShowSirenModal(true)}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-all animate-pulse shadow-lg"
        title="Click to view institutional suppression warnings"
      >
        <div className="relative">
          <AlertTriangle size={20} />
          <div className="absolute inset-0 rounded-full border border-red-400 animate-ping"></div>
        </div>
        <span className="hidden sm:inline">WARNING</span>
      </button>

      {/* ===== 1. FULL-WIDTH VIDEO HERO AT VERY TOP ===== */}
      <section className="relative w-full overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        {/* Video Background - edge to edge */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-loop_b283c63d.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />



        {/* Hero Text Overlay - centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <p className="text-red-500 font-black text-sm md:text-lg tracking-[0.4em] uppercase mb-2 drop-shadow-lg">
            {i18n.language === 'fr' ? 'DEPUIS 2021' : i18n.language === 'ht' ? 'DEPI 2021' : 'SINCE 2021'}
          </p>
          <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {i18n.language === 'fr' ? "Le Dimanche Sanglant du Canada" : i18n.language === 'ht' ? "Dimanch Sanglant Kanada a" : "Canada's Sunday Bloody Sunday"}
          </h1>
          <p className="text-white/90 font-semibold text-xl md:text-3xl drop-shadow-lg mb-2">
            {i18n.language === 'fr' ? '14 février 2021' : i18n.language === 'ht' ? '14 fevriye 2021' : 'February 14, 2021'}
          </p>
          <p className="text-red-400 text-sm md:text-lg font-medium italic max-w-2xl drop-shadow-lg">
            {i18n.language === 'fr' 
              ? 'Vérité actuelle avant la réconciliation — Justice pour Barran'
              : i18n.language === 'ht'
              ? 'Verite aktyèl anvan rekonsilyasyon — Jistis pou Barran'
              : 'Current Truth Before Reconciliation — Justice for Barran'}
          </p>

          {/* Flag text overlays */}
          <div className="mt-4 flex gap-4 flex-wrap justify-center mb-6">
            <span className="bg-red-700/80 text-white px-4 py-1 rounded font-black text-sm md:text-base tracking-wider">
              JUSTICE FOR BARRAN
            </span>
            <span className="bg-red-700/80 text-white px-4 py-1 rounded font-black text-sm md:text-base tracking-wider">
              SUNDAY BLOODY SUNDAY
            </span>
          </div>

          {/* Podcast Player Buttons - Hero Section */}
          <div className="mt-6 flex gap-3 flex-wrap justify-center">
            <a href="#podcast" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              🎙️ {i18n.language === 'fr' ? 'Écouter' : i18n.language === 'ht' ? 'Tande' : 'Listen'}
            </a>
            <a href="#podcast" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              ▶️ {i18n.language === 'fr' ? 'Lire' : i18n.language === 'ht' ? 'Li' : 'Play'}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== 2. THE SILENCE CLOCK ===== */}
      <section className="w-full bg-black px-4 py-8 border-t-2 border-red-700">
        <TheSilenceClock />
      </section>

      {/* ===== 3. PODCAST PLAYER - FULL WIDTH ===== */}
      <section id="podcast" className="w-full bg-gradient-to-b from-gray-900 to-black py-10 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Podcast Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl">🎙️</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
                {i18n.language === 'fr' ? 'Justice pour Barran' : i18n.language === 'ht' ? 'Jistis pou Barran' : 'Justice for Barran'}
              </h2>
            </div>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg font-semibold">
              {i18n.language === 'fr' 
                ? '6 Épisodes Complets • Anglais & Français' 
                : i18n.language === 'ht'
                ? '6 Epizòd Konplè • Anglè & Fransè'
                : '6 Full Episodes • English & French'}
            </p>
          </div>
          {/* Full Jukebox Player */}
          <JukeboxPlayer />
        </div>
      </section>

      {/* ===== 4. DONATION SECTION ===== */}
      <section className="w-full bg-white text-black py-10 px-4 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left: QR Code */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-gray-800 mb-3">
                {i18n.language === 'fr' ? '📱 Scannez pour Donner' : i18n.language === 'ht' ? '📱 Eskane pou Bay' : '📱 Scan to Donate'}
              </p>
              <div className="w-36 h-36 bg-white border-2 border-gray-300 rounded-lg p-2 shadow-lg">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  alt="Donate QR"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Center: Title & Description */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {i18n.language === 'fr' ? 'Soutenez la Justice' : i18n.language === 'ht' ? 'Sipòte Jistis' : 'Support Justice'}
              </h2>
              <p className="text-gray-600 mb-3 text-lg">
                {i18n.language === 'fr' 
                  ? '100% des dons vont directement à la défense juridique'
                  : i18n.language === 'ht'
                  ? '100% don yo ale dirèkteman nan defans legal'
                  : '100% of donations go directly to legal advocacy'}
              </p>
              <p className="text-sm text-gray-500">
                McGovern Arts Institute Community Healing Centre
              </p>
            </div>

            {/* Right: Donation Buttons */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-5 gap-2">
                {[5, 10, 20, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleDonateClick(amount)}
                    className="py-3 px-2 bg-red-600 text-white rounded-lg font-bold text-sm md:text-base hover:bg-red-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center whitespace-nowrap"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <p className="text-center text-xs text-gray-500 mt-1">
                {i18n.language === 'fr' ? 'Paiement sécurisé par Stripe' : i18n.language === 'ht' ? 'Peman sekirize pa Stripe' : 'Secure payment via Stripe'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. CONTACT INFORMATION SECTION ===== */}
      <section className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">
            {i18n.language === 'fr' ? 'Nous Contacter' : i18n.language === 'ht' ? 'Kontakte Nou' : 'Contact Us'}
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div>
              <p className="text-sm text-gray-400 mb-2">
                {i18n.language === 'fr' ? 'Telephone' : i18n.language === 'ht' ? 'Telefon' : 'Phone'}
              </p>
              <p className="text-xl font-bold text-amber-400">1-800-BARRAN</p>
              <p className="text-sm text-gray-500">(1-800-227-726)</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                {i18n.language === 'fr' ? 'Email' : i18n.language === 'ht' ? 'Imel' : 'Email'}
              </p>
              <a href="mailto:contact@justiceforbarran.com" className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
                contact@justiceforbarran.com
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                {i18n.language === 'fr' ? 'Site Web' : i18n.language === 'ht' ? 'Sit Entenet' : 'Website'}
              </p>
              <p className="text-xl font-bold text-amber-400">justiceforbarran.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. KNOW YOUR RIGHTS BANNER ===== */}
      <section className="text-center py-3 bg-red-600 text-white font-black tracking-widest text-sm md:text-base w-full">
        {i18n.language === 'fr' ? 'CONNAISSEZ VOS DROITS' : i18n.language === 'ht' ? 'KONNEN DWA OU' : 'KNOW YOUR RIGHTS'}
      </section>
    </div>
  );
}
