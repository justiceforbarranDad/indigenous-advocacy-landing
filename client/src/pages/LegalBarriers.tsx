import { Lock, Zap, AlertTriangle, Clock } from 'lucide-react';

export default function LegalBarriers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Legal Barriers: When Courts Can't Enforce Their Own Orders
            </h1>
          </div>
          <p className="text-xl text-slate-700 mt-4">
            Documentation of systemic legal failures that prevent courts from enforcing child protection orders and pension decisions.
          </p>
        </div>

        {/* Pension Enforcement Case */}
        <div className="mb-12 bg-red-50 border-2 border-red-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Case Study: Pension Enforcement Blocked (4+ Years)</h2>
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-slate-900 mb-2">Youth Court Order (January 2023)</div>
              <div className="text-slate-700">Judge orders DPJ OUT of children's lives. Father awarded custody and child support obligations.</div>
            </div>

            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-slate-900 mb-2">Lawyer's Problem (October 2022)</div>
              <div className="text-slate-700">
                Me Behzad Shakeri (legal aid lawyer) says: "Unfortunately, with the workload we have, we cannot take on a new Superior Court mandate for parental authority deprivation."
              </div>
            </div>

            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-slate-900 mb-2">Legal Aid Failure (October 2022 - Present)</div>
              <div className="text-slate-700">
                Lawyer requests Legal Aid office to cover investigator costs to locate mother for pension enforcement. Legal Aid never responds. 4+ years later, still no response.
              </div>
            </div>

            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-slate-900 mb-2">Information Available But Unusable</div>
              <div className="text-slate-700">
                Mother's DOB (July 23, 1973), SIN# (648-676-666), and last known address provided. DPJ confirms she works 40 hrs/week. But system cannot locate her for enforcement.
              </div>
            </div>

            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-slate-900 mb-2">Current Status (April 2026)</div>
              <div className="text-slate-700">
                Child support order unenforced for 4+ years. Mother's employment status known but address unknown. Court order unenforceable due to system barriers.
              </div>
            </div>
          </div>
        </div>

        {/* Systemic Barriers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The Barriers That Block Justice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-900">1. Legal Aid Workload Crisis</h3>
              </div>
              <p className="text-slate-700 text-sm">
                Legal Aid lawyers overwhelmed with cases. Cannot take on new matters. Cannot follow up on existing cases. System designed to fail vulnerable families.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <Lock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-900">2. Immunity Laws Protect DPJ</h3>
              </div>
              <p className="text-slate-700 text-sm">
                Article 309 of Quebec Youth Protection Act: DPJ workers protected from liability. Even when they fail to comply with court orders, they cannot be sued.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-900">3. Information Silos</h3>
              </div>
              <p className="text-slate-700 text-sm">
                DPJ has mother's employment information but won't share it. Courts cannot access this data. Enforcement impossible without cooperation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-900">4. Judicial Review Timeline</h3>
              </div>
              <p className="text-slate-700 text-sm">
                Only remedy is Superior Court judicial review. Takes 2-5 years. Costs $10,000+. Family cannot afford it. Justice delayed indefinitely.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-900">5. No Contempt of Court Enforcement</h3>
              </div>
              <p className="text-slate-700 text-sm">
                When DPJ ignores court orders, there's no mechanism to hold them in contempt. No penalties. No consequences. System designed to protect agencies, not children.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <Lock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-slate-900">6. Confidentiality Laws Hide Abuse</h3>
              </div>
              <p className="text-slate-700 text-sm">
                Youth Protection Act confidentiality prevents public accountability. DPJ failures hidden from public view. No transparency. No pressure for reform.
              </p>
            </div>
          </div>
        </div>

        {/* The Specific Failures */}
        <div className="mb-12 bg-slate-100 border border-slate-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Specific Legal Failures in This Case</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>1. DPJ Ignores Court Order (March 2021):</strong> Judge orders mental health services. DPJ does nothing for 1.5+ months. No contempt charges. No consequences.
            </p>
            <p>
              <strong>2. Evidence Disappears (April 2021):</strong> "A Father's Cry" letter given to DPJ and lawyer. Never appears in court. No investigation into disappearance.
            </p>
            <p>
              <strong>3. Legal Aid Abandonment (October 2022):</strong> Lawyer requests Legal Aid support for pension enforcement investigation. Legal Aid never responds. Case stalls.
            </p>
            <p>
              <strong>4. DPJ Worker Replacement (2021-2023):</strong> Gabrielle Chartier replaced by Tania Lechasseur with no explanation. No continuity of care. No accountability for transition.
            </p>
            <p>
              <strong>5. Mental Health Services Denied (2021-2023):</strong> Court-ordered services never provided. 14+ months of delay. Child suffers. No penalty for DPJ.
            </p>
            <p>
              <strong>6. Pension Unenforced (2023-2026):</strong> Court order for child support unenforceable for 4+ years. Mother's employment known but address unknown. System cannot act.
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Legal Barriers Matter</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Court Orders Are Meaningless:</strong> If courts cannot enforce their own orders, the entire justice system loses credibility. Judges order help. Agencies ignore orders. Nothing happens.
            </p>
            <p>
              <strong>Children Pay the Price:</strong> While courts and lawyers debate jurisdiction and workload, children suffer. Mental health services delayed. Child support unenforced. Lives damaged.
            </p>
            <p>
              <strong>Systemic Immunity Enables Abuse:</strong> When agencies are protected from liability, they have no incentive to comply with court orders. Immunity laws create perverse incentives.
            </p>
            <p>
              <strong>Wealthy Families Have Options:</strong> Families with money can hire private lawyers, pay for investigations, afford judicial review. Poor families stuck in broken system.
            </p>
            <p>
              <strong>Justice Delayed = Justice Denied:</strong> Judicial review takes years. By then, damage is done. Children aged out of system. Trauma compounded. Justice arrives too late.
            </p>
          </div>
        </div>

        {/* The Judicial Review Path */}
        <div className="mb-12 bg-purple-50 border-2 border-purple-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">The Only Path Forward: Judicial Review</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>What is Judicial Review?</strong> Superior Court review of government agency decisions. Can overturn DPJ decisions if they violate Charter rights or are unreasonable.
            </p>
            <p>
              <strong>CRARR Strategy:</strong> File complaint based on systemic discrimination (Indigenous family denied services). Challenge immunity law. Demand accountability.
            </p>
            <p>
              <strong>Timeline:</strong> 2-5 years. Multiple court appearances. Thousands in legal fees. But only way to force systemic change.
            </p>
            <p>
              <strong>Potential Outcomes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Court orders DPJ to provide services</li>
              <li>Court finds systemic discrimination</li>
              <li>Court challenges immunity law protection</li>
              <li>Sets precedent for other families</li>
              <li>Forces institutional reform</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Break the Barriers</h2>
          <p className="mb-6 text-lg">
            Legal barriers exist to protect institutions, not children. We must change the system. Support judicial review. Demand accountability. Fight for justice.
          </p>
          <a href="/donate" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
            Support the Fight
          </a>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-slate-50 border border-slate-300 rounded-lg p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900 mb-2">Legal Notice:</p>
          <p>
            This documentation is protected expression under Canadian Charter of Rights and Freedoms, s.2(b). All information is factual and based on official court records, legal correspondence, and government communications. This is responsible communication on a matter of public interest regarding systemic failures in child protection and legal enforcement.
          </p>
        </div>
      </div>
    </div>
  );
}
