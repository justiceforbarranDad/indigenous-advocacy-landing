import { useState } from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

export default function TimelineNewspaperArchive() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const editions = [
    {
      year: 2021,
      date: "February 14, 2021",
      edition: "EXTRA - SPECIAL EDITION",
      isColor: false,
      headline: "14-Year-Old Indigenous Boy Stabbed Three Times",
      subheadline: "Violent Attack Leaves Family Desperate for Help",
      byline: "Staff Report",
      content: "On the morning of February 14, 2021, a 14-year-old Indigenous boy was attacked and stabbed three times. The attacker struck his left lung, his chest, and his back. The boy's iPhone in his front pocket stopped two additional stab attempts. He was rushed to Montreal Children's Hospital where he spent six days hospitalized with a chest tube for three days.",
      details: [
        "6 days hospitalized at Montreal Children's Hospital",
        "3-day chest tube placement",
        "3 stab wounds: left lung, chest, back",
        "2 additional stab attempts stopped by iPhone",
        "First words leaving hospital: 'I miss my siblings'"
      ]
    },
    {
      year: 2021,
      date: "2021-2023",
      edition: "VOLUME 1, ISSUE 2",
      isColor: false,
      headline: "Child Protection Services Involved But Withdrawn",
      subheadline: "Family Left Without Support After DPJ Withdrawal",
      byline: "Investigation Team",
      content: "Following the stabbing, the family reached out to DPJ (Direction de la Protection de la Jeunesse) for help. The agency became involved but provided inadequate support. By January 2023, DPJ was withdrawn from the case entirely—no adequate follow-up, education lost, mental health destroyed.",
      details: [
        "DPJ involvement: 2021-2023",
        "Inadequate support provided",
        "Withdrawn January 2023",
        "Jordan's Principle ignored",
        "No follow-up services"
      ]
    },
    {
      year: 2023,
      date: "November 19, 2023",
      edition: "VOLUME 2, ISSUE 11",
      isColor: false,
      headline: "MNA Sends Cease-and-Desist to Constituent Seeking Help",
      subheadline: "Political Intimidation Instead of Support",
      byline: "Political Correspondent",
      content: "When the father asked his MNA, Céline Haytayan (CAQ, Laval-des-Rapides), for help on DPJ and IVAC files, instead of assistance, her office sent a cease-and-desist warning. The warning stated: stop all contact (in-person, phone, email, social media) or face criminal harassment complaint and police involvement.",
      details: [
        "Cease-and-desist warning issued",
        "Threat of criminal harassment charges",
        "Threat of police involvement",
        "Constituent asking for help intimidated",
        "Political accountability avoided"
      ]
    },
    {
      year: 2023,
      date: "2023-2026",
      edition: "VOLUME 3, ISSUE 1",
      isColor: true,
      headline: "Assembly of First Nations Refuses to Help Indigenous Family",
      subheadline: "AFN Ghosting Continues for Years",
      byline: "Indigenous Affairs Reporter",
      content: "The family reached out to the Assembly of First Nations (AFN) for support. AFN refused to help, stating that the family was not 'status' or part of their band, despite being First Nations children in need of support. For over five years, AFN has remained silent.",
      details: [
        "AFN refusal: 'not status or band member'",
        "Despite being First Nations children",
        "5+ years of silence",
        "Indigenous organization fails Indigenous children",
        "No support for vulnerable youth"
      ]
    },
    {
      year: 2023,
      date: "2023-2026",
      edition: "VOLUME 3, ISSUE 2",
      isColor: true,
      headline: "Prime Minister's Office Ignores Pleas for Federal Intervention",
      subheadline: "Federal Government Silent on Systemic Failures",
      byline: "Federal Correspondent",
      content: "The family escalated to the Prime Minister's Office. No response. No action. Complete ghosting despite repeated contact attempts. The federal government has shown indifference to the systemic failures affecting Indigenous children.",
      details: [
        "PMO: No response",
        "No action taken",
        "Repeated contact attempts ignored",
        "Federal indifference documented",
        "Systemic failures unaddressed"
      ]
    },
    {
      year: 2023,
      date: "2023-2026",
      edition: "VOLUME 3, ISSUE 3",
      isColor: true,
      headline: "Amnesty Canada Silent on Human Rights Violations",
      subheadline: "Human Rights Organization Fails to Advocate",
      byline: "Human Rights Correspondent",
      content: "Despite having a mandate to defend human rights, Amnesty Canada provided no response to requests for support. A human rights organization failed to advocate for vulnerable children.",
      details: [
        "Amnesty Canada: No response",
        "Mandate to defend human rights: ignored",
        "Vulnerable children abandoned",
        "NGO accountability absent",
        "5+ years of silence"
      ]
    },
    {
      year: 2023,
      date: "2023-2026",
      edition: "VOLUME 3, ISSUE 4",
      isColor: true,
      headline: "Legal Profession Abandons Vulnerable Indigenous Family",
      subheadline: "Not a Single Lawyer Steps Up to Help",
      byline: "Legal Affairs Reporter",
      content: "Not a single lawyer stepped up to help protect vulnerable Indigenous children. The legal profession, bound by oath to uphold justice and defend the vulnerable, has broken that oath. Many lawyers are paid by the government, creating a conflict of interest that prevents them from challenging systemic failures.",
      details: [
        "Zero lawyers willing to help",
        "Legal profession oath broken",
        "Conflict of interest: government funding",
        "Systemic failures unchallenged",
        "Justice system fails vulnerable children"
      ]
    },
    {
      year: 2026,
      date: "February 27, 2026",
      edition: "VOLUME 4, ISSUE 2 - SPECIAL REPORT",
      isColor: true,
      headline: "Governor General's Wellness Check Fails to Assess Children",
      subheadline: "Another Institutional Failure",
      byline: "Investigative Team",
      content: "On February 27, 2026, the Governor General's office conducted a wellness check. The biological father only spoke with a receptionist—not with the children who needed help. No proper assessment of the children's needs. No real intervention. Just another institutional failure.",
      details: [
        "Wellness check conducted",
        "Father spoke with receptionist only",
        "Children not properly assessed",
        "No real intervention",
        "Systemic failure continues"
      ]
    },
    {
      year: 2026,
      date: "2021-2026",
      edition: "FINAL EDITION - RETROSPECTIVE",
      isColor: true,
      headline: "Five Years of Ghosting Reveals Systemic Failure",
      subheadline: "Institutional Abandonment Across All Sectors",
      byline: "Chief Correspondent",
      content: "From 2021 to 2026, this family has been ghosted by multiple elected officials at federal, provincial, and municipal levels. Indigenous organizations. Human rights groups. Government agencies. The entire legal profession. This is not an isolated case. This is systemic failure across all sectors of Canadian society.",
      details: [
        "Politicians: Federal, Provincial, Municipal",
        "Indigenous organizations: AFN",
        "Human rights groups: Amnesty Canada",
        "Government agencies: PMO, Legal Aid Quebec",
        "Legal profession: Complete abandonment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Audio Player Section */}
      <section className="py-12 md:py-16 bg-forest-green text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Audio Narration Available</h2>
              <p className="text-white/90">Listen to the complete timeline story (5 minutes 31 seconds)</p>
            </div>
            <button
              onClick={toggleAudio}
              className="flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              {isPlaying ? (
                <>
                  <Pause size={20} />
                  Pause Audio
                </>
              ) : (
                <>
                  <Play size={20} />
                  Play Audio Narration
                </>
              )}
            </button>
          </div>
          <audio
            ref={setAudioRef}
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/timeline-narration.wav"
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          />
        </div>
      </section>

      {/* Newspaper Editions */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {editions.map((edition, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                edition.isColor
                  ? 'bg-white border-4 border-amber-orange shadow-lg'
                  : 'bg-yellow-50 border-4 border-yellow-900 shadow-xl'
              }`}
              style={{
                backgroundImage: edition.isColor
                  ? 'none'
                  : 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
              }}
            >
              {/* Newspaper Masthead */}
              <div
                className={`border-b-4 p-6 md:p-8 text-center ${
                  edition.isColor
                    ? 'bg-white border-amber-orange'
                    : 'bg-yellow-100 border-yellow-900'
                }`}
              >
                <div className={`text-xs md:text-sm font-bold tracking-widest mb-2 ${
                  edition.isColor ? 'text-amber-orange' : 'text-yellow-800'
                }`}>
                  {edition.edition}
                </div>
                <h1
                  className={`text-3xl md:text-4xl font-black tracking-tight mb-1 ${
                    edition.isColor ? 'text-forest-green' : 'text-yellow-900'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  JUSTICE FOR BARRAN
                </h1>
                <p
                  className={`text-xs md:text-sm font-semibold tracking-widest ${
                    edition.isColor ? 'text-charcoal' : 'text-yellow-800'
                  }`}
                >
                  A Chronicle of Systemic Failure & Institutional Abandonment
                </p>
                <div
                  className={`text-xs md:text-sm font-bold mt-3 ${
                    edition.isColor ? 'text-amber-orange' : 'text-yellow-800'
                  }`}
                >
                  {edition.date}
                </div>
              </div>

              {/* Newspaper Content */}
              <div className="p-6 md:p-8 border-b-2" style={{
                borderColor: edition.isColor ? '#d97706' : '#b8860b'
              }}>
                {/* Headline */}
                <h2
                  className={`text-2xl md:text-3xl font-black leading-tight mb-2 ${
                    edition.isColor ? 'text-forest-green' : 'text-yellow-900'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {edition.headline}
                </h2>

                {/* Subheadline */}
                <p
                  className={`text-lg md:text-xl font-bold mb-3 italic ${
                    edition.isColor ? 'text-amber-orange' : 'text-yellow-800'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {edition.subheadline}
                </p>

                {/* Byline */}
                <p
                  className={`text-xs md:text-sm font-semibold mb-4 ${
                    edition.isColor ? 'text-charcoal/70' : 'text-yellow-900/70'
                  }`}
                >
                  By {edition.byline}
                </p>

                {/* Article Content */}
                <p
                  className={`text-sm md:text-base leading-relaxed mb-6 ${
                    edition.isColor ? 'text-charcoal' : 'text-yellow-900'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {edition.content}
                </p>
              </div>

              {/* Key Facts Section */}
              <div className="p-6 md:p-8">
                <h3
                  className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                    edition.isColor ? 'text-amber-orange' : 'text-yellow-800'
                  }`}
                >
                  KEY FACTS & TIMELINE
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {edition.details.map((detail, i) => (
                    <div key={i} className="flex gap-3">
                      <span
                        className={`font-black text-lg flex-shrink-0 ${
                          edition.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}
                      >
                        ■
                      </span>
                      <p
                        className={`text-xs md:text-sm leading-relaxed ${
                          edition.isColor ? 'text-charcoal' : 'text-yellow-900'
                        }`}
                      >
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edition Indicator */}
              <div
                className={`px-6 md:px-8 py-3 text-right border-t-2 ${
                  edition.isColor
                    ? 'bg-white border-amber-orange'
                    : 'bg-yellow-100 border-yellow-900'
                }`}
                style={{
                  borderColor: edition.isColor ? '#d97706' : '#b8860b'
                }}
              >
                <p
                  className={`text-xs font-semibold ${
                    edition.isColor ? 'text-charcoal/60' : 'text-yellow-900/60'
                  }`}
                >
                  {edition.isColor ? '🌈 Color Edition' : '⬛ Black & White Edition'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Transition Explanation */}
      <section className="py-16 md:py-24 bg-white border-t-4 border-forest-green">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-8 text-center">
            Design Meaning: Black & White to Color
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-yellow-50 border-4 border-yellow-900 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">2020-2023: Black & White</h3>
              <p className="text-yellow-900 leading-relaxed">
                Raw, harsh, documentary style. The years of darkness, trauma, and institutional failure. No hope. No color. Just the brutal reality of systemic abandonment across all sectors of Canadian society.
              </p>
            </div>
            <div className="p-6 bg-white border-4 border-amber-orange rounded-lg">
              <h3 className="text-xl font-bold text-forest-green mb-3">2024-2026: Color Emerging</h3>
              <p className="text-charcoal leading-relaxed">
                Hope, healing, and action emerging. The transition from darkness to light. The fight for accountability. The demand for justice. Color represents the awakening, the visibility, and the determination to expose systemic failures and demand change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">This is Systemic Failure</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Five years of ghosting by politicians, Indigenous organizations, human rights groups, government agencies, and the legal profession. This is not an isolated case. This is institutional abandonment documented in the historical record.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/ghosted-by-politician" className="bg-amber-orange hover:bg-amber-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Demand Accountability
            </a>
            <a href="/donate-comprehensive" className="bg-white hover:bg-gray-100 text-forest-green font-bold py-3 px-8 rounded-lg transition-colors">
              Support This Movement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
