import { CheckCircle, AlertCircle, FileText, Clock, Users, Shield } from 'lucide-react';

/**
 * HOW TO DOCUMENT YOUR CASE
 * 
 * Step-by-step instructions for families to document institutional abuse
 * Build a bulletproof case
 * Report effectively and escalate
 * Protect yourself legally
 * 
 * If you don't document it, it didn't happen
 * If you document it, they can't deny it
 */

export default function HowToDocumentYourCase() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-forest-green to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            HOW TO DOCUMENT YOUR CASE
          </h1>
          <p className="text-xl text-amber-light mb-6">
            Step-by-Step Instructions to Build a Bulletproof Case
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-orange">
            <FileText size={24} />
            <span className="font-semibold">If you don't document it, it didn't happen</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
            <p className="text-lg leading-relaxed mb-4">
              Institutions rely on victims' silence and poor documentation. They count on you not keeping records. 
              They count on you not remembering dates. They count on you not having proof.
            </p>
            <p className="text-lg leading-relaxed font-bold text-forest-green">
              This guide teaches you how to document everything so they can never deny what happened.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-forest-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">1</div>
            <h2 className="text-4xl font-bold">DOCUMENT EVERYTHING IN REAL TIME</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream p-8 rounded-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-4 text-forest-green">What to Document</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-forest-green flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Dates & times</span> - When did the incident happen? When did you contact officials?</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-forest-green flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Who was involved</span> - Names, titles, organizations of all people involved</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-forest-green flex-shrink-0 mt-1" />
                  <span><span className="font-bold">What happened</span> - Detailed description of events, conversations, actions taken</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-forest-green flex-shrink-0 mt-1" />
                  <span><span className="font-bold">How you responded</span> - What did you do? Who did you contact? What did you say?</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-forest-green flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Impact</span> - How did this affect your child? Your family? Your mental health?</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-forest-green flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Witnesses</span> - Who else saw or heard what happened? Get their contact info</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">How to Document</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Write it down immediately</span> - Don't wait. Write details while they're fresh</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Save all emails & letters</span> - Print them, screenshot them, save PDFs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Record phone calls</span> - Check local laws, but record when possible</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Take photos/videos</span> - Document physical evidence, injuries, conditions</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Keep originals</span> - Store originals safely, make backup copies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-amber-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">2</div>
            <h2 className="text-4xl font-bold">CREATE A TIMELINE</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">Organize Your Evidence</h3>
              <p className="text-lg leading-relaxed mb-6">
                Create a chronological timeline of all events. This shows the pattern of institutional failure.
              </p>
              
              <div className="bg-charcoal text-white p-6 rounded font-mono text-sm space-y-2">
                <p><span className="text-amber-orange">DATE</span> | <span className="text-amber-orange">EVENT</span> | <span className="text-amber-orange">EVIDENCE</span></p>
                <p>---</p>
                <p>Feb 14, 2021 | Child stabbed 3 times | Hospital records, police report</p>
                <p>Feb 15, 2021 | DYP contacted | Email confirmation</p>
                <p>Mar 2021 | DYP assessment | Case file notes</p>
                <p>Jan 2023 | DYP withdrew support | Letter from DYP</p>
                <p>Feb 27, 2026 | Wellness check failure | Police report, email</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-4 text-forest-green">Organize by Category</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span><span className="font-bold">Medical records</span> - Hospital visits, diagnoses, treatment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span><span className="font-bold">Government correspondence</span> - All emails, letters from DYP, politicians, officials</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span><span className="font-bold">School records</span> - Attendance, grades, behavioral notes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span><span className="font-bold">Mental health records</span> - Therapy notes, diagnoses, treatment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span><span className="font-bold">Your documentation</span> - Diary entries, incident reports you wrote</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span><span className="font-bold">Witness statements</span> - Written statements from people who witnessed abuse</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">3</div>
            <h2 className="text-4xl font-bold">REPORT TO AUTHORITIES</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream p-8 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Start Local, Escalate Up</h3>
              <p className="text-lg leading-relaxed mb-6">
                Report to the lowest level first, then escalate. Document every report and every non-response.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-bold mb-2">Level 1: Local Authorities</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Police (file report for abuse/neglect)</li>
                    <li>• Local child protection agency</li>
                    <li>• School administration</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-bold mb-2">Level 2: Provincial</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Provincial ombudsman/protecteur du citoyen</li>
                    <li>• Provincial human rights commission</li>
                    <li>• Provincial legislators/MNAs</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-bold mb-2">Level 3: Federal</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Federal MPs</li>
                    <li>• Canadian Human Rights Commission</li>
                    <li>• Prime Minister's Office</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <p className="font-bold mb-2">Level 4: International</p>
                  <ul className="space-y-1 text-sm">
                    <li>• UN Human Rights Council</li>
                    <li>• International human rights organizations</li>
                    <li>• Media (international news)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">How to Report</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Put it in writing</span> - Always submit reports in writing (email, letter) so you have proof</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Include all evidence</span> - Attach copies of documents, timeline, medical records</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Send to multiple people</span> - Send to the organization AND the person's supervisor</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Request written response</span> - Ask for written acknowledgment and action plan</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Set deadlines</span> - "Please respond by [date]" creates accountability</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Document everything</span> - Keep copies of all reports and responses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-forest-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">4</div>
            <h2 className="text-4xl font-bold">ESCALATE & DEMAND ACCOUNTABILITY</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-4 text-forest-green">When They Don't Respond</h3>
              <p className="text-lg leading-relaxed mb-6">
                Silence is a response. Non-response is admission of guilt. Document it and escalate.
              </p>
              
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Send follow-up email</span> - "I sent my report on [date]. I have not received a response. Please confirm receipt and provide action plan by [date]."</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Escalate to supervisor</span> - If person doesn't respond, contact their boss</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Escalate to next level</span> - Go to provincial, then federal, then international</span>
                </li>
                <li className="flex gap-3">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Go public</span> - Share your story publicly. Media, social media, advocacy organizations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">Build Public Pressure</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Share your story on social media with hashtags</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Contact journalists and media outlets</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Connect with advocacy organizations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Organize with other families facing same issues</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Create a website documenting your case (like this one)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-amber-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">5</div>
            <h2 className="text-4xl font-bold">PROTECT YOURSELF LEGALLY</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream p-8 rounded-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">Know Your Rights</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Shield size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Freedom of expression</span> - You can speak about public officials and systemic abuse</span>
                </li>
                <li className="flex gap-3">
                  <Shield size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Right to petition</span> - You can demand accountability from government</span>
                </li>
                <li className="flex gap-3">
                  <Shield size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Right to report abuse</span> - You are protected when reporting institutional abuse</span>
                </li>
                <li className="flex gap-3">
                  <Shield size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                  <span><span className="font-bold">Right to privacy</span> - Your child's medical/school records are protected</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-red-600">What NOT to Do</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Don't divulge private information (personal phone numbers, home addresses of private citizens)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Don't make false accusations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Don't harass or threaten individuals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Don't destroy or alter evidence</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Don't give up or stop documenting</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-4 text-forest-green">Get Legal Help</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Contact legal aid organizations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Find lawyers specializing in child welfare or human rights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Connect with advocacy organizations that provide legal support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Document all legal advice you receive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-4 bg-gradient-to-r from-forest-green to-amber-orange">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">YOUR DOCUMENTATION IS YOUR POWER</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Institutions count on you not documenting. They count on you forgetting dates. They count on you 
              having no proof. They count on your silence.
            </p>
            
            <p className="text-2xl font-bold">
              Don't give them what they want. Document everything. Keep everything. Tell everyone.
            </p>

            <p>
              Your documentation is your power. Your timeline is your evidence. Your story is the truth they 
              can't deny.
            </p>

            <p className="text-xl font-bold">
              BE A DAD. PROTECT YOUR CUBS AND YOUR QUEEN.
              <br />
              LOVE DAD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
