import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Copy, Check, Mail, Smartphone, DollarSign } from 'lucide-react';

export default function EasyDonate() {
  const { i18n } = useTranslation();
  const [copiedMethod, setCopiedMethod] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const paymentMethodsRef = useRef<HTMLDivElement>(null);

  const amounts = [5, 10, 20, 50, 100, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    // Scroll to payment methods after a short delay
    setTimeout(() => {
      paymentMethodsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const copyToClipboard = (text: string, method: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMethod(method);
    setTimeout(() => setCopiedMethod(null), 2000);
  };

  const handleCopy = (text: string, method: string) => {
    copyToClipboard(text, method);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart size={40} className="text-red-700 fill-red-700" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {i18n.language === 'fr' ? 'Donner Facilement' : 'Easy Donate'}
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {i18n.language === 'fr'
              ? 'Aucune carte de crédit requise. Choisissez votre méthode de paiement préférée.'
              : 'No credit card required. Choose your preferred payment method.'}
          </p>
        </div>

        {/* AMOUNT SELECTOR */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-red-700">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {i18n.language === 'fr' ? 'Sélectionner un montant' : 'Select Amount'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`py-3 px-4 rounded-lg font-bold text-lg transition-all ${
                  selectedAmount === amount
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* PAYMENT METHODS */}
        {selectedAmount && (
          <div className="bg-red-100 p-4 rounded-lg mb-6 border-2 border-red-500 text-center">
            <p className="text-lg font-bold text-red-900">
              {i18n.language === 'fr'
                ? `Vous avez sélectionné: $${selectedAmount} CAD`
                : `You selected: $${selectedAmount} CAD`}
            </p>
          </div>
        )}
        <div className="space-y-6" ref={paymentMethodsRef}>
          {/* E-TRANSFER */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={32} className="text-green-600" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {i18n.language === 'fr' ? 'Virement Interac' : 'Interac e-Transfer'}
                </h3>
                <p className="text-sm text-slate-600">
                  {i18n.language === 'fr' ? 'Banque canadienne' : 'Canadian banks'}
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <p className="text-sm text-slate-700 mb-3 font-bold">
                {i18n.language === 'fr'
                  ? 'Étape 1: Envoyez un virement à:'
                  : 'Step 1: Send e-Transfer to:'}
              </p>
              <div className="flex items-center gap-3 mb-3">
                <code className="flex-1 bg-white p-3 rounded border-2 border-green-300 font-mono text-lg font-bold">
                  justiceforbarran@gmail.com
                </code>
                <button
                  onClick={() => handleCopy('justiceforbarran@gmail.com', 'etransfer')}
                  className="px-4 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  {copiedMethod === 'etransfer' ? (
                    <>
                      <Check size={20} />
                      {i18n.language === 'fr' ? 'Copié' : 'Copied'}
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      {i18n.language === 'fr' ? 'Copier' : 'Copy'}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-sm text-slate-700">
              <p className="font-bold mb-2">💡 {i18n.language === 'fr' ? 'Conseil:' : 'Tip:'}</p>
              <p className="mb-2">
                {i18n.language === 'fr'
                  ? 'Étape 2: Utilisez votre application bancaire pour envoyer un virement Interac.'
                  : 'Step 2: Use your bank app to send an e-Transfer.'}
              </p>
              <p>
                {i18n.language === 'fr'
                  ? 'Aucune information de carte de crédit nécessaire!'
                  : 'No credit card information needed!'}
              </p>
            </div>
          </div>

          {/* APPLE PAY / GOOGLE PAY */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone size={32} className="text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {i18n.language === 'fr' ? 'Portefeuille Mobile' : 'Mobile Wallet'}
                </h3>
                <p className="text-sm text-slate-600">
                  {i18n.language === 'fr' ? 'Apple Pay • Google Pay' : 'Apple Pay • Google Pay'}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <p className="text-sm text-slate-700 mb-4">
                {i18n.language === 'fr'
                  ? 'Utilisez votre portefeuille mobile pour payer en toute sécurité.'
                  : 'Use your mobile wallet to pay securely.'}
              </p>
              <button
                onClick={() => {
                  alert(i18n.language === 'fr'
                    ? 'Fonctionnalité bientôt disponible'
                    : 'Feature coming soon');
                }}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                {i18n.language === 'fr' ? 'Payer avec Portefeuille' : 'Pay with Wallet'}
              </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-sm text-slate-700">
              <p className="font-bold mb-2">✅ {i18n.language === 'fr' ? 'Sécurisé:' : 'Secure:'}</p>
              <p>
                {i18n.language === 'fr'
                  ? 'Vos informations de paiement sont protégées par votre appareil.'
                  : 'Your payment information is protected by your device.'}
              </p>
            </div>
          </div>

          {/* CRYPTOCURRENCY (Optional) */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-600">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign size={32} className="text-orange-600" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {i18n.language === 'fr' ? 'Crypto-monnaie' : 'Cryptocurrency'}
                </h3>
                <p className="text-sm text-slate-600">
                  {i18n.language === 'fr' ? 'Bitcoin • Ethereum' : 'Bitcoin • Ethereum'}
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <p className="text-sm text-slate-700 mb-4">
                {i18n.language === 'fr'
                  ? 'Envoyez de la crypto-monnaie directement.'
                  : 'Send cryptocurrency directly.'}
              </p>
              <button
                onClick={() => {
                  alert(i18n.language === 'fr'
                    ? 'Adresses de portefeuille bientôt disponibles'
                    : 'Wallet addresses coming soon');
                }}
                className="w-full py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors text-lg"
              >
                {i18n.language === 'fr' ? 'Adresses Crypto' : 'Crypto Addresses'}
              </button>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg text-sm text-slate-700">
              <p className="font-bold mb-2">🔒 {i18n.language === 'fr' ? 'Privé:' : 'Private:'}</p>
              <p>
                {i18n.language === 'fr'
                  ? 'Les transactions en crypto-monnaie offrent une confidentialité maximale.'
                  : 'Cryptocurrency transactions offer maximum privacy.'}
              </p>
            </div>
          </div>

          {/* BANK TRANSFER */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-600">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={32} className="text-purple-600" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {i18n.language === 'fr' ? 'Virement Bancaire' : 'Bank Transfer'}
                </h3>
                <p className="text-sm text-slate-600">
                  {i18n.language === 'fr' ? 'Virements internationaux' : 'International transfers'}
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-4">
              <p className="text-sm text-slate-700 mb-4">
                {i18n.language === 'fr'
                  ? 'Contactez-nous pour les détails du virement bancaire.'
                  : 'Contact us for bank transfer details.'}
              </p>
              <a
                href="mailto:justiceforbarran@gmail.com"
                className="w-full block text-center py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors text-lg"
              >
                {i18n.language === 'fr' ? 'Envoyer un Email' : 'Send Email'}
              </a>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg text-sm text-slate-700">
              <p className="font-bold mb-2">🌍 {i18n.language === 'fr' ? 'Global:' : 'Global:'}</p>
              <p>
                {i18n.language === 'fr'
                  ? 'Nous acceptons les virements de n\'importe quel pays.'
                  : 'We accept transfers from any country.'}
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 p-8 bg-red-50 rounded-lg border-2 border-red-200">
          <p className="text-lg text-slate-700 mb-3">
            💙 {i18n.language === 'fr'
              ? 'Merci de soutenir la justice pour Barran.'
              : 'Thank you for supporting Justice for Barran.'}
          </p>
          <p className="text-sm text-slate-600">
            {i18n.language === 'fr'
              ? 'Chaque don compte. 100% va à la bataille juridique et à la défense.'
              : 'Every donation counts. 100% goes to legal battle and advocacy.'}
          </p>
        </div>
      </div>
    </div>
  );
}
