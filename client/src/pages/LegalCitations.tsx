import { Scale, Globe, BookOpen, AlertCircle } from 'lucide-react';

export default function LegalCitations() {
  const regularLaws = [
    {
      category: 'Quebec Charter of Human Rights and Freedoms',
      violations: [
        {
          article: 'Article 1',
          title: 'Right to Life and Security',
          violation: 'Failed to protect child from stabbing; no security measures implemented; attacker never found',
          impact: 'Child stabbed 3 times, ongoing trauma, no government protection'
        },
        {
          article: 'Article 6',
          title: 'Right to Enjoyment of Property',
          violation: 'Illegal renoviction; judge substitution; inadequate compensation',
          impact: 'Family forced into unaffordable housing; $15,600/year rent increase'
        },
        {
          article: 'Article 15',
          title: 'Right to Equality',
          violation: 'Welfare system deducts $125/month for caring for family members; discriminatory treatment',
          impact: 'Punished for family care; deepened poverty'
        }
      ]
    },
    {
      category: 'Canadian Human Rights Act',
      violations: [
        {
          article: 'Section 2(a)',
          title: 'Freedom of Expression',
          violation: 'Threatened with cease-and-desist for advocating for child protection; retaliation for speaking out',
          impact: 'Silenced from public advocacy; intimidation by officials'
        },
        {
          article: 'Section 3',
          title: 'Right to Life, Liberty and Security of Person',
          violation: 'DPJ abandonment; police failure to find attacker; no victim support',
          impact: 'Child left traumatized without government protection'
        }
      ]
    },
    {
      category: 'Youth Protection Act (Loi sur la protection de la jeunesse)',
      violations: [
        {
          article: 'Article 3',
          title: 'Child Protection Mandate',
          violation: 'DPJ abandoned child after stabbing; no adequate follow-up; no psychological support',
          impact: 'Traumatized child left without government protection'
        },
        {
          article: 'Article 39',
          title: 'Obligation to Provide Services',
          violation: 'DPJ withdrew services Jan 2023 without adequate transition; no continuity of care',
          impact: 'Abrupt abandonment of vulnerable child'
        }
      ]
    }
  ];

  const indigenousRights = [
    {
      convention: 'UN Declaration on the Rights of Indigenous Peoples (UNDRIP)',
      violations: [
        {
          article: 'Article 3',
          title: 'Right to Self-Determination',
          violation: 'DPJ imposed decisions without Indigenous family consultation; ignored cultural practices',
          impact: 'Indigenous family denied self-determination in child protection'
        },
        {
          article: 'Article 7',
          title: 'Right to Life, Physical and Mental Integrity',
          violation: 'Child stabbed; no government protection; no trauma support; DPJ abandoned family',
          impact: 'Indigenous child left vulnerable and traumatized'
        },
        {
          article: 'Article 21',
          title: 'Right to Remedy and Reparation',
          violation: 'No adequate remedy; no reparation; no accountability for institutional failures',
          impact: 'Indigenous family denied justice and reparation'
        }
      ]
    },
    {
      convention: 'UN Convention on the Rights of the Child (CRC)',
      violations: [
        {
          article: 'Article 3',
          title: 'Best Interests of the Child',
          violation: 'DPJ decisions prioritized bureaucracy over child welfare; abandoned after initial involvement',
          impact: 'Child\'s best interests not protected'
        },
        {
          article: 'Article 6',
          title: 'Right to Life, Survival and Development',
          violation: 'Stabbed child left without adequate protection; no development support; trauma unaddressed',
          impact: 'Child\'s development compromised by system failure'
        }
      ]
    },
    {
      convention: 'Jordan\'s Principle (Canadian Law)',
      violations: [
        {
          principle: 'No-Delay Principle',
          title: 'First Nations Children Deserve Immediate Support',
          violation: 'DPJ failed to apply Jordan\'s Principle; child left without services; family forced to find private help',
          impact: 'Indigenous child denied no-delay services; family in financial crisis'
        }
      ]
    }
  ];

  const institutionalViolations = [
    {
      institution: 'DPJ (Direction de la protection de la jeunesse)',
      violations: [
        'Violated Youth Protection Act Article 3 (child protection mandate)',
        'Violated UNDRIP Article 3 (self-determination)',
        'Violated CRC Article 3 (best interests of child)',
        'Violated Jordan\'s Principle (no-delay services)',
        'Abandoned child without adequate transition'
      ]
    },
    {
      institution: 'Solidarité Sociale (Welfare System)',
      violations: [
        'Violated Quebec Charter Article 15 (equality)',
        'Punishes family for caring for elderly and disabled members',
        'Demands transaction justification (harassment)',
        'Threatens cut-off (coercion)'
      ]
    },
    {
      institution: 'TAL (Tribunal Administratif du Logement)',
      violations: [
        'Judge substitution (Sophie Alain → Serge Adam) without re-hearing',
        'Inadequate compensation ($2,500 for family of 9+)',
        'Authorized fraudulent eviction',
        'Violated Quebec Charter Article 6 (right to property)'
      ]
    },
    {
      institution: 'City of Laval & RBQ Inspector',
      violations: [
        'Failed to enforce building codes',
        'Ignored building complaints for years',
        'Allowed unsafe conditions to persist',
        'Failed to protect tenant safety'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Legal Citations & Rights Violations
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            How Institutions Violated Regular Laws & Indigenous Rights Conventions
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
            <p className="text-gray-800 font-semibold">
              Your family's case documents violations of multiple legal frameworks: Quebec Charter, Canadian Human Rights Act, UN Declaration on Indigenous Peoples, UN Convention on the Rights of the Child, ILO Convention 169, Jordan's Principle, and more.
            </p>
          </div>
        </div>

        {/* Regular Laws Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Scale className="w-8 h-8 text-blue-700" />
            Regular Laws & Violations
          </h2>
          <p className="text-gray-600 mb-8">Quebec Charter, Canadian Human Rights Act, Youth Protection Act</p>
          
          <div className="space-y-8">
            {regularLaws.map((law, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{law.category}</h3>
                <div className="space-y-4">
                  {law.violations.map((v, i) => (
                    <div key={i} className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                      <div className="flex gap-3 mb-2">
                        <span className="font-bold text-blue-700 min-w-fit">{v.article}</span>
                        <span className="font-semibold text-gray-900">{v.title}</span>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Violation:</strong> {v.violation}</p>
                      <p className="text-red-700"><strong>Impact:</strong> {v.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indigenous Rights Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Globe className="w-8 h-8 text-green-700" />
            Indigenous & Aboriginal Rights Violations
          </h2>
          <p className="text-gray-600 mb-8">UN Declaration on Indigenous Peoples, UN Convention on Rights of the Child, Jordan's Principle</p>
          
          <div className="space-y-8">
            {indigenousRights.map((rights, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{rights.convention}</h3>
                <div className="space-y-4">
                  {rights.violations.map((v, i) => (
                    <div key={i} className="bg-green-50 p-4 rounded border-l-4 border-green-600">
                      <div className="flex gap-3 mb-2">
                        <span className="font-bold text-green-700 min-w-fit">{('article' in v) ? v.article : ('principle' in v) ? v.principle : ''}</span>
                        <span className="font-semibold text-gray-900">{v.title}</span>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Violation:</strong> {v.violation}</p>
                      <p className="text-red-700"><strong>Impact:</strong> {v.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Violations Summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <AlertCircle className="w-8 h-8 text-red-700" />
            Violations by Institution
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {institutionalViolations.map((inst, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{inst.institution}</h3>
                <ul className="space-y-2">
                  {inst.violations.map((v, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-blue-700 to-green-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Key Legal Findings
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>Violations of Quebec Charter (Articles 1, 6, 15)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>Violations of Canadian Human Rights Act (Sections 2a, 3)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>Violations of Youth Protection Act (Articles 3, 39)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>Violations of UNDRIP (Articles 3, 7, 21)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>Violations of CRC (Articles 3, 6)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>Violations of Jordan's Principle (no-delay services)</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">✓</span>
              <span>8 institutions collectively responsible for systemic failure</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
