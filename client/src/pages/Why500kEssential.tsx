import { AlertCircle, DollarSign, Shield, Gavel, TrendingDown, Users } from 'lucide-react';

export default function Why500kEssential() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="text-red-600" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold text-forest-green">
              Why $500,000 is Essential
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Legal Protection Against Systemic Abuse
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            This is not a fundraiser. This is survival. This is legal defense against a government that has abandoned and abused this family for 15 years.
          </p>
        </div>

        {/* The Reality */}
        <div className="bg-red-50 border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">The Reality: Systemic Trap</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-red-600">
              <p className="font-semibold text-charcoal mb-2">✓ Family of 11 people</p>
              <p className="text-charcoal-light">All on disability/welfare. Nobody can work due to documented trauma and disability.</p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-red-600">
              <p className="font-semibold text-charcoal mb-2">✓ TAQ declared founder NON-FUNCTIONAL</p>
              <p className="text-charcoal-light">Official government tribunal found founder 100% disabled in 2012. Yet IVAC only gave 13% rating—a direct contradiction.</p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-red-600">
              <p className="font-semibold text-charcoal mb-2">✓ Living on credit cards</p>
              <p className="text-charcoal-light">Disability benefits insufficient. Family forced into debt spiral. Current debt: $57,000 and growing monthly.</p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-red-600">
              <p className="font-semibold text-charcoal mb-2">✓ Basic survival costs</p>
              <p className="text-charcoal-light">Gas: $1.94/liter in Laval. Food for 11 people: astronomical. Utilities, medications, transportation—all unaffordable.</p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-red-600">
              <p className="font-semibold text-charcoal mb-2">✓ Broken vehicle since January 2026</p>
              <p className="text-charcoal-light">Family vehicle disabled. No money to fix. Can't get to lawyers, courts, or medical appointments.</p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-red-600">
              <p className="font-semibold text-charcoal mb-2">✓ IVAC used for family survival</p>
              <p className="text-charcoal-light">$43,058 IVAC payment already spent on family needs: driving courses for son, basic living expenses, debt payments.</p>
            </div>
          </div>
        </div>

        {/* Government Contradictions */}
        <div className="bg-white border-4 border-blue-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Government Contradictions = Systemic Negligence</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded">
              <h4 className="text-xl font-bold text-blue-600 mb-3">TAQ Says (2012)</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ 100% disabled</li>
                <li>✓ Non-functional for work</li>
                <li>✓ Eligible for Solidarity Social (welfare)</li>
                <li>✓ Requires full government support</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded">
              <h4 className="text-xl font-bold text-red-600 mb-3">IVAC Says (2026)</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✗ Only 13% disabled</li>
                <li>✗ Paid only $43,058 total</li>
                <li>✗ Contradicts TAQ finding</li>
                <li>✗ Appeal pending June 2026</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded border-l-4 border-yellow-600">
            <p className="text-yellow-700 font-bold">⚠️ RESULT:</p>
            <p className="text-charcoal-light mt-2">
              Family trapped in contradiction: Too disabled to work (TAQ), but not disabled enough for adequate compensation (IVAC). Government agencies contradict each other, leaving family in legal limbo and financial crisis.
            </p>
          </div>
        </div>

        {/* Why $500k is Essential */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-forest-green" size={32} />
            <h2 className="text-3xl font-bold text-forest-green">Why $500,000 is Essential</h2>
          </div>

          <div className="space-y-6">
            {/* Legal Defense */}
            <div className="bg-forest-green/10 p-6 rounded border-l-4 border-forest-green">
              <h4 className="text-xl font-bold text-forest-green mb-3">1. Legal Defense Fund ($200,000)</h4>
              <p className="text-charcoal-light mb-3">
                This is not optional. Without lawyers, the family cannot fight government abuse. Lawyers cost money. Real lawyers—the kind who take on governments—cost serious money.
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ Lead counsel: $80,000/year</li>
                <li>✓ Associate counsel: $60,000/year</li>
                <li>✓ Expert witnesses: $40,000</li>
                <li>✓ Court costs and filing fees: $20,000</li>
              </ul>
            </div>

            {/* Protection Against Seizure */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">2. Protection Against Government Seizure</h4>
              <p className="text-charcoal-light mb-3">
                Welfare agencies have power to seize assets. With $500k in a properly structured foundation, lawyers can invoke courts to prevent illegal seizure and protect family assets.
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ Foundation Trust Account protects funds</li>
                <li>✓ Lawyers ready to defend in court</li>
                <li>✓ Legal precedent prevents welfare overreach</li>
                <li>✓ Family cannot be left destitute</li>
              </ul>
            </div>

            {/* Debt Escape */}
            <div className="bg-amber-50 p-6 rounded border-l-4 border-amber-600">
              <h4 className="text-xl font-bold text-amber-600 mb-3">3. Escape Debt Trap ($57,000 and Growing)</h4>
              <p className="text-charcoal-light mb-3">
                Family forced into $57k debt just to survive. This debt grows monthly. $500k allows family to:
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ Pay off credit card debt immediately</li>
                <li>✓ Eliminate debt trap</li>
                <li>✓ Restore financial stability</li>
                <li>✓ Focus on legal fight, not survival</li>
              </ul>
            </div>

            {/* Basic Survival */}
            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">4. Basic Family Survival ($70,000)</h4>
              <p className="text-charcoal-light mb-3">
                Family of 11 on disability cannot survive on government benefits alone. $500k provides:
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ Food security for 11 people</li>
                <li>✓ Utilities and housing stability</li>
                <li>✓ Medical expenses and medications</li>
                <li>✓ Basic dignity and survival</li>
              </ul>
            </div>

            {/* Transportation */}
            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-3">5. Minivan for Legal Operations ($30,000)</h4>
              <p className="text-charcoal-light mb-3">
                Current vehicle broken since January 2026. Family cannot access lawyers, courts, or services. Minivan is essential for:
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ Court appearances</li>
                <li>✓ Lawyer meetings</li>
                <li>✓ Medical appointments</li>
                <li>✓ Transporting documentation</li>
                <li>✓ Family mobility and dignity</li>
              </ul>
            </div>

            {/* Foundation Operations */}
            <div className="bg-purple-50 p-6 rounded border-l-4 border-purple-600">
              <h4 className="text-xl font-bold text-purple-600 mb-3">6. Foundation Setup & Operations ($50,000)</h4>
              <p className="text-charcoal-light mb-3">
                McGovern Foundation requires proper legal structure:
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ Notary and lawyer fees: $2,500</li>
                <li>✓ CRA registration and compliance: $5,000</li>
                <li>✓ Board formation and governance: $10,000</li>
                <li>✓ Financial systems and accounting: $15,000</li>
                <li>✓ Insurance and legal protection: $17,500</li>
              </ul>
            </div>

            {/* Publishing & Education */}
            <div className="bg-orange-50 p-6 rounded border-l-4 border-orange-600">
              <h4 className="text-xl font-bold text-orange-600 mb-3">7. Publishing & Educational Legacy ($150,000)</h4>
              <p className="text-charcoal-light mb-3">
                Create permanent educational infrastructure:
              </p>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li>✓ 5 books published and distributed</li>
                <li>✓ School curriculum development</li>
                <li>✓ University partnerships</li>
                <li>✓ Reach 50,000+ students annually</li>
                <li>✓ Create lasting systemic change</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What $500k Prevents */}
        <div className="bg-white border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-8">What $500k Prevents</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal">Family homelessness</p>
                <p className="text-charcoal-light text-sm">Without $500k, debt trap leads to eviction and homelessness.</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal">Government asset seizure</p>
                <p className="text-charcoal-light text-sm">Welfare agencies can seize family assets. $500k in foundation prevents this.</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal">Legal system abandonment</p>
                <p className="text-charcoal-light text-sm">Without lawyers, family cannot fight government abuse. Case dies.</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal">Intergenerational trauma continues</p>
                <p className="text-charcoal-light text-sm">Without $500k, next generation (Sebastien, Tyler, and others) repeat cycle of abuse.</p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal">Systemic injustice continues unchallenged</p>
                <p className="text-charcoal-light text-sm">Without $500k, government agencies continue abusing Indigenous families without accountability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What $500k Enables */}
        <div className="bg-forest-green text-white rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-amber-light" size={32} />
            <h2 className="text-3xl font-bold">What $500k Enables</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded flex items-start gap-3">
              <Gavel className="text-amber-light flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-amber-light">Real legal defense</p>
                <p className="text-white text-sm">Lawyers invoke courts. Government held accountable. Justice served.</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded flex items-start gap-3">
              <Shield className="text-amber-light flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-amber-light">Family protection</p>
                <p className="text-white text-sm">Foundation structure protects assets. Welfare cannot seize. Family survives.</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded flex items-start gap-3">
              <TrendingDown className="text-amber-light flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-amber-light">Debt elimination</p>
                <p className="text-white text-sm">$57k debt paid off. Family financial stability restored. Focus on justice.</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded flex items-start gap-3">
              <Users className="text-amber-light flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-amber-light">Intergenerational healing</p>
                <p className="text-white text-sm">Sebastien, Tyler, and next generation break cycle. Future secured.</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded flex items-start gap-3">
              <Gavel className="text-amber-light flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-amber-light">Systemic change</p>
                <p className="text-white text-sm">Laws changed. Policies reformed. Other Indigenous families protected.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-amber-orange text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">This is Not Greed. This is Survival.</h2>
          
          <p className="text-lg mb-6">
            $500,000 is not a luxury request. It is a survival necessity. It is legal defense against a government that has abandoned and abused this family for 15 years.
          </p>

          <p className="text-lg mb-6">
            Every dollar funds:
          </p>

          <ul className="space-y-3 text-lg mb-6">
            <li>✓ <strong>Real lawyers</strong> who can fight governments</li>
            <li>✓ <strong>Family protection</strong> against government seizure</li>
            <li>✓ <strong>Debt elimination</strong> from survival crisis</li>
            <li>✓ <strong>Basic dignity</strong> for 11 people</li>
            <li>✓ <strong>Intergenerational healing</strong> for Sebastien, Tyler, and others</li>
            <li>✓ <strong>Systemic change</strong> that protects all Indigenous families</li>
          </ul>

          <p className="text-xl font-bold">
            Your donation is not charity. It is justice. It is accountability. It is the reckoning.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            $500,000 goal. Family survival. Systemic accountability. Justice for all.
          </p>
        </div>
      </div>
    </div>
  );
}
