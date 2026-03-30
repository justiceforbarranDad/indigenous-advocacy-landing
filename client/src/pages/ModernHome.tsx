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
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Sunday Bloody Sunday, Part Two
          </h1>
          <p className="text-xl text-gray-200 mb-6 max-w-2xl">
            Indigenous Teen Stabbed Three Times — System Failed Him For Five Years
          </p>
          <div className="flex gap-4">
            <button className="bg-red-700 text-white px-6 py-3 font-bold rounded hover:bg-red-800 transition-colors flex items-center gap-2">
              <Heart size={20} />
              SUPPORT THIS CAUSE
            </button>
            <button className="bg-green-600 text-white px-6 py-3 font-bold rounded hover:bg-green-700 transition-colors flex items-center gap-2">
              <Share2 size={20} />
              SHARE STORY
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* LEFT COLUMN - STORY */}
          <div className="col-span-2">
            <div className="mb-8">
              <span className="bg-red-700 text-white px-3 py-1 text-sm font-bold rounded">DEVELOPING STORY</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">Indigenous Teen Stabbed Three Times — System Failed Him For Five Years</h2>
              <p className="text-gray-600 mb-6">By Robert McGovern · Quebec, Canada · Ongoing since February 14, 2021</p>
              
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                On February 14, 2021, a 14-year-old Indigenous boy named Barran was stabbed three times — in the left lung, chest, and back. His iPhone, tucked in his front pocket, stopped two more stab attempts. He spent six days hospitalized at Montreal Children's Hospital with a chest tube for three days. The medical staff held him, comforted him, and saved his life.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                At 5 feet 10 inches and 300 lbs, already living with disability and Type 2 diabetes — conditions disproportionately common in Indigenous communities — Barran showed incredible resilience. He has since lost weight and is living better, but the trauma remains. He is most comfortable in darkness; the attack happened in the morning.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Yet his first words leaving the hospital were: "I miss my siblings." Family support sustained him then. Family support sustains him now.
              </p>

              <p className="text-lg text-gray-800 leading-relaxed">
                Since approximately 2021, this Indigenous family has sought help after serious trauma. The DPJ (Direction de la protection de la jeunesse) became involved but withdrew in January 2023 — with no adequate follow-up. Education was lost. Mental health was destroyed. Jordan's Principle — the federal policy guaranteeing no-delay services for First Nations children — was ignored.
              </p>
            </div>

            {/* KEY REFERENCES */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Key References</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="border-2 border-green-600 p-4 rounded hover:bg-green-50 transition-colors">
                  <div className="text-green-600 font-bold">→ STATISTICS CANADA</div>
                  <div className="text-sm text-gray-700">Indigenous population data</div>
                </a>
                <a href="#" className="border-2 border-green-600 p-4 rounded hover:bg-green-50 transition-colors">
                  <div className="text-green-600 font-bold">→ TRC CALLS TO ACTION</div>
                  <div className="text-sm text-gray-700">Truth and Reconciliation Commission</div>
                </a>
                <a href="#" className="border-2 border-green-600 p-4 rounded hover:bg-green-50 transition-colors">
                  <div className="text-green-600 font-bold">→ JORDAN'S PRINCIPLE</div>
                  <div className="text-sm text-gray-700">Federal policy for First Nations children</div>
                </a>
                <a href="#" className="border-2 border-green-600 p-4 rounded hover:bg-green-50 transition-colors">
                  <div className="text-green-600 font-bold">→ CDPDJ QUEBEC</div>
                  <div className="text-sm text-gray-700">Commission des droits de la personne</div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - DONATION BOX */}
          <div>
            <div className="bg-white border-4 border-red-700 p-6 rounded-lg sticky top-24">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Support Justice</h3>
              <p className="text-gray-700 mb-6">100% of donations go directly to legal and advocacy efforts. No administrative fees.</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-2">E-Transfer (Canada)</h4>
                <p className="text-sm text-gray-700 mb-2">Send e-Transfer to:</p>
                <p className="font-mono text-sm bg-gray-100 p-2 rounded mb-4">justiceforbarran@gmail.com</p>
                <div className="border-4 border-red-700 p-3 rounded mb-4">
                  <p className="text-xs text-gray-600 mb-2">Scan QR to see all bank options. Click to view.</p>
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/donate-banks-qr-code_4e8d8d0e.png" alt="QR Code" className="w-full rounded" />
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 font-bold rounded hover:bg-green-700 transition-colors mb-3 flex items-center justify-center gap-2">
                <DollarSign size={20} />
                DONATE VIA CARD
              </button>
              <button className="w-full bg-blue-600 text-white py-3 font-bold rounded hover:bg-blue-700 transition-colors mb-3">
                MONTHLY RECURRING
              </button>
              <button className="w-full bg-gray-700 text-white py-3 font-bold rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Mail size={20} />
                CONTACT US
              </button>

              <p className="text-xs text-gray-600 mt-4">✓ Verified donations only  ✓ Transparent allocation  ✓ Legal & advocacy focused</p>
            </div>
          </div>
        </div>
      </div>

      {/* PODCAST SECTION */}
      <section className="bg-gradient-to-r from-red-700 to-red-800 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">LISTEN TO OUR PODCAST</h2>
          <p className="text-lg mb-8 text-red-100">Hear stories of Indigenous advocacy, systemic failures, and the fight for justice. Each episode features full transcripts and translations.</p>
          <div className="grid grid-cols-1 gap-8">
            {podcastEpisodes.map((episode) => (
              <PodcastPlayer
                key={episode.id}
                title={episode.title}
                description={episode.description}
                audioUrl=""
                duration={parseInt(episode.duration)}
                language={episode.language}
                episodeNumber={episode.episodeNumber}
                date={episode.date}
                speechifyUrl={episode.speechifyUrl}
                transcript={episode.transcript}
                onShare={() => {
                  const text = `Check out episode ${episode.episodeNumber}: "${episode.title}" on Justice for Barran podcast. ${episode.speechifyUrl}`;
                  if (navigator.share) {
                    navigator.share({
                      title: 'Justice for Barran Podcast',
                      text: text,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(text);
                    alert('Episode link copied to clipboard!');
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-0 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">NAVIGATION</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-400">Front Page</a></li>
                <li><a href="#" className="hover:text-red-400">Barran's Story</a></li>
                <li><a href="#" className="hover:text-red-400">Donate</a></li>
                <li><a href="#" className="hover:text-red-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">FOLLOW US</h4>
              <ul className="space-y-2">
                <li><a href="https://x.com/HelpBarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">X / Twitter</a></li>
                <li><a href="https://www.tiktok.com/@barranneedsjustice" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">TikTok</a></li>
                <li><a href="https://www.instagram.com/justiceforbarran/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Instagram</a></li>
                <li><a href="https://www.youtube.com/@justiceforBarran" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">YouTube</a></li>
                <li><a href="https://www.facebook.com/no.fx.716" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">RESOURCES</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-400">Legal Support</a></li>
                <li><a href="#" className="hover:text-red-400">References</a></li>
                <li><a href="#" className="hover:text-red-400">Media Kit</a></li>
                <li><a href="#" className="hover:text-red-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">CONTACT</h4>
              <p className="text-gray-400">Email:</p>
              <p className="text-red-400 font-bold mb-4">justiceforbarran@gmail.com</p>
              <p className="text-xs text-gray-500">Verified. Accurate. Justice-focused.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Justice for Barran. All rights reserved. Protected expression under Charter s.2(b).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
