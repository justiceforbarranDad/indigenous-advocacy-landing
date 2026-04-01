import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Copy, Check, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function EasyDonate() {
  const { i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  const amounts = [5, 10, 20, 50, 100, 500, 1000];
  
  // Stripe payment link for direct payments
  const stripePaymentLink = 'https://buy.stripe.com/eVqeVdewcema0IBdJf9EI00';

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    // Scroll to QR code after a short delay
    setTimeout(() => {
      qrRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = `donation-${selectedAmount}-qr.png`;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={40} className="text-red-700 fill-red-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {i18n.language === 'fr' ? 'Donner Facilement' : 'Easy Donate'}
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Scannez le code QR pour payer instantanément. Aucune carte de crédit requise.'
              : 'Scan the QR code to pay instantly. No credit card required.'}
          </p>
        </div>

        {/* AMOUNT SELECTOR */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-red-700">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {i18n.language === 'fr' ? 'Sélectionner un montant' : 'Select Amount'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`py-4 px-4 rounded-lg font-bold text-lg transition-all min-h-[44px] ${
                  selectedAmount === amount
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* QR CODE SECTION */}
        {selectedAmount && (
          <div className="space-y-6">
            {/* CONFIRMATION */}
            <div className="bg-red-100 p-6 rounded-lg border-2 border-red-500 text-center">
              <p className="text-xl font-bold text-red-900">
                {i18n.language === 'fr'
                  ? `Vous avez sélectionné: $${selectedAmount} CAD`
                  : `You selected: $${selectedAmount} CAD`}
              </p>
            </div>

            {/* QR CODE */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                <QrCode size={32} className="text-blue-600" />
                {i18n.language === 'fr' ? 'Scannez pour payer' : 'Scan to Pay'}
              </h3>
              
              <p className="text-slate-600 mb-6">
                {i18n.language === 'fr'
                  ? 'Utilisez la caméra de votre téléphone pour scanner ce code QR'
                  : 'Use your phone camera to scan this QR code'}
              </p>

              {/* QR CODE DISPLAY */}
              <div ref={qrRef} className="flex justify-center mb-6 bg-gray-50 p-6 rounded-lg">
                <QRCodeSVG
                  value={stripePaymentLink}
                  size={256}
                  level="H"
                  includeMargin={true}
                  className="border-4 border-gray-300 rounded"
                />
              </div>

              {/* DOWNLOAD BUTTON */}
              <button
                onClick={downloadQRCode}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors min-h-[44px] mb-4"
              >
                {i18n.language === 'fr' ? '📥 Télécharger le code QR' : '📥 Download QR Code'}
              </button>

              {/* INSTRUCTIONS */}
              <div className="bg-blue-50 p-4 rounded-lg text-sm text-slate-700 text-left">
                <p className="font-bold mb-2">
                  {i18n.language === 'fr' ? '📱 Comment ça marche:' : '📱 How it works:'}
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>{i18n.language === 'fr' ? 'Ouvrez l\'appareil photo de votre téléphone' : 'Open your phone camera'}</li>
                  <li>{i18n.language === 'fr' ? 'Pointez vers ce code QR' : 'Point at this QR code'}</li>
                  <li>{i18n.language === 'fr' ? 'Appuyez sur le lien qui apparaît' : 'Tap the link that appears'}</li>
                  <li>{i18n.language === 'fr' ? 'Complétez le paiement' : 'Complete payment'}</li>
                </ol>
              </div>
            </div>

            {/* ALTERNATIVE METHODS */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {i18n.language === 'fr' ? 'Autres méthodes de paiement' : 'Alternative Payment Methods'}
              </h3>
              
              {/* E-TRANSFER */}
              <div className="mb-6 pb-6 border-b">
                <h4 className="font-bold text-lg text-slate-900 mb-3">
                  {i18n.language === 'fr' ? '💳 Virement Interac' : '💳 Interac e-Transfer'}
                </h4>
                <p className="text-slate-600 mb-3">
                  {i18n.language === 'fr'
                    ? 'Envoyez un virement à:'
                    : 'Send e-Transfer to:'}
                </p>
                <div className="bg-green-50 p-4 rounded border-2 border-green-300">
                  <code className="font-mono font-bold text-lg">justiceforbarran@gmail.com</code>
                </div>
              </div>

              {/* MOBILE WALLET */}
              <div className="mb-6 pb-6 border-b">
                <h4 className="font-bold text-lg text-slate-900 mb-3">
                  {i18n.language === 'fr' ? '📱 Portefeuille Mobile' : '📱 Mobile Wallet'}
                </h4>
                <p className="text-slate-600 mb-3">
                  {i18n.language === 'fr'
                    ? 'Apple Pay • Google Pay • Samsung Pay'
                    : 'Apple Pay • Google Pay • Samsung Pay'}
                </p>
                  <a
                    href={stripePaymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors min-h-[44px]"
                  >
                    {i18n.language === 'fr' ? 'Payer maintenant' : 'Pay Now'}
                  </a>
              </div>

              {/* CRYPTO */}
              <div className="mb-6 pb-6 border-b">
                <h4 className="font-bold text-lg text-slate-900 mb-3">
                  {i18n.language === 'fr' ? '₿ Crypto-monnaie' : '₿ Cryptocurrency'}
                </h4>
                <p className="text-slate-600 mb-3">
                  {i18n.language === 'fr'
                    ? 'Bitcoin • Ethereum • Autres'
                    : 'Bitcoin • Ethereum • Others'}
                </p>
                <p className="text-sm text-slate-600">
                  {i18n.language === 'fr'
                    ? 'Contactez-nous pour les adresses de portefeuille'
                    : 'Contact us for wallet addresses'}
                </p>
              </div>

              {/* BANK TRANSFER */}
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-3">
                  {i18n.language === 'fr' ? '🏦 Virement Bancaire' : '🏦 Bank Transfer'}
                </h4>
                <p className="text-slate-600">
                  {i18n.language === 'fr'
                    ? 'Virements internationaux acceptés. Contactez-nous pour les détails.'
                    : 'International transfers accepted. Contact us for details.'}
                </p>
              </div>
            </div>

            {/* THANK YOU MESSAGE */}
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg shadow-lg p-8 text-center border-2 border-red-300">
              <p className="text-lg font-bold text-red-900">
                {i18n.language === 'fr'
                  ? '❤️ Merci de soutenir la justice pour Barran'
                  : '❤️ Thank you for supporting justice for Barran'}
              </p>
              <p className="text-slate-700 mt-2">
                {i18n.language === 'fr'
                  ? 'Chaque don finance directement la bataille juridique et les efforts de changement systémique.'
                  : 'Every donation directly funds the legal battle and systemic change efforts.'}
              </p>
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {!selectedAmount && (
          <div className="bg-gray-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-300">
            <QrCode size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-slate-600">
              {i18n.language === 'fr'
                ? 'Sélectionnez un montant ci-dessus pour voir le code QR'
                : 'Select an amount above to see the QR code'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
