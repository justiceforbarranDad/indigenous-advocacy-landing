import { BookOpen, Users, AlertCircle, TrendingDown, Globe } from 'lucide-react';

export default function RightsEducationInSchools() {
  const curriculumOutline = [
    {
      grade: 'Primary School (K-3)',
      age: 'Ages 4-8',
      topics: [
        'Basic human dignity and respect',
        'Right to safety and protection',
        'Right to education',
        'Right to family and community',
        'Recognizing when rights are violated',
        'Speaking up and asking for help'
      ]
    },
    {
      grade: 'Elementary School (4-6)',
      age: 'Ages 9-11',
      topics: [
        'Canadian Charter of Rights and Freedoms',
        'Right to life, liberty, and security',
        'Freedom of expression and thought',
        'Right to equality and non-discrimination',
        'Indigenous rights and history',
        'How to report violations',
        'Government accountability'
      ]
    },
    {
      grade: 'Middle School (7-9)',
      age: 'Ages 12-14',
      topics: [
        'UN Convention on the Rights of the Child (detailed)',
        'UN Universal Declaration of Human Rights',
        'Canadian constitutional law',
        'Child protection systems (DPJ, CPS)',
        'Mental health and wellness rights',
        'Education rights and accessibility',
        'Legal remedies and advocacy',
        'Case studies of systemic failures'
      ]
    },
    {
      grade: 'High School (10-12)',
      age: 'Ages 15-18',
      topics: [
        'Advanced constitutional law',
        'International human rights frameworks',
        'UN Declaration on the Rights of Indigenous Peoples',
        'Systemic discrimination and institutional failures',
        'Legal advocacy and activism',
        'Jurisprudence and landmark cases',
        'Government accountability mechanisms',
        'How to document violations',
        'Preparing for adulthood: knowing your rights as a worker, tenant, citizen',
        'Critical analysis of systemic failures in Canada'
      ]
    }
  ];

  const whyGovernmentsDontFund = [
    {
      reason: 'Educated Citizens Demand Accountability',
      explanation: 'When citizens know their rights, they hold government accountable. This costs the elite money through lawsuits, settlements, and forced institutional reforms.'
    },
    {
      reason: 'Reduced Institutional Power',
      explanation: 'Institutions like DPJ, police, and bureaucracies rely on citizens not knowing their rights. Rights education reduces institutional abuse and corruption.'
    },
    {
      reason: 'Elite Interests Over Public Good',
      explanation: 'Governments prioritize funding for corporate interests, military, and elite services. Human rights education for children is seen as "unnecessary spending."'
    },
    {
      reason: 'Systemic Failures Would Be Exposed',
      explanation: 'If all children learned about their rights, systemic failures in child protection, Indigenous affairs, and institutional accountability would become undeniable.'
    },
    {
      reason: 'Reduced Compliance and Control',
      explanation: 'Governments prefer citizens who don\'t know their rights. Educated citizens are harder to control and more likely to challenge injustice.'
    },
    {
      reason: 'Budget Priorities Reflect Values',
      explanation: 'Governments spend billions on prisons, military, and corporate subsidies. Lack of rights education funding shows that protecting children\'s rights is not a priority.'
    }
  ];

  const internationalStandards = [
    {
      country: 'Finland',
      status: 'Mandatory human rights education in all schools',
      result: 'Consistently ranked #1 in education quality and student wellbeing'
    },
    {
      country: 'Germany',
      status: 'Constitutional requirement for civic and rights education',
      result: 'Strong democratic participation and low institutional abuse'
    },
    {
      country: 'New Zealand',
      status: 'Rights education integrated into curriculum',
      result: 'Better outcomes for Indigenous (Māori) students'
    },
    {
      country: 'Australia',
      status: 'National curriculum includes human rights',
      result: 'Increased awareness of Indigenous rights and reconciliation'
    },
    {
      country: 'Canada',
      status: 'NO mandatory human rights education curriculum',
      result: 'Children don\'t know their rights; systemic failures continue unchecked'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">RIGHTS EDUCATION IN SCHOOLS</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">Mandatory Human Rights Curriculum from Primary School to High School</p>
          <p className="text-xs md:text-sm tracking-widest">MARCH 31, 2026</p>
        </div>
      </div>

      {/* CRITICAL STATEMENT */}
      <section className="bg-red-600 text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Every Child Should Know Their Rights</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Every child in Canada should be taught their fundamental human rights from Primary School through High School.</strong>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This is not optional. This is not a "nice to have." This is a fundamental requirement for:
          </p>
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>Protecting children from abuse and exploitation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>Enabling children to recognize when their rights are violated</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>Empowering children to seek help and speak up</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>Creating a society where institutional accountability is the norm</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>Preventing systemic failures like the ones that harmed Barran</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROPOSED CURRICULUM */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proposed Mandatory Curriculum</h2>
          
          <div className="space-y-8">
            {curriculumOutline.map((level, idx) => (
              <div key={idx} className="border-4 border-forest-green p-8">
                <h3 className="text-2xl font-bold mb-2 text-forest-green">{level.grade}</h3>
                <p className="text-base font-semibold text-gray-600 mb-4">{level.age}</p>
                
                <div className="bg-forest-green/5 border-2 border-forest-green p-4">
                  <p className="text-sm font-bold uppercase tracking-wider mb-3">Topics to Cover:</p>
                  <ul className="space-y-2">
                    {level.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-base flex items-start gap-2">
                        <span className="font-bold text-forest-green mt-1">→</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GOVERNMENTS DON'T FUND IT */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Governments Don't Fund Rights Education</h2>
          
          <div className="space-y-6">
            {whyGovernmentsDontFund.map((item, idx) => (
              <div key={idx} className="border-4 border-red-600 p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">{item.reason}</h3>
                <p className="text-base leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-lg leading-relaxed">
              <strong>Knowing your rights costs money.</strong> It costs the elite money through accountability, lawsuits, and forced reforms. Governments would rather spend on prisons, military, and corporate subsidies than educate children about their rights. This is a choice. And it's a choice that enables systemic abuse.
            </p>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL COMPARISON */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">International Standards</h2>
          
          <div className="space-y-4">
            {internationalStandards.map((standard, idx) => (
              <div key={idx} className={`border-4 p-6 ${standard.country === 'Canada' ? 'border-red-600 bg-red-50' : 'border-green-600 bg-green-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${standard.country === 'Canada' ? 'text-red-600' : 'text-green-600'}`}>
                  {standard.country}
                </h3>
                <p className="text-base mb-2"><strong>Status:</strong> {standard.status}</p>
                <p className="text-base"><strong>Result:</strong> {standard.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY: BARRAN */}
      <section className="bg-amber-orange/10 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Case Study: What Happens Without Rights Education</h2>
          
          <div className="border-4 border-amber-orange p-8">
            <p className="text-lg leading-relaxed mb-4">
              <strong>Barran's Story:</strong> A 14-year-old Indigenous boy was stabbed three times in 2021. He didn't know:
            </p>
            <ul className="space-y-3 text-base leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>That he had a right to protection from violence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>That government agencies had legal obligations to help him</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>That he could demand accountability when DPJ withdrew without follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>That politicians were legally required to respond to constituent requests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>That cease-and-desist warnings in response to requests for help were illegal</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed font-bold">
              If Barran had been taught his rights in school, he would have known how to advocate for himself and his family. He would have recognized systemic failures as violations of his rights. He would have had the tools to demand accountability.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Demand Mandatory Rights Education</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            The McGovern Institute calls on all Canadian governments to implement mandatory human rights education in all schools from Primary through High School. This is not a luxury. This is a necessity for protecting children and creating a society where systemic accountability is the norm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/institution-mission" 
              className="border-2 border-white bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors"
            >
              LEARN ABOUT McGOVERN INSTITUTE
            </a>
            <a 
              href="/donate-etransfer" 
              className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              SUPPORT THIS MISSION
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
            This page advocates for mandatory human rights education in all Canadian schools. Every child deserves to know their rights.
          </p>
          <p className="mt-4">
            Contact: <strong>justiceforbarran@gmail.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
