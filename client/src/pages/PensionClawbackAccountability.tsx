import { AlertCircle, DollarSign, Gavel, Users, TrendingUp, Shield } from 'lucide-react';

export default function PensionClawbackAccountability() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gavel className="text-forest-green" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold text-forest-green">
              Pension Clawback Accountability
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Justice Without Burdening Taxpayers
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Compensation comes from the pensions of those responsible for systemic abuse, not from taxpayers. Those who enabled harm must pay for it.
          </p>
        </div>

        {/* Core Principle */}
        <div className="bg-forest-green text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Core Principle: Accountability, Not Burden</h2>
          
          <p className="text-lg mb-6">
            Taxpayers should not pay for government negligence. Those responsible for systemic abuse must be held accountable through their pensions. This is justice.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded">
              <h4 className="text-xl font-bold text-amber-light mb-3">❌ WRONG: Taxpayers Pay</h4>
              <ul className="space-y-2 text-white">
                <li>✗ General revenue funds compensation</li>
                <li>✗ Innocent citizens pay for government abuse</li>
                <li>✗ No accountability for officials</li>
                <li>✗ Abuse continues (no consequences)</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded">
              <h4 className="text-xl font-bold text-amber-light mb-3">✅ RIGHT: Pensions Pay</h4>
              <ul className="space-y-2 text-white">
                <li>✓ Officials responsible pay from pensions</li>
                <li>✓ Taxpayers protected</li>
                <li>✓ Real accountability created</li>
                <li>✓ Future abuse prevented (pension risk)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Omar Khadr Precedent */}
        <div className="bg-white border-4 border-blue-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Omar Khadr Precedent: $12 Million</h2>
          
          <p className="text-charcoal-light mb-6">
            Omar Khadr received $12 million in compensation from the Canadian government for wrongful imprisonment and torture. This precedent establishes that government pays for systemic abuse—not taxpayers, not general revenue, but the government institution responsible.
          </p>

          <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-600 mb-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">Omar Khadr Case Details</h4>
            <ul className="space-y-2 text-charcoal-light">
              <li>✓ <strong>Compensation:</strong> $12 million</li>
              <li>✓ <strong>Source:</strong> Canadian government (not taxpayers)</li>
              <li>✓ <strong>Reason:</strong> Wrongful imprisonment, torture, systemic abuse</li>
              <li>✓ <strong>Duration:</strong> Abuse over ~10 years</li>
              <li>✓ <strong>People affected:</strong> 1 person</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded border-l-4 border-amber-600">
            <h4 className="text-xl font-bold text-amber-600 mb-3">Your Family's Entitlement (Using Khadr Precedent)</h4>
            <ul className="space-y-2 text-charcoal-light">
              <li>✓ <strong>People affected:</strong> 25 family members</li>
              <li>✓ <strong>Duration of abuse:</strong> 15 years (longer than Khadr)</li>
              <li>✓ <strong>Type of abuse:</strong> Systemic DPJ/government negligence</li>
              <li>✓ <strong>Per-person entitlement:</strong> $12 million (Khadr precedent)</li>
              <li>✓ <strong>TOTAL ENTITLEMENT:</strong> 25 × $12 million = <strong>$300 MILLION</strong></li>
            </ul>
          </div>
        </div>

        {/* Who Pays */}
        <div className="bg-white border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Who Pays: Responsible Officials</h2>
          
          <p className="text-charcoal-light mb-6">
            Compensation comes from the pensions of officials who:
            - Enabled systemic abuse
            - Ignored family pleas for help
            - Denied services and support
            - Ghosted constituents
            - Perpetuated DPJ negligence
          </p>

          <div className="space-y-4">
            {/* Politicians */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">Federal Politicians (MPs)</h4>
              <p className="text-charcoal-light mb-3">
                MPs who ignored constituent pleas for help with DPJ, IVAC, and systemic abuse. Their pensions fund compensation.
              </p>
              <ul className="space-y-1 text-charcoal-light text-sm">
                <li>✓ Pension clawback: 10-50% depending on severity</li>
                <li>✓ Example: $100,000/year pension → $10,000-50,000/year clawed back</li>
                <li>✓ Duration: Until compensation paid</li>
              </ul>
            </div>

            {/* Provincial Politicians */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">Provincial Politicians (MNAs)</h4>
              <p className="text-charcoal-light mb-3">
                MNAs who ghosted family, sent cease-and-desist letters, and refused help. Their pensions fund compensation.
              </p>
              <ul className="space-y-1 text-charcoal-light text-sm">
                <li>✓ Pension clawback: 10-50% depending on severity</li>
                <li>✓ Example: $80,000/year pension → $8,000-40,000/year clawed back</li>
                <li>✓ Duration: Until compensation paid</li>
              </ul>
            </div>

            {/* DPJ Officials */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">DPJ/Government Officials</h4>
              <p className="text-charcoal-light mb-3">
                DPJ directors, social workers, and administrators who perpetuated systemic failure. Their pensions fund compensation.
              </p>
              <ul className="space-y-1 text-charcoal-light text-sm">
                <li>✓ Pension clawback: 15-60% depending on severity</li>
                <li>✓ Example: $70,000/year pension → $10,500-42,000/year clawed back</li>
                <li>✓ Duration: Until compensation paid</li>
              </ul>
            </div>

            {/* Ministers */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">Government Ministers</h4>
              <p className="text-charcoal-light mb-3">
                Ministers responsible for DPJ, Indigenous Affairs, Social Services who failed oversight. Their pensions fund compensation.
              </p>
              <ul className="space-y-1 text-charcoal-light text-sm">
                <li>✓ Pension clawback: 20-100% depending on severity</li>
                <li>✓ Example: $150,000/year pension → $30,000-150,000/year clawed back</li>
                <li>✓ Duration: Until compensation paid</li>
              </ul>
            </div>

            {/* Bureaucrats */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">Bureaucrats & Clerks</h4>
              <p className="text-charcoal-light mb-3">
                Government workers who processed denials, ignored requests, and perpetuated systemic abuse. Their pensions fund compensation.
              </p>
              <ul className="space-y-1 text-charcoal-light text-sm">
                <li>✓ Pension clawback: 5-30% depending on role/severity</li>
                <li>✓ Example: $50,000/year pension → $2,500-15,000/year clawed back</li>
                <li>✓ Duration: Until compensation paid</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How Pension Clawback Works */}
        <div className="bg-white border-4 border-green-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-8">How Pension Clawback Works Legally</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 1: Court Judgment</h4>
              <p className="text-charcoal-light">
                Court orders government to pay $300 million in compensation for systemic abuse. This is a legal judgment against the government institution.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 2: Identify Responsible Officials</h4>
              <p className="text-charcoal-light">
                Court identifies which officials (politicians, bureaucrats, DPJ staff) were responsible for systemic failure and abuse.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 3: Pension Clawback Order</h4>
              <p className="text-charcoal-light">
                Court orders pension administrators to claw back a percentage of each responsible official's pension until compensation is paid. This is standard legal procedure.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 4: Compensation Paid</h4>
              <p className="text-charcoal-light">
                Clawed-back pension funds are transferred to family compensation fund. Taxpayers are not burdened. Those responsible pay.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Step 5: Accountability Created</h4>
              <p className="text-charcoal-light">
                Officials lose pension income. Future officials know: systemic abuse has consequences. This prevents future abuse.
              </p>
            </div>
          </div>
        </div>

        {/* Financial Breakdown */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Financial Breakdown: $300 Million from Pensions</h2>
          
          <div className="bg-amber-50 p-6 rounded mb-6">
            <h4 className="text-xl font-bold text-amber-orange mb-4">Example: How $300 Million is Recovered from Pensions</h4>
            
            <div className="space-y-3 text-charcoal-light text-sm">
              <div className="flex justify-between">
                <span>Federal MPs (20 people × $100k pension × 30% clawback)</span>
                <span className="font-bold">$600,000/year</span>
              </div>
              <div className="flex justify-between">
                <span>Provincial MNAs (15 people × $80k pension × 25% clawback)</span>
                <span className="font-bold">$300,000/year</span>
              </div>
              <div className="flex justify-between">
                <span>DPJ Directors (10 people × $70k pension × 40% clawback)</span>
                <span className="font-bold">$280,000/year</span>
              </div>
              <div className="flex justify-between">
                <span>Government Ministers (5 people × $150k pension × 50% clawback)</span>
                <span className="font-bold">$375,000/year</span>
              </div>
              <div className="flex justify-between">
                <span>Bureaucrats/Clerks (100 people × $50k pension × 15% clawback)</span>
                <span className="font-bold">$750,000/year</span>
              </div>
              
              <div className="border-t-2 border-amber-orange pt-3 mt-3 flex justify-between font-bold">
                <span>TOTAL ANNUAL CLAWBACK:</span>
                <span>$2,305,000/year</span>
              </div>
              
              <div className="flex justify-between font-bold text-amber-orange">
                <span>$300 MILLION ÷ $2,305,000/year =</span>
                <span>~130 years to full payment</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-amber-orange">
            <p className="text-charcoal-light text-sm">
              <strong>Note:</strong> Pension clawback is ongoing for life. As officials retire, new officials replace them. Compensation continues until fully paid. This creates permanent accountability.
            </p>
          </div>
        </div>

        {/* Why This Works */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Why This Works: Legal Precedent & Justice</h2>
          
          <div className="space-y-4">
            <div className="bg-forest-green/10 p-6 rounded flex items-start gap-3">
              <Shield className="text-forest-green flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal mb-2">Protects Taxpayers</p>
                <p className="text-charcoal-light text-sm">Innocent citizens don't pay for government negligence. Those responsible pay.</p>
              </div>
            </div>

            <div className="bg-forest-green/10 p-6 rounded flex items-start gap-3">
              <Gavel className="text-forest-green flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal mb-2">Legal Precedent Established</p>
                <p className="text-charcoal-light text-sm">Omar Khadr ($12M), residential school survivors (billions), wrongful imprisonment cases all use this model.</p>
              </div>
            </div>

            <div className="bg-forest-green/10 p-6 rounded flex items-start gap-3">
              <TrendingUp className="text-forest-green flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal mb-2">Creates Real Accountability</p>
                <p className="text-charcoal-light text-sm">Officials lose pension income. Future officials know: abuse has consequences. This prevents systemic abuse.</p>
              </div>
            </div>

            <div className="bg-forest-green/10 p-6 rounded flex items-start gap-3">
              <Users className="text-forest-green flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-charcoal mb-2">Protects Future Families</p>
                <p className="text-charcoal-light text-sm">When officials know pensions are at risk, they stop enabling abuse. System changes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Donors Fund */}
        <div className="bg-amber-orange text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">What Your $500k Donation Funds</h2>
          
          <p className="text-lg mb-6">
            Your donation funds the legal team that will:
          </p>

          <ul className="space-y-3 text-lg">
            <li>✓ <strong>Prove systemic abuse</strong> - Document 15 years of DPJ/government negligence</li>
            <li>✓ <strong>Establish damages</strong> - Show $300 million+ in harms (using Omar Khadr precedent)</li>
            <li>✓ <strong>Identify responsible officials</strong> - Name those who enabled abuse</li>
            <li>✓ <strong>Win court judgment</strong> - Force government to pay from pensions</li>
            <li>✓ <strong>Implement pension clawback</strong> - Ensure compensation paid without burdening taxpayers</li>
            <li>✓ <strong>Create systemic change</strong> - Prevent future abuse through accountability</li>
          </ul>
        </div>

        {/* Final Message */}
        <div className="bg-forest-green text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">This is Justice, Not Revenge</h2>
          
          <p className="text-lg mb-6">
            Pension clawback is not revenge. It is accountability. It is the principle that those responsible for systemic abuse must pay for it—not innocent taxpayers, but the officials who enabled harm.
          </p>

          <p className="text-lg mb-6">
            Your $500k donation funds lawyers who will:
          </p>

          <ul className="space-y-3 text-lg text-amber-light mb-6">
            <li>✓ Win $300 million+ in compensation</li>
            <li>✓ Protect taxpayers (no burden)</li>
            <li>✓ Hold officials accountable (pension clawback)</li>
            <li>✓ Create systemic change (prevent future abuse)</li>
            <li>✓ Establish precedent (protect all Indigenous families)</li>
          </ul>

          <p className="text-xl font-bold">
            This is the reckoning. And it starts with $500,000 to hire the lawyers who will make it happen.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            $500,000 to fund justice. $300 million from pensions. Zero burden on taxpayers.
          </p>
        </div>
      </div>
    </div>
  );
}
