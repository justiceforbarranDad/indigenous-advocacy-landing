import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SimpleDonation() {
  const { i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const amounts = [5, 10, 20, 50, 100];
  const email = 'justiceforbarran@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-green-900">
          {i18n.language === 'fr' ? 'Faire un don' : 'Make a Donation'}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {i18n.language === 'fr' 
            ? 'Cliquez sur un montant et envoyez directement à notre compte bancaire' 
            : 'Click an amount and send directly to our bank account'}
        </p>

        {/* Amount Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-4 px-3 rounded-lg font-bold text-lg transition-all ${
                selectedAmount === amount
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-green-100 text-green-900 hover:bg-green-200'
              }`}
            >
              CAD${amount}
            </button>
          ))}
        </div>

        {/* Bank Details Box */}
        {selectedAmount && (
          <div className="bg-white border-4 border-green-600 rounded-lg p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              {i18n.language === 'fr' ? 'Détails bancaires' : 'Bank Details'}
            </h3>
            
            <div className="space-y-3 mb-6 bg-green-50 p-4 rounded">
              <div>
                <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Banque' : 'Bank'}</p>
                <p className="font-bold text-lg">TD Bank</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Succursale' : 'Branch'}</p>
                <p className="font-bold text-lg">4303</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Compte' : 'Account'}</p>
                <p className="font-bold text-lg">6255007</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Email e-Transfer' : 'e-Transfer Email'}</p>
                <p className="font-bold text-lg break-all">{email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Montant' : 'Amount'}</p>
                <p className="font-bold text-2xl text-green-600">CAD${selectedAmount}</p>
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={copyEmail}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={20} /> {i18n.language === 'fr' ? 'Email copié!' : 'Email copied!'}
                </>
              ) : (
                <>
                  <Copy size={20} /> {i18n.language === 'fr' ? 'Copier email' : 'Copy Email'}
                </>
              )}
            </button>

            {/* Instructions */}
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm text-blue-900">
                {i18n.language === 'fr'
                  ? '1. Ouvrez votre application bancaire\n2. Sélectionnez "Virement électronique"\n3. Collez l\'email ci-dessus\n4. Entrez le montant CAD$' + selectedAmount
                  : '1. Open your bank app\n2. Select "e-Transfer"\n3. Paste the email above\n4. Enter amount CAD$' + selectedAmount}
              </p>
            </div>
          </div>
        )}

        {/* No Amount Selected */}
        {!selectedAmount && (
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center">
            <p className="text-yellow-900 font-semibold">
              {i18n.language === 'fr' 
                ? 'Sélectionnez un montant pour commencer' 
                : 'Select an amount to get started'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
