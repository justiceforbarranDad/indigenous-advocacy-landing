import { useState } from 'react';
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Heart, Radio, Music } from "lucide-react";

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
    en: "Justice For Barran",
    fr: "Justice Pour Barran",
    ht: "Jistis Pou Barran"
  },
  heroSubtitle: {
    en: "Advocating for Indigenous Rights and Justice",
    fr: "Défendre les Droits des Autochtones et la Justice",
    ht: "Defann Dwa Endijèn ak Jistis"
  },
  donateButton: {
    en: "Donate Now",
    fr: "Donner Maintenant",
    ht: "Bay Kounye a"
  },
  mission: {
    en: "The McGovern Foundation of Human Rights is dedicated to advocating for Indigenous rights, ensuring accountability, and building a stronger future for Indigenous families.",
    fr: "La Fondation McGovern pour les Droits de la Personne se consacre à défendre les droits des Autochtones, à assurer la responsabilité et à construire un avenir plus solide pour les familles autochtones.",
    ht: "Fondation McGovern pou Dwa Moun dedike tèt li pou defann dwa Endijèn, asire responsabilite, ak bati yon avni pi fò pou fanmi Endijèn."
  },
  supportTitle: {
    en: "Support Our Mission",
    fr: "Soutenez Notre Mission",
    ht: "Sipòte Misyon Nou"
  },
  supportText: {
    en: "Your donation helps us continue our advocacy work, provide support to Indigenous families, and fight for justice and accountability.",
    fr: "Votre don nous aide à poursuivre notre travail de défense, à soutenir les familles autochtones et à lutter pour la justice et la responsabilité.",
    ht: "Donasyon ou ede nou kontinye travay defans nou, sipòte fanmi Endijèn, ak lite pou jistis ak responsabilite."
  },
  donationAmounts: {
    en: "Select Donation Amount",
    fr: "Sélectionner le Montant du Don",
    ht: "Chwazi Montan Donasyon"
  },
  tdBank: {
    en: "TD Bank Direct Transfer",
    fr: "Transfert Direct TD Bank",
    ht: "Transfè Dirèk TD Bank"
  },
  podcast: {
    en: "Listen to Our Podcast",
    fr: "Écoutez Notre Podcast",
    ht: "Koute Podcast Nou"
  },
  radio: {
    en: "Radio Station",
    fr: "Station de Radio",
    ht: "Estasyon Radyo"
  },
  languageSelect: {
    en: "Select Language",
    fr: "Sélectionner la Langue",
    ht: "Chwazi Lang"
  },
  footerText: {
    en: "The McGovern Foundation of Human Rights",
    fr: "La Fondation McGovern pour les Droits de la Personne",
    ht: "Fondation McGovern pou Dwa Moun"
  },
  footerSubtext: {
    en: "Advocating for Indigenous Rights and Justice",
    fr: "Défendre les Droits des Autochtones et la Justice",
    ht: "Defann Dwa Endijèn ak Jistis"
  }
};

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [language, setLanguage] = useState<Language>('en');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const t = (key: string): string => {
    return content[key]?.[language] || content[key]?.en || key;
  };

  const donationAmounts = [5, 10, 20, 50, 100];

  const handleDonate = (amount: number) => {
    setSelectedAmount(amount);
    // Direct TD e-Transfer link - instant payment
    // Opens TD e-Transfer with phone number pre-filled
    window.location.href = `https://www.td.com/ca/en/personal-banking/direct-banking/ways-to-bank/etransfer/`;
  };

  return (
    <div className="w-full min-h-screen bg-black text-yellow-300">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className="px-3 py-1 rounded text-sm font-semibold bg-yellow-300 text-black hover:bg-yellow-400 transition-colors border-0"
        >
          {language === 'en' && 'Canadian English'}
          {language === 'fr' && 'Anglais Canadien'}
          {language === 'ht' && 'Anglè Kanadyen'}
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className="px-3 py-1 rounded text-sm font-semibold bg-yellow-300 text-black hover:bg-yellow-400 transition-colors border-0"
        >
          {language === 'en' && 'Canadian French'}
          {language === 'fr' && 'Français Canadien'}
          {language === 'ht' && 'Franse Kanadyen'}
        </button>
        <button
          onClick={() => setLanguage('ht')}
          className="px-3 py-1 rounded text-sm font-semibold bg-yellow-300 text-black hover:bg-yellow-400 transition-colors border-0"
        >
          {language === 'en' && 'Haitian Creole'}
          {language === 'fr' && 'Créole Haïtien'}
          {language === 'ht' && 'Kreyòl Ayisyen'}
        </button>
      </div>

      {/* Hero Section with Parliament Buildings */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Parliament Buildings Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Quebec Parliament Building */}
            <rect x="100" y="200" width="300" height="300" fill="#333333" opacity="0.7"/>
            <polygon points="100,200 250,50 400,200" fill="#555555" opacity="0.7"/>
            
            {/* Ottawa Parliament Building */}
            <rect x="800" y="200" width="300" height="300" fill="#333333" opacity="0.7"/>
            <polygon points="800,200 950,50 1100,200" fill="#555555" opacity="0.7"/>
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 mb-6 leading-tight font-serif">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-200 mb-8 font-light">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg text-yellow-100 mb-12 max-w-2xl mx-auto">
            {t('mission')}
          </p>
          <Button
            onClick={() => document.getElementById('donation-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            <Heart className="mr-2 inline" size={20} />
            {t('supportTitle')}
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-yellow-300" />
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation-section" className="py-20 px-4 bg-black border-t-4 border-yellow-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center font-serif">
            {t('supportTitle')}
          </h2>
          <p className="text-lg text-yellow-200 text-center mb-12">
            {t('supportText')}
          </p>

          {/* Donation Rectangle Box */}
          <div className="bg-black border-4 border-yellow-300 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">{t('donationAmounts')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleDonate(amount)}
                  className={`p-4 rounded-lg font-bold text-lg transition-all border-2 ${
                    selectedAmount === amount
                      ? 'bg-yellow-300 text-black border-yellow-300 scale-105'
                      : 'bg-black border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black'
                  }`}
                >
                  ${amount} CAD
                </button>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-yellow-200 mb-4">{t('tdBank')}</p>
              {selectedAmount && (
                <div className="bg-yellow-300 text-black p-4 rounded-lg inline-block">
                  <p className="font-bold">Selected Amount: ${selectedAmount} CAD</p>
                  <p className="text-sm mt-2">Complete transfer via TD Bank Direct Transfer</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 px-4 bg-black border-t-4 border-yellow-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center font-serif flex items-center justify-center gap-3">
            <Music size={40} />
            {t('podcast')}
          </h2>
          <Card className="bg-black border-4 border-yellow-300 p-8">
            <p className="text-yellow-200 text-center mb-6">
              {language === 'en' && 'Listen to our full podcast about Indigenous advocacy and justice.'}
              {language === 'fr' && 'Écoutez notre podcast complet sur l\'advocacy autochtone et la justice.'}
              {language === 'ht' && 'Koute podcast konple nou sou advokasi Endijèn ak jistis.'}
            </p>
            {/* Podcast player placeholder */}
            <div className="bg-gray-800 rounded-lg p-6 text-center text-yellow-300">
              <p className="mb-4">🎙️ Podcast Player</p>
              <audio controls className="w-full">
                <source src="" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </Card>
        </div>
      </section>

      {/* Radio Station Section */}
      <section className="py-20 px-4 bg-black border-t-4 border-yellow-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center font-serif flex items-center justify-center gap-3">
            <Radio size={40} />
            {t('radio')}
          </h2>
          <Card className="bg-black border-4 border-yellow-300 p-8">
            <p className="text-yellow-200 text-center mb-6">
              {language === 'en' && 'Tune in to our live radio station for Indigenous advocacy and updates.'}
              {language === 'fr' && 'Écoutez notre station de radio en direct pour l\'advocacy autochtone et les mises à jour.'}
              {language === 'ht' && 'Koute estasyon radyo dirèk nou pou advokasi Endijèn ak nouvel.'}
            </p>
            {/* Radio player placeholder */}
            <div className="bg-gray-800 rounded-lg p-6 text-center text-yellow-300">
              <p className="mb-4">📻 Radio Station</p>
              <Button className="bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-2 rounded-lg font-semibold">
                {language === 'en' && 'Tune In Live'}
                {language === 'fr' && 'Écouter en Direct'}
                {language === 'ht' && 'Koute Dirèk'}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-yellow-300 py-8 px-4 text-center border-t-4 border-yellow-300">
        <p className="mb-2">© 2026 {t('footerText')}</p>
        <p className="text-sm text-yellow-200">
          {t('footerSubtext')}
        </p>
        <p className="text-xs text-yellow-100 mt-4">
          Justice For Barran - Indigenous Rights Advocacy Platform
        </p>
      </footer>
    </div>
  );
}
