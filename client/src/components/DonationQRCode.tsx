import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { Copy, Check } from 'lucide-react';
import StripePaymentModal from './StripePaymentModal';

export default function DonationQRCode() {
  const { i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');
  const [copied, setCopied] = useState(false);
  const [showStripeModal, setShowStripeModal] = useState(false);

  const donationAmounts = [5, 10, 20, 50, 100];

  // Generate Stripe payment links for each amount
  const generateStripeCheckoutLink = (amount: number) => {
    // These are Stripe payment links that should be created in your Stripe dashboard
    // Format: https://buy.stripe.com/test/...
    // For now, we'll use a generic Stripe checkout URL
    const stripeLinks: { [key: number]: string } = {
      5: 'https://buy.stripe.com/test/cN2aFa9OI6Oy0O0dQQ',
      10: 'https://buy.stripe.com/test/cN2aFa9OI6Oy0O0dQQ',
      20: 'https://buy.stripe.com/test/cN2aFa9OI6Oy0O0dQQ',
      50: 'https://buy.stripe.com/test/cN2aFa9OI6Oy0O0dQQ',
      100: 'https://buy.stripe.com/test/cN2aFa9OI6Oy0O0dQQ',
    };
    return stripeLinks[amount] || `https://buy.stripe.com/test/cN2aFa9OI6Oy0O0dQQ?amount=${amount * 100}`;
  };

  // Generate QR code for e-Transfer (GoFundMe)
  const generateETransferQRValue = () => {
    return 'https://gofund.me/role.flip.tall';
  };

  // Generate QR code for Stripe payment link
  const generateStripQRValue = (amount: number) => {
    return generateStripeCheckoutLink(amount);
  };

  // Handle QR code click
  const handleQRCodeClick = (url: string) => {
    window.open(url, '_blank');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* CURRENCY SELECTOR */}
      <div className="flex gap-2 mb-4 justify-center">
        <button
          onClick={() => setCurrency('CAD')}
          className={`px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-md hover:shadow-lg ${
            currency === 'CAD'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇨🇦 CAD
        </button>
        <button
          onClick={() => setCurrency('USD')}
          className={`px-6 py-3 rounded-lg font-bold text-base transition-colors shadow-md hover:shadow-lg ${
            currency === 'USD'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇺🇸 USD
        </button>
      </div>

      {/* DONATION AMOUNTS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {donationAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => setSelectedAmount(amount)}
            className={`py-4 px-3 rounded-lg font-bold text-base md:text-lg transition-all transform hover:scale-105 active:scale-95 ${
              selectedAmount === amount
                ? 'bg-blue-600 text-white ring-2 ring-blue-800 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-md'
            }`}
          >
            {currency}${amount}
          </button>
        ))}
      </div>

      {selectedAmount && (
        <div className="space-y-6">
          {/* E-TRANSFER SECTION - PRIMARY */}
          <div className="border-2 border-green-500 bg-green-50 rounded-lg p-6">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-green-900 mb-2">
                {i18n.language === 'fr' ? '💳 Virement Interac' : '💳 e-Transfer'}
              </h3>
              <p className="text-sm text-green-800">
                {i18n.language === 'fr'
                  ? 'Rapide et direct - Pas de frais'
                  : 'Fast & Direct - No Fees'}
              </p>
            </div>

            {/* E-TRANSFER QR CODE */}
            <div className="flex justify-center mb-4">
              <div 
                className="bg-white p-8 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow hover:scale-105 transform"
                onClick={() => handleQRCodeClick(generateETransferQRValue())}
                title="Click to open e-Transfer"
              >
                <QRCodeSVG
                  value={generateETransferQRValue()}
                  size={300}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="#FFFFFF"
                />
              </div>
            </div>

            <p className="text-xs text-green-800 text-center font-mono mb-3">
              justiceforbarran@gmail.com
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => copyToClipboard('justiceforbarran@gmail.com')}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-bold text-base hover:bg-green-700 active:bg-green-800 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                {copied ? (
                  <>
                    <Check size={16} /> {i18n.language === 'fr' ? 'Copié!' : 'Copied!'}
                  </>
                ) : (
                  <>
                    <Copy size={16} /> {i18n.language === 'fr' ? 'Copier Email' : 'Copy Email'}
                  </>
                )}
              </button>
              <button
                onClick={() => handleQRCodeClick(generateETransferQRValue())}
                className="flex-1 bg-green-700 text-white py-3 px-4 rounded-lg font-bold text-base hover:bg-green-800 active:bg-green-900 transition-colors shadow-md hover:shadow-lg"
              >
                {i18n.language === 'fr' ? 'Ouvrir' : 'Open'}
              </button>
            </div>

            <p className="text-xs text-green-700 text-center mt-3">
              {i18n.language === 'fr'
                ? 'Scannez le code QR ou copiez l\'email ci-dessus'
                : 'Scan QR code or copy email above'}
            </p>
          </div>

          {/* BANK TRANSFER SECTION - SECONDARY */}
          <div className="border-2 border-blue-500 bg-blue-50 rounded-lg p-6">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {i18n.language === 'fr' ? '🏦 Virement Bancaire' : '🏦 Bank Transfer'}
              </h3>
              <p className="text-sm text-blue-800">
                {i18n.language === 'fr'
                  ? 'Direct au compte TD - Instantané'
                  : 'Direct to TD Account - Instant'}
              </p>
            </div>

            {/* STRIPE PAYMENT QR CODE */}
            <div className="flex justify-center mb-4">
              <div 
                className="bg-white p-8 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow hover:scale-105 transform"
                onClick={() => handleQRCodeClick(generateStripQRValue(selectedAmount))}
                title="Click to open Stripe payment"
              >
                <QRCodeSVG
                  value={generateStripQRValue(selectedAmount)}
                  size={300}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="#FFFFFF"
                />
              </div>
            </div>

            <p className="text-xs text-blue-800 text-center mb-3">
              {i18n.language === 'fr'
                ? 'Compte TD - Aucun frais'
                : 'TD Bank Account - No Fees'}
            </p>

            <button
              onClick={() => copyToClipboard('justiceforbarran@gmail.com')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold text-base hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              {i18n.language === 'fr' ? 'Détails du Compte' : 'Account Details'}
            </button>

            <p className="text-xs text-blue-700 text-center mt-3">
              {i18n.language === 'fr'
                ? 'Scannez le code QR pour les détails du compte'
                : 'Scan QR code for account details'}
            </p>
          </div>

          {/* STRIPE CC - OPTIONAL BACKUP */}
          <div className="border-2 border-gray-400 bg-gray-50 rounded-lg p-6">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {i18n.language === 'fr' ? '💳 Carte de Crédit (Optionnel)' : '💳 Credit Card (Optional)'}
              </h3>
              <p className="text-sm text-gray-700">
                {i18n.language === 'fr'
                  ? 'Via Stripe - Frais de 2.9% + $0.30'
                  : 'Via Stripe - 2.9% + $0.30 fee'}
              </p>
            </div>

            <button
              onClick={() => setShowStripeModal(true)}
              className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-bold text-base hover:bg-gray-700 active:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
            >
              {i18n.language === 'fr' ? 'Payer par Carte' : 'Pay by Card'}
            </button>

            <p className="text-xs text-gray-600 text-center mt-3">
              {i18n.language === 'fr'
                ? 'Pour ceux sans accès à e-Transfer ou virement bancaire'
                : 'For those without e-Transfer or bank access'}
            </p>
          </div>

          {/* AMOUNT DISPLAY */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center">
            <p className="text-sm text-yellow-800 mb-1">
              {i18n.language === 'fr' ? 'Montant du Don:' : 'Donation Amount:'}
            </p>
            <p className="text-3xl font-bold text-yellow-900">
              {currency}${selectedAmount}
            </p>
          </div>
        </div>
      )}

      {/* Stripe Payment Modal */}
      <StripePaymentModal
        isOpen={showStripeModal}
        onClose={() => setShowStripeModal(false)}
        amount={selectedAmount || 0}
        currency={currency}
      />
    </div>
  );
}
