import { CheckCircle, AlertCircle, FileText, Clock, Users, Shield } from 'lucide-react';

/**
 * HOW TO DOCUMENT YOUR CASE - NEWSPAPER FORMAT
 * 
 * Step-by-step instructions for families to document institutional abuse
 * Build a bulletproof case
 * Report effectively and escalate
 * Protect yourself legally
 * 
 * Vintage newspaper aesthetic: Black & white (documentation) → Color (action)
 * If you don't document it, it didn't happen
 * If you document it, they can't deny it
 */

export default function HowToDocumentYourCase() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HOW TO DOCUMENT YOUR CASE</h1>
          <p className="text-lg md:text-xl opacity-90">Step-By-Step Instructions to Build a Bulletproof Case</p>
        </div>
      </section>

      {/* Intro Newspaper */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="bg-yellow-50 border-4 border-yellow-900 shadow-xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
            }}
          >
            {/* Masthead */}
            <div className="border-b-4 border-yellow-900 bg-yellow-100 p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-yellow-800 mb-2">
                DOCUMENTATION GUIDE
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-yellow-900 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                IF YOU DON'T DOCUMENT IT, IT DIDN'T HAPPEN
              </h2>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-yellow-800">
                Institutions rely on victims' silence and poor documentation
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-sm leading-relaxed text-yellow-900 mb-4">
                Institutions count on you not keeping records. They count on you not remembering dates. They count on you not having proof. This guide teaches you how to document everything so they can never deny what happened.
              </p>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-yellow-900 bg-yellow-100">
              <p className="text-xs font-semibold text-yellow-900/60">⬛ Black & White Edition - Documentation Phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1 - Newspaper Format */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="bg-yellow-50 border-4 border-yellow-900 shadow-xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
            }}
          >
            {/* Masthead */}
            <div className="border-b-4 border-yellow-900 bg-yellow-100 p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-yellow-800 mb-2">
                STEP 1
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-yellow-900 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                DOCUMENT EVERYTHING IN REAL TIME
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* What to Document */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  WHAT TO DOCUMENT
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Dates & times', desc: 'When did the incident happen? When did you contact officials?' },
                    { title: 'Who was involved', desc: 'Names, titles, organizations of all people involved' },
                    { title: 'What happened', desc: 'Detailed description of events, conversations, actions taken' },
                    { title: 'How you responded', desc: 'What did you do? Who did you contact? What did you say?' },
                    { title: 'Impact', desc: 'How did this affect your child? Your family? Your mental health?' },
                    { title: 'Witnesses', desc: 'Who else saw or heard what happened? Get their contact info' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-yellow-800 flex-shrink-0">■</span>
                      <div>
                        <p className="text-sm font-bold text-yellow-900">{item.title}</p>
                        <p className="text-sm text-yellow-900">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Document */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  HOW TO DOCUMENT
                </h3>
                <div className="space-y-3">
                  {[
                    'Write it down immediately - Don\'t wait. Write details while they\'re fresh',
                    'Save all emails & letters - Print them, screenshot them, save PDFs',
                    'Record phone calls - Check local laws, but record when possible',
                    'Take photos/videos - Document physical evidence, injuries, conditions',
                    'Keep originals - Store originals safely, make backup copies'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-yellow-800 flex-shrink-0">■</span>
                      <p className="text-sm text-yellow-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-yellow-900 bg-yellow-100">
              <p className="text-xs font-semibold text-yellow-900/60">⬛ Black & White Edition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 - Newspaper Format */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="bg-yellow-50 border-4 border-yellow-900 shadow-xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
            }}
          >
            {/* Masthead */}
            <div className="border-b-4 border-yellow-900 bg-yellow-100 p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-yellow-800 mb-2">
                STEP 2
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-yellow-900 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                CREATE A TIMELINE & ORGANIZE EVIDENCE
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  ORGANIZE YOUR EVIDENCE CHRONOLOGICALLY
                </h3>
                <p className="text-sm leading-relaxed text-yellow-900 mb-4">
                  Create a chronological timeline of all events. This shows the pattern of institutional failure.
                </p>
                <div className="bg-charcoal text-white p-4 rounded font-mono text-xs space-y-1 overflow-x-auto">
                  <p><span className="text-amber-orange">DATE</span> | <span className="text-amber-orange">EVENT</span> | <span className="text-amber-orange">EVIDENCE</span></p>
                  <p>---</p>
                  <p>Feb 14, 2021 | Child stabbed 3x | Hospital records, police report</p>
                  <p>Feb 15, 2021 | DYP contacted | Email confirmation</p>
                  <p>Mar 2021 | DYP assessment | Case file notes</p>
                  <p>Jan 2023 | DYP withdrew | Letter from DYP</p>
                  <p>Feb 27, 2026 | Wellness check | Police report, email</p>
                </div>
              </div>

              {/* Organize by Category */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  ORGANIZE BY CATEGORY
                </h3>
                <div className="space-y-3">
                  {[
                    'Medical records - Hospital visits, diagnoses, treatment',
                    'Government correspondence - All emails, letters from DYP, politicians, officials',
                    'School records - Attendance, grades, behavioral notes',
                    'Mental health records - Therapy notes, diagnoses, treatment',
                    'Your documentation - Diary entries, incident reports you wrote',
                    'Witness statements - Written statements from people who witnessed abuse'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-yellow-800 flex-shrink-0">■</span>
                      <p className="text-sm text-yellow-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-yellow-900 bg-yellow-100">
              <p className="text-xs font-semibold text-yellow-900/60">⬛ Black & White Edition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 - Color Newspaper (Action Phase) */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border-4 border-red-600 shadow-lg">
            {/* Masthead */}
            <div className="border-b-4 border-red-600 bg-white p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-red-600 mb-2">
                STEP 3 - ACTION PHASE
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-forest-green mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                REPORT TO AUTHORITIES & ESCALATE
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-red-600 mb-4">
                  START LOCAL, ESCALATE UP
                </h3>
                <p className="text-sm leading-relaxed text-charcoal mb-4">
                  Report to the lowest level first, then escalate. Document every report and every non-response.
                </p>
                <div className="space-y-3">
                  {[
                    { level: 'Level 1: Local Authorities', items: ['Police (file report for abuse/neglect)', 'Local child protection agency', 'School administration'] },
                    { level: 'Level 2: Provincial', items: ['Provincial ombudsman/protecteur du citoyen', 'Provincial human rights commission', 'Provincial legislators/MNAs'] },
                    { level: 'Level 3: Federal', items: ['Federal MPs', 'Canadian Human Rights Commission', 'Prime Minister\'s Office'] },
                    { level: 'Level 4: International', items: ['UN Human Rights Council', 'International human rights organizations', 'Media (international news)'] }
                  ].map((section, i) => (
                    <div key={i} className="bg-amber-50 p-4 rounded border-l-4 border-amber-orange">
                      <p className="font-bold text-charcoal mb-2">{section.level}</p>
                      <ul className="space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-sm text-charcoal">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Report */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-red-600 mb-4">
                  HOW TO REPORT EFFECTIVELY
                </h3>
                <div className="space-y-3">
                  {[
                    'Put it in writing - Always submit reports in writing (email, letter) so you have proof',
                    'Include all evidence - Attach copies of documents, timeline, medical records',
                    'Send to multiple people - Send to the organization AND the person\'s supervisor',
                    'Request written response - Ask for written acknowledgment and action plan',
                    'Follow up in writing - Send follow-up emails if no response within 2 weeks',
                    'Keep copies of everything - Save all correspondence'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-red-600 flex-shrink-0">■</span>
                      <p className="text-sm text-charcoal">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-red-600 bg-white">
              <p className="text-xs font-semibold text-charcoal/60">🌈 Color Edition - Action Phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">DOCUMENTATION IS POWER</h2>
          <div className="space-y-4 text-lg opacity-90">
            <p>When you document everything, you take away their power to deny.</p>
            <p className="text-xl font-bold">When you have evidence, you have accountability.</p>
            <p>Start documenting today. Your future case depends on it.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
