import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useLocation } from 'wouter';

type Language = 'en' | 'fr';

const translations = {
  en: {
    title: 'Support Justice for Barran',
    subtitle: 'McGovern Arts Institute Community Healing Centre',
    description: 'Terry James Foundation wellness retreat for autistic & First Nations kids',
    donateCAD: 'Donate in CAD',
    donateUSD: 'Donate in USD',
    pointCamera: '📱 Point Camera & Pay',
    chooseAmount: '💳 Choose Amount & Pay',
    scanInfo: 'Scan with any phone camera',
    worksWithAll: 'Works with all payment methods',
    clickAny: 'Click any amount to donate instantly. All major credit cards, Apple Pay, Google Pay, PayPal, Klarna, and Sezzle accepted.',
    otherAmount: 'Other Amount',
    enterCustom: 'Enter Custom Amount & Pay',
    allPaymentMethods: '✓ All Payment Methods Accepted:',
    yourImpact: 'Your Impact',
    donations: 'Donations go to legal advocacy',
    fees: 'Administrative fees',
    potential: 'Systemic change potential',
    directETransfer: '✓ Direct e-Transfer (Canada)',
    eTransferDesc: '100% of your donation goes directly — NO PLATFORM FEES',
    sendTo: 'Send e-Transfer to:',
    noPassword: 'NO PASSWORD REQUIRED - Direct Deposit',
    available: 'Available to all Canadian banks. Instant transfer confirmation.',
    whySupport: 'Why Your Support Matters',
    legalAdvocacy: 'Legal Advocacy',
    legalAdvocacyDesc: 'Systemic change for Indigenous families',
    justiceBarran: 'Justice for Barran',
    justiceBarranDesc: 'Accountability for government failures',
    communityHealing: 'Community Healing',
    communityHealingDesc: 'Wellness programs and support services',
    truthReconciliation: 'Truth & Reconciliation',
    truthReconciliationDesc: 'Real action for systemic change',
    backHome: 'Back to Home',
  },
  fr: {
    title: 'Soutenir la Justice pour Barran',
    subtitle: 'Centre de Guérison Communautaire de l\'Institut des Arts McGovern',
    description: 'Retraite de bien-être de la Fondation Terry James pour les enfants autistes et des Premières Nations',
    donateCAD: 'Donner en CAD',
    donateUSD: 'Donner en USD',
    pointCamera: '📱 Pointez la Caméra et Payez',
    chooseAmount: '💳 Choisissez un Montant et Payez',
    scanInfo: 'Scannez avec n\'importe quelle caméra téléphonique',
    worksWithAll: 'Fonctionne avec tous les modes de paiement',
    clickAny: 'Cliquez sur n\'importe quel montant pour donner instantanément. Toutes les principales cartes de crédit, Apple Pay, Google Pay, PayPal, Klarna et Sezzle acceptés.',
    otherAmount: 'Autre Montant',
    enterCustom: 'Entrez un Montant Personnalisé et Payez',
    allPaymentMethods: '✓ Tous les Modes de Paiement Acceptés:',
    yourImpact: 'Votre Impact',
    donations: 'Les dons vont à l\'aide juridique',
    fees: 'Frais administratifs',
    potential: 'Potentiel de changement systémique',
    directETransfer: '✓ Transfert Électronique Direct (Canada)',
    eTransferDesc: '100% de votre don va directement — AUCUN FRAIS DE PLATEFORME',
    sendTo: 'Envoyez un transfert électronique à:',
    noPassword: 'AUCUN MOT DE PASSE REQUIS - Dépôt Direct',
    available: 'Disponible pour toutes les banques canadiennes. Confirmation de transfert instantanée.',
    whySupport: 'Pourquoi Votre Soutien Est Important',
    legalAdvocacy: 'Plaidoyer Juridique',
    legalAdvocacyDesc: 'Changement systémique pour les familles autochtones',
    justiceBarran: 'Justice pour Barran',
    justiceBarranDesc: 'Responsabilité des défaillances gouvernementales',
    communityHealing: 'Guérison Communautaire',
    communityHealingDesc: 'Programmes de bien-être et services de soutien',
    truthReconciliation: 'Vérité et Réconciliation',
    truthReconciliationDesc: 'Action réelle pour le changement systémique',
    backHome: 'Retour à l\'Accueil',
  },
};

export default function Donate() {
  const [, setLocation] = useLocation();
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');

  const t = translations[language];
  const cadLink = 'https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01';
  const usdLink = 'https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02';
  const currentLink = currency === 'CAD' ? cadLink : usdLink;
  const symbol = currency === 'CAD' ? 'CAD $' : 'USD $';

  const presetAmounts = [5, 10, 20, 50, 100];

  const handleDonate = () => {
    window.open(currentLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Language Toggle */}
      <div className="flex justify-end gap-2 p-4 bg-forest-green/10">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            language === 'en'
              ? 'bg-forest-green text-white'
              : 'bg-white text-forest-green border-2 border-forest-green'
          }`}
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`px-4 py-2 rounded font-bold transition-all ${
            language === 'fr'
              ? 'bg-forest-green text-white'
              : 'bg-white text-forest-green border-2 border-forest-green'
          }`}
        >
          🇫🇷 Français
        </button>
      </div>

      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-forest-green to-forest-green/80 py-16 border-b-8 border-amber-orange">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cream mb-4">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-2">
            {t.subtitle}
          </p>
          <p className="text-lg text-cream/80">
            {t.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        
        {/* Currency Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setCurrency('CAD')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
              currency === 'CAD'
                ? 'bg-forest-green text-white shadow-lg scale-105'
                : 'bg-white text-forest-green border-2 border-forest-green hover:bg-forest-green/10'
            }`}
          >
            {t.donateCAD}
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
              currency === 'USD'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600/10'
            }`}
          >
            {t.donateUSD}
          </button>
        </div>

        {/* Two Column Layout: QR + Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left: QR Code - Point Camera & Pay */}
          <div className="flex flex-col items-center justify-center">
            <div className={`p-8 rounded-2xl shadow-2xl border-4 ${currency === 'CAD' ? 'border-forest-green bg-white' : 'border-blue-600 bg-white'}`}>
              <p className={`text-lg font-bold mb-6 text-center ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
                {t.pointCamera}
              </p>
              <div className="w-72 h-72 bg-white rounded-xl flex items-center justify-center border-2 border-gray-300 p-2">
                <img
                  src={currency === 'CAD' 
                    ? 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01'
                    : 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://buy.stripe.com/test_bJeeVdeBsgJaeqE6h13Ru02'
                  }
                  alt={`Donate QR Code - ${currency}`}
                  className="w-full h-full"
                />
              </div>
              <p className={`text-sm font-semibold mt-6 text-center ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
                {t.scanInfo}
              </p>
              <p className="text-xs text-charcoal-light text-center mt-2">
                {t.worksWithAll}
              </p>
            </div>
          </div>

          {/* Right: Direct Donation Buttons */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className={`text-3xl font-bold mb-2 ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
              {t.chooseAmount}
            </h2>
            <p className="text-charcoal-light mb-6">
              {t.clickAny}
            </p>

            {/* Preset Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={handleDonate}
                  className={`py-4 px-4 rounded-xl font-bold text-lg transition-all border-2 hover:shadow-lg ${
                    currency === 'CAD'
                      ? 'border-forest-green text-white bg-forest-green hover:bg-forest-green/90'
                      : 'border-blue-600 text-white bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {symbol}<br/>{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="pt-4 border-t-2 border-gray-300">
              <p className={`font-bold mb-3 ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
                {t.otherAmount}
              </p>
              <button
                onClick={handleDonate}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all border-2 hover:shadow-lg ${
                  currency === 'CAD'
                    ? 'border-amber-orange text-white bg-amber-orange hover:bg-amber-light'
                    : 'border-blue-600 text-white bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {t.enterCustom}
              </button>
            </div>

            {/* Payment Methods Info */}
            <div className={`mt-6 p-4 rounded-lg ${currency === 'CAD' ? 'bg-forest-green/10 border-2 border-forest-green' : 'bg-blue-600/10 border-2 border-blue-600'}`}>
              <p className="font-bold mb-2 text-sm">{t.allPaymentMethods}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>• Visa</div>
                <div>• Mastercard</div>
                <div>• American Express</div>
                <div>• Discover</div>
                <div>• Diners Club</div>
                <div>• JCB</div>
                <div>• Apple Pay</div>
                <div>• Google Pay</div>
                <div>• PayPal</div>
                <div>• Klarna</div>
                <div>• Sezzle</div>
                <div>• Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className={`p-8 rounded-2xl border-4 mb-12 ${currency === 'CAD' ? 'border-forest-green bg-forest-green/5' : 'border-blue-600 bg-blue-600/5'}`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
            {t.yourImpact}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className={`text-5xl font-bold ${currency === 'CAD' ? 'text-amber-orange' : 'text-blue-600'}`}>
                100%
              </p>
              <p className="text-charcoal-light mt-3 font-semibold">
                {t.donations}
              </p>
            </div>
            <div className="text-center">
              <p className={`text-5xl font-bold ${currency === 'CAD' ? 'text-amber-orange' : 'text-blue-600'}`}>
                0%
              </p>
              <p className="text-charcoal-light mt-3 font-semibold">
                {t.fees}
              </p>
            </div>
            <div className="text-center">
              <p className={`text-5xl font-bold ${currency === 'CAD' ? 'text-amber-orange' : 'text-blue-600'}`}>
                ∞
              </p>
              <p className="text-charcoal-light mt-3 font-semibold">
                {t.potential}
              </p>
            </div>
          </div>
        </div>

        {/* Alternative: e-Transfer */}
        <div className={`p-8 rounded-2xl border-4 mb-12 ${currency === 'CAD' ? 'border-forest-green bg-forest-green/5' : 'border-blue-600 bg-blue-600/5'}`}>
          <h3 className={`text-2xl font-bold mb-4 ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
            {t.directETransfer}
          </h3>
          <p className="text-charcoal-light mb-4">
            {t.eTransferDesc}
          </p>
          <div className="bg-white p-6 rounded-xl border-2 border-amber-orange">
            <p className="text-sm text-charcoal-light mb-2">{t.sendTo}</p>
            <p className="font-mono font-bold text-2xl text-charcoal mb-3">justiceforbarran@gmail.com</p>
            <p className="text-sm text-amber-orange font-semibold">
              {t.noPassword}
            </p>
          </div>
        </div>

        {/* Why Support */}
        <div className={`p-8 rounded-2xl border-4 mb-12 ${currency === 'CAD' ? 'border-amber-orange bg-amber-orange/5' : 'border-blue-600 bg-blue-600/5'}`}>
          <h3 className={`text-2xl font-bold mb-6 ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
            {t.whySupport}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-amber-orange font-bold text-2xl">✓</span>
              <div>
                <p className="font-bold text-charcoal">{t.legalAdvocacy}</p>
                <p className="text-charcoal-light">{t.legalAdvocacyDesc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-orange font-bold text-2xl">✓</span>
              <div>
                <p className="font-bold text-charcoal">{t.justiceBarran}</p>
                <p className="text-charcoal-light">{t.justiceBarranDesc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-orange font-bold text-2xl">✓</span>
              <div>
                <p className="font-bold text-charcoal">{t.communityHealing}</p>
                <p className="text-charcoal-light">{t.communityHealingDesc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-orange font-bold text-2xl">✓</span>
              <div>
                <p className="font-bold text-charcoal">{t.truthReconciliation}</p>
                <p className="text-charcoal-light">{t.truthReconciliationDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light transition-colors font-bold text-lg"
        >
          <ChevronLeft size={24} />
          {t.backHome}
        </button>
      </div>
    </div>
  );
}
