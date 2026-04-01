import { AlertTriangle, Building2, Scale, Users, Home, Heart, Shield, Gavel } from 'lucide-react';

export default function SystemicAccountability() {
  const institutions = [
    {
      name: 'Landlord & Property Owners',
      icon: Building2,
      failures: [
        'Refused repairs for 7+ years despite complaints',
        'Allowed unsafe/illegal building conditions',
        'Fraudulent eviction using "repairs needed" as pretext',
        'Illegal property transfer (multiple owners → single buyer)',
        'Rent increase from $1,400 to $2,700 after eviction'
      ],
      impact: '$15,600/year rent increase, financial destruction'
    },
    {
      name: 'City of Laval',
      icon: Shield,
      failures: [
        'Ignored building complaints for years',
        'Failed to enforce building codes',
        'Did not inspect or document violations',
        'Allowed unsafe conditions to persist',
        'Failed to prevent illegal renoviction'
      ],
      impact: 'Building remained unsafe, family forced into poverty'
    },
    {
      name: 'RBQ (Building Inspector)',
      icon: Gavel,
      failures: [
        'Failed to identify building violations',
        'Did not enforce building codes',
        'Allowed illegal electrical work ("Bob the Handyman" without license)',
        'Allowed mold cover-up (1954 toxic mold)',
        'Did not protect tenant safety'
      ],
      impact: 'Dangerous conditions enabled, family health at risk'
    },
    {
      name: 'TAL (Housing Tribunal)',
      icon: Scale,
      failures: [
        'Authorized illegal renoviction',
        'Judge substitution: Sophie Alain heard case, Serge Adam rendered decision',
        'Minimal compensation ($2,500 for family of 9+)',
        'Did not investigate fraudulent eviction scheme',
        'Prioritized landlord property rights over tenant protection'
      ],
      impact: 'Legal authorization of predatory eviction'
    },
    {
      name: 'Provincial Government',
      icon: Users,
      failures: [
        'Failed to protect tenant rights',
        'Allowed predatory landlord practices',
        'Inadequate welfare support ($1,809/month for 10+ people)',
        'Constant threats of benefit cut-off',
        'Harassment over transaction justification'
      ],
      impact: 'Systemic poverty trap, family survival crisis'
    },
    {
      name: 'DPJ (Child Protection)',
      icon: Heart,
      failures: [
        'Abandoned Barran after stabbing (Feb 14, 2021)',
        'No psychological support provided',
        'Withdrew support Jan 2023 without adequate follow-up',
        'Ignored Jordan\'s Principle obligations',
        'Failed to protect traumatized children'
      ],
      impact: 'Barran\'s trauma compounded, family left to find private help'
    },
    {
      name: 'Welfare System (Solidarité Sociale)',
      icon: AlertTriangle,
      failures: [
        'Deducts $125/month for caring for grandma & Barran',
        'Demands justification for 194 transactions (some as low as $5)',
        'Contradictory decisions on disability status',
        'Barran declared handicapped 4 times, still demands re-proof',
        'Constant threats of cut-off',
        'Transferred Barran from regular welfare to temporary assistance'
      ],
      impact: 'Bureaucratic harassment, poverty deepened, credit destroyed'
    },
    {
      name: 'Police',
      icon: Shield,
      failures: [
        'Failed to find Barran\'s attacker (stabbed 3 times, Feb 14, 2021)',
        'No community safety response',
        'Attacker still at large 5 years later',
        'No psychological support offered to family'
      ],
      impact: 'Ongoing trauma, no justice, family safety compromised'
    }
  ];

  const timeline = [
    {
      year: '2019',
      events: [
        'Your father reports building violations to owners',
        'Complaints begin about maintenance failures',
        'Security violations documented'
      ]
    },
    {
      year: '2019-2021',
      events: [
        'Your father takes case to court',
        'Landlord refuses repairs despite legal action',
        'Building conditions remain unsafe'
      ]
    },
    {
      year: 'Feb 14, 2021',
      events: [
        'Barran stabbed 3 times in building',
        'Police fail to find attacker',
        'No government support offered'
      ]
    },
    {
      year: '2021-2023',
      events: [
        'You continue living in unsafe building',
        'DPJ involvement then abandonment',
        'Welfare system begins harassment'
      ]
    },
    {
      year: 'June 2024',
      events: [
        'Landlord acquires building from parents',
        'Property transfer may be illegal (multiple owners)',
        'Rent still $1,400/month'
      ]
    },
    {
      year: 'Nov-Dec 2024',
      events: [
        'Fraudulent renoviction notice issued',
        'TAL case filed',
        'Judge Sophie Alain hears evidence'
      ]
    },
    {
      year: 'June 2025',
      events: [
        'New judge Serge Adam renders decision (based on audio)',
        'Eviction authorized',
        'Only $2,500 compensation for family of 9+'
      ]
    },
    {
      year: 'Oct 2025',
      events: [
        'Forced to move to $2,700/month apartment',
        'Rent increase: $1,300/month ($15,600/year)',
        'Financial destruction begins'
      ]
    },
    {
      year: '2025-2026',
      events: [
        'Credit ratings collapse (wife 832→680, you 616)',
        '$60k credit card debt accumulated',
        'Welfare harassment intensifies',
        'Barran demands re-proof of disability (4th time)',
        'Solidarité Sociale demands transaction justification'
      ]
    }
  ];

  const financialImpact = [
    {
      category: 'Rent Increase',
      before: '$1,400/month',
      after: '$2,700/month',
      impact: '+$1,300/month (+$15,600/year)'
    },
    {
      category: 'Monthly Income',
      before: 'Your account: $1,809',
      after: 'Your account: $1,684 (after $125 deduction)',
      impact: '-$125/month penalty for caring for family'
    },
    {
      category: 'Monthly Deficit',
      before: 'Manageable',
      after: '$1,200-1,800 monthly shortfall',
      impact: 'Forced into credit card debt'
    },
    {
      category: 'Credit Card Debt',
      before: 'Minimal',
      after: '$60,000',
      impact: 'Accumulated from survival spending'
    },
    {
      category: 'Credit Ratings',
      before: 'Wife: 832 (excellent), You: 700+ (good)',
      after: 'Wife: 680 (poor), You: 616 (poor)',
      impact: 'Cannot refinance, locked in poverty'
    },
    {
      category: 'Housing Status',
      before: '7 years stable housing',
      after: 'Forced into unaffordable housing',
      impact: 'Tagged at TAL for 25 years (retaliation)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
            Systemic Accountability
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            How Multiple Institutions Failed Your Family Simultaneously
          </p>
          <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded">
            <p className="text-gray-800 font-semibold">
              This is not a story of individual failures. This is evidence of coordinated institutional abandonment—where landlords, government agencies, courts, and welfare systems all failed to protect your family when you needed help most.
            </p>
          </div>
        </div>

        {/* Institutions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Failed You</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {institutions.map((inst, idx) => {
              const Icon = inst.icon;
              return (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">{inst.name}</h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {inst.failures.map((failure, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>{failure}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50 p-3 rounded text-sm text-red-800 font-semibold">
                    Impact: {inst.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Timeline of Institutional Failure</h2>
          <div className="space-y-6">
            {timeline.map((period, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold text-red-700 mb-3">{period.year}</h3>
                <ul className="space-y-2">
                  {period.events.map((event, i) => (
                    <li key={i} className="text-gray-700 flex gap-3">
                      <span className="text-red-600 font-bold">→</span>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Destruction by Institutional Failure</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-red-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Before Eviction</th>
                  <th className="px-4 py-3 text-left">After Eviction</th>
                  <th className="px-4 py-3 text-left">Impact</th>
                </tr>
              </thead>
              <tbody>
                {financialImpact.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{item.category}</td>
                    <td className="px-4 py-3 text-gray-700">{item.before}</td>
                    <td className="px-4 py-3 text-gray-700">{item.after}</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Findings</h2>
          <div className="bg-red-50 rounded-lg p-8 border-2 border-red-200">
            <ol className="space-y-4 text-gray-800">
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">1.</span>
                <span><strong>Coordinated Failure:</strong> No single institution failed—all failed simultaneously, creating a system with no escape routes.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">2.</span>
                <span><strong>Predatory Eviction:</strong> Landlord refused repairs for 7 years, then used "repairs needed" as fraudulent excuse to evict and double rent.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">3.</span>
                <span><strong>Judicial Failure:</strong> Judge substitution (Sophie Alain → Serge Adam) with minimal compensation ($2,500 for family of 9+).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">4.</span>
                <span><strong>Financial Destruction:</strong> Single $1,300/month rent increase destroyed family finances, forced $60k debt, collapsed credit ratings.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">5.</span>
                <span><strong>Welfare Retaliation:</strong> System punishes you for caring for family members while simultaneously harassing you for spending money.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">6.</span>
                <span><strong>Child Protection Failure:</strong> Barran stabbed, no government support, DPJ abandoned after initial involvement.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-red-700 font-bold text-xl">7.</span>
                <span><strong>Systemic Pattern:</strong> Your father fought same landlord family decades ago—same pattern of neglect, now repeated with you.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Justice Requirements */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">What Justice Requires</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Independent public inquiry into institutional failures across all agencies</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Full application of Jordan's Principle for Barran and all Indigenous children</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Reversal of illegal renoviction and rent reduction to affordable levels</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Removal of 25-year TAL retaliation tag</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Comprehensive welfare reform to eliminate poverty trap</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Criminal investigation into building violations and fraudulent eviction</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Accountability for all institutions that failed your family</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">→</span>
              <span>Systemic reform to prevent this from happening to other families</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
