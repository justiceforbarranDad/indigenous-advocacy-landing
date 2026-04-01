import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import { QRCodeSVG } from 'qrcode.react';
import { Smartphone, Download, Heart, Plus } from 'lucide-react';

const PRESET_AMOUNTS = [
  { amount: 5, impact: 'Supports the legal battle for justice' },
  { amount: 10, impact: 'Helps pay for lawyer fees and court costs' },
  { amount: 20, impact: 'Funds advocacy and documentation efforts' },
  { amount: 50, impact: 'Covers travel and battle expenses' },
  { amount: 100, impact: 'Supports ongoing legal representation' },
  { amount: 500, impact: 'Funds major legal proceedings' },
  { amount: 1000, impact: 'Covers comprehensive legal battle costs' },
];

export default function QRCodeGallery() {
  const { t, i18n } = useTranslation();
  const [qrCodes, setQrCodes] = useState<{ amount: number; url: string; impact: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [customAmount, setCustomAmount] = useState('');
  const [customQRUrl, setCustomQRUrl] = useState('');
  const [customLoading, setCustomLoading] = useState(false);

  const createPaymentLinkMutation = trpc.stripe.createPaymentLink.useMutation();

  useEffect(() => {
    const generateQRCodes = async () => {
      setLoading(true);
      try {
        const codes = [];
        for (const item of PRESET_AMOUNTS) {
          const result = await createPaymentLinkMutation.mutateAsync({
            amount: item.amount,
            isRecurring: false,
          });
          codes.push({ amount: item.amount, url: result.url, impact: item.impact });
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

  const handleCustomAmount = async () => {
    if (!customAmount || parseFloat(customAmount) < 0.50) {
      alert(i18n.language === 'fr' ? 'Veuillez entrer un montant valide (minimum $0.50)' : 'Please enter a valid amount (minimum $0.50)');
      return;
    }

    setCustomLoading(true);
    try {
      const result = await createPaymentLinkMutation.mutateAsync({
        amount: parseFloat(customAmount),
        isRecurring: false,
      });
      setCustomQRUrl(result.url);
    } catch (error) {
      console.error('Error creating custom payment link:', error);
      alert(i18n.language === 'fr' ? 'Erreur lors de la création du lien' : 'Error creating payment link');
    } finally {
      setCustomLoading(false);
    }
  };

  const downloadQRCode = (amount: number, isCustom = false) => {
    const elementId = isCustom ? 'qr-custom' : `qr-${amount}`;
    const element = document.getElementById(elementId);
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
          link.download = isCustom ? `donate-custom-qr.png` : `donate-${amount}-qr.png`;
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
            <Heart size={32} className="text-red-700 fill-red-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {i18n.language === 'fr' ? 'Codes QR de Don' : 'Donation QR Codes'}
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Scannez n\'importe quel code QR avec votre téléphone pour faire un don immédiatement. Chaque dollar soutient la bataille juridique pour la justice.'
              : 'Scan any QR code with your phone to donate instantly. Every dollar supports the legal battle for justice.'}
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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {qrCodes.map(({ amount, url, impact }) => (
                <div
                  key={amount}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow border-t-4 border-red-700"
                >
                  {/* Amount Badge */}
                  <div className="bg-red-700 text-white px-4 py-2 rounded-full font-bold text-lg mb-4">
                    ${amount}
                  </div>

                  {/* Impact Description */}
                  <p className="text-sm text-slate-700 text-center font-semibold mb-4 min-h-[40px]">
                    {impact}
                  </p>

                  {/* QR Code */}
                  <div
                    id={`qr-${amount}`}
                    className="bg-white p-4 rounded-lg border-2 border-slate-200 mb-4"
                  >
                    <QRCodeSVG value={url} size={180} level="H" includeMargin={true} />
                  </div>

                  {/* Label */}
                  <p className="text-xs text-slate-600 text-center mb-4 uppercase tracking-wider font-semibold">
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

            {/* CUSTOM AMOUNT SECTION */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-t-4 border-green-700">
              <div className="flex items-center gap-3 mb-6">
                <Plus size={28} className="text-green-700" />
                <h2 className="text-2xl font-bold text-slate-900">
                  {i18n.language === 'fr' ? 'Montant personnalisé' : 'Custom Amount'}
                </h2>
              </div>

              <p className="text-slate-600 mb-6">
                {i18n.language === 'fr'
                  ? 'Entrez n\'importe quel montant pour créer votre propre code QR de don.'
                  : 'Enter any amount to create your own custom donation QR code.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {i18n.language === 'fr' ? 'Montant ($)' : 'Amount ($)'}
                  </label>
                  <input
                    type="number"
                    min="0.50"
                    step="0.01"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder={i18n.language === 'fr' ? 'Ex: 25.00' : 'E.g., 25.00'}
                    className="w-full border-2 border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-700"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    onClick={handleCustomAmount}
                    disabled={customLoading}
                    className="w-full sm:w-auto bg-green-700 hover:bg-green-800 disabled:bg-slate-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors min-h-[44px]"
                  >
                    {customLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        {i18n.language === 'fr' ? 'Génération...' : 'Generating...'}
                      </span>
                    ) : (
                      i18n.language === 'fr' ? 'Générer' : 'Generate'
                    )}
                  </button>
                </div>
              </div>

              {/* Custom QR Code Display */}
              {customQRUrl && (
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    {i18n.language === 'fr' ? 'Votre code QR personnalisé' : 'Your Custom QR Code'}
                  </p>
                  <div
                    id="qr-custom"
                    className="bg-white p-4 rounded-lg border-2 border-slate-200 inline-block mb-4"
                  >
                    <QRCodeSVG value={customQRUrl} size={200} level="H" includeMargin={true} />
                  </div>
                  <p className="text-xs text-slate-600 mb-4">
                    {i18n.language === 'fr' ? 'Montant: ' : 'Amount: '}<span className="font-bold text-green-700">${customAmount}</span>
                  </p>
                  <button
                    onClick={() => downloadQRCode(0, true)}
                    className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors mx-auto"
                  >
                    <Download size={16} />
                    {i18n.language === 'fr' ? 'Télécharger' : 'Download'}
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* IMPACT SUMMARY */}
        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            {i18n.language === 'fr'
              ? 'Chaque don soutient la justice'
              : 'Every Donation Supports Justice'}
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Tous les dons vont directement aux frais juridiques, aux dépenses de bataille, à l\'essence, et à d\'autres coûts essentiels pour la bataille juridique pour Barran.'
              : 'All donations go directly to lawyer fees, battle expenses, gas, and other essential costs for the legal battle for Barran.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block bg-white text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
            >
              {i18n.language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
            </a>
            <a
              href="/donate-stripe-qr"
              className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
            >
              {i18n.language === 'fr' ? 'Autres options de don' : 'Other Donation Options'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
