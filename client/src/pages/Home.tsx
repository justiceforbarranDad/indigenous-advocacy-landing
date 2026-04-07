import { useState, useEffect } from 'react';
import { ChevronDown, Share2, ExternalLink } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Slide 1/13",
    subtitle: "Historical Context: Bloody Sunday",
    content: "Bloody Sunday refers to violent events in history where civilians were killed by authorities. The most notable incident occurred in Derry, Northern Ireland in 1972, when British soldiers killed 13 unarmed civilians during a civil rights march. This historical tragedy represents systemic violence against marginalized communities demanding justice and equality. Today, Indigenous peoples in Canada face ongoing systemic violence and institutional failures that echo this legacy of oppression.",
    hashtags: ["#BloodyHistory", "#SystemicViolence", "#JusticeMatters"],
    link: "https://en.wikipedia.org/wiki/Bloody_Sunday",
  },
  {
    id: 2,
    title: "Slide 2/13",
    subtitle: "Sunday Bloody Sunday, Part Two",
    content: "Picking up where the 2008 apology failed—ongoing systemic harm to Indigenous families in Quebec/Canada. It started with hope after Harper's 2008 apology for residential schools: 'We are sorry' for cultural genocide, 150k+ kids taken, intergenerational trauma. But in 2025/2026, the same systems still fail Indigenous children.",
    hashtags: ["#EveryChildMatters", "#JusticeForBarran", "#TruthAndReconciliation"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/blooddonuts_28322d94.jpg",
  },
  {
    id: 3,
    title: "Slide 3/13",
    subtitle: "Family Trauma & System Failure",
    content: "Since ~2021, Indigenous family sought help after serious trauma (teen stabbed 3x, major impacts). DPJ (DYP) involved but withdrew Jan 2023—no adequate follow-up, education lost, mental health destroyed. Jordan's Principle (no-delay services for First Nations kids) ignored.",
    hashtags: ["#JordansPrinciple", "#DPJFailure", "#IndigenousRights"],
  },
  {
    id: 4,
    title: "Slide 4/13",
    subtitle: "Political Silence & Intimidation",
    content: "Asked MNA for help on DPJ/IVAC files. Instead of assistance, office sent cease-and-desist warning (Nov 19, 2023): stop all contact or face criminal harassment complaint/police. This is what happened when a constituent asks for help.",
    hashtags: ["#PoliticalAccountability", "#ConstituencyFail"],
  },
  {
    id: 5,
    title: "Slide 5/13",
    subtitle: "Provincial Level Ghosted",
    content: "Provincial level ghosted too—multiple CAQ ministers/officials ignored pleas for intervention, inquiry, real support. CDPDJ refused 2x requests for investigation.",
    hashtags: ["#CAQFailure", "#ProvinceRespond", "#CDPDJ"],
  },
  {
    id: 6,
    title: "Slide 6/13",
    subtitle: "Federal Level Silence",
    content: "Escalated to federal MPs—same silence. No response, no action. Even higher bodies (Protecteur du citoyen, Commissaire à l'éthique, CHRC) say limits on powers, no real change for DPJ decisions.",
    hashtags: ["#FederalFailure", "#MPsRespond"],
  },
  {
    id: 7,
    title: "Slide 7/13",
    subtitle: "Systemic Failures Documented",
    content: "CDPDJ's 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids' health/development. Breaks Article 23 UNCRC, Quebec Charter art. 39, reconciliation spirit.",
    hashtags: ["#SystemicFailure", "#NunavikInquiry", "#UNCRC"],
  },
  {
    id: 8,
    title: "Slide 8/13",
    subtitle: "Protected Expression & Rights",
    content: "Public posts (videos, emails, testimony) call for: independent inquiry, Jordan's Principle application, real support. Protected by Charter s.2(b) freedom of expression (Grant v Torstar 2009 CSC 61), Indigenous rights jurisprudence (2024 CSC 5), responsible communication on public interest.",
    hashtags: ["#FreedomOfExpression", "#IndigenousRights", "#CharterRights"],
  },
  {
    id: 9,
    title: "Slide 9/13",
    subtitle: "Enough is Enough",
    content: "No threats/intimidation—only demanding accountability to protect other Indigenous families. Enough is enough. Victims today deserve better than 'sorry' without change.",
    hashtags: ["#JusticeForBarran", "#TruthAndReconciliation", "#JordansPrinciple"],
  },
  {
    id: 10,
    title: "Slide 10/13",
    subtitle: "Open to Public Debate",
    content: "Open to LIVE debate with any elected official. Sources/emails in pinned/recent posts. Tag/share if you've been ghosted too.",
    hashtags: ["#PublicDebate", "#HoldThemAccountable", "#HelpBarran"],
  },
  {
    id: 11,
    title: "Slide 11/13",
    subtitle: "Direct Call to Action",
    content: "When will there be real action? Independent probe? Jordan applied? This is testimony—for justice, not silence.",
    hashtags: ["#EveryChildMatters", "#IndependentInquiry", "#JordansPrinciple"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/barran-plate_a0ea24a4.jpg",
  },
  {
    id: 12,
    title: "Slide 12/13",
    subtitle: "Ethics & Conduct Reminder",
    content: "Reminder: These officials (MNAs, MPs) + their office staff are bound by conduct rules. They must assist constituents ethically—ghosting/warnings instead of help raises questions.",
    hashtags: ["#EthicsMatters", "#OfficialConduct", "#Accountability"],
  },
  {
    id: 13,
    title: "Slide 13/13",
    subtitle: "Public Accountability: A Warning to History",
    content: "To all elected officials at every level—federal, provincial, municipal—and every staff member who neglected our rights: Your silence is complicity. Our soldiers fought and died for the freedoms you now deny us. Truth and Reconciliation was not a conclusion—it was a beginning you chose to ignore. The reckoning is coming.",
    hashtags: ["#PublicAccountability", "#JusticeForBarran", "#EveryChildMatters", "#TruthAndReconciliation"],
  },
];

export default function Home() {
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
    <div className="min-h-screen bg-cream text-charcoal" style={{ backgroundColor: '#F5F1E8', color: '#2C2416' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, #1B4D3E 0%, #D4A574 50%, #F5F1E8 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Current Truth
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold text-amber-100 mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Before Reconciliation
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
            Indigenous Justice Advocacy • Systemic Accountability • Every Child Matters
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="px-4 py-2 bg-amber-600/80 text-white rounded text-sm font-semibold">#EveryChildMatters</span>
            <span className="px-4 py-2 bg-amber-600/80 text-white rounded text-sm font-semibold">#JusticeForBarran</span>
            <span className="px-4 py-2 bg-amber-600/80 text-white rounded text-sm font-semibold">#TruthAndReconciliation</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* Timeline Container */}
      <div className="relative py-20" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Timeline spine */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-600 to-transparent"></div>

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
                    className="w-6 h-6 rounded-full"
                    style={{
                      backgroundColor: activeSlide === slide.id ? '#D4A574' : '#1B4D3E',
                      boxShadow: activeSlide === slide.id ? '0 0 20px rgba(212, 165, 116, 0.6)' : 'none',
                    }}
                  ></div>
                  {idx < slides.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-amber-600 to-transparent"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 flex-1" style={{ backgroundColor: '#FFFBF7' }}>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                      Slide {slide.id}/13
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1B4D3E' }}>
                    {slide.title}
                  </h2>
                  <h3 className="text-xl text-amber-700 mb-6 font-serif italic" style={{ fontFamily: 'Lora, serif' }}>
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

                  <p className="text-lg leading-relaxed text-gray-800 mb-6" style={{ fontFamily: 'Lora, serif' }}>
                    {slide.content}
                  </p>

                  {slide.link && (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-6 transition-colors"
                    >
                      Learn more <ExternalLink size={16} />
                    </a>
                  )}

                  {slide.hashtags && (
                    <div className="flex flex-wrap gap-2">
                      {slide.hashtags.map((tag, i) => (
                        <span key={i} className="text-sm text-amber-600 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12" style={{ backgroundColor: '#1B4D3E' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Current Truth Before Reconciliation</p>
          <p className="text-amber-100">Indigenous Justice Advocacy • Systemic Accountability • Every Child Matters</p>
        </div>
      </footer>
    </div>
  );
}
