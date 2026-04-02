import { useState } from 'react';
import { AlertCircle, Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DonationOption {
  amount: number;
  label: string;
  qrCode: string;
}

const donationOptions: DonationOption[] = [
  { amount: 5, label: 'CAD$5', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TD-DONATION-5' },
  { amount: 10, label: 'CAD$10', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TD-DONATION-10' },
  { amount: 20, label: 'CAD$20', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TD-DONATION-20' },
  { amount: 50, label: 'CAD$50', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TD-DONATION-50' },
  { amount: 100, label: 'CAD$100', qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TD-DONATION-100' },
];

export default function TDDirectDonation() {
  const { i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const isEnglish = i18n.language === 'en';

  // TD Account Information
  const tdInfo = {
    accountHolder: 'JAMES ROBERT MCGOVERN',
    transit: '43031',
    institution: '004',
    account: '6255007',
    branch: '5880 ROBERT-BOURASSA BLVD, LAVAL, PQ H7E0A5',
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateInteracLink = (amount: number) => {
    // Interac e-Transfer format for direct account transfer
    const subject = `Justice for Barran - Donation CAD$${amount}`;
    const body = `Direct Transfer to:\n\nAccount Holder: ${tdInfo.accountHolder}\nTransit: ${tdInfo.transit}\nInstitution: ${tdInfo.institution}\nAccount: ${tdInfo.account}\n\nAmount: CAD$${amount}`;
    
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-gradient-to-b from-red-900 to-red-800 text-white py-12 rounded-lg">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-widest">
            {isEnglish ? 'DIRECT BANK TRANSFER' : 'TRANSFERT BANCAIRE DIRECT'}
          </h2>
          <p className="text-lg text-red-100 mb-4">
            {isEnglish 
              ? '100% of your donation goes directly to legal defense and systemic change'
              : '100% de votre don va directement à la défense juridique et au changement systémique'}
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-950 border-2 border-red-600 rounded-lg p-6 mb-8 flex gap-4">
          <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-300 mb-2">
              {isEnglish ? '⚠️ Direct Bank Transfer - Final Transaction' : '⚠️ Transfert bancaire direct - Transaction finale'}
            </h3>
            <p className="text-red-200">
              {isEnglish
                ? 'Donations are non-refundable. Once sent, funds cannot be reversed.'
                : 'Les dons ne sont pas remboursables. Une fois envoyés, les fonds ne peuvent pas être inversés.'}
            </p>
          </div>
        </div>

        {/* Donation Options */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-center">
            {isEnglish ? 'Select Amount' : 'Sélectionner le montant'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {donationOptions.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelectedAmount(option.amount)}
                className={`p-4 rounded-lg font-bold text-lg transition ${
                  selectedAmount === option.amount
                    ? 'bg-white text-red-600 shadow-lg'
                    : 'bg-red-700 hover:bg-red-600 text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Amount Details */}
        {selectedAmount && (
          <div className="bg-red-950 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {isEnglish ? `Donate CAD$${selectedAmount}` : `Donner CAD$${selectedAmount}`}
            </h3>

            {/* Account Information */}
            <div className="space-y-4 mb-8">
              <div className="bg-red-900 p-4 rounded-lg">
                <p className="text-sm text-red-300 mb-1">
                  {isEnglish ? 'Account Holder' : 'Titulaire du compte'}
                </p>
                <p className="font-mono font-bold text-lg">{tdInfo.accountHolder}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-900 p-4 rounded-lg">
                  <p className="text-sm text-red-300 mb-1">
                    {isEnglish ? 'Transit' : 'Transit'}
                  </p>
                  <p className="font-mono font-bold text-lg">{tdInfo.transit}</p>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <p className="text-sm text-red-300 mb-1">
                    {isEnglish ? 'Institution' : 'Institution'}
                  </p>
                  <p className="font-mono font-bold text-lg">{tdInfo.institution}</p>
                </div>
                <div className="bg-red-900 p-4 rounded-lg">
                  <p className="text-sm text-red-300 mb-1">
                    {isEnglish ? 'Account' : 'Compte'}
                  </p>
                  <p className="font-mono font-bold text-lg">{tdInfo.account}</p>
                </div>
              </div>

              <div className="bg-red-900 p-4 rounded-lg">
                <p className="text-sm text-red-300 mb-1">
                  {isEnglish ? 'Branch Address' : 'Adresse de la succursale'}
                </p>
                <p className="font-mono text-sm">{tdInfo.branch}</p>
              </div>
            </div>

            {/* Copy Buttons */}
            <div className="space-y-3 mb-8">
              <button
                onClick={() => copyToClipboard(`${tdInfo.transit}-${tdInfo.institution}-${tdInfo.account}`)}
                className="w-full bg-white text-red-600 font-bold py-3 rounded-lg hover:bg-red-50 transition flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    {isEnglish ? 'Copied!' : 'Copié!'}
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    {isEnglish ? 'Copy Account Details' : 'Copier les détails du compte'}
                  </>
                )}
              </button>

              <a
                href={generateInteracLink(selectedAmount)}
                className="block w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition text-center"
              >
                {isEnglish 
                  ? `Send CAD$${selectedAmount} via Interac e-Transfer`
                  : `Envoyer CAD$${selectedAmount} par Interac Transfert électronique`}
              </a>
            </div>

            {/* Instructions */}
            <div className="bg-red-900 p-4 rounded-lg text-sm">
              <p className="font-bold mb-2">
                {isEnglish ? 'How to Send:' : 'Comment envoyer:'}
              </p>
              <ol className="list-decimal list-inside space-y-1 text-red-100">
                <li>{isEnglish ? 'Copy the account details above' : 'Copiez les détails du compte ci-dessus'}</li>
                <li>{isEnglish ? 'Use your bank\'s transfer service' : 'Utilisez le service de transfert de votre banque'}</li>
                <li>{isEnglish ? 'Paste the account information' : 'Collez les informations du compte'}</li>
                <li>{isEnglish ? 'Enter amount and send' : 'Entrez le montant et envoyez'}</li>
              </ol>
            </div>
          </div>
        )}

        {/* Default Message */}
        {!selectedAmount && (
          <div className="text-center text-red-100">
            <p className="text-lg">
              {isEnglish
                ? 'Select an amount above to get started'
                : 'Sélectionnez un montant ci-dessus pour commencer'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
