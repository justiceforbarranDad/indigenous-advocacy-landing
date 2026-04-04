import { useTranslation } from 'react-i18next';
import { Heart, CreditCard, QrCode } from 'lucide-react';

export default function DonationHub() {
  const { i18n } = useTranslation();

  const handleDonate = (amount: number) => {
    // Direct one-click Stripe checkout
    const stripeLink = `https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01?prefilled_amount=${amount * 100}`;
    window.location.href = stripeLink;
  };

  const amounts = [5, 10, 20, 50, 100, 250];

  const translations = {
    en: {
      title: 'Support Justice for Barran',
      subtitle: '100% of donations go directly to legal advocacy',
      description: 'Your donation supports legal defense, government accountability, and systemic change.',
      process: 'How It Works',
      step1: 'Choose an amount below',
      step2: 'Click the button or scan the QR code',
      step3: 'Complete payment securely via Stripe (credit card)',
      step4: 'Your donation goes directly to legal advocacy',
      chooseAmount: 'Choose Your Amount',
      donate: 'Donate',
      secure: 'Secure payment via Stripe - Credit Card only',
      orScan: 'Or scan the QR code to donate',
      impact: 'Your Impact',
      impacts: [
        { amount: 5, text: 'Supports legal research' },
        { amount: 10, text: 'Covers consultation hour' },
        { amount: 20, text: 'Funds media production' },
        { amount: 50, text: 'Supports government accountability' },
        { amount: 100, text: 'Covers legal filing costs' },
        { amount: 250, text: 'Funds major legal initiative' },
      ],
    },
    fr: {
      title: 'Soutenez la Justice pour Barran',
      subtitle: '100% des dons vont directement à la défense juridique',
      description: 'Votre don soutient la défense juridique, la responsabilité gouvernementale et le changement systémique.',
      process: 'Comment ça marche',
      step1: 'Choisissez un montant ci-dessous',
      step2: 'Cliquez sur le bouton ou scannez le code QR',
      step3: 'Complétez le paiement en toute sécurité via Stripe (carte de crédit)',
      step4: 'Votre don va directement à la défense juridique',
      chooseAmount: 'Choisissez votre montant',
      donate: 'Donner',
      secure: 'Paiement sécurisé via Stripe - Carte de crédit uniquement',
      orScan: 'Ou scannez le code QR pour donner',
      impact: 'Votre Impact',
      impacts: [
        { amount: 5, text: 'Soutient la recherche juridique' },
        { amount: 10, text: 'Couvre une heure de consultation' },
        { amount: 20, text: 'Finance la production médiatique' },
        { amount: 50, text: 'Soutient la responsabilité gouvernementale' },
        { amount: 100, text: 'Couvre les frais de dépôt juridique' },
        { amount: 250, text: 'Finance une initiative juridique majeure' },
      ],
    },
    ht: {
      title: 'Sipòte Jistis pou Barran',
      subtitle: '100% don yo ale dirèkteman nan defans legal',
      description: 'Donasyon ou sipòte defans legal, responsabilite gouvènman, ak chanjman sistematik.',
      process: 'Kijan Li Travay',
      step1: 'Chwazi yon montan anba a',
      step2: 'Klike bouton an oswa skannen kòd QR la',
      step3: 'Konplete peman an sekirize via Stripe (kat kredi)',
      step4: 'Donasyon ou ale dirèkteman nan defans legal',
      chooseAmount: 'Chwazi Montan ou',
      donate: 'Bay',
      secure: 'Peman sekirize via Stripe - Kat kredi sèlman',
      orScan: 'Oswa skannen kòd QR a pou bay',
      impact: 'Enpak ou',
      impacts: [
        { amount: 5, text: 'Sipòte rechèch legal' },
        { amount: 10, text: 'Kouvri yon èd konsiltasyon' },
        { amount: 20, text: 'Finansman pwodiksyon media' },
        { amount: 50, text: 'Sipòte responsabilite gouvènman' },
        { amount: 100, text: 'Kouvri frè depò legal' },
        { amount: 250, text: 'Finansman gwo inisyativ legal' },
      ],
    },
  };

  const t = translations[i18n.language as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center justify-center gap-3">
            <Heart className="text-red-500" size={40} />
            {t.title}
          </h1>
          <p className="text-xl text-gray-300 mb-2">{t.subtitle}</p>
          <p className="text-gray-400">{t.description}</p>
        </div>

        {/* Simple Process Instructions */}
        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CreditCard size={28} />
            {t.process}
          </h2>
          <div className="space-y-2 text-gray-200">
            <p><span className="font-bold text-blue-400">1.</span> {t.step1}</p>
            <p><span className="font-bold text-blue-400">2.</span> {t.step2}</p>
            <p><span className="font-bold text-blue-400">3.</span> {t.step3}</p>
            <p><span className="font-bold text-blue-400">4.</span> {t.step4}</p>
          </div>
        </div>

        {/* Donation Buttons - SIMPLE & DIRECT */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center">{t.chooseAmount}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleDonate(amount)}
                className="py-4 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                CA${amount}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400">{t.secure}</p>
        </div>

        {/* QR Code Section */}
        <div className="bg-gray-800/50 rounded-lg p-8 mb-8 border border-gray-700 text-center">
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
            <QrCode size={28} />
            {t.orScan}
          </h2>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
            alt="Donate QR"
            className="w-48 h-48 mx-auto rounded-lg border-2 border-gray-700"
          />
        </div>

        {/* Impact Section */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">{t.impact}</h2>
          
          <div className="space-y-3">
            {t.impacts.map((item) => (
              <div key={item.amount} className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                <span className="text-red-500 font-bold text-lg min-w-fit">CA${item.amount}</span>
                <span className="text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
