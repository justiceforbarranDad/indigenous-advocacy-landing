import React, { useState } from 'react';
import { ChevronLeft, Heart, Scale, Users, Zap } from 'lucide-react';
import { useLocation } from 'wouter';

type Language = 'en' | 'fr';

const translations = {
  en: {
    title: 'Support Justice for Barran',
    subtitle: 'McGovern Arts Institute Community Healing Centre',
    description: 'Legal advocacy for Indigenous families',
    donateCAD: 'Donate in CAD',
    donateUSD: 'Donate in USD',
    pointCamera: '📱 Point Camera & Pay',
    chooseAmount: '💳 Choose Amount & Pay',
    scanInfo: 'Scan with any phone camera',
    worksWithAll: 'Works with all payment methods',
    clickAny: 'Click any amount to donate instantly.',
    otherAmount: 'Other Amount',
    enterCustom: 'Enter Custom Amount & Pay',
    allPaymentMethods: '✓ All Payment Methods Accepted',
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
    supportForJustice: 'Support for Justice',
    theCase: 'The Case',
    caseDescription: 'Since 2021, an Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. DPJ withdrew support. Politicians stayed silent. Institutions failed. 1,873 days of waiting. 1,873 days of government silence. This case will set a precedent protecting other Indigenous families.',
    justiceDelayed: 'Justice delayed is justice denied.',
    whatYourSupportDoes: 'What Your Support Does',
    legalRepresentation: 'Legal Representation',
    legalRepDesc: 'Court filing fees, lawyer consultations, and legal document preparation',
    familySupport: 'Family Support',
    familySupportDesc: 'Counseling, mental health services, and community healing programs',
    advocacyAwareness: 'Advocacy & Awareness',
    advocacyDesc: 'Media campaigns, podcast production, and public education initiatives',
    indigenousRights: 'Indigenous Rights',
    rightsDesc: 'Supporting systemic change and protecting other Indigenous families',
    donateNow: 'Donate Now',
    creatingLegacy: 'Creating a Legacy',
    legacyIntro: 'Your support doesn\'t end with this case. It creates a legacy of justice, accountability, and protection for generations to come.',
    precedentForJustice: 'Precedent for Justice',
    precedentDesc: 'Your donation helps establish legal precedent that protects Indigenous children across Canada',
    systemicChange: 'Systemic Change',
    systemicDesc: 'Supporting this case drives accountability in child protection systems and government institutions',
    communityHealingLegacy: 'Community Healing',
    communityHealingLegacyDesc: 'Funds support healing programs for Indigenous communities affected by systemic failure',
    futureProtection: 'Future Protection',
    futureProtectionDesc: 'Every donation prevents another family from experiencing the same 1,873 days of silence',
    impactOfDonation: 'The Impact of Your Donation',
    immediateSupport: 'Immediate Support',
    immediateDesc: 'Helps cover legal consultation fees',
    significantSupport: 'Significant Support',
    significantDesc: 'Contributes to court filing fees',
    transformativeSupport: 'Transformative Support',
    transformativeDesc: 'Supports family healing services',
    joinFight: 'Join the Fight for Justice',
    joinDesc: 'Every dollar counts. Every voice matters. Together, we create a precedent that will protect Indigenous families for generations to come.',
    justiceStartsNow: 'Justice starts now.',
  },
  fr: {
    title: 'Soutenir la Justice pour Barran',
    subtitle: 'Centre de Guérison Communautaire de l\'Institut des Arts McGovern',
    description: 'Plaidoyer juridique pour les familles autochtones',
    donateCAD: 'Donner en CAD',
    donateUSD: 'Donner en USD',
    pointCamera: '📱 Pointez la Caméra et Payez',
    chooseAmount: '💳 Choisissez un Montant et Payez',
    scanInfo: 'Scannez avec n\'importe quelle caméra téléphonique',
    worksWithAll: 'Fonctionne avec tous les modes de paiement',
    clickAny: 'Cliquez sur n\'importe quel montant pour donner instantanément.',
    otherAmount: 'Autre Montant',
    enterCustom: 'Entrez un Montant Personnalisé et Payez',
    allPaymentMethods: '✓ Tous les Modes de Paiement Acceptés',
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
    supportForJustice: 'Soutien pour la Justice',
    theCase: 'L\'Affaire',
    caseDescription: 'Depuis 2021, une famille autochtone se bat pour la justice après un traumatisme grave. Un adolescent poignardé trois fois. La DPJ s\'est retirée. Les politiciens ont gardé le silence. Les institutions ont échoué. 1 873 jours d\'attente. 1 873 jours de silence gouvernemental. Cette affaire établira un précédent qui protégera d\'autres familles autochtones.',
    justiceDelayed: 'La justice retardée est la justice refusée.',
    whatYourSupportDoes: 'Ce que Votre Soutien Fait',
    legalRepresentation: 'Représentation Juridique',
    legalRepDesc: 'Frais de dépôt judiciaire, consultations juridiques et préparation de documents',
    familySupport: 'Soutien Familial',
    familySupportDesc: 'Counseling, services de santé mentale et programmes de guérison communautaire',
    advocacyAwareness: 'Plaidoyer & Sensibilisation',
    advocacyDesc: 'Campagnes médiatiques, production de podcasts et initiatives d\'éducation publique',
    indigenousRights: 'Droits Autochtones',
    rightsDesc: 'Soutenir le changement systémique et protéger d\'autres familles autochtones',
    donateNow: 'Faites un Don Maintenant',
    creatingLegacy: 'Créer un Héritage',
    legacyIntro: 'Votre soutien ne se termine pas avec ce procès. Il crée un héritage de justice, de responsabilité et de protection pour les générations futures.',
    precedentForJustice: 'Précédent pour la Justice',
    precedentDesc: 'Votre don aide à établir un précédent juridique qui protège les enfants autochtones partout au Canada',
    systemicChange: 'Changement Systémique',
    systemicDesc: 'Soutenir cette affaire renforce la responsabilité dans les systèmes de protection de l\'enfance',
    communityHealingLegacy: 'Guérison Communautaire',
    communityHealingLegacyDesc: 'Les fonds soutiennent les programmes de guérison pour les communautés autochtones',
    futureProtection: 'Protection Future',
    futureProtectionDesc: 'Chaque don prévient une autre famille de vivre les mêmes 1 873 jours de silence',
    impactOfDonation: 'L\'Impact de Votre Don',
    immediateSupport: 'Soutien Immédiat',
    immediateDesc: 'Aide aux frais de consultation juridique',
    significantSupport: 'Soutien Significatif',
    significantDesc: 'Contribue aux frais de dépôt judiciaire',
    transformativeSupport: 'Soutien Transformateur',
    transformativeDesc: 'Soutient les services de guérison familiale',
    joinFight: 'Rejoignez la Lutte pour la Justice',
    joinDesc: 'Chaque dollar compte. Chaque voix compte. Ensemble, nous créons un précédent qui protégera les familles autochtones pour les générations à venir.',
    justiceStartsNow: 'La justice commence maintenant.',
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

  const impactItems = [
    { icon: Scale, titleKey: 'legalRepresentation', descKey: 'legalRepDesc' },
    { icon: Users, titleKey: 'familySupport', descKey: 'familySupportDesc' },
    { icon: Zap, titleKey: 'advocacyAwareness', descKey: 'advocacyDesc' },
    { icon: Heart, titleKey: 'indigenousRights', descKey: 'rightsDesc' },
  ];

  const legacyItems = [
    { titleKey: 'precedentForJustice', descKey: 'precedentDesc' },
    { titleKey: 'systemicChange', descKey: 'systemicDesc' },
    { titleKey: 'communityHealingLegacy', descKey: 'communityHealingLegacyDesc' },
    { titleKey: 'futureProtection', descKey: 'futureProtectionDesc' },
  ];

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

      {/* Support for Justice Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green text-center mb-4">
            {t.supportForJustice}
          </h2>
          <div className="h-1 w-24 bg-amber-orange mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: The Case */}
            <div className="bg-cream rounded-lg p-8 border-2 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-4">
                {t.theCase}
              </h3>
              <p className="text-charcoal-light mb-4 leading-relaxed">
                {t.caseDescription}
              </p>
              <p className="text-amber-orange font-bold">
                {t.justiceDelayed}
              </p>
            </div>

            {/* Right: What Your Support Does */}
            <div className="bg-cream rounded-lg p-8 border-2 border-forest-green">
              <h3 className="text-2xl font-bold text-forest-green mb-4">
                {t.whatYourSupportDoes}
              </h3>
              <div className="space-y-4">
                {impactItems.map((item, idx) => {
                  const Icon = item.icon;
                  const title = t[item.titleKey as keyof typeof t];
                  const desc = t[item.descKey as keyof typeof t];
                  return (
                    <div key={idx} className="flex gap-3">
                      <Icon size={24} className="text-amber-orange flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-forest-green">{title}</p>
                        <p className="text-sm text-charcoal-light">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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

        {/* Donation Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green text-center mb-4">
          {t.donateNow}
        </h2>
        <div className="h-1 w-24 bg-amber-orange mx-auto mb-12"></div>

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
            <h3 className={`text-3xl font-bold mb-2 ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
              {t.chooseAmount}
            </h3>
            <p className="text-charcoal-light mb-6 text-sm">
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
              <p className={`font-bold mb-3 text-sm ${currency === 'CAD' ? 'text-forest-green' : 'text-blue-600'}`}>
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
            <div className={`mt-6 p-4 rounded-lg text-sm ${currency === 'CAD' ? 'bg-forest-green/10 border-2 border-forest-green' : 'bg-blue-600/10 border-2 border-blue-600'}`}>
              <p className="font-bold mb-2">{t.allPaymentMethods}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>• Visa</div>
                <div>• Mastercard</div>
                <div>• American Express</div>
                <div>• Discover</div>
                <div>• Apple Pay</div>
                <div>• Google Pay</div>
                <div>• PayPal</div>
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
              <p className="text-charcoal-light mt-3 font-semibold text-sm">
                {t.donations}
              </p>
            </div>
            <div className="text-center">
              <p className={`text-5xl font-bold ${currency === 'CAD' ? 'text-amber-orange' : 'text-blue-600'}`}>
                0%
              </p>
              <p className="text-charcoal-light mt-3 font-semibold text-sm">
                {t.fees}
              </p>
            </div>
            <div className="text-center">
              <p className={`text-5xl font-bold ${currency === 'CAD' ? 'text-amber-orange' : 'text-blue-600'}`}>
                ∞
              </p>
              <p className="text-charcoal-light mt-3 font-semibold text-sm">
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
          <p className="text-charcoal-light mb-4 text-sm">
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

        {/* Creating a Legacy Section */}
        <div className="py-16 px-0 bg-white">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green text-center mb-4">
            {t.creatingLegacy}
          </h2>
          <div className="h-1 w-24 bg-amber-orange mx-auto mb-12"></div>

          <p className="text-center text-charcoal-light text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.legacyIntro}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {legacyItems.map((item, idx) => {
              const title = t[item.titleKey as keyof typeof t];
              const desc = t[item.descKey as keyof typeof t];
              return (
                <div key={idx} className="bg-gradient-to-br from-forest-green/10 to-amber-orange/10 rounded-lg p-6 border-l-4 border-amber-orange">
                  <h3 className="text-xl font-bold text-forest-green mb-3">
                    {title}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed text-sm">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Numbers Section */}
        <div className="py-16 px-0 bg-gradient-to-r from-forest-green to-forest-green/90 text-cream rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t.impactOfDonation}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center px-8">
            <div>
              <div className="text-5xl font-bold text-amber-orange mb-2">$5</div>
              <p className="text-lg font-semibold mb-2">
                {t.immediateSupport}
              </p>
              <p className="text-cream/80 text-sm">
                {t.immediateDesc}
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-amber-orange mb-2">$50</div>
              <p className="text-lg font-semibold mb-2">
                {t.significantSupport}
              </p>
              <p className="text-cream/80 text-sm">
                {t.significantDesc}
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-amber-orange mb-2">$100+</div>
              <p className="text-lg font-semibold mb-2">
                {t.transformativeSupport}
              </p>
              <p className="text-cream/80 text-sm">
                {t.transformativeDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 px-0 bg-cream text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-6">
            {t.joinFight}
          </h2>
          <p className="text-charcoal-light text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
            {t.joinDesc}
          </p>
          <p className="text-amber-orange font-bold text-xl">
            {t.justiceStartsNow}
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-amber-orange hover:text-amber-light transition-colors font-bold text-lg mt-12"
        >
          <ChevronLeft size={24} />
          {t.backHome}
        </button>
      </div>
    </div>
  );
}
