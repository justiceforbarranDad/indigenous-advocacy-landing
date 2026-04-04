import { useState } from 'react';
import { AlertTriangle, Volume2, ExternalLink, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SuppressionEvent {
  date: string;
  institution: string;
  action: string;
  details: string;
  impact: string;
  status: 'ghosting' | 'denial' | 'removal' | 'intimidation';
}

const suppressionTimeline: SuppressionEvent[] = [
  {
    date: 'November 2024 - Present',
    institution: 'CRARR (Center for Research-Action on Race Relations)',
    action: 'Legal Support & Judicial Review',
    details: 'Fo Niemi (CRARR Director General) and team working on request for revision or judicial review of CDPDJ decision by Superior Court. CRARR filed original complaint alleging systemic racism and Jordan\'s Principle failure.',
    impact: 'Legal pathway to challenge immunity law protection and hold system accountable',
    status: 'ghosting',
  },
  {
    date: 'February 22, 2026',
    institution: 'APTN (Aboriginal Peoples Television Network)',
    action: 'Video Report Published',
    details: 'APTN published national news report covering systemic racism, Jordan\'s Principle failure, and immunity law abuse in Quebec\'s youth protection system. Report: https://www.youtube.com/watch?v=P7RT-6Y2qrg',
    impact: 'Story reached Indigenous media audience, brought attention to systemic failures',
    status: 'removal',
  },
  {
    date: 'Post-Publication (February 2026 - Present)',
    institution: 'APTN (Aboriginal Peoples Television Network)',
    action: 'Ghosting - No Explanation',
    details: 'APTN ceased all communication and follow-up. No explanation provided. No accountability reporting. No investigation into the systemic failures documented. Complete institutional silence after initial coverage.',
    impact: 'Story disappeared from media narrative. No sustained pressure for accountability. Institutional suppression through silence.',
    status: 'ghosting',
  },
  {
    date: 'April 23, 2021 - Present (14+ months)',
    institution: 'DPJ Laval (CISSS Laval) - Split Custody Failure',
    action: 'Mental Health Support Denial & Systemic Gap',
    details: 'Barran stabbed 3 times at age 14 at mother\'s house (Paisley location - Jean Tsannie\'s residence). DPJ involved with biological father, NOT with mother. Tania Lechasseur (DPJ worker) denied request for English-speaking psychologist, claiming mental health support "not in judgment." François Duffy (CISSS Laval) did not respond to requests for Batsha (Montreal Native center) referral. Children told they cannot get CLSC help because "DPJ is in your life" - but DPJ not involved with mother where attack occurred.',
    impact: 'Children\'s mental health destroyed. Systemic failure to provide culturally appropriate care. Split custody = split responsibility = no protection. Jordan\'s Principle ignored. Barran stabbed at mother\'s house but father being monitored/blamed.',
    status: 'ghosting',
  },
  {
    date: 'November 19, 2023',
    institution: 'Céline Haytayan (MNA, CAQ - Laval-des-Rapides)',
    action: 'Cease-and-Desist Warning',
    details: 'When constituent asked for help with DPJ/IVAC files, received cease-and-desist warning threatening criminal harassment complaint if contact continued (in-person, phone, email, social media).',
    impact: 'Intimidation tactic to silence advocacy. Violates constituent right to seek help from elected representative.',
    status: 'intimidation',
  },
  {
    date: 'Multiple Dates',
    institution: 'Provincial Ministers & Officials (CAQ Government)',
    action: 'Complete Ghosting',
    details: 'Multiple requests to CAQ ministers/officials for intervention, inquiry, and support were ignored. No response. No acknowledgment. No action.',
    impact: 'Institutional silence at provincial level. Pattern of non-responsiveness to constituent pleas.',
    status: 'ghosting',
  },
  {
    date: 'Multiple Dates',
    institution: 'Federal MPs (Sean Fraser, Annie Koutrakis)',
    action: 'Complete Ghosting',
    details: 'Escalated to federal MPs - same pattern of silence. No response. No action. No acknowledgment of constituent concerns.',
    impact: 'Federal level complicity through silence. Systemic failure across all government levels.',
    status: 'ghosting',
  },
  {
    date: 'April 2024 - Present',
    institution: 'CDPDJ (Quebec Human Rights Commission)',
    action: 'Investigation Refusal & Immunity Law Protection',
    details: 'CDPDJ refused investigation twice, citing immunity laws and inability to prove "bad faith." Article 309 of Youth Protection Act (LPJ) grants immunity to DPJ workers for actions taken "in good faith." This immunity clause protects workers even when systemic racism and Jordan\'s Principle violations are documented.',
    impact: 'Immunity laws used as institutional shield to avoid accountability for systemic failures. Workers protected even when acting with negligence or systemic bias.',
    status: 'denial',
  },
  {
    date: 'Multiple Submissions',
    institution: 'Protecteur du citoyen (Quebec Ombudsman)',
    action: 'Limited Response',
    details: 'Ombudsman cited limits on powers. No real change for DPJ decisions. Institutional limitations used as excuse for inaction.',
    impact: 'Ombudsman unable/unwilling to intervene. Another institutional barrier to accountability.',
    status: 'ghosting',
  },
];

const statusConfig = {
  ghosting: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Institutional Ghosting' },
  denial: { icon: XCircle, color: 'text-orange-600', bg: 'bg-orange-50', label: 'Denial/Refusal' },
  removal: { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Content Removed' },
  intimidation: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', label: 'Intimidation' },
};

export default function CensorshipAndSuppression() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [showSirenAnimation, setShowSirenAnimation] = useState(true);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section with Siren */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-red-50 to-cream border-b-4 border-red-600">
        <div className="container max-w-4xl mx-auto">
          {/* Animated Siren */}
          <div className="flex justify-center mb-8">
            <div className={`relative ${showSirenAnimation ? 'animate-pulse' : ''}`}>
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Volume2 size={48} className="text-white animate-bounce" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-red-600 animate-ping"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-center text-red-600 mb-4">
            WARNING LIGHTS
          </h1>
          <h2 className="text-2xl md:text-3xl text-center text-charcoal mb-6">
            Censorship & Institutional Suppression
          </h2>
          <p className="text-lg text-center text-charcoal-light max-w-2xl mx-auto">
            A comprehensive timeline documenting attempts to silence Indigenous justice advocacy through media ghosting, political intimidation, and institutional barriers.
          </p>
        </div>
      </section>

      {/* Critical Context Section */}
      <section className="py-12 px-4 bg-red-50 border-b-4 border-red-600">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-red-600 mb-6">
            The Core Systemic Failure: Split Custody = Split Protection
          </h3>
          <Card className="p-8 bg-white border-4 border-red-600">
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">What Happened:</h4>
                <p className="text-charcoal-light mb-4">
                  <strong>April 23, 2021:</strong> Barran (age 14) was stabbed 3 times at his mother's house (Paisley location - Jean Tsannie's residence). This was a serious violent attack that destroyed his mental health.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg font-bold text-red-900 mb-3">The Systemic Failure:</h4>
                <ul className="space-y-2 text-charcoal-light">
                  <li>✗ <strong>DPJ involved with biological father</strong> - You are being monitored/blamed</li>
                  <li>✗ <strong>DPJ NOT involved with mother</strong> - Jean Tsannie (where attack occurred) has no DPJ involvement despite signalement</li>
                  <li>✗ <strong>Split custody = Split responsibility</strong> - Neither parent gets full support</li>
                  <li>✗ <strong>Children blocked from help</strong> - Told "we can't help because DPJ is in your life" by CLSC</li>
                  <li>✗ <strong>14+ months with no mental health support</strong> - Despite Jordan's Principle requiring immediate access</li>
                  <li>✗ <strong>Mother's involvement not addressed</strong> - DPJ failure to engage with mother where attack happened</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                <h4 className="text-lg font-bold text-yellow-900 mb-2">Why This Matters:</h4>
                <p className="text-charcoal-light">
                  This is not a failure of one parent - it's a systemic failure to protect children caught between split custody. When DPJ is involved with one parent but not the other, children fall through the cracks. Barran was stabbed at his mother's house, but the system is monitoring his father instead of engaging with the mother. This creates a protection vacuum where neither parent has adequate support to help the children heal.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-12 px-4 bg-white border-b-2 border-amber-orange">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-forest-green mb-8 text-center">
            The Pattern of Institutional Silence
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-red-50 border-2 border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-2">7</div>
              <p className="font-semibold text-charcoal mb-2">Institutions Ghosting</p>
              <p className="text-sm text-charcoal-light">APTN, provincial officials, federal MPs, CDPDJ, Ombudsman - all refusing accountability</p>
            </Card>
            <Card className="p-6 bg-orange-50 border-2 border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-2">1</div>
              <p className="font-semibold text-charcoal mb-2">Cease-and-Desist Warning</p>
              <p className="text-sm text-charcoal-light">Intimidation tactic used to silence constituent advocacy</p>
            </Card>
            <Card className="p-6 bg-yellow-50 border-2 border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600 mb-2">14+</div>
              <p className="font-semibold text-charcoal mb-2">Months Without Help</p>
              <p className="text-sm text-charcoal-light">Since stabbing incident, children still waiting for mental health support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* APTN Spotlight */}
      <section className="py-12 px-4 bg-amber-light/10">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-forest-green mb-6">
            APTN: From Coverage to Ghosting
          </h3>
          <Card className="p-8 bg-white border-4 border-amber-orange">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="text-amber-orange flex-shrink-0 mt-1" size={32} />
              <div>
                <h4 className="text-2xl font-bold text-charcoal mb-2">
                  Aboriginal Peoples Television Network (APTN)
                </h4>
                <p className="text-charcoal-light mb-4">
                  Indigenous media network that published a report on February 22, 2026 covering systemic racism, Jordan's Principle failure, and immunity law abuse.
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <p className="font-semibold text-green-900 mb-2">✓ What APTN Did Right</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Published investigative report on systemic racism in youth protection</li>
                  <li>• Documented Jordan's Principle failure</li>
                  <li>• Highlighted immunity law abuse protecting workers</li>
                  <li>• Reached Indigenous media audience with accountability message</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <p className="font-semibold text-red-900 mb-2">✗ What APTN Did Wrong</p>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Ceased all communication after publication</li>
                  <li>• No follow-up investigation or accountability reporting</li>
                  <li>• No explanation for ghosting</li>
                  <li>• Allowed story to disappear from media narrative</li>
                  <li>• Became complicit in institutional silence through inaction</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <p className="font-semibold text-yellow-900 mb-2">⚠️ The Message This Sends</p>
              <p className="text-sm text-yellow-800">
                When Indigenous media networks publish accountability stories but then ghost the families involved, it sends a message that coverage is performative. It suggests that even Indigenous-focused media may prioritize institutional relationships over sustained advocacy for justice.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-forest-green mb-12 text-center">
            Complete Suppression Timeline
          </h3>

          <div className="space-y-4">
            {suppressionTimeline.map((event, idx) => {
              const config = statusConfig[event.status];
              const Icon = config.icon;
              const isExpanded = expandedEvent === idx;

              return (
                <div
                  key={idx}
                  className={`${config.bg} border-2 ${config.color} rounded-lg overflow-hidden transition-all`}
                >
                  <button
                    onClick={() => setExpandedEvent(isExpanded ? null : idx)}
                    className="w-full p-6 text-left hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className={`${config.color} flex-shrink-0 mt-1`} size={24} />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-gray-600">{event.date}</span>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${config.bg} ${config.color}`}>
                            {config.label}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-charcoal mb-1">
                          {event.institution}
                        </h4>
                        <p className="text-charcoal-light font-semibold">{event.action}</p>
                      </div>
                      <div className={`text-charcoal-light transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 border-t-2 border-current border-opacity-20">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-charcoal mb-2">Details:</h5>
                          <p className="text-charcoal-light">{event.details}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-charcoal mb-2">Impact on Advocacy:</h5>
                          <p className="text-charcoal-light">{event.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Analysis */}
      <section className="py-12 px-4 bg-forest-green/5">
        <div className="container max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-forest-green mb-8">
            Legal Analysis: Immunity Laws & Systemic Failure
          </h3>

          <div className="space-y-6">
            <Card className="p-6 bg-white border-2 border-forest-green">
              <h4 className="text-xl font-bold text-forest-green mb-4">Article 309 of Youth Protection Act (LPJ)</h4>
              <p className="text-charcoal-light mb-4">
                DPJ workers benefit from "relative immunity" - they cannot be sued personally for actions taken "in good faith" within the normal scope of their work. This immunity applies even when:
              </p>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Systemic racism is documented</li>
                <li>• Jordan's Principle is violated</li>
                <li>• Mental health support is denied</li>
                <li>• Children's rights are violated</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-2 border-amber-orange">
              <h4 className="text-xl font-bold text-amber-orange mb-4">Exception: Proving "Bad Faith"</h4>
              <p className="text-charcoal-light mb-4">
                Workers CAN be sued if proven to have acted with:
              </p>
              <ul className="space-y-2 text-charcoal-light">
                <li>• Intentional malice or deliberate indifference</li>
                <li>• Gross negligence</li>
                <li>• Deliberate violation of rights</li>
                <li>• Falsification of information</li>
              </ul>
              <p className="text-charcoal-light mt-4 text-sm">
                <strong>Challenge:</strong> CDPDJ stated they cannot prove "bad faith" - only negligence or systemic failure. This is why judicial review is necessary.
              </p>
            </Card>

            <Card className="p-6 bg-white border-2 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-4">CRARR's Judicial Review Strategy</h4>
              <p className="text-charcoal-light">
                Fo Niemi and CRARR are pursuing judicial review of CDPDJ decision in Superior Court. This pathway can challenge whether immunity laws should apply when systemic racism and Jordan's Principle violations are documented. This is the legal mechanism to hold the system accountable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-amber-orange text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Break the Silence
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Institutional suppression thrives on silence. Share this documentation. Demand accountability. Support Indigenous justice advocacy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://youtu.be/qMfy58mOUgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-orange px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Watch APTN Report <ExternalLink size={18} />
            </a>
            <a
              href="/podcast"
              className="inline-flex items-center gap-2 bg-white text-amber-orange px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Listen to Podcast Series
            </a>
            <a
              href="/donate"
              className="inline-flex items-center gap-2 bg-white text-amber-orange px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Support the Fight
            </a>
          </div>
        </div>
      </section>

      {/* Bilingual Note */}
      <section className="py-8 px-4 bg-white border-t-2 border-forest-green">
        <div className="container max-w-4xl mx-auto text-center text-charcoal-light">
          <p className="text-sm">
            Cette page est disponible en français. / This page is available in French.
          </p>
        </div>
      </section>
    </div>
  );
}
