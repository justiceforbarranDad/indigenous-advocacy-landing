import { Heart, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { ShareSuccess } from '@/components/ShareSuccess';
import { DonationTracker } from '@/components/DonationTracker';
import { DonationWithQR } from '@/components/DonationWithQR';

export default function DonateWithSharing() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showShare, setShowShare] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const donationAmounts = ['25', '50', '100', '250', '500', '1000'];

  const handleDonate = (amount: string) => {
    setSelectedAmount(amount);
    setDonationAmount(amount);
    setShowShare(true);
  };

  const handleCustomDonate = () => {
    if (customAmount) {
      setSelectedAmount(customAmount);
      setDonationAmount(customAmount);
      setShowShare(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            DONATE NOW
          </h1>
          <p className="text-lg md:text-xl mb-2">Support Justice for Barran</p>
          <p className="text-sm tracking-widest">Every donation funds legal defense and systemic change</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Your Support Matters</h2>
          <p className="text-lg leading-relaxed mb-4">
            Every dollar donated goes directly to legal defense, advocacy, and systemic change efforts. Your contribution helps us demand accountability from government and corporate institutions.
          </p>
          <DonationTracker />
        </div>

        {/* QR CODE DONATION */}
        <div className="mb-12 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">💳 Donate Instantly via QR Code</h2>
          <DonationWithQR />
        </div>

        {/* DONATION AMOUNTS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Select Donation Amount</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleDonate(amount)}
                className={`border-4 p-6 text-center font-bold text-lg transition-colors ${
                  selectedAmount === amount
                    ? 'bg-black text-white border-black'
                    : 'border-black hover:bg-gray-100'
                }`}
              >
                <DollarSign size={24} className="mx-auto mb-2" />
                ${amount}
              </button>
            ))}
          </div>

          {/* CUSTOM AMOUNT */}
          <div className="border-4 border-black p-6">
            <label className="block text-sm font-bold uppercase tracking-widest mb-3">Custom Amount</label>
            <div className="flex gap-3">
              <div className="flex-1 flex items-center border-2 border-black px-4">
                <span className="font-bold text-xl">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="flex-1 py-3 px-2 focus:outline-none"
                />
              </div>
              <button
                onClick={handleCustomDonate}
                className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors"
              >
                Donate
              </button>
            </div>
          </div>
        </div>

        {/* DONATION METHODS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">How to Donate</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* E-TRANSFER */}
            <div className="border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">E-Transfer</h3>
              <p className="text-sm mb-4 leading-relaxed">
                Send e-transfer to: <strong>justice@barran.ca</strong>
              </p>
              <p className="text-xs text-gray-700">
                Fastest and most direct method. No fees.
              </p>
            </div>

            {/* GOFUNDME */}
            <div className="border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">GoFundMe</h3>
              <p className="text-sm mb-4 leading-relaxed">
                <a href="https://www.gofundme.com/f/justice-for-barran" className="underline hover:font-bold">
                  Visit our GoFundMe page
                </a>
              </p>
              <p className="text-xs text-gray-700">
                Secure platform with multiple payment options.
              </p>
            </div>

            {/* CRYPTO */}
            <div className="border-4 border-black p-6">
              <h3 className="text-2xl font-black mb-4">Cryptocurrency</h3>
              <p className="text-sm mb-4 leading-relaxed">
                Bitcoin, Ethereum, and other cryptocurrencies accepted.
              </p>
              <p className="text-xs text-gray-700">
                Contact us for wallet addresses.
              </p>
            </div>
          </div>
        </div>

        {/* IMPACT STATEMENT */}
        <div className="bg-black text-white p-8 border-4 border-black">
          <h2 className="text-3xl font-black mb-6">Your Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-bold mb-2">$25 Donation</p>
              <p className="text-sm">Funds legal research and documentation</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">$50 Donation</p>
              <p className="text-sm">Supports media outreach and social campaigns</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">$100 Donation</p>
              <p className="text-sm">Contributes to legal representation fees</p>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">$500+ Donation</p>
              <p className="text-sm">Major contribution to comprehensive legal defense</p>
            </div>
          </div>
        </div>
      </div>

      {/* SHARE SUCCESS MODAL */}
      {showShare && (
        <ShareSuccess type="donation" amount={`$${donationAmount}`} />
      )}
    </div>
  );
}
