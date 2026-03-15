import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, File } from 'lucide-react';

/**
 * TRUTH VS. FALSE FACT-CHECK PAGE
 * 
 * Debunking government narratives about child protection
 * Exposing institutional lies about DYP/DPJ
 * Showing what these agencies actually do vs. what they claim
 */

const factChecks = [
  {
    claim: 'DYP/DPJ is designed to protect children',
    false: 'DYP/DPJ removes children from families and provides inadequate support, often causing more trauma than the original problem',
    evidence: [
      '50,000+ children in provincial care across Canada',
      '60%+ are Indigenous children (systemic racism)',
      'High rates of abuse in foster care',
      'Poor mental health outcomes',
      'Educational disruption',
      'Family separation without adequate follow-up'
    ],
    reality: 'DYP/DPJ is an institutional system that profits from child removal, not protection'
  },
  {
    claim: 'DYP/DPJ workers are trained to support families',
    false: 'DYP/DPJ workers are overloaded, underpaid, and often lack trauma-informed training',
    evidence: [
      'Average caseload: 20-30 cases per worker',
      'High staff turnover (50%+ annually)',
      'Inadequate mental health training',
      'No cultural competency for Indigenous families',
      'Burnout leads to poor decision-making',
      'Systemic failures documented in every province'
    ],
    reality: 'DYP/DPJ workers are victims of a broken system, not saviors'
  },
  {
    claim: '"Best interests of the child" guides all DYP/DPJ decisions',
    false: '"Best interests" is code for institutional convenience, not actual child welfare',
    evidence: [
      'Children removed without due process',
      'Family reunification delayed for years',
      'Mental health needs ignored',
      'Educational support withdrawn',
      'Cultural identity erased',
      'Decisions made without consulting families'
    ],
    reality: 'Institutional interests, not child welfare, drive DYP/DPJ decisions'
  },
  {
    claim: 'DYP/DPJ is accountable to families and communities',
    false: 'DYP/DPJ is protected by government and faces no real accountability',
    evidence: [
      'Complaints dismissed without investigation',
      'Ombudsman has limited power',
      'No independent oversight',
      'Officials ghost families for years',
      'Retaliation against advocates',
      'Cease-and-desist warnings to victims'
    ],
    reality: 'DYP/DPJ is a protected institution with zero accountability'
  },
  {
    claim: 'Renaming DYP to DPJ shows systemic reform',
    false: 'Renaming is performative gesture; same abuse continues under new name',
    evidence: [
      'Same failures documented after rename',
      'Same institutional structure',
      'Same lack of accountability',
      'Same overrepresentation of Indigenous children',
      'Same family separation practices',
      'Same ghosting of families'
    ],
    reality: 'Renaming agencies is not accountability; it\'s institutional camouflage'
  },
  {
    claim: 'Government agencies respond to constituent concerns',
    false: 'Government agencies systematically ghost families and retaliate against advocates',
    evidence: [
      'PMO: No response to family pleas',
      'MNA Céline Haytayan: Cease-and-desist warning',
      'AFN: Refuses to help First Nations child',
      'Amnesty Canada: Silent on systemic abuse',
      'Lawyers: Not 1 steps up to help victims',
      '6 years of ghosting documented'
    ],
    reality: 'Government institutions protect themselves, not families'
  },
  {
    claim: 'Orange Shirt Day represents real action for Indigenous children',
    false: 'Orange Shirt Day is performative activism; no real funding or systemic change',
    evidence: [
      'Photo ops with government leaders',
      'Shirts worn for one day, discarded after',
      'No funding for real support',
      'No systemic reform',
      'Same institutional failures continue',
      'Performative gestures replace real action'
    ],
    reality: 'Orange Shirt Day is performative activism, not accountability'
  },
  {
    claim: 'International law protects children\'s rights',
    false: 'International law is ignored by Canadian institutions with no enforcement',
    evidence: [
      'UN Convention on Rights of Child: Violated',
      'UN Declaration on Indigenous Rights: Ignored',
      'International Covenant on Civil/Political Rights: Breached',
      'Convention Against Torture: Principles violated',
      'No international investigation',
      'No accountability for violations'
    ],
    reality: 'International law is meaningless without enforcement'
  },
  {
    claim: 'Canada is a leader in human rights',
    false: 'Canada systematically violates child and Indigenous rights',
    evidence: [
      'Residential schools: 150,000+ children harmed',
      'Sixties Scoop: 20,000+ Indigenous children stolen',
      'Current DYP/DPJ: 50,000+ children in care',
      '60%+ Indigenous overrepresentation',
      'Missing and murdered Indigenous women/girls',
      'Ongoing systemic racism in institutions'
    ],
    reality: 'Canada has a history of institutional abuse that continues today'
  },
  {
    claim: 'Victims have access to justice',
    false: 'Victims are blocked from justice by institutional protection and lack of legal support',
    evidence: [
      'Legal Aid Quebec: Inadequate',
      'Private lawyers: Not stepping up',
      'Courts: Slow and expensive',
      'Government: Protects own agencies',
      'Retaliation: Against those who speak up',
      'Victims: Left to fight alone'
    ],
    reality: 'Justice system protects institutions, not victims'
  }
];

export default function TruthVsFalse() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            TRUTH vs. FALSE
          </h1>
          <p className="text-xl text-amber-light mb-6">
            Debunking Government Narratives About Child Protection
          </p>
          <p className="text-lg text-white/90">
            What DYP/DPJ claims vs. what actually happens to families
          </p>
        </div>
      </section>

      {/* Fact Checks */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {factChecks.map((check, idx) => (
            <div
              key={idx}
              className="border-2 border-charcoal rounded-lg overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full p-6 bg-charcoal text-white hover:bg-charcoal-light transition-colors flex items-start justify-between gap-4"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-bold mb-2">{check.claim}</h3>
                  <div className="flex items-center gap-2 text-amber-light">
                    <XCircle size={20} />
                    <span className="font-semibold">FALSE</span>
                  </div>
                </div>
                <div className="text-amber-light flex-shrink-0">
                  {expandedIndex === idx ? '−' : '+'}
                </div>
              </button>

              {/* Content */}
              {expandedIndex === idx && (
                <div className="p-6 bg-gray-50 space-y-6">
                  {/* The Truth */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="flex items-start gap-3 mb-2">
                      <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-red-700 text-lg">THE REALITY</h4>
                        <p className="text-red-900 text-lg mt-2">{check.false}</p>
                      </div>
                    </div>
                  </div>

                  {/* Evidence */}
                  <div>
                    <h4 className="font-bold text-charcoal text-lg mb-3 flex items-center gap-2">
                      <File size={20} className="text-amber-orange" />
                      EVIDENCE
                    </h4>
                    <ul className="space-y-2">
                      {check.evidence.map((item, i) => (
                        <li key={i} className="flex gap-3 p-3 bg-white rounded border-l-2 border-amber-orange">
                          <span className="text-amber-orange font-bold flex-shrink-0">•</span>
                          <span className="text-charcoal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What This Means */}
                  <div className="bg-charcoal text-white p-4 rounded">
                    <h4 className="font-bold text-amber-light mb-2">WHAT THIS MEANS</h4>
                    <p className="text-lg">{check.reality}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-amber-orange to-amber-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">
            THE PATTERN
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-4">WHAT THEY SAY</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-charcoal font-bold">•</span>
                  <span>"We protect children"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-charcoal font-bold">•</span>
                  <span>"We support families"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-charcoal font-bold">•</span>
                  <span>"We are accountable"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-charcoal font-bold">•</span>
                  <span>"We respond to concerns"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-charcoal font-bold">•</span>
                  <span>"We reform when needed"</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-4">WHAT ACTUALLY HAPPENS</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Children are removed and traumatized</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Families are abandoned</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Institutions protect themselves</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Families are ghosted and retaliated against</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Renaming agencies replaces real reform</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            DON'T BELIEVE THE LIES
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Institutions will tell you they are protecting children. They will tell you they are accountable. 
            They will tell you they are reforming. Don't believe them. Look at the evidence. Look at the families 
            they have destroyed. Look at the children still suffering.
          </p>
          <p className="text-2xl font-bold text-amber-light">
            THE ONLY TRUTH IS ACTION
          </p>
        </div>
      </section>
    </div>
  );
}
