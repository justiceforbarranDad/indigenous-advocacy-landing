import { AlertCircle, Users, FileText, Phone, Lock, Heart } from 'lucide-react';

export default function EmergencySuccessionPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="text-red-600" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold text-forest-green">
              Emergency Succession Plan
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            What Your Family Needs to Know
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            If something happens to the founder, this guide ensures the McGovern Foundation continues its mission and your family is protected.
          </p>
        </div>

        {/* Critical Warning */}
        <div className="bg-red-50 border-4 border-red-600 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ CRITICAL: Read This First</h2>
          <p className="text-charcoal mb-4">
            This document is your family's protection plan. Keep it safe. Share it with your spouse, trusted family members, and your lawyer. In case of emergency, your family should:
          </p>
          <ol className="space-y-2 text-charcoal-light ml-4">
            <li><strong>1. Contact the emergency lawyer immediately</strong> (see Key Contacts below)</li>
            <li><strong>2. Notify the foundation board</strong> (see Board Members below)</li>
            <li><strong>3. Secure all digital assets</strong> (see Digital Protection below)</li>
            <li><strong>4. Activate succession plan</strong> (see Succession Steps below)</li>
            <li><strong>5. Continue the mission</strong> - The foundation's work must continue</li>
          </ol>
        </div>

        {/* Succession Chain */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Line of Succession</h2>
          
          <div className="space-y-4">
            <div className="bg-forest-green text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white text-forest-green rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl font-bold">Primary: Spouse</h3>
              </div>
              <p className="text-amber-light mb-3">
                Your spouse becomes Executive Director of McGovern Foundation and continues all operations.
              </p>
              <div className="bg-white/10 p-4 rounded">
                <p className="text-sm"><strong>Responsibilities:</strong></p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>✓ Lead foundation operations</li>
                  <li>✓ Manage legal cases</li>
                  <li>✓ Oversee publishing projects</li>
                  <li>✓ Maintain financial transparency</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-orange text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white text-amber-orange rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold">Secondary: Trusted Family Member</h3>
              </div>
              <p className="text-white mb-3">
                If spouse is unable to lead, a designated trusted family member takes over as Executive Director.
              </p>
              <div className="bg-white/10 p-4 rounded">
                <p className="text-sm"><strong>Designated Person: [FAMILY MEMBER NAME]</strong></p>
                <p className="text-sm mt-2">Contact: [PHONE] [EMAIL]</p>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                <h3 className="text-2xl font-bold">Tertiary: Foundation Board</h3>
              </div>
              <p className="text-white mb-3">
                If family cannot lead, the foundation board collectively manages operations until a new director is elected.
              </p>
              <div className="bg-white/10 p-4 rounded">
                <p className="text-sm"><strong>Board Members:</strong></p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>✓ Finance Director</li>
                  <li>✓ Community Representative</li>
                  <li>✓ Legal Advisor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Contacts */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="text-forest-green" size={32} />
            <h2 className="text-3xl font-bold text-forest-green">Key Contacts & Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Emergency Lawyer */}
            <div className="bg-red-50 p-6 rounded border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-600 mb-3">Emergency Lawyer</h4>
              <p className="text-charcoal-light mb-3">
                Contact immediately if something happens to the founder. This lawyer knows the case and can guide the family.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-charcoal">Name: [LAWYER NAME]</p>
                <p className="text-charcoal-light">Phone: [PHONE]</p>
                <p className="text-charcoal-light">Email: [EMAIL]</p>
                <p className="text-charcoal-light">Specialty: Indigenous rights, family law</p>
              </div>
            </div>

            {/* Foundation Accountant */}
            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Foundation Accountant</h4>
              <p className="text-charcoal-light mb-3">
                Manages all financial records and can help the family understand fund allocation.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-charcoal">Name: [ACCOUNTANT NAME]</p>
                <p className="text-charcoal-light">Phone: [PHONE]</p>
                <p className="text-charcoal-light">Email: [EMAIL]</p>
                <p className="text-charcoal-light">Specialty: Non-profit accounting, CRA compliance</p>
              </div>
            </div>

            {/* Lead Counsel */}
            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Lead Counsel (Legal Cases)</h4>
              <p className="text-charcoal-light mb-3">
                Manages all legal proceedings and can brief the family on case status.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-charcoal">Name: [LEAD COUNSEL NAME]</p>
                <p className="text-charcoal-light">Phone: [PHONE]</p>
                <p className="text-charcoal-light">Email: [EMAIL]</p>
                <p className="text-charcoal-light">Specialty: Constitutional law, government accountability</p>
              </div>
            </div>

            {/* Government Contacts */}
            <div className="bg-amber-50 p-6 rounded border-l-4 border-amber-600">
              <h4 className="text-xl font-bold text-amber-600 mb-3">Government Liaison</h4>
              <p className="text-charcoal-light mb-3">
                Maintains relationships with government agencies and can advocate for the foundation.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-charcoal">Name: [LIAISON NAME]</p>
                <p className="text-charcoal-light">Phone: [PHONE]</p>
                <p className="text-charcoal-light">Email: [EMAIL]</p>
                <p className="text-charcoal-light">Specialty: Government relations, policy advocacy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Action Steps */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Immediate Action Steps (First 24 Hours)</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Contact Emergency Lawyer</h4>
                <p className="text-charcoal-light">
                  Call the emergency lawyer immediately. They will guide you through legal procedures and protect the foundation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Notify Foundation Board</h4>
                <p className="text-charcoal-light">
                  Contact all board members immediately. They will convene an emergency meeting to activate succession plan.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Secure Digital Assets</h4>
                <p className="text-charcoal-light">
                  Access the digital asset protection folder (see below) and secure all passwords, documents, and accounts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Notify Donors & Partners</h4>
                <p className="text-charcoal-light">
                  Post a message on the website and notify major donors that the foundation continues under new leadership.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">5</div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Continue the Mission</h4>
                <p className="text-charcoal-light">
                  The foundation's work must continue. Legal cases, book publishing, and advocacy continue without interruption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Asset Protection */}
        <div className="bg-white border-4 border-blue-600 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-blue-600">Digital Asset Protection & Access</h2>
          </div>

          <p className="text-charcoal-light mb-6">
            All digital assets are stored securely. Your family needs access to continue operations. This information is stored in a secure location.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Website & Domain Access</h4>
              <p className="text-charcoal-light mb-3">
                All website passwords and domain information are stored in a secure password manager.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <p><strong>Password Manager:</strong> [SERVICE NAME]</p>
                <p><strong>Master Password Location:</strong> [SECURE LOCATION]</p>
                <p><strong>Recovery Email:</strong> [EMAIL]</p>
                <p className="mt-2 text-red-600"><strong>⚠️ CRITICAL:</strong> Do not share master password. Only authorized family members should access.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Financial Accounts</h4>
              <p className="text-charcoal-light mb-3">
                Foundation bank accounts, donation accounts, and financial records.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <p><strong>Bank:</strong> [BANK NAME]</p>
                <p><strong>Account Number:</strong> [ACCOUNT - Keep Secure]</p>
                <p><strong>Authorized Users:</strong> [NAMES]</p>
                <p><strong>Accountant Contact:</strong> [PHONE/EMAIL]</p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded border-l-4 border-amber-600">
              <h4 className="text-xl font-bold text-amber-600 mb-3">Legal Documents & Case Files</h4>
              <p className="text-charcoal-light mb-3">
                All legal documents, court filings, and case information.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <p><strong>Cloud Storage:</strong> [SERVICE NAME]</p>
                <p><strong>Access Information:</strong> [SECURE LOCATION]</p>
                <p><strong>Lead Counsel Contact:</strong> [PHONE/EMAIL]</p>
                <p><strong>Case Numbers:</strong> [SECURE LOCATION]</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Email & Communications</h4>
              <p className="text-charcoal-light mb-3">
                Foundation email accounts and communication systems.
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <p><strong>Main Email:</strong> justice@justiceforbarran.com</p>
                <p><strong>Password Location:</strong> [SECURE LOCATION]</p>
                <p><strong>Recovery Email:</strong> [BACKUP EMAIL]</p>
                <p><strong>2FA Recovery Codes:</strong> [SECURE LOCATION]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Family Responsibilities */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-forest-green" size={32} />
            <h2 className="text-3xl font-bold text-forest-green">Family Responsibilities</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-forest-green/10 p-6 rounded">
              <h4 className="text-xl font-bold text-forest-green mb-3">Spouse's Role</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Become Executive Director of foundation</li>
                <li>✓ Lead all legal proceedings</li>
                <li>✓ Manage foundation finances and transparency</li>
                <li>✓ Oversee book publishing and education programs</li>
                <li>✓ Maintain relationships with lawyers, accountants, and partners</li>
                <li>✓ Continue advocacy and government accountability</li>
              </ul>
            </div>

            <div className="bg-amber-orange/10 p-6 rounded">
              <h4 className="text-xl font-bold text-amber-orange mb-3">Children's Role</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Support mother in foundation leadership</li>
                <li>✓ Help with social media and communications</li>
                <li>✓ Participate in advocacy and awareness campaigns</li>
                <li>✓ Eventually take over leadership as they grow older</li>
                <li>✓ Ensure the mission continues for future generations</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Extended Family Role</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Support spouse and children emotionally</li>
                <li>✓ Help with foundation operations and administration</li>
                <li>✓ Assist with fundraising and donor relations</li>
                <li>✓ Participate in board meetings and decision-making</li>
                <li>✓ Ensure the family stays united in the mission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Documents */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-amber-orange" size={32} />
            <h2 className="text-3xl font-bold text-amber-orange">Important Documents to Keep Safe</h2>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ This Succession Plan (printed & digital)</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ Foundation Legal Documents (bylaws, registration)</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ Bank Account Information & Access</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ All Legal Case Files & Court Documents</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ Lawyer & Accountant Contact Information</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ Password Manager Master Password</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ Insurance Policies & Beneficiary Information</p>
            </div>
            <div className="p-4 bg-amber-orange/10 rounded">
              <p className="font-semibold text-charcoal">✓ Will & Testament (IMPORTANT: Get this done!)</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 rounded border-l-4 border-red-600">
            <p className="text-red-600 font-bold">⚠️ CRITICAL: You need a legal will!</p>
            <p className="text-charcoal-light mt-2">
              Contact a lawyer immediately to create a formal will that designates your spouse as executor and ensures the foundation continues. This is not optional—it's essential protection for your family and mission.
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-forest-green text-white rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-amber-light" size={40} />
            <h2 className="text-3xl font-bold">A Message to Your Family</h2>
          </div>

          <p className="text-lg mb-6">
            If you're reading this, something has happened to the founder. But know this: the mission continues. The fight for justice continues. The legacy continues.
          </p>

          <p className="text-lg mb-6">
            Your family is not alone. You have lawyers, accountants, board members, and a community of supporters who believe in this mission. Follow this plan. Trust the team. Keep fighting.
          </p>

          <p className="text-lg font-bold text-amber-light">
            The reckoning is coming. And it will happen because you didn't give up. Because you kept going. Because you remembered why we started this.
          </p>

          <p className="text-lg mt-6">
            This is not the end. This is the beginning of the next chapter.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            The mission continues. The fight continues. The legacy continues.
          </p>
        </div>
      </div>
    </div>
  );
}
