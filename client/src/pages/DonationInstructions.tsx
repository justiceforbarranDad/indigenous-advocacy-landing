import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, Copy, CheckCircle } from 'lucide-react';

const donationAmounts = [5, 10, 25, 50, 100];

const bankInstructions = [
  {
    name: 'TD Bank',
    steps: [
      'Open TD Bank app',
      'Select "Send Money" or "e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Review and confirm',
      'Send - funds arrive instantly'
    ]
  },
  {
    name: 'RBC Royal Bank',
    steps: [
      'Open RBC Mobile app',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'Scotiabank',
    steps: [
      'Open Scotiabank app',
      'Select "Send Money"',
      'Choose "Interac e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send and confirm'
    ]
  },
  {
    name: 'BMO',
    steps: [
      'Open BMO Mobile Banking',
      'Select "Send Money"',
      'Choose "Interac e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'CIBC',
    steps: [
      'Open CIBC Mobile Banking',
      'Select "Send Money"',
      'Choose "Interac e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send'
    ]
  },
  {
    name: 'Tangerine',
    steps: [
      'Open Tangerine app',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'EQ Bank',
    steps: [
      'Open EQ Bank app',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send'
    ]
  },
  {
    name: 'Simplii Financial',
    steps: [
      'Open Simplii app',
      'Select "Send Money"',
      'Choose "e-Transfer"',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Confirm and send'
    ]
  },
  {
    name: 'Banco Nacional',
    steps: [
      'Open Banco Nacional app',
      'Select "Send Money" or "Transfers"',
      'Choose "e-Transfer" option',
      'Enter email: justiceforbarran@gmail.com',
      'Enter your donation amount',
      'Send'
    ]
  },
  {
    name: 'Bank of Canada',
    steps: [
      'Open your banking app',
      'Select "Send Money"',
      'Choose "e-Transfer" or "Interac"',
      'Enter email: justiceforbarran@gmail.com',
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
            <p className="text-sm font-semibold text-charcoal mb-3">Send e-Transfer to:</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center justify-between">
              <code className="text-lg font-mono font-bold text-forest-green">
                justiceforbarran@gmail.com
              </code>
              <Button
                onClick={handleCopyEmail}
                className="bg-amber-orange hover:bg-amber-light text-white"
                size="sm"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-charcoal-light">
              All donations go directly to your bank account. No middleman, no fees.
            </p>
          </div>
        </Card>

        {/* Amount Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-6 text-center">Choose Amount</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
          <div className="mt-6 p-4 bg-amber-light/20 rounded-lg border-2 border-amber-light">
            <p className="text-center text-charcoal">
              {selectedAmount ? (
                <>
                  <span className="font-bold text-2xl text-amber-orange">${selectedAmount}</span>
                  <span className="text-charcoal-light ml-2">will support legal action for systemic accountability</span>
                </>
              ) : (
                <span className="text-charcoal-light">Select an amount or enter custom amount in your banking app</span>
              )}
            </p>
          </div>
        </div>

        {/* Bank Instructions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-6 text-center">
            Step-by-Step Instructions by Bank
          </h2>
          <p className="text-center text-charcoal-light mb-8">
            Click your bank to see detailed instructions
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
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">
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
        <Card className="p-8 bg-white border-3 border-amber-orange">
          <h3 className="text-xl font-bold text-forest-green mb-4">Important Information</h3>
          <ul className="space-y-3 text-charcoal">
            <li>✓ <strong>Instant delivery</strong> - e-Transfers arrive immediately</li>
            <li>✓ <strong>No fees</strong> - all money goes to Justice for Barran</li>
            <li>✓ <strong>Secure</strong> - your banking app handles all transactions</li>
            <li>✓ <strong>Private</strong> - no email address visible to you</li>
            <li>✓ <strong>Works everywhere</strong> - any Canadian bank, any device</li>
            <li>✓ <strong>Direct impact</strong> - funds support legal action for systemic accountability</li>
          </ul>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-charcoal-light mb-6">
            Every donation brings us closer to justice for all vulnerable children
          </p>
          <p className="text-2xl font-bold text-forest-green">
            Thank you for supporting this cause
          </p>
        </div>
      </div>
    </div>
  );
}
