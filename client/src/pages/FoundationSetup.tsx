import { CheckCircle, Clock, DollarSign, FileText, Scale } from 'lucide-react';

export default function FoundationSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            McGovern Arts of Human Rights Foundation
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Legal Setup & Registration Process
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Building a permanent, legally-registered foundation to fight systemic injustice and create lasting educational change.
          </p>
        </div>

        {/* The Problem We're Solving */}
        <div className="bg-red-50 border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">The Hypocrisy We're Exposing</h2>
          <div className="space-y-3 text-charcoal">
            <p>❌ <strong>Governments deny services</strong> to Indigenous families in crisis</p>
            <p>❌ <strong>Officials ignore accountability</strong> and use intimidation instead</p>
            <p>❌ <strong>Corporations profit from "reconciliation"</strong> while families starve</p>
            <p>✅ <strong>Yet families are forced to pay</strong> school fees, daycare, and wait in food bank lines</p>
            <p>✅ <strong>Yet victims receive charity hampers</strong> instead of justice</p>
          </div>
          <p className="mt-6 font-bold text-lg text-red-600">
            McGovern Foundation will change this by creating REAL accountability and PERMANENT change.
          </p>
        </div>

        {/* Legal Setup Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Legal Setup Timeline</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white border-l-4 border-forest-green p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-forest-green text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-forest-green mb-2">Notary Consultation (Week 1)</h3>
                  <p className="text-charcoal-light mb-4">
                    Meet with a notary in Laval to establish the foundation structure and create legal documents.
                  </p>
                  <div className="bg-amber-orange/10 p-4 rounded border-l-4 border-amber-orange">
                    <p className="font-semibold text-charcoal mb-2">What Gets Done:</p>
                    <ul className="space-y-1 text-charcoal-light">
                      <li>✓ Foundation name registered: McGovern Arts of Human Rights Foundation</li>
                      <li>✓ Trust Account structure established</li>
                      <li>✓ Bylaws and governance documents created</li>
                      <li>✓ Founder identification and authorization</li>
                      <li>✓ Mission statement formalized</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-amber-orange font-semibold">
                    <DollarSign size={20} />
                    <span>Cost: $500-1,500 CAD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-l-4 border-amber-orange p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-amber-orange mb-2">Lawyer Registration (Weeks 2-4)</h3>
                  <p className="text-charcoal-light mb-4">
                    Lawyer files official non-profit registration with Quebec and prepares CRA application.
                  </p>
                  <div className="bg-forest-green/10 p-4 rounded border-l-4 border-forest-green">
                    <p className="font-semibold text-charcoal mb-2">What Gets Done:</p>
                    <ul className="space-y-1 text-charcoal-light">
                      <li>✓ File with Registraire des entreprises (Quebec)</li>
                      <li>✓ Create official governance structure</li>
                      <li>✓ Prepare T1023 form for CRA</li>
                      <li>✓ Document charitable purposes</li>
                      <li>✓ Establish financial accountability systems</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-forest-green font-semibold">
                    <DollarSign size={20} />
                    <span>Cost: $1,500-3,000 CAD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">CRA Charitable Registration (Weeks 4-16)</h3>
                  <p className="text-charcoal-light mb-4">
                    CRA reviews application and grants official Charitable Registration Number (CRN).
                  </p>
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
                    <p className="font-semibold text-charcoal mb-2">What Gets Done:</p>
                    <ul className="space-y-1 text-charcoal-light">
                      <li>✓ CRA reviews charitable purposes</li>
                      <li>✓ Verifies governance structure</li>
                      <li>✓ Approves tax-exempt status</li>
                      <li>✓ Issues Charitable Registration Number (CRN)</li>
                      <li>✓ Retroactive tax-exempt status applied (back to registration date)</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold">
                    <DollarSign size={20} />
                    <span>Cost: FREE (included in lawyer fees)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Setup Cost */}
        <div className="bg-forest-green text-white rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign size={32} />
            <h3 className="text-3xl font-bold">Total Setup Cost</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2">Notary</p>
              <p className="text-2xl font-bold">$500-1,500</p>
            </div>
            <div className="bg-white/10 p-4 rounded">
              <p className="text-amber-light mb-2">Lawyer</p>
              <p className="text-2xl font-bold">$1,500-3,000</p>
            </div>
            <div className="bg-amber-orange p-4 rounded">
              <p className="text-charcoal mb-2 font-bold">TOTAL</p>
              <p className="text-2xl font-bold text-charcoal">$2,000-4,500</p>
            </div>
          </div>
          <p className="mt-6 text-amber-light">
            ✓ This is a legitimate foundation expense, 100% tax-deductible and covered by fundraising donations.
          </p>
        </div>

        {/* What You Need to Bring */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">What to Bring to Notary in Laval</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <FileText className="text-amber-orange flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-charcoal">Foundation Documents</h4>
                  <p className="text-charcoal-light text-sm">Mission statement, vision, charitable purposes</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Scale className="text-forest-green flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-charcoal">Founder Information</h4>
                  <p className="text-charcoal-light text-sm">Names, addresses, roles of all board members</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="text-amber-orange flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-charcoal">Proof of Identity</h4>
                  <p className="text-charcoal-light text-sm">Government ID for all founders</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <DollarSign className="text-forest-green flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-charcoal">Bank Account Details</h4>
                  <p className="text-charcoal-light text-sm">Trust Account info where donations will go</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Clock className="text-amber-orange flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-charcoal">Timeline & Budget</h4>
                  <p className="text-charcoal-light text-sm">How funds will be used ($500k allocation plan)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <FileText className="text-forest-green flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-charcoal">Case Documentation</h4>
                  <p className="text-charcoal-light text-sm">Evidence of systemic failure (for charitable purpose)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Benefits */}
        <div className="bg-green-50 border-4 border-green-600 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Tax Benefits for Donors & Foundation</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-600 mb-3">For Donors</h3>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Tax receipts for all donations</li>
                <li>✓ Claim donations on tax return</li>
                <li>✓ Retroactive receipts (back to registration)</li>
                <li>✓ Donations reduce taxable income</li>
                <li>✓ Significant tax refunds possible</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-600 mb-3">For Foundation</h3>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Tax-exempt status (no taxes on donations)</li>
                <li>✓ All donations go directly to mission</li>
                <li>✓ Expenses are tax-deductible</li>
                <li>✓ Can apply for government grants</li>
                <li>✓ Permanent charitable status</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-amber-orange/10 border-4 border-amber-orange rounded-lg p-8">
          <h2 className="text-3xl font-bold text-amber-orange mb-6">Next Steps</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-bold text-charcoal">Reach $500k Fundraising Goal</h4>
                <p className="text-charcoal-light">Current donations: Share this campaign with supporters</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-bold text-charcoal">Schedule Notary Appointment (Laval)</h4>
                <p className="text-charcoal-light">Contact: [Notary contact info to be added]</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-bold text-charcoal">Hire Lawyer for CRA Registration</h4>
                <p className="text-charcoal-light">Allocate $1,500-3,000 from fundraising for legal fees</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h4 className="font-bold text-charcoal">Receive CRA Charitable Registration Number</h4>
                <p className="text-charcoal-light">Foundation officially registered and tax-exempt</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5</div>
              <div>
                <h4 className="font-bold text-charcoal">Begin Operations & Legal Defense</h4>
                <p className="text-charcoal-light">Foundation starts funding legal proceedings and initiatives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            Building permanent accountability and lasting change for Indigenous families
          </p>
        </div>
      </div>
    </div>
  );
}
