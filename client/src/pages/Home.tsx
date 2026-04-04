import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, X } from 'lucide-react';
import { JukeboxPlayer } from '@/components/JukeboxPlayer';
import { SirenWarningModal } from '@/components/SirenWarningModal';
import TheSilenceClock from '@/components/TheSilenceClock';
import { BookReader } from '@/components/BookReader';
import { trpc } from '@/lib/trpc';
import QRCode from 'qrcode';

const DONATION_AMOUNTS = [5, 10, 20, 50, 100];

export default function Home() {
  const { i18n } = useTranslation();
  const [showSirenModal, setShowSirenModal] = useState(false);
  const [qrCodes, setQrCodes] = useState<{ [key: number]: string }>({});
  const [showDonationWarning, setShowDonationWarning] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const createCheckoutMutation = trpc.donations.createCheckoutSession.useMutation();

  // Generate QR codes for Interac donations
  useEffect(() => {
    const generateQRs = async () => {
      const newQRs: { [key: number]: string } = {};
      
      for (const amount of DONATION_AMOUNTS) {
        try {
          const interacUrl = `interac://pay?to=contact@justiceforbarran.com&amount=${amount}&currency=CAD`;
          const qrDataUrl = await new Promise<string>((resolve, reject) => {
            QRCode.toDataURL(interacUrl, {
              margin: 1,
              width: 150,
              color: {
                dark: '#000000',
                light: '#FFFFFF',
              },
            }, (err: any, url: string) => {
              if (err) reject(err);
              else resolve(url);
            });
          });
          newQRs[amount] = qrDataUrl;
        } catch (error) {
          console.error(`Error generating QR for $${amount}:`, error);
        }
      }
      setQrCodes(newQRs);
    };
    
    generateQRs();
  }, []);

  const handleDonateClick = (amount: number) => {
    setSelectedAmount(amount);
    setShowDonationWarning(true);
  };

  const confirmDonation = async () => {
    if (!selectedAmount) return;
    
    setShowDonationWarning(false);
    
    // Try Interac first
    const interacUrl = `interac://pay?to=contact@justiceforbarran.com&amount=${selectedAmount}&currency=CAD`;
    window.location.href = interacUrl;
    
    // Fallback to Stripe after 2 seconds if Interac doesn't work
    setTimeout(async () => {
      try {
        const { url } = await createCheckoutMutation.mutateAsync({ amount: selectedAmount });
        if (url) {
          window.open(url, '_blank');
        }
      } catch (error) {
        console.error('Error creating checkout session:', error);
      }
    }, 2000);
  };

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Georgia, serif' }}>
      <SirenWarningModal isOpen={showSirenModal} onClose={() => setShowSirenModal(false)} />

      {/* GLOW INSTANT DONATION WARNING MODAL */}
      {showDonationWarning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-yellow-300 text-black p-8 rounded-xl max-w-md w-full shadow-2xl border-4 border-yellow-500 animate-pulse"
               style={{
                 boxShadow: '0 0 40px rgba(255, 255, 0, 0.8), 0 0 80px rgba(255, 255, 0, 0.6), inset 0 0 20px rgba(255, 255, 0, 0.3)'
               }}>
            <div className="text-center">
              <h2 className="text-5xl font-black mb-4 text-yellow-900" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                ⚡ INSTANT DONATION ⚡
              </h2>
              <p className="text-2xl font-bold mb-6 text-black">
                ${selectedAmount} CAD
              </p>
              <p className="text-lg font-semibold mb-8 text-black">
                {i18n.language === 'fr' 
                  ? 'Êtes-vous sûr? Ce don sera envoyé immédiatement.'
                  : i18n.language === 'ht'
                  ? 'Ou sèten? Don sa a pral voye imedyatman.'
                  : 'Are you sure? This donation will be sent immediately.'}
              </p>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={confirmDonation}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-black text-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  ✓ {i18n.language === 'fr' ? 'CONFIRMER' : i18n.language === 'ht' ? 'KONFIME' : 'CONFIRM'}
                </button>
                <button
                  onClick={() => setShowDonationWarning(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-black text-xl transition-all transform hover:scale-105 shadow-lg"
                >
                  ✗ {i18n.language === 'fr' ? 'ANNULER' : i18n.language === 'ht' ? 'ANILE' : 'CANCEL'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* ===== 4. UNIFIED DONATION SECTION ===== */}
      <section className="w-full bg-white text-black py-12 px-4 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">
            {i18n.language === 'fr' ? 'Soutenez la Justice' : i18n.language === 'ht' ? 'Sipòte Jistis' : 'Support Justice'}
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            {i18n.language === 'fr' 
              ? '100% des dons vont directement à la défense juridique'
              : i18n.language === 'ht'
              ? '100% don yo ale dirèkteman nan defans legal'
              : '100% of donations go directly to legal advocacy'}
          </p>

          {/* Donation Methods Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* METHOD 1: QR CODES - INTERAC DIRECT */}
            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                📱 {i18n.language === 'fr' ? 'Codes QR' : i18n.language === 'ht' ? 'Kòd QR' : 'QR Codes'}
              </h3>
              <p className="text-sm text-gray-700 mb-4 text-center">
                {i18n.language === 'fr' 
                  ? 'Scannez avec votre caméra'
                  : i18n.language === 'ht'
                  ? 'Skennen avèk kamera ou'
                  : 'Scan with your camera'}
              </p>
              <div className="grid grid-cols-5 gap-2">
                {DONATION_AMOUNTS.map((amount) => (
                  <div key={`qr-${amount}`} className="flex flex-col items-center">
                    {qrCodes[amount] && (
                      <button
                        onClick={() => handleDonateClick(amount)}
                        className="mb-2 hover:opacity-80 transition-opacity hover:scale-110 transform"
                        title={`$${amount} QR Code`}
                      >
                        <img 
                          src={qrCodes[amount]} 
                          alt={`$${amount} QR`} 
                          className="w-full border-2 border-blue-300 rounded"
                        />
                      </button>
                    )}
                    <span className="text-xs font-bold text-blue-900 mt-1">${amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* METHOD 2: CLICK TO PAY - INTERAC DIRECT */}
            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-900 mb-4 text-center">
                💚 {i18n.language === 'fr' ? 'Cliquez' : i18n.language === 'ht' ? 'Klike' : 'Click to Pay'}
              </h3>
              <p className="text-sm text-gray-700 mb-4 text-center">
                {i18n.language === 'fr' 
                  ? 'Paiement instantané'
                  : i18n.language === 'ht'
                  ? 'Peyman imedya'
                  : 'Instant payment'}
              </p>
              <div className="grid grid-cols-5 gap-2">
                {DONATION_AMOUNTS.map((amount) => (
                  <button
                    key={`click-${amount}`}
                    onClick={() => handleDonateClick(amount)}
                    className="py-3 px-2 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4 text-center">
                {i18n.language === 'fr' 
                  ? 'Virement Interac direct'
                  : i18n.language === 'ht'
                  ? 'Transfert Interac dirèk'
                  : 'Direct Interac e-Transfer'}
              </p>
            </div>

            {/* METHOD 3: CREDIT CARDS - STRIPE */}
            <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-bold text-purple-900 mb-4 text-center">
                💳 {i18n.language === 'fr' ? 'Cartes' : i18n.language === 'ht' ? 'Kat' : 'Credit Cards'}
              </h3>
              <p className="text-sm text-gray-700 mb-4 text-center">
                {i18n.language === 'fr' 
                  ? 'Visa, Mastercard, Amex'
                  : i18n.language === 'ht'
                  ? 'Visa, Mastercard, Amex'
                  : 'Visa, Mastercard, Amex'}
              </p>
              <div className="grid grid-cols-5 gap-2">
                {DONATION_AMOUNTS.map((amount) => (
                  <button
                    key={`stripe-${amount}`}
                    onClick={async () => {
                      try {
                        const { url } = await createCheckoutMutation.mutateAsync({ amount });
                        if (url) {
                          window.open(url, '_blank');
                        }
                      } catch (error) {
                        console.error('Error:', error);
                      }
                    }}
                    className="py-3 px-2 bg-purple-600 text-white rounded-lg font-bold text-sm hover:bg-purple-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                    disabled={createCheckoutMutation.isPending}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4 text-center">
                {i18n.language === 'fr' 
                  ? 'Paiement sécurisé'
                  : i18n.language === 'ht'
                  ? 'Peyman sekirize'
                  : 'Secure payment'}
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {i18n.language === 'fr' 
                ? 'Questions? Contactez-nous'
                : i18n.language === 'ht'
                ? 'Kesyon? Kontakte nou'
                : 'Questions? Contact us'}: <span className="font-bold">contact@justiceforbarran.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== 4B. BOOK READER SECTION ===== */}
      <BookReader />

      {/* ===== 5. CONTACT INFORMATION SECTION ===== */}
      <section className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">
            {i18n.language === 'fr' ? 'Nous Contacter' : i18n.language === 'ht' ? 'Kontakte Nou' : 'Contact Us'}
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div>
              <p className="text-sm text-gray-400 mb-2">
                {i18n.language === 'fr' ? 'Site Web' : i18n.language === 'ht' ? 'Sit Entenet' : 'Website'}
              </p>
              <p className="text-xl font-bold text-amber-400">justiceforbarran.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                {i18n.language === 'fr' ? 'Email' : i18n.language === 'ht' ? 'Imel' : 'Email'}
              </p>
              <a href="mailto:contact@justiceforbarran.com" className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
                contact@justiceforbarran.com
              </a>
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
