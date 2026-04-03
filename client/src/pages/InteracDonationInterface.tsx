import { useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
}

const banks: Bank[] = [
  { id: 'rbc', name: 'RBC Royal Bank', logo: '🏦', color: 'bg-blue-50' },
  { id: 'td', name: 'TD Bank', logo: '🏦', color: 'bg-green-50' },
  { id: 'bmo', name: 'BMO', logo: '🏦', color: 'bg-red-50' },
  { id: 'scotiabank', name: 'Scotiabank', logo: '🏦', color: 'bg-purple-50' },
  { id: 'cibc', name: 'CIBC', logo: '🏦', color: 'bg-orange-50' },
  { id: 'atb', name: 'ATB Financial', logo: '🏦', color: 'bg-blue-50' },
  { id: 'coast', name: 'Coast Capital', logo: '🏦', color: 'bg-teal-50' },
  { id: 'stripe', name: 'Stripe (International)', logo: '💳', color: 'bg-purple-50' },
  { id: 'paypal', name: 'PayPal', logo: '💰', color: 'bg-blue-50' },
  { id: 'wise', name: 'Wise (International)', logo: '🌍', color: 'bg-green-50' },
  { id: 'wire', name: 'Wire Transfer', logo: '📤', color: 'bg-gray-50' },
];

export default function InteracDonationInterface() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');
  const [donationAmount, setDonationAmount] = useState('100.00');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const translations = {
    en: {
      requestForMoney: 'Request For Money',
      cad: 'CAD',
      usd: 'USD',
      selectCurrency: 'Select Currency',
      from: 'From',
      justiceForBarran: 'Justice for Barran Campaign',
      viewRequestDetails: 'View Request Details',
      selectYourBank: 'Select Your Financial Institution',
      search: 'Search',
      customAmount: 'Custom Amount',
      enterAmount: 'Enter amount',
      continue: 'Continue to Payment',
      cancel: 'Cancel',
      français: 'FRANÇAIS',
      english: 'ENGLISH',
      qrCode: 'Scan QR Code',
      scanOrClick: 'Scan QR code or click to donate',
      noPassword: 'No password required',
      directDeposit: 'Direct deposit to account',
      campaignDetails: 'This donation supports legal defense and systemic change efforts for Indigenous families in crisis.',
    },
    fr: {
      requestForMoney: 'Demande de Fonds',
      cad: 'CAD',
      usd: 'USD',
      selectCurrency: 'Sélectionnez la devise',
      from: 'De',
      justiceForBarran: 'Campagne Justice pour Barran',
      viewRequestDetails: 'Voir les détails de la demande',
      selectYourBank: 'Sélectionnez votre institution financière',
      search: 'Rechercher',
      customAmount: 'Montant personnalisé',
      enterAmount: 'Entrez le montant',
      continue: 'Continuer vers le paiement',
      cancel: 'Annuler',
      français: 'FRANÇAIS',
      english: 'ENGLISH',
      qrCode: 'Scanner le code QR',
      scanOrClick: 'Scannez le code QR ou cliquez pour donner',
      noPassword: 'Aucun mot de passe requis',
      directDeposit: 'Dépôt direct au compte',
      campaignDetails: 'Ce don soutient la défense juridique et les efforts de changement systémique pour les familles autochtones en crise.',
    },
  };

  const t = translations[language];

  const filteredBanks = banks.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayAmount = customAmount || donationAmount;

  // QR codes for each donation amount by currency
  const qrCodesByAmount: { [key: string]: { [key: string]: string } } = {
    'CAD': {
      '5.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-5cad.png',
      '10.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-10cad.png',
      '20.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-20cad.png',
      '50.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-50cad.png',
      '100.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-100cad.png',
    },
    'USD': {
      '5.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-5usd.png',
      '10.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-10usd.png',
      '20.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-20usd.png',
      '50.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-50usd.png',
      '100.00': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-100usd.png',
    },
  };

  const currentQRCode = qrCodesByAmount[currency][displayAmount] || qrCodesByAmount[currency]['100.00'];

  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId);
    // In a real app, this would redirect to the bank's payment page
    window.location.href = `/donate-via-${bankId}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* MOBILE STATUS BAR */}
      <div className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center text-sm">
        <span>12:19</span>
        <div className="flex gap-1">
          <span>📶</span>
          <span>📡</span>
          <span>🔋 70</span>
        </div>
      </div>

      {/* HEADER */}
      <div className="bg-gray-900 text-white px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">♥️ Bank</div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="text-sm font-semibold hover:opacity-80 transition"
          >
            {language === 'en' ? t.français : t.english}
          </button>
          <button className="text-xl">?</button>
          <button className="text-xl">☰</button>
        </div>
      </div>

      {/* RED ACCENT LINE */}
      <div className="h-1 bg-red-600"></div>

      {/* MAIN CONTENT */}
      <div className="px-4 py-8 max-w-2xl mx-auto">
        {/* CURRENCY SELECTOR */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setCurrency('CAD')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
              currency === 'CAD'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            {t.cad}
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
              currency === 'USD'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            {t.usd}
          </button>
        </div>

        {/* DONATION AMOUNT SECTION */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">⬆️</span>
            <h1 className="text-4xl font-bold">{t.requestForMoney}</h1>
          </div>

          <div className="mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              ${displayAmount}
              <span className="text-2xl text-gray-600 ml-2">{currency}</span>
            </div>
          </div>

          <div className="mb-6 text-lg">
            <span className="font-bold">{t.from}:</span>
            <span className="ml-2 text-gray-700">{t.justiceForBarran}</span>
          </div>

          <hr className="my-6" />

          {/* VIEW REQUEST DETAILS */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex justify-between items-center py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            <span>{t.viewRequestDetails}</span>
            <ChevronDown
              size={24}
              className={`transition-transform ${showDetails ? 'rotate-180' : ''}`}
            />
          </button>

          {showDetails && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">{t.campaignDetails}</p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Date:</span> {new Date().toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">Purpose:</span> Legal Defense & Advocacy
                </p>
                <p>
                  <span className="font-semibold">Organization:</span> Justice for Barran Campaign
                </p>
              </div>
            </div>
          )}

          <hr className="my-6" />
        </div>

        {/* QR CODE SECTION */}
        <div className="mb-8 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">{t.qrCode}</h3>
            <div className="flex justify-center mb-4">
              <img
                src={currentQRCode}
                alt={`Donation QR Code for CAD$${displayAmount}`}
                className="w-48 h-48 border-4 border-white shadow-lg rounded"
              />
            </div>
            <p className="text-sm text-gray-600">{t.scanOrClick}</p>
            <div className="mt-4 space-y-1 text-xs text-gray-500">
              <p>✓ {t.noPassword}</p>
              <p>✓ {t.directDeposit}</p>
            </div>
          </div>
        </div>

        {/* SUGGESTED AMOUNTS - CLICKABLE BUTTONS */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">
            {language === 'en' ? 'Suggested amounts:' : 'Montants suggérés:'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {['5.00', '10.00', '20.00', '50.00', '100.00'].map((amount) => (
              <button
                key={amount}
                onClick={() => setDonationAmount(amount)}
                className="py-4 px-3 bg-green-100 border-2 border-green-600 text-green-900 font-bold rounded-lg hover:bg-green-200 active:bg-green-300 transition-colors text-sm md:text-base"
              >
                {currency}${amount}
              </button>
            ))}
          </div>
        </div>

        {/* CUSTOM AMOUNT INPUT */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
            {t.customAmount}
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-3 text-xl text-gray-400">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder={t.enterAmount}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none text-lg"
              />
            </div>
            {customAmount && (
              <button
                onClick={() => setCustomAmount('')}
                className="px-4 py-3 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* BANK SELECTION */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.selectYourBank}</h2>

          {/* SEARCH BAR */}
          <div className="mb-6 relative">
            <Search className="absolute left-4 top-3 text-yellow-500" size={20} />
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-full focus:border-yellow-500 focus:outline-none text-lg"
            />
          </div>

          {/* BANK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {filteredBanks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => handleBankSelect(bank.id)}
                className={`p-6 rounded-lg border-2 transition-all hover:shadow-lg ${
                  selectedBank === bank.id
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 bg-white hover:border-yellow-300'
                }`}
              >
                <div className="text-4xl mb-3">{bank.logo}</div>
                <div className="text-left font-semibold text-gray-900">{bank.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="space-y-3 mb-8">
          <button
            onClick={() => selectedBank && handleBankSelect(selectedBank)}
            disabled={!selectedBank}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
              selectedBank
                ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t.continue}
          </button>
          <button className="w-full py-4 rounded-lg font-bold text-lg bg-gray-700 hover:bg-gray-800 text-white transition-all">
            {t.cancel}
          </button>
        </div>

        {/* FOOTER */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>© 2000 - 2026 Justice for Barran Campaign</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
