import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

interface Bank {
  name: string;
  logo: string;
  etransferUrl: string;
  color: string;
}

const banks: Bank[] = [
  {
    name: 'RBC Royal Bank',
    logo: '🏦',
    etransferUrl: 'https://www.rbc.com/personal/payments/interac-e-transfer.html',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'TD Bank',
    logo: '🏦',
    etransferUrl: 'https://www.td.com/ca/en/personal-banking/products-services/banking/payments/interac-e-transfer',
    color: 'from-green-600 to-green-700',
  },
  {
    name: 'BMO',
    logo: '🏦',
    etransferUrl: 'https://www.bmo.com/main/personal/ways-to-bank/digital-banking/interac-e-transfer/',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'CIBC',
    logo: '🏦',
    etransferUrl: 'https://www.cibc.com/en/personal-banking/payments/interac-e-transfer.html',
    color: 'from-purple-600 to-purple-700',
  },
  {
    name: 'Scotiabank',
    logo: '🏦',
    etransferUrl: 'https://www.scotiabank.com/ca/en/personal/payments/interac-e-transfer.html',
    color: 'from-red-700 to-red-800',
  },
  {
    name: 'Desjardins',
    logo: '🏦',
    etransferUrl: 'https://www.desjardins.com/ca/personal/payments/interac-e-transfer/index.jsp',
    color: 'from-green-700 to-green-800',
  },
  {
    name: 'HSBC',
    logo: '🏦',
    etransferUrl: 'https://www.hsbc.ca/personal/payments/send-money/interac-e-transfer',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Laurentian Bank',
    logo: '🏦',
    etransferUrl: 'https://www.laurentianbank.com/en/personal/payments/interac-e-transfer.html',
    color: 'from-yellow-600 to-yellow-700',
  },
  {
    name: 'Manulife Bank',
    logo: '🏦',
    etransferUrl: 'https://www.manulifebank.ca/personal/payments/interac-e-transfer.html',
    color: 'from-green-600 to-green-700',
  },
  {
    name: 'National Bank',
    logo: '🏦',
    etransferUrl: 'https://www.nbc.ca/personal/payments/interac-e-transfer.html',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'PC Financial',
    logo: '🏦',
    etransferUrl: 'https://www.pcfinancial.ca/personal/payments/interac-e-transfer',
    color: 'from-blue-700 to-blue-800',
  },
  {
    name: 'Tangerine',
    logo: '🏦',
    etransferUrl: 'https://www.tangerine.ca/en/personal/payments/interac-e-transfer',
    color: 'from-orange-600 to-orange-700',
  },
];

export function BankSelector() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBanks = banks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-forest-green mb-2">Send e-Transfer</h2>
        <p className="text-charcoal-light mb-6">Select your bank to open e-Transfer and send your donation</p>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 text-charcoal-light" size={20} />
          <input
            type="text"
            placeholder="Search your bank..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-charcoal-light/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-orange"
          />
        </div>

        {/* Bank Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBanks.map((bank) => (
            <a
              key={bank.name}
              href={bank.etransferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg p-4 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-amber-orange"
            >
              <div className="flex flex-col items-center justify-center h-full gap-3">
                <div className="text-4xl">{bank.logo}</div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-charcoal line-clamp-2">{bank.name}</p>
                  <ExternalLink size={14} className="text-amber-orange mt-2 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredBanks.length === 0 && (
          <div className="text-center py-8">
            <p className="text-charcoal-light">No banks found. Try a different search.</p>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 p-4 bg-amber-light/10 rounded-lg border border-amber-light/30">
          <h3 className="font-semibold text-forest-green mb-2">How to send e-Transfer:</h3>
          <ol className="text-sm text-charcoal space-y-1 list-decimal list-inside">
            <li>Click your bank above</li>
            <li>Log in to your online banking</li>
            <li>Select "Send Money" or "e-Transfer"</li>
            <li>Enter recipient email or phone</li>
            <li>Enter donation amount</li>
            <li>Complete the transfer</li>
          </ol>
        </div>

        {/* Contact Info */}
        <div className="mt-6 p-4 bg-forest-green/10 rounded-lg border border-forest-green/30">
          <p className="text-sm text-charcoal">
            <strong>Recipient Email:</strong> contact@justiceforbarran.org
          </p>
          <p className="text-sm text-charcoal mt-2">
            <strong>Questions?</strong> <a href="mailto:contact@justiceforbarran.org" className="text-amber-orange hover:text-amber-light font-semibold">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
