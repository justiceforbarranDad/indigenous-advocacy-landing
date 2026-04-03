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

  // Bank account details for e-Transfer
  const bankDetails = {
    bankName: 'TD Bank',
    branchNumber: '4303',
    accountNumber: '6255007',
    email: 'justiceforbarran@gmail.com',
  };

  // Generate e-Transfer QR code value (email)
  const generateETransferQRValue = () => {
    return `mailto:${bankDetails.email}`;
  };

  // Generate bank details text for QR code
  const generateBankDetailsText = () => {
    return `TD Bank\nBranch: ${bankDetails.branchNumber}\nAccount: ${bankDetails.accountNumber}`;
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

            {/* TD BANK DETAILS SECTION */}
            <div className="border-2 border-blue-500 bg-blue-50 rounded-lg p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {i18n.language === 'fr' ? '🏦 Détails du Compte TD' : '🏦 TD Bank Account Details'}
                </h3>
                <p className="text-sm text-blue-800">
                  {i18n.language === 'fr'
                    ? 'Virement direct - Instantané'
                    : 'Direct Transfer - Instant'}
                </p>
              </div>

              {/* BANK DETAILS */}
              <div className="space-y-3 mb-6 bg-white p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-semibold text-blue-900">{i18n.language === 'fr' ? 'Banque:' : 'Bank:'}</span>
                  <span className="text-blue-700">{bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-blue-900">{i18n.language === 'fr' ? 'Succursale:' : 'Branch:'}</span>
                  <span className="text-blue-700">{bankDetails.branchNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-blue-900">{i18n.language === 'fr' ? 'Compte:' : 'Account:'}</span>
                  <span className="text-blue-700">{bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-blue-900">{i18n.language === 'fr' ? 'Email:' : 'Email:'}</span>
                  <span className="text-blue-700">{bankDetails.email}</span>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(`${bankDetails.bankName}\nBranch: ${bankDetails.branchNumber}\nAccount: ${bankDetails.accountNumber}`)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold text-base hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md hover:shadow-lg mb-3"
              >
                {i18n.language === 'fr' ? 'Copier Détails' : 'Copy Details'}
              </button>

              <p className="text-xs text-blue-700 text-center">
                {i18n.language === 'fr'
                  ? 'Copiez les détails et envoyez via e-Transfer à justiceforbarran@gmail.com'
                  : 'Copy details and send via e-Transfer to justiceforbarran@gmail.com'}
              </p>
            </div>

            <p className="text-xs text-blue-700 text-center mt-3">
              {i18n.language === 'fr'
                ? 'Scannez le code QR pour les détails du compte'
                : 'Scan QR code for account details'}
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


    </div>
  );
}
