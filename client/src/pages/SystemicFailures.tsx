import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * SYSTEMIC FAILURES PAGE
 * 
 * Documents officials and institutions that failed voiceless victims
 * while publicly supporting Indigenous causes or their own families.
 * 
 * Features:
 * - Sean Fraser (Federal MP) - Ignored constituent requests
 * - Simon Jolin-Barrette - Cried for his daughter but ignored systemic victims
 * - Quebec Lawyers - Failed their oath to represent children's rights
 * - Visual evidence and direct quotes
 */

export default function SystemicFailures() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-green via-charcoal to-black text-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-orange">
          Systemic Failures
        </h1>
        <p className="text-xl md:text-2xl text-cream-light max-w-3xl mx-auto leading-relaxed">
          When Officials Cry for Their Own While Ignoring Voiceless Victims
        </p>
        <p className="text-lg text-amber-light mt-4 italic">
          "My son lost his secondary education completely because of the system the government manages."
        </p>
      </section>

      {/* Sean Fraser Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => toggleSection('fraser')}
            className="w-full flex items-center justify-between bg-charcoal-light p-6 rounded-lg hover:bg-charcoal transition-colors"
          >
            <div className="text-left">
              <h2 className="text-3xl font-bold text-amber-orange mb-2">
                Sean Fraser
              </h2>
              <p className="text-cream-light">Federal MP - No Response to Constituent Requests</p>
            </div>
            <ChevronDown
              size={32}
              className={`text-amber-orange transition-transform ${
                expandedSection === 'fraser' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSection === 'fraser' && (
            <div className="mt-6 bg-charcoal p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-orange mb-4">
                  The Silence of a Federal MP
                </h3>
                <p className="text-cream-light leading-relaxed mb-4">
                  Sean Fraser, Member of Parliament for Nova Scotia, received multiple requests for help regarding systemic failures in child welfare. Despite being a constituent's elected representative, he provided no response, no assistance, and no acknowledgment of the crisis affecting Indigenous families.
                </p>
                <p className="text-cream-light leading-relaxed">
                  As a federal MP, Fraser has a duty to assist constituents on matters affecting their families. His silence is complicity in systemic harm.
                </p>
              </div>

              <div className="bg-forest-green p-6 rounded-lg border-l-4 border-amber-orange">
                <h4 className="text-xl font-bold text-amber-orange mb-3">
                  Fraser's Words to Chief Justice Wagner
                </h4>
                <p className="text-cream-light italic text-lg mb-4">
                  "To me, that's an insult to many."
                </p>
                <p className="text-cream-light">
                  Fraser's own words expose the hypocrisy. He speaks about insults to many, yet his own silence is an insult to voiceless victims of systemic failures.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-amber-orange mb-3">Contact Information</h4>
                <a
                  href="mailto:sean.fraser@parl.gc.ca"
                  className="inline-flex items-center gap-2 text-amber-light hover:text-amber-orange transition-colors mb-2"
                >
                  sean.fraser@parl.gc.ca <ExternalLink size={16} />
                </a>
                <p className="text-cream-light text-sm">
                  Office: House of Commons, Ottawa, ON K1A 0A6
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-light">
                <p className="text-amber-light font-semibold">
                  Status: Ghosted constituent requests (2023-2026)
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Simon Jolin-Barrette Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => toggleSection('jolin')}
            className="w-full flex items-center justify-between bg-charcoal-light p-6 rounded-lg hover:bg-charcoal transition-colors"
          >
            <div className="text-left">
              <h2 className="text-3xl font-bold text-amber-orange mb-2">
                Simon Jolin-Barrette
              </h2>
              <p className="text-cream-light">Provincial Deputy - Hypocrisy of Selective Compassion</p>
            </div>
            <ChevronDown
              size={32}
              className={`text-amber-orange transition-transform ${
                expandedSection === 'jolin' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSection === 'jolin' && (
            <div className="mt-6 bg-charcoal p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-orange mb-4">
                  The Hypocrisy of Selective Compassion
                </h3>
                <p className="text-cream-light leading-relaxed mb-4">
                  Simon Jolin-Barrette, Provincial Deputy, publicly cried for his own daughter. His tears were genuine. His compassion was real. But his understanding was incomplete.
                </p>
                <p className="text-cream-light leading-relaxed mb-4">
                  He did not understand—or chose not to acknowledge—that access to a Deputy is not only for victims of sexual abuse. It is for ALL victims of systemic failures. It is for children who lost their education. It is for families destroyed by institutional negligence.
                </p>
              </div>

              <div className="bg-forest-green p-6 rounded-lg border-l-4 border-amber-orange">
                <h4 className="text-xl font-bold text-amber-orange mb-3">
                  The Core Hypocrisy
                </h4>
                <p className="text-cream-light leading-relaxed">
                  Jolin-Barrette cried for his daughter. His tears were seen. His pain was acknowledged. But voiceless victims from institutions he manages receive no such compassion. They receive no access. They receive no help.
                </p>
                <p className="text-cream-light leading-relaxed mt-4">
                  "My son lost his secondary education completely because of the system the government manages."
                </p>
                <p className="text-cream-light leading-relaxed mt-4 font-semibold">
                  Where is the compassion for these voiceless children?
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-amber-orange mb-3">The Message Never Received</h4>
                <p className="text-cream-light leading-relaxed">
                  Sean Fraser never told Jolin-Barrette that access to a Deputy is not limited to sexual abuse victims. Or perhaps he did, and Jolin-Barrette simply didn't care. Either way, the message never reached the voiceless victims who needed it most.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-amber-orange mb-3">Contact Information</h4>
                <p className="text-cream-light text-sm mb-2">
                  National Assembly of Quebec
                </p>
                <p className="text-cream-light text-sm">
                  Office of the Deputy: Quebec City, QC
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-light">
                <p className="text-amber-light font-semibold">
                  Status: Selective compassion (helps his own, ignores systemic victims)
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quebec Lawyers Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => toggleSection('lawyers')}
            className="w-full flex items-center justify-between bg-charcoal-light p-6 rounded-lg hover:bg-charcoal transition-colors"
          >
            <div className="text-left">
              <h2 className="text-3xl font-bold text-amber-orange mb-2">
                Quebec Lawyers
              </h2>
              <p className="text-cream-light">Failing Their Oath to Represent Children's Rights</p>
            </div>
            <ChevronDown
              size={32}
              className={`text-amber-orange transition-transform ${
                expandedSection === 'lawyers' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSection === 'lawyers' && (
            <div className="mt-6 bg-charcoal p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-amber-orange mb-4">
                  Lawyers Who Broke Their Oath
                </h3>
                <p className="text-cream-light leading-relaxed mb-4">
                  Quebec lawyers are bound by an oath to uphold justice and represent their clients' rights. Yet many have failed voiceless children whose cases involve systemic failures, child welfare negligence, and institutional abuse.
                </p>
                <p className="text-cream-light leading-relaxed mb-4">
                  These children—victims of DPJ (child welfare) failures, IVAC denials, and systemic neglect—deserve proper legal representation. Instead, they receive inadequate counsel, missed deadlines, and abandoned cases.
                </p>
              </div>

              <div className="bg-forest-green p-6 rounded-lg border-l-4 border-amber-orange">
                <h4 className="text-xl font-bold text-amber-orange mb-3">
                  The Broken Oath
                </h4>
                <p className="text-cream-light leading-relaxed mb-4">
                  Lawyers swear to:</p>
                <ul className="text-cream-light space-y-2 ml-4">
                  <li>✗ Represent their clients' interests faithfully</li>
                  <li>✗ Protect the rights of vulnerable populations</li>
                  <li>✗ Pursue justice without abandonment</li>
                  <li>✗ Ensure proper legal representation for all</li>
                </ul>
                <p className="text-cream-light leading-relaxed mt-4">
                  Yet children with no voice, no resources, and no family support receive none of these protections.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-amber-orange mb-3">
                  Specific Failures
                </h4>
                <ul className="text-cream-light space-y-3">
                  <li className="flex gap-3">
                    <span className="text-amber-orange font-bold">•</span>
                    <span>Inadequate representation in DPJ cases affecting Indigenous children</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-orange font-bold">•</span>
                    <span>Missed deadlines for IVAC (victim compensation) applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-orange font-bold">•</span>
                    <span>Failure to pursue systemic accountability against government bodies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-orange font-bold">•</span>
                    <span>Abandonment of cases involving vulnerable Indigenous youth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-orange font-bold">•</span>
                    <span>Lack of proper representation for children with no family support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal-light p-6 rounded-lg">
                <h4 className="text-xl font-bold text-amber-orange mb-3">
                  Call to Action
                </h4>
                <p className="text-cream-light leading-relaxed">
                  Quebec lawyers: Remember your oath. These voiceless children deserve the same quality of representation as wealthy clients. Systemic failures demand systemic accountability. Will you answer the call?
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-light">
                <p className="text-amber-light font-semibold">
                  Status: Systemic failure to represent vulnerable children
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16 px-4 bg-charcoal-light border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <div className="bg-forest-green p-8 rounded-lg border-l-4 border-amber-orange">
            <h3 className="text-2xl font-bold text-amber-orange mb-4">
              LEGAL NOTICE
            </h3>
            <p className="text-cream-light leading-relaxed mb-4">
              All statements on this page are based on documented correspondence, official records, and verified facts. This constitutes protected expression under the Canadian Charter of Rights and Freedoms, Section 2(b) (freedom of expression).
            </p>
            <p className="text-cream-light leading-relaxed mb-4">
              Reference: <em>Grant v. Torstar Corp.</em>, 2009 SCC 61 (responsible communication on matters of public interest); Indigenous rights jurisprudence.
            </p>
            <p className="text-cream-light leading-relaxed">
              These officials and institutions have a duty to serve all constituents and victims. Their failure to do so is a matter of public interest and government accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-amber-orange mb-6">
          Demand Accountability
        </h2>
        <p className="text-xl text-cream-light max-w-2xl mx-auto mb-8">
          Contact these officials. Demand they remember their duty to ALL voiceless victims, not just those with public sympathy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/accountability-tracker"
            className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            View Full Accountability Tracker
            <ExternalLink size={20} />
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-charcoal-light hover:bg-charcoal text-amber-orange px-8 py-4 rounded-lg font-semibold transition-colors border-2 border-amber-orange"
          >
            Return to Home
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
