import { AlertCircle, FileText, Globe, Play, Heart, Signature, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SurveyBox } from '@/components/SurveyBox';
import { useAuth } from '@/_core/hooks/useAuth';
import { LatestUpdatesTicker } from '@/components/LatestUpdatesTicker';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { DonationDashboard } from '@/components/DonationDashboard';
import { DomainSharingWidget } from '@/components/DomainSharingWidget';
import { TransparencyDashboard } from '@/components/TransparencyDashboard';

const BG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp";
const ORANGE_SHIRT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/orange-shirt-sunset-forest.jpg";
const FLAG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/flag-blood-since-2021-4CjA8xaagFPqoyptJsUJyV.webp";

export default function Home() {
  const { t, i18n } = useTranslation();
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [expandedLetter, setExpandedLetter] = useState('en');

  // If theme is switchable in App.tsx, we can implement theme toggling like this:
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* HERO SECTION - FLAG WITH BLOOD & MESSAGE */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${FLAG_IMAGE}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {i18n.language === 'fr' ? 'Dimanche Sanglant' : 'Sunday Bloody Sunday'}
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-300 mb-6 font-serif italic">
            {i18n.language === 'fr' ? 'Deuxième Partie' : 'Part Two'}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {i18n.language === 'fr' ? t('home.heroSubtitle') : 'Indigenous Justice Advocacy — Systemic Accountability — 15 Years of Documented Failure'}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold">{i18n.language === 'fr' ? t('home.indigenousRights') : 'Indigenous Rights'}</span>
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">{i18n.language === 'fr' ? t('home.justiceForBarran') : 'Justice for Barran'}</span>
            <span className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold">{i18n.language === 'fr' ? t('home.accountability') : 'Accountability'}</span>
          </div>
          <a
            href="#story"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {i18n.language === 'fr' ? t('home.readOurStory') : 'Read Our Story →'}
          </a>
        </div>
      </div>

      {/* SINGLE PAGE NEWSPAPER LAYOUT */}
      <div className="max-w-4xl mx-auto bg-white">
        
        {/* NEWSPAPER MASTHEAD */}
        <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
          {/* Publication Name */}
          <div className="text-center mb-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-widest" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
              {i18n.language === 'fr' ? t('home.newspaperTitle') : 'JUSTICE FOR BARRAN'}
            </h1>
            <div className="h-1 bg-white my-3 w-32 mx-auto"></div>
          </div>
          
          {/* Tagline and Date */}
          <div className="text-center">
            <p className="text-base md:text-lg tracking-wide mb-2">
              {i18n.language === 'fr' ? t('home.newspaperSubtitle') : 'A Newspaper of Indigenous Rights & Systemic Accountability'}
            </p>
            <p className="text-xs md:text-sm tracking-widest">
              {i18n.language === 'fr' ? t('home.publicationDate') : 'MARCH 31, 2026 — VOLUME 1, ISSUE 4'}
            </p>
          </div>
        </div>

        {/* LATEST UPDATES TICKER */}
        <LatestUpdatesTicker />

        {/* TRANSPARENCY & DISABILITY BENEFITS PROTECTION BANNER */}
        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mx-6 mt-4">
          <div className="flex gap-3">
            <div className="text-amber-600 font-bold text-lg">🛡️</div>
            <div>
              <p className="font-bold text-sm mb-1">{i18n.language === 'fr' ? t('home.transparentBannerTitle') : '100% TRANSPARENT - YOUR BENEFITS ARE PROTECTED'}</p>
              <p className="text-xs leading-relaxed">
                {i18n.language === 'fr' ? t('home.transparentBannerText') : 'All donations go directly to McGovern Institute Foundation Trust Account. Funds are NOT personal income and will NOT affect disability benefits. We operate with full legal transparency and comply with all disability program regulations.'}
              </p>
              <a href="/financial-transparency" className="text-xs font-bold text-amber-600 hover:underline mt-2 inline-block">
                {i18n.language === 'fr' ? t('home.viewFinancialTransparency') : 'View Financial Transparency →'}
              </a>
            </div>
          </div>
        </div>

        {/* NEWSPAPER CONTENT - SINGLE PAGE */}
        <div className="px-6 py-8 space-y-6">
          
          {/* MAIN HEADLINE STORY */}
          <div id="story" className="border-b-4 border-black pb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-2">{t('home.frontPageStoryLabel')}</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {t('home.headline')}
            </h2>
            <p className="text-sm font-bold mb-4">
              {t('home.subheadline')}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold">{t('home.familyTrauma')}</p>
                <p className="text-sm">{t('home.familyTraumaDesc')}</p>
              </div>
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold">{t('home.systemFailure')}</p>
                <p className="text-sm">{t('home.systemFailureDesc')}</p>
              </div>
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold">{t('home.politicalSilence')}</p>
                <p className="text-sm">{t('home.politicalSilenceDesc')}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              {t('home.paragraph1')}
            </p>
            <p className="text-sm leading-relaxed">
              {t('home.paragraph2')}
            </p>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              
              {/* GOVERNMENT SILENCE */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">{t('home.politicalAccountabilityLabel')}</p>
                <h3 className="text-xl font-bold mb-2">{t('home.governmentSilence')}</h3>
                <p className="text-xs leading-relaxed mb-2">
                  {t('home.governmentSilenceDesc')}
                </p>
                <a href="/government-accountability" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  {t('home.demandAccountability')} <ChevronRight size={14} />
                </a>
              </div>

              {/* PODCAST */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">{t('home.listenLabel')}</p>
                <h3 className="text-xl font-bold mb-2">{t('home.podcastTitle')}</h3>
                <p className="text-xs mb-3">{t('home.podcastEpisode')}</p>
                <a href="/podcast-hub" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  {t('home.playPodcast')} <Play size={14} />
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              
              {/* CORPORATE HYPOCRISY */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">{t('home.corporateAccountabilityLabel')}</p>
                <h3 className="text-xl font-bold mb-2">{t('home.whoProfit')}</h3>
                <p className="text-xs leading-relaxed mb-2">
                  {t('home.whoProfitDesc')}
                </p>
                <a href="/corporate-accountability" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  {t('home.seeFullList')} <ChevronRight size={14} />
                </a>
              </div>

              {/* PETITION */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">{t('home.takeActionLabel')}</p>
                <h3 className="text-xl font-bold mb-2">{t('home.signPetition')}</h3>
                <p className="text-xs mb-3">{t('home.signatures')}</p>
                <a href="/accountability-petition" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  {t('home.signNow')} <Signature size={14} />
                </a>
              </div>

            </div>

          </div>

          {/* QR CODE FOR E-TRANSFER */}
          <div className="donation-card-container border-t-4 border-black pt-6 mt-6 text-center">
            <p className="text-sm font-bold uppercase tracking-wider mb-4">{t('home.quickDonate')}</p>
            <div className="flex justify-center mb-6 overflow-hidden">
              <a href="/donate-etransfer" className="bg-white p-3 border-2 border-black rounded-lg hover:shadow-lg transition-shadow inline-block">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/etransfer-qr-code_96d6276a.png" 
                  alt="E-Transfer QR Code - Click to donate" 
                  className="w-40 h-40 md:w-48 md:h-48 cursor-pointer block"
                />
              </a>
            </div>
            <p className="text-xs mb-2"><strong>{t('home.scanOrClick')}</strong></p>
            <p className="text-xs text-gray-600 mb-6">{t('home.donateDescription')}</p>
            <a href="/donation-impact" className="text-xs font-bold text-black hover:underline border-b-2 border-black pb-1">{t('home.seeImpact')}</a>
          </div>

          {/* BOTTOM SECTION - CALL TO ACTION */}
          <div className="border-t-4 border-black pt-6 mt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <a href="/donate" className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <Heart size={20} className="mx-auto mb-2" />
                <p className="text-xs font-bold">{t('home.donateButton')}</p>
                <p className="text-xs">{t('home.supportLegal')}</p>
              </a>
              <a href="/newspaper-reader" className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <FileText size={20} className="mx-auto mb-2" />
                <p className="text-xs font-bold">{t('home.readFullNewspaper')}</p>
                <p className="text-xs">{t('home.fourPageSpread')}</p>
              </a>
              <a href="/contact" className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <Globe size={20} className="mx-auto mb-2" />
                <p className="text-xs font-bold">{t('home.contactButton')}</p>
                <p className="text-xs">{t('home.getInvolved')}</p>
              </a>
            </div>
          </div>

          {/* DONATION DASHBOARD */}
          <div className="border-t-4 border-black pt-6 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">{t('home.campaignProgress')}</p>
            <DonationDashboard />
          </div>

          {/* DOMAIN SHARING */}
          <div className="border-t-4 border-black pt-6 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">{t('home.shareNetwork')}</p>
            <DomainSharingWidget
              title=""
              description=""
              showLabel={false}
            />
          </div>

          {/* TRANSPARENCY & ACCOUNTABILITY */}
          <div className="border-t-4 border-black pt-6 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">COMPLETE TRANSPARENCY & ACCOUNTABILITY</p>
            <TransparencyDashboard />
          </div>

          {/* SOCIAL SHARING */}
          <div className="border-t-4 border-black pt-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">SHARE THIS STORY</p>
            <SocialShareButtons title="Justice for Barran" text="Five Years of Systemic Abandonment - Demand accountability for Indigenous justice" />
          </div>

          {/* ABOUT US SECTION */}
          <div className="border-t-4 border-black pt-6 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">{t('home.aboutUsTitle')}</p>
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <p className="text-sm leading-relaxed text-gray-800">
                {t('home.aboutUsDescription')}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-xs font-bold text-gray-600">HATCHET LAKE DENESULINE FIRST NATION (DENE)</p>
                <p className="text-xs text-gray-600 mt-1">Bill C-92 Legal Framework | February 10, 2026 Custody Order | 150+ Politicians Contacted | Zero Adequate Response</p>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="bg-black text-white py-6 px-6 text-center border-t-8 border-black">
          <p className="text-xs font-bold tracking-wider mb-2">JUSTICE FOR BARRAN - PART 3</p>
          <p className="text-xs">Current Truth Before Reconciliation | Since 2021</p>
          <p className="text-xs mt-3 text-gray-400">indigenousadv-ahjdmzis.manus.space | www.justiceforbarran.com | www.justiceforbarran.ca</p>
          <p className="text-xs mt-3 text-gray-500">Hatchet Lake Denesuline First Nation (Dene) | Bill C-92 Legal Framework</p>
        </div>

      </div>
    </div>
  );
}
