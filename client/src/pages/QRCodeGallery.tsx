import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, Download } from 'lucide-react';

const PRESET_AMOUNTS = [5, 10, 20, 50, 100, 500, 1000];

export default function QRCodeGallery() {
  const { t, i18n } = useTranslation();
  const [qrCodes, setQrCodes] = useState<{ amount: number; url: string }[]>([]);
  const [loading, setLoading] = useState(true);

  const createPaymentLinkMutation = trpc.stripe.createPaymentLink.useMutation();

  useEffect(() => {
    const generateQRCodes = async () => {
      setLoading(true);
      try {
        const codes = [];
        for (const amount of PRESET_AMOUNTS) {
          const result = await createPaymentLinkMutation.mutateAsync({
            amount,
            isRecurring: false,
          });
          codes.push({ amount, url: result.url });
        }
        setQrCodes(codes);
      } catch (error) {
        console.error('Error generating QR codes:', error);
      } finally {
        setLoading(false);
      }
    };

    generateQRCodes();
  }, []);

  const downloadQRCode = (amount: number) => {
    const element = document.getElementById(`qr-${amount}`);
    if (element) {
      const svg = element.querySelector('svg');
      if (svg) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const svgData = new XMLSerializer().serializeToString(svg);
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `donate-${amount}-qr.png`;
          link.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smartphone size={32} className="text-red-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {i18n.language === 'fr' ? 'Codes QR de Don' : 'Donation QR Codes'}
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Scannez n\'importe quel code QR avec votre téléphone pour faire un don immédiatement. Pas de compte requis.'
              : 'Scan any QR code with your phone to donate instantly. No account required.'}
          </p>
        </div>

        {/* INSTRUCTIONS */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12 border-l-4 border-red-700">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            {i18n.language === 'fr' ? 'Comment ça marche?' : 'How It Works'}
          </h2>
          <ol className="space-y-2 text-slate-700">
            <li className="flex gap-3">
              <span className="font-bold text-red-700 flex-shrink-0">1.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Ouvrez l\'appareil photo de votre téléphone'
                  : 'Open your phone\'s camera app'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-700 flex-shrink-0">2.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Pointez vers le code QR ci-dessous'
                  : 'Point at the QR code below'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-700 flex-shrink-0">3.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Appuyez sur la notification qui apparaît'
                  : 'Tap the notification that appears'}
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-red-700 flex-shrink-0">4.</span>
              <span>
                {i18n.language === 'fr'
                  ? 'Complétez le paiement par carte de crédit'
                  : 'Complete payment with credit card'}
              </span>
            </li>
          </ol>
        </div>

        {/* QR CODES GRID */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
            </div>
            <p className="text-slate-600 mt-4">
              {i18n.language === 'fr' ? 'Génération des codes QR...' : 'Generating QR codes...'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {qrCodes.map(({ amount, url }) => (
              <div
                key={amount}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
              >
                {/* Amount Badge */}
                <div className="bg-red-700 text-white px-4 py-2 rounded-full font-bold text-lg mb-4">
                  ${amount}
                </div>

                {/* QR Code */}
                <div
                  id={`qr-${amount}`}
                  className="bg-white p-4 rounded-lg border-2 border-slate-200 mb-4"
                >
                  <QRCodeSVG value={url} size={200} level="H" includeMargin={true} />
                </div>

                {/* Label */}
                <p className="text-sm text-slate-600 text-center mb-4">
                  {i18n.language === 'fr' ? 'Scannez pour donner' : 'Scan to donate'}
                </p>

                {/* Download Button */}
                <button
                  onClick={() => downloadQRCode(amount)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                >
                  <Download size={16} />
                  {i18n.language === 'fr' ? 'Télécharger' : 'Download'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER CTA */}
        <div className="mt-12 bg-red-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            {i18n.language === 'fr'
              ? 'Partagez ces codes QR'
              : 'Share These QR Codes'}
          </h3>
          <p className="text-red-100 mb-6">
            {i18n.language === 'fr'
              ? 'Téléchargez et partagez ces codes QR sur les réseaux sociaux, par email ou imprimez-les pour les afficher.'
              : 'Download and share these QR codes on social media, email, or print them to display.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block bg-white text-red-700 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
            >
              {i18n.language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
            </a>
            <a
              href="/donate-stripe-qr"
              className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
            >
              {i18n.language === 'fr' ? 'Montant personnalisé' : 'Custom Amount'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
