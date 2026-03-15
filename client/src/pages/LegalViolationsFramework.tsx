import { Scale, AlertTriangle, Globe } from 'lucide-react';

/**
 * COMPREHENSIVE LEGAL VIOLATIONS FRAMEWORK
 * 
 * ALL laws violated by DYP/DPJ and government institutions
 * Quebec laws, Canadian laws, International laws
 * Bulletproof documentation of systemic violations
 * 
 * This is not opinion - this is documented law violations
 */

export default function LegalViolationsFramework() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            LEGAL VIOLATIONS FRAMEWORK
          </h1>
          <p className="text-xl text-amber-light mb-6">
            All Laws Broken by DYP/DPJ and Government Institutions
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-orange">
            <Scale size={24} />
            <span className="font-semibold">Bulletproof Documentation of Systemic Violations</span>
          </div>
        </div>
      </section>

      {/* Quebec Laws */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">QUEBEC LAWS VIOLATED</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-3 text-forest-green">Quebec Charter of Rights and Freedoms</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Section 1: Right to life and personal security</p>
                  <p className="text-charcoal-light">VIOLATED: Children removed from families without adequate protection or support</p>
                </div>
                <div>
                  <p className="font-bold">Section 2: Right to bodily integrity</p>
                  <p className="text-charcoal-light">VIOLATED: Children placed in abusive foster care situations</p>
                </div>
                <div>
                  <p className="font-bold">Section 3: Right to respect for private life</p>
                  <p className="text-charcoal-light">VIOLATED: Family separation without due process</p>
                </div>
                <div>
                  <p className="font-bold">Section 4: Right to equality before the law</p>
                  <p className="text-charcoal-light">VIOLATED: Indigenous children overrepresented (60%+) in child welfare system</p>
                </div>
                <div>
                  <p className="font-bold">Section 9.1: Right to protection from harassment</p>
                  <p className="text-charcoal-light">VIOLATED: Cease-and-desist warnings to families seeking help</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-3 text-amber-orange">Quebec Code of Ethics and Conduct for MNAs</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Article 1: Duty to serve constituents ethically</p>
                  <p className="text-charcoal-light">VIOLATED: MNA Céline Haytayan issued cease-and-desist instead of helping constituent</p>
                </div>
                <div>
                  <p className="font-bold">Article 2: Duty to act in public interest</p>
                  <p className="text-charcoal-light">VIOLATED: Officials ghosted families seeking help for systemic abuse</p>
                </div>
                <div>
                  <p className="font-bold">Article 3: Prohibition on harassment of constituents</p>
                  <p className="text-charcoal-light">VIOLATED: Threatening cease-and-desist for asking for help</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-3 text-red-600">Quebec Child Protection Laws</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Youth Protection Act: Best interests of child</p>
                  <p className="text-charcoal-light">VIOLATED: Children removed without adequate follow-up or support</p>
                </div>
                <div>
                  <p className="font-bold">Youth Protection Act: Right to family unity</p>
                  <p className="text-charcoal-light">VIOLATED: Families separated without due process or adequate reunification efforts</p>
                </div>
                <div>
                  <p className="font-bold">Youth Protection Act: Duty to provide services</p>
                  <p className="text-charcoal-light">VIOLATED: DYP withdrew support without transition plan (Jan 2023)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Laws */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-light">CANADIAN LAWS VIOLATED</h2>
          
          <div className="space-y-6">
            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-amber-light">Canadian Charter of Rights and Freedoms</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Section 2(b): Freedom of expression</p>
                  <p className="text-white/90">VIOLATED: Cease-and-desist warning to victim for speaking about systemic abuse</p>
                </div>
                <div>
                  <p className="font-bold">Section 7: Right to life, liberty, and security of person</p>
                  <p className="text-white/90">VIOLATED: Children removed from families without adequate protection</p>
                </div>
                <div>
                  <p className="font-bold">Section 12: Right not to be subjected to cruel and unusual punishment</p>
                  <p className="text-white/90">VIOLATED: Family separation as punishment for seeking help</p>
                </div>
                <div>
                  <p className="font-bold">Section 15: Equality rights</p>
                  <p className="text-white/90">VIOLATED: Indigenous children systematically overrepresented in child welfare</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-amber-light">Criminal Code of Canada</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Section 219: Criminal negligence causing bodily harm</p>
                  <p className="text-white/90">VIOLATED: DYP failed to protect child after stabbing incident</p>
                </div>
                <div>
                  <p className="font-bold">Section 264: Criminal harassment</p>
                  <p className="text-white/90">VIOLATED: Cease-and-desist warning to victim for speaking up</p>
                </div>
                <div>
                  <p className="font-bold">Section 320: Assault</p>
                  <p className="text-white/90">VIOLATED: Institutional abuse of children in care</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-amber-light">Canadian Human Rights Act</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Section 2: Freedom from discrimination</p>
                  <p className="text-white/90">VIOLATED: Indigenous children discriminated against in child welfare system</p>
                </div>
                <div>
                  <p className="font-bold">Section 3: Equality in services</p>
                  <p className="text-white/90">VIOLATED: Inadequate services for vulnerable families</p>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3 text-amber-light">Jordan's Principle</h3>
              <div className="space-y-3">
                <p className="text-white/90">
                  <span className="font-bold">Principle:</span> First Nations children have right to services without delay
                </p>
                <p className="text-white/90">
                  <span className="font-bold">VIOLATED:</span> AFN refused to help, DYP withdrew support, no services provided
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Laws */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">INTERNATIONAL LAWS VIOLATED</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-3 text-forest-green flex items-center gap-2">
                <Globe size={24} />
                UN Convention on the Rights of the Child (1989)
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Article 3: Best interests of child</p>
                  <p className="text-charcoal-light">VIOLATED: Children removed without adequate consideration of their best interests</p>
                </div>
                <div>
                  <p className="font-bold">Article 6: Right to life and development</p>
                  <p className="text-charcoal-light">VIOLATED: Children's development disrupted by institutional abuse</p>
                </div>
                <div>
                  <p className="font-bold">Article 8: Right to identity and family relations</p>
                  <p className="text-charcoal-light">VIOLATED: Family separation without due process</p>
                </div>
                <div>
                  <p className="font-bold">Article 9: Right not to be separated from parents</p>
                  <p className="text-charcoal-light">VIOLATED: Children removed from families without adequate justification</p>
                </div>
                <div>
                  <p className="font-bold">Article 19: Protection from abuse and neglect</p>
                  <p className="text-charcoal-light">VIOLATED: Children abused in foster care and institutional settings</p>
                </div>
                <div>
                  <p className="font-bold">Article 37: Protection from torture or cruel treatment</p>
                  <p className="text-charcoal-light">VIOLATED: Institutional abuse constitutes cruel treatment</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-3 text-amber-orange flex items-center gap-2">
                <Globe size={24} />
                UN Declaration on the Rights of Indigenous Peoples (2007)
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Article 7: Right to life, physical and mental integrity</p>
                  <p className="text-charcoal-light">VIOLATED: Indigenous children harmed by DYP/DPJ</p>
                </div>
                <div>
                  <p className="font-bold">Article 8: Right not to be forcibly removed from lands or separated from families</p>
                  <p className="text-charcoal-light">VIOLATED: Indigenous children removed from families and communities</p>
                </div>
                <div>
                  <p className="font-bold">Article 21: Right to remedy and reparation</p>
                  <p className="text-charcoal-light">VIOLATED: No accountability for officials responsible</p>
                </div>
                <div>
                  <p className="font-bold">Article 23: Right to determine development priorities</p>
                  <p className="text-charcoal-light">VIOLATED: Government imposes child welfare system on Indigenous communities</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-3 text-red-600 flex items-center gap-2">
                <Globe size={24} />
                International Covenant on Civil and Political Rights (1966)
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Article 6: Right to life</p>
                  <p className="text-charcoal-light">VIOLATED: Children's lives endangered by institutional abuse</p>
                </div>
                <div>
                  <p className="font-bold">Article 7: Freedom from torture or cruel treatment</p>
                  <p className="text-charcoal-light">VIOLATED: Institutional abuse constitutes cruel treatment</p>
                </div>
                <div>
                  <p className="font-bold">Article 24: Right of every child to acquire a nationality</p>
                  <p className="text-charcoal-light">VIOLATED: Indigenous children denied cultural identity</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-light">
              <h3 className="text-2xl font-bold mb-3 text-amber-light flex items-center gap-2">
                <Globe size={24} />
                Convention Against Torture (1984)
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-bold">Article 1: Definition of torture</p>
                  <p className="text-charcoal-light">VIOLATED: Institutional abuse may constitute torture under international law</p>
                </div>
                <div>
                  <p className="font-bold">Article 2: Prohibition of torture</p>
                  <p className="text-charcoal-light">VIOLATED: Government institutions abuse children with impunity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Defense */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">LEGAL DEFENSE FOR SPEAKING UP</h2>
          
          <div className="bg-charcoal-light p-8 rounded-lg text-white space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-amber-light mb-3">Grant v. Torstar (2009 SCC 61)</h3>
              <p className="text-lg leading-relaxed">
                Supreme Court of Canada established "responsible communication on matters of public interest" 
                as a defense. Speaking about systemic institutional abuse is protected speech.
              </p>
            </div>

            <div className="border-t-2 border-charcoal pt-6">
              <h3 className="text-2xl font-bold text-amber-light mb-3">Your Right to Speak</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">✓</span>
                  <span>You can name officials who ghosted you (public information)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">✓</span>
                  <span>You can document systemic failures (factual information)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">✓</span>
                  <span>You can speak about institutional abuse (matter of public interest)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">✓</span>
                  <span>You cannot be silenced for telling the truth</span>
                </li>
              </ul>
            </div>

            <div className="border-t-2 border-charcoal pt-6">
              <h3 className="text-2xl font-bold text-amber-light mb-3">What You Cannot Do</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Divulge private information (personal emails, phone numbers)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Make false accusations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Harass or threaten individuals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">BULLETPROOF DOCUMENTATION</h2>
          
          <div className="bg-gradient-to-r from-forest-green/10 to-amber-orange/10 p-8 rounded-lg border-4 border-forest-green">
            <p className="text-xl leading-relaxed">
              This is not opinion. This is documented law. Quebec laws, Canadian laws, and international laws 
              are being violated by DYP/DPJ and government institutions. This is not a matter of debate—it's 
              a matter of law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
