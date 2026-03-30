import { useState, useEffect } from 'react';
import { ChevronDown, Share2, ExternalLink, CheckCircle, AlertCircle, Target } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Slide 1/15",
    subtitle: "Sunday Bloody Sunday, Part Three",
    content: "From Silence to Action: Building the Movement for Indigenous Justice and Systemic Reform",
    hashtags: ["#SundayBloodyySunday", "#SystemicChange", "#JusticeForBarran"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp",
  },
  {
    id: 2,
    title: "Slide 2/15",
    subtitle: "Where We Stand: 2026 Assessment",
    content: "Five years after Barran's stabbing, we assess what has changed and what remains broken. This is not a story of failure alone—it is a story of resistance, documentation, and the building of a movement that refuses to be silenced.",
    hashtags: ["#FiveYearsLater", "#AssessmentTime", "#MovementBuilding"],
  },
  {
    id: 3,
    title: "Slide 3/15",
    subtitle: "The Accountability Scorecard",
    content: "Federal Level: Promises made, commitments ignored. Provincial Level: CAQ government continues systemic neglect. Municipal Level: Local services remain underfunded and culturally inappropriate. Judicial Level: Cases pending, justice delayed. Community Level: Indigenous families organizing, documenting, and demanding change.",
    hashtags: ["#Accountability", "#Scorecard", "#AllLevels"],
  },
  {
    id: 4,
    title: "Slide 4/15",
    subtitle: "What We've Documented",
    content: "Over 5 years, we have compiled: Medical records showing systemic negligence. DPJ files exposing institutional failures. Political correspondence proving ghosting and intimidation. Legal violations documented by human rights organizations. Media coverage reaching thousands. Community testimonies from 70+ Indigenous families facing identical systemic failures.",
    hashtags: ["#Documentation", "#Evidence", "#Proof"],
  },
  {
    id: 5,
    title: "Slide 5/15",
    subtitle: "The Cost of Inaction",
    content: "While we waited for justice: Barran's education disrupted. Mental health deteriorated without adequate support. Other Indigenous children faced identical system failures. Legal costs mounted without compensation. Families continued to suffer in silence. The pattern repeated across Canada.",
    hashtags: ["#CostOfInaction", "#EveryChildMatters", "#NoMoreWaiting"],
  },
  {
    id: 6,
    title: "Slide 6/15",
    subtitle: "Demand 1: Independent Public Inquiry",
    content: "We demand a federal independent inquiry into systemic failures in child protection across all provinces. Scope: DPJ practices, IVAC failures, Jordan's Principle implementation gaps, and institutional racism. Timeline: 18-month investigation with public hearings. Outcome: Binding recommendations for reform.",
    hashtags: ["#IndependentInquiry", "#PublicHearings", "#Reform"],
    link: "https://www.canada.ca/en.html",
  },
  {
    id: 7,
    title: "Slide 7/15",
    subtitle: "Demand 2: Jordan's Principle - Full Implementation",
    content: "Jordan's Principle must become law, not suggestion. No-delay funding for Indigenous children's services. Direct payments to First Nations, not bureaucratic gatekeeping. Accountability mechanisms with real consequences for non-compliance. Annual audits with public reporting.",
    hashtags: ["#JordansPrinciple", "#NoDelay", "#Funding"],
  },
  {
    id: 8,
    title: "Slide 8/15",
    subtitle: "Demand 3: Institutional Accountability",
    content: "Officials who enabled abuse must face consequences. DPJ directors who ignored protocols: removal from office. Politicians who ghosted constituents: public record and electoral consequences. Bureaucrats who violated rights: disciplinary action. Compensation for victims: mandatory and substantial.",
    hashtags: ["#Accountability", "#Consequences", "#Justice"],
  },
  {
    id: 9,
    title: "Slide 9/15",
    subtitle: "Demand 4: Cultural Competency & Indigenous Leadership",
    content: "Child protection must be led by Indigenous people. 50% of decision-making positions in DPJ must be filled by Indigenous professionals. Cultural training mandatory for all staff. Community oversight boards with veto power. Indigenous languages and practices integrated into all services.",
    hashtags: ["#IndigenousLeadership", "#CulturalCompetency", "#CommunityControl"],
  },
  {
    id: 10,
    title: "Slide 10/15",
    subtitle: "Demand 5: Transparency & Public Records",
    content: "All child protection files must be accessible to families within 30 days. Decision-making processes must be documented and explained. Complaints mechanisms must be independent and binding. Annual public reports on outcomes, demographics, and systemic issues. No hiding behind confidentiality when abuse is systemic.",
    hashtags: ["#Transparency", "#PublicRecords", "#RightToKnow"],
  },
  {
    id: 11,
    title: "Slide 11/15",
    subtitle: "The Movement: Who's Joining",
    content: "Indigenous organizations across Canada. Human rights groups. Legal advocacy networks. Academic researchers documenting systemic failures. Media outlets investigating institutional abuse. International observers monitoring Canada's compliance with UN conventions. Families who have lived this nightmare.",
    hashtags: ["#Movement", "#Coalition", "#Together"],
  },
  {
    id: 12,
    title: "Slide 12/15",
    subtitle: "How You Can Act Right Now",
    content: "Sign the petition for independent inquiry. Share Barran's story with your networks. Contact your MP, MNA, and municipal representative. Donate to support legal action and advocacy. Document your own family's experience with systemic failures. Join local Indigenous justice groups. Vote for politicians committed to real reform.",
    hashtags: ["#ActNow", "#GetInvolved", "#JoinTheMovement"],
  },
  {
    id: 13,
    title: "Slide 13/15",
    subtitle: "The Legal Path Forward",
    content: "Class action lawsuit against DPJ for systemic discrimination. Human rights complaints to provincial and federal bodies. Charter challenges to unconstitutional policies. International complaints to UN human rights mechanisms. Civil suits for damages and compensation. Criminal investigations where abuse occurred.",
    hashtags: ["#LegalAction", "#JusticeSystem", "#Accountability"],
  },
  {
    id: 14,
    title: "Slide 14/15",
    subtitle: "A Message to Decision-Makers",
    content: "You cannot ignore this forever. The documentation is complete. The evidence is overwhelming. The movement is growing. History is watching. Your grandchildren will read about what you did—or didn't do—in 2026. Choose to be on the right side of history. Choose justice. Choose reform. Choose to protect Indigenous children.",
    hashtags: ["#MessageToPowermakers", "#HistoryIsWatching", "#ChooseJustice"],
  },
  {
    id: 15,
    title: "Slide 15/15",
    subtitle: "The Future We're Building",
    content: "A Canada where Indigenous children are protected, not harmed. Where systemic failures are met with accountability, not silence. Where families have access to justice, not bureaucratic dead-ends. Where reconciliation means real change, not empty apologies. This is what we're fighting for. This is what we will achieve.",
    hashtags: ["#FutureWeBuild", "#JusticeForBarran", "#EveryChildMatters", "#TruthAndReconciliation"],
  },
];

export default function SundayBloodyySundayPart3() {
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
            Part Three
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            From Silence to Action: Building the Movement for Indigenous Justice and Systemic Reform
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <span className="hashtag-pill">#SystemicChange</span>
            <span className="hashtag-pill">#JusticeForBarran</span>
            <span className="hashtag-pill">#IndigenousRights</span>
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
                      {slide.title}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-2">
                    {slide.subtitle}
                  </h2>

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

                  {slide.link && (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold mb-6 transition-colors"
                    >
                      Learn More <ExternalLink size={16} />
                    </a>
                  )}

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {slide.hashtags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm bg-amber-orange/10 text-amber-orange px-3 py-1 rounded-full border border-amber-orange/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Indicators */}
                  {slide.id >= 6 && slide.id <= 10 && (
                    <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-600 rounded">
                      <div className="flex items-center gap-2 text-green-900 font-semibold">
                        <Target size={18} />
                        Key Demand
                      </div>
                    </div>
                  )}

                  {slide.id === 11 && (
                    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                      <div className="flex items-center gap-2 text-blue-900 font-semibold">
                        <CheckCircle size={18} />
                        Growing Coalition
                      </div>
                    </div>
                  )}

                  {slide.id === 14 && (
                    <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600 rounded">
                      <div className="flex items-center gap-2 text-red-900 font-semibold">
                        <AlertCircle size={18} />
                        Critical Message
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-forest-green text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 leading-relaxed">
            This is not just Barran's story. This is the story of thousands of Indigenous families facing systemic failure. Together, we can demand change. Together, we can build justice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Share2 size={20} />
              Share This Story
            </button>
            <a
              href="/donate"
              className="bg-white text-forest-green hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Support Justice
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
