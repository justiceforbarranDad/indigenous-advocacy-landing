import { Scale, BookOpen, AlertCircle, TrendingUp } from 'lucide-react';

export default function HistoricalJurisprudence() {
  const cases = [
    {
      id: 1,
      title: 'Colten Boushie - Systemic Racism in Criminal Justice (2016)',
      year: '2016',
      jurisdiction: 'Saskatchewan, Canada',
      icon: <Scale size={32} />,
      outcome: 'Not Guilty (Acquittal)',
      relevance: 'Demonstrates systemic racism in Canadian justice system. Gerald Stanley acquitted despite shooting Colten Boushie, an unarmed Indigenous youth. Shows pattern of institutional failure to protect Indigenous lives.',
      parallels: [
        'Systemic failure to protect Indigenous youth',
        'Institutional bias in justice system',
        'Inadequate accountability for harm to Indigenous people',
        'Pattern of systemic violence against Indigenous communities'
      ]
    },
    {
      id: 2,
      title: 'Tina Fontaine - Missing & Murdered Indigenous Girls (2014)',
      year: '2014',
      jurisdiction: 'Manitoba, Canada',
      icon: <AlertCircle size={32} />,
      outcome: 'Murder conviction (2015), but systemic failures exposed',
      relevance: 'Tina Fontaine, a 15-year-old Sagkeeng Ojibway girl, was murdered in Winnipeg. Her death exposed systemic failures in child protection, police response, and government accountability. Her body was found wrapped in a duvet in the Red River.',
      parallels: [
        'Systemic failure of child protection services',
        'Police negligence in investigating Indigenous disappearances',
        'Institutional failure to protect vulnerable Indigenous children',
        'Pattern of government inaction despite warning signs',
        'Inadequate follow-up after initial intervention'
      ]
    },
    {
      id: 3,
      title: 'Canadian Human Rights Tribunal - First Nations Child Welfare (2016)',
      year: '2016',
      jurisdiction: 'Federal, Canada',
      icon: <TrendingUp size={32} />,
      outcome: 'Tribunal found systemic discrimination',
      relevance: 'After 10 years of failed negotiations, the Canadian Human Rights Tribunal found that Canada systematically discriminated against First Nations children by providing inequitable child welfare funding. This created systemic failures across provinces.',
      parallels: [
        'Systemic discrimination in child welfare funding',
        'Jurisdictional disputes between federal and provincial governments',
        'Inadequate resources for child protection on First Nations',
        'Pattern of institutional negligence spanning decades',
        'Government failure to fulfill Jordan\'s Principle obligations'
      ]
    },
    {
      id: 4,
      title: 'Haaland v. Brackeen - Indian Child Welfare Act (2023)',
      year: '2023',
      jurisdiction: 'United States Supreme Court',
      icon: <Scale size={32} />,
      outcome: 'ICWA upheld as constitutional',
      relevance: 'U.S. Supreme Court affirmed that the Indian Child Welfare Act (ICWA) is constitutional and protects Indigenous children\'s rights. Demonstrates international recognition of need to protect Indigenous children from systemic harm.',
      parallels: [
        'Recognition that Indigenous children face systemic discrimination in welfare systems',
        'Need for special protections to prevent family separation',
        'Acknowledgment of historical institutional abuse of Indigenous children',
        'Legal framework recognizing Indigenous rights to family integrity'
      ]
    },
    {
      id: 5,
      title: 'R. v. Gladstone - Aboriginal Rights Jurisprudence (1996)',
      year: '1996',
      jurisdiction: 'Supreme Court of Canada',
      icon: <BookOpen size={32} />,
      outcome: 'Affirmed Aboriginal rights framework',
      relevance: 'Supreme Court established framework for recognizing and protecting Aboriginal rights. Established that Aboriginal peoples have inherent rights that must be respected by government.',
      parallels: [
        'Recognition of Aboriginal rights to self-determination',
        'Government obligation to respect Indigenous sovereignty',
        'Legal framework for holding government accountable for violations',
        'Precedent for Indigenous advocacy and accountability'
      ]
    },
    {
      id: 6,
      title: 'Delgamuukw v. British Columbia - Aboriginal Title (1997)',
      year: '1997',
      jurisdiction: 'Supreme Court of Canada',
      icon: <Scale size={32} />,
      outcome: 'Aboriginal title recognized',
      relevance: 'Supreme Court recognized Aboriginal title to land and established that Aboriginal peoples have inherent rights to govern themselves and their territories.',
      parallels: [
        'Recognition of Aboriginal sovereignty and self-governance',
        'Acknowledgment of systemic colonial oppression',
        'Legal framework for Indigenous accountability and justice',
        'Precedent for challenging systemic institutional failures'
      ]
    },
    {
      id: 7,
      title: 'Grant v. Torstar Corp. - Responsible Communication (2009)',
      year: '2009',
      jurisdiction: 'Supreme Court of Canada',
      icon: <BookOpen size={32} />,
      outcome: 'Established responsible communication defense',
      relevance: 'Supreme Court established that responsible communication on matters of public interest is protected speech. This protects advocacy campaigns that document systemic failures and hold government accountable.',
      parallels: [
        'Protection for public advocacy on systemic failures',
        'Recognition that government accountability is matter of public interest',
        'Legal protection for documenting institutional negligence',
        'Framework protecting this Justice for Barran campaign'
      ]
    },
    {
      id: 8,
      title: 'Truth and Reconciliation Commission - Systemic Failures (2015)',
      year: '2015',
      jurisdiction: 'Canada',
      icon: <AlertCircle size={32} />,
      outcome: '94 Calls to Action issued',
      relevance: 'TRC documented 150+ years of systemic abuse of Indigenous children through residential schools. Issued 94 Calls to Action demanding government accountability and systemic reform.',
      parallels: [
        'Documentation of systemic institutional abuse',
        'Pattern of government negligence spanning generations',
        'Recognition that systemic failures continue post-apology',
        'Calls for independent inquiry and accountability',
        'Demand for implementation of Jordan\'s Principle'
      ]
    }
  ];

  const systemicPatterns = [
    {
      pattern: 'Jurisdictional Disputes',
      description: 'Federal and provincial governments blame each other instead of helping children',
      examples: ['Tina Fontaine case', 'First Nations child welfare tribunal', 'Barran\'s case (DPJ withdrawal, no follow-up)'],
      barranConnection: 'DPJ withdrew in Jan 2023 with no adequate follow-up or alternative support'
    },
    {
      pattern: 'Institutional Negligence',
      description: 'Government agencies fail to act despite clear warning signs of abuse',
      examples: ['Colten Boushie shooting', 'Tina Fontaine murder', 'Residential school abuse'],
      barranConnection: 'Teen stabbed 3x in 2021, DPJ involved but then withdrew without resolution'
    },
    {
      pattern: 'Systemic Discrimination',
      description: 'Indigenous children receive fewer resources and protection than non-Indigenous children',
      examples: ['First Nations child welfare funding', 'ICWA litigation', 'Overrepresentation in care'],
      barranConnection: 'Indigenous family denied services available to other Canadian children'
    },
    {
      pattern: 'Government Ghosting',
      description: 'Officials ignore constituent requests and refuse accountability',
      examples: ['Cease-and-desist warnings', 'No response from MPs/MNAs', 'Institutional silence'],
      barranConnection: 'MNA sent cease-and-desist warning; federal/provincial officials ghosted for years'
    },
    {
      pattern: 'Post-Apology Failure',
      description: 'Government apologizes for systemic abuse but fails to implement real change',
      examples: ['2008 residential school apology', 'TRC 94 Calls to Action', 'Ongoing systemic failures'],
      barranConnection: '2008 apology for residential schools; 2026 same systemic failures continue'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">HISTORICAL JURISPRUDENCE</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">Landmark Cases & Legal Precedents Related to Barran's Story</p>
          <p className="text-xs md:text-sm tracking-widest">MARCH 31, 2026</p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Pattern of Systemic Failure</h2>
          <p className="text-lg leading-relaxed mb-4">
            The systemic failures documented in Barran's case are not isolated incidents. They are part of a decades-long pattern of institutional negligence, government accountability failures, and systemic discrimination against Indigenous children in Canada.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Landmark court cases, government inquiries, and international legal instruments have repeatedly documented these same failures. Yet they continue.
          </p>
          <p className="text-lg leading-relaxed">
            This page documents the legal precedents that establish: (1) the pattern of systemic failure, (2) government accountability obligations, and (3) the legal framework for demanding change.
          </p>
        </div>
      </section>

      {/* LANDMARK CASES */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Landmark Cases & Legal Precedents</h2>
          
          <div className="space-y-8">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="border-4 border-black p-8">
                {/* Case Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-black flex-shrink-0">
                    {caseItem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm font-semibold mb-2">
                      <span className="bg-amber-orange/20 px-3 py-1 rounded">{caseItem.year}</span>
                      <span className="bg-forest-green/20 px-3 py-1 rounded">{caseItem.jurisdiction}</span>
                      <span className="bg-red-600/20 px-3 py-1 rounded">{caseItem.outcome}</span>
                    </div>
                  </div>
                </div>

                {/* Case Description */}
                <p className="text-base leading-relaxed mb-6">
                  {caseItem.relevance}
                </p>

                {/* Parallels to Barran's Case */}
                <div className="bg-amber-orange/10 border-2 border-amber-orange p-4 mb-4">
                  <h4 className="font-bold mb-3 text-amber-orange">Parallels to Barran's Case:</h4>
                  <ul className="space-y-2">
                    {caseItem.parallels.map((parallel, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="font-bold text-amber-orange mt-1">→</span>
                        <span>{parallel}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMIC PATTERNS */}
      <section className="bg-forest-green/5 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Recurring Systemic Patterns</h2>
          
          <div className="space-y-8">
            {systemicPatterns.map((item, idx) => (
              <div key={idx} className="border-4 border-forest-green p-8">
                <h3 className="text-2xl font-bold mb-4 text-forest-green">{item.pattern}</h3>
                
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Definition:</strong> {item.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-bold mb-2">Historical Examples:</h4>
                  <ul className="space-y-1">
                    {item.examples.map((example, exIdx) => (
                      <li key={exIdx} className="text-base flex items-start gap-2">
                        <span className="font-bold text-forest-green">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-600/10 border-2 border-red-600 p-4">
                  <h4 className="font-bold text-red-600 mb-2">Connection to Barran's Case:</h4>
                  <p className="text-base">{item.barranConnection}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE: DECADES OF FAILURE */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Timeline: Decades of Systemic Failure</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">1980s-1990s: Residential School Era Ends</h3>
              <p className="text-base leading-relaxed">Residential schools continue operating despite documented abuse. Government acknowledges "cultural genocide" but takes minimal action.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">1996: Gladstone Decision</h3>
              <p className="text-base leading-relaxed">Supreme Court recognizes Aboriginal rights framework, establishing legal basis for Indigenous accountability.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">1997: Delgamuukw Decision</h3>
              <p className="text-base leading-relaxed">Supreme Court recognizes Aboriginal title and self-governance rights.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2008: Residential School Apology</h3>
              <p className="text-base leading-relaxed">Prime Minister Harper apologizes for residential schools: "We are sorry." But systemic failures continue.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2009: Grant v. Torstar Decision</h3>
              <p className="text-base leading-relaxed">Supreme Court establishes responsible communication defense, protecting advocacy on public interest matters.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2014: Tina Fontaine Murdered</h3>
              <p className="text-base leading-relaxed">15-year-old Sagkeeng Ojibway girl murdered in Winnipeg. Systemic failures in child protection exposed.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2015: Truth and Reconciliation Commission Report</h3>
              <p className="text-base leading-relaxed">TRC documents 150+ years of systemic abuse. Issues 94 Calls to Action. Demands government accountability and systemic reform.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2016: Canadian Human Rights Tribunal Decision</h3>
              <p className="text-base leading-relaxed">Tribunal finds Canada systematically discriminated against First Nations children in child welfare funding.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2021: Barran Stabbed Three Times</h3>
              <p className="text-base leading-relaxed">Indigenous teen stabbed 3x in left lung, chest, and back. DPJ involved. Same systemic failures documented in landmark cases repeat.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2023: DPJ Withdraws</h3>
              <p className="text-base leading-relaxed">DPJ withdraws in January 2023 with no adequate follow-up. Education lost. Mental health destroyed. Same pattern as Tina Fontaine case.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6 pb-6">
              <h3 className="text-xl font-bold mb-2">2023: Haaland v. Brackeen Decision</h3>
              <p className="text-base leading-relaxed">U.S. Supreme Court affirms Indian Child Welfare Act protections for Indigenous children. Canada still fails to implement equivalent protections.</p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6">
              <h3 className="text-xl font-bold mb-2">2026: Justice for Barran Campaign</h3>
              <p className="text-base leading-relaxed">After 5 years of systemic failure, ghosting by officials at every level, and institutional negligence, public accountability campaign launched. Same failures repeat 44 years after residential school apology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY LEGAL PRINCIPLES */}
      <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Legal Principles Established by These Cases</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-orange pl-6">
              <h3 className="text-xl font-bold mb-2">1. Government Accountability for Systemic Failures</h3>
              <p className="text-base leading-relaxed">
                Courts have consistently held government accountable for systemic failures in child protection. Jurisdictional disputes and funding gaps do not excuse institutional negligence.
              </p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6">
              <h3 className="text-xl font-bold mb-2">2. Special Protections for Indigenous Children</h3>
              <p className="text-base leading-relaxed">
                Indigenous children face systemic discrimination in welfare systems. Courts recognize need for special protections, including Jordan's Principle and ICWA-equivalent frameworks.
              </p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6">
              <h3 className="text-xl font-bold mb-2">3. Right to Public Advocacy on Systemic Failures</h3>
              <p className="text-base leading-relaxed">
                Grant v. Torstar established that responsible communication on matters of public interest is protected. Government accountability is a matter of public interest.
              </p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6">
              <h3 className="text-xl font-bold mb-2">4. Apologies Without Action Are Insufficient</h3>
              <p className="text-base leading-relaxed">
                The 2008 residential school apology and 2015 TRC report demonstrate that apologies without systemic change are inadequate. Real accountability requires implementation of specific reforms.
              </p>
            </div>

            <div className="border-l-4 border-amber-orange pl-6">
              <h3 className="text-xl font-bold mb-2">5. Pattern of Systemic Failure Justifies Public Accountability</h3>
              <p className="text-base leading-relaxed">
                When private channels fail for years and government officials ghost constituents, public accountability campaigns become necessary and legally protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-50 py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Pattern Must End</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            These landmark cases establish that government has a legal obligation to protect Indigenous children and be accountable for systemic failures. The pattern documented in these cases has repeated for decades. It must end now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/legal-rights-constitution" 
              className="border-2 border-black bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors"
            >
              VIEW LEGAL RIGHTS & CONSTITUTION
            </a>
            <a 
              href="/donate-etransfer" 
              className="border-2 border-black px-8 py-3 font-bold hover:bg-black hover:text-white transition-colors"
            >
              SUPPORT LEGAL ACTION
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-white border-t-4 border-black py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
          <p>
            <strong>McGovern Institute for Human Rights and Canadian Rights</strong>
          </p>
          <p className="mt-2">
            Founded through the Justice for Barran Campaign
          </p>
          <p className="mt-4">
            This page documents historical jurisprudence and legal precedents related to Barran's case. All cases and legal principles cited are matters of public record.
          </p>
          <p className="mt-4">
            For more information, contact us at <strong>justiceforbarran@gmail.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
