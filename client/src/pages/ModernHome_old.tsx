import { useState } from 'react';
import { ChevronDown, Share2, Heart, DollarSign, Mail, Phone } from 'lucide-react';
import { PodcastPlayer } from '../components/PodcastPlayer';
import { podcastEpisodes } from '../data/podcastEpisodes';

export default function ModernHome() {
  const [showDonationBox, setShowDonationBox] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* TOP NAVIGATION */}
      <nav className="bg-white border-b-4 border-red-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            Justice for Barran
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold">FRONT PAGE</a>
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold">BARRAN'S STORY</a>
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold">DONATE</a>
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=1200&h=400&fit=crop')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col justify-center h-full">
          <div className="bg-red-700 text-white px-4 py-2 inline-block w-fit mb-4 font-bold">
            DEVELOPING STORY
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Indigenous Teen Stabbed Three Times — System Failed Him For Five Years
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            By Robert McGovern · Quebec, Canada · Ongoing since February 14, 2021
          </p>
          <div className="flex gap-4">
            <a href="/donate-via-bank" className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-bold flex items-center gap-2 no-underline">
              <Heart size={20} /> SUPPORT THIS CAUSE
            </a>
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 font-bold flex items-center gap-2">
              <Share2 size={20} /> SHARE STORY
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="col-span-2">
            {/* FEATURED IMAGE */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
                alt="Every Child Matters"
                className="w-full h-auto"
              />
              <p className="text-sm text-gray-600 bg-gray-100 p-3 italic">
                Every Child Matters — A memorial for Indigenous children affected by systemic failures across Canada.
              </p>
            </div>

            {/* MAIN STORY */}
            <article className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                On February 14, 2021, a 14-year-old Indigenous boy named Barran was stabbed three times — in the left lung, chest, and back. His iPhone, tucked in his front pocket, stopped two more stab attempts. He spent six days hospitalized at Montreal Children's Hospital with a chest tube for three days. The medical staff held him, comforted him, and saved his life.
              </p>

              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                At 5 feet 10 inches and 300 lbs, already living with disability and Type 2 diabetes — conditions disproportionately common in Indigenous communities — Barran showed incredible resilience. He has since lost weight and is living better, but the trauma remains. He is most comfortable in darkness; the attack happened in the morning.
              </p>

              <p className="text-lg leading-relaxed text-gray-800 mb-6 italic font-semibold text-red-700">
                Yet his first words leaving the hospital were: "I miss my siblings." Family support sustained him then. Family support sustains him now.
              </p>

              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Since approximately 2021, this Indigenous family has sought help after serious trauma. The DPJ (Direction de la protection de la jeunesse) became involved but withdrew in January 2023 — with no adequate follow-up. Education was lost. Mental health was destroyed. Jordan's Principle — the federal policy guaranteeing no-delay services for First Nations children — was ignored.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-red-700 pl-4">
                DPJ Accountability
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                DPJ Withdrew Services, Left Family Without Support
              </h3>
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                The Direction de la protection de la jeunesse became involved after the stabbing but withdrew in January 2023. No adequate follow-up was provided. Education opportunities were lost. Mental health services were never properly established. Jordan's Principle — the federal policy guaranteeing no-delay services for First Nations children — was systematically ignored.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-green-700 pl-4">
                Political Accountability
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Politicians Ghosted — No Response to Repeated Pleas
              </h3>
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Multiple elected officials at municipal, provincial, and federal levels have been contacted repeatedly. The response: silence. This pattern of ignoring Indigenous families seeking help violates the Quebec Ethics Code, the spirit of the Truth and Reconciliation Commission's Calls to Action, and basic human decency.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-red-700 pl-4">
                Community
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Standing Together — Community Rallies for Justice
              </h3>
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Despite systemic failures, the community has shown remarkable solidarity. From social media campaigns to direct support, people across Canada and internationally are standing up for Barran's rights and demanding accountability from the institutions that failed him.
              </p>
            </article>

            {/* EMBEDDED VIDEO */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg bg-black">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/xCpn1erz1y8"
                  title="Justice for Barran - Full Story"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* KEY REFERENCES */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-green-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key References</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-red-700 hover:text-red-800 font-semibold">
                  → STATISTICS CANADA Indigenous population data
                </a>
                <a href="#" className="text-red-700 hover:text-red-800 font-semibold">
                  → TRC CALLS TO ACTION Truth and Reconciliation Commission
                </a>
                <a href="#" className="text-red-700 hover:text-red-800 font-semibold">
                  → JORDAN'S PRINCIPLE Federal policy for First Nations children
                </a>
                <a href="#" className="text-red-700 hover:text-red-800 font-semibold">
                  → CDPDJ QUEBEC Commission des droits de la personne
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-1">
            {/* DONATION BOX */}
            {showDonationBox && (
              <div className="bg-red-50 border-2 border-red-700 rounded-lg p-6 mb-8 sticky top-24">
                <h3 className="text-2xl font-bold text-red-700 mb-4">Support Justice</h3>
                <p className="text-gray-700 mb-6 text-sm">
                  100% of donations go directly to legal and advocacy efforts. No administrative fees.
                </p>
                
                <div className="space-y-4">
                  {/* E-TRANSFER */}
                  <div className="bg-white p-4 rounded border border-red-200">
                    <p className="font-bold text-gray-900 mb-2">E-Transfer (Canada)</p>
                    <p className="text-sm text-gray-700 mb-3">Send e-Transfer to:</p>
                    <p className="font-mono text-sm bg-gray-100 p-2 rounded mb-3">
                      justiceforbarran@gmail.com
                    </p>
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/donate-banks-qr-code_cb3cfad5.png" alt="Donate via Bank QR Code" className="w-full rounded mb-2 cursor-pointer" onClick={() => window.location.href = '/donate-via-bank'} />
                    <p className="text-xs text-gray-600">Scan QR to see all bank options. Click to view.</p>
                  </div>

                  {/* STRIPE */}
                  <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded font-bold flex items-center justify-center gap-2" onClick={() => window.location.href = '/donate'}>
                    <DollarSign size={20} /> DONATE VIA CARD
                  </button>

                  {/* RECURRING */}
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-bold" onClick={() => window.location.href = '/donate-recurring'}>
                    MONTHLY RECURRING
                  </button>

                  {/* CONTACT */}
                  <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded font-bold flex items-center justify-center gap-2" onClick={() => window.location.href = '/contact'}>
                    <Mail size={20} /> CONTACT US
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-4">
                  ✓ Verified donations only
                  ✓ Transparent allocation
                  ✓ Legal & advocacy focused
                </p>
              </div>
            )}

            {/* SYSTEMIC FAILURES */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-700 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">SYSTEMIC FAILURES</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-700 font-bold">•</span>
                  <span className="text-gray-700">DPJ withdrew services without follow-up</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-700 font-bold">•</span>
                  <span className="text-gray-700">50+ officials contacted, zero adequate responses</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-700 font-bold">•</span>
                  <span className="text-gray-700">Jordan's Principle ignored</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-700 font-bold">•</span>
                  <span className="text-gray-700">Political silence and institutional deflection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-700 font-bold">•</span>
                  <span className="text-gray-700">Corporate hypocrisy — sponsors while failing</span>
                </li>
              </ul>
            </div>

            {/* QUICK STATS */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
              <h4 className="text-lg font-bold text-gray-900 mb-4">CAMPAIGN STATS</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Officials Contacted</p>
                  <p className="text-3xl font-bold text-green-700">50+</p>
                </div>
                <div>
                  <p className="text-gray-600">Adequate Responses</p>
                  <p className="text-3xl font-bold text-red-700">0</p>
                </div>
                <div>
                  <p className="text-gray-600">Years Fighting</p>
                  <p className="text-3xl font-bold text-blue-700">5+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PODCAST SECTION */}
      <section className="bg-gradient-to-r from-red-700 to-red-800 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">LISTEN TO OUR PODCAST</h2>
          <p className="text-lg mb-8 text-red-100">Hear stories of Indigenous advocacy, systemic failures, and the fight for justice.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Episode 1</h3>
              <p className="text-red-100 mb-4">Listen to our first podcast episode on Speechify</p>
              <a href="https://speechify.app.link/sIQ3mkmPU1b" target="_blank" rel="noopener noreferrer" className="bg-white text-red-700 px-6 py-3 font-bold rounded hover:bg-red-100 inline-block">
                Listen Now →
              </a>
            </div>
            <div className="bg-red-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Episode 2</h3>
              <p className="text-red-100 mb-4">Listen to our second podcast episode on Speechify</p>
              <a href="https://speechify.app.link/lcpZ2okPU1b" target="_blank" rel="noopener noreferrer" className="bg-white text-red-700 px-6 py-3 font-bold rounded hover:bg-red-100 inline-block">
                Listen Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-0 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">NAVIGATION</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400">Front Page</a></li>
                <li><a href="#" className="hover:text-red-400">Barran's Story</a></li>
                <li><a href="#" className="hover:text-red-400">Donate</a></li>
                <li><a href="#" className="hover:text-red-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">FOLLOW US</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="https://x.com/HelpBarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">X / Twitter</a></li>
                <li><a href="https://www.tiktok.com/@barranneedsjustice" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">TikTok</a></li>
                <li><a href="https://www.instagram.com/justiceforbarran/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Instagram</a></li>
                <li><a href="https://www.youtube.com/@justiceforBarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">YouTube</a></li>
                <li><a href="https://www.facebook.com/no.fx.716" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">RESOURCES</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400">Legal Support</a></li>
                <li><a href="#" className="hover:text-red-400">References</a></li>
                <li><a href="#" className="hover:text-red-400">Media Kit</a></li>
                <li><a href="#" className="hover:text-red-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">CONTACT</h5>
              <p className="text-sm mb-2">Email:</p>
              <p className="text-red-400 font-mono text-sm mb-4">justiceforbarran@gmail.com</p>
              <p className="text-xs text-gray-400">Verified. Accurate. Justice-focused.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Justice for Barran. All rights reserved. Protected expression under Charter s.2(b).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
