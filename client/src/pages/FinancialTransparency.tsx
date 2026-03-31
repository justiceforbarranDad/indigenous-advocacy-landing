import { useState } from 'react';

export default function FinancialTransparency() {
  const [expandedSection, setExpandedSection] = useState('overview');

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-4xl mx-auto">
        
        {/* MASTHEAD */}
        <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
          <div className="text-center mb-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-2">FINANCIAL TRANSPARENCY</h1>
            <div className="h-1 bg-white my-3 w-32 mx-auto"></div>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg tracking-wide mb-2">
              McGovern Institute Foundation Trust Account
            </p>
            <p className="text-xs md:text-sm tracking-widest">
              100% TRANSPARENT • DISABILITY BENEFITS PROTECTED • LEGAL COMPLIANCE
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-8 space-y-6">
          
          {/* CRITICAL PROTECTION BANNER */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
            <h2 className="text-lg font-bold text-green-900 mb-3">🛡️ YOUR DISABILITY BENEFITS ARE PROTECTED</h2>
            <p className="text-sm leading-relaxed text-green-800 mb-3">
              <strong>All donations go to McGovern Institute Foundation Trust Account, NOT to personal accounts.</strong> This legal structure ensures that:
            </p>
            <ul className="text-sm space-y-2 text-green-800 ml-4">
              <li>✅ Funds are held in trust for the Foundation</li>
              <li>✅ Donations are NOT counted as personal income</li>
              <li>✅ Disability benefits remain unaffected</li>
              <li>✅ Full compliance with disability program regulations</li>
              <li>✅ Legal protection for all family members</li>
            </ul>
          </div>

          {/* TRUST ACCOUNT STRUCTURE */}
          <div className="border-b-4 border-black pb-6">
            <h2 className="text-3xl font-bold mb-4">Trust Account Structure</h2>
            <p className="text-sm leading-relaxed mb-4">
              The McGovern Institute Foundation operates through a Trust Account structure designed to protect both the Foundation and the families it serves. This structure is legally recognized and compliant with all Canadian disability benefit programs.
            </p>
            
            <div className="bg-gray-50 p-4 rounded border-l-4 border-black mb-4">
              <p className="font-bold text-sm mb-2">How It Works:</p>
              <ol className="text-sm space-y-2 ml-4 list-decimal">
                <li><strong>Donations received:</strong> All funds go to Foundation Trust Account</li>
                <li><strong>Funds held in trust:</strong> NOT personal property, NOT personal income</li>
                <li><strong>Allocation:</strong> Funds used for legal, education, advocacy, and operations</li>
                <li><strong>Reimbursement:</strong> Family members reimbursed for documented expenses</li>
                <li><strong>Disability benefits:</strong> Remain completely unaffected</li>
              </ol>
            </div>

            <p className="text-sm leading-relaxed">
              This structure is commonly used by non-profits, foundations, and advocacy organizations. It provides legal protection for all parties and ensures compliance with government regulations.
            </p>
          </div>

          {/* DONATION ALLOCATION */}
          <div className="border-b-4 border-black pb-6">
            <h2 className="text-3xl font-bold mb-4">How Donations Are Used</h2>
            <p className="text-sm leading-relaxed mb-4">
              Every dollar donated to the McGovern Institute Foundation is allocated according to this transparent budget:
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold">40%</div>
                <div>
                  <p className="font-bold text-sm">Legal Action & Defense</p>
                  <p className="text-xs text-gray-600">Lawyers, court fees, legal documentation</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center text-white font-bold">8%</div>
                <div>
                  <p className="font-bold text-sm">Non-Profit Registration</p>
                  <p className="text-xs text-gray-600">Legal incorporation, CRA registration, compliance</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold">20%</div>
                <div>
                  <p className="font-bold text-sm">Education & Advocacy</p>
                  <p className="text-xs text-gray-600">Human rights curriculum, media, campaigns</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center text-white font-bold">15%</div>
                <div>
                  <p className="font-bold text-sm">Advocacy & Accountability</p>
                  <p className="text-xs text-gray-600">Campaign materials, documentation, outreach</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center text-white font-bold">10%</div>
                <div>
                  <p className="font-bold text-sm">International Advocacy</p>
                  <p className="text-xs text-gray-600">UN submissions, international organizations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center text-white font-bold">7%</div>
                <div>
                  <p className="font-bold text-sm">Operations & Administration</p>
                  <p className="text-xs text-gray-600">Website, communications, compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* REIMBURSEMENT MODEL */}
          <div className="border-b-4 border-black pb-6">
            <h2 className="text-3xl font-bold mb-4">Reimbursement Model</h2>
            <p className="text-sm leading-relaxed mb-4">
              Family members do not receive salary or wages. Instead, documented expenses are reimbursed from the Foundation Trust Account. This model ensures:
            </p>

            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 mb-4">
              <p className="font-bold text-sm mb-3">Reimbursable Expenses Include:</p>
              <ul className="text-sm space-y-1 ml-4 list-disc text-blue-900">
                <li>Travel to legal appointments, court hearings, government meetings</li>
                <li>Copying, printing, and document preparation costs</li>
                <li>Phone and communication expenses for advocacy</li>
                <li>Office supplies and equipment for Foundation work</li>
                <li>Professional services (translation, transcription, etc.)</li>
                <li>Media production for educational content</li>
              </ul>
            </div>

            <p className="text-sm leading-relaxed mb-3">
              <strong>Key Point:</strong> Reimbursements are NOT considered personal income under disability benefit programs. They are documented business expenses of the Foundation.
            </p>

            <p className="text-sm leading-relaxed">
              All reimbursements require documentation (receipts, invoices, etc.) and are tracked in the Foundation's financial records for audit purposes.
            </p>
          </div>

          {/* DISABILITY BENEFITS PROTECTION */}
          <div className="border-b-4 border-black pb-6">
            <h2 className="text-3xl font-bold mb-4">Disability Benefits Protection</h2>
            <p className="text-sm leading-relaxed mb-4">
              <strong>This is critical:</strong> Donations to the Foundation Trust Account do NOT affect disability benefits because:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">1. Funds Are Not Personal Property</p>
                <p className="text-xs leading-relaxed">
                  Trust Account funds belong to the Foundation, not to any individual. They are held in trust for the Foundation's charitable purposes.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">2. No Personal Income</p>
                <p className="text-xs leading-relaxed">
                  Donations are not reported as personal income. Only documented reimbursements for actual expenses are processed, and these are business expenses, not personal income.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">3. Legal Precedent</p>
                <p className="text-xs leading-relaxed">
                  Non-profit organizations, foundations, and charitable trusts operate this way across Canada. Service providers, board members, and administrators can work with organizations without affecting their disability benefits.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-sm mb-2">4. Compliance with Regulations</p>
                <p className="text-xs leading-relaxed">
                  This structure complies with all federal and provincial disability benefit programs (CPP-D, ODSP, QAP, etc.). The Trust Account model is recognized and accepted by all government agencies.
                </p>
              </div>
            </div>
          </div>

          {/* AUDIT & TRANSPARENCY */}
          <div className="border-b-4 border-black pb-6">
            <h2 className="text-3xl font-bold mb-4">Audit & Transparency</h2>
            <p className="text-sm leading-relaxed mb-4">
              The McGovern Institute Foundation maintains complete financial transparency:
            </p>

            <ul className="text-sm space-y-2 ml-4 list-disc mb-4">
              <li>All donations are recorded and tracked</li>
              <li>Monthly financial reports are prepared</li>
              <li>Annual audits by independent accountant</li>
              <li>CRA compliance and charitable registration</li>
              <li>Public access to financial statements</li>
              <li>Donor receipts for tax purposes</li>
              <li>Complete documentation of all expenses</li>
            </ul>

            <p className="text-sm leading-relaxed">
              This level of transparency protects donors, protects the Foundation, and protects the families served. It also demonstrates to disability benefit programs that all funds are being used legitimately and in compliance with regulations.
            </p>
          </div>

          {/* LEGAL DISCLAIMERS */}
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
            <h2 className="text-lg font-bold text-yellow-900 mb-3">⚖️ LEGAL DISCLAIMERS</h2>
            <p className="text-xs leading-relaxed text-yellow-800 mb-3">
              <strong>Important:</strong> This information is provided for informational purposes. While we have structured the Foundation to comply with disability benefit regulations, we recommend that family members consult with their disability benefit program administrator or a legal professional to confirm that their specific situation complies with all applicable regulations.
            </p>
            <p className="text-xs leading-relaxed text-yellow-800">
              Different disability programs (CPP-D, ODSP, QAP, etc.) may have slightly different rules. We are committed to full compliance with all regulations and will work with benefit administrators to ensure no family member's benefits are affected.
            </p>
          </div>

          {/* CONTACT FOR QUESTIONS */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h2 className="text-lg font-bold text-blue-900 mb-3">❓ Questions About Financial Transparency?</h2>
            <p className="text-sm text-blue-800 mb-3">
              If you have questions about how donations are used or how the Trust Account protects disability benefits, please contact us:
            </p>
            <p className="text-sm font-bold text-blue-900">
              📧 justiceforbarran@gmail.com<br/>
              📞 (438) 926-3636
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
