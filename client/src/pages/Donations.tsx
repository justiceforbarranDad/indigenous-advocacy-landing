import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import QRCode from 'qrcode';

const DONATION_AMOUNTS = [5, 10, 20, 50, 100];

export default function Donations() {
  const { i18n } = useTranslation();
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
              margin: 2,
              width: 250,
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
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: 'Georgia, serif' }}>
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

      {/* HEADER */}
      <div className="bg-gradient-to-b from-red-900 to-black py-12 px-4 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            {i18n.language === 'fr' ? 'Soutenez la Justice' : i18n.language === 'ht' ? 'Sipòte Jistis' : 'Support Justice'}
          </h1>
          <p className="text-2xl text-red-300 mb-4">
            {i18n.language === 'fr' 
              ? '100% des dons vont directement à la défense juridique'
              : i18n.language === 'ht'
              ? '100% don yo ale dirèkteman nan defans legal'
              : '100% of donations go directly to legal advocacy'}
          </p>
          <p className="text-lg text-gray-300">
            Justice for Barran - Indigenous Rights Advocacy
          </p>
        </div>
      </div>

      {/* PAGE 1: QR CODES */}
      <div className="py-12 px-4 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2">
            {i18n.language === 'fr' ? 'Codes QR' : i18n.language === 'ht' ? 'Kòd QR' : 'QR Codes'}
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            {i18n.language === 'fr' 
              ? 'Scannez avec votre caméra pour donner instantanément'
              : i18n.language === 'ht'
              ? 'Skennen avèk kamera ou pou bay imedyatman'
              : 'Scan with your camera to donate instantly'}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {DONATION_AMOUNTS.map((amount) => (
              <div key={`qr-${amount}`} className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg mb-4 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-110">
                  {qrCodes[amount] && (
                    <img 
                      src={qrCodes[amount]} 
                      alt={`$${amount} QR`} 
                      className="w-full"
                    />
                  )}
                </div>
                <span className="text-2xl font-black text-yellow-400 mb-2">${amount}</span>
                <p className="text-xs text-gray-400 text-center">
                  {i18n.language === 'fr' ? 'CAD' : i18n.language === 'ht' ? 'CAD' : 'CAD'}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 mb-4">
              {i18n.language === 'fr' 
                ? 'Virement Interac e-Transfer direct'
                : i18n.language === 'ht'
                ? 'Transfert Interac e-Transfer dirèk'
                : 'Direct Interac e-Transfer'}
            </p>
            <p className="text-sm text-gray-500">
              contact@justiceforbarran.com
            </p>
          </div>
        </div>
      </div>

      {/* PAGE 2: CLICK TO PAY & CREDIT CARDS */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CLICK TO PAY - INTERAC */}
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-8 rounded-xl border-2 border-green-400">
              <h3 className="text-3xl font-black text-green-300 mb-4 text-center">
                💚 {i18n.language === 'fr' ? 'Cliquez' : i18n.language === 'ht' ? 'Klike' : 'Click to Pay'}
              </h3>
              <p className="text-center text-green-200 mb-8 text-lg">
                {i18n.language === 'fr' 
                  ? 'Paiement instantané'
                  : i18n.language === 'ht'
                  ? 'Peyman imedya'
                  : 'Instant payment'}
              </p>
              
              <div className="grid grid-cols-5 gap-3 mb-8">
                {DONATION_AMOUNTS.map((amount) => (
                  <button
                    key={`click-${amount}`}
                    onClick={() => handleDonateClick(amount)}
                    className="py-4 px-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-black text-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <p className="text-center text-green-300 font-semibold">
                {i18n.language === 'fr' 
                  ? 'Virement Interac direct'
                  : i18n.language === 'ht'
                  ? 'Transfert Interac dirèk'
                  : 'Direct Interac e-Transfer'}
              </p>
            </div>

            {/* CREDIT CARDS - STRIPE */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl border-2 border-purple-400">
              <h3 className="text-3xl font-black text-purple-300 mb-4 text-center">
                💳 {i18n.language === 'fr' ? 'Cartes' : i18n.language === 'ht' ? 'Kat' : 'Credit Cards'}
              </h3>
              <p className="text-center text-purple-200 mb-8 text-lg">
                {i18n.language === 'fr' 
                  ? 'Visa, Mastercard, Amex'
                  : i18n.language === 'ht'
                  ? 'Visa, Mastercard, Amex'
                  : 'Visa, Mastercard, Amex'}
              </p>

              <div className="grid grid-cols-5 gap-3 mb-8">
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
                    className="py-4 px-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-black text-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
                    disabled={createCheckoutMutation.isPending}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <p className="text-center text-purple-300 font-semibold">
                {i18n.language === 'fr' 
                  ? 'Paiement sécurisé'
                  : i18n.language === 'ht'
                  ? 'Peyman sekirize'
                  : 'Secure payment'}
              </p>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-12 text-center bg-gray-900 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">
              {i18n.language === 'fr' ? 'Questions?' : i18n.language === 'ht' ? 'Kesyon?' : 'Questions?'}
            </h4>
            <a href="mailto:contact@justiceforbarran.com" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
              contact@justiceforbarran.com
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-8 bg-red-900 border-t-4 border-red-600">
        <p className="text-gray-300">
          {i18n.language === 'fr' 
            ? 'Merci de soutenir la justice pour Barran'
            : i18n.language === 'ht'
            ? 'Mèsi pou sipòte jistis pou Barran'
            : 'Thank you for supporting justice for Barran'}
        </p>
      </div>
    </div>
  );
}
