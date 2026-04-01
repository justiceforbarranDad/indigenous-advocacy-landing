import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Copy, Check, DollarSign, Banknote, Smartphone, CreditCard, Globe } from 'lucide-react';

export default function PaymentHub() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankInfo = {
    accountHolder: 'McGovern Institute Foundation',
    accountNumber: 'XXX-XXX-XXXX (Contact for details)',
    routingNumber: 'Contact us for routing number',
    swift: 'Contact us for SWIFT code',
  };

  const eTransferEmail = 'justice@barran.ca';
  const stripeLink = 'https://buy.stripe.com/your-link-here';
  const paypalLink = 'https://paypal.me/justiceforbarran';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {i18n.language === 'fr' ? 'Tous les moyens de donner' : 'All Ways to Donate'}
          </h1>
          <p className="text-lg text-slate-600">
            {i18n.language === 'fr' 
              ? 'Choisissez la méthode qui vous convient le mieux' 
              : 'Choose the payment method that works best for you'}
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Bank Transfer */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Banknote size={32} className="text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                {i18n.language === 'fr' ? 'Virement bancaire' : 'Bank Transfer'}
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              {i18n.language === 'fr'
                ? 'Transférez directement à notre compte bancaire'
                : 'Transfer directly to our bank account'}
            </p>
            <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
              <div>
                <p className="text-sm text-slate-600">{i18n.language === 'fr' ? 'Titulaire du compte' : 'Account Holder'}</p>
                <p className="font-semibold text-slate-900">{bankInfo.accountHolder}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">{i18n.language === 'fr' ? 'Numéro de compte' : 'Account Number'}</p>
                <p className="font-semibold text-slate-900">{bankInfo.accountNumber}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                <p className="text-xs text-blue-700">
                  {i18n.language === 'fr'
                    ? '📧 Contactez-nous pour les détails complets du virement'
                    : '📧 Contact us for complete wire transfer details'}
                </p>
              </div>
            </div>
          </div>

          {/* E-Transfer / Interac */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone size={32} className="text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                {i18n.language === 'fr' ? 'Virement électronique' : 'E-Transfer (Interac)'}
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              {i18n.language === 'fr'
                ? 'Envoyez un virement électronique instantanément'
                : 'Send an instant e-transfer from your bank'}
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                <p className="text-sm text-slate-600 mb-2">
                  {i18n.language === 'fr' ? 'Adresse e-mail' : 'Email Address'}
                </p>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={eTransferEmail}
                    readOnly
                    className="flex-1 px-3 py-2 border border-green-300 rounded-lg bg-white text-sm font-semibold"
                  />
                  <button
                    onClick={() => copyToClipboard(eTransferEmail, 'etransfer')}
                    className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {copied === 'etransfer' ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                {i18n.language === 'fr'
                  ? '💡 Disponible pour tous les clients bancaires canadiens'
                  : '💡 Available for all Canadian bank customers'}
              </p>
            </div>
          </div>

          {/* Stripe (Card, Apple Pay, Google Pay) */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard size={32} className="text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                {i18n.language === 'fr' ? 'Carte de crédit' : 'Credit Card'}
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              {i18n.language === 'fr'
                ? 'Carte de crédit, Apple Pay, Google Pay'
                : 'Credit card, Apple Pay, Google Pay'}
            </p>
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                {i18n.language === 'fr'
                  ? 'Accepte Visa, Mastercard, American Express et plus'
                  : 'Accepts Visa, Mastercard, American Express and more'}
              </p>
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                {i18n.language === 'fr' ? 'Donner par carte' : 'Donate by Card'}
              </a>
            </div>
          </div>

          {/* PayPal */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={32} className="text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-900">PayPal</h2>
            </div>
            <p className="text-slate-600 mb-6">
              {i18n.language === 'fr'
                ? 'Donnez via votre compte PayPal'
                : 'Donate using your PayPal account'}
            </p>
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                {i18n.language === 'fr'
                  ? 'Rapide et sécurisé avec PayPal'
                  : 'Fast and secure with PayPal'}
              </p>
              <a
                href={paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Globe size={20} />
                {i18n.language === 'fr' ? 'Donner via PayPal' : 'Donate via PayPal'}
              </a>
            </div>
          </div>

          {/* Cryptocurrency */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign size={32} className="text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                {i18n.language === 'fr' ? 'Cryptomonnaie' : 'Cryptocurrency'}
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              {i18n.language === 'fr'
                ? 'Bitcoin, Ethereum et autres'
                : 'Bitcoin, Ethereum and more'}
            </p>
            <div className="space-y-4 bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600">
                {i18n.language === 'fr'
                  ? 'Nous acceptons les principales cryptomonnaies'
                  : 'We accept major cryptocurrencies'}
              </p>
              <p className="text-xs text-orange-700">
                {i18n.language === 'fr'
                  ? '📧 Contactez-nous pour les adresses de portefeuille'
                  : '📧 Contact us for wallet addresses'}
              </p>
            </div>
          </div>

          {/* Monthly Recurring */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={32} className="text-red-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                {i18n.language === 'fr' ? 'Don mensuel' : 'Monthly Giving'}
              </h2>
            </div>
            <p className="text-slate-600 mb-6">
              {i18n.language === 'fr'
                ? 'Soutien continu chaque mois'
                : 'Ongoing support each month'}
            </p>
            <div className="space-y-4 bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600">
                {i18n.language === 'fr'
                  ? 'Configurez un don récurrent automatique'
                  : 'Set up automatic recurring donations'}
              </p>
              <p className="text-xs text-red-700">
                {i18n.language === 'fr'
                  ? '💪 Votre engagement mensuel fait une vraie différence'
                  : '💪 Your monthly commitment makes a real difference'}
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            {i18n.language === 'fr' ? 'Votre impact' : 'Your Impact'}
          </h3>
          <p className="text-lg mb-6">
            {i18n.language === 'fr'
              ? 'Chaque don, quelle que soit la méthode, finance directement la défense juridique et le changement systémique pour les familles autochtones.'
              : 'Every donation, regardless of method, directly funds legal defense and systemic change for Indigenous families.'}
          </p>
          <div className="flex items-center justify-center gap-2">
            <Heart size={24} />
            <span className="text-xl font-bold">
              {i18n.language === 'fr' ? 'Merci de votre soutien' : 'Thank you for your support'}
            </span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-slate-100 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {i18n.language === 'fr' ? 'Des questions?' : 'Have Questions?'}
          </h3>
          <p className="text-slate-600 mb-4">
            {i18n.language === 'fr'
              ? 'Contactez-nous pour plus d\'informations sur les options de paiement'
              : 'Contact us for more information about payment options'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {i18n.language === 'fr' ? 'Nous contacter' : 'Contact Us'}
          </a>
        </div>
      </div>
    </div>
  );
}
