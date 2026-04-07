import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Heart, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DonateEtransfer() {
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const etransferEmail = 'justiceforbarran@gmail.com';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-charcoal py-12">
      <div className="container max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <Heart size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            {isEnglish ? 'Donate via Interac e-Transfer' : 'Donner par Interac e-Transfert'}
          </h1>
          <p className="text-lg text-green-600">
            {isEnglish ? 'Fast, secure, and no fees' : 'Rapide, sécurisé et sans frais'}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {isEnglish ? 'How to Send Your Donation' : 'Comment envoyer votre don'}
            </h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-lg">
                {isEnglish
                  ? 'Open your bank app or online banking'
                  : 'Ouvrez votre application bancaire ou votre banque en ligne'}
              </li>
              <li className="text-lg">
                {isEnglish
                  ? 'Select "Send Money" or "Interac e-Transfer"'
                  : 'Sélectionnez "Envoyer de l\'argent" ou "Interac e-Transfert"'}
              </li>
              <li className="text-lg">
                {isEnglish
                  ? 'Enter the email address below'
                  : 'Entrez l\'adresse e-mail ci-dessous'}
              </li>
              <li className="text-lg">
                {isEnglish
                  ? 'Enter your donation amount'
                  : 'Entrez le montant de votre don'}
              </li>
              <li className="text-lg">
                {isEnglish
                  ? 'Complete the transfer'
                  : 'Complétez le transfert'}
              </li>
            </ol>
          </div>

          {/* Email Address */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8">
            <p className="text-sm text-green-600 font-semibold mb-2">
              {isEnglish ? 'Send to this email address:' : 'Envoyer à cette adresse e-mail:'}
            </p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={etransferEmail}
                readOnly
                className="flex-1 bg-white border-2 border-green-300 rounded-lg px-4 py-3 font-mono font-bold text-lg text-green-700"
              />
              <button
                onClick={() => copyToClipboard(etransferEmail)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition flex items-center gap-2 font-bold"
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    {isEnglish ? 'Copied!' : 'Copié!'}
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    {isEnglish ? 'Copy' : 'Copier'}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Suggested Amounts */}
          <div className="mb-8">
            <p className="text-sm text-green-600 font-semibold mb-3">
              {isEnglish ? 'Suggested amounts:' : 'Montants suggérés:'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {['5', '10', '20', '50', '100'].map((amount) => (
                <div
                  key={amount}
                  className="bg-green-100 border-2 border-green-300 rounded-lg p-3 text-center font-bold text-green-700 text-lg"
                >
                  CAD${amount}
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-8">
            <p className="font-bold text-amber-900 mb-2">
              {isEnglish ? '⚠️ Important:' : '⚠️ Important:'}
            </p>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>
                • {isEnglish
                  ? 'Interac e-Transfers are final and cannot be reversed'
                  : 'Les Interac e-Transferts sont définitifs et ne peuvent pas être annulés'}
              </li>
              <li>
                • {isEnglish
                  ? 'Your donation goes directly to our TD Bank account'
                  : 'Votre don va directement à notre compte TD Bank'}
              </li>
              <li>
                • {isEnglish
                  ? '100% of your donation supports legal advocacy and systemic change'
                  : '100% de votre don soutient la défense juridique et le changement systémique'}
              </li>
              <li>
                • {isEnglish
                  ? 'No fees or administrative costs'
                  : 'Aucun frais ni coûts administratifs'}
              </li>
            </ul>
          </div>

          {/* Security Notice */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
            <p className="text-sm text-green-700">
              🔒 {isEnglish
                ? 'Your payment is secure and encrypted. Your privacy is protected.'
                : 'Votre paiement est sécurisé et chiffré. Votre confidentialité est protégée.'}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => setLocation('/donate')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            {isEnglish ? '← Back to Donate' : '← Retour à Donner'}
          </button>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-green-700 font-semibold mb-2">
            {isEnglish
              ? 'Thank you for supporting Justice for Barran'
              : 'Merci de soutenir Justice pour Barran'}
          </p>
          <p className="text-sm text-green-600">
            {isEnglish
              ? 'Your donation makes a real difference in the fight for Indigenous justice and systemic accountability.'
              : 'Votre don fait une réelle différence dans la lutte pour la justice autochtone et la responsabilité systémique.'}
          </p>
        </div>
      </div>
    </div>
  );
}
