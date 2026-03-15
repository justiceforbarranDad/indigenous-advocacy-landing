import { ExternalLink, AlertCircle, CheckCircle, FileText } from 'lucide-react';

/**
 * INDIGENOUS CHILDREN RIGHTS IN CANADA
 * 
 * Newspaper-style documentation of rights, protections, and systemic failures
 * for Indigenous children in Canada. Connects legal frameworks to lived experience.
 */

export default function IndigenousChildrenRights() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Newspaper Masthead */}
      <section className="bg-charcoal text-cream py-8 border-b-4 border-amber-orange">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <h1 className="text-5xl md:text-6xl font-black font-serif mb-2">
              INDIGENOUS CHILDREN RIGHTS
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-amber-orange mb-4">
              In Canada: Rights on Paper, Failures in Practice
            </p>
            <div className="flex justify-center gap-8 text-sm font-semibold">
              <span>MARCH 15, 2026</span>
              <span>•</span>
              <span>SPECIAL INVESTIGATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
          <p className="text-lg leading-relaxed text-charcoal mb-4">
            Indigenous children in Canada possess extensive legal protections on paper—yet systemic failures, institutional neglect, and broken promises leave them vulnerable to violence, exploitation, and harm. This investigation documents the gap between rights and reality.
          </p>
          <p className="text-charcoal/80 italic">
            "Every child matters. But for Indigenous children, the system has failed to prove it." — Lived Experience
          </p>
        </section>

        {/* Legal Framework Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-black font-serif text-forest-green mb-8 pb-4 border-b-4 border-amber-orange">
            LEGAL RIGHTS & FRAMEWORKS
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* UN Convention */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-amber-orange flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-charcoal">UN Convention on Rights of the Child</h3>
              </div>
              <p className="text-charcoal/80 mb-4">
                Canada is a signatory to the UNCRC (1989), which guarantees Indigenous children:
              </p>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li>✓ Right to life, survival, and development (Article 6)</li>
                <li>✓ Protection from violence and abuse (Article 19)</li>
                <li>✓ Access to health and social services (Article 24)</li>
                <li>✓ Right to education (Article 28)</li>
                <li>✓ Cultural identity and Indigenous rights (Articles 29-30)</li>
              </ul>
              <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold mt-4">
                View Full Convention <ExternalLink size={16} />
              </a>
            </div>

            {/* Canadian Legal Protections */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-forest-green flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-charcoal">Canadian Legal Protections</h3>
              </div>
              <p className="text-charcoal/80 mb-4">
                Canadian law includes specific protections:
              </p>
              <ul className="space-y-2 text-charcoal/70 text-sm">
                <li>✓ Canadian Charter of Rights and Freedoms</li>
                <li>✓ Child Protection Laws (provincial DPJ/DYP)</li>
                <li>✓ Jordan's Principle (no-delay services for First Nations children)</li>
                <li>✓ Truth & Reconciliation Commission Calls to Action</li>
                <li>✓ United Nations Declaration on Rights of Indigenous Peoples (UNDRIP)</li>
              </ul>
              <a href="https://www.justice.gc.ca/eng/cj-jp/rfc-tlr/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-forest-green hover:text-forest-green/80 font-semibold mt-4">
                View Canadian Framework <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* TRC Calls to Action */}
        <section className="mb-12">
          <h2 className="text-4xl font-black font-serif text-amber-orange mb-8 pb-4 border-b-4 border-forest-green">
            TRUTH & RECONCILIATION COMMISSION CALLS TO ACTION
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange mb-6">
            <p className="text-charcoal/80 mb-6">
              The TRC (2015) identified critical gaps in child protection and Indigenous rights. Key Calls to Action directly relevant to Indigenous children's safety:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-charcoal pl-4 py-2">
                <p className="font-bold text-charcoal">Call to Action #1</p>
                <p className="text-charcoal/70 text-sm">Establish a National Council for Reconciliation to monitor implementation of TRC recommendations</p>
              </div>

              <div className="border-l-4 border-charcoal pl-4 py-2">
                <p className="font-bold text-charcoal">Call to Action #19</p>
                <p className="text-charcoal/70 text-sm">Establish a child-centered approach to health and safety in Indigenous communities, addressing violence prevention and trauma-informed care</p>
              </div>

              <div className="border-l-4 border-charcoal pl-4 py-2">
                <p className="font-bold text-charcoal">Call to Action #22</p>
                <p className="text-charcoal/70 text-sm">Develop and implement coordinated child welfare strategies that respect Indigenous jurisdiction and culture</p>
              </div>

              <div className="border-l-4 border-charcoal pl-4 py-2">
                <p className="font-bold text-charcoal">Call to Action #65</p>
                <p className="text-charcoal/70 text-sm">Ensure that the legal profession is educated on the history and ongoing impacts of residential schools</p>
              </div>
            </div>

            <a href="https://www2.gov.bc.ca/gov/content/governments/indigenous-peoples/reconciliation/truth-and-reconciliation-commission" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold mt-6">
              View All 94 Calls to Action <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Systemic Failures */}
        <section className="mb-12">
          <h2 className="text-4xl font-black font-serif text-charcoal mb-8 pb-4 border-b-4 border-charcoal">
            SYSTEMIC FAILURES IN PRACTICE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DPJ/Child Welfare Failures */}
            <div className="bg-red-50 p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-charcoal">Child Welfare System Failures</h3>
              </div>
              <ul className="space-y-3 text-charcoal/80 text-sm">
                <li>✗ DPJ/DYP involvement without adequate follow-up or support</li>
                <li>✗ Withdrawal of services without addressing underlying trauma</li>
                <li>✗ Failure to apply Jordan's Principle (no-delay services)</li>
                <li>✗ Lack of culturally appropriate interventions</li>
                <li>✗ Inadequate mental health and education support</li>
                <li>✗ Systemic racism in child protection decisions</li>
              </ul>
            </div>

            {/* Political & Institutional Failures */}
            <div className="bg-red-50 p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-charcoal">Political & Institutional Ghosting</h3>
              </div>
              <ul className="space-y-3 text-charcoal/80 text-sm">
                <li>✗ Elected officials ignoring constituent requests for help</li>
                <li>✗ Cease-and-desist threats instead of assistance</li>
                <li>✗ Lack of accountability mechanisms for government failures</li>
                <li>✗ CDPDJ investigations with limited enforcement power</li>
                <li>✗ Symbolism (TRC apologies) without systemic change</li>
                <li>✗ Ongoing violence against Indigenous youth unaddressed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistics & Evidence */}
        <section className="mb-12">
          <h2 className="text-4xl font-black font-serif text-forest-green mb-8 pb-4 border-b-4 border-amber-orange">
            THE NUMBERS: OVERREPRESENTATION & CRISIS
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
            <p className="text-charcoal/80 mb-6">
              Statistics Canada and government reports document the crisis facing Indigenous children:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-forest-green/10 p-6 rounded-lg">
                <p className="text-3xl font-black text-forest-green mb-2">10x</p>
                <p className="text-charcoal/80 text-sm">Indigenous children are overrepresented in child welfare systems compared to non-Indigenous children</p>
              </div>

              <div className="bg-amber-orange/10 p-6 rounded-lg">
                <p className="text-3xl font-black text-amber-orange mb-2">3x</p>
                <p className="text-charcoal/80 text-sm">Higher rates of violence and trauma exposure among Indigenous youth</p>
              </div>

              <div className="bg-red-100 p-6 rounded-lg">
                <p className="text-3xl font-black text-red-600 mb-2">5x</p>
                <p className="text-charcoal/80 text-sm">Suicide rates among Indigenous youth compared to national average</p>
              </div>

              <div className="bg-charcoal/10 p-6 rounded-lg">
                <p className="text-3xl font-black text-charcoal mb-2">94</p>
                <p className="text-charcoal/80 text-sm">TRC Calls to Action—most still not fully implemented</p>
              </div>
            </div>

            <a href="https://www.statcan.gc.ca/o1/en/plus/8526-indigenous-health-and-call-reconciliation-canada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-forest-green hover:text-forest-green/80 font-semibold">
              View Statistics Canada Report <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <h2 className="text-4xl font-black font-serif text-charcoal mb-8 pb-4 border-b-4 border-charcoal">
            WHAT NEEDS TO CHANGE
          </h2>

          <div className="bg-cream border-4 border-forest-green p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl font-black text-forest-green flex-shrink-0">1.</div>
                <div>
                  <p className="font-bold text-charcoal mb-1">Implement Jordan's Principle Fully</p>
                  <p className="text-charcoal/80 text-sm">No-delay services for First Nations children must be funded and enforced across all provinces</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-black text-forest-green flex-shrink-0">2.</div>
                <div>
                  <p className="font-bold text-charcoal mb-1">Enforce TRC Calls to Action</p>
                  <p className="text-charcoal/80 text-sm">Establish accountability mechanisms with real consequences for government inaction</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-black text-forest-green flex-shrink-0">3.</div>
                <div>
                  <p className="font-bold text-charcoal mb-1">Culturally Appropriate Child Welfare</p>
                  <p className="text-charcoal/80 text-sm">Transfer child welfare authority to Indigenous communities with adequate funding</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-black text-forest-green flex-shrink-0">4.</div>
                <div>
                  <p className="font-bold text-charcoal mb-1">Violence Prevention & Trauma Support</p>
                  <p className="text-charcoal/80 text-sm">Fund comprehensive mental health, education, and safety services in Indigenous communities</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-black text-forest-green flex-shrink-0">5.</div>
                <div>
                  <p className="font-bold text-charcoal mb-1">Political Accountability</p>
                  <p className="text-charcoal/80 text-sm">Hold elected officials accountable for ghosting constituents and failing to implement reconciliation commitments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-4xl font-black font-serif text-amber-orange mb-8 pb-4 border-b-4 border-forest-green">
            RESOURCES & DOCUMENTATION
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="/systemic-violations" className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-forest-green hover:shadow-xl transition-shadow">
              <p className="font-bold text-charcoal mb-2">Systemic Violations Archive</p>
              <p className="text-charcoal/70 text-sm">Documented failures in child protection and government accountability</p>
            </a>

            <a href="/how-to-document-your-case" className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-orange hover:shadow-xl transition-shadow">
              <p className="font-bold text-charcoal mb-2">How to Document Your Case</p>
              <p className="text-charcoal/70 text-sm">Step-by-step guide for families seeking accountability</p>
            </a>

            <a href="https://www.chrc-ccdp.gc.ca/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-charcoal hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-charcoal mb-2">Canadian Human Rights Commission</p>
                  <p className="text-charcoal/70 text-sm">File complaints about systemic discrimination</p>
                </div>
                <ExternalLink size={16} className="text-charcoal flex-shrink-0" />
              </div>
            </a>

            <a href="https://www.fnchildclaims.ca/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-charcoal hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-charcoal mb-2">First Nations Child Welfare Claims</p>
                  <p className="text-charcoal/70 text-sm">Legal support for families affected by systemic failures</p>
                </div>
                <ExternalLink size={16} className="text-charcoal flex-shrink-0" />
              </div>
            </a>
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-12 bg-forest-green text-cream p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-black mb-4">Support This Advocacy</h3>
          <p className="mb-6 leading-relaxed">
            Documenting systemic failures and demanding accountability requires resources. Your donation funds legal action, evidence gathering, and amplification of Indigenous children's rights.
          </p>
          <a href="/donate-comprehensive" className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-charcoal px-8 py-4 rounded-lg font-bold transition-colors">
            Donate to Fund This Work
          </a>
        </section>
      </div>
    </div>
  );
}
