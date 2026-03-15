import { useState } from 'react';
import { ChevronDown, AlertTriangle, FileText, MapPin } from 'lucide-react';

/**
 * SYSTEMIC VIOLATIONS ARCHIVE
 * 
 * Newspaper-style documentation of DYP/DPJ institutional failures across Canada
 * Timeline: 2020-2026
 * Aesthetic: Black & white (2020-2023) → Color (2024-2026)
 * 
 * This page documents:
 * - DYP/DPJ failures in every Canadian province
 * - Pattern of abuse and renaming (no accountability)
 * - Historical parallels (residential schools, Sixties Scoop)
 * - International law violations
 * - Systemic nature of institutional abuse
 */

const violations = [
  {
    year: 2020,
    period: '2020-2021: The Foundation of Failure',
    color: 'grayscale',
    provinces: [
      {
        name: 'Quebec',
        status: 'DYP Active',
        failures: [
          'Inadequate response to family trauma',
          'Lack of mental health support',
          'Educational disruption',
          'No follow-up after intervention'
        ],
        impact: '1000+ children affected annually'
      },
      {
        name: 'Ontario',
        status: 'CAS Systemic Failures',
        failures: [
          'Children removed without due process',
          'Inadequate foster care oversight',
          'Lack of cultural sensitivity for Indigenous children',
          'Delayed reunification'
        ],
        impact: '15,000+ children in care'
      },
      {
        name: 'British Columbia',
        status: 'MCFD Failures',
        failures: [
          'Underfunded services',
          'Staff burnout and turnover',
          'Inadequate Indigenous consultation',
          'Delayed response to abuse reports'
        ],
        impact: '8,000+ children in care'
      }
    ]
  },
  {
    year: 2021,
    period: '2021-2022: The Stabbing - System Fails to Protect',
    color: 'grayscale',
    provinces: [
      {
        name: 'Quebec - The Trigger Event',
        status: 'Feb 14, 2021: Child Stabbed 3 Times',
        failures: [
          'DYP involvement but no adequate protection',
          'No mental health intervention after trauma',
          'Educational system failed to support',
          'Family left without resources',
          'System blamed family instead of protecting'
        ],
        impact: 'Barran: Severe trauma, PTSD, educational loss'
      },
      {
        name: 'Alberta',
        status: 'Child Intervention Failures',
        failures: [
          'Inadequate investigation protocols',
          'Lack of trauma-informed care',
          'Poor coordination between agencies',
          'Insufficient Indigenous representation'
        ],
        impact: '6,000+ children in care'
      },
      {
        name: 'Manitoba',
        status: 'CFS Systemic Crisis',
        failures: [
          'Chronic underfunding',
          'High caseloads per worker',
          'Inadequate Indigenous consultation',
          'Poor outcomes for First Nations children'
        ],
        impact: '9,000+ children in care, 60% Indigenous'
      }
    ]
  },
  {
    year: 2022,
    period: '2022-2023: Ghosting Begins - Institutions Abandon Families',
    color: 'grayscale',
    provinces: [
      {
        name: 'Quebec - DYP Withdrawal',
        status: 'Jan 2023: DYP Withdraws Support',
        failures: [
          'Abrupt withdrawal without follow-up plan',
          'No transition to other services',
          'Family left in crisis',
          'Mental health support abandoned',
          'Educational support ended'
        ],
        impact: 'Complete system collapse for family'
      },
      {
        name: 'Federal Level - PMO Ghosting',
        status: 'No Response to Constituent Pleas',
        failures: [
          'Prime Minister\'s Office ignores family crisis',
          'No acknowledgment of systemic failures',
          'Jordan\'s Principle not applied',
          'First Nations child rights ignored'
        ],
        impact: 'Federal accountability absent'
      },
      {
        name: 'National - Lawyer Accountability Crisis',
        status: 'Legal Profession Fails Victims',
        failures: [
          'NOT 1 lawyer steps up to help',
          'Legal Aid Quebec inadequate',
          'Lawyers ignore oath to protect children',
          'Access to justice denied'
        ],
        impact: 'Victims have no legal recourse'
      }
    ]
  },
  {
    year: 2023,
    period: '2023-2024: Political Retaliation - Cease & Desist',
    color: 'transitioning',
    provinces: [
      {
        name: 'Quebec - Political Intimidation',
        status: 'Nov 19, 2023: Cease-and-Desist Warning',
        failures: [
          'MNA Céline Haytayan threatens constituent',
          'Cease-and-desist for asking for help',
          'Constituent rights violated',
          'Political retaliation for advocacy',
          'Charter s.2(b) rights threatened'
        ],
        impact: 'Silencing of victim advocacy'
      },
      {
        name: 'Indigenous Organizations - AFN Failure',
        status: 'AFN Refuses to Help',
        failures: [
          'Assembly of First Nations refuses assistance',
          'Claims child not status/band member',
          'Abandons vulnerable Indigenous child',
          'Institutional racism within Indigenous orgs'
        ],
        impact: 'First Nations child left without support'
      },
      {
        name: 'International - Amnesty Canada Silent',
        status: 'Amnesty Canada Ghosted',
        failures: [
          'Human rights organization ignores case',
          'No response to systemic violations',
          'Performative activism, no action',
          'International standards ignored'
        ],
        impact: 'Global accountability absent'
      }
    ]
  },
  {
    year: 2024,
    period: '2024-2025: Systemic Exposure - Pattern Emerges',
    color: 'color',
    provinces: [
      {
        name: 'All Provinces - Systemic Pattern',
        status: 'DYP/DPJ Failures Documented Everywhere',
        failures: [
          'Same failures repeated in every province',
          'Agencies renamed but abuse continues',
          'Systemic nature of institutional failure',
          'Pattern of ghosting and retaliation',
          'Renaming agencies = no accountability'
        ],
        impact: 'Thousands of families affected'
      },
      {
        name: 'Historical Parallels - Residential Schools Legacy',
        status: 'Modern Institutions Continue Abuse',
        failures: [
          'DYP/DPJ = modern residential schools',
          'Same institutional violence',
          'Same removal of children from families',
          'Same cultural erasure',
          'Same lack of accountability'
        ],
        impact: 'Intergenerational trauma continues'
      },
      {
        name: 'International Law - Violations Documented',
        status: 'UN Convention Rights Violated',
        failures: [
          'UN Convention on Rights of Child violated',
          'UN Declaration on Indigenous Rights ignored',
          'International Covenant on Civil/Political Rights breached',
          'Convention Against Torture principles violated'
        ],
        impact: 'International accountability required'
      }
    ]
  },
  {
    year: 2026,
    period: '2026: The Reckoning - Accountability NOW',
    color: 'color',
    provinces: [
      {
        name: 'Quebec - Feb 27, 2026 Wellness Check',
        status: 'Governor General\'s Office Final Insult',
        failures: [
          'Wellness check instead of justice',
          'Performative gesture, no action',
          'System still protecting itself',
          'Victim still fighting alone',
          'No real accountability'
        ],
        impact: 'Victim forced to fight for justice alone'
      },
      {
        name: 'National - Call for War Crimes Investigation',
        status: 'Systemic Abuse = War Crimes',
        failures: [
          'Institutional abuse across all provinces',
          'Pattern of retaliation against advocates',
          'Systematic denial of rights',
          'Institutional protection of abusers',
          'No accountability for decades'
        ],
        impact: 'International investigation required'
      },
      {
        name: 'Global - Children of All Nations',
        status: 'International Crisis Documented',
        failures: [
          'Missing children crisis (not just USA)',
          'Trafficking and exploitation systemic',
          'Institutions complicit in abuse',
          'Performative activism (Orange Shirt Day)',
          'Real action needed NOW'
        ],
        impact: 'All vulnerable children at risk'
      }
    ]
  }
];

export default function SystemicViolationsArchive() {
  const [expandedYear, setExpandedYear] = useState<number | null>(2026);
  const [expandedProvince, setExpandedProvince] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            SYSTEMIC VIOLATIONS ARCHIVE
          </h1>
          <p className="text-xl text-amber-light mb-6">
            DYP/DPJ Institutional Failures Across Canada: 2020-2026
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-orange">
            <AlertTriangle size={24} />
            <span className="font-semibold">Pattern of Abuse. Renaming Agencies. No Accountability.</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {violations.map((violation) => (
            <div key={violation.year} className="mb-12">
              {/* Year Header */}
              <button
                onClick={() => setExpandedYear(expandedYear === violation.year ? null : violation.year)}
                className={`w-full p-6 rounded-lg mb-6 transition-all ${
                  violation.color === 'grayscale'
                    ? 'bg-gray-200 text-charcoal hover:bg-gray-300'
                    : violation.color === 'transitioning'
                    ? 'bg-gradient-to-r from-gray-200 to-amber-100 text-charcoal'
                    : 'bg-gradient-to-r from-amber-100 to-amber-light text-charcoal'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h2 className="text-3xl font-bold mb-2">{violation.year}</h2>
                    <p className="text-lg font-semibold">{violation.period}</p>
                  </div>
                  <ChevronDown
                    size={32}
                    className={`transition-transform ${expandedYear === violation.year ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Provinces */}
              {expandedYear === violation.year && (
                <div className="space-y-4">
                  {violation.provinces.map((province) => (
                    <div
                      key={province.name}
                      className={`border-l-4 p-6 rounded ${
                        violation.color === 'grayscale'
                          ? 'bg-gray-50 border-gray-400'
                          : violation.color === 'transitioning'
                          ? 'bg-amber-50 border-amber-300'
                          : 'bg-amber-50 border-amber-orange'
                      }`}
                    >
                      <button
                        onClick={() =>
                          setExpandedProvince(expandedProvince === province.name ? null : province.name)
                        }
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{province.name}</h3>
                            <p className="text-lg font-semibold text-amber-orange">{province.status}</p>
                          </div>
                          <ChevronDown
                            size={24}
                            className={`transition-transform flex-shrink-0 ${
                              expandedProvince === province.name ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {expandedProvince === province.name && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <h4 className="font-bold text-charcoal-light mb-2">SYSTEMIC FAILURES:</h4>
                            <ul className="space-y-2">
                              {province.failures.map((failure, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <span className="text-amber-orange font-bold">•</span>
                                  <span>{failure}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded border-l-4 border-amber-orange">
                            <p className="font-bold text-charcoal-light">IMPACT:</p>
                            <p className="text-charcoal">{province.impact}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Key Findings */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">KEY FINDINGS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-charcoal-light p-6 rounded">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">SYSTEMIC PATTERN</h3>
              <p className="text-lg leading-relaxed">
                Same failures repeated in every Canadian province. DYP/DPJ agencies renamed but abuse continues. 
                Pattern of institutional failure is not isolated—it's systemic.
              </p>
            </div>
            <div className="bg-charcoal-light p-6 rounded">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">HISTORICAL PARALLELS</h3>
              <p className="text-lg leading-relaxed">
                Modern DYP/DPJ = Residential Schools. Same institutional violence. Same removal of children. 
                Same cultural erasure. Same lack of accountability. Intergenerational trauma continues.
              </p>
            </div>
            <div className="bg-charcoal-light p-6 rounded">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">INTERNATIONAL VIOLATIONS</h3>
              <p className="text-lg leading-relaxed">
                UN Convention on Rights of Child violated. UN Declaration on Indigenous Rights ignored. 
                International Covenant on Civil and Political Rights breached. War crimes investigation required.
              </p>
            </div>
            <div className="bg-charcoal-light p-6 rounded">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">CALL TO ACTION</h3>
              <p className="text-lg leading-relaxed">
                Renaming agencies is not accountability. Performative activism (Orange Shirt Day) is not action. 
                Real change requires real investigation, real prosecution, real justice. NOW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">SCALE OF INSTITUTIONAL ABUSE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-5xl font-bold text-amber-orange mb-2">50,000+</div>
              <p className="text-xl font-semibold">Children in Provincial Care</p>
              <p className="text-charcoal-light mt-2">Across all Canadian provinces</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-5xl font-bold text-amber-orange mb-2">60%+</div>
              <p className="text-xl font-semibold">Indigenous Children</p>
              <p className="text-charcoal-light mt-2">Overrepresented in child welfare</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-5xl font-bold text-amber-orange mb-2">6 YEARS</div>
              <p className="text-xl font-semibold">Ongoing Fight for Justice</p>
              <p className="text-charcoal-light mt-2">2020-2026: Still no accountability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-amber-orange to-amber-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            RENAMING AGENCIES IS NOT ACCOUNTABILITY
          </h2>
          <p className="text-xl text-charcoal mb-8 leading-relaxed">
            They changed the name from DYP to DPJ. They changed nothing else. Same abuse. Same failures. 
            Same institutional protection. Same lack of accountability.
          </p>
          <p className="text-2xl font-bold text-charcoal">
            WHERE IS THE ACTION?
          </p>
        </div>
      </section>
    </div>
  );
}
