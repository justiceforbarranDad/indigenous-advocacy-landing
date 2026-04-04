import { AlertTriangle, FileX, Gavel, Clock } from 'lucide-react';

export default function AFathersCry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileX className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              A Father's Cry: Missing Evidence in Court
            </h1>
          </div>
          <p className="text-xl text-slate-700 mt-4">
            Documentation of a critical letter written by a father after his child was stabbed - given to DPJ and to his lawyer - but NEVER presented in court.
          </p>
        </div>

        {/* The Missing Letter */}
        <div className="mb-12 bg-red-50 border-2 border-red-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">✗ The Missing Evidence</h2>
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border-l-4 border-red-500">
              <div className="font-bold text-slate-900 mb-2">Letter: "A Father's Cry"</div>
              <div className="text-sm text-slate-600 mb-3">Written: April 14, 2021 (after stabbing incident on February 14, 2021)</div>
              <div className="text-sm text-slate-600 mb-3">Sent to: DPJ (Gabrielle Chartier) AND Lawyer (Me Nadia Jamieson)</div>
              <div className="text-sm text-slate-600 mb-3">Status: NEVER PRESENTED IN COURT</div>
              <div className="italic text-slate-700 mt-4 p-4 bg-slate-50 rounded">
                "I would like to have in writing what you are waiting for after the March 5, 2021 court order to provide us with services as required by the youth court judge. I request help for my son to see a psychiatrist following what he survived on February 14, 2021 and that he is having difficulty sleeping because he was stabbed 3 times in the apartment building of his mother. I found him private follow-up myself to see a psychotherapist but this does not help him with his sleep and his nightmares and our family needs help as the judge said but because of a delay of more than 1.5 months I do not find it normal to wait so long especially since the DPJ was in the courtroom and knows very well what the judge ordered in his decision..."
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Failure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Timeline of Legal System Failure</h2>
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-slate-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">February 14, 2021</div>
                  <div className="text-slate-700">Child stabbed 3 times at mother's house. Incident reported to police and DPJ.</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-slate-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">March 5, 2021</div>
                  <div className="text-slate-700">Youth Court Judge orders: "DPJ must provide mental health services to child immediately."</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-slate-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">April 14, 2021</div>
                  <div className="text-slate-700">Father writes "A Father's Cry" letter requesting urgent mental health services. Sends to DPJ (Gabrielle Chartier) and Lawyer (Me Nadia Jamieson).</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-red-900">April 2021 - Present</div>
                  <div className="text-slate-700"><strong>Letter NEVER appears in court proceedings.</strong> Child waits 14+ months without mental health support.</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-slate-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">2021-2023</div>
                  <div className="text-slate-700">DPJ denies mental health services. Tania Lechasseur replaces Gabrielle Chartier. No explanation given.</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-slate-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">January 2023</div>
                  <div className="text-slate-700">Youth Court Judge orders DPJ OUT of children's lives. But mental health services still not provided.</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-slate-400 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">2026</div>
                  <div className="text-slate-700">CRARR files human rights complaint. Judicial review strategy underway. "A Father's Cry" letter still missing from court record.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Where Did It Go? */}
        <div className="mb-12 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">? Where Did the Letter Go?</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Sent to:</strong> DPJ (Gabrielle Chartier) and Lawyer (Me Nadia Jamieson) on April 14, 2021
            </p>
            <p>
              <strong>Status:</strong> Never presented in court proceedings
            </p>
            <p>
              <strong>Possible Explanations:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Lawyer failed to present evidence to court</li>
              <li>DPJ deliberately withheld evidence from court</li>
              <li>Letter "lost" in system (convenient disappearance)</li>
              <li>Deliberate suppression of evidence of DPJ failure</li>
            </ul>
            <p className="mt-4 pt-4 border-t border-yellow-300">
              <strong>Impact:</strong> Without this letter in the court record, the judge had incomplete information about the urgency of the child's mental health needs and DPJ's failure to comply with court orders.
            </p>
          </div>
        </div>

        {/* What the Letter Proved */}
        <div className="mb-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">What "A Father's Cry" Proved</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <div className="font-bold text-slate-900 mb-2">1. Court Order Ignored</div>
              <p className="text-slate-700 text-sm">Judge ordered mental health services. DPJ did nothing for 1.5+ months despite knowing the order.</p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <div className="font-bold text-slate-900 mb-2">2. DPJ Accountability</div>
              <p className="text-slate-700 text-sm">Letter proves DPJ was aware of the order and the child's urgent needs but failed to act.</p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <div className="font-bold text-slate-900 mb-2">3. Systemic Failure</div>
              <p className="text-slate-700 text-sm">Shows pattern of DPJ denying services to trauma victims, violating Jordan's Principle.</p>
            </div>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <div className="font-bold text-slate-900 mb-2">4. Evidence of Negligence</div>
              <p className="text-slate-700 text-sm">Demonstrates deliberate or reckless failure to protect a child's mental health after violent trauma.</p>
            </div>
          </div>
        </div>

        {/* Why It Disappeared */}
        <div className="mb-12 bg-slate-100 border border-slate-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Evidence Disappears</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Institutional Protection:</strong> When evidence proves systemic failure, institutions have incentive to suppress it. The letter was damaging to DPJ's narrative.
            </p>
            <p>
              <strong>Legal Collusion:</strong> If the lawyer failed to present the evidence, was it negligence or deliberate? Legal Aid lawyers often lack resources to properly represent vulnerable families.
            </p>
            <p>
              <strong>Immunity Laws:</strong> Article 309 of Quebec's Youth Protection Act protects DPJ workers from liability. Even with evidence of failure, they cannot be sued.
            </p>
            <p>
              <strong>Power Imbalance:</strong> A father fighting alone against DPJ + Legal Aid system + institutional barriers cannot compete with government resources and legal protections.
            </p>
            <p>
              <strong>Judicial Review Path:</strong> Only way to challenge this is through Superior Court judicial review - a process that takes years and costs thousands.
            </p>
          </div>
        </div>

        {/* Legal Analysis */}
        <div className="mb-12 bg-purple-50 border-2 border-purple-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Legal Implications</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Breach of Fiduciary Duty:</strong> DPJ has fiduciary duty to child. Ignoring court order for mental health services breaches that duty.
            </p>
            <p>
              <strong>Charter Violation:</strong> Denying mental health services to trauma victim violates Charter s.7 (life, liberty, security of person).
            </p>
            <p>
              <strong>Jordan's Principle Violation:</strong> Federal principle requires no-delay services for First Nations children. 14+ months of delay violates this.
            </p>
            <p>
              <strong>Evidence Suppression:</strong> If letter was deliberately withheld from court, this constitutes evidence suppression - grounds for judicial review.
            </p>
            <p>
              <strong>Judicial Review Grounds:</strong> CRARR is pursuing judicial review based on systemic discrimination and institutional failure - "A Father's Cry" letter is critical evidence.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Your Evidence Matters</h2>
          <p className="mb-6 text-lg">
            If you have evidence of institutional failure - letters, emails, court orders ignored - document it. Share it. It may be the key to justice.
          </p>
          <a href="/share-story" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
            Share Your Evidence
          </a>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-slate-50 border border-slate-300 rounded-lg p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900 mb-2">Legal Notice:</p>
          <p>
            This documentation is protected expression under Canadian Charter of Rights and Freedoms, s.2(b). All information is factual and based on official court records, DPJ communications, and legal documents. This is responsible communication on a matter of public interest regarding systemic failures in child protection and evidence handling.
          </p>
        </div>
      </div>
    </div>
  );
}
