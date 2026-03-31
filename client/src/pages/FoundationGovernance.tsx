import { Shield, Users, Eye, Zap, FileText, TrendingUp } from 'lucide-react';

export default function FoundationGovernance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            McGovern Arts of Human Rights Foundation
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Governance & Transparency
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Full transparency, accountability, and democratic governance for all foundation operations and fund allocation.
          </p>
        </div>

        {/* Core Principles */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Core Governance Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Eye className="text-amber-orange flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">100% Transparency</h3>
                <p className="text-charcoal-light">All financial records, decisions, and operations publicly documented and accessible to donors.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Accountability First</h3>
                <p className="text-charcoal-light">Every dollar tracked, every decision justified, every outcome measured and reported.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="text-amber-orange flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Democratic Governance</h3>
                <p className="text-charcoal-light">Board decisions made collectively, with input from affected families and community members.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Mission-Driven</h3>
                <p className="text-charcoal-light">Every decision aligned with fighting systemic injustice and creating lasting change.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Board Structure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Foundation Board Structure</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Executive Director */}
            <div className="bg-forest-green text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Executive Director</h3>
              <p className="mb-4">Oversees all foundation operations, legal strategy, and long-term vision.</p>
              <div className="bg-white/10 p-4 rounded">
                <p className="text-sm"><strong>Responsibilities:</strong></p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>✓ Strategic planning</li>
                  <li>✓ Legal coordination</li>
                  <li>✓ Board leadership</li>
                  <li>✓ Public representation</li>
                </ul>
              </div>
            </div>

            {/* Finance Director */}
            <div className="bg-amber-orange text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Finance Director</h3>
              <p className="mb-4">Manages all financial operations, fund allocation, and donor accounting.</p>
              <div className="bg-white/10 p-4 rounded">
                <p className="text-sm"><strong>Responsibilities:</strong></p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>✓ Budget management</li>
                  <li>✓ Donor accounting</li>
                  <li>✓ Financial reporting</li>
                  <li>✓ Tax compliance</li>
                </ul>
              </div>
            </div>

            {/* Community Representative */}
            <div className="bg-blue-600 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Community Representative</h3>
              <p className="mb-4">Represents affected families and ensures community voice in decisions.</p>
              <div className="bg-white/10 p-4 rounded">
                <p className="text-sm"><strong>Responsibilities:</strong></p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>✓ Community input</li>
                  <li>✓ Family advocacy</li>
                  <li>✓ Accountability checks</li>
                  <li>✓ Impact assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decision-Making Process */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Decision-Making Process</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Proposal</h4>
                <p className="text-charcoal-light">Any board member or community member can propose an initiative or fund allocation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Community Review</h4>
                <p className="text-charcoal-light">Proposal reviewed by affected families and community members for impact and alignment with mission.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Financial Analysis</h4>
                <p className="text-charcoal-light">Finance Director analyzes budget impact, ROI, and sustainability of proposed initiative.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Board Vote</h4>
                <p className="text-charcoal-light">All board members vote. Majority approval required. Decisions documented and published.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">5</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Public Announcement</h4>
                <p className="text-charcoal-light">Decision published on website with full rationale, budget, and expected outcomes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="bg-green-50 border-4 border-green-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-8">Financial Transparency Commitments</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-4">Monthly Reporting</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Donations received (names, amounts, dates)</li>
                <li>✓ Funds allocated (purpose, amount, recipient)</li>
                <li>✓ Expenses incurred (category, amount, justification)</li>
                <li>✓ Bank balance and fund status</li>
                <li>✓ Progress toward goals</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-4">Quarterly Audits</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Independent financial review</li>
                <li>✓ Verification of all transactions</li>
                <li>✓ Compliance with CRA regulations</li>
                <li>✓ Impact assessment of funded initiatives</li>
                <li>✓ Public audit report published</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-4">Annual Financial Statement</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Complete income and expense summary</li>
                <li>✓ Fund allocation breakdown</li>
                <li>✓ Tax filing documentation</li>
                <li>✓ Donor impact report</li>
                <li>✓ Year-over-year comparison</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-4">Public Dashboard</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Real-time donation tracker</li>
                <li>✓ Fund allocation visualization</li>
                <li>✓ Impact metrics and outcomes</li>
                <li>✓ Legal case progress</li>
                <li>✓ Downloadable financial reports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conflict of Interest Policy */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Conflict of Interest Policy</h2>
          
          <div className="space-y-4 text-charcoal">
            <p>
              <strong>Board members must disclose:</strong>
            </p>
            <ul className="space-y-2 ml-4 text-charcoal-light">
              <li>✓ Any financial interest in proposed initiatives</li>
              <li>✓ Family relationships with beneficiaries</li>
              <li>✓ Employment relationships with contractors</li>
              <li>✓ Any other potential conflicts</li>
            </ul>

            <p className="mt-6">
              <strong>Conflict Resolution:</strong>
            </p>
            <ul className="space-y-2 ml-4 text-charcoal-light">
              <li>✓ Board member recuses themselves from voting</li>
              <li>✓ Conflict documented and published</li>
              <li>✓ Alternative decision-maker assigned</li>
              <li>✓ Community review of decision</li>
            </ul>
          </div>
        </div>

        {/* Accountability Mechanisms */}
        <div className="bg-red-50 border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Accountability Mechanisms</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded">
              <h4 className="text-xl font-bold text-red-600 mb-3">Donor Feedback</h4>
              <p className="text-charcoal-light mb-3">
                Donors can submit feedback, concerns, or questions about foundation operations at any time.
              </p>
              <p className="text-charcoal-light">
                <strong>Response time:</strong> Within 7 days. All feedback reviewed by board and responded to publicly.
              </p>
            </div>

            <div className="bg-white p-6 rounded">
              <h4 className="text-xl font-bold text-red-600 mb-3">Community Review Board</h4>
              <p className="text-charcoal-light mb-3">
                Quarterly meetings with affected families and community members to review foundation performance.
              </p>
              <p className="text-charcoal-light">
                <strong>Authority:</strong> Can recommend changes, challenge decisions, and propose new initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded">
              <h4 className="text-xl font-bold text-red-600 mb-3">Independent Auditor</h4>
              <p className="text-charcoal-light mb-3">
                Annual independent audit by certified public accountant not affiliated with foundation.
              </p>
              <p className="text-charcoal-light">
                <strong>Authority:</strong> Can investigate any concerns, access all records, and publish findings.
              </p>
            </div>

            <div className="bg-white p-6 rounded">
              <h4 className="text-xl font-bold text-red-600 mb-3">CRA Compliance</h4>
              <p className="text-charcoal-light mb-3">
                Foundation subject to all CRA regulations and charitable organization requirements.
              </p>
              <p className="text-charcoal-light">
                <strong>Authority:</strong> CRA can audit foundation at any time and revoke charitable status if violations found.
              </p>
            </div>
          </div>
        </div>

        {/* Transparency Dashboard */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-6">Public Transparency Dashboard</h2>
          
          <p className="text-charcoal-light mb-6">
            The McGovern Foundation maintains a public dashboard showing:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <TrendingUp className="text-forest-green flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-charcoal">Donation Tracker</h4>
                <p className="text-charcoal-light text-sm">Real-time donations, cumulative total, progress toward $500k goal</p>
              </div>
            </div>

            <div className="flex gap-3">
              <FileText className="text-amber-orange flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-charcoal">Fund Allocation</h4>
                <p className="text-charcoal-light text-sm">How money is being spent, by category and date</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Eye className="text-forest-green flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-charcoal">Impact Metrics</h4>
                <p className="text-charcoal-light text-sm">Legal cases filed, outcomes, lives changed, systemic reforms</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Shield className="text-amber-orange flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-charcoal">Audit Reports</h4>
                <p className="text-charcoal-light text-sm">Monthly financial reports, quarterly audits, annual statements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Anti-Corruption Pledge */}
        <div className="bg-forest-green text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">McGovern Foundation Anti-Corruption Pledge</h2>
          
          <div className="space-y-4">
            <p className="text-lg">
              We pledge that McGovern Arts of Human Rights Foundation will:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li>✓ <strong>Never misuse funds</strong> - Every dollar goes directly to mission</li>
              <li>✓ <strong>Never hide transactions</strong> - All spending fully documented and public</li>
              <li>✓ <strong>Never silence critics</strong> - Community feedback welcomed and acted upon</li>
              <li>✓ <strong>Never prioritize profit</strong> - Foundation is non-profit, mission-driven</li>
              <li>✓ <strong>Never abandon accountability</strong> - Regular audits and public reporting</li>
              <li>✓ <strong>Never forget our mission</strong> - Fighting systemic injustice is everything</li>
            </ul>

            <p className="mt-8 text-amber-light text-lg font-bold">
              This is the opposite of what governments and corporations do. This is what real accountability looks like.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            100% Transparent. 100% Accountable. 100% Mission-Driven.
          </p>
        </div>
      </div>
    </div>
  );
}
