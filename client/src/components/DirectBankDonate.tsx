import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const AMOUNTS = [5, 10, 20, 50, 100];

const BANK_DETAILS = {
  bank: 'TD Bank',
  branch: '4303',
  account: '6255007',
  email: 'justiceforbarran@gmail.com',
};

export function DirectBankDonate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 p-8">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Make a Donation</h2>
        <p className="text-green-700 mb-8">Support Justice for Barran - Every donation helps</p>

        {/* Amount Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {AMOUNTS.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-3 px-4 rounded-lg font-bold text-lg transition-all ${
                selectedAmount === amount
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-green-600 border-2 border-green-200 hover:border-green-400 hover:shadow-md'
              }`}
            >
              CAD${amount}
            </button>
          ))}
        </div>

        {/* Bank Details Display */}
        {selectedAmount && (
          <div className="bg-white rounded-lg p-6 border-2 border-green-300">
            <h3 className="text-xl font-bold text-green-900 mb-4">Bank Transfer Details</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-semibold text-green-900">Bank:</span>
                <span className="text-green-700">{BANK_DETAILS.bank}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-semibold text-green-900">Branch:</span>
                <span className="text-green-700">{BANK_DETAILS.branch}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-semibold text-green-900">Account:</span>
                <span className="text-green-700">{BANK_DETAILS.account}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-semibold text-green-900">Email:</span>
                <span className="text-green-700">{BANK_DETAILS.email}</span>
              </div>
            </div>

            {/* Copy Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => handleCopy(`${BANK_DETAILS.bank} Branch ${BANK_DETAILS.branch} Account ${BANK_DETAILS.account}`)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? 'Copied!' : 'Copy Bank Details'}
              </button>
              
              <button
                onClick={() => handleCopy(BANK_DETAILS.email)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? 'Copied!' : 'Copy Email Address'}
              </button>
            </div>

            <p className="text-sm text-green-700 mt-6 p-3 bg-green-50 rounded">
              ℹ️ <strong>Next Step:</strong> Open your bank app and use the details above to send a direct transfer for CAD${selectedAmount}
            </p>
          </div>
        )}

        {!selectedAmount && (
          <p className="text-center text-green-600 py-8">
            👆 Select an amount above to see bank transfer details
          </p>
        )}
      </div>
    </div>
  );
}
