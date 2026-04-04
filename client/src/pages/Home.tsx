import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { ShareButtons } from '@/components/ShareButtons';
import SimpleDonation from '@/components/SimpleDonation';
import GoFundMeQRCode from '@/components/GoFundMeQRCode';
import { DonorRecognition } from '@/components/DonorRecognition';
import BloodFlagHero from '@/components/BloodFlagHero';
import { Heart, ChevronRight, Play, X } from 'lucide-react';
import StickyRadioPlayer from '@/components/StickyRadioPlayer';
import { JukeboxPlayer } from '@/components/JukeboxPlayer';
import { OneClickTDDonate } from '@/components/OneClickTDDonate';

export default function Home() {
  const { i18n } = useTranslation();
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState<number | null>(null);

  const stories = [
    {
      id: 1,
      title: i18n.language === 'fr' ? 'Dimanche Sanglant, Deuxième Partie' : 'Sunday Bloody Sunday, Part Two',
      subtitle: i18n.language === 'fr' ? 'Adolescent autochtone poignardé trois fois — Le système l\'a abandonné pendant cinq ans' : 'Indigenous Teen Stabbed Three Times — System Failed Him For Five Years',
      excerpt: i18n.language === 'fr' ? 'Depuis 2021, notre famille autochtone se bat pour la justice après un traumatisme grave. Un adolescent poignardé trois fois. Impacts majeurs. Santé mentale détruite.' : 'Since 2021, our Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/canada-flag-blood-realistic-kUV87PZuSNfV2tELkshjKK.webp',
      link: '/barrans-story',
      featured: true
    },
    {
      id: 2,
      title: i18n.language === 'fr' ? 'Silence Politique = Complicité' : 'Political Silence = Complicity',
      subtitle: i18n.language === 'fr' ? 'Fédéral, Provincial, Municipal - Tous ont échoué' : 'Federal, Provincial, Municipal - All Failed',
      excerpt: i18n.language === 'fr' ? 'Nous avons escaladé vers les députés fédéraux - même silence. Notre MNA a envoyé un avertissement de cessation et désistement au lieu d\'aide.' : 'We escalated to federal MPs - same silence. Our MNA sent a cease-and-desist warning instead of assistance.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/advocacy-series-3-political-silence_07d0c9ad.png',
      link: '/government-accountability',
      featured: false
    },
  ];

  const handleDonateClick = (amount: number) => {
    setDonationAmount(amount);
    setShowDonationForm(true);
    // Redirect to Stripe payment link with amount
    window.open(`https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01?prefilled_amount=${amount * 100}`, '_blank');
  };

  return (
    <div className="bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* ===== DONATION BANNER AT VERY TOP ===== */}
      <div className="w-full bg-white border-b-4 border-forest-green py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left: Small QR Code */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold text-forest-green mb-3">
                {i18n.language === 'fr' ? '📱 Scannez pour Donner' : '📱 Scan to Donate'}
              </p>
              <div className="w-32 h-32 bg-white border-2 border-forest-green rounded-lg p-2">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://donate.stripe.com/test_9B63cvgJA8cE3M048T3Ru01"
                  alt="Donate QR"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Center: Title & Description */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-green mb-2">
                {i18n.language === 'fr' ? 'Soutenez la Justice' : 'Support Justice'}
              </h2>
              <p className="text-charcoal-light mb-4">
                {i18n.language === 'fr' 
                  ? '100% des dons vont directement à la défense juridique'
                  : '100% of donations go directly to legal advocacy'
                }
              </p>
              <p className="text-sm text-charcoal-light">
                {i18n.language === 'fr'
                  ? 'McGovern Arts Institute Community Healing Centre'
                  : 'McGovern Arts Institute Community Healing Centre'
                }
              </p>
            </div>

            {/* Right: All 5 Donation Buttons - Native Design */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-5 gap-2">
                {[5, 10, 20, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleDonateClick(amount)}
                    className="py-3 px-2 bg-amber-orange text-forest-green rounded font-bold text-sm md:text-base hover:bg-amber-light shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center whitespace-nowrap"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FULL PODCAST PLAYER WITH ALL EPISODES - NATIVE DESIGN ===== */}
      <div id="podcast" className="w-full bg-gradient-to-b from-forest-green to-forest-green/95 py-8 px-4 border-b-4 border-amber-orange">
        <div className="max-w-7xl mx-auto">
          {/* Podcast Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl">🎙️</span>
              <h2 className="text-4xl md:text-5xl font-bold text-cream font-serif">
                {i18n.language === 'fr' ? 'Justice pour Barran' : 'Justice for Barran'}
              </h2>
            </div>
            <div className="h-1 w-24 bg-amber-orange mx-auto mb-4"></div>
            <p className="text-cream text-lg font-semibold">
              {i18n.language === 'fr' ? '6 Épisodes Complets • Anglais & Français' : '6 Full Episodes • English & French'}
            </p>
          </div>
          {/* Full Jukebox Player */}
          <JukeboxPlayer />
        </div>
      </div>

      {/* BLOOD FLAG HERO SECTION */}
      <BloodFlagHero />

      <div className="min-h-screen bg-white text-black pt-4 md:pt-0" style={{ fontFamily: 'Georgia, serif' }}>
        {/* MASTHEAD */}
        <div className="bg-white border-b-4 border-black">
          {/* KNOW YOUR RIGHTS BANNER - FULL WIDTH */}
          <div className="text-center py-2 bg-red-600 text-white font-black tracking-widest text-sm md:text-base w-full">
            {i18n.language === 'fr' ? 'CONNAISSEZ VOS DROITS' : 'KNOW YOUR RIGHTS'}
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
            {/* Featured story section would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
