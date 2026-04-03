import { useState } from 'react';
import { Heart, Copy, Check } from 'lucide-react';

const AMOUNTS = [5, 10, 20, 50, 100];
const BANK_DETAILS = {
  bank: 'TD Bank',
  branch: '4303',
  account: '6255007',
  email: 'justiceforbarran@gmail.com',
};

export function OneClickTDDonate() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bankDetailsText = `
TD Bank e-Transfer
Branch: ${BANK_DETAILS.branch}
Account: ${BANK_DETAILS.account}
Email: ${BANK_DETAILS.email}

100% of donations go to legal defense and systemic change.
  `.trim();

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border-2 border-red-300 p-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-red-600" size={24} />
          <h2 className="text-3xl font-bold text-red-900">Make a Donation</h2>
        </div>
        <p className="text-red-700 mb-8">Support Justice for Barran - Every donation helps</p>

        {/* Amount Selection */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-red-900 mb-3">Select Amount:</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`py-4 px-3 rounded-lg font-bold text-lg transition-all transform ${
                  selectedAmount === amount
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:scale-105'
                }`}
              >
                CA${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="bg-white rounded-lg border-2 border-red-200 p-6 mb-6">
          <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🏦</span> Send e-Transfer to:
          </h3>

          {/* Email */}
          <div className="mb-4 p-4 bg-red-50 rounded-lg">
            <p className="text-xs text-red-600 mb-1 font-semibold">EMAIL</p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-lg font-mono font-bold text-red-900 break-all">
                {BANK_DETAILS.email}
              </p>
              <button
                onClick={() => copyToClipboard(BANK_DETAILS.email, 'email')}
                className="flex-shrink-0 p-2 hover:bg-red-100 rounded transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Copy size={20} className="text-red-600" />
                )}
              </button>
            </div>
          </div>

          {/* Branch & Account */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-xs text-red-600 mb-1 font-semibold">BRANCH</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-lg font-mono font-bold text-red-900">
                  {BANK_DETAILS.branch}
                </p>
                <button
                  onClick={() => copyToClipboard(BANK_DETAILS.branch, 'branch')}
                  className="p-2 hover:bg-red-100 rounded transition-colors"
                  title="Copy branch"
                >
                  {copiedField === 'branch' ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <Copy size={16} className="text-red-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-xs text-red-600 mb-1 font-semibold">ACCOUNT</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-lg font-mono font-bold text-red-900">
                  {BANK_DETAILS.account}
                </p>
                <button
                  onClick={() => copyToClipboard(BANK_DETAILS.account, 'account')}
                  className="p-2 hover:bg-red-100 rounded transition-colors"
                  title="Copy account"
                >
                  {copiedField === 'account' ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <Copy size={16} className="text-red-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Copy All Details */}
          <button
            onClick={() => copyToClipboard(bankDetailsText, 'all')}
            className="w-full py-3 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            {copiedField === 'all' ? (
              <>
                <Check size={20} /> Copied All Details!
              </>
            ) : (
              <>
                <Copy size={20} /> Copy All Details
              </>
            )}
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-6 rounded">
          <h4 className="font-bold text-red-900 mb-2">How to Donate:</h4>
          <ol className="text-sm text-red-800 space-y-1 list-decimal list-inside">
            <li>Select an amount above (CA$5, $10, $20, $50, or $100)</li>
            <li>Copy the email address or all details using the buttons above</li>
            <li>Open your bank's e-Transfer app</li>
            <li>Send e-Transfer to: <strong>{BANK_DETAILS.email}</strong></li>
            <li>Your donation arrives instantly!</li>
          </ol>
        </div>

        {/* Info Message */}
        <p className="text-xs text-red-600 text-center">
          ✅ 100% of donations go directly to legal defense, advocacy, and systemic change efforts.
        </p>
      </div>
    </div>
  );
}
