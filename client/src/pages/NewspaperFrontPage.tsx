import { useAuth } from '@/_core/hooks/useAuth';
import { ChevronDown, ExternalLink, Heart, Share2 } from 'lucide-react';

/**
 * NEWSPAPER FRONT PAGE - Sunday Bloody Sunday Gazette
 * Professional newspaper layout with obituary section
 * Honoring fallen Indigenous heroes and land defenders
 */

const fallenHeroes = [
  {
    id: 1,
    name: 'Colten Boushie',
    dates: '1994 - 2016',
    nation: 'Red Pheasant Cree Nation',
    legacy: 'Shot by Saskatchewan farmer Gerald Stanley. His death sparked national outcry about systemic racism in Canadian justice system. His mother Debbie Boushie continues fighting for justice.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/colten-boushie-memorial.jpg',
  },
  {
    id: 2,
    name: 'Tina Fontaine',
    dates: '1999 - 2014',
    nation: 'Sagkeeng Ojibway First Nation',
    legacy: 'Murdered in Winnipeg at age 15. Her body found wrapped in a duvet in the Red River. Her death exposed systemic failures in child protection and police response to missing Indigenous girls.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/tina-fontaine-memorial.jpg',
  },
  {
    id: 3,
    name: 'Boushie Family & Defenders',
    dates: 'Ongoing Struggle',
    nation: 'Multiple Nations',
    legacy: 'Land defenders fighting for Indigenous sovereignty and protection from systemic violence. Their resistance continues the legacy of resistance against colonialism.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/land-defenders-memorial.jpg',
  },
  {
    id: 4,
    name: 'Missing & Murdered Indigenous Women & Girls (MMIWG)',
    dates: '1980s - Present',
    nation: 'All Nations',
    legacy: '4,000+ Indigenous women and girls murdered or missing. Systemic violence, police negligence, and institutional failure. Their names must be remembered. Their killers must be held accountable.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/mmiwg-memorial.jpg',
  },
  {
    id: 5,
    name: 'Francis Pegahmagabow',
    dates: '1889 - 1952',
    nation: 'Parry Island First Nation',
    legacy: 'Decorated WWI sniper and war hero. Credited with 378 confirmed kills, making him one of Canada\'s most effective soldiers. Fought for Indigenous rights and veterans\' recognition after returning home. His courage in battle and advocacy for Indigenous peoples remains a legacy of resistance.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/francis-pegahmagabow-memorial.jpg',
  },
  {
    id: 6,
    name: 'Thomas George "Tommy" Prince',
    dates: '1915 - 1977',
    nation: 'Brokenhead Ojibway Nation',
    legacy: 'Highly decorated WWII and Korean War veteran. Served with distinction in multiple theaters of war. Despite his heroic service, faced discrimination and systemic racism upon returning home. His fight for Indigenous veterans\' rights exposed the hypocrisy of a nation that honored Indigenous soldiers in war but abandoned them in peace.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/tommy-prince-memorial.jpg',
  },
  {
    id: 7,
    name: 'Henry Norwest',
    dates: '1884 - 1918',
    nation: 'Métis',
    legacy: 'Legendary WWI sniper credited with 115 confirmed kills. Former rodeo performer who became one of Canada\'s most feared soldiers. Killed in action near the war\'s end. His legacy represents the courage and sacrifice of Indigenous soldiers who fought for a country that did not fully recognize their citizenship.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/henry-norwest-memorial.jpg',
  },
  {
    id: 8,
    name: 'Harriet Nahanee',
    dates: '1930 - 2007',
    nation: 'Squamish Nation',
    legacy: 'Civil rights activist, residential school survivor, and environmentalist. Fought tirelessly for Indigenous rights, environmental protection, and justice for survivors of residential schools. Her activism exposed systemic abuse and institutional failure. She refused to be silenced and demanded accountability.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/harriet-nahanee-memorial.jpg',
  },
  {
    id: 9,
    name: 'Alanis Obomsawin',
    dates: 'Born 1932',
    nation: 'Abenaki',
    legacy: 'Documentary filmmaker, artist, and activist. Through powerful filmmaking, she has documented Indigenous struggles, residential school trauma, and systemic injustice. Her work gives voice to the voiceless and demands that Canada confront its colonial past and ongoing systemic failures.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/alanis-obomsawin-memorial.jpg',
  },
  {
    id: 10,
    name: 'Indigenous Veterans of Canada',
    dates: '1914 - Present',
    nation: 'All Nations',
    legacy: 'Over 4,000 Indigenous soldiers served in WWI, over 3,000 in WWII, and many in the Korean War. Despite their sacrifice and heroism, they returned home to discrimination, denied veterans\' benefits, and systemic racism. Their legacy exposes the contradiction of a nation that honored Indigenous soldiers in uniform but denied them basic rights as citizens.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/indigenous-veterans-memorial.jpg',
  },
];

export default function NewspaperFrontPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-cream text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
      {/* NEWSPAPER MASTHEAD */}
      <header className="bg-black text-white py-8 border-b-4 border-amber-orange">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="text-sm tracking-widest uppercase font-bold mb-2">Est. 2026 | Vol. 1 | No. 1</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
              SUNDAY BLOODY SUNDAY
            </h1>
            <h2 className="text-2xl md:text-3xl italic mb-4">GAZETTE</h2>
            <div className="flex justify-center gap-8 text-xs uppercase tracking-wider">
              <span>March 15, 2026</span>
              <span>•</span>
              <span>Indigenous Justice Edition</span>
              <span>•</span>
              <span>Canada</span>
            </div>
          </div>
          <div className="border-t-2 border-b-2 border-amber-orange py-3 text-center">
            <p className="text-lg italic">
              "When silence is complicity, naming becomes necessary. When private channels fail, public accountability is the only path to justice."
            </p>
          </div>
        </div>
      </header>

      {/* EMBEDDED DOCUMENTARY VIDEO */}
      <section className="bg-black py-12 border-b-4 border-amber-orange">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">WATCH THE DOCUMENTARY</h2>
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              controls
              className="w-full h-full"
              poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp"
            >
              <source
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/sunday-bloody-sunday-documentary-8min_dc1e3b57.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-white text-center mt-4 text-sm italic">8-minute documentary: Sunday Bloody Sunday, Part Two - Indigenous Justice Advocacy</p>
        </div>
      </section>

      {/* FRONT PAGE HEADLINE */}
      <section className="bg-white border-b-4 border-black py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Story */}
            <div className="md:col-span-2 border-r-4 border-black pr-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                SYSTEMIC VIOLENCE CONTINUES
              </h2>
              <h3 className="text-2xl italic text-charcoal/70 mb-6">
                Indigenous Families Demand Accountability From Every Level of Government
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                After years of ghosting, cease-and-desist threats, and institutional failure, Indigenous families across Canada are taking matters into their own hands. Private channels have failed. Public accountability is now the only path to justice.
              </p>
              <p className="text-base leading-relaxed text-charcoal/80 mb-6">
                This is not about one family. This is about systemic violence against Indigenous children, institutional abuse masked as "child protection," and the complete failure of government at every level—federal, provincial, and municipal—to uphold their obligations under Jordan's Principle, the UN Convention on the Rights of the Child, and the Truth and Reconciliation Commission's Calls to Action.
              </p>
              <div className="flex gap-4">
                <a
                  href="/ghosted-by-politician"
                  className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded font-bold transition-colors"
                >
                  Read Full Investigation <ExternalLink size={18} />
                </a>
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-6 py-3 rounded font-bold transition-colors"
                >
                  <Heart size={18} />
                  Support Legal Action
                </a>
              </div>
            </div>

            {/* Side Stories */}
            <div className="space-y-6">
              <div className="border-l-4 border-amber-orange pl-4">
                <h4 className="text-sm uppercase font-bold tracking-wider mb-2">ACCOUNTABILITY TRACKER</h4>
                <p className="text-sm leading-relaxed">
                  7 government bodies. 0 solutions. Years of ghosting documented and exposed.
                </p>
                <a href="/accountability-tracker" className="text-amber-orange font-bold text-sm hover:underline">
                  See Full List →
                </a>
              </div>

              <div className="border-l-4 border-forest-green pl-4">
                <h4 className="text-sm uppercase font-bold tracking-wider mb-2">HALL OF SHAME</h4>
                <p className="text-sm leading-relaxed">
                  Officials who chose silence over justice. Institutions that failed their mandate.
                </p>
                <a href="/hall-of-shame" className="text-forest-green font-bold text-sm hover:underline">
                  View Documentation →
                </a>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="text-sm uppercase font-bold tracking-wider mb-2">SYSTEMIC VIOLATIONS</h4>
                <p className="text-sm leading-relaxed">
                  Pattern of abuse across provinces. Institutional failure documented.
                </p>
                <a href="/systemic-violations-archive" className="text-red-600 font-bold text-sm hover:underline">
                  Read Archive →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE LINKS & RESOURCES */}
      <section className="py-12 bg-forest-green/5 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">ADVOCACY & RESOURCES</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Our Story Links */}
            <div className="bg-white border-4 border-forest-green p-6 rounded">
              <h3 className="text-xl font-bold text-forest-green mb-4">OUR STORY</h3>
              <ul className="space-y-2">
                <li><a href="/barrans-story" className="text-amber-orange hover:text-amber-light font-semibold">→ Barran's Story (Feb 14, 2021)</a></li>
                <li><a href="/trigger-event" className="text-amber-orange hover:text-amber-light font-semibold">→ The Trigger Event (Feb 27)</a></li>
                <li><a href="/mother-abuse-dpj" className="text-amber-orange hover:text-amber-light font-semibold">→ Mother's Abuse & DPJ Failure</a></li>
              </ul>
            </div>

            {/* Accountability Links */}
            <div className="bg-white border-4 border-red-600 p-6 rounded">
              <h3 className="text-xl font-bold text-red-600 mb-4">ACCOUNTABILITY</h3>
              <ul className="space-y-2">
                <li><a href="/dpj-accountability" className="text-amber-orange hover:text-amber-light font-semibold">→ DPJ Accountability</a></li>
                <li><a href="/ghosted-by-politician" className="text-amber-orange hover:text-amber-light font-semibold">→ Ghosted by Politician</a></li>
                <li><a href="/systemic-failures" className="text-amber-orange hover:text-amber-light font-semibold">→ Systemic Failures</a></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="bg-white border-4 border-amber-orange p-6 rounded">
              <h3 className="text-xl font-bold text-amber-orange mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><a href="/resources" className="text-amber-orange hover:text-amber-light font-semibold">→ Resources & References</a></li>
                <li><a href="/childrens-rights" className="text-amber-orange hover:text-amber-light font-semibold">→ Children's Rights & Education</a></li>
                <li><a href="/international-legal" className="text-amber-orange hover:text-amber-light font-semibold">→ International Legal Support</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="bg-white border-4 border-green-600 p-6 rounded">
              <h3 className="text-xl font-bold text-green-600 mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li><a href="/donate-etransfer" className="text-amber-orange hover:text-amber-light font-semibold">→ Donate via e-Transfer</a></li>
                <li><a href="https://www.gofundme.com/f/justice-for-barran" target="_blank" rel="noopener noreferrer" className="text-amber-orange hover:text-amber-light font-semibold">→ Donate via GoFundMe</a></li>
                <li><a href="/share-story" className="text-amber-orange hover:text-amber-light font-semibold">→ Share Your Story</a></li>
              </ul>
            </div>

            {/* Video & Media */}
            <div className="bg-white border-4 border-blue-600 p-6 rounded">
              <h3 className="text-xl font-bold text-blue-600 mb-4">MEDIA & VIDEOS</h3>
              <ul className="space-y-2">
                <li><a href="/video-hub" className="text-amber-orange hover:text-amber-light font-semibold">→ Video Hub (All 9 Videos)</a></li>
                <li><a href="/newspaper-front-page" className="text-amber-orange hover:text-amber-light font-semibold">→ Newspaper Front Page</a></li>
                <li><a href="/timeline-newspaper-archive" className="text-amber-orange hover:text-amber-light font-semibold">→ Timeline Archive</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="bg-white border-4 border-purple-600 p-6 rounded">
              <h3 className="text-xl font-bold text-purple-600 mb-4">CONNECT</h3>
              <ul className="space-y-2">
                <li><a href="https://x.com/helpbarran?s=21" target="_blank" rel="noopener noreferrer" className="text-amber-orange hover:text-amber-light font-semibold">→ Follow on X/Twitter</a></li>
                <li><a href="https://www.tiktok.com/@barranneedsjustice" target="_blank" rel="noopener noreferrer" className="text-amber-orange hover:text-amber-light font-semibold">→ Follow on TikTok</a></li>
                <li><a href="https://www.instagram.com/justiceforbarran" target="_blank" rel="noopener noreferrer" className="text-amber-orange hover:text-amber-light font-semibold">→ Follow on Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OBITUARY SECTION - FALLEN HEROES */}
      <section className="py-12 bg-charcoal/5 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">IN MEMORIAM</h2>
            <h3 className="text-2xl italic text-charcoal/70 mb-4">
              Honoring Fallen Indigenous Heroes & Land Defenders
            </h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              We remember those whose lives were taken by systemic violence, institutional failure, and colonial injustice. Their memory fuels our fight for accountability and systemic change. Their legacy demands justice.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {fallenHeroes.map((hero) => (
              <div key={hero.id} className="bg-white border-4 border-black p-6 hover:shadow-lg transition-shadow">
                {hero.image && (
                  <div className="mb-4 h-48 bg-gray-300 rounded overflow-hidden">
                    <img src={hero.image} alt={hero.name} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="border-b-2 border-charcoal pb-3 mb-3">
                  <h4 className="text-2xl font-bold">{hero.name}</h4>
                  <p className="text-sm italic text-charcoal/70">{hero.dates}</p>
                  <p className="text-sm font-semibold text-amber-orange">{hero.nation}</p>
                </div>

                <p className="text-base leading-relaxed mb-4">{hero.legacy}</p>

                <div className="flex gap-2">
                  <button className="flex-1 bg-black text-white hover:bg-charcoal px-4 py-2 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    Remember
                  </button>
                  <button className="flex-1 bg-amber-orange text-white hover:bg-amber-light px-4 py-2 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2">
                    <Heart size={16} />
                    Honor
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-orange/10 border-l-4 border-amber-orange p-8">
            <h4 className="text-2xl font-bold mb-4">Their Fight Continues Through Us</h4>
            <p className="text-lg leading-relaxed mb-6">
              Every Indigenous child deserves protection. Every victim deserves justice. Every family deserves accountability. We honor the fallen by continuing their fight for systemic change. We demand that institutions be held accountable. We refuse silence. We demand justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a
                href="/how-to-document-your-case"
                className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3 rounded font-bold transition-colors"
              >
                Document Your Case
              </a>
              <a
                href="/donate-etransfer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition-colors"
              >
                <Heart size={20} />
                Fund Legal Action
              </a>
              <a
                href="/video-hub"
                className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors"
              >
                Watch Videos
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded font-bold transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION TRACKER */}
      <section className="py-12 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-orange mb-2">$0</div>
              <p className="text-lg font-semibold">Raised for Legal Fund</p>
              <p className="text-sm text-charcoal/70">Goal: $50,000</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-forest-green mb-2">7</div>
              <p className="text-lg font-semibold">Government Bodies Ghosted</p>
              <p className="text-sm text-charcoal/70">Documented & Exposed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">∞</div>
              <p className="text-lg font-semibold">Supporters Worldwide</p>
              <p className="text-sm text-charcoal/70">Fighting for Justice</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">ENOUGH IS ENOUGH</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            When silence is complicity, naming becomes necessary. When private channels fail, public accountability is the only path to justice. Join us in demanding systemic change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              <Heart size={24} />
              Donate Now
            </a>
            <a
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              <Share2 size={24} />
              Shop & Support
            </a>
            <a
              href="/share-story"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
