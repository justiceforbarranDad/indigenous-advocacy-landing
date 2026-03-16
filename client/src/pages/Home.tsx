import { useState, useEffect } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { ChevronDown, Share2, ExternalLink, Mail, Users, TrendingUp, Heart } from 'lucide-react';

/**
 * DESIGN SYSTEM: "Orange Sky" — Solemn Memorial / Indigenous Aesthetic
 * Movement: Contemporary Indigenous Memorial Design / Quiet Resistance
 * Palette: Deep Forest Green · Warm Amber/Orange · Cream · Charcoal
 * Typography: Cormorant Garamond (display) · Raleway (subheadings) · Lora (body)
 * Layout: Vertical timeline spine with offset content cards, full-bleed sections
 */

const slides = [
  {
    id: 1,
    title: "Slide 1/12",
    subtitle: "Historical Context: Bloody Sunday",
    content: "Bloody Sunday refers to violent events in history where civilians were killed by authorities. The most notable incident occurred in Derry, Northern Ireland in 1972, when British soldiers killed 13 unarmed civilians during a civil rights march. This historical tragedy represents systemic violence against marginalized communities demanding justice and equality. Today, Indigenous peoples in Canada face ongoing systemic violence and institutional failures that echo this legacy of oppression.",
    hashtags: ["#BloodyHistory", "#SystemicViolence", "#JusticeMatters"],
    link: "https://en.wikipedia.org/wiki/Bloody_Sunday",
  },

  {
    id: 2,
    title: "Slide 2/12",
    subtitle: "The Aftermath - Hospital & Recovery",
    content: "February 14, 2021: A 14-year-old boy stabbed three times—left lung, chest, and back. His iPhone in his front pocket stopped two more stab attempts. Six days hospitalized at Montreal Children's Hospital with a chest tube for three days. The medical staff held him, comforted him, saved his life. At 5 feet 10 inches and 300 lbs, already living with disability and Type 2 diabetes (common in Indigenous communities), Barran showed incredible resilience. Now he has lost weight and is living better, but the trauma remains. He is most comfortable in darkness—the attack happened in the morning. Yet his first words leaving the hospital were: I miss my siblings. Family support sustained him then. Family support sustains him now. Resilience and ongoing struggle, both real.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/slide2-healing-native-art-MTVpDvrQxTCW2rq9vciQzT.webp",
    hashtags: ["#BarransStory", "#Resilience", "#FamilyMatters", "#EveryChildMatters"],
  },

  {
    id: 3,
    title: "Slide 3/12",
    subtitle: "Family Trauma & System Failure",
    content: "Since ~2021, my Indigenous family sought help after serious trauma (teen stabbed 3x, major impacts). DPJ (DYP) involved but withdrew Jan 2023—no adequate follow-up, education lost, mental health destroyed. Jordan's Principle (no-delay services for First Nations kids) ignored.",
    hashtags: ["#JordansPrinciple", "#DPJFailure", "#IndigenousRights"],
    link: "https://fnchildclaims.ca/claims/get-ready/?utm_source=adwords&utm_medium=paidsearch&utm_campaign=SEM2024&gad_source=1&gad_campaignid=20931914112&gbraid=0AAAAAqfJGBCB7dethrV5ASoGz1ycN1wXu&gclid=CjwKCAjwjtTNBhB0EiwAuswYhu06CUXAJzJvEmRmC2PS5ELRmlNhJiBWmtTUHLKTgUuzY9Qz1bM_EBoCJhYQAvD_BwE",
  },
  {
    id: 4,
    title: "Slide 4/12",
    subtitle: "Political Silence & Intimidation",
    content: "I asked my MNA, Céline Haytayan (CAQ, Laval-des-Rapides), for help on DPJ/IVAC files. Instead of assistance, her office sent a cease-and-desist warning (Nov 19, 2023): stop all contact (in-person, phone, email, social) or face criminal harassment complaint/police. This is what happened when a constituent asks for help.",
    hashtags: ["#PoliticalAccountability", "#ConstituencyFail", "#CelineHaytayan"],
  },
  {
    id: 5,
    title: "Slide 5/12",
    subtitle: "Provincial Level Ghosted",
    content: "Provincial level ghosted me too—multiple CAQ ministers/officials ignored pleas for intervention, inquiry, real support. CDPDJ refused 2x my requests for investigation.",
    hashtags: ["#CAQFailure", "#ProvinceRespond", "#CDPDJ"],
    taggedAccounts: ["@BDrainvilleQc", "@SJB_CAQ", "@francoislegault"],
  },
  {
    id: 6,
    title: "Slide 6/12",
    subtitle: "Federal Level Silence",
    content: "Escalated to federal MPs—same silence. No response, no action. Even higher bodies (Protecteur du citoyen, Commissaire à l'éthique, CHRC ref 100021349) say limits on powers, no real change for DPJ decisions.",
    hashtags: ["#FederalFailure", "#MPsRespond", "#CHRCRef100021349"],
    taggedAccounts: ["@AnnieKoutrakis", "@SeanFraserMP"],
  },
  {
    id: 7,
    title: "Slide 7/12",
    subtitle: "Systemic Failures Documented",
    content: "This isn't isolated. CDPDJ's 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids' health/development. My kids pay the price—5+ years of violations. Breaks Article 23 UNCRC, Quebec Charter art. 39, reconciliation spirit.",
    hashtags: ["#SystemicFailure", "#NunavikInquiry", "#UNCRC"],
  },
  {
    id: 8,
    title: "Slide 8/12",
    subtitle: "Protected Expression & Rights",
    content: "My public posts (videos, emails, testimony) call for: independent inquiry, Jordan's Principle application, real support. Protected by Charter s.2(b) freedom of expression (Grant v Torstar 2009 CSC 61), Indigenous rights jurisprudence (2024 CSC 5), responsible communication on public interest.",
    hashtags: ["#FreedomOfExpression", "#IndigenousRights", "#CharterRights"],
  },
  {
    id: 9,
    title: "Slide 9/12",
    subtitle: "Enough is Enough",
    content: "No threats/intimidation—only demanding accountability to protect other Indigenous families. Enough is enough. Victims today deserve better than 'sorry' without change.",
    hashtags: ["#JusticeForBarran", "#TruthAndReconciliation", "#JordansPrinciple"],
  },
  {
    id: 10,
    title: "Slide 10/12",
    subtitle: "Open to Public Debate",
    content: "Open to LIVE Twitter debate with any elected official. Sources/emails in my pinned/recent posts. Tag/share if you've been ghosted too.",
    hashtags: ["#PublicDebate", "#HoldThemAccountable", "#HelpBarran"],
    poll: "Ghosted by a politician on child welfare?",
  },
  {
    id: 11,
    title: "Slide 11/12",
    subtitle: "Direct Call to Action",
    content: "When will there be real action? Independent probe? Jordan applied? This is my testimony—for justice, not silence.",
    hashtags: ["#EveryChildMatters", "#IndependentInquiry", "#JordansPrinciple"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/barran-plate_a0ea24a4.jpg",
    taggedAccounts: ["@CDPDJ1", "@UNChildRights1", "@BDrainvilleQc", "@AnnieKoutrakis", "@protecteurQC", "@AFN", "@hrw"],
  },
  {
    id: 12,
    title: "Slide 12/13",
    subtitle: "Ethics & Conduct Reminder",
    content: "Reminder: These officials (MNAs, MPs) + their office staff are bound by conduct rules. They must assist constituents ethically—ghosting/warnings instead of help raises questions.",
    hashtags: ["#EthicsMatters", "#OfficialConduct", "#Accountability"],
    links: [
      { label: "Quebec Ethics Code", url: "https://www.legisquebec.gouv.qc.ca/en/document/cs/c-23.1" },
      { label: "Government of Canada", url: "https://www.canada.ca/en.html" },
      { label: "Parliament of Canada", url: "https://www.ourcommons.ca/en" },
    ],
  },
  {
    id: 13,
    title: "Slide 13/13",
    subtitle: "Public Accountability: A Warning to History",
    content: "To all elected officials at every level—federal, provincial, municipal—and every staff member who neglected our rights: Your silence is complicity. Our soldiers fought and died for the freedoms you now deny us. Your grandparents, or you yourselves, created this system of oppression. In 2026, it continues as a Sunday Bloody Sunday for countless survivors. Truth and Reconciliation was not a conclusion—it was a beginning you chose to ignore. Stripping pensions from those who enabled this abuse is not revenge; it is accountability. Our present will be tomorrow's history. Your children will read how you truly were as human beings. Those who lied, covered up, and perpetuated this injustice are now part of the historical record. The question is: what will that record say about you? Real survivors deserve a worry-free future—the same security you enjoy. Justice delayed is justice denied. The reckoning is coming.",
    hashtags: ["#PublicAccountability", "#JusticeForBarran", "#EveryChildMatters", "#TruthAndReconciliation", "#SundayBloodyySunday", "#HistoricalReckoning"],
  },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideId = parseInt(entry.target.getAttribute('data-slide-id') || '0');
            setVisibleSlides((prev) => Array.from(new Set([...prev, slideId])));
            setActiveSlide(slideId);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-slide-id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Sunday Bloody Sunday
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-light mb-6 font-serif italic">
            Part Two
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Picking up where the 2008 apology failed—ongoing systemic harm to Indigenous families in Quebec/Canada.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="hashtag-pill">#EveryChildMatters</span>
            <span className="hashtag-pill">#JusticeForBarran</span>
            <span className="hashtag-pill">#TruthAndReconciliation</span>
          </div>
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <video
                controls
                className="absolute inset-0 w-full h-full"
                poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp"
              >
                <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/sunday-bloody-sunday-full-documentary-12min.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Heart size={18} />
              Donate Now
            </a>
            <a
              href="/video-hub"
              className="inline-flex items-center gap-2 bg-forest-green hover:bg-forest-green/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              More Videos
              <ExternalLink size={18} />
            </a>
            <a
              href="https://www.youtube.com/@justiceforBarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* Timeline Container */}
      <div className="relative py-20">
        {/* Timeline spine */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-orange to-transparent"></div>

        {/* Slides */}
        <div className="container max-w-5xl mx-auto px-4">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              data-slide-id={slide.id}
              className={`slide-card mb-16 md:mb-24 transition-all duration-700 ${
                visibleSlides.includes(slide.id) ? 'visible' : ''
              }`}
            >
              <div className="flex gap-8 items-start">
                {/* Timeline dot */}
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <div
                    className={`timeline-dot ${
                      activeSlide === slide.id ? 'active' : ''
                    }`}
                  ></div>
                  {idx < slides.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-amber-orange to-transparent"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 flex-1">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-semibold text-amber-orange uppercase tracking-wider">
                      Slide {slide.id}/13
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-2">
                    {slide.title}
                  </h2>
                  <h3 className="text-xl text-charcoal-light mb-6 font-serif italic">
                    {slide.subtitle}
                  </h3>

                  {slide.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  <p className="text-lg leading-relaxed text-charcoal mb-6">
                    {slide.content}
                  </p>

                  {(slide as any).videoLink && (
                    <a
                      href={(slide as any).videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold mb-6 transition-colors"
                    >
                      Full video <ExternalLink size={16} />
                    </a>
                  )}

                  {slide.link && (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold mb-6 transition-colors"
                    >
                      Official link <ExternalLink size={16} />
                    </a>
                  )}

                  {slide.links && (
                    <div className="mb-6 space-y-2">
                      {slide.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-amber-orange hover:text-amber-light font-semibold transition-colors"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}

                  {slide.taggedAccounts && (
                    <div className="mb-6 p-4 bg-cream-dark rounded-lg">
                      <p className="text-sm font-semibold text-charcoal-light mb-2">
                        Tagged Accounts:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {slide.taggedAccounts.map((account, i) => (
                          <span
                            key={i}
                            className="text-sm font-mono text-amber-orange"
                          >
                            {account}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {slide.poll && (
                    <div className="mb-6 p-4 bg-cream-dark rounded-lg border-l-4 border-amber-orange">
                      <p className="font-semibold text-charcoal mb-3">
                        {slide.poll}
                      </p>
                      <div className="flex gap-3 w-full">
                        <button className="flex-1 min-w-0 px-4 py-2 bg-amber-orange text-white rounded font-semibold hover:bg-amber-light transition-colors whitespace-nowrap">
                          Yes
                        </button>
                        <button className="flex-1 min-w-0 px-4 py-2 border-2 border-amber-orange text-amber-orange rounded font-semibold hover:bg-amber-orange hover:text-white transition-colors whitespace-nowrap">
                          No
                        </button>
                      </div>
                    </div>
                  )}



                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2">
                    {slide.hashtags.map((tag, i) => (
                      <span key={i} className="hashtag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why This Matters - Advocacy Philosophy */}
      <section className="py-20 bg-cream border-t-4 border-b-4 border-forest-green">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">Why This Matters</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              This is raw, father-led advocacy born from lived experience, not detached opinion. Publicly naming sponsors, politicians, and institutions (even shaming them) makes sense in this context—private channels have failed for years, so amplifying via X, docs, links, and direct tags is the tool left to demand accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Private Channels Failed */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-charcoal">
              <div className="text-4xl font-black text-charcoal mb-4">✗</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Private Channels Failed</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Years of emails, calls, meetings with DPJ, politicians, lawyers—all ignored. Cease-and-desist threats instead of help. Ghosting at every level: municipal, provincial, federal.
              </p>
            </div>

            {/* Public Accountability Required */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-amber-orange">
              <div className="text-4xl font-black text-amber-orange mb-4">→</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Public Accountability Required</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                When silence is complicity, naming becomes necessary. Tagging officials, sharing evidence, documenting systemic failures—this is advocacy rooted in urgency and exhaustion.
              </p>
            </div>

            {/* Real Change Needed */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-forest-green">
              <div className="text-4xl font-black text-forest-green mb-4">✓</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Real Change Needed Now</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                The TRC's spirit must extend to preventing violence against Indigenous youth right now, not just memorializing historical harms. Symbolism without action is a shield against real change.
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-forest-green/5 border-l-4 border-forest-green p-8 rounded-lg mb-8">
            <p className="text-charcoal text-lg leading-relaxed mb-4">
              <strong>Your story humanizes the statistics:</strong> Indigenous youth overrepresented in violence, stalled Calls to Action (like #19 on health/safety gaps), and the risk that symbolism becomes a shield against real change.
            </p>
            <p className="text-charcoal/80 text-sm">
              It's exhausting and isolating work, but it's rooted in the urgent need for accountability—and every donation funds this fight for justice.
            </p>
          </div>

          {/* Links to Evidence */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/systemic-violations" className="inline-flex items-center gap-2 bg-forest-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-forest-green/90 transition-colors">
              View Systemic Violations
            </a>
            <a href="https://www.statcan.gc.ca/o1/en/plus/8526-indigenous-health-and-call-reconciliation-canada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-light transition-colors">
              Statistics Canada Report
            </a>
            <a href="https://www2.gov.bc.ca/gov/content/governments/indigenous-peoples/reconciliation/truth-and-reconciliation-commission" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg font-semibold hover:bg-charcoal/90 transition-colors">
              TRC Calls to Action
            </a>
          </div>
        </div>
      </section>

      {/* Advocacy Journey Infographic */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Our Advocacy Journey</h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">From failed private channels to public accountability to real systemic change—this is how justice happens.</p>
          </div>
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/advocacy-journey-infographic_be73289c.webp"
            alt="Advocacy Journey: Private Channels Failed to Public Accountability to Real Change Needed Now"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Donation Tracker Widget */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-forest-green/10 to-amber-orange/10 border-y-4 border-amber-orange">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Donations Received */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-amber-orange">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-amber-orange" />
                <h3 className="text-lg font-bold text-forest-green">Donations Received</h3>
              </div>
              <p className="text-4xl font-black text-amber-orange mb-2">$0.00</p>
              <p className="text-sm text-charcoal/70">From supporters across Canada and internationally</p>
            </div>

            {/* Legal Fund Goal */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-forest-green">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-forest-green" />
                <h3 className="text-lg font-bold text-forest-green">Legal Fund Goal</h3>
              </div>
              <p className="text-4xl font-black text-forest-green mb-2">$50,000</p>
              <p className="text-sm text-charcoal/70">For independent legal action and accountability</p>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-lg font-bold text-forest-green mb-4">Campaign Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div 
                  className="bg-gradient-to-r from-amber-orange to-forest-green h-3 rounded-full transition-all duration-500"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="text-sm font-semibold text-charcoal">0% of goal reached</p>
              <p className="text-xs text-charcoal/60 mt-2">Every donation brings justice closer</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-forest-green mb-4">
              Your support funds legal action to hold institutions accountable
            </p>
            <a
              href="/donate-comprehensive"
              className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
            >
              Donate Now (e-Transfer)
              <Heart size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/cta-bg-gS62ZUZh4HEJCCyf4M6k6g.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Justice for Barran
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            When will there be real action? Independent probe? Jordan's Principle applied? This is my testimony—for justice, not silence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Donate Now (e-Transfer)
              <ExternalLink size={20} />
            </a>

            <a
              href="https://gofund.me/role.flip.tall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border-2 border-white"
            >
              Donate via GoFundMe
              <ExternalLink size={20} />
            </a>

            <a
              href="/share-story"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Share Your Story
              <Share2 size={20} />
            </a>
            <a
              href="https://twitter.com/HelpBarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Follow on X/Twitter
              <Share2 size={20} />
            </a>
            <a
              href="/contact-accountability"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Resources & References
              <ExternalLink size={20} />
            </a>
            <a
              href="/ghosted-by-politician"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Ghosted by a Politician?
              <Share2 size={20} />
            </a>
            <a
              href="/childrens-rights"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Children's Rights & Education
              <ExternalLink size={20} />
            </a>
            <a
              href="/legal-support"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              International Legal Support
              <ExternalLink size={20} />
            </a>
            <a
              href="/parents-involvement"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Parents & Non-Profit
              <Users size={20} />
            </a>
            <a
              href="/indigenous-nations"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Indigenous Nations & Languages
              <ExternalLink size={20} />
            </a>
            <a
              href="/accountability-tracker"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Accountability Tracker
              <ExternalLink size={20} />
            </a>
            <a
              href="/wellness-check"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              The Trigger Event (Feb 27)
              <ExternalLink size={20} />
            </a>
            <a
              href="/dpj-accountability"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              DPJ Accountability
              <ExternalLink size={20} />
            </a>
            <a
              href="/systemic-failures"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Systemic Failures
              <ExternalLink size={20} />
            </a>
            <a
              href="/credits"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Credits & Acknowledgments
              <ExternalLink size={20} />
            </a>
            <a
              href="mailto:justiceforbarran@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Contact via Email
              <Mail size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@barranneedsjustice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Follow on TikTok
              <ExternalLink size={20} />
            </a>
            <a
              href="https://www.reddit.com/user/Dear-Pudding3666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Join on Reddit
              <ExternalLink size={20} />
            </a>
            <a
              href="https://www.instagram.com/justice_for_barran/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-white"
            >
              Follow on Instagram
              <ExternalLink size={20} />
            </a>
            <a
              href="/contact-accountability"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-red-600"
            >
              Contact & Accountability
              <Mail size={20} />
            </a>
            <a
              href="/barrans-story"
              className="inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-forest-green/80 text-cream px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-forest-green"
            >
              Barran's Story (Feb 14, 2021)
              <ExternalLink size={20} />
            </a>
            <a
              href="/mother-abuse-dpj"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg border border-amber-orange"
            >
              Mother's Abuse & DPJ Failure
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-cream py-12">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p className="mb-4">
            #EveryChildMatters · #JusticeForBarran · #TruthAndReconciliation
          </p>
          <p className="text-sm opacity-80">
            A testimony for justice. Protected expression under Canadian Charter of Rights and Freedoms.
          </p>
        </div>
      </footer>
    </div>
  );
}
