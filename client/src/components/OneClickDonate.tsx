import { useTranslation } from 'react-i18next';

export default function OneClickDonate() {
  const { i18n } = useTranslation();

  const amounts = [5, 10, 20, 50, 100];
  const email = 'justiceforbarran@gmail.com';
  const bankInfo = {
    bank: 'TD Bank',
    branch: '4303',
    account: '6255007'
  };

  const handleDonate = (amount: number) => {
    // Create mailto link with subject containing amount and bank details
    const subject = `Donation: CAD$${amount} - Justice for Barran`;
    const body = `I want to send CAD$${amount} via e-Transfer to support Justice for Barran.\n\nBank Details:\nBank: ${bankInfo.bank}\nBranch: ${bankInfo.branch}\nAccount: ${bankInfo.account}\n\nPlease send to: ${email}`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-green-900">
          {i18n.language === 'fr' ? 'Faire un don' : 'Make a Donation'}
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          {i18n.language === 'fr' 
            ? 'Un clic pour donner directement à notre compte bancaire TD.' 
            : 'One click to donate directly to our TD Bank account.'}
        </p>

        {/* Donation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleDonate(amount)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-xl"
            >
              CAD${amount}
            </button>
          ))}
        </div>

        {/* Bank Details Box */}
        <div className="bg-white border-4 border-green-600 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-green-900 mb-4">
            {i18n.language === 'fr' ? 'Détails bancaires' : 'Bank Details'}
          </h3>
          
          <div className="space-y-3 bg-green-50 p-4 rounded">
            <div>
              <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Banque' : 'Bank'}</p>
              <p className="font-bold text-lg">{bankInfo.bank}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Succursale' : 'Branch'}</p>
              <p className="font-bold text-lg">{bankInfo.branch}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Compte' : 'Account'}</p>
              <p className="font-bold text-lg">{bankInfo.account}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{i18n.language === 'fr' ? 'Email e-Transfer' : 'e-Transfer Email'}</p>
              <p className="font-bold text-lg break-all">{email}</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-sm text-blue-900 font-semibold mb-2">
              {i18n.language === 'fr' ? 'Comment donner:' : 'How to donate:'}
            </p>
            <ol className="text-sm text-blue-900 space-y-1 list-decimal list-inside">
              <li>{i18n.language === 'fr' ? 'Cliquez sur un montant' : 'Click an amount'}</li>
              <li>{i18n.language === 'fr' ? 'Ouvrez votre application bancaire' : 'Open your bank app'}</li>
              <li>{i18n.language === 'fr' ? 'Sélectionnez "Virement électronique"' : 'Select "e-Transfer"'}</li>
              <li>{i18n.language === 'fr' ? 'Envoyez à l\'email ci-dessus' : 'Send to the email above'}</li>
            </ol>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            🔒 {i18n.language === 'fr' ? 'Paiement sécurisé par e-Transfer' : 'Secure payment via e-Transfer'}
          </p>
        </div>
      </div>
    </div>
  );
}
