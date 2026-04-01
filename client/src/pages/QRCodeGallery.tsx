import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Heart, Plus } from 'lucide-react';

// QR codes point to Manus domain with amount parameters
// The website handles the donation routing from there
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/eVqeVdewcema0IBdJf9EI00';

const PRESET_AMOUNTS = [
  { 
    amount: 5, 
    impact: 'Supports the legal battle for justice',
    stripeLink: STRIPE_PAYMENT_LINK
  },
  { 
    amount: 10, 
    impact: 'Helps pay for lawyer fees and court costs',
    stripeLink: STRIPE_PAYMENT_LINK
  },
  { 
    amount: 20, 
    impact: 'Funds advocacy and documentation efforts',
    stripeLink: STRIPE_PAYMENT_LINK
  },
  { 
    amount: 50, 
    impact: 'Covers travel and battle expenses',
    stripeLink: STRIPE_PAYMENT_LINK
  },
  { 
    amount: 100, 
    impact: 'Supports ongoing legal representation',
    stripeLink: STRIPE_PAYMENT_LINK
  },
  { 
    amount: 500, 
    impact: 'Funds major legal proceedings',
    stripeLink: STRIPE_PAYMENT_LINK
  },
  { 
    amount: 1000, 
    impact: 'Covers comprehensive legal battle costs',
    stripeLink: STRIPE_PAYMENT_LINK
  },
];

export default function QRCodeGallery() {
  const { i18n } = useTranslation();
  const [customAmount, setCustomAmount] = useState('');
  const [customQRUrl, setCustomQRUrl] = useState('');

  const handleCustomAmount = () => {
    if (!customAmount || parseFloat(customAmount) < 0.50) {
      alert(i18n.language === 'fr' ? 'Veuillez entrer un montant valide (minimum $0.50)' : 'Please enter a valid amount (minimum $0.50)');
      return;
    }

    // For custom amounts, use Stripe payment link
    setCustomQRUrl(STRIPE_PAYMENT_LINK);
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

        {/* QR CODES GRID - 7 PRESET AMOUNTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {PRESET_AMOUNTS.map(({ amount, impact, stripeLink }) => (
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
                <QRCodeSVG value={stripeLink} size={180} level="H" includeMargin={true} />
              </div>

              {/* Label */}
              <p className="text-xs text-slate-600 text-center mb-4 uppercase tracking-wider font-semibold">
                {i18n.language === 'fr' ? 'Scannez pour donner' : 'Scan to donate'}
              </p>

              {/* Download Button */}
              <button
                onClick={() => downloadQRCode(amount)}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm min-h-[44px]"
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
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-green-700 font-semibold text-lg min-h-[44px]"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleCustomAmount}
                className="w-full sm:w-auto px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-colors min-h-[44px]"
              >
                {i18n.language === 'fr' ? 'Générer' : 'Generate'}
              </button>
            </div>
          </div>

          {/* Custom QR Code Display */}
          {customQRUrl && (
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <p className="text-center font-semibold text-green-900 mb-4">
                {i18n.language === 'fr' ? 'Votre code QR personnalisé' : 'Your Custom QR Code'}
              </p>
              <div className="flex flex-col items-center gap-4">
                <div id="qr-custom" className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <QRCodeSVG value={customQRUrl} size={200} level="H" includeMargin={true} />
                </div>
                <button
                  onClick={() => downloadQRCode(0, true)}
                  className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[44px]"
                >
                  <Download size={18} />
                  {i18n.language === 'fr' ? 'Télécharger' : 'Download'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER INFO */}
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-700 text-center">
          <p className="text-slate-700">
            {i18n.language === 'fr'
              ? '💙 Merci de soutenir la justice pour Barran. Chaque don compte.'
              : '💙 Thank you for supporting justice for Barran. Every donation counts.'}
          </p>
        </div>
      </div>
    </div>
  );
}
