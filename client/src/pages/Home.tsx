import { AlertCircle, FileText, Globe, Play, Heart, Signature, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SurveyBox } from '@/components/SurveyBox';
import { useAuth } from '@/_core/hooks/useAuth';
import { LatestUpdatesTicker } from '@/components/LatestUpdatesTicker';
import { SocialShareButtons } from '@/components/SocialShareButtons';
import { DonationDashboard } from '@/components/DonationDashboard';
import { DomainSharingWidget } from '@/components/DomainSharingWidget';
import { TransparencyDashboard } from '@/components/TransparencyDashboard';

const BG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_ljzvky_image_dac505a0.png";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [expandedLetter, setExpandedLetter] = useState('en');

  // If theme is switchable in App.tsx, we can implement theme toggling like this:
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* SINGLE PAGE NEWSPAPER LAYOUT */}
      <div className="max-w-4xl mx-auto bg-white">
        
        {/* NEWSPAPER MASTHEAD */}
        <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
          {/* Canadian Flag with Message */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-sm">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/canadian-flag-truth-reconciliation_4319a979.png" 
                alt="Canadian Flag - Current Truth Before Reconciliation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Publication Name */}
          <div className="text-center mb-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-widest" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
              JUSTICE FOR BARRAN
            </h1>
            <div className="h-1 bg-white my-3 w-32 mx-auto"></div>
          </div>
          
          {/* Tagline and Date */}
          <div className="text-center">
            <p className="text-base md:text-lg tracking-wide mb-2">
              A Newspaper of Indigenous Rights & Systemic Accountability
            </p>
            <p className="text-xs md:text-sm tracking-widest">
              MARCH 29, 2026 — VOLUME 1, ISSUE 3
            </p>
          </div>
        </div>

        {/* LATEST UPDATES TICKER */}
        <LatestUpdatesTicker />

        {/* NEWSPAPER CONTENT - SINGLE PAGE */}
        <div className="px-6 py-8 space-y-6">
          
          {/* MAIN HEADLINE STORY */}
          <div className="border-b-4 border-black pb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-2">FRONT PAGE STORY</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Five Years of Systemic Abandonment
            </h2>
            <p className="text-sm font-bold mb-4">
              Indigenous Family Demands Justice After DPJ Failure, Political Silence, and Corporate Hypocrisy
            </p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold">FAMILY TRAUMA</p>
                <p className="text-sm">Teen stabbed 3x, major impacts, mental health destroyed</p>
              </div>
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold">SYSTEM FAILURE</p>
                <p className="text-sm">DPJ withdrew Jan 2023, no follow-up, Jordan's Principle ignored</p>
              </div>
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold">POLITICAL SILENCE</p>
                <p className="text-sm">50+ officials contacted, zero adequate responses</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Since 2021, our Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed. The system that promised to protect vulnerable children abandoned us instead.
            </p>
            <p className="text-sm leading-relaxed">
              The Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up, no education, no mental health support. Jordan's Principle - which guarantees no-delay services for First Nations children - was completely ignored.
            </p>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              
              {/* GOVERNMENT SILENCE */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">POLITICAL ACCOUNTABILITY</p>
                <h3 className="text-xl font-bold mb-2">Government Silence = Complicity</h3>
                <p className="text-xs leading-relaxed mb-2">
                  We escalated to federal MPs - same silence. Our MNA sent a cease-and-desist warning instead of assistance. This is what happens when a constituent asks for help.
                </p>
                <a href="/government-accountability" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  Demand Accountability <ChevronRight size={14} />
                </a>
              </div>

              {/* PODCAST */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">LISTEN</p>
                <h3 className="text-xl font-bold mb-2">Le Silence des Politiciens</h3>
                <p className="text-xs mb-3">Épisode 3 - 14:15</p>
                <a href="/podcast-hub" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  Play Podcast <Play size={14} />
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              
              {/* CORPORATE HYPOCRISY */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">CORPORATE ACCOUNTABILITY</p>
                <h3 className="text-xl font-bold mb-2">Who Profits from Reconciliation?</h3>
                <p className="text-xs leading-relaxed mb-2">
                  RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada, NHL teams - all sponsor Orange Shirt Day while systemic failures continue.
                </p>
                <a href="/corporate-accountability" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  See Full List <ChevronRight size={14} />
                </a>
              </div>

              {/* PETITION */}
              <div className="border-l-4 border-black pl-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-2">TAKE ACTION</p>
                <h3 className="text-xl font-bold mb-2">Sign the Petition</h3>
                <p className="text-xs mb-3">28,300+ signatures demanding independent inquiry</p>
                <a href="/accountability-petition" className="text-xs font-bold text-black hover:underline flex items-center gap-1">
                  Sign Now <Signature size={14} />
                </a>
              </div>

            </div>

          </div>

          {/* QR CODE FOR E-TRANSFER */}
          <div className="border-t-4 border-black pt-6 mt-6 text-center">
            <p className="text-sm font-bold uppercase tracking-wider mb-4">Quick Donate via E-Transfer</p>
            <div className="flex justify-center mb-6 overflow-hidden">
              <a href="/donate-etransfer" className="bg-white p-3 border-2 border-black rounded-lg hover:shadow-lg transition-shadow inline-block">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/etransfer-qr-code_96d6276a.png" 
                  alt="E-Transfer QR Code - Click to donate" 
                  className="w-40 h-40 md:w-48 md:h-48 cursor-pointer block"
                />
              </a>
            </div>
            <p className="text-xs mb-2"><strong>Scan or click to donate</strong></p>
            <p className="text-xs text-gray-600 mb-6">Opens interactive e-Transfer donation page with all Canadian banks</p>
            <a href="/donation-impact" className="text-xs font-bold text-black hover:underline border-b-2 border-black pb-1">See where your donation goes →</a>
          </div>

          {/* BOTTOM SECTION - CALL TO ACTION */}
          <div className="border-t-4 border-black pt-6 mt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <a href="/donate" className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <Heart size={20} className="mx-auto mb-2" />
                <p className="text-xs font-bold">DONATE</p>
                <p className="text-xs">Support Legal Fund</p>
              </a>
              <a href="/newspaper-reader" className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <FileText size={20} className="mx-auto mb-2" />
                <p className="text-xs font-bold">READ FULL NEWSPAPER</p>
                <p className="text-xs">4-Page Spread</p>
              </a>
              <a href="/contact" className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                <Globe size={20} className="mx-auto mb-2" />
                <p className="text-xs font-bold">CONTACT</p>
                <p className="text-xs">Get Involved</p>
              </a>
            </div>
          </div>

          {/* DONATION DASHBOARD */}
          <div className="border-t-4 border-black pt-6 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">CAMPAIGN PROGRESS</p>
            <DonationDashboard />
          </div>

          {/* DOMAIN SHARING */}
          <div className="border-t-4 border-black pt-6 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider mb-4 text-center">SHARE WITH YOUR NETWORK</p>
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

        </div>

        {/* FOOTER */}
        <div className="bg-black text-white py-6 px-6 text-center border-t-8 border-black">
          <p className="text-xs font-bold tracking-wider mb-2">JUSTICE FOR BARRAN - PART 3</p>
          <p className="text-xs">Current Truth Before Reconciliation</p>
          <p className="text-xs mt-3 text-gray-400">indigenousadv-ahjdmzis.manus.space</p>
        </div>

      </div>
    </div>
  );
}
