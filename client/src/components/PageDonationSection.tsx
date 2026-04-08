import { useState } from 'react';
import { Heart, Copy, Check } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface PageDonationSectionProps {
  language: 'en' | 'fr' | 'ht';
}

export default function PageDonationSection({ language }: PageDonationSectionProps) {
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const amounts = [5, 10, 20, 50, 100];

  // Bank details for e-Transfer
  const bankDetails = {
    email: 'justiceforbarran@gmail.com',
    branch: '4303',
    account: '6255007',
    bank: 'TD Bank',
  };

  // Translations
  const translations = {
    en: {
      title: 'Support Justice for Barran',
      subtitle: 'Your donation funds legal defense and systemic change',
      canada: 'Canada (CAD)',
      usa: 'United States (USD)',
      selectAmount: 'Select Amount:',
      eTransfer: 'e-Transfer',
      bankTransfer: 'Bank Transfer',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      bankName: 'Bank',
      branch: 'Branch',
      account: 'Account',
      email: 'e-Transfer Email',
      amount: 'Amount',
      instructions: 'Send e-Transfer to:',
      applePayCC: 'Apple Pay / Credit Card',
      processing: 'Processing...',
      error: 'Error',
    },
    fr: {
      title: 'Soutenir la Justice pour Barran',
      subtitle: 'Votre don finance la défense juridique et le changement systémique',
      canada: 'Canada (CAD)',
      usa: 'États-Unis (USD)',
      selectAmount: 'Sélectionner le montant:',
      eTransfer: 'Virement Interac',
      bankTransfer: 'Virement bancaire',
      copyEmail: 'Copier email',
      copied: 'Copié!',
      bankName: 'Banque',
      branch: 'Succursale',
      account: 'Compte',
      email: 'Email Virement Interac',
      amount: 'Montant',
      instructions: 'Envoyer virement à:',
      applePayCC: 'Apple Pay / Carte de crédit',
      processing: 'Traitement...',
      error: 'Erreur',
    },
    ht: {
      title: 'Sipòte Jistis pou Barran',
      subtitle: 'Donasyon ou finanse defans legal ak chanjman sistematik',
      canada: 'Kanada (CAD)',
      usa: 'Etazini (USD)',
      selectAmount: 'Chwazi montant:',
      eTransfer: 'Virement Interac',
      bankTransfer: 'Virement Bancaire',
      copyEmail: 'Kopye email',
      copied: 'Kopye!',
      bankName: 'Bank',
      branch: 'Branch',
      account: 'Kont',
      email: 'Email Virement Interac',
      amount: 'Montant',
      instructions: 'Voye virement a:',
      applePayCC: 'Apple Pay / Kat Kredit',
      processing: 'Trete...',
      error: 'Erè',
    },
  };

  const t = translations[language];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const createCheckoutMutation = trpc.stripe.createCheckoutSession.useMutation();

  const handleStripeCheckout = async (amount: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await createCheckoutMutation.mutateAsync({
        amount,
        donorName: 'Donor',
        donorEmail: 'donor@justiceforbarran.com',
      });

      if (result?.url) {
        window.location.href = result.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border-2 border-red-300 p-6 my-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Heart className="text-red-600" size={20} />
        <h3 className="text-xl font-bold text-red-900">{t.title}</h3>
      </div>
      <p className="text-red-700 text-sm mb-4">{t.subtitle}</p>

      {/* Currency Selector */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            setCurrency('CAD');
            setSelectedAmount(null);
          }}
          className={`px-4 py-2 rounded text-sm font-bold transition-colors ${
            currency === 'CAD'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇨🇦 {t.canada}
        </button>
        <button
          onClick={() => {
            setCurrency('USD');
            setSelectedAmount(null);
          }}
          className={`px-4 py-2 rounded text-sm font-bold transition-colors ${
            currency === 'USD'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🇺🇸 {t.usa}
        </button>
      </div>

      {/* Amount Selection */}
      <p className="text-sm font-semibold text-gray-700 mb-2">{t.selectAmount}</p>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => setSelectedAmount(amount)}
            className={`py-2 px-2 rounded font-bold text-sm transition-all ${
              selectedAmount === amount
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600'
            }`}
          >
            {currency}${amount}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm mb-4">
          {t.error}: {error}
        </div>
      )}

      {/* Payment Options */}
      {selectedAmount && (
        <div className="space-y-4">
          {currency === 'CAD' ? (
            // CANADIAN: e-Transfer (Zero Fees)
            <div className="bg-white border-2 border-green-500 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-3">✅ {t.eTransfer} - {t.selectAmount} {currency}${selectedAmount}</h4>
              
              {/* Bank Details Box */}
              <div className="bg-green-50 p-3 rounded mb-3 text-sm">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <p className="text-xs text-gray-600">{t.bankName}</p>
                    <p className="font-bold">{bankDetails.bank}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">{t.branch}</p>
                    <p className="font-bold">{bankDetails.branch}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">{t.account}</p>
                    <p className="font-bold">{bankDetails.account}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">{t.amount}</p>
                    <p className="font-bold text-green-600">{currency}${selectedAmount}</p>
                  </div>
                </div>

                {/* Email Copy Button */}
                <div className="bg-white p-2 rounded border border-green-300">
                  <p className="text-xs text-gray-600 mb-1">{t.email}:</p>
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex items-center justify-between bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm font-bold transition-colors"
                  >
                    <span className="font-mono text-xs">{bankDetails.email}</span>
                    {copied ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs text-green-700 text-center">
                💚 {t.instructions} {bankDetails.email}
              </p>
            </div>
          ) : (
            // INTERNATIONAL: Stripe (Apple Pay + Credit Card)
            <div className="bg-white border-2 border-blue-500 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-3">💳 {t.applePayCC} - {currency}${selectedAmount}</h4>
              
              <button
                onClick={() => handleStripeCheckout(selectedAmount)}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded font-bold text-white transition-all ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isLoading ? t.processing : `💳 ${t.applePayCC}`}
              </button>

              <p className="text-xs text-blue-700 text-center mt-2">
                🔒 Secure Stripe payment
              </p>
            </div>
          )}
        </div>
      )}

      {/* Info Footer */}
      {!selectedAmount && (
        <p className="text-xs text-red-600 text-center">
          👆 {t.selectAmount}
        </p>
      )}
    </div>
  );
}
