import { DollarSign, TrendingUp, PieChart, CheckCircle } from 'lucide-react';

export default function OperationsBudget() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            McGovern Arts of Human Rights Foundation
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Operations Budget & Fund Allocation
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Complete transparency on how your $500,000 donation will create lasting change for Indigenous families and systemic accountability.
          </p>
        </div>

        {/* Total Budget Overview */}
        <div className="bg-forest-green text-white rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign size={40} />
            <h2 className="text-4xl font-bold">$500,000 Total Budget</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2 font-bold">Legal Defense</p>
              <p className="text-3xl font-bold">$200k</p>
              <p className="text-sm text-amber-light">40%</p>
            </div>
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2 font-bold">Publishing & Education</p>
              <p className="text-3xl font-bold">$150k</p>
              <p className="text-sm text-amber-light">30%</p>
            </div>
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2 font-bold">Family Living</p>
              <p className="text-3xl font-bold">$70k</p>
              <p className="text-sm text-amber-light">14%</p>
            </div>
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2 font-bold">Operations & Admin</p>
              <p className="text-3xl font-bold">$50k</p>
              <p className="text-sm text-amber-light">10%</p>
            </div>
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2 font-bold">Minivan & Transport</p>
              <p className="text-3xl font-bold">$30k</p>
              <p className="text-sm text-amber-light">6%</p>
            </div>
          </div>
        </div>

        {/* Detailed Budget Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Detailed Budget Breakdown</h2>

          {/* Legal Defense */}
          <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-forest-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">1</div>
              <h3 className="text-3xl font-bold text-forest-green">Legal Defense Fund - $200,000 (40%)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-forest-green/10 rounded">
                <span className="font-semibold text-charcoal">Lead Counsel (Senior Lawyer)</span>
                <span className="text-forest-green font-bold">$80,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-forest-green/10 rounded">
                <span className="font-semibold text-charcoal">Associate Counsel (Junior Lawyer)</span>
                <span className="text-forest-green font-bold">$50,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-forest-green/10 rounded">
                <span className="font-semibold text-charcoal">Legal Research & Documentation</span>
                <span className="text-forest-green font-bold">$30,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-forest-green/10 rounded">
                <span className="font-semibold text-charcoal">Court Fees & Filing Costs</span>
                <span className="text-forest-green font-bold">$20,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-forest-green/10 rounded">
                <span className="font-semibold text-charcoal">Expert Witnesses & Consultants</span>
                <span className="text-forest-green font-bold">$15,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-forest-green/10 rounded">
                <span className="font-semibold text-charcoal">Appeals & Additional Proceedings</span>
                <span className="text-forest-green font-bold">$5,000</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-orange/10 rounded border-l-4 border-amber-orange">
              <p className="text-charcoal">
                <strong>Purpose:</strong> Fund professional legal team to pursue justice through courts, government accountability, and systemic reform. This is the core mission.
              </p>
            </div>
          </div>

          {/* Publishing & Education */}
          <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">2</div>
              <h3 className="text-3xl font-bold text-amber-orange">Publishing & Education - $150,000 (30%)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-amber-orange/10 rounded">
                <span className="font-semibold text-charcoal">"Sunday Bloody Sunday, Part Two" Book</span>
                <span className="text-amber-orange font-bold">$25,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-orange/10 rounded">
                <span className="font-semibold text-charcoal">"Systemic Abandonment" Policy Analysis Book</span>
                <span className="text-amber-orange font-bold">$25,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-orange/10 rounded">
                <span className="font-semibold text-charcoal">"Jordan's Principle Betrayed" Legal Analysis</span>
                <span className="text-amber-orange font-bold">$25,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-orange/10 rounded">
                <span className="font-semibold text-charcoal">Educational Curriculum Development</span>
                <span className="text-amber-orange font-bold">$35,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-orange/10 rounded">
                <span className="font-semibold text-charcoal">School & University Distribution</span>
                <span className="text-amber-orange font-bold">$20,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-orange/10 rounded">
                <span className="font-semibold text-charcoal">Digital Publishing & Website Content</span>
                <span className="text-amber-orange font-bold">$20,000</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-forest-green/10 rounded border-l-4 border-forest-green">
              <p className="text-charcoal">
                <strong>Purpose:</strong> Create permanent educational infrastructure that will reach 50,000+ students annually and influence policy changes for generations.
              </p>
            </div>
          </div>

          {/* Family Living Expenses */}
          <div className="bg-white border-4 border-blue-600 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">3</div>
              <h3 className="text-3xl font-bold text-blue-600">Family Living Expenses - $70,000 (14%)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
                <span className="font-semibold text-charcoal">Housing & Utilities (Annual)</span>
                <span className="text-blue-600 font-bold">$25,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
                <span className="font-semibold text-charcoal">Food & Basic Necessities</span>
                <span className="text-blue-600 font-bold">$15,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
                <span className="font-semibold text-charcoal">Medical & Mental Health Services</span>
                <span className="text-blue-600 font-bold">$15,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
                <span className="font-semibold text-charcoal">Education & School Fees</span>
                <span className="text-blue-600 font-bold">$10,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded">
                <span className="font-semibold text-charcoal">Childcare & Family Support</span>
                <span className="text-blue-600 font-bold">$5,000</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-50 rounded border-l-4 border-red-600">
              <p className="text-charcoal">
                <strong>⚠️ CRITICAL:</strong> Your family cannot fight systemic injustice while homeless or starving. Current disability benefits ($300/month) are insufficient. These expenses ensure your family's basic survival while fighting for justice. This is NOT theft—it's operational necessity.
              </p>
            </div>
          </div>

          {/* Operations & Administration */}
          <div className="bg-white border-4 border-green-600 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">4</div>
              <h3 className="text-3xl font-bold text-green-600">Operations & Administration - $50,000 (10%)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Foundation Setup & Legal Registration</span>
                <span className="text-green-600 font-bold">$3,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Notary & Lawyer Fees</span>
                <span className="text-green-600 font-bold">$4,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">CRA Charitable Registration</span>
                <span className="text-green-600 font-bold">$1,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Office Equipment & Supplies</span>
                <span className="text-green-600 font-bold">$8,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Website & Digital Infrastructure</span>
                <span className="text-green-600 font-bold">$10,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Accounting & Financial Management</span>
                <span className="text-green-600 font-bold">$12,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Insurance & Compliance</span>
                <span className="text-green-600 font-bold">$8,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded">
                <span className="font-semibold text-charcoal">Communications & Marketing</span>
                <span className="text-green-600 font-bold">$4,000</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-orange/10 rounded border-l-4 border-amber-orange">
              <p className="text-charcoal">
                <strong>Purpose:</strong> Professional management of foundation operations, financial transparency, and compliance with all CRA regulations. Ensures every dollar is properly tracked and used.
              </p>
            </div>
          </div>

          {/* Minivan & Transportation */}
          <div className="bg-white border-4 border-red-600 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">5</div>
              <h3 className="text-3xl font-bold text-red-600">Minivan & Transportation - $30,000 (6%)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded">
                <span className="font-semibold text-charcoal">Minivan Purchase (Used, Reliable)</span>
                <span className="text-red-600 font-bold">$18,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded">
                <span className="font-semibold text-charcoal">Insurance & Registration</span>
                <span className="text-red-600 font-bold">$6,000</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded">
                <span className="font-semibold text-charcoal">Fuel & Maintenance (Annual)</span>
                <span className="text-red-600 font-bold">$6,000</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-forest-green/10 rounded border-l-4 border-forest-green">
              <p className="text-charcoal">
                <strong>Purpose:</strong> Essential for family mobility to attend court proceedings, meet with lawyers, transport documentation, and conduct foundation business. Without transportation, legal defense is impossible.
              </p>
            </div>
          </div>
        </div>

        {/* Why These Numbers */}
        <div className="bg-amber-orange/10 border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-6">Why These Numbers?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Legal Defense (40%)</h4>
                <p className="text-charcoal-light">
                  Professional lawyers cost $150-300/hour. Your case is complex, involving multiple government agencies, constitutional violations, and international human rights frameworks. You need experienced counsel.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Publishing & Education (30%)</h4>
                <p className="text-charcoal-light">
                  Creating quality books, curriculum, and educational materials requires professional writers, editors, designers, and publishers. This creates permanent legacy that reaches generations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Family Living (14%)</h4>
                <p className="text-charcoal-light">
                  Average Canadian family needs $60-70k/year to survive. Your family is on disability ($300/month). This allocation brings you to bare minimum survival while fighting for justice.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Operations (10%)</h4>
                <p className="text-charcoal-light">
                  Professional management, accounting, legal compliance, and financial transparency require investment. This ensures every dollar is properly tracked and used.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Transportation (6%)</h4>
                <p className="text-charcoal-light">
                  Without a vehicle, you cannot attend court, meet lawyers, or conduct foundation business. This is not luxury—it's operational necessity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Accountability & Transparency */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Accountability & Transparency</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-forest-green/10 rounded">
              <p className="text-charcoal">
                <strong>Monthly Reports:</strong> Every dollar spent will be documented and reported publicly. You'll see exactly where money goes.
              </p>
            </div>

            <div className="p-4 bg-forest-green/10 rounded">
              <p className="text-charcoal">
                <strong>Quarterly Audits:</strong> Independent accountant will verify all transactions and publish audit reports.
              </p>
            </div>

            <div className="p-4 bg-forest-green/10 rounded">
              <p className="text-charcoal">
                <strong>Annual Financial Statements:</strong> Complete income/expense summary, fund allocation breakdown, and tax filing documentation.
              </p>
            </div>

            <div className="p-4 bg-forest-green/10 rounded">
              <p className="text-charcoal">
                <strong>Public Dashboard:</strong> Real-time donation tracker, fund allocation visualization, and impact metrics.
              </p>
            </div>

            <div className="p-4 bg-forest-green/10 rounded">
              <p className="text-charcoal">
                <strong>CRA Compliance:</strong> Foundation subject to all CRA regulations. Any violations result in immediate loss of charitable status.
              </p>
            </div>
          </div>
        </div>

        {/* The Hypocrisy */}
        <div className="bg-red-50 border-4 border-red-600 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">The Hypocrisy We're Exposing</h2>
          
          <div className="space-y-4 text-charcoal">
            <p>
              <strong>Politicians & Officials:</strong> Receive $150k+ salaries, pensions, expense accounts, and immunity from accountability. Yet they deny your family $300/month in benefits.
            </p>
            
            <p>
              <strong>Corporations:</strong> Profit billions while sponsoring "reconciliation" events. Yet they refuse to fund legal defense for Indigenous families.
            </p>
            
            <p>
              <strong>Your Family:</strong> Fights systemic injustice on disability benefits. Needs to wait in food bank lines. Receives Christmas hampers instead of justice. Yet governments claim to support you.
            </p>

            <p className="mt-6 font-bold text-lg">
              This budget allocation is LEGITIMATE. Every dollar goes directly to fighting systemic injustice and creating lasting change. This is what real accountability looks like.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            $500,000 to fight systemic injustice. 100% transparent. 100% accountable. 100% mission-driven.
          </p>
        </div>
      </div>
    </div>
  );
}
