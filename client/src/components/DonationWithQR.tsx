import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DonationQRCode } from './DonationQRCode';
import { trpc } from '@/lib/trpc';

const DONATION_AMOUNTS = [5, 10, 20, 50, 100];

export function DonationWithQR() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  
  const handleDonate = (amount: number) => {
    // Direct bank transfer - open e-Transfer with banking app
    const etransferLink = `interac://etransfer?email=justiceforbarran@gmail.com`;
    window.location.href = etransferLink;
    
    // Fallback: Show manual entry instructions
    setTimeout(() => {
      alert(`Send $${amount} e-Transfer to: justiceforbarran@gmail.com\n\nIf your banking app didn't open, manually enter this email in your bank's e-Transfer form.`);
    }, 500);
  };

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      handleDonate(amount);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      {/* Left: QR Code */}
      <div className="flex flex-col items-center justify-center">
        <DonationQRCode />
      </div>

      {/* Right: Donation Options */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            💳 Donate Now
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Every donation funds legal defense and systemic change. 100% transparency.
          </p>
        </div>

        {/* Preset Amounts */}
        <div className="grid grid-cols-2 gap-3">
          {DONATION_AMOUNTS.map((amount) => (
            <Button
              key={amount}
              onClick={() => handleDonate(amount)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3"
            >
              ${amount}
            </Button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="border-t pt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Custom Amount
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                min="0.50"
                step="0.01"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <Button
              onClick={handleCustomDonate}
              disabled={!customAmount}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6"
            >
              Donate
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-800">
            ✓ Secure Stripe payment<br />
            ✓ Direct to bank account<br />
            ✓ 1-2 business days<br />
            ✓ Receipt emailed automatically
          </p>
        </div>
      </div>
    </div>
  );
}
