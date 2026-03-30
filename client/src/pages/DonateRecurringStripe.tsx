import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Heart, Check } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

const RECURRING_AMOUNTS = [10, 25, 50, 100, 250, 500];

export default function DonateRecurringStripe() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const createCheckoutSession = trpc.stripe.createCheckoutSession.useMutation();

  const handleDonate = async () => {
    // Validation
    if (!donorName.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!donorEmail.trim()) {
      toast.error('Please enter your email');
      return;
    }
    if (!selectedAmount && !customAmount) {
      toast.error('Please select or enter an amount');
      return;
    }

    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount < 0.50) {
      toast.error('Minimum donation is $0.50 USD');
      return;
    }

    setIsLoading(true);

    try {
      const result = await createCheckoutSession.mutateAsync({
        amount,
        donorName,
        donorEmail,
        message: message || undefined,
      });

      if (result?.url) {
        toast.success(`Redirecting to checkout for ${frequency} donations...`);
        setTimeout(() => {
          window.open(result.url as string, '_blank');
        }, 500);
      }
    } catch (error) {
      toast.error('Failed to create checkout session');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const finalAmount = selectedAmount || (customAmount ? parseFloat(customAmount) : 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl font-bold text-gray-900">Sustain the Movement</h1>
            <Heart className="w-8 h-8 text-red-600" />
          </div>
          <p className="text-xl text-gray-600 mb-2">Make a recurring donation</p>
          <p className="text-gray-600">
            Support Indigenous justice advocacy with a monthly, quarterly, or yearly commitment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              {/* Frequency Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Frequency</h3>
                <div className="grid grid-cols-3 gap-4">
                  {(['monthly', 'quarterly', 'yearly'] as const).map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setFrequency(freq)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        frequency === freq
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="font-semibold text-gray-900 capitalize">{freq}</p>
                      <p className="text-sm text-gray-600">
                        {freq === 'monthly'
                          ? '12x per year'
                          : freq === 'quarterly'
                            ? '4x per year'
                            : '1x per year'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Amount (USD)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {RECURRING_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                        selectedAmount === amount
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 text-gray-900 hover:border-gray-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Amount (USD)
                  </label>
                  <div className="flex gap-2">
                    <span className="flex items-center px-3 bg-gray-100 rounded-lg text-gray-600">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      min="0.50"
                      step="0.01"
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Minimum: $0.50</p>
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Your Information</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input
                    placeholder="Your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Why are you supporting this cause?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <Button
                onClick={handleDonate}
                disabled={isLoading || finalAmount < 0.50}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : `Donate $${finalAmount.toFixed(2)} ${frequency}`}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure payment powered by Stripe. You can cancel anytime.
              </p>
            </Card>
          </div>

          {/* Benefits Sidebar */}
          <div>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Impact</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Monthly Updates</p>
                    <p className="text-sm text-gray-600">
                      Receive impact reports and progress updates
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Tax Deductible</p>
                    <p className="text-sm text-gray-600">
                      Receive annual tax receipts for your donations
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Direct Impact</p>
                    <p className="text-sm text-gray-600">
                      100% goes to legal and advocacy efforts
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Cancel Anytime</p>
                    <p className="text-sm text-gray-600">
                      No commitment - cancel your subscription at any time
                    </p>
                  </div>
                </div>
              </div>

              {/* Frequency Comparison */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-4">Annual Commitment</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly:</span>
                    <span className="font-semibold text-gray-900">
                      ${(finalAmount * 12).toFixed(2)}/year
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quarterly:</span>
                    <span className="font-semibold text-gray-900">
                      ${(finalAmount * 4).toFixed(2)}/year
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Yearly:</span>
                    <span className="font-semibold text-gray-900">${finalAmount.toFixed(2)}/year</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">How do I cancel my subscription?</h4>
              <p className="text-gray-600">
                You can cancel your recurring donation at any time by contacting us or managing
                your subscription through your Stripe account.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Is my donation secure?</h4>
              <p className="text-gray-600">
                Yes, all payments are processed securely through Stripe, a leading payment
                processor trusted by millions of businesses worldwide.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Will I receive a tax receipt?</h4>
              <p className="text-gray-600">
                Yes, annual tax receipts are issued for all donations. You'll receive them via
                email at the end of the calendar year.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                Can I change my donation amount?
              </h4>
              <p className="text-gray-600">
                Yes, you can update your subscription amount at any time by contacting our team
                or managing your subscription through Stripe.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
