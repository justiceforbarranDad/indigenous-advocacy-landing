import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import * as QRCode from 'qrcode.react';
const QR = QRCode.QRCodeSVG as any;
import { Heart, Copy, Check } from 'lucide-react';

const PRESET_AMOUNTS = [5, 10, 20, 50, 100, 250, 500, 1000];

export default function DonateStripeQR() {
  const { t, i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const createPaymentLinkMutation = trpc.stripe.createPaymentLink.useMutation();

  // Determine the actual amount to use (custom or preset)
  const actualAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  useEffect(() => {
    if (actualAmount >= 0.50) {
      setError('');
      generatePaymentLink();
    }
  }, [actualAmount, isRecurring]);

  const generatePaymentLink = async () => {
    if (actualAmount < 0.50) {
      setError(i18n.language === 'fr' ? 'Le montant minimum est $0.50' : 'Minimum donation is $0.50');
      return;
    }
    setLoading(true);
    try {
      const result = await createPaymentLinkMutation.mutateAsync({
        amount: actualAmount,
        isRecurring,
      });
      setPaymentUrl(result.url);
    } catch (error) {
      console.error('Error generating payment link:', error);
      setError(i18n.language === 'fr' ? 'Erreur lors de la génération du lien' : 'Error generating payment link');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (paymentUrl) {
      navigator.clipboard.writeText(paymentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {i18n.language === 'fr' ? 'Faire un Don' : 'Make a Donation'}
          </h1>
          <p className="text-lg text-slate-600">
            {i18n.language === 'fr' 
              ? 'Scannez le code QR ou cliquez sur le lien pour donner' 
              : 'Scan the QR code or click the link to donate'}
          </p>
        </div>

        {/* Donation Type Selection */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {i18n.language === 'fr' ? 'Type de don' : 'Donation Type'}
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setIsRecurring(false)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  !isRecurring
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {i18n.language === 'fr' ? 'Une seule fois' : 'One-Time'}
              </button>
              <button
                onClick={() => setIsRecurring(true)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  isRecurring
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {i18n.language === 'fr' ? 'Mensuel' : 'Monthly'}
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {i18n.language === 'fr' ? 'Montant' : 'Amount'}: ${actualAmount || selectedAmount}
            </h2>
            
            {/* Preset Amounts */}
            <div className="mb-6">
              <p className="text-sm text-slate-600 mb-3">
                {i18n.language === 'fr' ? 'Montants prédéfinis:' : 'Preset amounts:'}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {PRESET_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                      !customAmount && selectedAmount === amount
                        ? 'bg-green-600 text-white shadow-lg scale-105'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                {i18n.language === 'fr' ? 'Autre montant' : 'Other Amount'}
              </label>
              <div className="flex gap-2 items-center">
                <span className="text-2xl font-bold text-slate-600">$</span>
                <input
                  type="number"
                  min="0.50"
                  step="0.01"
                  placeholder={i18n.language === 'fr' ? 'Entrez un montant' : 'Enter amount'}
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) {
                      setSelectedAmount(0);
                    }
                  }}
                  className="flex-1 px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg font-semibold"
                />
              </div>
              <p className="text-xs text-blue-600 mt-2">
                {i18n.language === 'fr' ? 'Montant minimum: $0.50' : 'Minimum: $0.50'}
              </p>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-600 text-red-700 rounded">
                {error}
              </div>
            )}
          </div>

          {/* QR Code Section */}
          {paymentUrl && !error && (
            <div className="bg-slate-50 rounded-lg p-8 text-center mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {i18n.language === 'fr' ? 'Code QR' : 'QR Code'}
              </h3>
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <QR value={paymentUrl} size={256} level="H" includeMargin={true} />
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                {i18n.language === 'fr' 
                  ? 'Scannez avec votre téléphone pour donner' 
                  : 'Scan with your phone to donate'}
              </p>
            </div>
          )}

          {/* Payment Link */}
          {paymentUrl && !error && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                {i18n.language === 'fr' ? 'Lien de paiement' : 'Payment Link'}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={paymentUrl}
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? (i18n.language === 'fr' ? 'Copié!' : 'Copied!') : (i18n.language === 'fr' ? 'Copier' : 'Copy')}
                </button>
              </div>
            </div>
          )}

          {/* Direct Payment Button */}
          {paymentUrl && !error && (
            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Heart size={20} />
              {i18n.language === 'fr' ? 'Donner maintenant' : 'Donate Now'}
            </a>
          )}

          {loading && (
            <div className="text-center py-4">
              <p className="text-slate-600">
                {i18n.language === 'fr' ? 'Génération du lien...' : 'Generating link...'}
              </p>
            </div>
          )}
        </div>

        {/* Impact Message */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
          <h3 className="font-bold text-amber-900 mb-2">
            {i18n.language === 'fr' ? 'Votre impact' : 'Your Impact'}
          </h3>
          <p className="text-amber-800 text-sm">
            {i18n.language === 'fr'
              ? `Chaque don de $${actualAmount || selectedAmount} finance la défense juridique et le changement systémique pour les familles autochtones.`
              : `Every $${actualAmount || selectedAmount} donation funds legal defense and systemic change for Indigenous families.`}
          </p>
        </div>
      </div>
    </div>
  );
}
