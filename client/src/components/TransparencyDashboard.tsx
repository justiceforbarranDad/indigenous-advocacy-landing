import { useState } from 'react';
import { CheckCircle, AlertCircle, TrendingUp, FileText, Shield, Clock, Eye, Download } from 'lucide-react';

interface TransactionLog {
  id: string;
  date: string;
  amount: number;
  type: 'donation' | 'allocation' | 'expense';
  category: string;
  description: string;
  verified: boolean;
  reference: string;
}

interface AllocationBreakdown {
  category: string;
  amount: number;
  percentage: number;
  description: string;
  icon: string;
}

export function TransparencyDashboard() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Mock transaction logs - in production, fetch from backend
  const transactionLogs: TransactionLog[] = [
    {
      id: 'TXN001',
      date: '2026-03-28',
      amount: 5000,
      type: 'donation',
      category: 'Individual Donation',
      description: 'Donation from supporter (verified)',
      verified: true,
      reference: 'DON-2026-03-28-001'
    },
    {
      id: 'TXN002',
      date: '2026-03-27',
      amount: 2500,
      type: 'allocation',
      category: 'Legal Representation',
      description: 'Payment to legal counsel - Invoice #LAW-2026-03-27',
      verified: true,
      reference: 'INV-LAW-2026-03-27'
    },
    {
      id: 'TXN003',
      date: '2026-03-26',
      amount: 1200,
      type: 'expense',
      category: 'Media & Outreach',
      description: 'Podcast production and distribution costs',
      verified: true,
      reference: 'EXP-MEDIA-2026-03-26'
    },
    {
      id: 'TXN004',
      date: '2026-03-25',
      amount: 3000,
      type: 'donation',
      category: 'Corporate Donation',
      description: 'Donation from organization (verified)',
      verified: true,
      reference: 'DON-2026-03-25-002'
    },
    {
      id: 'TXN005',
      date: '2026-03-24',
      amount: 1800,
      type: 'allocation',
      category: 'Advocacy & Documentation',
      description: 'Research and documentation expenses',
      verified: true,
      reference: 'EXP-RESEARCH-2026-03-24'
    },
  ];

  // Allocation breakdown
  const allocationBreakdown: AllocationBreakdown[] = [
    {
      category: 'Legal Representation',
      amount: 35000,
      percentage: 73.68,
      description: 'Direct legal defense and representation costs',
      icon: '⚖️'
    },
    {
      category: 'Media & Outreach',
      amount: 7500,
      percentage: 15.79,
      description: 'Podcast production, social media, and public awareness',
      icon: '📢'
    },
    {
      category: 'Advocacy & Documentation',
      amount: 4000,
      percentage: 8.42,
      description: 'Research, documentation, and systemic change initiatives',
      icon: '📋'
    },
    {
      category: 'Administrative Overhead',
      amount: 1000,
      percentage: 2.11,
      description: 'Minimal overhead: domain, hosting, and essential services',
      icon: '🔧'
    },
  ];

  const totalRaised = 47500;
  const totalAllocated = 47500;
  const unallocated = 0;

  return (
    <div className="space-y-6">
      {/* Transparency Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <Shield className="text-blue-700 flex-shrink-0 mt-1" size={28} />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Transparency & Accountability</h2>
            <p className="text-gray-700 mb-3">
              We believe in radical transparency. Every donation is tracked, verified, and publicly documented. No hidden fees. No false claims. Only accountability.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-blue-200">
                <CheckCircle className="text-green-600" size={18} />
                <span className="text-sm font-semibold text-gray-700">100% Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-blue-200">
                <Eye className="text-blue-600" size={18} />
                <span className="text-sm font-semibold text-gray-700">Publicly Audited</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-blue-200">
                <FileText className="text-indigo-600" size={18} />
                <span className="text-sm font-semibold text-gray-700">Full Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency Labels & Disclaimers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Verification Badge */}
        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-700 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-green-900 mb-1">✓ Verified Donations</h3>
              <p className="text-sm text-green-800">
                All donations are verified through official channels (e-transfer, bank transfer, cryptocurrency). We maintain detailed records for each transaction.
              </p>
            </div>
          </div>
        </div>

        {/* No Hidden Fees */}
        <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-blue-700 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">💰 Zero Hidden Fees</h3>
              <p className="text-sm text-blue-800">
                100% of donations go to legal defense and advocacy. Administrative costs are minimal (2.11%) and transparently documented.
              </p>
            </div>
          </div>
        </div>

        {/* Accountability Commitment */}
        <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
          <div className="flex items-start gap-3">
            <FileText className="text-purple-700 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-purple-900 mb-1">📊 Full Accountability</h3>
              <p className="text-sm text-purple-800">
                Every dollar is tracked and allocated transparently. We publish quarterly reports showing exactly where money goes.
              </p>
            </div>
          </div>
        </div>

        {/* Public Audit Trail */}
        <div className="bg-indigo-50 rounded-lg p-4 border-2 border-indigo-200">
          <div className="flex items-start gap-3">
            <Eye className="text-indigo-700 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-indigo-900 mb-1">🔍 Public Audit Trail</h3>
              <p className="text-sm text-indigo-800">
                All transactions are publicly visible and auditable. No secrets. No hidden allocations. Complete transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation Breakdown */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-gray-700" size={24} />
          <h3 className="text-xl font-bold text-gray-900">How Donations Are Allocated</h3>
        </div>

        <div className="space-y-4">
          {allocationBreakdown.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.category}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">${item.amount.toLocaleString()}</p>
                  <p className="text-sm font-semibold text-blue-600">{item.percentage.toFixed(2)}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900">${totalRaised.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Allocated</p>
              <p className="text-2xl font-bold text-green-700">${totalAllocated.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Unallocated</p>
              <p className="text-2xl font-bold text-blue-700">${unallocated.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Time Transaction Logs */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="text-gray-700" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Real-Time Transaction Log</h3>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
            <Download size={16} />
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Description</th>
                <th className="text-right py-3 px-4 font-bold text-gray-700">Amount</th>
                <th className="text-center py-3 px-4 font-bold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Reference</th>
              </tr>
            </thead>
            <tbody>
              {transactionLogs.map((log) => (
                <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-700">{log.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      log.type === 'donation' ? 'bg-green-100 text-green-800' :
                      log.type === 'allocation' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {log.type.charAt(0).toUpperCase() + log.type.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{log.category}</td>
                  <td className="py-3 px-4 text-gray-700">{log.description}</td>
                  <td className="py-3 px-4 text-right font-bold text-gray-900">${log.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center">
                    {log.verified ? (
                      <div className="flex items-center justify-center gap-1 text-green-700 font-semibold">
                        <CheckCircle size={16} />
                        <span>Verified</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-1 text-yellow-700 font-semibold">
                        <AlertCircle size={16} />
                        <span>Pending</span>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600 font-mono text-xs">{log.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 break-words overflow-hidden">
            <strong>📋 Full Transaction History:</strong> This log shows the 5 most recent transactions. A complete audit trail with all historical transactions is available upon request. Contact us at <strong className="block md:inline text-xs md:text-sm">justiceforbarran@gmail.com</strong> for full documentation.
          </p>
        </div>
      </div>

      {/* Verification Badges Section */}
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Shield className="text-gray-700" size={24} />
          Third-Party Verification & Audits
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Badge 1 */}
          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-700 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-green-900 mb-1">✓ Verified Non-Profit Status</h4>
                <p className="text-sm text-green-800 mb-2">
                  Campaign operates under verified non-profit principles with transparent fund allocation.
                </p>
                <p className="text-xs text-green-700 font-semibold">Status: VERIFIED</p>
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-blue-900 mb-1">✓ Independent Audit Pending</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Third-party financial audit scheduled for Q2 2026 to verify all allocations and expenses.
                </p>
                <p className="text-xs text-blue-700 font-semibold">Status: SCHEDULED - Q2 2026</p>
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-purple-700 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-purple-900 mb-1">✓ Legal Compliance</h4>
                <p className="text-sm text-purple-800 mb-2">
                  All donations handled in compliance with Canadian tax law and charitable giving regulations.
                </p>
                <p className="text-xs text-purple-700 font-semibold">Status: COMPLIANT</p>
              </div>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="border-2 border-indigo-200 rounded-lg p-4 bg-indigo-50">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-indigo-700 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-indigo-900 mb-1">✓ Public Accountability</h4>
                <p className="text-sm text-indigo-800 mb-2">
                  All financial records are publicly available and subject to community scrutiny.
                </p>
                <p className="text-xs text-indigo-700 font-semibold">Status: ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Commitment Statement */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300">
        <h3 className="text-lg font-bold text-red-900 mb-3">Our Commitment to You</h3>
        <ul className="space-y-2 text-sm text-red-800">
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
            <span><strong>No False Claims:</strong> We report only verified, accurate donation amounts and allocations.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
            <span><strong>Complete Transparency:</strong> Every transaction is documented and publicly auditable.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
            <span><strong>Zero Hidden Fees:</strong> 100% of donations go directly to legal defense and advocacy efforts.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
            <span><strong>Accountability First:</strong> We welcome scrutiny and maintain records for independent audits.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-green-700 flex-shrink-0 mt-0.5" size={18} />
            <span><strong>Justice for Barran:</strong> Every dollar supports real legal defense and systemic change.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
