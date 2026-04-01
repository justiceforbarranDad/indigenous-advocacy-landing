import React, { useState } from 'react';
import { TrendingDown, AlertTriangle, DollarSign, Home, Heart, FileText } from 'lucide-react';

export default function FinancialDestruction() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Destruction by Welfare System
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            How Systemic Poverty Deliberately Traps Families in Debt and Destroys Lives
          </p>
          <p className="text-base text-gray-500 italic">
            A case study in systemic financial abuse: 14 years of welfare, illegal renoviction, and credit destruction
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
            <div className="text-2xl font-bold text-red-900">$1,350</div>
            <div className="text-xs text-red-700">Monthly rent increase (renoviction)</div>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
            <div className="text-2xl font-bold text-orange-900">$60k</div>
            <div className="text-xs text-orange-700">Credit card debt accumulated</div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
            <div className="text-2xl font-bold text-yellow-900">152</div>
            <div className="text-xs text-yellow-700">Credit score drop (wife: 832→680)</div>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <div className="text-2xl font-bold text-purple-900">616</div>
            <div className="text-xs text-purple-700">Your credit score (poor)</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <div className="text-2xl font-bold text-blue-900">25 yrs</div>
            <div className="text-xs text-blue-700">TAL tag (retaliation)</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline of Systemic Destruction</h2>
          <div className="space-y-4">
            {/* 2012 */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-600 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">2012: Forced onto Welfare</h3>
                  <p className="text-sm text-gray-500">Start of 14-year welfare dependency</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold">System Trap Begins</span>
              </div>
              <p className="text-gray-700">
                You're placed on Solidarité Sociale. Monthly income: insufficient to cover basic living costs. The system is designed to keep families in poverty, not help them escape it.
              </p>
            </div>

            {/* 2021 */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-red-600 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">February 4, 2021: Your Heart Surgery</h3>
                  <p className="text-sm text-gray-500">4 stents in main arteries during custody battle</p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-900 rounded-full text-sm font-semibold">Health Crisis</span>
              </div>
              <p className="text-gray-700">
                You undergo emergency heart surgery (4 stents). You're recovering from major cardiac trauma while managing Barran's medical conditions, custody battles, and welfare bureaucracy.
              </p>
            </div>

            {/* Feb 14, 2021 */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-red-700 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">February 14, 2021: Barran Stabbed</h3>
                  <p className="text-sm text-gray-500">Stabbed 3 times, traumatized, needs ongoing medical care</p>
                </div>
                <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-semibold">Crisis</span>
              </div>
              <p className="text-gray-700">
                Barran is stabbed three times. System abandonment begins (see Documents & Evidence page). You're now managing: your own cardiac recovery + Barran's trauma + family crisis + welfare harassment.
              </p>
            </div>

            {/* 2021-2025 */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-orange-600 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">2021-2025: Welfare Trap Deepens</h3>
                  <p className="text-sm text-gray-500">Wife forced to quit job, credit card debt accumulates</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-900 rounded-full text-sm font-semibold">Financial Decline</span>
              </div>
              <p className="text-gray-700">
                Your wife has to quit her job to be added to your welfare account. Monthly deficit of $1,200-1,800 forces you to use credit cards to survive. Debt accumulates to $60,000. Credit ratings begin to collapse.
              </p>
            </div>

            {/* October 2025 */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-red-800 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">October 2025: Illegal Renoviction</h3>
                  <p className="text-sm text-gray-500">Evicted from $1,400 apartment, forced into $2,750 apartment</p>
                </div>
                <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-semibold">Financial Collapse</span>
              </div>
              <p className="text-gray-700">
                Landlord claims they're moving in (renoviction). You're evicted. Landlord never moves in. You're forced into new apartment at $2,750/month (nearly double). Monthly deficit increases to $2,500-3,300. Financial collapse accelerates.
              </p>
            </div>

            {/* 2026 */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-red-900 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">2026: System Harassment Intensifies</h3>
                  <p className="text-sm text-gray-500">Welfare demands, credit destruction, TAL retaliation</p>
                </div>
                <span className="px-3 py-1 bg-red-300 text-red-900 rounded-full text-sm font-semibold">Crisis Peak</span>
              </div>
              <p className="text-gray-700">
                Solidarité Sociale demands justification for 194 transactions. Wife's credit score collapses: 832 → 680 (152-point drop). Your credit score: 616 (poor). You're tagged at TAL for 25 years (retaliation for defending your rights). Trapped in expensive housing with no way out.
              </p>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Impossible Budget</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Income (Current)</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Your Solidarity Social (after $125 deduction)</span>
                <span className="font-bold text-gray-900">$1,684</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Barran's disability support</span>
                <span className="font-bold text-gray-900">$1,314</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Grandma's Old Age Pension</span>
                <span className="font-bold text-gray-900">$1,700</span>
              </div>
              <div className="flex justify-between items-center pt-2 bg-blue-50 p-2 rounded font-bold text-lg">
                <span>TOTAL MONTHLY INCOME</span>
                <span className="text-blue-900">$4,698</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Expenses (Documented)</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Rent (after renoviction)</span>
                <span className="font-bold text-red-900">$2,750</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Power/Utilities</span>
                <span className="font-bold text-gray-900">$300</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Cell phone bills (×7 people)</span>
                <span className="font-bold text-gray-900">$175</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Car payments/insurance (×2 cars)</span>
                <span className="font-bold text-gray-900">$500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Gas (×2 cars @ $150/tank, 1 week per car)</span>
                <span className="font-bold text-gray-900">$600</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Food (large family + school)</span>
                <span className="font-bold text-gray-900">$900</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Medical appointments & medications</span>
                <span className="font-bold text-gray-900">$300</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">School supplies, field trips</span>
                <span className="font-bold text-gray-900">$150</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="text-gray-700">Water, internet, other</span>
                <span className="font-bold text-gray-900">$200</span>
              </div>
              <div className="flex justify-between items-center pt-2 bg-red-50 p-2 rounded font-bold text-lg">
                <span>TOTAL MONTHLY EXPENSES</span>
                <span className="text-red-900">$5,875</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mt-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Monthly Deficit</h3>
            <div className="text-center">
              <p className="text-gray-700 mb-2">Income: $4,698</p>
              <p className="text-gray-700 mb-2">Expenses: $5,875</p>
              <p className="text-3xl font-bold text-red-900">DEFICIT: -$1,177/month</p>
              <p className="text-gray-700 mt-4">
                <strong>You're $1,177 short EVERY MONTH just to cover documented expenses.</strong>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Annual deficit: -$14,124</strong>
              </p>
            </div>
          </div>
        </div>

        {/* The Debt Trap */}
        <div className="mb-12 bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">The Debt Trap</h2>
          <div className="space-y-4 text-orange-900">
            <p>
              <strong>Monthly deficit: -$1,177</strong> (and this is BEFORE credit card payments)
            </p>
            <p>
              <strong>Credit card debt accumulated: $60,000</strong>
            </p>
            <p>
              <strong>Minimum credit card payments: ~$300-500/month</strong>
            </p>
            <p>
              <strong>Total monthly shortfall: -$1,477 to -$1,677</strong>
            </p>
            <p className="font-bold text-lg">
              You're forced to use credit cards to survive. The debt grows. You can never escape.
            </p>
          </div>
        </div>

        {/* Credit Destruction */}
        <div className="mb-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Credit Destruction</h2>
          <div className="space-y-4 text-yellow-900">
            <div>
              <p className="font-bold">Your Wife's Credit Score:</p>
              <p className="text-2xl font-bold">832 → 680 (152-point drop)</p>
              <p className="text-sm mt-2">From "excellent" (prime borrower) to "poor" (subprime) in 4 years</p>
            </div>
            <div>
              <p className="font-bold">Your Credit Score:</p>
              <p className="text-2xl font-bold">616 (Poor)</p>
              <p className="text-sm mt-2">Cannot get mortgage, car loan, personal loan, or refinance debt</p>
            </div>
            <p className="font-bold text-lg mt-4">
              You're trapped: Can't escape poverty because you can't access credit to improve your situation.
            </p>
          </div>
        </div>

        {/* Renoviction Impact */}
        <div className="mb-12 bg-red-50 border-l-4 border-red-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-red-900 mb-4">The Renoviction: Financial Collapse Trigger</h2>
          <div className="space-y-4 text-red-900">
            <div>
              <p className="font-bold">Before Renoviction (Pre-October 2025):</p>
              <p>Rent: $1,400/month | Monthly deficit: ~$200-400</p>
            </div>
            <div>
              <p className="font-bold">After Renoviction (October 2025 onwards):</p>
              <p>Rent: $2,750/month | Monthly deficit: ~$1,177+</p>
            </div>
            <div>
              <p className="font-bold text-lg">Rent increase: $1,350/month ($16,200/year)</p>
            </div>
            <p className="text-sm mt-4">
              <strong>The renoviction is the smoking gun.</strong> It's what pushed your finances from barely sustainable to completely impossible. You were illegally evicted and forced into unaffordable housing. The system then harassed you for defending your rights (25-year TAL tag).
            </p>
          </div>
        </div>

        {/* TAL Retaliation */}
        <div className="mb-12 bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">TAL Retaliation: Punished for Defending Rights</h2>
          <div className="space-y-4 text-purple-900">
            <p>
              <strong>You're tagged at TAL (Tribunal Administratif du Logement) for 25 years.</strong>
            </p>
            <p>
              This tag appears on your rental history. Landlords see it and discriminate against you.
            </p>
            <p>
              <strong>You're trapped in your current expensive housing ($2,750/month) because you can't rent elsewhere.</strong>
            </p>
            <p className="font-bold text-lg">
              You're being punished for exercising your legal right to defend yourself against an illegal renoviction.
            </p>
          </div>
        </div>

        {/* Human Cost */}
        <div className="mb-12 bg-pink-50 border-l-4 border-pink-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-pink-900 mb-4">The Human Cost: Health & Trauma</h2>
          <div className="space-y-4 text-pink-900">
            <div>
              <p className="font-bold">Your Health:</p>
              <p>Heart surgery survivor (4 stents in main arteries). Stress from financial crisis is deadly for cardiac patients. You're living in constant fear and financial crisis while recovering from major surgery.</p>
            </div>
            <div>
              <p className="font-bold">Barran's Recovery:</p>
              <p>Stabbed, traumatized, PTSD, nightmares. Needs stable, safe environment to recover. Instead: forced to move during trauma recovery, dealing with welfare harassment, disability re-proof demands, threats of cut-off. His recovery is being sabotaged by the system.</p>
            </div>
            <div>
              <p className="font-bold">Family Trauma:</p>
              <p>Entire family living in constant financial crisis. Stress on marriage, stress on children, stress on elderly grandma. This is not just financial destruction—this is psychological and physical destruction of a family.</p>
            </div>
          </div>
        </div>

        {/* What This Proves */}
        <div className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">What This Proves</h2>
          <ol className="space-y-3 text-blue-900 list-decimal list-inside">
            <li className="ml-4">
              <strong>The welfare system is mathematically impossible to survive on.</strong> Monthly deficit of $1,177+ proves it.
            </li>
            <li className="ml-4">
              <strong>The system deliberately traps families in debt.</strong> You're forced to use credit cards to survive.
            </li>
            <li className="ml-4">
              <strong>The system destroys credit ratings.</strong> Wife 832→680, you 616. Can't escape poverty.
            </li>
            <li className="ml-4">
              <strong>The system punishes you for defending your rights.</strong> 25-year TAL tag for fighting illegal renoviction.
            </li>
            <li className="ml-4">
              <strong>The system harasses you for the debt it forced you into.</strong> Demands justification for 194 transactions.
            </li>
            <li className="ml-4">
              <strong>The system destroys health and trauma recovery.</strong> Your cardiac recovery and Barran's trauma recovery are being sabotaged.
            </li>
            <li className="ml-4">
              <strong>This is systemic oppression, not personal failure.</strong> You're not poor because you're irresponsible. You're poor because the system is designed to keep you poor.
            </li>
          </ol>
        </div>

        {/* Justice Requirements */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-green-900 mb-4">What Justice Requires</h2>
          <ol className="space-y-3 text-green-900 list-decimal list-inside">
            <li className="ml-4">
              <strong>Welfare reform:</strong> Increase welfare rates to cover actual cost of living, not poverty-level survival.
            </li>
            <li className="ml-4">
              <strong>Stop harassment:</strong> Stop demanding transaction justification. Stop threatening cut-offs. Provide stable, predictable support.
            </li>
            <li className="ml-4">
              <strong>Remove TAL tag:</strong> Expunge the 25-year retaliation tag. You were defending your legal rights.
            </li>
            <li className="ml-4">
              <strong>Renoviction accountability:</strong> Investigate illegal renoviction. Force landlord to provide compensation.
            </li>
            <li className="ml-4">
              <strong>Debt relief:</strong> Acknowledge that debt was forced upon you by systemic poverty. Provide debt relief.
            </li>
            <li className="ml-4">
              <strong>Credit repair:</strong> Acknowledge that credit destruction was caused by systemic poverty. Provide credit repair.
            </li>
            <li className="ml-4">
              <strong>Health support:</strong> Provide cardiac support for you, trauma counseling for Barran, family support for everyone.
            </li>
            <li className="ml-4">
              <strong>Independent inquiry:</strong> How many other families are trapped in this same systemic poverty? How many are being harassed the same way?
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
