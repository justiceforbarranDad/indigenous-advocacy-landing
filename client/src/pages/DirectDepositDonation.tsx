import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function DirectDepositDonation() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const amounts = ['5.00', '10.00', '20.00', '50.00', '100.00'];

  const bankDetails = {
    bankName: 'TD Bank',
    branchNumber: '4303',
    accountNumber: '6255007',
    email: 'justiceforbarran@gmail.com',
  };

  const translations = {
    en: {
      title: 'Support Justice for Barran',
      subtitle: 'Direct Deposit - No Password Required',
      selectAmount: 'Select Donation Amount:',
      bankDetails: 'Bank Account Details:',
      bank: 'Bank:',
      branch: 'Branch Number:',
      account: 'Account Number:',
      contactEmail: 'Contact Email:',
      instructions: 'How to Donate:',
      step1: '1. Select an amount above',
      step2: '2. Copy the bank details below',
      step3: '3. Go to your bank app',
      step4: '4. Set up a direct deposit or e-Transfer to this account',
      step5: '5. No password required - direct deposit is secure',
      important: 'Important:',
      note1: '100% of donations go directly to legal defense and advocacy',
      note2: 'Your donation supports systemic change for Indigenous families',
      note3: 'Direct deposit is final and cannot be reversed',
      copy: 'Copy',
      copied: 'Copied!',
      français: 'FRANÇAIS',
      english: 'ENGLISH',
    },
    fr: {
      title: 'Soutenir la Justice pour Barran',
      subtitle: 'Dépôt Direct - Aucun Mot de Passe Requis',
      selectAmount: 'Sélectionnez le Montant du Don:',
      bankDetails: 'Détails du Compte Bancaire:',
      bank: 'Banque:',
      branch: 'Numéro de Succursale:',
      account: 'Numéro de Compte:',
      contactEmail: 'Email de Contact:',
      instructions: 'Comment Donner:',
      step1: '1. Sélectionnez un montant ci-dessus',
      step2: '2. Copiez les détails bancaires ci-dessous',
      step3: '3. Allez à votre application bancaire',
      step4: '4. Configurez un dépôt direct ou un virement Interac vers ce compte',
      step5: '5. Aucun mot de passe requis - le dépôt direct est sécurisé',
      important: 'Important:',
      note1: '100% des dons vont directement à la défense juridique et à l\'advocacy',
      note2: 'Votre don soutient le changement systémique pour les familles autochtones',
      note3: 'Le dépôt direct est final et ne peut pas être annulé',
      copy: 'Copier',
      copied: 'Copié!',
      français: 'FRANÇAIS',
      english: 'ENGLISH',
    },
  };

  const t = translations[language];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* HEADER */}
      <div className="bg-green-900 text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="text-sm font-semibold hover:opacity-80 transition"
            >
              {language === 'en' ? t.français : t.english}
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-lg text-green-100">{t.subtitle}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* AMOUNT SELECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.selectAmount}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`py-6 px-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 ${
                  selectedAmount === amount
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-green-100 text-green-900 border-2 border-green-600 hover:bg-green-200'
                }`}
              >
                CAD${amount}
              </button>
            ))}
          </div>
          {selectedAmount && (
            <div className="mt-6 p-4 bg-green-100 border-2 border-green-600 rounded-lg">
              <p className="text-lg font-bold text-green-900">
                ✅ You selected: <span className="text-2xl">CAD${selectedAmount}</span>
              </p>
            </div>
          )}
        </div>

        {/* BANK DETAILS */}
        <div className="mb-12 bg-white border-4 border-green-600 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.bankDetails}</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 font-semibold">{t.bank}</p>
                <p className="text-xl font-bold text-gray-900">{bankDetails.bankName}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.bankName, 'bank')}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                {copiedField === 'bank' ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Copy size={20} className="text-gray-600" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 font-semibold">{t.branch}</p>
                <p className="text-xl font-bold text-gray-900">{bankDetails.branchNumber}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.branchNumber, 'branch')}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                {copiedField === 'branch' ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Copy size={20} className="text-gray-600" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 font-semibold">{t.account}</p>
                <p className="text-xl font-bold text-gray-900">{bankDetails.accountNumber}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.accountNumber, 'account')}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                {copiedField === 'account' ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Copy size={20} className="text-gray-600" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600 font-semibold">{t.contactEmail}</p>
                <p className="text-xl font-bold text-gray-900">{bankDetails.email}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.email, 'email')}
                className="p-2 hover:bg-gray-200 rounded transition"
              >
                {copiedField === 'email' ? (
                  <Check size={20} className="text-green-600" />
                ) : (
                  <Copy size={20} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* INSTRUCTIONS */}
        <div className="mb-12 bg-blue-50 border-4 border-blue-600 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">{t.instructions}</h2>
          <ol className="space-y-3 text-lg text-blue-900">
            <li className="font-semibold">{t.step1}</li>
            <li className="font-semibold">{t.step2}</li>
            <li className="font-semibold">{t.step3}</li>
            <li className="font-semibold">{t.step4}</li>
            <li className="font-semibold">{t.step5}</li>
          </ol>
        </div>

        {/* IMPORTANT NOTES */}
        <div className="bg-yellow-50 border-4 border-yellow-600 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">⚠️ {t.important}</h3>
          <ul className="space-y-3 text-yellow-900">
            <li className="font-semibold">✓ {t.note1}</li>
            <li className="font-semibold">✓ {t.note2}</li>
            <li className="font-semibold">✓ {t.note3}</li>
          </ul>
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2026 Justice for Barran Campaign</p>
          <p>All donations support legal defense and systemic change</p>
        </div>
      </div>
    </div>
  );
}
