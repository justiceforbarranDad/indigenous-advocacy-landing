import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Copy, CheckCircle, Send } from 'lucide-react';

const donationAmounts = [5, 10, 25, 50, 100];

const bankInstructions = [
  {
    name: 'TD Bank',
    steps: [
      'Open TD Bank app or online banking',
      'Select "Send Money" or "e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Review and confirm the transfer',
      'Send - funds arrive instantly'
    ]
  },
  {
    name: 'RBC Royal Bank',
    steps: [
      'Open RBC Mobile app or online banking',
      'Select "Send Money"',
      'Choose "e-Transfer" or "Interac"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'Scotiabank',
    steps: [
      'Open Scotiabank app or online banking',
      'Select "Send Money"',
      'Choose "Interac e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send and confirm'
    ]
  },
  {
    name: 'BMO',
    steps: [
      'Open BMO Mobile Banking or online',
      'Select "Send Money"',
      'Choose "Interac e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'CIBC',
    steps: [
      'Open CIBC Mobile Banking or online',
      'Select "Send Money"',
      'Choose "Interac e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send'
    ]
  },
  {
    name: 'Tangerine',
    steps: [
      'Open Tangerine app or online banking',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'EQ Bank',
    steps: [
      'Open EQ Bank app or online banking',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send'
    ]
  },
  {
    name: 'Simplii Financial',
    steps: [
      'Open Simplii app or online banking',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'Banco Nacional',
    steps: [
      'Open Banco Nacional app or online banking',
      'Select "Send Money" or "Transfers"',
      'Choose "e-Transfer" option',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send'
    ]
  },
  {
    name: 'Bank of Canada & Other Banks',
    steps: [
      'Open your bank app or online banking',
      'Select "Send Money" or "Transfers"',
      'Choose "e-Transfer" or "Interac"',
      'Enter recipient email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  }
];

export default function DonationInstructions() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [expandedBank, setExpandedBank] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('justiceforbarran@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal py-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">How to Donate</h1>
          <p className="text-xl text-charcoal-light">
            Send an e-Transfer to support Justice for Barran
          </p>
        </div>

        {/* Email Section */}
        <Card className="p-8 bg-white border-3 border-amber-orange mb-12">
          <div className="text-center">
            <p className="text-lg font-semibold text-charcoal mb-6">
              Send your e-Transfer to this email address:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6 flex items-center justify-between border-2 border-forest-green">
              <code className="text-2xl font-mono font-bold text-forest-green">
                justiceforbarran@gmail.com
              </code>
              <Button
                onClick={handleCopyEmail}
                className="bg-amber-orange hover:bg-amber-light text-white ml-4"
                size="lg"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
            <p className="text-base text-charcoal-light">
              All donations go directly to your bank account. No middleman, no fees, no delays.
            </p>
          </div>
        </Card>

        {/* Amount Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-6 text-center">Choose Donation Amount</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {donationAmounts.map((amount) => (
              <Button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`py-6 text-lg font-bold transition-all ${
                  selectedAmount === amount
                    ? 'bg-forest-green text-white'
                    : 'bg-white border-2 border-amber-orange text-amber-orange hover:bg-amber-orange hover:text-white'
                }`}
              >
                ${amount}
              </Button>
            ))}
          </div>
          <div className="p-4 bg-amber-light/20 rounded-lg border-2 border-amber-light text-center">
            {selectedAmount ? (
              <p className="text-lg">
                <span className="font-bold text-3xl text-amber-orange">${selectedAmount}</span>
                <span className="text-charcoal-light ml-2">will support legal action for systemic accountability</span>
              </p>
            ) : (
              <p className="text-charcoal-light">Or enter any custom amount in your banking app</p>
            )}
          </div>
        </div>

        {/* How to Send */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-6 text-center">How to Send Money</h2>
          
          <Card className="p-8 bg-white border-2 border-forest-green mb-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-2">Open Your Bank App or Online Banking</h3>
                  <p className="text-charcoal">Use any Canadian bank: TD, RBC, Scotiabank, BMO, CIBC, Tangerine, EQ Bank, Simplii, Banco Nacional, or any other bank.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-2">Look for "Send Money" or "e-Transfer"</h3>
                  <p className="text-charcoal">Most banks have this option in the main menu. It may also be called "Interac e-Transfer" or "Money Transfer".</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-2">Enter the Email Address</h3>
                  <p className="text-charcoal">Copy and paste this email: <span className="font-mono font-bold">justiceforbarran@gmail.com</span></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-2">Enter Your Donation Amount</h3>
                  <p className="text-charcoal">Type the amount you want to send. You can send any amount - $5, $25, $100, or whatever you can contribute.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-2">Review and Confirm</h3>
                  <p className="text-charcoal">Check the email address and amount are correct, then click "Send" or "Confirm".</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-forest-green mb-2">Done! Funds Arrive Instantly</h3>
                  <p className="text-charcoal">Your donation is sent immediately. No waiting, no delays.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bank-Specific Instructions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-6 text-center">Bank-Specific Steps</h2>
          <p className="text-center text-charcoal-light mb-8">
            Click your bank below for detailed step-by-step instructions
          </p>

          <div className="space-y-4">
            {bankInstructions.map((bank) => (
              <Card
                key={bank.name}
                className="border-2 border-forest-green overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedBank(expandedBank === bank.name ? null : bank.name)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-forest-green">{bank.name}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-amber-orange transition-transform ${
                      expandedBank === bank.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedBank === bank.name && (
                  <div className="bg-gray-50 p-6 border-t-2 border-forest-green">
                    <ol className="space-y-3">
                      {bank.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </span>
                          <span className="pt-1 text-charcoal">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Important Info */}
        <Card className="p-8 bg-white border-3 border-amber-orange mb-12">
          <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
            <Send className="w-6 h-6" />
            Why e-Transfer?
          </h3>
          <ul className="space-y-3 text-charcoal">
            <li>✓ <strong>Instant delivery</strong> - Money arrives immediately, no delays</li>
            <li>✓ <strong>No fees</strong> - All your money goes to Justice for Barran</li>
            <li>✓ <strong>Secure</strong> - Your banking app handles everything safely</li>
            <li>✓ <strong>Works everywhere</strong> - Any Canadian bank, any device (phone, computer, tablet)</li>
            <li>✓ <strong>Direct to bank account</strong> - No middleman, no processing delays</li>
            <li>✓ <strong>Real impact</strong> - Funds support legal action for systemic accountability</li>
          </ul>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-charcoal-light mb-6">
            Every donation brings us closer to justice for all vulnerable children
          </p>
          <p className="text-2xl font-bold text-forest-green">
            Thank you for supporting this cause
          </p>
          <p className="text-lg text-amber-orange font-semibold mt-6">
            justiceforbarran@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
