import { CreditCard, Banknote, QrCode, AlertCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function DonationHub() {
  const [activeTab, setActiveTab] = useState('etransfer');
  const [donationAmount, setDonationAmount] = useState(50);

  const paymentMethods = [
    {
      id: 'etransfer',
      name: 'e-Transfer',
      icon: Banknote,
      description: 'Direct bank transfer (Canada)',
      pros: ['No fees', 'Instant', 'No password needed'],
      cons: ['Canada only', 'Max $2,000 per transfer'],
      speed: 'Instant',
      fees: 'None',
      link: '/donate-etransfer',
      recommended: true,
    },
    {
      id: 'stripe',
      name: 'Credit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, Amex',
      pros: ['Works worldwide', 'Recurring donations', 'Receipt emailed'],
      cons: ['2.9% + $0.30 fee', 'Requires card details'],
      speed: 'Instant',
      fees: '2.9% + $0.30',
      link: '/donate-stripe',
      recommended: false,
    },
    {
      id: 'qrcode',
      name: 'QR Code',
      icon: QrCode,
      description: 'Scan with your phone',
      pros: ['Mobile friendly', 'No typing needed', 'Fast'],
      cons: ['Canada only', 'Requires bank app'],
      speed: 'Instant',
      fees: 'None',
      link: '/donate-etransfer',
      recommended: false,
    },
  ];

  const donationImpacts = [
    { amount: 25, impact: 'Funds legal consultation (1 hour)' },
    { amount: 50, impact: 'Supports media production (1 video)' },
    { amount: 100, impact: 'Covers government accountability research' },
    { amount: 250, impact: 'Funds legal filing and court costs' },
    { amount: 500, impact: 'Supports full campaign month' },
    { amount: 1000, impact: 'Funds major legal initiative' },
  ];

  const stats = [
    { label: 'Donors', value: '150+' },
    { label: 'Total Raised', value: '$12,500' },
    { label: 'Campaign Goal', value: '$100,000' },
    { label: 'Funds Used', value: '100%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/50 border-b border-amber-600/30 py-8">
        <div className="container max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Donation Hub</h1>
          <p className="text-lg text-amber-100">Choose your preferred way to support Justice for Barran</p>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-12">

        {/* Payment Methods Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Choose Payment Method</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setActiveTab(method.id)}
                  className={`relative p-6 rounded-lg border-2 transition-all text-left ${
                    activeTab === method.id
                      ? 'border-amber-500 bg-amber-900/20'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  {method.recommended && (
                    <div className="absolute top-2 right-2 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
                      RECOMMENDED
                    </div>
                  )}
                  <Icon className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="font-bold text-lg mb-1">{method.name}</h3>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </button>
              );
            })}
          </div>

          {/* Active Method Details */}
          {paymentMethods.map((method) => {
            if (activeTab !== method.id) return null;
            const Icon = method.icon;
            
            return (
              <div key={method.id} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-8 h-8 text-amber-400" />
                  <div>
                    <h3 className="text-2xl font-bold">{method.name}</h3>
                    <p className="text-gray-400">{method.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Speed</div>
                    <div className="font-bold text-lg">{method.speed}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Fees</div>
                    <div className="font-bold text-lg">{method.fees}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Availability</div>
                    <div className="font-bold text-lg">
                      {method.id === 'etransfer' || method.id === 'qrcode' ? 'Canada' : 'Worldwide'}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold mb-3 text-green-400">Advantages</h4>
                    <ul className="space-y-2">
                      {method.pros.map((pro) => (
                        <li key={pro} className="flex items-center gap-2 text-sm">
                          <span className="text-green-400">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-amber-400">Considerations</h4>
                    <ul className="space-y-2">
                      {method.cons.map((con) => (
                        <li key={con} className="flex items-center gap-2 text-sm">
                          <span className="text-amber-400">•</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={method.link}
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded font-semibold transition-colors"
                >
                  Donate via {method.name}
                </a>
              </div>
            );
          })}
        </div>



        {/* Transparency Section */}
        <div className="bg-blue-900/20 border border-blue-600/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Donation Transparency</h2>
          <p className="text-gray-300 mb-4">
            We believe in complete transparency about how donations are used. Every dollar goes directly to supporting the Justice for Barran campaign.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Legal & Court Costs</span>
              <span className="font-bold">40%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Media Production</span>
              <span className="font-bold">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Government Accountability</span>
              <span className="font-bold">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Family Support</span>
              <span className="font-bold">12%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>International Advocacy</span>
              <span className="font-bold">5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Operations</span>
              <span className="font-bold">3%</span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-green-900/20 border border-green-600/50 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Your Security Matters</h3>
              <p className="text-gray-300">
                All donations are processed securely through bank-level encryption. Your personal and financial information is protected and never shared with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex items-center justify-between">
                Are donations tax-deductible?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                Currently, donations are not tax-deductible. We are working on registering as a non-profit organization to provide tax receipts in the future.
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex items-center justify-between">
                Can I set up a recurring donation?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                Yes! With credit card donations through Stripe, you can set up monthly recurring donations. e-Transfer requires manual transfers each time.
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex items-center justify-between">
                Where does my donation go?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                See the "Donation Transparency" section above for a detailed breakdown of how donations are allocated across legal costs, media production, and advocacy work.
              </p>
            </details>

            <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex items-center justify-between">
                Can I donate anonymously?
                <span className="text-amber-400">+</span>
              </summary>
              <p className="mt-4 text-gray-300">
                Yes! e-Transfer donations can be sent without including your name. For credit card donations, we only collect what's necessary for payment processing.
              </p>
            </details>
          </div>
        </div>

        {/* Thank You */}
        <div className="bg-gradient-to-r from-amber-900/30 to-green-900/30 border-2 border-amber-600/50 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-3">Thank You for Your Support</h3>
          <p className="text-gray-300 mb-4 text-lg">
            Every donation brings us closer to justice for Barran and all Indigenous children facing systemic failure.
          </p>
          <p className="text-amber-300 font-semibold text-lg">
            Together, we will hold the powerful accountable.
          </p>
        </div>
      </div>
    </div>
  );
}
