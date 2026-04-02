import { QRCodeSVG as QRCode } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function DonationQRCode() {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');
  const [copied, setCopied] = useState(false);
  const [subscriptionTerm, setSubscriptionTerm] = useState<'1' | '3' | '6' | '12'>('1');

  // Subscription term options with messaging
  const subscriptionTerms = [
    { value: '1' as const, label: 'Monthly', message: 'Flexible Support - cancel anytime' },
    { value: '3' as const, label: '3 Months', message: 'Sustained Justice - help us plan ahead' },
    { value: '6' as const, label: '6 Months', message: 'Long-term Change - support systemic reform' },
    { value: '12' as const, label: '12 Months', message: 'Annual Justice Fund - year-round advocacy' },
  ];

  // Stripe Payment Links - RECURRING MONTHLY - CAD first (default), then USD
  const paymentLinks = {
    CAD: {
      5: 'https://buy.stripe.com/aFafZh4VC91QbnfcFb9EI07',
      10: 'https://buy.stripe.com/fZufZh3Rydi62QJdJf9EI08',
      20: 'https://buy.stripe.com/dRmbJ1co491Qbnf9sZ9EI09',
      50: 'https://buy.stripe.com/eVq3cvewca5U8b38oV9EI0a',
      100: 'https://buy.stripe.com/6oUeVdafWdi6ajb6gN9EI0b',
    },
    USD: {
      5: 'https://buy.stripe.com/14AaEX5ZGguifDv5cJ9EI0q',
      10: 'https://buy.stripe.com/dRm00jgEk7XMbnf34B9EI0p',
      20: 'https://buy.stripe.com/bJebJ187Oa5UfDv34B9EI0o',
      50: 'https://buy.stripe.com/4gMdR987O0vkajb7kR9EI0n',
      100: 'https://buy.stripe.com/00w00jco47XM3UNfRn9EI0m',
    },
  };

  const donationAmounts = [5, 10, 20, 50, 100];

  const getPaymentLink = (amount: number) => {
    return paymentLinks[currency][amount as keyof typeof paymentLinks['CAD']];
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
    <div className="flex flex-col gap-6">
      {/* ACCEPTED PAYMENT METHODS */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4">
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

      {/* CURRENCY SELECTOR */}
      <div className="flex gap-2 justify-center">
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

      {/* SUBSCRIPTION TERM SELECTOR */}
      <div className="border-2 border-purple-400 bg-purple-50 rounded-lg p-4">
        <h4 className="text-sm font-bold mb-3 text-center text-gray-800">
          Select Your Commitment
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {subscriptionTerms.map((term) => (
            <button
              key={term.value}
              onClick={() => setSubscriptionTerm(term.value)}
              className={`py-2 px-2 rounded-lg font-bold text-xs transition-all border-2 ${
                subscriptionTerm === term.value
                  ? 'bg-purple-600 text-white border-purple-600 shadow-lg'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-purple-600 hover:bg-purple-100'
              }`}
            >
              {term.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-700 text-center mt-3 italic">
          {subscriptionTerms.find(t => t.value === subscriptionTerm)?.message}
        </p>
      </div>

      {/* DONATION AMOUNTS - CLICK TO SHOW QR */}
      <div className="border-2 border-blue-400 bg-blue-50 rounded-lg p-4">
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

      {/* QR CODE - SHOWS IMMEDIATELY WHEN AMOUNT SELECTED */}
      {selectedAmount && (
        <div className="border-2 border-green-400 bg-green-50 rounded-lg p-6 text-center animate-in fade-in">
          <p className="text-sm text-gray-600 mb-2">
            {t('donate.amount')}
            <span className="text-3xl font-bold text-green-600 block">
              {currency}${selectedAmount}
            </span>
          </p>
          <p className="text-xs text-gray-600 mb-4 font-semibold">
            {t('donate.pointCamera')}
          </p>

          {/* QR CODE - LINKS TO STRIPE PAYMENT LINK */}
          <div className="flex justify-center mb-4 bg-white p-4 rounded-lg inline-block mx-auto">
            <QRCode
              value={getPaymentLink(selectedAmount)}
              size={220}
              level="H"
              includeMargin={true}
              fgColor="#000000"
              bgColor="#FFFFFF"
            />
          </div>

          {/* DIRECT STRIPE LINK */}
          <a
            href={getPaymentLink(selectedAmount)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors"
          >
            {t('donate.donateNow')}
          </a>

          {/* CHANGE AMOUNT BUTTON */}
          <div className="mt-4">
            <button
              onClick={() => setSelectedAmount(null)}
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline font-semibold"
            >
              ← {t('donate.changeAmount')}
            </button>
          </div>
        </div>
      )}

      {/* E-TRANSFER SECTION */}
      <div className="border-2 border-orange-400 bg-orange-50 p-4 rounded-lg">
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
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
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
