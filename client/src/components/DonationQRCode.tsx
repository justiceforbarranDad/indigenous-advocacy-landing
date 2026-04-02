import { QRCodeSVG as QRCode } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function DonationQRCode() {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');
  const [copied, setCopied] = useState(false);

  const donationAmounts = [5, 10, 20, 50, 100];

  // Generate QR code value for bank transfer
  const generateBankQRValue = (amount: number) => {
    // Simple text format that's easy to scan
    return `justiceforbarran.ca/bank/${amount}/${currency}`;
  };

  // Generate QR code value for e-Transfer
  const generateETransferQRValue = (amount: number) => {
    // Simple email format
    return `justiceforbarran@gmail.com`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Amex', icon: '💳' },
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Google Pay', icon: '🔵' },
    { name: 'Klarna', icon: '⏰' },
    { name: 'Sezzle', icon: '⏰' },
    { name: 'E-Transfer', icon: '📧' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto px-4">
      {/* CURRENCY SELECTOR */}
      <div className="flex gap-2 justify-center w-full">
        <button
          onClick={() => setCurrency('CAD')}
          className={`px-6 py-2 rounded-lg font-bold text-sm transition-all border-2 ${
            currency === 'CAD'
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-white text-gray-800 border-gray-300 hover:border-red-600'
          }`}
        >
          🇨🇦 CAD
        </button>
        <button
          onClick={() => setCurrency('USD')}
          className={`px-6 py-2 rounded-lg font-bold text-sm transition-all border-2 ${
            currency === 'USD'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-800 border-gray-300 hover:border-blue-600'
          }`}
        >
          🇺🇸 USD
        </button>
      </div>

      {/* DONATION AMOUNTS - CLICK TO SHOW QR CODES */}
      <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-4 w-full">
        <h4 className="text-sm font-bold mb-3 text-center text-gray-800">
          {t('donate.monthlyDonation')} - {t('donate.selectAmount')}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {donationAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-3 px-2 rounded-lg font-bold text-sm transition-all border-2 ${
                selectedAmount === amount
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-blue-600 hover:bg-blue-100'
              }`}
            >
              {currency}${amount}
            </button>
          ))}
        </div>
      </div>

      {/* QR CODES FOR BANK TRANSFER & E-TRANSFER - SHOWS WHEN AMOUNT SELECTED */}
      {selectedAmount && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* BANK TRANSFER QR CODE */}
          <div className="border-2 border-green-400 bg-green-50 rounded-lg p-6 text-center">
            <h5 className="text-sm font-bold text-gray-800 mb-2">🏦 Bank Transfer</h5>
            <p className="text-2xl font-bold text-green-600 mb-1">
              {currency}${selectedAmount}
            </p>
            <p className="text-xs text-gray-600 mb-4 font-semibold">
              Scan to donate via bank transfer
            </p>

            {/* QR CODE */}
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCode
                  value={generateBankQRValue(selectedAmount)}
                  size={200}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="#FFFFFF"
                />
              </div>
            </div>

            <p className="text-xs text-gray-700 text-center font-mono">
              justiceforbarran.ca/bank/{selectedAmount}/{currency}
            </p>
          </div>

          {/* E-TRANSFER QR CODE */}
          <div className="border-2 border-orange-400 bg-orange-50 rounded-lg p-6 text-center">
            <h5 className="text-sm font-bold text-gray-800 mb-2">📧 E-Transfer</h5>
            <p className="text-2xl font-bold text-orange-600 mb-1">
              {currency}${selectedAmount}
            </p>
            <p className="text-xs text-gray-600 mb-4 font-semibold">
              Scan to send e-Transfer
            </p>

            {/* QR CODE */}
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCode
                  value={generateETransferQRValue(selectedAmount)}
                  size={200}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="#FFFFFF"
                />
              </div>
            </div>

            <p className="text-xs text-gray-700 text-center font-mono">
              justiceforbarran@gmail.com
            </p>
          </div>
        </div>
      )}

      {/* CHANGE AMOUNT BUTTON */}
      {selectedAmount && (
        <div className="text-center">
          <button
            onClick={() => setSelectedAmount(null)}
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-semibold"
          >
            ← {t('donate.changeAmount')}
          </button>
        </div>
      )}

      {/* STRIPE CREDIT CARD PAYMENT SECTION */}
      <div className="border-2 border-purple-400 bg-purple-50 rounded-lg p-4 w-full">
        <h4 className="text-sm font-bold mb-3 text-center text-gray-800">
          💳 Credit Card Payment (Stripe)
        </h4>
        <p className="text-xs text-gray-600 mb-4 text-center">
          Use Stripe for credit card, Apple Pay, or Google Pay
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {donationAmounts.map((amount) => (
            <a
              key={amount}
              href={`https://buy.stripe.com/test_link_for_${currency}_${amount}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-2 rounded-lg font-bold text-sm transition-all border-2 bg-white text-gray-800 border-gray-300 hover:border-purple-600 hover:bg-purple-100 text-center"
            >
              {currency}${amount}
            </a>
          ))}
        </div>
      </div>

      {/* ACCEPTED PAYMENT METHODS */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4 w-full">
        <p className="text-xs font-bold text-gray-700 mb-2 text-center">
          {t('donate.weAccept')}
        </p>
        <p className="text-xs text-gray-600 mb-3 text-center italic">
          {t('donate.internationalDonations')}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-1 bg-white rounded p-2 border border-gray-200">
              <span className="text-lg">{method.icon}</span>
              <span className="text-xs font-semibold text-gray-700 line-clamp-2 text-center">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* E-TRANSFER DETAILS SECTION */}
      <div className="border-2 border-orange-400 bg-orange-50 p-4 rounded-lg w-full">
        <h5 className="font-bold mb-3 text-sm flex items-center gap-2">
          📧 {t('donate.eTransfer')}
        </h5>
        <div className="flex flex-col sm:flex-row gap-2 mb-3">
          <div className="flex-1 bg-white p-3 rounded border border-orange-300">
            <p className="text-xs font-mono text-center text-gray-800 break-all">
              justiceforbarran@gmail.com
            </p>
          </div>
          <button
            onClick={() => copyToClipboard('justiceforbarran@gmail.com')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap sm:px-4 sm:py-2"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span className="hidden sm:inline">{copied ? t('common.copied') : t('common.copy')}</span>
            <span className="sm:hidden">{copied ? '✓' : '📋'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-700 text-center">
          {t('donate.sendETransferEmail')}
        </p>
      </div>

      {/* SECURITY & INFO */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-lg">🔒</span>
          <div>
            <p className="text-xs font-bold text-blue-900">
              {t('donate.securePayment')}
            </p>
            <p className="text-xs text-blue-800">
              {t('donate.bankEncryption')}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">✓</span>
          <div>
            <p className="text-xs font-bold text-green-900">
              {t('donate.hundredPercentJustice')}
            </p>
            <p className="text-xs text-green-800">
              {t('donate.mcGovern')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
