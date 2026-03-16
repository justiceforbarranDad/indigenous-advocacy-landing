import { AlertCircle, Phone, FileText, XCircle, Heart } from 'lucide-react';

export default function SafetyResourcesSystemicFailure() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <div className="bg-forest-green text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety Resources & Systemic Failure</h1>
          <p className="text-lg text-amber-light">When the System Designed to Help You Doesn't</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-orange">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Organizations That Failed Us</h2>
          <p className="text-lg mb-4 leading-relaxed">
            When my family faced systemic discrimination and child welfare failures, we reached out to every organization designed to protect us. We documented violations. We filed complaints. We asked for help.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            <strong>Every single one failed us.</strong>
          </p>
          <p className="text-lg leading-relaxed">
            This page documents the organizations that claim to protect Indigenous families and individuals from discrimination and abuse—and how they abandoned us when we needed them most.
          </p>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            Emergency Contacts (If You're in Immediate Danger)
          </h2>
          
          <div className="bg-red-50 rounded-lg shadow-lg p-8 border-l-4 border-red-600 mb-6">
            <div className="flex items-start gap-4">
              <AlertCircle size={32} className="text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">If You Are in Immediate Danger</h3>
                <p className="text-lg font-bold text-red-900 mb-4">Call 911 or your local emergency services immediately</p>
                <p className="text-gray-800">Do not wait. Do not try to handle it alone. Get to safety first.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-charcoal mb-2">Crisis Line (Quebec)</h4>
                  <p className="text-2xl font-bold text-forest-green mb-2">1-866-APPELLE</p>
                  <p className="text-gray-700 text-sm">(1-866-277-3553)</p>
                  <p className="text-gray-600 text-sm mt-2">24/7 support for mental health crises</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-charcoal mb-2">Local Police (Non-Emergency)</h4>
                  <p className="text-gray-700">Contact your local police department to report threats and document them officially.</p>
                  <p className="text-gray-600 text-sm mt-2">Keep records of all threats (screenshots, emails, dates, times)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organizations That Failed */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            Organizations That Failed Our Family
          </h2>

          <div className="space-y-6">
            {/* CHRC */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <XCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Canadian Human Rights Commission (CHRC)</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Phone:</strong> 1-888-214-1090
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>What They Claim:</strong> "We investigate discrimination complaints and protect human rights"
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">How They Failed Us:</p>
                    <p className="text-gray-800">
                      We filed complaints about systemic discrimination against our Indigenous child. The CHRC acknowledged our case but took months to respond. Their investigation was slow, bureaucratic, and ultimately inadequate. They did not hold DPJ accountable. They did not enforce our rights. They processed our complaint like a box to check, not a family's crisis to solve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CDPDJ */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <XCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Quebec Human Rights Commission (CDPDJ)</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Phone:</strong> 1-800-361-6477
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>What They Claim:</strong> "We protect human rights and investigate discrimination in Quebec"
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">How They Failed Us:</p>
                    <p className="text-gray-800">
                      We filed two separate requests for investigation with CDPDJ. Both were refused. They cited "limits on their powers" and refused to investigate DPJ's documented violations against our Indigenous child. Meanwhile, CDPDJ published a 2025 systemic inquiry about Nunavik showing exactly the same failures we experienced—yet they refused to help us. They protect systemic discrimination through bureaucratic inaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Aid Quebec */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <XCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Legal Aid Quebec</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Phone:</strong> 1-844-354-2572
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>What They Claim:</strong> "We provide free legal assistance to low-income Quebecers"
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">How They Failed Us:</p>
                    <p className="text-gray-800">
                      We sought legal assistance to challenge DPJ decisions and document Charter violations. Legal Aid Quebec's response was slow and inadequate. They could not provide the specialized legal support needed to fight systemic discrimination against Indigenous families. We were left without legal representation while DPJ operated without accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Protecteur du Citoyen */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <XCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Protecteur du Citoyen (Quebec Ombudsman)</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What They Claim:</strong> "We investigate complaints against government services"
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">How They Failed Us:</p>
                    <p className="text-gray-800">
                      We filed complaints about DPJ's failures. The Protecteur du Citoyen investigated but concluded they had "limits on their powers" to force DPJ to change. They documented the problems but could not enforce accountability. Another institution that protects the system rather than protecting families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commissaire à l'Éthique */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <XCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Commissaire à l'Éthique (Ethics Commissioner)</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What They Claim:</strong> "We ensure government officials follow ethical conduct rules"
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">How They Failed Us:</p>
                    <p className="text-gray-800">
                      When elected officials sent cease-and-desist letters instead of helping constituents, we reported this to the Ethics Commissioner. No meaningful action. They acknowledged the complaint but took no steps to hold officials accountable for violating their ethical duties to constituents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indigenous Legal Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <XCircle size={28} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Indigenous Legal Services</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>What They Claim:</strong> "We provide free/low-cost legal help for Indigenous peoples"
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">How They Failed Us:</p>
                    <p className="text-gray-800">
                      Limited capacity. Long waitlists. When we finally connected with legal services, they were overwhelmed with cases and could not provide the sustained legal support needed to fight systemic discrimination. The system is designed to fail Indigenous families through underfunding and understaffing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happened Instead */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-orange">
          <h2 className="text-3xl font-bold text-forest-green mb-6">What Happened Instead of Help</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800"><strong>Silence from organizations designed to help</strong> - We reached out. We documented violations. We filed complaints. We received acknowledgments but no real action.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800"><strong>Bureaucratic delays</strong> - Months and years passed while complaints were "processed." Meanwhile, our child suffered without adequate services or support.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800"><strong>Excuses about "limits on their powers"</strong> - Every organization claimed they couldn't do anything. They had limits. They lacked authority. They couldn't enforce accountability.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800"><strong>Intimidation from elected officials</strong> - When we asked politicians for help, we received cease-and-desist letters threatening criminal harassment charges. This is what happens when you demand accountability.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800"><strong>Our child suffered</strong> - 5+ years without adequate support. Education lost. Mental health destroyed. Trauma untreated. While we waited for "help" from the system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            How to Document Your Case (When Organizations Fail)
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <FileText size={24} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-charcoal mb-2">Keep Detailed Records</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• Dates and times of all incidents</li>
                    <li>• Names of officials/staff involved</li>
                    <li>• What was said (direct quotes if possible)</li>
                    <li>• Screenshots of emails, texts, social media</li>
                    <li>• Photos/videos of evidence</li>
                    <li>• Copies of all official documents</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <FileText size={24} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-charcoal mb-2">File Official Complaints</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• File police reports for threats or harassment</li>
                    <li>• File complaints with relevant oversight bodies</li>
                    <li>• Keep copies of all complaint submissions</li>
                    <li>• Document all responses (or lack thereof)</li>
                    <li>• Follow up in writing to create a paper trail</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <FileText size={24} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-charcoal mb-2">Consult Legal Counsel</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• Seek legal advice early, even if you can't afford it</li>
                    <li>• Understand your rights and legal protections</li>
                    <li>• Get guidance on how to document and present your case</li>
                    <li>• Know what constitutes a legal violation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-forest-green">
              <div className="flex items-start gap-4">
                <FileText size={24} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-charcoal mb-2">Tell Your Story</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• Document your experience in writing</li>
                    <li>• Share your story publicly (protected speech)</li>
                    <li>• Connect with media and advocacy organizations</li>
                    <li>• Build community with others who've experienced similar failures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-forest-green text-white rounded-lg shadow-lg p-8">
          <div className="flex items-start gap-4">
            <Heart size={32} className="text-amber-orange flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold mb-6">You Are Not Alone</h2>
              <p className="text-lg mb-6 leading-relaxed">
                If you've experienced systemic failures, discrimination, or been ignored by organizations that should have helped you, your story matters. Share it. Document it. Hold them accountable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/share-story"
                  className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <FileText size={18} />
                  Share Your Story
                </a>
                <a
                  href="/contact-accountability"
                  className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
