import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';

interface StripePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  currency: 'CAD' | 'USD';
}

export default function StripePaymentModal({
  isOpen,
  onClose,
  amount,
  currency,
}: StripePaymentModalProps) {
  const { i18n } = useTranslation();
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCheckoutSession = trpc.stripe.createCheckoutSession.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Validate inputs
      if (!donorName.trim()) {
        throw new Error(i18n.language === 'fr' ? 'Le nom est requis' : 'Name is required');
      }
      if (!donorEmail.trim()) {
        throw new Error(i18n.language === 'fr' ? 'L\'email est requis' : 'Email is required');
      }

      // Convert CAD to USD if needed (for Stripe processing)
      const amountInUSD = currency === 'CAD' ? amount * 0.74 : amount;

      // Create checkout session
      const result = await createCheckoutSession.mutateAsync({
        amount: amountInUSD,
        donorName,
        donorEmail,
        message,
      });

      if (result.url) {
        // Redirect to Stripe checkout
        window.location.href = result.url;
      } else {
        throw new Error(i18n.language === 'fr' ? 'Impossible de créer la session de paiement' : 'Failed to create payment session');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {i18n.language === 'fr' ? '💳 Payer par Carte' : '💳 Pay by Card'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Amount Display */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
            <p className="text-sm text-blue-800 mb-1">
              {i18n.language === 'fr' ? 'Montant du Don:' : 'Donation Amount:'}
            </p>
            <p className="text-3xl font-bold text-blue-900">
              {currency}${amount.toFixed(2)}
            </p>
            {currency === 'CAD' && (
              <p className="text-xs text-blue-700 mt-2">
                {i18n.language === 'fr'
                  ? '≈ USD$' + (amount * 0.74).toFixed(2)
                  : '≈ USD$' + (amount * 0.74).toFixed(2)}
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {i18n.language === 'fr' ? 'Votre Nom' : 'Your Name'}
              </label>
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder={i18n.language === 'fr' ? 'Jean Dupont' : 'John Doe'}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {i18n.language === 'fr' ? 'Votre Email' : 'Your Email'}
              </label>
              <input
                type="email"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                placeholder={i18n.language === 'fr' ? 'jean@example.com' : 'john@example.com'}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Message (Optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {i18n.language === 'fr' ? 'Message (Optionnel)' : 'Message (Optional)'}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={i18n.language === 'fr' ? 'Votre message de soutien...' : 'Your message of support...'}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                rows={3}
                disabled={isLoading}
              />
            </div>

            {/* Info Text */}
            <p className="text-xs text-gray-600">
              {i18n.language === 'fr'
                ? 'Vous serez redirigé vers Stripe pour compléter votre paiement de manière sécurisée.'
                : 'You will be redirected to Stripe to complete your payment securely.'}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                {i18n.language === 'fr' ? 'Annuler' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {i18n.language === 'fr' ? 'Traitement...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    {i18n.language === 'fr' ? 'Payer Maintenant' : 'Pay Now'}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-green-500">
            <p className="text-xs text-gray-600">
              🔒 {i18n.language === 'fr'
                ? 'Votre paiement est sécurisé par Stripe. Nous ne stockons jamais vos données de carte.'
                : 'Your payment is secured by Stripe. We never store your card details.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
