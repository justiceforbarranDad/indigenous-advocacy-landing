import { AlertCircle, CheckCircle, XCircle, FileText, Mail } from 'lucide-react';

export default function AFNAccountability() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <div className="bg-forest-green text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AFN Accountability</h1>
          <p className="text-lg text-amber-light">The Gap Between Promises and Action</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-orange">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The AFN Promise vs. Reality</h2>
          <p className="text-lg mb-4 leading-relaxed">
            The Assembly of First Nations (AFN) publicly champions the rights of First Nations children and families. Yet when Indigenous families like mine reached out for help—when we needed them most—we were met with silence and inaction.
          </p>
          <p className="text-lg leading-relaxed">
            This page documents the gap between AFN's public commitments and their actual response to families experiencing systemic discrimination and child welfare failures.
          </p>
        </section>

        {/* AFN Claims vs. Reality */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            AFN Claims vs. Reality
          </h2>

          <div className="space-y-6">
            {/* Claim 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <AlertCircle size={32} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Claim: "AFN Advocates for First Nations Children"</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>AFN's Public Statement:</strong> "The AFN is committed to protecting the rights and wellbeing of First Nations children and ensuring they receive equitable services."
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">Reality:</p>
                    <p className="text-gray-800">
                      When my family reached out to AFN for help with DPJ (child welfare) failures and systemic discrimination, we received no response. Our pleas for intervention, investigation, and support were ignored. AFN's advocacy appears limited to public statements rather than actual support for families in crisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <AlertCircle size={32} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Claim: "AFN Holds Government Accountable"</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>AFN's Public Statement:</strong> "AFN demands accountability from federal and provincial governments for their failures toward First Nations communities."
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">Reality:</p>
                    <p className="text-gray-800">
                      AFN has not held DPJ (Quebec child welfare) accountable for documented systemic failures against First Nations children. When families like mine documented violations of Jordan's Principle and Charter rights, AFN remained silent. Where is the accountability? Where is the action?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <AlertCircle size={32} className="text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Claim: "AFN Supports Jordan's Principle Implementation"</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>AFN's Public Statement:</strong> "AFN champions Jordan's Principle to ensure no-delay services for First Nations children."
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4">
                    <p className="font-semibold text-red-900 mb-2">Reality:</p>
                    <p className="text-gray-800">
                      My child needed mental health services, educational support, and trauma counseling after being stabbed three times. Jordan's Principle was ignored. DPJ withdrew support without adequate follow-up. AFN did nothing to enforce this principle or help our family access the services we were entitled to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            My Family's Experience: Timeline of Silence
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-charcoal">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-orange text-white font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-charcoal mb-1">February 14, 2021</h4>
                  <p className="text-gray-700">My child stabbed 3 times. Hospitalized at Montreal Children's Hospital for 6 days. Trauma begins.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-charcoal">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-orange text-white font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-charcoal mb-1">2021-2023</h4>
                  <p className="text-gray-700">Family seeks help from DPJ. DPJ involved but withdraws January 2023 without adequate follow-up. Education lost. Mental health destroyed.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-charcoal">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-orange text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-charcoal mb-1">2023-2024</h4>
                  <p className="text-gray-700">Reached out to AFN for help. No response. Reached out to elected officials. Cease-and-desist warning instead of help. Reached out to provincial authorities. Ghosted. Reached out to federal level. Silence.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-charcoal">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-orange text-white font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-charcoal mb-1">2025-2026</h4>
                  <p className="text-gray-700">5+ years of systemic violations. AFN still silent. DPJ failures documented. Charter rights violated. No accountability. No justice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What AFN Should Have Done */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8 border-b-4 border-amber-orange pb-4">
            What AFN Should Have Done
          </h2>

          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Responded to Our Calls for Help</h4>
                  <p className="text-gray-800">AFN should have acknowledged our requests and connected us with resources, legal support, or advocacy assistance.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Investigated DPJ Systemic Failures</h4>
                  <p className="text-gray-800">AFN should have launched an investigation into documented DPJ violations against First Nations children and families.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Enforced Jordan's Principle</h4>
                  <p className="text-gray-800">AFN should have demanded that DPJ provide no-delay services for our child's mental health, education, and trauma counseling.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Held Government Accountable</h4>
                  <p className="text-gray-800">AFN should have publicly called for accountability, independent inquiry, and systemic reform to prevent other families from experiencing the same harm.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Bigger Picture */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-orange">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Bigger Picture</h2>
          <p className="text-lg mb-4 leading-relaxed">
            My family's experience is not unique. CDPDJ's 2025 Nunavik systemic inquiry documented chronic failures: under-resourced services, culturally inappropriate interventions, and harm to Indigenous children's health and development.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Yet AFN's response remains inadequate. Public statements without action. Promises without accountability. While families suffer, AFN continues to operate as if the system is working.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>The question is simple: Why does AFN remain silent when First Nations children are being failed by the very systems they claim to hold accountable?</strong>
          </p>
        </section>

        {/* Call to Action */}
        <section className="bg-forest-green text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Demand AFN Accountability</h2>
          <p className="text-lg mb-6 leading-relaxed">
            If you've experienced similar failures from AFN, DPJ, or other institutions, your voice matters. Share your story. Document your experience. Hold them accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/share-story"
              className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <FileText size={18} />
              Share Your Story
            </a>
            <a
              href="/contact-accountability"
              className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
