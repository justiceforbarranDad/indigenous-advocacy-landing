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
import { useState } from 'react';
import { StripeOneClickDonate } from '@/components/StripeOneClickDonate';

export default function Home() {
  const { i18n } = useTranslation();
  const [selectedRight, setSelectedRight] = useState<string | null>(null);

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

  const rightsData = {
    charter: {
      en: {
        title: 'Charter of Rights (s.2, s.15, s.35)',
        description: 'The Canadian Charter of Rights and Freedoms protects fundamental freedoms and equality rights. Section 2 guarantees freedom of expression and association. Section 15 protects equality before and under the law. Section 35 recognizes Aboriginal and treaty rights of Indigenous peoples.'
      },
      fr: {
        title: 'Charte des droits (s.2, s.15, s.35)',
        description: 'La Charte canadienne des droits et libertés protège les libertés fondamentales et les droits à l\'égalité. L\'article 2 garantit la liberté d\'expression et d\'association. L\'article 15 protège l\'égalité devant la loi. L\'article 35 reconnaît les droits autochtones et les droits issus de traités des peuples autochtones.'
      }
    },
    billC92: {
      en: {
        title: 'Bill C-92 (Indigenous Child Welfare)',
        description: 'An Act respecting First Nations, Inuit and Métis children, youth and families. Bill C-92 recognizes the jurisdiction of Indigenous nations over child protection and family services. It prioritizes keeping Indigenous children connected to their communities, culture, and families while ensuring their safety and well-being.'
      },
      fr: {
        title: 'Loi C-92 (Protection de l\'enfance autochtone)',
        description: 'Loi concernant les enfants, les jeunes et les familles des Premières Nations, des Inuits et des Métis. La Loi C-92 reconnaît la juridiction des nations autochtones sur la protection de l\'enfance et les services à la famille. Elle privilégie le maintien des enfants autochtones dans leurs communautés, leur culture et leurs familles.'
      }
    },
    jordan: {
      en: {
        title: 'Jordan\'s Principle',
        description: 'A child-first principle named after Jordan River Anderson, a First Nations child who died waiting for government agencies to determine who should pay for his home care. The principle states that when jurisdictional disputes arise over services for Indigenous children, the government of first contact must provide the service and sort out payment later. It ensures no child is denied services due to jurisdictional disputes.'
      },
      fr: {
        title: 'Principe de Jordan',
        description: 'Un principe mettant l\'enfant en priorité, nommé d\'après Jordan River Anderson, un enfant des Premières Nations décédé en attendant que les organismes gouvernementaux déterminent qui devrait payer ses soins à domicile. Le principe stipule que lorsque des différends de compétence surviennent concernant les services aux enfants autochtones, le gouvernement du premier contact doit fournir le service et régler le paiement plus tard.'
      }
    },
    undrip: {
      en: {
        title: 'UNDRIP (Indigenous Peoples)',
        description: 'The United Nations Declaration on the Rights of Indigenous Peoples is an international instrument that establishes a universal framework of minimum standards for the rights of Indigenous peoples. It covers rights to self-determination, lands, territories, resources, culture, identity, and free, prior and informed consent for projects affecting Indigenous communities.'
      },
      fr: {
        title: 'UNDRIP (Peuples autochtones)',
        description: 'La Déclaration des Nations Unies sur les droits des peuples autochtones est un instrument international qui établit un cadre universel de normes minimales pour les droits des peuples autochtones. Elle couvre les droits à l\'autodétermination, aux terres, aux territoires, aux ressources, à la culture, à l\'identité et au consentement préalable, donné librement et en connaissance de cause.'
      }
    },
    uncrc: {
      en: {
        title: 'UNCRC (Rights of the Child)',
        description: 'The United Nations Convention on the Rights of the Child is the most widely ratified human rights treaty. It establishes that all children have the right to survival, development, protection, and participation. It requires governments to ensure children\'s access to education, healthcare, protection from violence and exploitation, and the right to be heard in decisions affecting them.'
      },
      fr: {
        title: 'UNCRC (Droits de l\'enfant)',
        description: 'La Convention des Nations Unies relative aux droits de l\'enfant est le traité relatif aux droits de l\'homme le plus largement ratifié. Elle établit que tous les enfants ont le droit à la survie, au développement, à la protection et à la participation. Elle exige que les gouvernements assurent l\'accès des enfants à l\'éducation, aux soins de santé, à la protection contre la violence et l\'exploitation.'
      }
    },
    udhr: {
      en: {
        title: 'UDHR (Universal Human Rights)',
        description: 'The Universal Declaration of Human Rights is a foundational international document adopted by the United Nations in 1948. It proclaims the inalienable rights of all members of the human family including rights to life, liberty, security, freedom from slavery, torture, and discrimination, and rights to work, education, and social security.'
      },
      fr: {
        title: 'UDHR (Droits humains universels)',
        description: 'La Déclaration universelle des droits de l\'homme est un document international fondamental adopté par les Nations Unies en 1948. Elle proclame les droits inaliénables de tous les membres de la famille humaine, y compris les droits à la vie, à la liberté, à la sécurité, à la liberté de l\'esclavage, de la torture et de la discrimination.'
      }
    }
  };

  const getRightContent = (key: string) => {
    const lang = i18n.language === 'fr' ? 'fr' : 'en';
    return (rightsData as any)[key]?.[lang];
  };

  return (
    <div className="bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* JUKEBOX PLAYER */}
      <JukeboxPlayer />

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
          {/* FLAG WITH CONSTITUTION & UN RIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 items-center">
            {/* LEFT - CANADA CONSTITUTION */}
            <div className="bg-red-50 border-2 border-red-600 p-2 md:p-4 rounded text-xs md:text-sm">
              <h3 className="font-bold text-red-900 mb-2 text-center">
                {i18n.language === 'fr' ? 'CONSTITUTION CANADIENNE' : 'CANADIAN CONSTITUTION'}
              </h3>
              <ul className="space-y-1 text-gray-800">
                <li 
                  className="font-semibold cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => setSelectedRight('charter')}
                >
                  • {i18n.language === 'fr' ? 'Charte des droits (s.2, s.15, s.35)' : 'Charter of Rights (s.2, s.15, s.35)'}
                </li>
                <li 
                  className="font-semibold cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => setSelectedRight('billC92')}
                >
                  • {i18n.language === 'fr' ? 'Loi C-92 (Protection de l\'enfance autochtone)' : 'Bill C-92 (Indigenous Child Welfare)'}
                </li>
                <li 
                  className="font-semibold cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => setSelectedRight('jordan')}
                >
                  • {i18n.language === 'fr' ? 'Principe de Jordan' : 'Jordan\'s Principle'}
                </li>
              </ul>
            </div>

            {/* CENTER - BLOODY CANADIAN FLAG */}
            <div className="flex justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/flag-blood-since-2021-heavy_96992821.png"
                alt="Canadian Flag - Since 2021"
                className="w-full max-w-xs h-auto"
              />
            </div>

            {/* RIGHT - UN RIGHTS */}
            <div className="bg-blue-50 border-2 border-blue-600 p-2 md:p-4 rounded text-xs md:text-sm">
              <h3 className="font-bold text-blue-900 mb-2 text-center">
                {i18n.language === 'fr' ? 'DROITS DE L\'ONU' : 'UN RIGHTS'}
              </h3>
              <ul className="space-y-1 text-gray-800">
                <li 
                  className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => setSelectedRight('undrip')}
                >
                  • {i18n.language === 'fr' ? 'UNDRIP (Peuples autochtones)' : 'UNDRIP (Indigenous Peoples)'}
                </li>
                <li 
                  className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => setSelectedRight('uncrc')}
                >
                  • {i18n.language === 'fr' ? 'UNCRC (Droits de l\'enfant)' : 'UNCRC (Rights of the Child)'}
                </li>
                <li 
                  className="font-semibold cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => setSelectedRight('udhr')}
                >
                  • {i18n.language === 'fr' ? 'UDHR (Droits humains universels)' : 'UDHR (Universal Human Rights)'}
                </li>
              </ul>
            </div>
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

      {/* TESTIMONY VIDEO - APTN DELETED THIS */}
      <div className="bg-red-900 text-white py-12 border-y-4 border-red-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-red-700 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-bold tracking-widest">
                {i18n.language === 'fr' ? '⚠️ VIDÉO SUPPRIMÉE PAR APTN' : '⚠️ VIDEO DELETED BY APTN'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-widest mb-4">
              {i18n.language === 'fr' ? 'LE TÉMOIGNAGE QUE LES MÉDIAS ONT CENSURÉ' : 'THE TESTIMONY MAINSTREAM MEDIA CENSORED'}
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto mb-6">
              {i18n.language === 'fr' ? 'APTN a supprimé cette vidéo. Pourquoi ? Parce qu\'elle expose la vérité : comment un parent autochtone a été menacé de poursuites criminelles simplement pour demander de l\'aide pour son fils poignardé.' : 'APTN deleted this video. Why? Because it exposes the truth: how an Indigenous parent was threatened with criminal prosecution simply for asking for help for his stabbed son.'}
            </p>
          </div>
          <div className="relative w-full bg-black rounded-lg overflow-hidden border-4 border-white" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/qMfy58mOUgQ"
              title="February 22, 2026 - Testimony Deleted by APTN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 bg-red-800 p-4 rounded border-l-4 border-white">
            <p className="text-sm md:text-base mb-4">
              {i18n.language === 'fr' ? 'Cette vidéo montre un parent autochtone expliquant comment : (1) son fils a été poignardé 3 fois à 14 ans, (2) le système l\'a abandonné, (3) quand il a demandé de l\'aide, on lui a envoyé un avertissement de cessation et désistement menaçant des poursuites criminelles pour harcèlement.' : 'This video shows an Indigenous parent explaining how: (1) his son was stabbed 3 times at age 14, (2) the system abandoned him, (3) when he asked for help, he received a cease-and-desist warning threatening criminal prosecution for harassment.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@justiceforBarran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-900 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors"
              >
                {i18n.language === 'fr' ? '▶️ Regarder toutes les vidéos' : '▶️ Watch All Videos'}
              </a>
              <a
                href="https://www.youtube.com/@justiceforBarran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-900 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors"
              >
                {i18n.language === 'fr' ? '🔔 S\'abonner' : '🔔 Subscribe'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOLLOW & SUBSCRIBE SECTION */}
      <div className="bg-blue-900 text-white py-12 border-y-4 border-blue-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest mb-4">
            {i18n.language === 'fr' ? 'SUIVEZ LA JUSTICE POUR BARRAN' : 'FOLLOW JUSTICE FOR BARRAN'}
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            {i18n.language === 'fr' ? 'Abonnez-vous à notre chaîne YouTube pour les dernières mises à jour, témoignages et appels à l\'action' : 'Subscribe to our YouTube channel for the latest updates, testimonies, and calls to action'}
          </p>
          <a
            href="https://www.youtube.com/@justiceforBarran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
          >
            <span className="text-2xl">▶️</span>
            {i18n.language === 'fr' ? 'Visiter la chaîne YouTube' : 'Visit YouTube Channel'}
          </a>
        </div>
      </div>

      {/* KING CHARLES UNCEDED TERRITORY SECTION */}
      <div className="bg-black text-white py-12 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-widest mb-2">
              {i18n.language === 'fr' ? 'LE ROI CHARLES RECONNAÎT LE TERRITOIRE NON CÉDÉ' : 'KING CHARLES ACKNOWLEDGES UNCEDED TERRITORY'}
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              {i18n.language === 'fr' ? 'Même la Couronne reconnaît les terres non cédées — mais les systèmes d\'oppression persistent. Les paroles creuses sans action.' : 'Even the Crown acknowledges unceded lands — yet systemic oppression persists. Empty words without action.'}
            </p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-4 border-white"
              src="https://www.youtube.com/embed/Lnuj9yO7phY"
              title="King Charles Acknowledges Unceded Territory"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* KING CHARLES THRONE SPEECH - VIRAL SECTION */}
      <div className="bg-red-700 text-white py-12 border-y-4 border-red-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-widest mb-2">
              {i18n.language === 'fr' ? 'MAI 27, 2025: DISCOURS DU TRÔNE PENDANT QUE LES PEUPLES AUTOCHTONES SOUFFRENT' : 'MAY 27, 2025: THRONE SPEECH WHILE INDIGENOUS PEOPLES SUFFER'}
            </h2>
            <p className="text-sm md:text-base text-red-100 max-w-3xl mx-auto leading-relaxed">
              {i18n.language === 'fr' ? 'Le roi Charles III prononce un discours majestueux sur la souveraineté canadienne et les alliances internationales. Mais où est la justice pour les enfants autochtones? Où sont les promesses tenues? Les paroles creuses du trône résonnent tandis que nos familles crient au secours.' : 'King Charles III delivers a majestic speech about Canadian sovereignty and international alliances. But where is justice for Indigenous children? Where are the kept promises? Empty throne words echo while our families cry for help.'}
            </p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-4 border-white"
              src="https://www.youtube.com/embed/XpXBUhpHE9Q"
              title="King Charles III Throne Speech May 27 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6 bg-red-600 p-4 rounded-b-lg">
            <ShareButtons 
              videoTitle="May 27, 2025: Throne Speech While Indigenous Peoples Suffer - Justice for Barran"
              videoUrl="/"
              hashtags={['JusticeForBarran', 'EveryChildMatters', 'TruthAndReconciliation', 'IndigenousRights', 'FraserMustResign']}
            />
          </div>
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
            {/* GOFUNDME QR CODE */}
            <div className="mb-6">
              <GoFundMeQRCode />
            </div>

            {/* DONATION BOX */}
            <div className="border-4 border-red-600 bg-red-50 p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-red-600">
                {i18n.language === 'fr' ? 'Soutenir la Justice' : 'Support Justice'}
              </h3>
              <div className="w-full max-w-md mx-auto">
                <StripeOneClickDonate />
              </div>
              <p className="text-xs md:text-sm mb-4 leading-relaxed mt-4 md:mt-6">
                {i18n.language === 'fr' ? '100% des dons vont directement à la défense juridique, à la défense des droits et aux efforts de changement systémique.' : '100% of donations go directly to legal defense, advocacy, and systemic change efforts.'}
              </p>
              <div className="space-y-3 mb-4">
                <a 
                  href="/donate"
                  className="block w-full bg-red-600 text-white font-bold py-4 md:py-3 px-4 text-center text-base md:text-sm hover:bg-red-700 transition-colors rounded active:bg-red-800"
                >
                  <Heart size={20} className="inline mr-2" />
                  {i18n.language === 'fr' ? 'Donner Maintenant' : 'Donate Now'}
                </a>
              </div>
            </div>

            {/* PODCAST SECTION */}
            <div className="border-4 border-black p-6">
              <h3 className="text-xl font-bold mb-4">
                {i18n.language === 'fr' ? 'Écouter' : 'Listen'}
              </h3>
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center gap-3 mb-3">
                  <Play size={24} className="text-red-600" />
                  <div>
                    <p className="font-bold text-sm">{i18n.language === 'fr' ? 'Justice pour Barran' : 'Justice for Barran'}</p>
                    <p className="text-xs text-gray-600">{i18n.language === 'fr' ? 'Podcast' : 'Podcast'}</p>
                  </div>
                </div>
                <a 
                  href="#"
                  className="text-xs font-bold text-red-600 hover:underline"
                >
                  {i18n.language === 'fr' ? 'Écouter maintenant →' : 'Listen now →'}
                </a>
              </div>
            </div>

            {/* ACTION ITEMS */}
            <div className="border-4 border-green-600 bg-green-50 p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold mb-3 text-green-700">
                {i18n.language === 'fr' ? 'Agir Maintenant' : 'Take Action'}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <a href="#" className="font-bold text-green-700 hover:underline">
                    {i18n.language === 'fr' ? '→ Signer la pétition' : '→ Sign Petition'}
                  </a>
                </li>
                <li>
                  <a href="#" className="font-bold text-green-700 hover:underline">
                    {i18n.language === 'fr' ? '→ Demander des comptes' : '→ Demand Accountability'}
                  </a>
                </li>
                <li>
                  <a href="#" className="font-bold text-green-700 hover:underline">
                    {i18n.language === 'fr' ? '→ Contacter les élus' : '→ Contact Officials'}
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL SHARING */}
            <div className="border-4 border-black p-4">
              <SocialShareButtons 
                title={i18n.language === 'fr' ? 'Justice pour Barran' : 'Justice for Barran'}
                text={i18n.language === 'fr' ? 'Lisez l\'histoire complète de Barran et soutenez la justice pour les familles autochtones' : 'Read Barran\'s full story and support justice for Indigenous families'}
                variant="vertical"
                showLabel={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* DONOR RECOGNITION */}
      <div className="bg-gray-50 border-t-4 border-black py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <DonorRecognition />
        </div>
      </div>

      {/* RIGHTS MODAL */}
      {selectedRight && getRightContent(selectedRight) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {getRightContent(selectedRight)?.title}
              </h2>
              <button
                onClick={() => setSelectedRight(null)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {getRightContent(selectedRight)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
