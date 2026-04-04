import React, { useState } from 'react';
import { ChevronLeft, Lock, Cloud, FileText, DollarSign, Shield, Heart } from 'lucide-react';
import { useLocation } from 'wouter';

type Language = 'en' | 'fr';

const translations = {
  en: {
    title: 'Legacy Drawer for Heirs',
    subtitle: 'Organize Important Documents for Your Family',
    description: 'A guide to creating physical and digital legacy organization systems',
    backHome: 'Back to Home',
    physicalLegacy: 'Physical Legacy Drawer',
    digitalLegacy: 'Digital Legacy Drawer',
    physicalDesc: 'Organize important documents in a secure safe or lockbox',
    digitalDesc: 'Store sensitive documents in encrypted cloud storage and backups',
    tableOfContents: 'Table of Contents',
    estateDocuments: 'Estate Documents',
    estateDesc: 'Will, trust documents, property deeds, titles',
    financialAccounts: 'Financial Accounts',
    financialDesc: 'Bank statements, investment accounts, retirement plans',
    insurancePolicies: 'Insurance Policies',
    insuranceDesc: 'Life insurance, health insurance, property insurance',
    medicalLegal: 'Medical & Legal',
    medicalDesc: 'Power of attorney, healthcare directives, medical records',
    funeralWishes: 'Funeral Wishes',
    funeralDesc: 'Funeral preferences, burial wishes, memorial instructions',
    encryptedCloud: 'Encrypted Cloud Folder',
    encryptedDesc: 'Use password-protected cloud services (Google Drive, OneDrive, iCloud)',
    backupDrive: 'Backup Hard Drive',
    backupDesc: 'Keep encrypted backup copies of all digital documents',
    clearLabels: 'Clear Folder Labels',
    labelsDesc: 'Use clear, consistent naming for easy access by heirs',
    organizationTips: 'Organization Tips for Heirs',
    tip1Title: 'Create a Master List',
    tip1Desc: 'Document all accounts, passwords, and important contacts in one secure location',
    tip2Title: 'Share Access Information',
    tip2Desc: 'Provide trusted heirs with access codes and instructions (store separately)',
    tip3Title: 'Update Regularly',
    tip3Desc: 'Review and update your legacy drawer annually or when circumstances change',
    tip4Title: 'Communicate Your Plan',
    tip4Desc: 'Let your family know where the legacy drawer is located and how to access it',
    tip5Title: 'Consider a Lawyer',
    tip5Desc: 'Consult with an estate lawyer to ensure all documents are properly organized',
    tip6Title: 'Digital Security',
    tip6Desc: 'Use strong passwords and two-factor authentication for all digital accounts',
    startNow: 'Start Your Legacy Drawer Today',
    startDesc: 'Protect your family\'s future by organizing your important documents now.',
    downloadGuide: 'Download Organization Guide',
    printChecklist: 'Print Checklist',
    categories: 'Document Categories',
    securityTips: 'Security & Access Tips',
  },
  fr: {
    title: 'Tiroir Héritage pour les Héritiers',
    subtitle: 'Organisez les Documents Importants de Votre Famille',
    description: 'Un guide pour créer des systèmes d\'organisation d\'héritage physiques et numériques',
    backHome: 'Retour à l\'Accueil',
    physicalLegacy: 'Tiroir Héritage Physique',
    digitalLegacy: 'Tiroir Héritage Numérique',
    physicalDesc: 'Organisez les documents importants dans un coffre-fort ou une boîte sécurisée',
    digitalDesc: 'Stockez les documents sensibles dans le stockage cloud chiffré et les sauvegardes',
    tableOfContents: 'Table des Matières',
    estateDocuments: 'Documents Successoraux',
    estateDesc: 'Testament, documents de fiducie, actes de propriété, titres',
    financialAccounts: 'Comptes Financiers',
    financialDesc: 'Relevés bancaires, comptes d\'investissement, régimes de retraite',
    insurancePolicies: 'Polices d\'Assurance',
    insuranceDesc: 'Assurance-vie, assurance-maladie, assurance-habitation',
    medicalLegal: 'Médical & Juridique',
    medicalDesc: 'Procuration, directives de soins de santé, dossiers médicaux',
    funeralWishes: 'Souhaits Funéraires',
    funeralDesc: 'Préférences funéraires, souhaits d\'inhumation, instructions commémoratives',
    encryptedCloud: 'Dossier Cloud Chiffré',
    encryptedDesc: 'Utilisez des services cloud protégés par mot de passe (Google Drive, OneDrive, iCloud)',
    backupDrive: 'Disque Dur de Sauvegarde',
    backupDesc: 'Conservez des copies de sauvegarde chiffrées de tous les documents numériques',
    clearLabels: 'Étiquettes de Dossier Claires',
    labelsDesc: 'Utilisez des noms clairs et cohérents pour un accès facile par les héritiers',
    organizationTips: 'Conseils d\'Organisation pour les Héritiers',
    tip1Title: 'Créer une Liste Principale',
    tip1Desc: 'Documentez tous les comptes, mots de passe et contacts importants en un seul endroit sécurisé',
    tip2Title: 'Partager les Informations d\'Accès',
    tip2Desc: 'Fournissez aux héritiers de confiance les codes d\'accès et les instructions (stockez séparément)',
    tip3Title: 'Mettre à Jour Régulièrement',
    tip3Desc: 'Examinez et mettez à jour votre tiroir héritage annuellement ou en cas de changement',
    tip4Title: 'Communiquer Votre Plan',
    tip4Desc: 'Informez votre famille de l\'emplacement du tiroir héritage et de la façon d\'y accéder',
    tip5Title: 'Envisager un Avocat',
    tip5Desc: 'Consultez un avocat en droit successoral pour assurer une bonne organisation des documents',
    tip6Title: 'Sécurité Numérique',
    tip6Desc: 'Utilisez des mots de passe forts et l\'authentification à deux facteurs pour tous les comptes',
    startNow: 'Commencez Votre Tiroir Héritage Aujourd\'hui',
    startDesc: 'Protégez l\'avenir de votre famille en organisant vos documents importants maintenant.',
    downloadGuide: 'Télécharger le Guide d\'Organisation',
    printChecklist: 'Imprimer la Liste de Contrôle',
    categories: 'Catégories de Documents',
    securityTips: 'Conseils de Sécurité et d\'Accès',
  },
};

export default function LegacyDrawer() {
  const [, setLocation] = useLocation();
  const [language, setLanguage] = useState<Language>('en');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const t = translations[language];

  const categories = [
    {
      id: 'estate',
      titleKey: 'estateDocuments',
      descKey: 'estateDesc',
      icon: FileText,
      color: 'bg-blue-100 border-blue-300',
      items: ['Will', 'Trust documents', 'Property deeds', 'Vehicle titles', 'Business documents']
    },
    {
      id: 'financial',
      titleKey: 'financialAccounts',
      descKey: 'financialDesc',
      icon: DollarSign,
      color: 'bg-green-100 border-green-300',
      items: ['Bank account numbers', 'Investment accounts', 'Retirement plans', 'Cryptocurrency wallets', 'Loan documents']
    },
    {
      id: 'insurance',
      titleKey: 'insurancePolicies',
      descKey: 'insuranceDesc',
      icon: Shield,
      color: 'bg-yellow-100 border-yellow-300',
      items: ['Life insurance policies', 'Health insurance', 'Property insurance', 'Disability insurance', 'Policy numbers & contacts']
    },
    {
      id: 'medical',
      titleKey: 'medicalLegal',
      descKey: 'medicalDesc',
      icon: Heart,
      color: 'bg-red-100 border-red-300',
      items: ['Power of attorney', 'Healthcare directives', 'Medical records', 'Medication list', 'Doctor contacts']
    },
    {
      id: 'funeral',
      titleKey: 'funeralWishes',
      descKey: 'funeralDesc',
      icon: Heart,
      color: 'bg-purple-100 border-purple-300',
      items: ['Funeral preferences', 'Burial wishes', 'Memorial instructions', 'Preferred funeral home', 'Cremation preferences']
    },
  ];

  const tips = [
    { titleKey: 'tip1Title', descKey: 'tip1Desc' },
    { titleKey: 'tip2Title', descKey: 'tip2Desc' },
    { titleKey: 'tip3Title', descKey: 'tip3Desc' },
    { titleKey: 'tip4Title', descKey: 'tip4Desc' },
    { titleKey: 'tip5Title', descKey: 'tip5Desc' },
    { titleKey: 'tip6Title', descKey: 'tip6Desc' },
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

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-4 py-12">
        
        {/* Physical vs Digital */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Physical Legacy */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-4 border-green-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                🔒
              </div>
              <h2 className="text-3xl font-bold text-forest-green">
                {t.physicalLegacy}
              </h2>
            </div>
            <p className="text-charcoal-light mb-6">
              {t.physicalDesc}
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-forest-green">Safe or Lockbox</p>
                <p className="text-sm text-charcoal-light">Fireproof, waterproof, secure location</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-forest-green">Organized Folders</p>
                <p className="text-sm text-charcoal-light">Color-coded or labeled by category</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-forest-green">Master List</p>
                <p className="text-sm text-charcoal-light">Index of all documents inside</p>
              </div>
            </div>
          </div>

          {/* Digital Legacy */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-4 border-blue-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                ☁️
              </div>
              <h2 className="text-3xl font-bold text-blue-900">
                {t.digitalLegacy}
              </h2>
            </div>
            <p className="text-charcoal-light mb-6">
              {t.digitalDesc}
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-900">{t.encryptedCloud}</p>
                <p className="text-sm text-charcoal-light">{t.encryptedDesc}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-900">{t.backupDrive}</p>
                <p className="text-sm text-charcoal-light">{t.backupDesc}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-900">{t.clearLabels}</p>
                <p className="text-sm text-charcoal-light">{t.labelsDesc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Categories */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">
            {t.categories}
          </h2>
          <div className="h-1 w-24 bg-amber-orange mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const title = t[category.titleKey as keyof typeof t];
              const desc = t[category.descKey as keyof typeof t];
              const isExpanded = expandedCategory === category.id;
              
              return (
                <div
                  key={category.id}
                  className={`rounded-lg border-2 cursor-pointer transition-all ${category.color} p-6`}
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon size={28} className="text-forest-green flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-bold text-forest-green">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-charcoal-light mb-4">
                    {desc}
                  </p>
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t-2 border-current">
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-charcoal flex items-start gap-2">
                            <span className="text-amber-orange font-bold">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Organization Tips */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-forest-green text-center mb-4">
            {t.securityTips}
          </h2>
          <div className="h-1 w-24 bg-amber-orange mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => {
              const title = t[tip.titleKey as keyof typeof t];
              const desc = t[tip.descKey as keyof typeof t];
              
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-forest-green/10 to-amber-orange/10 rounded-lg p-6 border-l-4 border-amber-orange"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-forest-green mb-2">
                        {title}
                      </h3>
                      <p className="text-charcoal-light text-sm">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-12 px-8 bg-gradient-to-r from-forest-green to-forest-green/90 text-cream rounded-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.startNow}
          </h2>
          <p className="text-cream/90 mb-8 text-lg">
            {t.startDesc}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-amber-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-light transition-colors">
              {t.downloadGuide}
            </button>
            <button className="bg-white text-forest-green px-8 py-3 rounded-lg font-bold hover:bg-cream transition-colors">
              {t.printChecklist}
            </button>
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
