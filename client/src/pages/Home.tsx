import { Link } from 'wouter';
import { AlertCircle, FileText, Globe, Play, Heart, Signature } from 'lucide-react';
import { useState } from 'react';
import { SurveyBox } from '@/components/SurveyBox';
import { useAuth } from '@/_core/hooks/useAuth';
import { LatestUpdatesTicker } from '@/components/LatestUpdatesTicker';
import { SocialShareButtons } from '@/components/SocialShareButtons';

const BG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_ljzvky_image_dac505a0.png";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [expandedLetter, setExpandedLetter] = useState('en');

  return (
    <div className="min-h-screen bg-amber-50 text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* NEWSPAPER MASTHEAD */}
      <div className="w-full bg-black text-amber-50 py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto">
          {/* Canadian Flag with Message */}
          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-md">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/canadian-flag-truth-reconciliation_4319a979.png" 
                alt="Canadian Flag - Current Truth Before Reconciliation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Publication Name */}
          <div className="text-center mb-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-widest" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em' }}>
              JUSTICE FOR BARRAN
            </h1>
            <div className="h-1 bg-amber-50 my-3 w-32 mx-auto"></div>
          </div>
          
          {/* Tagline and Date */}
          <div className="text-center">
            <p className="text-lg md:text-xl tracking-wide mb-2">
              A Newspaper of Indigenous Rights & Systemic Accountability
            </p>
            <p className="text-sm md:text-base tracking-widest">
              MARCH 28, 2026 — VOLUME 1, ISSUE 1
            </p>
          </div>
        </div>
      </div>

      {/* LATEST UPDATES TICKER */}
      <LatestUpdatesTicker />

      {/* BIRTHDAY BANNER - Subtle, not overwhelming */}
      <div className="w-full bg-amber-100 text-black py-3 px-4 border-b-2 border-black">
        <div className="max-w-6xl mx-auto text-center text-sm md:text-base">
          <p className="font-bold">🎉 Today marks Barran's 20th birthday — A new chapter begins in the fight for justice</p>
        </div>
      </div>

      {/* MAIN CONTENT AREA - Newspaper Layout */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* TOP STORY - Main Headline */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <div className="mb-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">FRONT PAGE STORY</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Five Years of Systemic Failure: Justice for Barran
            </h2>
            <p className="text-lg md:text-xl italic text-gray-700 mb-4">
              Indigenous child victim of attempted murder denied psychological services, justice system fails at every level
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-base leading-relaxed mb-4">
                <span className="font-bold">QUEBEC, CANADA</span> — For five years, a First Nations youth has fought for justice following a near-fatal stabbing attack. Despite promises of protection and healing, systemic failures at every government level have compounded the trauma.
              </p>
              <p className="text-base leading-relaxed mb-4">
                The case exposes deep institutional racism, political intimidation, and the systematic denial of services guaranteed under Jordan's Principle—a federal legal obligation to ensure Indigenous children receive equal services.
              </p>
              <p className="text-base leading-relaxed">
                <span className="font-bold">Read the full story:</span> This newspaper documents the timeline of failure, the officials who ghosted, and the fight for accountability that continues today.
              </p>
            </div>

            <div className="bg-black text-amber-50 p-6 border-2 border-black">
              <p className="text-xs font-bold tracking-widest uppercase mb-3">KEY FACTS</p>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li><span className="font-bold">Feb 27, 2021:</span> Attempted murder attack</li>
                <li><span className="font-bold">2021-2023:</span> DPJ involvement, then withdrawal</li>
                <li><span className="font-bold">5 Years:</span> Denial of psychological services</li>
                <li><span className="font-bold">All Levels:</span> Federal, provincial, municipal silence</li>
                <li><span className="font-bold">March 27, 2026:</span> UN complaint filed</li>
                <li><span className="font-bold">March 28, 2026:</span> 20th birthday — justice still pending</li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/donate" className="bg-black text-amber-50 hover:bg-gray-800 px-6 py-2 font-bold border-2 border-black transition-colors">
              💝 SUPPORT THIS CAUSE
            </Link>
            <Link href="/petition" className="bg-black text-amber-50 hover:bg-gray-800 px-6 py-2 font-bold border-2 border-black transition-colors">
              ✍️ SIGN PETITION
            </Link>
            <Link href="/contact" className="bg-black text-amber-50 hover:bg-gray-800 px-6 py-2 font-bold border-2 border-black transition-colors">
              📢 DEMAND ACCOUNTABILITY
            </Link>
          </div>
        </div>

        {/* SECONDARY STORIES - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b-4 border-black">
          
          {/* Breaking News Column */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2 text-red-700">BREAKING NEWS</p>
            <h3 className="text-2xl md:text-3xl font-black mb-4">UN Letter Submitted</h3>
            <p className="text-sm mb-3">
              <span className="font-bold">March 27, 2026</span> — Formal complaint filed with UN Special Rapporteurs documenting systemic failure and institutional obstruction.
            </p>
            <p className="text-xs mb-4 text-gray-600">
              Reference: CHRC 100021349 | Inquiry: I2303084
            </p>
            <Link href="/" className="text-black font-bold hover:underline text-sm">
              Read full UN letter →
            </Link>
          </div>

          {/* French Podcast Column */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2 text-blue-700">MULTIMEDIA</p>
            <h3 className="text-2xl md:text-3xl font-black mb-4">French Podcast Series</h3>
            <p className="text-sm mb-3">
              Five-episode podcast in French documenting systemic failures and the fight for Indigenous justice. With transcripts in both French and English.
            </p>
            <Link href="/french-podcast" className="text-black font-bold hover:underline text-sm">
              Listen to episodes →
            </Link>
          </div>
        </div>

        {/* SUPPORTING SECTIONS - Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b-4 border-black">
          
          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">RESOURCES</p>
            <h4 className="text-lg font-black mb-3">Know Your Rights</h4>
            <p className="text-sm mb-4">
              Educational materials on children's rights, Indigenous rights, and how to document systemic failures.
            </p>
            <Link href="/resources" className="text-black font-bold hover:underline text-sm">
              View resources →
            </Link>
          </div>

          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">ACCOUNTABILITY</p>
            <h4 className="text-lg font-black mb-3">Officials Who Failed</h4>
            <p className="text-sm mb-4">
              Complete list of government officials, organizations, and lawyers who ghosted or obstructed justice.
            </p>
            <Link href="/accountability-tracker" className="text-black font-bold hover:underline text-sm">
              View tracker →
            </Link>
          </div>

          <div className="border-2 border-black p-4">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">MEMORIALS</p>
            <h4 className="text-lg font-black mb-3">Historical Context</h4>
            <p className="text-sm mb-4">
              Honoring human rights activists and Indigenous soldiers who fought for freedom and justice.
            </p>
            <Link href="/obituaries" className="text-black font-bold hover:underline text-sm">
              View memorials →
            </Link>
          </div>
        </div>

        {/* SURVEY SECTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-700">READER SURVEY</p>
          <h3 className="text-2xl font-black mb-4">Have You Experienced Similar Systemic Failures?</h3>
          <p className="text-sm mb-4 text-gray-700">
            Help us document the pattern of systemic abuse across Canada. Your anonymous response helps build the case for accountability.
          </p>
          <SurveyBox />
        </div>

        {/* SOCIAL SHARE SECTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <SocialShareButtons
            title="Justice for Barran - Indigenous Youth Fighting for Systemic Accountability"
            text="Five years of systemic failure. A First Nations youth denied justice after attempted murder. UN complaint filed. Help amplify this story and demand accountability."
            hashtags={['JusticeForBarran', 'IndigenousRights', 'EveryChildMatters', 'SystemicFailure']}
            showLabel={true}
            variant="horizontal"
          />
        </div>

        {/* FOOTER SECTION - Call to Action */}
        <div className="bg-black text-amber-50 p-8 border-4 border-black">
          <h3 className="text-2xl font-black mb-4">HOW YOU CAN HELP</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold mb-2">💰 Financial Support</p>
              <p className="text-sm mb-3">Donate via e-Transfer to support legal action and healing services.</p>
              <Link href="/donate" className="text-amber-50 font-bold hover:underline text-sm">
                Donate now →
              </Link>
            </div>
            <div>
              <p className="font-bold mb-2">📣 Amplify the Message</p>
              <p className="text-sm mb-3">Share this story on social media. Demand accountability from officials.</p>
              <Link href="/petition" className="text-amber-50 font-bold hover:underline text-sm">
                Sign petition →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
