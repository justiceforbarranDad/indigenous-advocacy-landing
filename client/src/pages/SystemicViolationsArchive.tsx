import { useState } from 'react';
import { ChevronDown, AlertTriangle, MapPin } from 'lucide-react';

/**
 * SYSTEMIC VIOLATIONS ARCHIVE - NEWSPAPER FORMAT
 * 
 * Newspaper-style documentation of DYP/DPJ institutional failures across Canada
 * Timeline: 2020-2026
 * Aesthetic: Black & white (2020-2023) → Color (2024-2026)
 */

const violations = [
  {
    year: 2020,
    period: '2020-2021: The Foundation of Failure',
    isColor: false,
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
    isColor: false,
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
    year: 2023,
    period: '2023-2024: Political Retaliation & Ghosting',
    isColor: false,
    provinces: [
      {
        name: 'Quebec - Political Intimidation',
        status: 'Nov 19, 2023: Cease-and-Desist Warning',
        failures: [
          'MNA Céline Haytayan threatens constituent',
          'Cease-and-desist for asking for help',
          'Constituent rights violated',
          'Political retaliation for advocacy'
        ],
        impact: 'Silencing of victim advocacy'
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
        name: 'National - Legal Profession Fails',
        status: 'Not 1 Lawyer Steps Up',
        failures: [
          'Legal profession ignores oath to protect children',
          'Legal Aid Quebec inadequate',
          'No lawyers willing to help',
          'Access to justice denied'
        ],
        impact: 'Victims have no legal recourse'
      }
    ]
  },
  {
    year: 2024,
    period: '2024-2025: Systemic Exposure & Pattern Emerges',
    isColor: true,
    provinces: [
      {
        name: 'All Provinces - Systemic Pattern',
        status: 'Same Failures Everywhere',
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
        name: 'Historical Parallels',
        status: 'Modern Residential Schools',
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
        name: 'International Law',
        status: 'UN Convention Rights Violated',
        failures: [
          'UN Convention on Rights of Child violated',
          'UN Declaration on Indigenous Rights ignored',
          'International Covenant breached',
          'Convention Against Torture principles violated'
        ],
        impact: 'International accountability required'
      }
    ]
  },
  {
    year: 2026,
    period: '2026: The Reckoning - Accountability NOW',
    isColor: true,
    provinces: [
      {
        name: 'Quebec - Feb 27, 2026',
        status: 'Governor General\'s Wellness Check',
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
        name: 'National - War Crimes Investigation',
        status: 'Systemic Abuse Across All Provinces',
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
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-500" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SYSTEMIC VIOLATIONS ARCHIVE</h1>
          <p className="text-lg md:text-xl opacity-90">
            DYP/DPJ Institutional Failures Across Canada: 2020-2026
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {violations.map((violation) => (
            <div key={violation.year}>
              {/* Year Header */}
              <button
                onClick={() => setExpandedYear(expandedYear === violation.year ? null : violation.year)}
                className={`w-full p-6 rounded-lg mb-6 transition-all flex items-center justify-between ${
                  violation.isColor
                    ? 'bg-gradient-to-r from-amber-100 to-amber-light border-4 border-amber-orange'
                    : 'bg-gradient-to-r from-yellow-100 to-yellow-50 border-4 border-yellow-900'
                }`}
              >
                <h2
                  className={`text-2xl md:text-3xl font-black ${
                    violation.isColor ? 'text-forest-green' : 'text-yellow-900'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {violation.period}
                </h2>
                <ChevronDown
                  className={`transition-transform ${expandedYear === violation.year ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>

              {/* Provinces */}
              {expandedYear === violation.year && (
                <div className="space-y-6">
                  {violation.provinces.map((province, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-500 ${
                        violation.isColor
                          ? 'bg-white border-4 border-amber-orange shadow-lg'
                          : 'bg-yellow-50 border-4 border-yellow-900 shadow-xl'
                      }`}
                      style={{
                        backgroundImage: violation.isColor
                          ? 'none'
                          : 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
                      }}
                    >
                      {/* Masthead */}
                      <div
                        className={`border-b-4 p-6 md:p-8 ${
                          violation.isColor
                            ? 'bg-white border-amber-orange'
                            : 'bg-yellow-100 border-yellow-900'
                        }`}
                      >
                        <div className={`text-xs md:text-sm font-bold tracking-widest mb-2 ${
                          violation.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}>
                          INSTITUTIONAL FAILURE REPORT
                        </div>
                        <h3
                          className={`text-2xl md:text-3xl font-black tracking-tight mb-1 ${
                            violation.isColor ? 'text-forest-green' : 'text-yellow-900'
                          }`}
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {province.name}
                        </h3>
                        <p
                          className={`text-xs md:text-sm font-semibold tracking-widest ${
                            violation.isColor ? 'text-charcoal' : 'text-yellow-800'
                          }`}
                        >
                          {province.status}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 space-y-6">
                        {/* Failures */}
                        <div>
                          <h4 className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                            violation.isColor ? 'text-amber-orange' : 'text-yellow-800'
                          }`}>
                            DOCUMENTED FAILURES
                          </h4>
                          <div className="space-y-3">
                            {province.failures.map((failure, i) => (
                              <div key={i} className="flex gap-3">
                                <span className={`font-black text-lg flex-shrink-0 ${
                                  violation.isColor ? 'text-amber-orange' : 'text-yellow-800'
                                }`}>
                                  ■
                                </span>
                                <p className={`text-sm ${
                                  violation.isColor ? 'text-charcoal' : 'text-yellow-900'
                                }`}>
                                  {failure}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Impact */}
                        <div className={`p-4 rounded border-l-4 ${
                          violation.isColor
                            ? 'bg-red-50 border-red-600'
                            : 'bg-yellow-100 border-yellow-800'
                        }`}>
                          <p className={`text-xs font-black tracking-widest mb-2 ${
                            violation.isColor ? 'text-red-700' : 'text-yellow-800'
                          }`}>
                            IMPACT ON VULNERABLE CHILDREN
                          </p>
                          <p className={`text-sm ${
                            violation.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}>
                            {province.impact}
                          </p>
                        </div>
                      </div>

                      {/* Edition Indicator */}
                      <div
                        className={`px-6 md:px-8 py-3 text-right border-t-2 ${
                          violation.isColor
                            ? 'bg-white border-amber-orange'
                            : 'bg-yellow-100 border-yellow-900'
                        }`}
                      >
                        <p
                          className={`text-xs font-semibold ${
                            violation.isColor ? 'text-charcoal/60' : 'text-yellow-900/60'
                          }`}
                        >
                          {violation.isColor ? '🌈 Color Edition' : '⬛ Black & White Edition'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SYSTEMIC FAILURE ACROSS ALL SECTORS
          </h2>
          <p className="text-lg opacity-90 mb-8">
            When DYP/DPJ agencies fail in every Canadian province, when politicians ghost vulnerable families, when the legal profession abandons victims, and when Indigenous organizations refuse to help—this is not coincidence. This is systemic.
          </p>
          <a href="/donate-comprehensive" className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-bold transition-colors">
            Support This Investigation
          </a>
        </div>
      </section>
    </div>
  );
}
