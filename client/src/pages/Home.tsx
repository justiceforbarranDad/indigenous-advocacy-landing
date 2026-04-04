import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BookCover } from '@/components/BookCover';
import { BookInterface } from '@/components/BookInterface';
import { trpc } from '@/lib/trpc';
import QRCode from 'qrcode';

const DONATION_AMOUNTS = [5, 10, 20, 50, 100];

export default function Home() {
  const { i18n } = useTranslation();
  const [bookOpened, setBookOpened] = useState(false);
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

  // If book is opened, show book interface
  if (bookOpened) {
    return (
      <>
        <BookInterface onClose={() => setBookOpened(false)} />
      </>
    );
  }

  // Show book cover as full-screen overlay
  return (
    <>
      {/* BOOK COVER - FULL SCREEN */}
      <BookCover onEnter={() => setBookOpened(true)} />

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
    </>
  );
}
