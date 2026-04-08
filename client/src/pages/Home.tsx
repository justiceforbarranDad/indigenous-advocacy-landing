import { useState, useEffect } from 'react';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Heart, Globe, Scale, Users, FileText, Mail, Phone } from "lucide-react";

type Language = 'en' | 'fr' | 'ht';

interface Content {
  [key: string]: {
    en: string;
    fr: string;
    ht: string;
  };
}

const content: Content = {
  heroTitle: {
    en: "The McGovern Foundation of Human Rights",
    fr: "La Fondation McGovern pour les Droits de la Personne",
    ht: "Fondation McGovern pou Dwa Moun"
  },
  heroSubtitle: {
    en: "Justice for Indigenous Families. Truth. Accountability. Reconciliation.",
    fr: "Justice pour les Familles Autochtones. Vérité. Responsabilité. Réconciliation.",
    ht: "Jistis pou Fanmi Endijèn. Verite. Responsabilite. Rekonsilasyon."
  },
  mission: {
    en: "The McGovern Foundation of Human Rights is dedicated to exposing systemic failures in government child protection, advocating for Indigenous rights, and ensuring accountability for institutional negligence.",
    fr: "La Fondation McGovern pour les Droits de la Personne se consacre à exposer les défaillances systémiques dans la protection des enfants par le gouvernement, à défendre les droits des Autochtones et à assurer la responsabilité.",
    ht: "Fondation McGovern pou Dwa Moun dedike tèt li pou ekspoze echèk sistematik nan pwoteksyon timoun gouvènman an, defann dwa Endijèn, ak asire responsabilite."
  },
  stats: {
    en: "15 Years of Systemic Failures • 11 Family Members • 2 Autistic Children • 1 Stabbing Victim • $63.8M+ in Damages",
    fr: "15 Ans de Défaillances Systémiques • 11 Membres de la Famille • 2 Enfants Autistes • 1 Victime de Coup de Couteau • 63,8 M$ + en Dommages",
    ht: "15 Ane Echèk Sistematik • 11 Manm Fanmi • 2 Timoun Otis • 1 Viktim Kout Kouto • 63.8 Milyon Dola+ Danje"
  },
  aboutTitle: {
    en: "Our Story",
    fr: "Notre Histoire",
    ht: "Istwa Nou"
  },
  aboutText: {
    en: "The McGovern family's journey began in 2011 when they sought help from Quebec's social welfare system. What followed was 15 years of systemic failures, government negligence, and violations of Indigenous children's rights. On February 14, 2021, Barran was stabbed 5 times—an iPhone Otter Box case saved his life. Today, we fight for justice.",
    fr: "Le parcours de la famille McGovern a commencé en 2011 lorsqu'ils ont demandé de l'aide au système québécois d'aide sociale. Ce qui a suivi a été 15 ans de défaillances systémiques, de négligence gouvernementale et de violations des droits des enfants autochtones. Le 14 février 2021, Barran a reçu 5 coups de couteau—l'étui Otter Box de l'iPhone a sauvé sa vie.",
    ht: "Vwayaj fanmi McGovern te kòmanse an 2011 lè yo mande èd nan sistèm sosyal Kebèk la. Sa ki te swiv se 15 ane echèk sistematik, neglijans gouvènman, ak vyolasyon dwa timoun endijèn. 14 fevriye 2021, Barran resevwa 5 kout kouto—etui Otter Box iPhone a sove lavi l."
  },
  legalTitle: {
    en: "Legal Action",
    fr: "Action Légale",
    ht: "Aksyon Legal"
  },
  legalCase: {
    en: "Application #2026-PROC-00132020 | Quebec Superior Court - Laval District | Filed: April 7, 2026",
    fr: "Demande #2026-PROC-00132020 | Cour supérieure du Québec - District de Laval | Déposée: 7 avril 2026",
    ht: "Aplikasyon #2026-PROC-00132020 | Kou Siperyè Kebèk - Distrè Laval | Depoze: 7 avril 2026"
  },
  supportTitle: {
    en: "Support Our Mission",
    fr: "Soutenez Notre Mission",
    ht: "Sipòte Misyon Nou"
  },
  supportText: {
    en: "Every donation helps us continue legal proceedings, provide family support, and advocate for systemic change.",
    fr: "Chaque don nous aide à continuer les procédures judiciaires, à fournir un soutien familial et à défendre le changement systémique.",
    ht: "Chak dola ede nou kontinye pwosedi legal, bay sèvis sipò fanmi, ak defann chanjman sistematik."
  },
  donationMethods: {
    en: "Donation Methods",
    fr: "Méthodes de Donation",
    ht: "Metòd Donasyon"
  },
  tdBank: {
    en: "TD Bank Direct Transfer",
    fr: "Transfert Direct TD Bank",
    ht: "Transfè Dirèk TD Bank"
  },
  eTransfer: {
    en: "e-Transfer",
    fr: "Virement Électronique",
    ht: "Transfè Elektwonik"
  },
  stripe: {
    en: "Credit Card (Stripe)",
    fr: "Carte de Crédit (Stripe)",
    ht: "Kat Kredi (Stripe)"
  },
  applePay: {
    en: "Apple Pay",
    fr: "Apple Pay",
    ht: "Apple Pay"
  },
  contactTitle: {
    en: "Contact Us",
    fr: "Nous Contacter",
    ht: "Kontakte Nou"
  },
  email: {
    en: "justiceforbarran@gmail.com",
    fr: "justiceforbarran@gmail.com",
    ht: "justiceforbarran@gmail.com"
  },
  phone: {
    en: "438-926-3636",
    fr: "438-926-3636",
    ht: "438-926-3636"
  },
  languageSelect: {
    en: "Select Language",
    fr: "Sélectionner la Langue",
    ht: "Chwazi Lang"
  }
};

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [language, setLanguage] = useState<Language>('en');
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const t = (key: string): string => {
    return content[key]?.[language] || content[key]?.en || key;
  };

  const donationAmounts = [5, 10, 20, 50, 100];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cream to-white text-charcoal">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
            language === 'en'
              ? 'bg-amber-orange text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
            language === 'fr'
              ? 'bg-amber-orange text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Français
        </button>
        <button
          onClick={() => setLanguage('ht')}
          className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
            language === 'ht'
              ? 'bg-amber-orange text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Kreyòl
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-forest-green">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-orange to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-light mb-8 font-light">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            {t('stats')}
          </p>
          <Button
            onClick={() => setShowDonationModal(true)}
            className="bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            <Heart className="mr-2 inline" size={20} />
            {t('supportTitle')}
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-forest-green mb-8 text-center font-serif">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-charcoal leading-relaxed text-center mb-12">
            {t('aboutText')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-cream border-2 border-amber-orange">
              <Scale className="text-amber-orange mb-4" size={32} />
              <h3 className="text-xl font-bold text-forest-green mb-3">{t('legalTitle')}</h3>
              <p className="text-charcoal">{t('legalCase')}</p>
            </Card>

            <Card className="p-6 bg-cream border-2 border-forest-green">
              <Users className="text-forest-green mb-4" size={32} />
              <h3 className="text-xl font-bold text-forest-green mb-3">Our Family</h3>
              <p className="text-charcoal">11 family members, 2 autistic children, 1 stabbing survivor, countless stories of resilience.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-forest-green mb-8 text-center font-serif">
            {t('supportTitle')}
          </h2>
          <p className="text-lg text-charcoal text-center mb-12">
            {t('supportText')}
          </p>

          {/* Donation Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* TD Bank Direct */}
            <Card className="p-6 border-2 border-amber-orange hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-amber-orange mb-4">{t('tdBank')}</h3>
              <p className="text-charcoal mb-4">Direct bank transfer - Secure and instant</p>
              <Button className="w-full bg-amber-orange hover:bg-amber-light text-white">
                {t('tdBank')}
              </Button>
            </Card>

            {/* e-Transfer */}
            <Card className="p-6 border-2 border-forest-green hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-forest-green mb-4">{t('eTransfer')}</h3>
              <p className="text-charcoal mb-4">Send to: justiceforbarran@gmail.com</p>
              <Button className="w-full bg-forest-green hover:bg-forest-green/80 text-white">
                {t('eTransfer')}
              </Button>
            </Card>

            {/* Stripe */}
            <Card className="p-6 border-2 border-amber-orange hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-amber-orange mb-4">{t('stripe')}</h3>
              <p className="text-charcoal mb-4">International credit cards accepted</p>
              <Button className="w-full bg-amber-orange hover:bg-amber-light text-white">
                {t('stripe')}
              </Button>
            </Card>

            {/* Apple Pay */}
            <Card className="p-6 border-2 border-forest-green hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-forest-green mb-4">{t('applePay')}</h3>
              <p className="text-charcoal mb-4">Quick and secure payment</p>
              <Button className="w-full bg-forest-green hover:bg-forest-green/80 text-white">
                {t('applePay')}
              </Button>
            </Card>
          </div>

          {/* Preset Amounts with QR Codes */}
          <div className="bg-cream p-8 rounded-lg border-2 border-amber-orange">
            <h3 className="text-2xl font-bold text-forest-green mb-6 text-center">Quick Donation Amounts</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-4 rounded-lg font-bold text-lg transition-all ${
                    selectedAmount === amount
                      ? 'bg-amber-orange text-white scale-105'
                      : 'bg-white border-2 border-amber-orange text-amber-orange hover:bg-amber-orange hover:text-white'
                  }`}
                >
                  ${amount} CAD
                </button>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-center text-charcoal mb-4">
                {selectedAmount
                  ? `Scan QR code to donate $${selectedAmount} CAD via TD Bank`
                  : 'Select an amount to generate QR code'}
              </p>
              {selectedAmount && (
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg border-2 border-forest-green">
                    <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded">
                      <span className="text-gray-500">QR Code: ${selectedAmount}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 font-serif">{t('contactTitle')}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center justify-center gap-3">
              <Mail size={24} />
              <a href={`mailto:${t('email')}`} className="text-lg hover:text-amber-light transition-colors">
                {t('email')}
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone size={24} />
              <a href={`tel:${t('phone')}`} className="text-lg hover:text-amber-light transition-colors">
                {t('phone')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8 px-4 text-center">
        <p className="mb-2">© 2026 The McGovern Foundation of Human Rights</p>
        <p className="text-sm text-gray-400">
          Justice for Indigenous Families | Truth | Accountability | Reconciliation
        </p>
      </footer>
    </div>
  );
}
