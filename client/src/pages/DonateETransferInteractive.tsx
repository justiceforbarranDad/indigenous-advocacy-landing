import { Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function DonateETransferInteractive() {
  const [copied, setCopied] = useState(false);
  const email = 'justiceforbarran@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donationAmounts = [
    { amount: 25, impact: 'Funds legal consultation (1 hour)' },
    { amount: 50, impact: 'Supports media production (1 video)' },
    { amount: 100, impact: 'Covers government accountability research' },
    { amount: 250, impact: 'Funds legal filing and court costs' },
    { amount: 500, impact: 'Supports full campaign month' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/50 border-b border-amber-600/30 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Donate via e-Transfer</h1>
          <p className="text-lg text-amber-100">Quick, secure, and direct to our campaign</p>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-6">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">No Password</h3>
            <p className="text-sm text-gray-300">Send directly without needing a password</p>
          </div>
          <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-6">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">Instant Transfer</h3>
            <p className="text-sm text-gray-300">Funds arrive immediately to our account</p>
          </div>
          <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-6">
            <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="font-bold mb-2">100% Secure</h3>
            <p className="text-sm text-gray-300">Bank-level encryption and security</p>
          </div>
        </div>

        {/* Email Address Section */}
        <div className="bg-amber-900/20 border-2 border-amber-600/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Send e-Transfer to:</h2>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              value={email}
              readOnly
              className="flex-1 bg-slate-800 border border-amber-600/30 rounded px-4 py-3 text-white font-mono"
            />
            <button
              onClick={copyToClipboard}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-300">Click "Copy" to copy the email address to your clipboard</p>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">How to Send e-Transfer</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Open Your Bank App</h3>
                  <p className="text-gray-300 mb-3">
                    Open your mobile banking app (TD, RBC, BMO, Scotiabank, CIBC, etc.) or online banking website.
                  </p>
                  <p className="text-sm text-amber-300 font-semibold">Works with all Canadian banks</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Select "Send Money" or "e-Transfer"</h3>
                  <p className="text-gray-300 mb-3">
                    Look for the "Send Money", "Interac e-Transfer", or "Transfer" option in your app menu.
                  </p>
                  <p className="text-sm text-amber-300">Usually found in the main menu or under "Transfers"</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Enter the Email Address</h3>
                  <p className="text-gray-300 mb-3">
                    Paste or type: <span className="font-mono bg-slate-900 px-2 py-1 rounded">{email}</span>
                  </p>
                  <p className="text-sm text-amber-300">Double-check the email is correct before proceeding</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Enter Your Donation Amount</h3>
                  <p className="text-gray-300 mb-3">
                    Enter the amount you wish to donate (e.g., $50, $100, $250)
                  </p>
                  <p className="text-sm text-amber-300">Most banks allow up to $2,000 per transfer</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Add a Message (Optional)</h3>
                  <p className="text-gray-300 mb-3">
                    You can add a message like "Justice for Barran" or leave it blank
                  </p>
                  <p className="text-sm text-amber-300">This helps us track your donation</p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white font-bold">
                    6
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Confirm and Send</h3>
                  <p className="text-gray-300 mb-3">
                    Review the details and click "Send" or "Confirm". The transfer will be sent immediately.
                  </p>
                  <p className="text-sm text-amber-300 font-semibold">No password needed - funds arrive instantly!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Your Donation Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {donationAmounts.map((item) => (
              <div key={item.amount} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-amber-400 mb-2">${item.amount}</div>
                <p className="text-gray-300">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between">
                Do I need a password to send e-Transfer?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                No! e-Transfer without a password means the recipient (us) can accept the transfer automatically. Your donation arrives instantly.
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between">
                What if I make a mistake with the email?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                If you enter the wrong email, the transfer will be sent to that person instead. Always double-check the email address before confirming: {email}
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between">
                Can I send more than $2,000?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                Most banks limit e-Transfer to $2,000 per transaction. You can send multiple transfers or contact your bank about higher limits.
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between">
                Is my donation secure?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                Yes! e-Transfer uses bank-level encryption and security. Your banking information is protected by your bank's security measures.
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold text-lg flex items-center justify-between">
                Will I get a receipt?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                Your bank will provide a receipt for the transfer. If you include a message with your name, we can send you a donation confirmation email.
              </p>
            </details>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-900/30 border border-blue-600/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Important: Verify the Email</h3>
              <p className="text-gray-300">
                Always verify you're sending to the correct email: <span className="font-mono font-bold">{email}</span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Once sent, e-Transfers cannot be cancelled if the recipient accepts them. Please double-check before confirming.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/"
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded font-semibold transition-colors text-center"
          >
            Back to Home
          </a>
          <a
            href="/donation-hub"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded font-semibold transition-colors text-center"
          >
            View All Donation Methods
          </a>
        </div>

        {/* Thank You Message */}
        <div className="bg-green-900/20 border-2 border-green-600/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Thank You for Your Support</h3>
          <p className="text-gray-300 mb-4">
            Every donation brings us closer to justice for Barran and all Indigenous children facing systemic failure.
          </p>
          <p className="text-amber-300 font-semibold">
            Your generosity fuels our fight for accountability and change.
          </p>
        </div>
      </div>
    </div>
  );
}
