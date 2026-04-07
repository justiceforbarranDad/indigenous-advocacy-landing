import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { FileText, Users, Scale, AlertCircle } from "lucide-react";

export default function Home() {
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-900">McGovern Family Justice</h1>
          <p className="text-slate-600 mt-2">Legal Case for IVAC Compensation & Systemic Accountability</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Case Summary */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Case Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Primary Incident</h3>
              <p className="text-slate-700">
                Son stabbed 3 times on February 14, 2021. Family of 11 members seeking IVAC compensation and systemic accountability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Legal Action</h3>
              <p className="text-slate-700">
                TAQ (Tribunal administratif du Québec) hearing scheduled June 2026. Formal legal demand submitted to IVAC.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Compensation Demand</h3>
              <p className="text-slate-700">
                $882,000+ for crime victims compensation, income replacement, medical costs, and systemic failure damages.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Family Members</h3>
              <p className="text-slate-700">
                11 family members represented by James Robert McGovern as sole legal representative.
              </p>
            </div>
          </div>
        </section>

        {/* Key Documents */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Key Legal Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-slate-800">IVAC Appeal</h3>
              <p className="text-sm text-slate-600">Complete appeal with all 11 family members and 3 criminal incidents</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-slate-800">Legal Justification</h3>
              <p className="text-sm text-slate-600">Grounded in Quebec, Canadian, and international law</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-slate-800">Whistleblower Complaint</h3>
              <p className="text-sm text-slate-600">Filed with Ombudsman regarding systemic failures</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-slate-800">Welfare Protection</h3>
              <p className="text-sm text-slate-600">Zero clawback demand and income replacement protection</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-slate-800">Court Documents</h3>
              <p className="text-sm text-slate-600">Motion records, evidence exhibits, and book of authorities</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-slate-800">Systemic Failure Evidence</h3>
              <p className="text-sm text-slate-600">Documentation of institutional abuse and failures</p>
            </div>
          </div>
        </section>

        {/* Systemic Issues */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Systemic Failures Documented
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900">DPJ (Direction de la protection de la jeunesse)</h3>
              <p className="text-sm text-red-800">Inadequate intervention, service withdrawal without proper follow-up, violation of Jordan's Principle</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900">IVAC (Crime Victims Compensation)</h3>
              <p className="text-sm text-red-800">Multiple denials despite documented crime victimization, inadequate support services</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900">Ombudsman (Protecteur du citoyen)</h3>
              <p className="text-sm text-red-800">Failed to investigate whistleblower complaint, violation of Public Integrity Act</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900">Political Retaliation</h3>
              <p className="text-sm text-red-800">Cease-and-desist letter from MNA office when seeking constituent help, intimidation to silence advocacy</p>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6" />
            Legal Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Quebec Law</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• IVAC Act</li>
                <li>• Quebec Charter of Rights and Freedoms</li>
                <li>• Quebec Public Integrity Act</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Canadian Law</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Canadian Charter of Rights and Freedoms</li>
                <li>• Jordan's Principle</li>
                <li>• Indigenous Rights Jurisprudence</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">International Law</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• UN Convention on Rights of the Child</li>
                <li>• UN Declaration on Rights of Indigenous Peoples</li>
                <li>• International Human Rights Standards</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Federal Commitments</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Truth and Reconciliation Commission</li>
                <li>• Every Child Matters Initiative</li>
                <li>• Reconciliation Framework</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Dates</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-right min-w-32">
                <p className="font-semibold text-slate-900">February 14, 2021</p>
              </div>
              <div className="pb-4 border-l-2 border-slate-300 pl-4">
                <p className="text-slate-700">Primary incident - son stabbed 3 times</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-right min-w-32">
                <p className="font-semibold text-slate-900">2021-2023</p>
              </div>
              <div className="pb-4 border-l-2 border-slate-300 pl-4">
                <p className="text-slate-700">DPJ involvement, institutional failures documented</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-right min-w-32">
                <p className="font-semibold text-slate-900">2023-2024</p>
              </div>
              <div className="pb-4 border-l-2 border-slate-300 pl-4">
                <p className="text-slate-700">Whistleblower complaint filed with Ombudsman</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-right min-w-32">
                <p className="font-semibold text-slate-900">April 2026</p>
              </div>
              <div className="pb-4 border-l-2 border-slate-300 pl-4">
                <p className="text-slate-700">Formal legal demand submitted to IVAC</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-right min-w-32">
                <p className="font-semibold text-slate-900">June 2026</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-slate-700 font-semibold">TAQ Hearing - Justice for McGovern Family</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-blue-50 rounded-lg border border-blue-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Legal Representation</h2>
          <p className="text-slate-700 mb-4">
            James Robert McGovern serves as sole legal representative for all 11 family members in this case.
          </p>
          <p className="text-slate-600 text-sm">
            Complete documentation package includes IVAC appeal, legal justification, whistleblower complaint, court documents, and distribution materials for 50+ institutions.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-center text-slate-300">
            Justice for Barran McGovern • Truth and Reconciliation • Systemic Accountability
          </p>
        </div>
      </footer>
    </div>
  );
}
