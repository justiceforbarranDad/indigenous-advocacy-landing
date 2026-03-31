import { useState } from 'react';
import { Zap, TrendingUp, Award, Target } from 'lucide-react';

export default function DonationMilestones() {
  const [currentAmount] = useState(0); // This would be fetched from backend in production

  const milestones = [
    {
      amount: 50000,
      label: '$50,000',
      percentage: 10,
      status: currentAmount >= 50000 ? 'completed' : 'pending',
      achievements: [
        '✓ Lead counsel hired',
        '✓ Legal strategy finalized',
        '✓ First book research begins',
        '✓ Foundation setup complete'
      ],
      color: 'bg-blue-600'
    },
    {
      amount: 100000,
      label: '$100,000',
      percentage: 20,
      status: currentAmount >= 100000 ? 'completed' : 'pending',
      achievements: [
        '✓ Court proceedings begin',
        '✓ First book published',
        '✓ School distribution starts',
        '✓ Media campaign launches'
      ],
      color: 'bg-green-600'
    },
    {
      amount: 250000,
      label: '$250,000',
      percentage: 50,
      status: currentAmount >= 250000 ? 'completed' : 'pending',
      achievements: [
        '✓ 3 books published',
        '✓ University partnerships established',
        '✓ 25,000+ students reached',
        '✓ Policy recommendations submitted'
      ],
      color: 'bg-amber-orange'
    },
    {
      amount: 500000,
      label: '$500,000',
      percentage: 100,
      status: currentAmount >= 500000 ? 'completed' : 'pending',
      achievements: [
        '✓ Full legal team assembled',
        '✓ All 5 books published',
        '✓ International distribution',
        '✓ 50,000+ students/year reached',
        '✓ Major policy changes influenced',
        '✓ Foundation fully operational'
      ],
      color: 'bg-forest-green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            Donation Milestones
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Track Our Progress to $500,000
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Every milestone reached means real progress: more legal resources, more books published, more students educated, more systemic change.
          </p>
        </div>

        {/* Current Progress */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-forest-green">Current Progress</h2>
            <div className="text-right">
              <p className="text-4xl font-bold text-amber-orange">${currentAmount.toLocaleString()}</p>
              <p className="text-charcoal-light">of $500,000 goal</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-forest-green to-amber-orange h-full transition-all duration-500"
              style={{ width: `${(currentAmount / 500000) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-center text-charcoal-light mt-4">
            {((currentAmount / 500000) * 100).toFixed(1)}% Complete
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Milestone Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((milestone, idx) => (
              <div 
                key={idx}
                className={`border-4 rounded-lg p-8 transition-all ${
                  milestone.status === 'completed' 
                    ? 'bg-green-50 border-green-600' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-charcoal mb-2">{milestone.label}</h3>
                    <p className="text-charcoal-light">{milestone.percentage}% of Goal</p>
                  </div>
                  <div className={`${milestone.color} text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0`}>
                    {milestone.status === 'completed' ? (
                      <Award size={32} />
                    ) : (
                      <Target size={32} />
                    )}
                  </div>
                </div>

                {milestone.status === 'completed' && (
                  <div className="mb-6 p-3 bg-green-600 text-white rounded font-bold text-center">
                    ✓ MILESTONE ACHIEVED
                  </div>
                )}

                <div className="space-y-2">
                  {milestone.achievements.map((achievement, i) => (
                    <p key={i} className="text-charcoal-light">{achievement}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">What Each Milestone Means</h2>
          
          <div className="space-y-6">
            {/* $50k */}
            <div className="bg-blue-50 border-4 border-blue-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold text-blue-600">$50,000 - Foundation Launch</h3>
              </div>
              <p className="text-charcoal-light mb-4">
                At $50,000, we can establish the McGovern Foundation legally, hire our lead counsel, and begin comprehensive legal strategy development. This is the critical first step.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                <p className="font-semibold text-charcoal mb-2">What Happens:</p>
                <ul className="space-y-1 text-charcoal-light text-sm">
                  <li>✓ Notary and lawyer fees for foundation setup</li>
                  <li>✓ CRA charitable registration begins</li>
                  <li>✓ Lead counsel ($80k/year) hired</li>
                  <li>✓ Legal research and case documentation begins</li>
                </ul>
              </div>
            </div>

            {/* $100k */}
            <div className="bg-green-50 border-4 border-green-600 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-green-600" size={32} />
                <h3 className="text-2xl font-bold text-green-600">$100,000 - Legal Action & Publishing Begins</h3>
              </div>
              <p className="text-charcoal-light mb-4">
                At $100,000, we can file court proceedings and publish the first book. This marks the beginning of public legal action and educational impact.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-green-600">
                <p className="font-semibold text-charcoal mb-2">What Happens:</p>
                <ul className="space-y-1 text-charcoal-light text-sm">
                  <li>✓ Court proceedings filed</li>
                  <li>✓ "Sunday Bloody Sunday, Part Two" book published</li>
                  <li>✓ School distribution program launches</li>
                  <li>✓ Media campaign begins</li>
                  <li>✓ Associate counsel hired</li>
                </ul>
              </div>
            </div>

            {/* $250k */}
            <div className="bg-amber-50 border-4 border-amber-orange rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-amber-orange" size={32} />
                <h3 className="text-2xl font-bold text-amber-orange">$250,000 - Educational Scale & Policy Influence</h3>
              </div>
              <p className="text-charcoal-light mb-4">
                At $250,000, we can publish 3 books, establish university partnerships, and reach 25,000+ students. This is where systemic change begins.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-amber-orange">
                <p className="font-semibold text-charcoal mb-2">What Happens:</p>
                <ul className="space-y-1 text-charcoal-light text-sm">
                  <li>✓ 3 books published and distributed</li>
                  <li>✓ University partnerships established</li>
                  <li>✓ Educational curriculum developed</li>
                  <li>✓ 25,000+ students reached</li>
                  <li>✓ Policy recommendations submitted to governments</li>
                  <li>✓ Expert witnesses and consultants engaged</li>
                </ul>
              </div>
            </div>

            {/* $500k */}
            <div className="bg-forest-green/10 border-4 border-forest-green rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-forest-green" size={32} />
                <h3 className="text-2xl font-bold text-forest-green">$500,000 - Full Mission Accomplished</h3>
              </div>
              <p className="text-charcoal-light mb-4">
                At $500,000, we achieve our complete mission: full legal team, all books published, international reach, and systemic change underway.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-forest-green">
                <p className="font-semibold text-charcoal mb-2">What Happens:</p>
                <ul className="space-y-1 text-charcoal-light text-sm">
                  <li>✓ Full legal team assembled and operational</li>
                  <li>✓ All 5 books published and distributed globally</li>
                  <li>✓ 50,000+ students/year reached</li>
                  <li>✓ International human rights advocacy</li>
                  <li>✓ Major policy changes influenced</li>
                  <li>✓ Foundation fully operational and sustainable</li>
                  <li>✓ Permanent legacy established</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Timeline */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Impact Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Months 1-3: Foundation Setup</h4>
                <p className="text-charcoal-light">Legal registration, board formation, financial systems established</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Months 4-6: Legal Action Begins</h4>
                <p className="text-charcoal-light">Court filings, first book published, school distribution launches</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Months 7-12: Educational Scale</h4>
                <p className="text-charcoal-light">More books published, university partnerships, policy influence</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Year 2+: Systemic Change</h4>
                <p className="text-charcoal-light">Laws changed, policies reformed, 50,000+ students reached annually</p>
              </div>
            </div>
          </div>
        </div>

        {/* Donor Impact */}
        <div className="bg-amber-orange text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Donation Creates Real Impact</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Every dollar you donate moves us closer to these milestones. Every milestone reached means real change: more legal resources, more books published, more students educated, more systemic accountability.
          </p>
          <p className="text-xl font-bold">
            You're not just donating. You're building a movement. You're creating lasting change.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            $500,000 goal. Unlimited impact. Your support makes it possible.
          </p>
        </div>
      </div>
    </div>
  );
}
