import { ExternalLink, Globe, Users, FileText } from 'lucide-react';

export default function HumanRights() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Newspaper Header */}
        <div className="border-b-4 border-black mb-12 pb-8">
          <div className="text-center mb-6">
            <p className="text-sm font-bold tracking-widest text-gray-600">INDIGENOUS RIGHTS ADVOCACY</p>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-black my-4">
              HUMAN RIGHTS DEFENDER
            </h1>
            <p className="text-lg text-gray-700 font-serif italic">
              A Comprehensive Guide to Indigenous and Child Rights Under International & G7 Law
            </p>
            <p className="text-sm text-gray-600 mt-4">March 29, 2026</p>
          </div>
        </div>

        {/* UN Observer Contacts Section */}
        <div className="mb-16 bg-blue-50 border-l-8 border-blue-600 p-8">
          <h2 className="text-4xl font-serif font-bold text-blue-900 mb-6">
            UN Indigenous Observer Contacts
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The United Nations maintains a Permanent Forum on Indigenous Issues and appoints Special Rapporteurs dedicated to protecting the rights of Indigenous peoples worldwide. These are the key contacts for filing complaints and seeking international intervention.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">UN Special Rapporteur on the Rights of Indigenous Peoples</h3>
              <p className="text-sm text-gray-700 mb-4">
                Investigates violations of Indigenous rights and submits reports to the UN Human Rights Council
              </p>
              <a href="https://www.ohchr.org/en/special-procedures/sr-indigenous-peoples" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                Contact & Submit Complaint <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">UN Special Rapporteur on the Rights of the Child</h3>
              <p className="text-sm text-gray-700 mb-4">
                Addresses violations of children's rights including protection, education, and freedom from violence
              </p>
              <a href="https://www.ohchr.org/en/special-procedures/sr-children" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                Contact & Submit Complaint <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">UN Permanent Forum on Indigenous Issues</h3>
              <p className="text-sm text-gray-700 mb-4">
                Advises the UN on Indigenous issues and coordinates policies across UN agencies
              </p>
              <a href="https://www.un.org/development/desa/indigenouspeoples/unpfii-sessions.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                Learn More <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">UN Human Rights Council</h3>
              <p className="text-sm text-gray-700 mb-4">
                Receives and reviews complaints from individuals and organizations about human rights violations
              </p>
              <a href="https://www.ohchr.org/en/hr-bodies/hrc/home" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                File a Complaint <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* UN Declaration Section */}
        <div className="mb-16 bg-amber-50 border-l-8 border-amber-600 p-8">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">
            UN Declaration on the Rights of Indigenous Peoples
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Adopted by the UN General Assembly in 2007, this landmark declaration establishes the minimum standards for the survival, dignity, and well-being of Indigenous peoples worldwide. It is binding on all UN member states, including Canada and all G7 nations.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-600 mb-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Key Articles Protecting Indigenous Children & Families:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-amber-900 mb-2">Article 3: Self-Determination</p>
                <p className="text-gray-700 text-sm mb-4">Indigenous peoples have the right to self-determination and to freely determine their political status and pursue economic, social, and cultural development</p>
              </div>
              <div>
                <p className="font-bold text-amber-900 mb-2">Article 7: Protection of Children</p>
                <p className="text-gray-700 text-sm mb-4">Indigenous children have the right to protection from discrimination and violence, and to maintain their cultural identity</p>
              </div>
              <div>
                <p className="font-bold text-amber-900 mb-2">Article 21: Health & Well-being</p>
                <p className="text-gray-700 text-sm mb-4">Indigenous peoples have the right to the highest attainable standards of health and life expectancy</p>
              </div>
              <div>
                <p className="font-bold text-amber-900 mb-2">Article 26: Lands & Resources</p>
                <p className="text-gray-700 text-sm mb-4">Indigenous peoples have the right to lands, territories, and resources traditionally owned or occupied</p>
              </div>
            </div>
          </div>

          <a href="https://www.ohchr.org/en/indigenous-peoples/un-declaration-rights-indigenous-peoples" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors flex items-center gap-2">
            Read Full UN Declaration <ExternalLink size={18} />
          </a>
        </div>

        {/* G7 Countries Commitments */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-black mb-8">
            G7 Nations: Human Rights Commitments to Indigenous Peoples & Children
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            All G7 member states (Canada, France, Germany, Italy, Japan, United Kingdom, United States) have signed international human rights treaties and made public commitments to protect Indigenous peoples and children. Below is their documented status:
          </p>

          <div className="space-y-6">
            {/* Canada */}
            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🍁</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-900">CANADA</h3>
                  <p className="text-sm text-red-700 font-bold">Status: SYSTEMIC FAILURE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration (2016), Truth and Reconciliation Commission (2015), Jordan's Principle (2007)</p>
                <p><strong>Reality:</strong> Continued denial of services to Indigenous children, DPJ failures in Quebec, underfunded child protection</p>
                <p><strong>Evidence:</strong> This case, CDPDJ Nunavik inquiry, multiple UN complaints pending</p>
                <a href="https://www.justice.gc.ca/eng/cj-jp/ip-pi/index.html" target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  View Canada's Indigenous Policy <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* France */}
            <div className="bg-blue-50 border-l-8 border-blue-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🇫🇷</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900">FRANCE</h3>
                  <p className="text-sm text-blue-700 font-bold">Status: PARTIAL COMPLIANCE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration, EU Charter of Fundamental Rights, Convention on the Rights of the Child</p>
                <p><strong>Implementation:</strong> Mixed record on Indigenous rights, stronger child protection laws</p>
                <a href="https://www.diplomatie.gouv.fr/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Germany */}
            <div className="bg-yellow-50 border-l-8 border-yellow-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🇩🇪</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-900">GERMANY</h3>
                  <p className="text-sm text-yellow-700 font-bold">Status: PARTIAL COMPLIANCE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration, EU Charter, Convention on the Rights of the Child</p>
                <p><strong>Implementation:</strong> Strong child protection laws, limited Indigenous population</p>
                <a href="https://www.auswaertiges-amt.de/en/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Italy */}
            <div className="bg-green-50 border-l-8 border-green-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🇮🇹</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-900">ITALY</h3>
                  <p className="text-sm text-green-700 font-bold">Status: PARTIAL COMPLIANCE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration, EU Charter, Convention on the Rights of the Child</p>
                <p><strong>Implementation:</strong> Moderate child protection, limited Indigenous rights focus</p>
                <a href="https://www.esteri.it/en/" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Japan */}
            <div className="bg-pink-50 border-l-8 border-pink-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🇯🇵</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-pink-900">JAPAN</h3>
                  <p className="text-sm text-pink-700 font-bold">Status: PARTIAL COMPLIANCE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration (2007), Convention on the Rights of the Child</p>
                <p><strong>Implementation:</strong> Ainu rights recognition (2008), ongoing advocacy needed</p>
                <a href="https://www.mofa.go.jp/index.html" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* UK */}
            <div className="bg-purple-50 border-l-8 border-purple-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🇬🇧</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900">UNITED KINGDOM</h3>
                  <p className="text-sm text-purple-700 font-bold">Status: PARTIAL COMPLIANCE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration, Convention on the Rights of the Child, UK Equality Act</p>
                <p><strong>Implementation:</strong> Strong child protection laws, limited Indigenous population</p>
                <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* USA */}
            <div className="bg-indigo-50 border-l-8 border-indigo-600 p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🇺🇸</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-indigo-900">UNITED STATES</h3>
                  <p className="text-sm text-indigo-700 font-bold">Status: PARTIAL COMPLIANCE</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Commitments:</strong> UN Declaration (2016), Indian Child Welfare Act (1978), Convention on the Rights of the Child (signed, not ratified)</p>
                <p><strong>Implementation:</strong> Mixed record on tribal sovereignty and child protection</p>
                <a href="https://www.state.gov/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline flex items-center gap-2 mt-3">
                  Learn More <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Rights */}
        <div className="bg-gray-900 text-white p-12 rounded-lg mb-16">
          <h2 className="text-4xl font-serif font-bold mb-8">
            Universal Human Rights All Children Deserve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users size={24} />
                Right to Protection
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Freedom from violence, abuse, and neglect</li>
                <li>• Access to safe housing and food</li>
                <li>• Protection by law enforcement</li>
                <li>• Access to justice and legal representation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText size={24} />
                Right to Services
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Mental health and psychological support</li>
                <li>• Medical care and treatment</li>
                <li>• Education and skill development</li>
                <li>• Social services without discrimination</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe size={24} />
                Right to Identity
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Maintain cultural and linguistic identity</li>
                <li>• Practice traditional customs and beliefs</li>
                <li>• Connect with community and family</li>
                <li>• Participate in decision-making</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ExternalLink size={24} />
                Right to Accountability
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• File complaints against institutions</li>
                <li>• Seek international intervention</li>
                <li>• Access to transparent investigations</li>
                <li>• Compensation for harm and violations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-forest-green text-cream p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Know Your Rights. Demand Accountability.</h2>
          <p className="text-lg mb-8">
            If you or someone you know has experienced systemic failures or human rights violations, you have the right to file a complaint with the UN, your government, and international bodies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resource-kit" className="bg-amber-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-light transition-colors">
              Get Resource Kit
            </a>
            <a href="/survey" className="bg-white text-forest-green px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Share Your Story
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-forest-green/80 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
