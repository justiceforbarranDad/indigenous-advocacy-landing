import { ArrowRight, Smartphone, Globe, DollarSign } from 'lucide-react';

export default function DonateViaBank() {
  const canadianBanks = [
    {
      name: 'Royal Bank of Canada (RBC)',
      logo: '🏦',
      etransferUrl: 'https://www.rbc.com/personal/banking/transfers/interac-e-transfer.html',
      description: 'Send Interac e-Transfer to justiceforbarran@gmail.com'
    },
    {
      name: 'Toronto-Dominion Bank (TD)',
      logo: '🏦',
      etransferUrl: 'https://www.td.com/ca/en/personal-banking/ways-to-bank/digital-banking/interac-e-transfer/',
      description: 'TD e-Transfer - Quick and easy'
    },
    {
      name: 'Bank of Montreal (BMO)',
      logo: '🏦',
      etransferUrl: 'https://www.bmo.com/main/personal/banking/ways-to-pay/interac-e-transfer/',
      description: 'BMO e-Transfer service'
    },
    {
      name: 'Scotiabank',
      logo: '🏦',
      etransferUrl: 'https://www.scotiabank.com/ca/en/personal/banking/ways-to-bank/digital-banking/interac-e-transfer.html',
      description: 'Scotiabank e-Transfer'
    },
    {
      name: 'Canadian Imperial Bank of Commerce (CIBC)',
      logo: '🏦',
      etransferUrl: 'https://www.cibc.com/en/personal-banking/ways-to-bank/digital-banking/interac-e-transfer.html',
      description: 'CIBC e-Transfer service'
    },
    {
      name: 'National Bank of Canada',
      logo: '🏦',
      etransferUrl: 'https://www.nbc.ca/en/personal/banking/ways-to-bank/digital-banking/interac-e-transfer.html',
      description: 'National Bank e-Transfer'
    },
  ];

  const internationalMethods = [
    {
      name: 'Stripe (Credit/Debit Card)',
      icon: '💳',
      description: 'US & International credit cards',
      link: '/donate',
      fee: '2.9% + $0.30'
    },
    {
      name: 'PayPal',
      icon: '🅿️',
      description: 'International PayPal transfers',
      link: 'https://www.paypal.com',
      fee: '3.49% + $0.49 USD'
    },
    {
      name: 'Wise (TransferWise)',
      icon: '🌍',
      description: 'Low-cost international transfers',
      link: 'https://wise.com',
      fee: '1-2% + bank fees'
    },
    {
      name: 'Direct Bank Transfer',
      icon: '🏦',
      description: 'Wire transfer to Canadian account',
      link: '#contact',
      fee: 'Varies by bank'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HEADER */}
      <div className="bg-red-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Choose Your Donation Method</h1>
          <p className="text-xl text-red-100">
            Support Justice for Barran — Multiple ways to donate from Canada and worldwide
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* CANADIAN BANKS SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Smartphone className="text-red-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Canadian Banks (e-Transfer)</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">
            If you're in Canada, use your bank's e-Transfer service to send money to <strong>justiceforbarran@gmail.com</strong>
          </p>
          
          <div className="bg-green-50 border-2 border-green-700 rounded-lg p-8">
            <div className="text-5xl mb-4 text-center">💳</div>
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">All Canadian Banks Support e-Transfer</h3>
            <p className="text-green-800 text-center text-lg mb-6">
              Use your bank's e-Transfer service to send money to:
            </p>
            <div className="bg-white border-2 border-green-700 rounded-lg p-4 text-center overflow-hidden">
              <p className="text-xs md:text-2xl font-bold text-green-900 break-words">justiceforbarran@gmail.com</p>
            </div>
          </div>

          {/* E-TRANSFER INSTRUCTIONS */}
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded mt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">How to Send e-Transfer:</h3>
            <ol className="space-y-3 text-blue-800">
              <li><strong>1.</strong> Log into your bank's online or mobile app</li>
              <li><strong>2.</strong> Select "Send Money" or "Interac e-Transfer"</li>
              <li><strong>3.</strong> Enter recipient email: <code className="bg-white px-2 py-1 rounded">justiceforbarran@gmail.com</code></li>
              <li><strong>4.</strong> Enter donation amount</li>
              <li><strong>5.</strong> Complete the transfer (usually instant or next business day)</li>
              <li><strong>6.</strong> No password required — direct deposit available</li>
            </ol>
          </div>
        </div>

        {/* INTERNATIONAL METHODS SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-green-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">International Donations</h2>
          </div>
          <p className="text-gray-700 mb-8 text-lg">
            For supporters outside Canada, use these global payment methods
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-700 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Fee: {method.fee}</span>
                  <ArrowRight className="text-green-700" size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* US RESIDENTS SECTION */}
        <div className="bg-green-50 border-2 border-green-700 rounded-lg p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="text-green-700" size={32} />
            <h2 className="text-2xl font-bold text-green-900">For US Residents</h2>
          </div>
          <p className="text-green-800 mb-6">
            You have multiple options to support Justice for Barran from the United States:
          </p>
          <ul className="space-y-3 text-green-800">
            <li><strong>✓ Stripe (Credit Card)</strong> — Fastest option, instant processing</li>
            <li><strong>✓ PayPal</strong> — Send internationally to Canadian accounts</li>
            <li><strong>✓ Wise</strong> — Low-cost international bank transfers</li>
            <li><strong>✓ International e-Transfer</strong> — Available through most US banks (Bank of America, Chase, Wells Fargo, etc.)</li>
            <li><strong>✓ Wire Transfer</strong> — Direct bank-to-bank transfer (contact us for details)</li>
          </ul>
          <p className="text-green-800 mt-6 font-semibold">
            Questions? <a href="#contact" className="underline hover:text-green-900">Contact us</a> for assistance with international donations.
          </p>
        </div>

        {/* DONATION IMPACT */}
        <div className="bg-red-50 border-l-4 border-red-700 p-8 rounded">
          <h3 className="text-2xl font-bold text-red-900 mb-4">Your Donation Makes a Difference</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-700">40%</div>
              <p className="text-red-800">Legal & Advocacy</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">25%</div>
              <p className="text-red-800">Media & Outreach</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">35%</div>
              <p className="text-red-800">Family Support & Operations</p>
            </div>
          </div>
          <p className="text-red-800 mt-6 text-center font-semibold">
            100% of donations go directly to supporting Justice for Barran — No administrative overhead
          </p>
        </div>
      </div>
    </div>
  );
}
