import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { DonationQRCode } from '@/components/DonationQRCode';
import { DonorRecognition } from '@/components/DonorRecognition';
import { Heart, ChevronRight, Play } from 'lucide-react';

export default function Home() {
  const { t, i18n } = useTranslation();

  const stories = [
    {
      id: 1,
      title: i18n.language === 'fr' ? 'Dimanche Sanglant, Deuxième Partie' : 'Sunday Bloody Sunday, Part Two',
      subtitle: i18n.language === 'fr' ? 'Adolescent autochtone poignardé trois fois — Le système l\'a abandonné pendant cinq ans' : 'Indigenous Teen Stabbed Three Times — System Failed Him For Five Years',
      excerpt: i18n.language === 'fr' ? 'Depuis 2021, notre famille autochtone se bat pour la justice après un traumatisme grave. Un adolescent poignardé trois fois. Impacts majeurs. Santé mentale détruite.' : 'Since 2021, our Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp',
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
    {
      id: 3,
      title: i18n.language === 'fr' ? 'Cinq Ans d\'Échec Institutionnel' : 'Five Years of Institutional Failure',
      subtitle: i18n.language === 'fr' ? 'La DPJ l\'a abandonné. Le bien-être l\'a ignoré.' : 'DPJ Abandoned Him. Welfare Ignored Him.',
      excerpt: i18n.language === 'fr' ? 'La Direction de la Protection de la Jeunesse (DPJ) s\'est impliquée mais s\'est retirée en janvier 2023 - sans suivi adéquat, sans éducation, sans soutien en santé mentale.' : 'The Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/advocacy-series-2-system-failure_5bff13ea.png',
      link: '/systemic-accountability',
      featured: false
    },
    {
      id: 4,
      title: i18n.language === 'fr' ? 'Bill C-92 - Juridiction Autochtone' : 'Bill C-92 - Indigenous Jurisdiction',
      subtitle: i18n.language === 'fr' ? 'Protection de l\'enfance sous contrôle autochtone' : 'Child Protection Under Indigenous Control',
      excerpt: i18n.language === 'fr' ? 'Bill C-92 reconnaît la juridiction autochtone sur la protection de l\'enfance. Les familles autochtones urbaines exigent une justice réelle.' : 'Bill C-92 recognizes Indigenous jurisdiction over child protection. Urban Aboriginal families demand real justice.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/advocacy-series-4-indigenous-rights_2d9a239e.png',
      link: '/legal-resources',
      featured: false
    },
    {
      id: 5,
      title: i18n.language === 'fr' ? 'Responsabilité Corporative' : 'Corporate Accountability',
      subtitle: i18n.language === 'fr' ? 'Qui profite de la réconciliation ?' : 'Who Profits from Reconciliation?',
      excerpt: i18n.language === 'fr' ? 'RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada - tous parrainent la Journée de la chemise orange tout en échouant.' : 'RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada - all sponsor Orange Shirt Day while failing.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/advocacy-series-5-justice-now_04411a49.png',
      link: '/corporate-accountability',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="bg-white border-b-4 border-black py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* BLOODY CANADIAN FLAG */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/flag-blood-since-2021-heavy_96992821.png"
              alt="Canadian Flag - Since 2021"
              className="w-full max-w-2xl h-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-widest text-center mb-2" style={{ letterSpacing: '0.15em' }}>
            {i18n.language === 'fr' ? 'JUSTICE POUR BARRAN' : 'JUSTICE FOR BARRAN'}
          </h1>
          <div className="h-1 bg-black w-32 mx-auto mb-3"></div>
          <p className="text-center text-sm md:text-base tracking-wide mb-2">
            {i18n.language === 'fr' ? 'Un Journal des Droits Autochtones et de la Responsabilité Systémique' : 'A Magazine of Indigenous Rights & Systemic Accountability'}
          </p>
          <p className="text-center text-xs tracking-widest text-gray-600">
            {i18n.language === 'fr' ? 'AVRIL 2, 2026 — VOLUME 1, NUMÉRO 5' : 'APRIL 2, 2026 — VOLUME 1, ISSUE 5'}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN - FEATURED STORY + MAIN STORIES */}
          <div className="md:col-span-2 space-y-6">
            
            {/* FEATURED STORY - LARGE */}
            {stories[0] && (
              <div className="border-4 border-black overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={stories[0].image} 
                  alt={stories[0].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6 bg-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">FEATURED STORY</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    {stories[0].title}
                  </h2>
                  <p className="text-sm font-bold text-gray-700 mb-3">
                    {stories[0].subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    {stories[0].excerpt}
                  </p>
                  <a 
                    href={stories[0].link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:underline border-b-2 border-black pb-1"
                  >
                    {i18n.language === 'fr' ? 'Lire l\'histoire complète' : 'Read Full Story'} <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            )}

            {/* GRID OF SMALLER STORIES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories.slice(1, 5).map((story) => (
                <div key={story.id} className="border-4 border-black overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-auto object-contain bg-gray-100"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg md:text-xl font-bold mb-1 leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-xs font-bold text-gray-600 mb-2">
                      {story.subtitle}
                    </p>
                    <p className="text-xs leading-relaxed mb-3 line-clamp-2">
                      {story.excerpt}
                    </p>
                    <a 
                      href={story.link}
                      className="text-xs font-bold text-black hover:underline flex items-center gap-1"
                    >
                      {i18n.language === 'fr' ? 'Lire' : 'Read'} <ChevronRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="space-y-6">
                       {/* DONATION BOX */}
            <div className="border-4 border-red-600 bg-red-50 p-6">
              <h3 className="text-2xl font-bold mb-3 text-red-600">
                {i18n.language === 'fr' ? 'Soutenir la Justice' : 'Support Justice'}
              </h3>
              <DonationQRCode />
              <p className="text-sm mb-4 leading-relaxed mt-6">
                {i18n.language === 'fr' ? '100% des dons vont directement à la défense juridique, à la défense des droits et aux efforts de changement systémique.' : '100% of donations go directly to legal defense, advocacy, and systemic change efforts.'}
              </p>
              <div className="space-y-3 mb-4">
                <a 
                  href="/donate"
                  className="block w-full bg-red-600 text-white font-bold py-3 px-4 text-center hover:bg-red-700 transition-colors rounded"
                >
                  <Heart size={18} className="inline mr-2" />
                  {i18n.language === 'fr' ? 'Donner Maintenant' : 'Donate Now'}
                </a>
                <a 
                  href="/donate-etransfer"
                  className="block w-full bg-white text-red-600 font-bold py-3 px-4 text-center border-2 border-red-600 hover:bg-red-50 transition-colors rounded"
                >
                  {i18n.language === 'fr' ? 'Virement Électronique' : 'E-Transfer'}
                </a>
              </div>
              <p className="text-xs text-gray-600">
                {i18n.language === 'fr' ? 'Tous les dons vont au compte fiduciaire de la Fondation McGovern. Les fonds NE sont PAS un revenu personnel.' : 'All funds go to McGovern Institute Foundation Trust. NOT personal income.'}
              </p>
            </div>

            {/* PODCAST BOX */}
            <div className="border-4 border-black p-6 bg-gray-50">
              <h3 className="text-lg font-bold mb-3">
                {i18n.language === 'fr' ? 'Écouter' : 'Listen'}
              </h3>
              <p className="text-xs font-bold mb-2">
                {i18n.language === 'fr' ? 'Le Silence des Politiciens' : 'The Silence of Politicians'}
              </p>
              <p className="text-xs text-gray-600 mb-3">
                {i18n.language === 'fr' ? 'Épisode 3 • 14:15' : 'Episode 3 • 14:15'}
              </p>
              <a 
                href="/podcast-hub"
                className="inline-flex items-center gap-2 bg-black text-white font-bold py-2 px-4 text-xs hover:bg-gray-800 transition-colors rounded"
              >
                <Play size={14} />
                {i18n.language === 'fr' ? 'Écouter' : 'Play'}
              </a>
            </div>

            {/* ACTION BOX */}
            <div className="border-4 border-green-600 bg-green-50 p-6">
              <h3 className="text-lg font-bold mb-3 text-green-600">
                {i18n.language === 'fr' ? 'Passer à l\'Action' : 'Take Action'}
              </h3>
              <div className="space-y-2">
                <a 
                  href="/accountability-petition"
                  className="block text-xs font-bold text-green-600 hover:underline"
                >
                  ✓ {i18n.language === 'fr' ? 'Signer la pétition' : 'Sign the Petition'}
                </a>
                <a 
                  href="/government-accountability"
                  className="block text-xs font-bold text-green-600 hover:underline"
                >
                  ✓ {i18n.language === 'fr' ? 'Responsabilité gouvernementale' : 'Government Accountability'}
                </a>
                <a 
                  href="/corporate-accountability"
                  className="block text-xs font-bold text-green-600 hover:underline"
                >
                  ✓ {i18n.language === 'fr' ? 'Responsabilité corporative' : 'Corporate Accountability'}
                </a>
                <a 
                  href="/contact"
                  className="block text-xs font-bold text-green-600 hover:underline"
                >
                  ✓ {i18n.language === 'fr' ? 'Nous contacter' : 'Contact Us'}
                </a>
              </div>
            </div>

            {/* SHARE BOX */}
            <div className="border-4 border-black p-6">
              <h3 className="text-lg font-bold mb-3">
                {i18n.language === 'fr' ? 'Partager' : 'Share'}
              </h3>
              <SocialShareButtons 
                title={i18n.language === 'fr' ? 'Justice pour Barran' : 'Justice for Barran'} 
                text={i18n.language === 'fr' ? 'Cinq ans d\'abandon systémique - Exiger la responsabilité' : 'Five Years of Systemic Abandonment - Demand Accountability'} 
              />
            </div>

          </div>

        </div>
      </div>

      {/* DONOR RECOGNITION */}
      <DonorRecognition />

      {/* FOOTER */}
      <div className="bg-black text-white py-6 px-4 md:px-8 border-t-4 border-black mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold tracking-wider mb-2">
            {i18n.language === 'fr' ? 'JUSTICE POUR BARRAN - PARTIE 3' : 'JUSTICE FOR BARRAN - PART 3'}
          </p>
          <p className="text-xs mb-3">
            {i18n.language === 'fr' ? 'Vérité Actuelle Avant Réconciliation' : 'Current Truth Before Reconciliation'}
          </p>
          <p className="text-xs text-gray-400">
            indigenousadv-ahjdmzis.manus.space
          </p>
        </div>
      </div>
    </div>
  );
}
