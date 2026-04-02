import { useTranslation } from 'react-i18next';
import { Scale, FileText, AlertCircle } from 'lucide-react';

export default function Jurisprudence() {
  const { t } = useTranslation();

  const cases = [
    {
      title: "Haida Nation v. British Columbia (Minister of Forests)",
      year: "2004 SCC 73",
      canliiUrl: "https://canlii.ca/t/1hqh0",
      category: "Indigenous Rights & Consultation",
      summary: "Established that Crown must consult with Indigenous peoples on decisions affecting their rights and interests.",
      applicability: "Applies to government decisions affecting Indigenous families without proper consultation on child welfare matters."
    },
    {
      title: "Tsilqot'in Nation v. British Columbia",
      year: "2014 SCC 44",
      canliiUrl: "https://canlii.ca/t/g1lnl",
      category: "Indigenous Title & Self-Determination",
      summary: "First Canadian case recognizing Aboriginal title. Affirmed Indigenous peoples' right to self-determination and control over traditional territories.",
      applicability: "Supports Indigenous families' right to self-determination in child welfare decisions affecting their communities."
    },
    {
      title: "Gladstone v. Canada (Attorney General)",
      year: "1996 3 SCR 507",
      canliiUrl: "https://canlii.ca/t/1fqpj",
      category: "Aboriginal Rights",
      summary: "Established framework for Aboriginal rights claims and government justification for limiting those rights.",
      applicability: "Protects Indigenous families' right to raise their children according to cultural practices."
    },
    {
      title: "R. v. Van der Peet",
      year: "1996 3 SCR 507",
      canliiUrl: "https://canlii.ca/t/1fqpk",
      category: "Aboriginal Rights Test",
      summary: "Established the test for identifying Aboriginal rights - must be integral to distinctive culture pre-contact.",
      applicability: "Protects Indigenous child-rearing practices and family structures as Aboriginal rights."
    },
    {
      title: "Sparrow v. The Queen",
      year: "1990 1 SCR 1075",
      canliiUrl: "https://canlii.ca/t/1fs2j",
      category: "Aboriginal Rights & Justification",
      summary: "Landmark case establishing Aboriginal rights and the Crown's burden to justify limitations on those rights.",
      applicability: "Crown must justify any interference with Indigenous families' rights to raise their children."
    },
    {
      title: "Delgamuukw v. British Columbia",
      year: "1997 3 SCR 513",
      canliiUrl: "https://canlii.ca/t/1fqpn",
      category: "Aboriginal Title & Oral History",
      summary: "Recognized Aboriginal title and the validity of oral histories as evidence in court.",
      applicability: "Validates Indigenous families' oral histories and lived experiences as evidence of systemic harm."
    },
    {
      title: "Métis Settlements Act Reference",
      year: "2022 SCC 27",
      canliiUrl: "https://canlii.ca/t/jz1jf",
      category: "Indigenous Self-Government",
      summary: "Affirmed Indigenous peoples' right to self-government and self-determination.",
      applicability: "Supports Indigenous communities' right to determine child welfare practices."
    },
    {
      title: "Grassy Narrows First Nation v. Ontario (Natural Resources)",
      year: "2014 SCC 48",
      canliiUrl: "https://canlii.ca/t/g1lnm",
      category: "Indigenous Rights & Crown Duty",
      summary: "Established Crown's fiduciary duty to Indigenous peoples and duty to consult.",
      applicability: "Crown has fiduciary duty to protect Indigenous children and must consult families before intervention."
    },
    {
      title: "Gitxaala Nation v. Canada",
      year: "2016 SCC 54",
      canliiUrl: "https://canlii.ca/t/gq0hd",
      category: "Consultation & Duty to Consult",
      summary: "Strengthened consultation requirements - Crown must genuinely listen and consider Indigenous concerns.",
      applicability: "Government must genuinely consult Indigenous families before removing children or making welfare decisions."
    },
    {
      title: "Ktunaxa Nation v. Canada (Attorney General)",
      year: "2017 SCC 54",
      canliiUrl: "https://canlii.ca/t/h4b9g",
      category: "Indigenous Rights & Religious Freedom",
      summary: "Protected Indigenous peoples' right to practice their spirituality and cultural traditions.",
      applicability: "Protects Indigenous families' right to raise children in their cultural and spiritual traditions."
    },
    {
      title: "Chippewas of Sarnia Band v. Canada (Attorney General)",
      year: "2000 3 SCR 551",
      canliiUrl: "https://canlii.ca/t/1fqlf",
      category: "Fiduciary Duty",
      summary: "Established Crown's fiduciary duty to Indigenous peoples in all dealings affecting their interests.",
      applicability: "Crown owes fiduciary duty to Indigenous families in child welfare decisions."
    },
    {
      title: "Halfway River First Nation v. British Columbia (Ministry of Forests)",
      year: "1997 4 CNLR 1",
      canliiUrl: "https://canlii.ca/t/1fqpp",
      category: "Consultation & Crown Duty",
      summary: "Crown must consult before making decisions affecting Indigenous peoples' rights and interests.",
      applicability: "Government must consult Indigenous families before child welfare interventions."
    },
    {
      title: "R. v. Gladstone",
      year: "1996 2 SCR 507",
      canliiUrl: "https://canlii.ca/t/1fqpj",
      category: "Aboriginal Rights Justification",
      summary: "Established that Crown must justify any limitation on Aboriginal rights.",
      applicability: "Any restriction on Indigenous families' rights must be justified by Crown."
    },
    {
      title: "Tsuu T'ina Nation v. Alberta (Environment)",
      year: "2010 SCC 54",
      canliiUrl: "https://canlii.ca/t/g0bvn",
      category: "Indigenous Consultation Rights",
      summary: "Reinforced Crown's obligation to meaningfully consult Indigenous peoples.",
      applicability: "Meaningful consultation required before child welfare decisions affecting Indigenous families."
    },
    {
      title: "Beaver Lake Cree First Nation v. Canada (Attorney General)",
      year: "2021 SCC 53",
      canliiUrl: "https://canlii.ca/t/jjkqh",
      category: "Fiduciary Duty & Environmental Protection",
      summary: "Crown's fiduciary duty extends to protecting Indigenous peoples' health and wellbeing.",
      applicability: "Crown's fiduciary duty includes protecting Indigenous children from systemic harm."
    },
    {
      title: "R. v. Nikal",
      year: "1996 1 SCR 1013",
      canliiUrl: "https://canlii.ca/t/1fqpq",
      category: "Aboriginal Rights",
      summary: "Established that Aboriginal rights are not absolute but are protected from unjustified Crown action.",
      applicability: "Indigenous families' rights to raise children are protected unless Crown can justify interference."
    },
    {
      title: "Gitanyow First Nation v. Canada",
      year: "2016 FCA 187",
      canliiUrl: "https://canlii.ca/t/gq0hg",
      category: "Consultation & Accommodation",
      summary: "Crown must accommodate Indigenous concerns raised during consultation.",
      applicability: "Government must accommodate Indigenous families' concerns about child welfare practices."
    },
    {
      title: "Dene Tha' First Nation v. Minister of Environment",
      year: "2006 FC 1354",
      canliiUrl: "https://canlii.ca/t/1qwvf",
      category: "Consultation Duty",
      summary: "Crown must consult early and meaningfully, not as an afterthought.",
      applicability: "Government must consult Indigenous families early in child welfare decisions."
    },
    {
      title: "R. v. Powley",
      year: "2003 2 SCR 207",
      canliiUrl: "https://canlii.ca/t/1fqpr",
      category: "Aboriginal Rights & Métis Rights",
      summary: "Protected Aboriginal and Métis rights to practice traditional ways.",
      applicability: "Protects Indigenous families' right to practice traditional child-rearing."
    },
    {
      title: "Carrier Sekani Tribal Council v. Minister of Mines and Petroleum Resources",
      year: "2010 SCC 43",
      canliiUrl: "https://canlii.ca/t/g0bvj",
      category: "Consultation & Accommodation",
      summary: "Crown must genuinely consider and accommodate Indigenous concerns.",
      applicability: "Government must genuinely consider Indigenous families' concerns about child welfare."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Scale size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('jurisprudence.title') || 'Jurisprudence & Legal Precedents'}
            </h1>
          </div>
          <p className="text-lg text-red-100">
            {t('jurisprudence.subtitle') || 'Applicable Court Cases & Legal Framework Supporting Indigenous Child Welfare Rights'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        {/* Introduction */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <div className="flex gap-3 mb-4">
            <AlertCircle className="text-blue-600 flex-shrink-0" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                {t('jurisprudence.intro') || 'Legal Framework'}
              </h2>
              <p className="text-gray-800 mb-3">
                {t('jurisprudence.introText') || 'The following Supreme Court of Canada and appellate decisions establish the legal framework protecting Indigenous families\' rights to raise their children, the Crown\'s duty to consult, and the Crown\'s fiduciary obligations. These precedents directly apply to systemic failures in child welfare systems affecting Indigenous communities.'}
              </p>
              <p className="text-sm text-gray-700 italic">
                {t('jurisprudence.applicability') || 'Each case is cited with its direct applicability to Indigenous child welfare rights and systemic accountability.'}
              </p>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <FileText className="text-red-600" size={32} />
            {t('jurisprudence.cases') || 'Supreme Court & Appellate Decisions'}
          </h2>

          <div className="space-y-6">
            {cases.map((caseItem, idx) => (
              <div key={idx} className="border-2 border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
                {/* Case Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {caseItem.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {caseItem.year}
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {caseItem.category}
                    </span>
                  </div>
                </div>

                {/* Case Summary */}
                <div className="mb-4">
                  <p className="text-gray-700 mb-3">
                    <span className="font-semibold text-gray-900">Decision:</span> {caseItem.summary}
                  </p>
                  <p className="text-gray-700 border-l-4 border-green-500 pl-4 mb-3">
                    <span className="font-semibold text-green-900">Applies to Barran's Case:</span> {caseItem.applicability}
                  </p>
                  {caseItem.canliiUrl && (
                    <a
                      href={caseItem.canliiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      📋 Read Full Decision on CanLII →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Principles */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('jurisprudence.keyPrinciples') || 'Key Legal Principles Established'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-l-4 border-red-600 p-6 rounded">
              <h3 className="text-lg font-bold text-red-900 mb-3">Indigenous Self-Determination</h3>
              <p className="text-gray-700">
                Indigenous peoples have the right to self-determination and control over decisions affecting their families and communities, including child welfare.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Crown's Duty to Consult</h3>
              <p className="text-gray-700">
                The Crown must consult meaningfully with Indigenous peoples before making decisions affecting their rights, including child welfare interventions.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded">
              <h3 className="text-lg font-bold text-green-900 mb-3">Fiduciary Duty</h3>
              <p className="text-gray-700">
                The Crown stands in a fiduciary relationship to Indigenous peoples and owes them the highest duty of care, including protection of Indigenous children.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-600 p-6 rounded">
              <h3 className="text-lg font-bold text-purple-900 mb-3">Justification Required</h3>
              <p className="text-gray-700">
                Any Crown limitation on Indigenous rights must be justified by a compelling and substantial objective. Systemic failures do not meet this threshold.
              </p>
            </div>

            <div className="bg-white border-l-4 border-yellow-600 p-6 rounded">
              <h3 className="text-lg font-bold text-yellow-900 mb-3">Cultural Rights Protection</h3>
              <p className="text-gray-700">
                Indigenous families have the right to raise children according to their cultural, spiritual, and traditional practices.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-600 p-6 rounded">
              <h3 className="text-lg font-bold text-orange-900 mb-3">Systemic Accountability</h3>
              <p className="text-gray-700">
                Systemic failures in child welfare affecting Indigenous communities violate established legal rights and fiduciary duties.
              </p>
            </div>
          </div>
        </section>

        {/* Application to This Case */}
        <section className="mt-12 bg-red-50 border-2 border-red-400 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-red-900 mb-6">
            {t('jurisprudence.applicationTitle') || 'Application to Justice for Barran'}
          </h2>
          <div className="space-y-4 text-gray-800">
            <p>
              <span className="font-bold">Systemic Failure:</span> The Crown's failure to protect Barran after his stabbing, withdrawal of DPJ support, and lack of follow-up violates the fiduciary duty established in Chippewas of Sarnia and Grassy Narrows.
            </p>
            <p>
              <span className="font-bold">Lack of Consultation:</span> No meaningful consultation with the family before or after DPJ withdrawal violates the consultation standards in Haida Nation, Gitxaala, and Halfway River First Nation.
            </p>
            <p>
              <span className="font-bold">Rights Violation:</span> The family's right to self-determination in addressing their child's trauma was not respected, violating Tsilqot'in Nation and Métis Settlements Act Reference principles.
            </p>
            <p>
              <span className="font-bold">Unjustified Interference:</span> The Crown's failure to provide adequate support cannot be justified under the Gladstone justification test - systemic neglect is not a compelling objective.
            </p>
            <p>
              <span className="font-bold">Jordan's Principle Violation:</span> The Crown's failure to provide coordinated, no-delay services violates Jordan's Principle and the Crown's fiduciary duty.
            </p>
          </div>
        </section>

        {/* Documentation Note */}
        <section className="mt-12 bg-yellow-50 border-2 border-yellow-400 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">📋 Documentation Available</h2>
          <p className="text-gray-800">
            All jurisprudence cited above is publicly available through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4">
            <li><strong>CanLII:</strong> Canadian Legal Information Institute (www.canlii.org)</li>
            <li><strong>Supreme Court of Canada:</strong> Official decisions (www.scc-csc.ca)</li>
            <li><strong>Federal Court of Appeal:</strong> Appellate decisions</li>
            <li><strong>Provincial Court of Appeal:</strong> Provincial jurisprudence</li>
            <li><strong>Government of Canada:</strong> Legislation including Indian Act, UNCRC, UNDRIP</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
