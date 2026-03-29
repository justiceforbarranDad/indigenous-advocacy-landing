import { useState } from 'react';
import { Heart, Check, Zap } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';

export default function DonateRecurring() {
  const [selectedTier, setSelectedTier] = useState<'supporter' | 'advocate' | 'champion' | 'guardian'>('advocate');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { data: tiers } = trpc.subscriptions.getTiers.useQuery();
  const createCheckout = trpc.subscriptions.createSubscriptionCheckout.useMutation();

  const handleSubscribe = async () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      const result = await createCheckout.mutateAsync({
        tier: selectedTier,
        email,
        name: name || 'Anonymous',
        origin: window.location.origin,
      });

      if (result.url) {
        window.open(result.url, '_blank');
      }
    } catch (error) {
      console.error('Error creating subscription:', error);
      alert('Failed to create subscription. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const monthlyTiers = tiers?.monthly || [];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Zap size={40} className="text-amber-400" />
            Become a Monthly Supporter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the movement for Indigenous justice with a recurring monthly donation. Your consistent support fuels our campaign for accountability and change.
          </p>
        </div>

        {/* Tier Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {monthlyTiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id as any)}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedTier === tier.id
                  ? 'border-amber-400 bg-amber-400/10'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-3xl font-bold text-amber-400 mb-2">{tier.price}</p>
              <p className="text-sm text-gray-300 mb-4">{tier.description}</p>
              
              <div className="space-y-2">
                {tier.benefits.map((benefit, idx) => (
                  <div key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                    <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {selectedTier === tier.id && (
                <div className="mt-4 pt-4 border-t border-amber-400">
                  <p className="text-sm font-bold text-amber-400">✓ Selected</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Donation Form */}
        <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Complete Your Subscription</h2>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Full Name (Optional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-800 border border-gray-700 rounded p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Monthly Donation:</span>
              <span className="font-bold text-amber-400">
                {monthlyTiers.find(t => t.id === selectedTier)?.price}
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Billing will start immediately and repeat monthly.
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={handleSubscribe}
            disabled={isLoading || !email}
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Heart size={20} />
            {isLoading ? 'Processing...' : 'Start Monthly Donation'}
          </Button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Secure payment powered by Stripe. You can cancel anytime.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Check size={24} className="text-green-400" />
              Why Monthly Donations?
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Predictable funding for sustained campaigns</li>
              <li>✓ Support legal battles and investigations</li>
              <li>✓ Enable media production and outreach</li>
              <li>✓ Fund international advocacy efforts</li>
              <li>✓ Help vulnerable Indigenous families</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap size={24} className="text-amber-400" />
              Flexible & Transparent
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Cancel anytime, no questions asked</li>
              <li>✓ Monthly impact reports for donors</li>
              <li>✓ Direct communication with campaign team</li>
              <li>✓ Exclusive access to strategy updates</li>
              <li>✓ Recognition for your support</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <h4 className="font-bold mb-2">When will I be charged?</h4>
              <p className="text-gray-300 text-sm">
                Your first charge happens immediately after checkout. Subsequent charges occur on the same day each month.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <h4 className="font-bold mb-2">Can I change my donation amount?</h4>
              <p className="text-gray-300 text-sm">
                Yes! You can upgrade, downgrade, or cancel your subscription anytime from your account dashboard.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <h4 className="font-bold mb-2">Is my payment secure?</h4>
              <p className="text-gray-300 text-sm">
                All payments are processed securely through Stripe, one of the world's most trusted payment processors.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <h4 className="font-bold mb-2">What if I need to pause my donation?</h4>
              <p className="text-gray-300 text-sm">
                You can pause or resume your subscription at any time. Contact us if you need help managing your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
