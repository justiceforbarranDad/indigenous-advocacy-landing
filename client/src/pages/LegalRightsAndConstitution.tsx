import { FileText, Scale, Globe, Heart } from 'lucide-react';

export default function LegalRightsAndConstitution() {
  const constitutionalDocuments = [
    {
      id: 1,
      title: 'Canadian Constitution Act, 1982',
      icon: <Scale size={32} />,
      sections: [
        {
          number: 'Section 1',
          heading: 'Canadian Charter of Rights and Freedoms',
          content: 'The Canadian Charter of Rights and Freedoms guarantees the rights and freedoms set out in it subject only to such reasonable limits prescribed by law as can be demonstrably justified in a free and democratic society.'
        },
        {
          number: 'Section 2(b)',
          heading: 'Freedom of Expression',
          content: 'Everyone has the following fundamental freedoms: freedom of thought, belief, expression and the freedom of the press and other media of communication.'
        },
        {
          number: 'Section 7',
          heading: 'Life, Liberty and Security of the Person',
          content: 'Everyone has the right to life, liberty and security of the person.'
        },
        {
          number: 'Section 15',
          heading: 'Equality Rights',
          content: 'Every individual is equal before and under the law and has the right to the equal protection and equal benefit of the law without discrimination and, in particular, without discrimination based on race, national or ethnic origin, colour, religion, sex, age or mental or physical disability.'
        },
        {
          number: 'Section 35',
          heading: 'Recognition of Aboriginal Rights',
          content: 'The existing Aboriginal and treaty rights of the Aboriginal peoples of Canada are hereby recognized and affirmed.'
        }
      ],
      relevance: 'These constitutional provisions protect freedom of expression, equality rights, and recognize Aboriginal rights—all fundamental to this advocacy campaign.'
    },
    {
      id: 2,
      title: 'UN Convention on the Rights of the Child (1989)',
      icon: <Heart size={32} />,
      sections: [
        {
          number: 'Article 3',
          heading: 'Best Interests of the Child',
          content: 'In all actions concerning children, whether undertaken by public or private social welfare institutions, courts of law, administrative authorities or legislative bodies, the best interests of the child shall be a primary consideration.'
        },
        {
          number: 'Article 6',
          heading: 'Right to Life, Survival and Development',
          content: 'States Parties recognize that every child has the inherent right to life. States Parties shall ensure to the maximum extent possible the survival and development of the child.'
        },
        {
          number: 'Article 8',
          heading: 'Preservation of Identity',
          content: 'States Parties undertake to respect the right of the child to preserve his or her identity, including nationality, name and family relations as recognized by law without unlawful interference.'
        },
        {
          number: 'Article 9',
          heading: 'Right Not to Be Separated from Parents',
          content: 'States Parties shall ensure that a child shall not be separated from his or her parents against their will, except when competent authorities subject to judicial review determine, in accordance with applicable law and procedures, that such separation is necessary for the best interests of the child.'
        },
        {
          number: 'Article 19',
          heading: 'Protection from Violence and Abuse',
          content: 'States Parties shall take all appropriate legislative, administrative, social and educational measures to protect the child from all forms of physical or mental violence, injury or abuse, neglect or negligent treatment, maltreatment or exploitation.'
        },
        {
          number: 'Article 37',
          heading: 'Protection from Torture and Other Cruel Treatment',
          content: 'States Parties shall ensure that no child is subjected to torture or other cruel, inhuman or degrading treatment or punishment.'
        }
      ],
      relevance: 'Canada ratified this convention in 1991. The systemic failures documented in this campaign represent violations of multiple articles, particularly regarding child protection and family preservation.'
    },
    {
      id: 3,
      title: 'UN Universal Declaration of Human Rights (1948)',
      icon: <Globe size={32} />,
      sections: [
        {
          number: 'Article 1',
          heading: 'Human Dignity and Equality',
          content: 'All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.'
        },
        {
          number: 'Article 3',
          heading: 'Right to Life and Liberty',
          content: 'Everyone has the right to life, liberty and security of person.'
        },
        {
          number: 'Article 5',
          heading: 'Freedom from Torture',
          content: 'No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.'
        },
        {
          number: 'Article 8',
          heading: 'Right to Effective Remedy',
          content: 'Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.'
        },
        {
          number: 'Article 19',
          heading: 'Freedom of Opinion and Expression',
          content: 'Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.'
        }
      ],
      relevance: 'These universal human rights form the foundation of international law and are binding on all nations, including Canada, through international treaties and domestic constitutional law.'
    },
    {
      id: 4,
      title: 'UN Declaration on the Rights of Indigenous Peoples (2007)',
      icon: <Heart size={32} />,
      sections: [
        {
          number: 'Article 1',
          heading: 'Right to Self-Determination',
          content: 'Indigenous peoples have the right to self-determination. By virtue of that right they freely determine their political status and freely pursue their economic, social and cultural development.'
        },
        {
          number: 'Article 3',
          heading: 'Right to Self-Governance',
          content: 'Indigenous peoples have the right to self-governance in matters relating to their internal and local affairs, as well as ways and means for financing their autonomous functions.'
        },
        {
          number: 'Article 7',
          heading: 'Right to Life and Physical Integrity',
          content: 'Indigenous individuals have the rights to life, physical and mental integrity, liberty and security of person.'
        },
        {
          number: 'Article 8',
          heading: 'Right Not to Be Subjected to Forced Assimilation',
          content: 'Indigenous peoples and individuals have the right not to be subjected to forced assimilation or destruction of their culture. States shall provide effective mechanisms for prevention of, and redress for: (a) Any action which has the aim or effect of depriving them of their integrity as distinct peoples, or of their cultural values or ethnic identities.'
        },
        {
          number: 'Article 22',
          heading: 'Particular Attention to Children',
          content: 'Particular attention shall be paid to the rights and special needs of Indigenous elders, women, youth, children and persons with disabilities in the implementation of this Declaration.'
        },
        {
          number: 'Article 26',
          heading: 'Right to Lands and Resources',
          content: 'Indigenous peoples have the right to the lands, territories and resources which they have traditionally owned, occupied or otherwise used or acquired, and to own, use, occupy and dispose of the same.'
        }
      ],
      relevance: 'Canada adopted this declaration in 2016. It recognizes the specific rights of Indigenous peoples, including protection of children and freedom from assimilationist policies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">LEGAL RIGHTS & CONSTITUTION</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">Canadian Constitution and International Human Rights Instruments</p>
          <p className="text-xs md:text-sm tracking-widest">MARCH 31, 2026</p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Legal Foundation for Justice</h2>
          <p className="text-lg leading-relaxed mb-4">
            This campaign is grounded in Canadian constitutional law and international human rights instruments. The systemic failures documented here represent violations of fundamental rights protected by:
          </p>
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>Canadian Constitution Act, 1982:</strong> Including the Charter of Rights and Freedoms and recognition of Aboriginal rights</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>UN Convention on the Rights of the Child:</strong> Ratified by Canada in 1991, establishing binding obligations to protect children</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>UN Universal Declaration of Human Rights:</strong> Foundational international human rights law</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>UN Declaration on the Rights of Indigenous Peoples:</strong> Adopted by Canada in 2016, protecting Indigenous rights and children</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CONSTITUTIONAL DOCUMENTS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {constitutionalDocuments.map((doc) => (
              <div key={doc.id} className="border-4 border-black p-8">
                {/* Document Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="text-black flex-shrink-0">
                    {doc.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{doc.title}</h2>
                    <div className="h-1 bg-amber-orange w-16 mb-4"></div>
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-6 mb-8">
                  {doc.sections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-amber-orange pl-6">
                      <h3 className="text-xl font-bold mb-2">
                        <span className="text-amber-orange">{section.number}:</span> {section.heading}
                      </h3>
                      <p className="text-base leading-relaxed text-charcoal/80">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Relevance Statement */}
                <div className="bg-amber-orange/10 border-2 border-amber-orange p-4">
                  <p className="text-base leading-relaxed">
                    <strong>Relevance to This Campaign:</strong> {doc.relevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JORDAN'S PRINCIPLE */}
      <section className="bg-forest-green/5 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-4 border-forest-green p-8">
            <h2 className="text-3xl font-bold mb-6 text-forest-green">Jordan's Principle</h2>
            <p className="text-lg leading-relaxed mb-4">
              Jordan's Principle is a child-first approach to resolving jurisdictional disputes over the provision of services to First Nations children. It is named after Jordan River Anderson, a Cree child from Norway House Cree Nation in Manitoba who died while waiting for the federal and provincial governments to determine who should pay for his home care services.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong>The Principle:</strong> "When a government service is available to all other children in Canada, and a First Nations child is denied that service based on their Indigenous status, the government that would normally provide the service must do so immediately, without delay, and without requiring a jurisdictional dispute to be resolved first."
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Application to This Case:</strong> The systemic failures documented in this campaign represent direct violations of Jordan's Principle. Indigenous children have been denied services, protection, and support available to other Canadian children, while government bodies engaged in jurisdictional disputes rather than providing immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* TRUTH AND RECONCILIATION COMMISSION */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-4 border-red-600 p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">Truth and Reconciliation Commission Calls to Action</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Truth and Reconciliation Commission (TRC) issued 94 Calls to Action in 2015. Several are directly relevant to the systemic failures documented in this campaign:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="font-bold mb-2">Call to Action #1: Child Welfare</h3>
                <p className="text-base leading-relaxed">
                  "We call upon the federal, provincial, territorial, and Aboriginal governments to commit to reducing the number of Aboriginal children in care by 50% within 10 years and to commit to closing the gap between Aboriginal and non-Aboriginal children in the child welfare system within 15 years."
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="font-bold mb-2">Call to Action #2: Jurisdiction and Funding</h3>
                <p className="text-base leading-relaxed">
                  "We call upon the federal government to provide adequate funding to end the jurisdictional disputes between federal and provincial governments that result in gaps in services to First Nations children."
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="font-bold mb-2">Call to Action #65: Accountability</h3>
                <p className="text-base leading-relaxed">
                  "We call upon the federal government to establish measurable goals to identify and close gaps in health outcomes between Aboriginal and non-Aboriginal Canadians."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL PROTECTION FOR THIS ADVOCACY */}
      <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Legal Protection for This Advocacy</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Charter Section 2(b) - Freedom of Expression</h3>
              <p className="text-base leading-relaxed">
                This advocacy campaign is protected by the Canadian Charter of Rights and Freedoms, Section 2(b), which guarantees freedom of expression. The Supreme Court of Canada has established that this protection extends to public discourse on matters of public interest, including government accountability and systemic failures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Responsible Communication on Matters of Public Interest</h3>
              <p className="text-base leading-relaxed">
                In Grant v. Torstar Corp., 2009 SCC 61, the Supreme Court established that responsible communication on matters of public interest is a defense to defamation. This campaign documents factual evidence of systemic failures, government ghosting, and institutional abuse—all matters of significant public interest.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Indigenous Rights Jurisprudence</h3>
              <p className="text-base leading-relaxed">
                Recent Supreme Court decisions (including 2024 CSC 5) have affirmed robust protection for Indigenous rights, including the right to advocate for systemic change and hold government accountable for violations of Indigenous children's rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-50 py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Demand Accountability</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            These constitutional and international legal instruments are not merely words on paper. They represent binding obligations that Canada has made to protect the rights of all children, especially Indigenous children. The systemic failures documented in this campaign represent violations of these fundamental rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate-etransfer" 
              className="border-2 border-black bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors"
            >
              SUPPORT LEGAL ACTION
            </a>
            <a 
              href="/accountability-tracker" 
              className="border-2 border-black px-8 py-3 font-bold hover:bg-black hover:text-white transition-colors"
            >
              VIEW ACCOUNTABILITY TRACKER
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
            For more information about these legal instruments and their application to this case, contact us at <strong>justiceforbarran@gmail.com</strong>
          </p>
          <p className="mt-4">
            This page is maintained as part of the McGovern Institute's educational mission. All information is accurate as of March 31, 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
