import { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      style: "old-print",
      headline: "14-Year-Old Indigenous Boy Stabbed Three Times",
      subheadline: "Family Seeks Help After Violent Attack",
      content: "On the morning of February 14, 2021, a 14-year-old Indigenous boy was attacked and stabbed three times. The attacker struck his left lung, his chest, and his back. The boy's iPhone in his front pocket stopped two additional stab attempts. He was rushed to Montreal Children's Hospital where he spent six days hospitalized with a chest tube for three days. Medical staff held him, comforted him, and saved his life.",
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
      style: "transition",
      headline: "Child Protection Services Involved But Withdrawn",
      subheadline: "Family Left Without Support After DPJ Withdrawal",
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
      style: "modern",
      headline: "MNA Sends Cease-and-Desist to Constituent Seeking Help",
      subheadline: "Political Intimidation Instead of Support",
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
      style: "digital",
      headline: "Assembly of First Nations Refuses to Help Indigenous Family",
      subheadline: "AFN Ghosting Continues for Years",
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
      style: "digital",
      headline: "Prime Minister's Office Ignores Pleas for Federal Intervention",
      subheadline: "Federal Government Silent on Systemic Failures",
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
      style: "digital",
      headline: "Amnesty Canada Silent on Human Rights Violations",
      subheadline: "Human Rights Organization Fails to Advocate",
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
      style: "digital",
      headline: "Legal Profession Abandons Vulnerable Indigenous Family",
      subheadline: "Not a Single Lawyer Steps Up to Help",
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
      style: "digital",
      headline: "Governor General's Wellness Check Fails to Assess Children",
      subheadline: "Another Institutional Failure",
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
      style: "digital",
      headline: "Five Years of Ghosting Reveals Systemic Failure",
      subheadline: "Institutional Abandonment Across All Sectors",
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-forest-green to-forest-green/80">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timeline Newspaper Archive</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            A chronological record of systemic failure, ghosting, and ongoing struggle from 2021 to 2026. Read the story or listen to the audio narration for accessibility.
          </p>
          
          {/* Audio Player */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={toggleAudio}
                className="flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white font-bold py-3 px-6 rounded-lg transition-colors"
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
              <div className="flex items-center gap-2 text-white">
                <Volume2 size={20} />
                <span className="font-semibold">Duration: 5 minutes 31 seconds</span>
              </div>
            </div>
            <audio
              ref={setAudioRef}
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/timeline-narration.wav"
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />
            <p className="text-white/80 text-sm mt-4">
              Audio narration available for accessibility. Male voice narration of the complete timeline story.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          {/* Timeline Spine */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-green via-amber-orange to-forest-green"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {editions.map((edition, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-8 h-8 bg-amber-orange rounded-full border-4 border-background shadow-lg"></div>

                  {/* Newspaper Card */}
                  <div className={`ml-16 md:ml-0 md:${idx % 2 === 0 ? 'mr-auto md:w-5/12 md:pr-8' : 'ml-auto md:w-5/12 md:pl-8'}`}>
                    <div className={`p-6 md:p-8 rounded-lg border-2 transition-all hover:shadow-lg ${
                      edition.style === 'old-print'
                        ? 'bg-yellow-50 border-yellow-800 text-yellow-900'
                        : edition.style === 'transition'
                        ? 'bg-gray-100 border-gray-800 text-gray-900'
                        : 'bg-white border-forest-green text-foreground'
                    }`}>
                      {/* Newspaper Header */}
                      <div className={`border-b-2 pb-3 mb-4 ${
                        edition.style === 'old-print'
                          ? 'border-yellow-800'
                          : edition.style === 'transition'
                          ? 'border-gray-800'
                          : 'border-forest-green'
                      }`}>
                        <p className={`text-xs font-bold tracking-widest ${
                          edition.style === 'old-print'
                            ? 'text-yellow-800'
                            : edition.style === 'transition'
                            ? 'text-gray-800'
                            : 'text-forest-green'
                        }`}>
                          {edition.date.toUpperCase()}
                        </p>
                      </div>

                      {/* Headline */}
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                        edition.style === 'old-print'
                          ? 'text-yellow-900'
                          : edition.style === 'transition'
                          ? 'text-gray-900'
                          : 'text-forest-green'
                      }`}>
                        {edition.headline}
                      </h3>

                      {/* Subheadline */}
                      <p className={`text-sm md:text-base font-semibold mb-4 italic ${
                        edition.style === 'old-print'
                          ? 'text-yellow-800'
                          : edition.style === 'transition'
                          ? 'text-gray-700'
                          : 'text-amber-orange'
                      }`}>
                        {edition.subheadline}
                      </p>

                      {/* Content */}
                      <p className="text-sm md:text-base leading-relaxed mb-4">
                        {edition.content}
                      </p>

                      {/* Details */}
                      <div className={`border-t pt-4 ${
                        edition.style === 'old-print'
                          ? 'border-yellow-800'
                          : edition.style === 'transition'
                          ? 'border-gray-800'
                          : 'border-forest-green'
                      }`}>
                        <p className={`text-xs font-bold mb-2 ${
                          edition.style === 'old-print'
                            ? 'text-yellow-800'
                            : edition.style === 'transition'
                            ? 'text-gray-800'
                            : 'text-forest-green'
                        }`}>
                          KEY FACTS
                        </p>
                        <ul className="space-y-1">
                          {edition.details.map((detail, i) => (
                            <li key={i} className="text-xs md:text-sm flex gap-2">
                              <span className="text-amber-orange font-bold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Notice */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-forest-green">
            Accessibility
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-lg border-2 border-forest-green">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-6 h-6 text-amber-orange" />
                <h3 className="font-bold text-lg">Audio Narration</h3>
              </div>
              <p className="text-foreground/70">
                Complete audio narration of the timeline story is available for blind and visually impaired users. Duration: 5 minutes 31 seconds.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border-2 border-forest-green">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-6 h-6 text-amber-orange" />
                <h3 className="font-bold text-lg">Screen Reader Compatible</h3>
              </div>
              <p className="text-foreground/70">
                All text content is properly structured for screen readers. Full accessibility for users with visual impairments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">This is Systemic Failure</h2>
          <p className="text-lg opacity-90 mb-8">
            Five years of ghosting by politicians, Indigenous organizations, human rights groups, government agencies, and the legal profession. This is not an isolated case. This is institutional abandonment.
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
