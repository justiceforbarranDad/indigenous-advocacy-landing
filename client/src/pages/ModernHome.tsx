import React, { useState } from 'react';
import { ChevronDown, Share2, Heart, DollarSign, Mail, Phone } from 'lucide-react';
import { PodcastPlayer } from '../components/PodcastPlayer';
import { podcastEpisodes } from '../data/podcastEpisodes';
import TestimonialsSection from '../components/TestimonialsSection';
import { LanguageToggle } from '../components/LanguageToggle';
import { useTranslation } from 'react-i18next';

export default function ModernHome() {
  const { t } = useTranslation();
  const [showDonationBox, setShowDonationBox] = useState(true);
  
  // Add RSS feed link to document head
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.type = 'application/rss+xml';
    link.title = 'Justice for Barran Podcast';
    link.href = '/api/podcast/feed.xml';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* TOP NAVIGATION */}
      <nav className="bg-white border-b-4 border-red-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="text-lg md:text-2xl font-bold text-gray-900">
            Justice for Barran
          </div>
          <div className="hidden md:flex gap-4 lg:gap-8">
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold text-sm lg:text-base">FRONT PAGE</a>
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold text-sm lg:text-base">BARRAN'S STORY</a>
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold text-sm lg:text-base">DONATE</a>
            <a href="#" className="text-gray-700 hover:text-red-700 font-semibold text-sm lg:text-base">CONTACT</a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="md:hidden text-2xl">☰</div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative h-64 md:h-96 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=1200&h=400&fit=crop')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-4 h-full flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {t('home.title')}
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-6 max-w-2xl">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="/donate" className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 font-bold rounded hover:bg-red-800 transition-colors animate-pulse">
              <Heart size={20} />
              {t('common.donate').toUpperCase()}
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 font-bold rounded hover:bg-green-700 transition-colors">
              <Share2 size={20} />
              {t('common.share').toUpperCase()}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT COLUMN - STORY */}
          <div className="md:col-span-2">
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
            <div className="bg-white border-4 border-red-700 p-4 md:p-6 rounded-lg md:sticky md:top-24">
              <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-3 md:mb-4">Support Justice</h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">100% of donations go directly to legal and advocacy efforts. No administrative fees.</p>
              
              <div className="mb-4 md:mb-6">
                <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">E-Transfer (Canada)</h4>
                <p className="text-xs md:text-sm text-gray-700 mb-2">Send e-Transfer to:</p>
                <p className="font-mono text-xs md:text-sm bg-gray-100 p-2 rounded mb-4 break-words overflow-hidden">justiceforbarran@gmail.com</p>
                <div className="border-4 border-red-700 p-4 rounded mb-4 bg-gray-50">
                  <p className="text-sm font-bold text-gray-900 mb-3 text-center">Scan QR to see all bank options</p>
                  <a href="/donate-via-bank" className="block cursor-pointer hover:opacity-80 transition-opacity">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/qr-code-donation_a272743f.png" alt="QR Code for Donations" className="w-full h-auto max-w-sm mx-auto rounded" />
                  </a>
                  <p className="text-xs text-gray-600 mt-3 text-center">Click to view all payment options</p>
                </div>
              </div>

              <a href="/donate" className="block w-full bg-red-600 text-white py-2 md:py-3 font-bold rounded hover:bg-red-700 transition-colors mb-2 md:mb-3 text-sm md:text-base text-center font-bold">
                <Heart size={18} className="inline mr-2" />
                DONATE NOW
              </a>
              <a href="/donate-recurring" className="block w-full bg-blue-600 text-white py-2 md:py-3 font-bold rounded hover:bg-blue-700 transition-colors mb-2 md:mb-3 text-sm md:text-base text-center">
                MONTHLY RECURRING
              </a>
              <a href="/contact" className="block w-full bg-gray-700 text-white py-2 md:py-3 font-bold rounded hover:bg-gray-800 transition-colors text-sm md:text-base text-center">
                <Mail size={18} className="inline mr-2" />
                CONTACT US
              </a>

              <p className="text-xs text-gray-600 mt-3 md:mt-4">✓ Verified donations only  ✓ Transparent allocation  ✓ Legal & advocacy focused</p>
            </div>
          </div>
        </div>
      </div>

      {/* PODCAST SECTION */}
      <section className="bg-white py-8 md:py-16 mt-8 md:mt-16 border-t-4 border-b-4 border-red-700">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">LISTEN TO OUR PODCAST</h2>
          <p className="text-sm md:text-lg mb-6 md:mb-8 text-gray-700">Hear stories of Indigenous advocacy, systemic failures, and the fight for justice. Each episode features full transcripts and translations.</p>
          <div className="grid grid-cols-1 gap-8">
            {podcastEpisodes.map((episode) => (
              <PodcastPlayer
                key={episode.id}
                title={episode.title}
                description={episode.description}
                audioUrl={episode.audioUrl}
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

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

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
