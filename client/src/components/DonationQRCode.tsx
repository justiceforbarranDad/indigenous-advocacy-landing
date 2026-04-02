import { QRCodeSVG as QRCode } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { CreditCard, Smartphone, Zap } from 'lucide-react';

export function DonationQRCode() {
  const { i18n } = useTranslation();

  const donationAmounts = [
    { amount: 5, label: '$5' },
    { amount: 10, label: '$10' },
    { amount: 20, label: '$20' },
    { amount: 50, label: '$50' },
    { amount: 100, label: '$100' },
    { amount: 0, label: i18n.language === 'fr' ? 'Montant personnalisé' : 'Custom' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Apple Pay', icon: '🍎' },
    { name: 'Google Pay', icon: '🔵' },
    { name: 'Klarna', icon: '⏰' },
    { name: 'E-Transfer', icon: '📧' },
  ];

  const getCheckoutUrl = (amount: number) => {
    if (amount === 0) {
      return `${window.location.origin}/donate`;
    }
    return `${window.location.origin}/donate?amount=${amount}`;
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ACCEPTED PAYMENT METHODS */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-4">
        <p className="text-xs font-bold text-gray-700 mb-3 text-center">
          {i18n.language === 'fr' ? '✓ Nous acceptons' : '✓ We Accept'}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="flex items-center justify-center gap-1 bg-white rounded p-2 border border-gray-200">
              <span className="text-lg">{method.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">
          {i18n.language === 'fr' ? 'Scanner pour Donner' : 'Scan to Donate'}
        </h4>
        <p className="text-xs text-gray-600">
          {i18n.language === 'fr' ? 'Choisissez un montant et scannez le code QR' : 'Choose an amount and scan the QR code'}
        </p>
      </div>

      {/* QR CODE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {donationAmounts.map((item, idx) => (
          <a
            key={idx}
            href={getCheckoutUrl(item.amount)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 border-2 border-gray-300 rounded-lg hover:border-red-600 hover:bg-red-50 transition-all cursor-pointer"
          >
            <div className="bg-white p-2 rounded border border-gray-200">
              <QRCode
                value={getCheckoutUrl(item.amount)}
                size={120}
                level="H"
                includeMargin={true}
                fgColor="#000000"
                bgColor="#FFFFFF"
              />
            </div>
            <span className="text-sm font-bold text-gray-800">{item.label}</span>
          </a>
        ))}
      </div>

      {/* E-TRANSFER SECTION */}
      <div className="border-2 border-orange-400 bg-orange-50 p-4 rounded-lg">
        <h5 className="font-bold mb-2 text-sm flex items-center gap-2">
          📧 {i18n.language === 'fr' ? 'Virement Électronique' : 'E-Transfer'}
        </h5>
        <div className="bg-white p-3 rounded border border-orange-300 mb-2">
          <p className="text-xs font-mono text-center text-gray-800 break-all">
            justiceforbarran@gmail.com
          </p>
        </div>
        <p className="text-xs text-gray-700">
          {i18n.language === 'fr' ? 'Envoyez un virement électronique à cette adresse e-mail' : 'Send e-Transfer to this email address'}
        </p>
      </div>

      {/* SECURITY & INFO */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2 mb-2">
          <span className="text-lg">🔒</span>
          <div>
            <p className="text-xs font-bold text-blue-900">
              {i18n.language === 'fr' ? 'Paiement Sécurisé' : 'Secure Payment'}
            </p>
            <p className="text-xs text-blue-800">
              {i18n.language === 'fr' ? 'Chiffrement bancaire • Aucune donnée personnelle stockée' : 'Bank-level encryption • No personal data stored'}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-lg">✓</span>
          <div>
            <p className="text-xs font-bold text-green-900">
              {i18n.language === 'fr' ? '100% des dons vont à la justice' : '100% goes to justice'}
            </p>
            <p className="text-xs text-green-800">
              {i18n.language === 'fr' ? 'Fonds fiduciaires McGovern • Pas de revenu personnel' : 'McGovern Trust • Not personal income'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
