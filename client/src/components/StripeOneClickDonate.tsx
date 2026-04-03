import { useState } from 'react';
import { Heart } from 'lucide-react';

const AMOUNTS = [5, 10, 20, 50, 100];

export function StripeOneClickDonate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDonate = async (amount: number) => {
    setIsLoading(true);
    setError(null);

    try {
      // Call the backend to create Stripe checkout session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'CAD',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();

      // Redirect to Stripe checkout
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border-2 border-red-300 p-8">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-red-600" size={24} />
          <h2 className="text-3xl font-bold text-red-900">Make a Donation</h2>
        </div>
        <p className="text-red-700 mb-8">Support Justice for Barran - Every donation helps</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Amount Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {AMOUNTS.map((amount) => (
            <button
              key={amount}
              onClick={() => handleDonate(amount)}
              disabled={isLoading}
              className={`py-4 px-4 rounded-lg font-bold text-lg transition-all ${
                isLoading
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {isLoading ? '...' : `CAD$${amount}`}
            </button>
          ))}
        </div>

        <p className="text-sm text-red-700 p-3 bg-red-50 rounded">
          💳 <strong>Secure Payment:</strong> Click any amount to donate via Stripe. Your donation goes directly to our TD Bank account.
        </p>

        <p className="text-xs text-red-600 mt-4 text-center">
          100% of donations go directly to legal defense, advocacy, and systemic change efforts.
        </p>
      </div>
    </div>
  );
}
