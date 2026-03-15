import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

/**
 * DESIGN SYSTEM: "Orange Sky" — Solemn Memorial / Indigenous Aesthetic
 * Resources & References page with comprehensive information on Indigenous rights,
 * child welfare, violence, and legal frameworks
 */

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  resources: Array<{
    title: string;
    url: string;
    description?: string;
  }>;
}

const resourceCategories: ResourceCategory[] = [
  {
    id: 'indigenous-children',
    title: 'Indigenous Children: Welfare & Protection',
    description: 'Resources on child welfare failures, systemic issues, and protection frameworks for Indigenous children in Canada.',
    resources: [
      {
        title: 'First Nations Child & Family Caring Society',
        url: 'https://www.fncaringsociety.com',
        description: 'Leading organization advocating for First Nations child welfare',
      },
      {
        title: 'Policy Options: Indigenous Child Welfare Transfer',
        url: 'https://policyoptions.irpp.org/2024/10/indigenous-child-welfare/',
        description: 'Analysis of child welfare service transfer to Indigenous communities',
      },
      {
        title: 'APTN Investigates: When Child Welfare Fails',
        url: 'https://www.youtube.com/watch?v=Ra7PT2mlHdU',
        description: 'Documentary investigation into Indigenous child welfare system failures',
      },
      {
        title: 'Globe and Mail: Failure to Protect Indigenous Children',
        url: 'https://www.theglobeandmail.com/news/national/failure-to-protect-indigenous-children-in-care-perpetuates-cycle-of-abuse/article32252228/',
        description: 'Investigation into abuse within child protection systems',
      },
      {
        title: 'West Coast LEAF: BC Child Protection System Report',
        url: 'https://westcoastleaf.org/release-new-report-indigenous-families-share-their-vision-for-transforming-the-failings-of-bcs-child-protection-system/',
        description: 'Report on systemic failures in BC child protection',
      },
      {
        title: 'TRT World: Canada Indigenous Children Seek Justice',
        url: 'https://www.trtworld.com/article/13088690',
        description: 'Global perspective on Indigenous child welfare crisis',
      },
      {
        title: 'CDPDJ: Protection of Children and Young People',
        url: 'https://www.cdpdj.qc.ca/en/our-positions/issues/protection-children-and-young-people',
        description: 'Quebec Commission on human rights and youth protection',
      },
      {
        title: 'CBC: Indigenous Youth in Quebec Child Protection',
        url: 'https://www.cbc.ca/news/canada/montreal/quebec-indigenous-nakuset-batshaw-language-1.4941393',
        description: 'Investigation into language and cultural rights in child protection',
      },
    ],
  },
  {
    id: 'indigenous-adults',
    title: 'Indigenous Adults: Violence & Systemic Discrimination',
    description: 'Resources on violence against Indigenous adults, MMIP, and systemic discrimination.',
    resources: [
      {
        title: 'Missing and Murdered Indigenous Women, Girls & 2SLGBTQI+ People',
        url: 'https://www.mmiwg-ffada.ca/',
        description: 'National Inquiry Final Report and Calls for Justice',
      },
      {
        title: 'MMIWHOISMISSING.org',
        url: 'https://mmiwhoismissing.org/',
        description: 'Database and resources on missing Indigenous peoples',
      },
      {
        title: 'RCMP: Missing and Murdered Indigenous People',
        url: 'https://rcmp.ca/en/missing-and-murdered-indigenous-women-girls-and-2slgbtqi-people',
        description: 'Official RCMP information and annual campaign',
      },
      {
        title: 'Statistics Canada: Criminal Victimization of Indigenous Peoples',
        url: 'https://www150.statcan.gc.ca/n1/daily-quotidien/220719/dq220719c-eng.htm',
        description: 'Official statistics on Indigenous victimization',
      },
      {
        title: 'Justice.gc.ca: Understanding Overrepresentation of Indigenous People',
        url: 'https://www.justice.gc.ca/socjs-esjp/en/ind-aut/uo-cs',
        description: 'Government analysis of systemic discrimination in justice system',
      },
      {
        title: 'BC Human Rights: Systemic Discrimination Against Indigenous People',
        url: 'https://www.bchrt.bc.ca/indigenous/discrimination/systemic/',
        description: 'Analysis of systemic discrimination and violence',
      },
      {
        title: 'Canada.ca: Ending Gender-Based Violence Against Indigenous Peoples',
        url: 'https://www.canada.ca/en/women-gender-equality/gender-based-violence/ending-gbv-indigenous.html',
        description: 'Government resources on gender-based violence',
      },
      {
        title: 'Statistics Canada: Experiences of Indigenous Women in Canada',
        url: 'https://www150.statcan.gc.ca/n1/pub/85-002-x/2022001/article/00004-eng.htm',
        description: 'Data on violence experienced by Indigenous women',
      },
      {
        title: 'Public Safety Canada: Crime Prevention in Indigenous Communities',
        url: 'https://www.publicsafety.gc.ca/cnt/rsrcs/pblctns/2023-r009/index-en.aspx',
        description: 'Analysis of crime and homicide rates in Indigenous communities',
      },
    ],
  },
  {
    id: 'un-laws',
    title: 'UN Laws & International Rights',
    description: 'United Nations conventions, declarations, and international frameworks protecting Indigenous peoples and children.',
    resources: [
      {
        title: 'UN Convention on the Rights of the Child (UNCRC)',
        url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child',
        description: 'International treaty protecting children rights',
      },
      {
        title: 'UN General Comment: Rights of Indigenous Children',
        url: 'https://fncaringsociety.com/sites/default/files/UNCRCGeneralComment-RightsOfIndigenousChildren.pdf',
        description: 'UN Committee guidance on Indigenous children rights',
      },
      {
        title: 'UNICEF: Child Rights Convention Summary',
        url: 'https://www.unicef.org/child-rights-convention',
        description: 'UNICEF overview of UNCRC',
      },
      {
        title: 'UN Declaration on the Rights of Indigenous Peoples (UNDRIP)',
        url: 'https://social.desa.un.org/issues/indigenous-peoples/united-nations-declaration-on-the-rights-of-indigenous-peoples',
        description: 'UN Declaration affirming Indigenous peoples rights',
      },
      {
        title: 'UNDRIP - Official PDF',
        url: 'https://www.un.org/development/desa/indigenouspeoples/wp-content/uploads/sites/19/2018/11/UNDRIP_E_web.pdf',
        description: 'Full text of UNDRIP',
      },
      {
        title: 'OHCHR: UN Declaration on Rights of Indigenous Peoples',
        url: 'https://www.ohchr.org/en/indigenous-peoples/un-declaration-rights-indigenous-peoples',
        description: 'UN Office of High Commissioner for Human Rights resource',
      },
      {
        title: 'Justice.gc.ca: UNDRIP Implementation',
        url: 'https://www.justice.gc.ca/eng/declaration/index.html',
        description: 'Canadian government UNDRIP implementation',
      },
      {
        title: 'ILO Convention 169: Indigenous and Tribal Peoples',
        url: 'https://www.ilo.org/indigenous/conventions/no-169/lang--en/index.htm',
        description: 'International Labour Organization convention on Indigenous rights',
      },
    ],
  },
  {
    id: 'canadian-laws',
    title: 'Canadian Laws & Legislation',
    description: 'Canadian federal and provincial laws protecting Indigenous peoples and children.',
    resources: [
      {
        title: 'Indian Act (RSC, 1985, c. I-5)',
        url: 'https://laws-lois.justice.gc.ca/eng/acts/i-5/',
        description: 'Primary federal legislation governing First Nations',
      },
      {
        title: 'Indigenous Foundations: The Indian Act',
        url: 'https://indigenousfoundations.arts.ubc.ca/the_indian_act/',
        description: 'Educational resource on the Indian Act',
      },
      {
        title: 'Jordans Principle - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Jordan%27s_Principle',
        description: 'Overview of Jordans Principle',
      },
      {
        title: 'First Nations Child & Family Caring Society: Jordans Principle',
        url: 'https://www.fncaringsociety.com/sites/default/files/2023-05/Jordan%27s%20Principle%20Information%20Sheet%202023%20EN.pdf',
        description: 'Detailed information on Jordans Principle',
      },
      {
        title: 'CBC: Canada Approves Fewer Jordans Principle Education Claims',
        url: 'https://www.cbc.ca/news/indigenous/tribunal-first-nations-education-funding-9.7039685',
        description: 'Recent reporting on Jordans Principle implementation',
      },
      {
        title: 'Department of Justice: Family Violence Laws',
        url: 'https://www.justice.gc.ca/eng/cj-jp/fv-vf/laws-lois.html',
        description: 'Canadian family violence legislation',
      },
      {
        title: 'Quebec Charter of Rights and Freedoms',
        url: 'https://www.legisquebec.gouv.qc.ca/en/document/cs/c-23.1',
        description: 'Quebec provincial human rights legislation',
      },
      {
        title: 'Canadian Human Rights Act',
        url: 'https://laws-lois.justice.gc.ca/eng/acts/h-6/index.html',
        description: 'Federal human rights legislation',
      },
    ],
  },
  {
    id: 'jurisprudence',
    title: 'Key Jurisprudence & Court Cases',
    description: 'Important Supreme Court and appellate decisions on Indigenous rights, child welfare, and freedom of expression.',
    resources: [
      {
        title: 'Grant v Torstar Corp, 2009 SCC 61',
        url: 'https://scc-csc.lexisnexis.com/scc-csc/scc-csc/en/item/7785/index.do',
        description: 'Supreme Court case on responsible communication and freedom of expression',
      },
      {
        title: 'Tsilqotin Nation v British Columbia, 2014 SCC 44',
        url: 'https://scc-csc.lexisnexis.com/scc-csc/scc-csc/en/item/14246/index.do',
        description: 'Landmark Supreme Court decision on Aboriginal title',
      },
      {
        title: 'Delgamuukw v British Columbia, 1997 SCC 110',
        url: 'https://scc-csc.lexisnexis.com/scc-csc/scc-csc/en/item/1353/index.do',
        description: 'Foundational case on Aboriginal rights and title',
      },
      {
        title: 'Haida Nation v British Columbia (Minister of Forests), 2004 SCC 73',
        url: 'https://scc-csc.lexisnexis.com/scc-csc/scc-csc/en/item/2147/index.do',
        description: 'Supreme Court decision on duty to consult',
      },
      {
        title: 'Sparrow v The Queen, 1990 SCC 49',
        url: 'https://scc-csc.lexisnexis.com/scc-csc/scc-csc/en/item/609/index.do',
        description: 'Foundational case on Aboriginal rights',
      },
      {
        title: 'Gitxaala Nation v Canada, 2016 SCC 54',
        url: 'https://scc-csc.lexisnexis.com/scc-csc/scc-csc/en/item/16662/index.do',
        description: 'Supreme Court decision on consultation and Indigenous rights',
      },
    ],
  },
  {
    id: 'research',
    title: 'Research & Academic Articles',
    description: 'Academic research, reports, and investigations on Indigenous child welfare and systemic issues.',
    resources: [
      {
        title: 'SAGE Journals: Indigenous Parents and Child Welfare',
        url: 'https://journals.sagepub.com/doi/10.1177/09646639211041476',
        description: 'Academic research on Indigenous parents and child welfare systems',
      },
      {
        title: 'NIH/PMC: Ending Violence Against Indigenous Peoples',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11490693/',
        description: 'Academic research on violence against Indigenous peoples',
      },
      {
        title: 'NIH/PMC: Jordans Principle and First Nations Children',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3448536/',
        description: 'Academic analysis of Jordans Principle implementation',
      },
      {
        title: 'Peterborough Community Legal Centre: Indigenous Systemic Discrimination',
        url: 'https://www.ptbo-clc.org/blog/indigenous-people-continue-to-face-violence-systemic-discrimination-and-inequality-in-canada/',
        description: 'Analysis of systemic discrimination and inequality',
      },
      {
        title: 'OHCHR: Systemic Discrimination Against Indigenous Women',
        url: 'https://www.ohchr.org/sites/default/files/documents/cfi-subm/2308/subm-colonialism-sexual-orientation-oth-d-coste.pdf',
        description: 'UN human rights report on systemic discrimination',
      },
      {
        title: 'Amnesty International: Stolen Sisters',
        url: 'https://www.amnesty.ca/our-work/issues/indigenous-peoples/stolen-sisters',
        description: 'Report on violence and discrimination against Indigenous women',
      },
    ],
  },
  {
    id: 'support-organizations',
    title: 'Support & Advocacy Organizations',
    description: 'Organizations providing support, advocacy, and resources for Indigenous peoples.',
    resources: [
      {
        title: 'Assembly of First Nations (AFN)',
        url: 'https://www.afn.ca',
        description: 'National advocacy organization for First Nations',
      },
      {
        title: 'Human Rights Watch: Indigenous Peoples',
        url: 'https://www.hrw.org/topic/indigenous-peoples',
        description: 'International human rights organization',
      },
      {
        title: 'UN Permanent Forum on Indigenous Issues',
        url: 'https://www.un.org/development/desa/indigenouspeoples/unpfii/',
        description: 'UN forum on Indigenous issues',
      },
      {
        title: 'Amnesty International Canada: Indigenous Peoples',
        url: 'https://www.amnesty.ca/our-work/issues/indigenous-peoples',
        description: 'Amnesty International Canada Indigenous rights work',
      },
      {
        title: 'Canadian Human Rights Commission',
        url: 'https://www.chrc-ccdp.gc.ca',
        description: 'Federal human rights commission',
      },
      {
        title: 'CDPDJ: Quebec Commission on Human Rights',
        url: 'https://www.cdpdj.qc.ca/en',
        description: 'Quebec human rights and youth protection commission',
      },
    ],
  },
];

export default function Resources() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <section className="bg-forest-green text-cream py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Resources & References
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Comprehensive information on Indigenous rights, child welfare, international law, and systemic justice
          </p>
        </div>
      </section>

      {/* Resources Categories */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-6">
            {resourceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-cream-dark transition-colors"
                >
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-forest-green mb-2">
                      {category.title}
                    </h2>
                    <p className="text-charcoal-light">
                      {category.description}
                    </p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-amber-orange flex-shrink-0 ml-4 transition-transform ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedCategory === category.id && (
                  <div className="border-t border-border px-8 py-6 bg-cream-dark">
                    <div className="space-y-4">
                      {category.resources.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow border-l-4 border-amber-orange"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-forest-green mb-1 flex items-center gap-2">
                                {resource.title}
                                <ExternalLink size={16} className="text-amber-orange" />
                              </h3>
                              {resource.description && (
                                <p className="text-sm text-charcoal-light">
                                  {resource.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-forest-green text-cream py-12">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Knowledge is Power. Justice is Possible.
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Use these resources to educate yourself, advocate for change, and support survivors.
          </p>
          <a
            href="/"
            className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Testimony
          </a>
        </div>
      </section>
    </div>
  );
}
