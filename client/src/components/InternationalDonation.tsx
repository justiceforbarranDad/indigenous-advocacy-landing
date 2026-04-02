import { useState } from 'react';
import { AlertCircle, Copy, Check, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function InternationalDonation() {
  const { i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'stripe' | 'wire'>('stripe');
  const isEnglish = i18n.language === 'en';

  // TD Wire Transfer Information
  const wireInfo = {
    accountHolder: 'JAMES ROBERT MCGOVERN',
    bankName: 'TD Canada Trust',
    swift: 'TDOMCATTTOR',
    address: '5880 ROBERT-BOURASSA BLVD, LAVAL, PQ H7E0A5, CANADA',
    accountNumber: '43036255007',
    currency: 'CAD',
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12 rounded-lg">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-full mb-4">
            <Globe size={20} />
            <span className="font-bold tracking-widest">
              {isEnglish ? 'INTERNATIONAL DONATIONS' : 'DONS INTERNATIONAUX'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-widest">
            {isEnglish ? 'DONATE FROM ANYWHERE' : 'DONNER DE N\'IMPORTE OÙ'}
          </h2>
          <p className="text-lg text-blue-100">
            {isEnglish
              ? 'Support Justice for Barran from the USA, Europe, or anywhere in the world'
              : 'Soutenez Justice pour Barran aux États-Unis, en Europe ou n\'importe où dans le monde'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setActiveTab('stripe')}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              activeTab === 'stripe'
                ? 'bg-white text-blue-600'
                : 'bg-blue-700 hover:bg-blue-600 text-white'
            }`}
          >
            {isEnglish ? '💳 Credit Card (Stripe)' : '💳 Carte de crédit (Stripe)'}
          </button>
          <button
            onClick={() => setActiveTab('wire')}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              activeTab === 'wire'
                ? 'bg-white text-blue-600'
                : 'bg-blue-700 hover:bg-blue-600 text-white'
            }`}
          >
            {isEnglish ? '🏦 Wire Transfer' : '🏦 Transfert bancaire'}
          </button>
        </div>

        {/* Stripe Option */}
        {activeTab === 'stripe' && (
          <div className="bg-blue-950 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {isEnglish ? 'Credit/Debit Card Payment' : 'Paiement par carte de crédit/débit'}
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-2">
                  {isEnglish ? 'Accepted Cards:' : 'Cartes acceptées:'}
                </p>
                <p className="font-bold">Visa • Mastercard • American Express • Discover</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900 p-4 rounded-lg">
                  <p className="text-sm text-blue-300 mb-1">
                    {isEnglish ? 'Processing Fee:' : 'Frais de traitement:'}
                  </p>
                  <p className="font-bold text-lg">2.9% + $0.30</p>
                </div>
                <div className="bg-blue-900 p-4 rounded-lg">
                  <p className="text-sm text-blue-300 mb-1">
                    {isEnglish ? 'Processing Time:' : 'Délai de traitement:'}
                  </p>
                  <p className="font-bold text-lg">Instant</p>
                </div>
              </div>

              <div className="bg-green-900/30 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-200">
                  {isEnglish
                    ? '✓ Works worldwide • ✓ Instant processing • ✓ Secure encryption'
                    : '✓ Fonctionne dans le monde entier • ✓ Traitement instantané • ✓ Chiffrement sécurisé'}
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open('https://checkout.stripe.com/pay/cs_live_justiceforbarran', '_blank')}
              className="w-full bg-white text-blue-600 font-bold py-4 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              {isEnglish ? 'Donate with Credit Card' : 'Donner avec une carte de crédit'}
            </button>

            <p className="text-sm text-blue-300 text-center mt-4">
              {isEnglish
                ? 'Powered by Stripe • Your payment is secure and encrypted'
                : 'Alimenté par Stripe • Votre paiement est sécurisé et chiffré'}
            </p>
          </div>
        )}

        {/* Wire Transfer Option */}
        {activeTab === 'wire' && (
          <div className="bg-blue-950 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {isEnglish ? 'International Wire Transfer' : 'Transfert bancaire international'}
            </h3>

            <div className="bg-amber-900/30 border-l-4 border-amber-500 p-4 rounded mb-6">
              <p className="text-amber-200 font-bold mb-2">
                {isEnglish ? '💡 Best for large donations' : '💡 Idéal pour les gros dons'}
              </p>
              <p className="text-amber-100 text-sm">
                {isEnglish
                  ? 'Wire transfers have no platform fees - 100% of your donation goes to justice efforts'
                  : 'Les virements n\'ont pas de frais de plateforme - 100% de votre don va aux efforts de justice'}
              </p>
            </div>

            {/* Wire Information */}
            <div className="space-y-4 mb-8">
              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-1">
                  {isEnglish ? 'Account Holder' : 'Titulaire du compte'}
                </p>
                <p className="font-mono font-bold text-lg">{wireInfo.accountHolder}</p>
              </div>

              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-1">
                  {isEnglish ? 'Bank Name' : 'Nom de la banque'}
                </p>
                <p className="font-mono font-bold text-lg">{wireInfo.bankName}</p>
              </div>

              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-1">
                  {isEnglish ? 'SWIFT Code' : 'Code SWIFT'}
                </p>
                <p className="font-mono font-bold text-lg">{wireInfo.swift}</p>
              </div>

              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-1">
                  {isEnglish ? 'Account Number' : 'Numéro de compte'}
                </p>
                <p className="font-mono font-bold text-lg">{wireInfo.accountNumber}</p>
              </div>

              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-1">
                  {isEnglish ? 'Bank Address' : 'Adresse bancaire'}
                </p>
                <p className="font-mono text-sm">{wireInfo.address}</p>
              </div>

              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-sm text-blue-300 mb-1">
                  {isEnglish ? 'Currency' : 'Devise'}
                </p>
                <p className="font-mono font-bold text-lg">{wireInfo.currency}</p>
              </div>
            </div>

            {/* Copy All Button */}
            <button
              onClick={() => copyToClipboard(`
Account Holder: ${wireInfo.accountHolder}
Bank: ${wireInfo.bankName}
SWIFT: ${wireInfo.swift}
Account: ${wireInfo.accountNumber}
Address: ${wireInfo.address}
Currency: ${wireInfo.currency}
              `)}
              className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2 mb-4"
            >
              {copied ? (
                <>
                  <Check size={20} />
                  {isEnglish ? 'Copied!' : 'Copié!'}
                </>
              ) : (
                <>
                  <Copy size={20} />
                  {isEnglish ? 'Copy All Details' : 'Copier tous les détails'}
                </>
              )}
            </button>

            {/* Instructions */}
            <div className="bg-blue-900 p-4 rounded-lg text-sm">
              <p className="font-bold mb-3">
                {isEnglish ? 'How to Send a Wire Transfer:' : 'Comment envoyer un virement:'}
              </p>
              <ol className="list-decimal list-inside space-y-2 text-blue-100">
                <li>{isEnglish ? 'Contact your bank and request an international wire transfer' : 'Contactez votre banque et demandez un virement international'}</li>
                <li>{isEnglish ? 'Provide the account details above' : 'Fournissez les détails du compte ci-dessus'}</li>
                <li>{isEnglish ? 'Specify the amount in CAD (Canadian Dollars)' : 'Spécifiez le montant en CAD (dollars canadiens)'}</li>
                <li>{isEnglish ? 'Your bank may charge a wire fee (typically $15-50)' : 'Votre banque peut facturer des frais de virement (généralement 15-50 $)'}</li>
                <li>{isEnglish ? 'Processing time: 3-5 business days' : 'Délai de traitement: 3-5 jours ouvrables'}</li>
              </ol>
            </div>

            <p className="text-sm text-blue-300 text-center mt-6">
              {isEnglish
                ? '📧 Email us at justiceforbarran@gmail.com to confirm your wire transfer'
                : '📧 Envoyez-nous un e-mail à justiceforbarran@gmail.com pour confirmer votre virement'}
            </p>
          </div>
        )}

        {/* Security Notice */}
        <div className="bg-blue-900 border-2 border-blue-600 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-200">
            {isEnglish
              ? '🔒 All donations are secure and encrypted. 100% of funds support legal advocacy and systemic change.'
              : '🔒 Tous les dons sont sécurisés et chiffrés. 100% des fonds soutiennent la défense juridique et le changement systémique.'}
          </p>
        </div>
      </div>
    </div>
  );
}
