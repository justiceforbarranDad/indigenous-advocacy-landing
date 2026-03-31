import { BookOpen, Users, Scale, Globe, Heart, Lightbulb } from 'lucide-react';

export default function InstitutionMission() {
  const pillars = [
    {
      icon: <BookOpen size={40} />,
      title: 'Education on Human Rights',
      description: 'Teaching Canadian citizens about their fundamental rights under the Canadian Constitution, UN conventions, and international law. Creating educational materials that empower people to recognize and challenge systemic violations.',
      programs: [
        'Constitutional law education programs',
        'UN rights frameworks and international law',
        'Jurisprudence and legal precedents',
        'Case studies of systemic failures',
        'Advocacy training and resources'
      ]
    },
    {
      icon: <Scale size={40} />,
      title: 'Education on Canadian Rights',
      description: 'Documenting systemic failures in Canadian institutions and holding government accountable. Teaching about specific rights violations, institutional negligence, and patterns of systemic discrimination.',
      programs: [
        'Child welfare system failures',
        'Indigenous rights violations',
        'Government accountability documentation',
        'Institutional negligence case studies',
        'Public advocacy training'
      ]
    },
    {
      icon: <Users size={40} />,
      title: 'Support for Affected Families',
      description: 'Providing direct support, legal resources, and advocacy assistance to families experiencing systemic failures. Creating a network of survivors and advocates working for systemic change.',
      programs: [
        'Legal consultation and referrals',
        'Mental health and trauma support',
        'Educational support for affected children',
        'Financial assistance for legal costs',
        'Community support networks'
      ]
    },
    {
      icon: <Globe size={40} />,
      title: 'International Advocacy',
      description: 'Engaging with international human rights bodies, UN mechanisms, and global advocacy networks to hold Canada accountable for violations of international law and treaty obligations.',
      programs: [
        'UN submissions and advocacy',
        'International human rights body engagement',
        'Cross-border case collaboration',
        'Global Indigenous rights advocacy',
        'International legal strategy'
      ]
    },
    {
      icon: <Heart size={40} />,
      title: 'Indigenous Rights Focus',
      description: 'Centering Indigenous peoples in all work. Recognizing that systemic failures disproportionately affect Indigenous communities and that Indigenous self-determination is essential to justice.',
      programs: [
        'Indigenous-led advocacy',
        'Protection of Indigenous children',
        'Support for Indigenous legal frameworks',
        'Collaboration with Indigenous organizations',
        'Recognition of Indigenous sovereignty'
      ]
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Systemic Reform',
      description: 'Working toward concrete systemic changes in Canadian institutions. Moving beyond individual cases to demand institutional reform, policy change, and government accountability.',
      programs: [
        'Policy reform advocacy',
        'Legislative change proposals',
        'Institutional accountability mechanisms',
        'Independent inquiry demands',
        'Implementation of Jordan\'s Principle'
      ]
    }
  ];

  const programs = [
    {
      name: 'Educational Materials Library',
      description: 'Free, publicly accessible educational materials on human rights, constitutional law, and systemic failures',
      audience: 'Students, educators, advocates, general public'
    },
    {
      name: 'Legal Resources Hub',
      description: 'Comprehensive legal resources, case studies, and jurisprudence documentation',
      audience: 'Lawyers, legal advocates, affected families'
    },
    {
      name: 'Advocacy Training Program',
      description: 'Training for individuals and organizations on how to document systemic failures and advocate for change',
      audience: 'Activists, community organizers, affected families'
    },
    {
      name: 'Survivor Support Network',
      description: 'Community support, resources, and advocacy assistance for families affected by systemic failures',
      audience: 'Affected families, survivors, caregivers'
    },
    {
      name: 'International Advocacy Program',
      description: 'Engagement with UN bodies, international human rights organizations, and global advocacy networks',
      audience: 'International human rights bodies, global advocacy networks'
    },
    {
      name: 'Research and Documentation',
      description: 'Comprehensive documentation of systemic failures, government accountability, and institutional negligence',
      audience: 'Researchers, journalists, policy makers'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">McGOVERN INSTITUTE</h1>
          <h2 className="text-2xl md:text-3xl italic mb-4">For Human Rights and Canadian Rights</h2>
          <h3 className="text-lg md:text-xl mb-4">Founded through Justice for Barran Campaign</h3>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">A Non-Profit Educational Institution</p>
          <p className="text-xs md:text-sm tracking-widest">MARCH 31, 2026</p>
        </div>
      </div>

      {/* MISSION STATEMENT */}
      <section className="bg-forest-green text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-4">
            The McGovern Institute for Human Rights and Canadian Rights is a non-profit educational institute dedicated to teaching Canadians about their fundamental human rights, documenting systemic failures in Canadian institutions, and holding government accountable for violations of those rights.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            We believe that education is the foundation of justice. By teaching people about their rights, documenting systemic failures, and supporting affected families, we create the conditions for systemic change.
          </p>
          <p className="text-lg leading-relaxed">
            Our work is grounded in the Canadian Constitution, international human rights law, and the lived experiences of families harmed by systemic institutional failures.
          </p>
        </div>
      </section>

      {/* VISION STATEMENT */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-4">
            A Canada where:
          </p>
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange text-xl">✓</span>
              <span>All children, especially Indigenous children, are protected from systemic violence and institutional negligence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange text-xl">✓</span>
              <span>Government institutions are accountable for systemic failures and must implement concrete reforms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange text-xl">✓</span>
              <span>Citizens understand their rights and can advocate effectively for systemic change</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange text-xl">✓</span>
              <span>Indigenous peoples exercise self-determination and are not subject to colonial institutional control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange text-xl">✓</span>
              <span>Apologies are followed by concrete action, not continued systemic failure</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Six Pillars of Our Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="border-4 border-black p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-black flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                </div>
                
                <p className="text-base leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <div className="bg-gray-50 border-2 border-black p-4">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3">Programs:</p>
                  <ul className="space-y-2">
                    {pillar.programs.map((program, pIdx) => (
                      <li key={pIdx} className="text-sm flex items-start gap-2">
                        <span className="font-bold text-amber-orange">•</span>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL PROGRAMS */}
      <section className="bg-amber-orange/5 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Educational Programs</h2>
          
          <div className="space-y-6">
            {programs.map((program, idx) => (
              <div key={idx} className="border-4 border-amber-orange p-6">
                <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                <p className="text-base leading-relaxed mb-4">{program.description}</p>
                <div className="bg-amber-orange/10 px-4 py-2 rounded">
                  <p className="text-sm"><strong>Audience:</strong> {program.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION & LEGAL STATUS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Registration & Legal Status</h2>
          
          <div className="border-4 border-black p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Non-Profit Institute Status</h3>
            <p className="text-base leading-relaxed mb-4">
              Justice for Barran is being established as a registered non-profit educational institute under Canadian law. This registration includes:
            </p>
            <ul className="space-y-3 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="font-bold">•</span>
                <span><strong>Federal Non-Profit Incorporation:</strong> Registered under the Canada Not-for-profit Corporations Act</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">•</span>
                <span><strong>Provincial Registration:</strong> Licensed in Quebec as an educational institution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">•</span>
                <span><strong>Charity Status:</strong> Registered as a charitable organization with Canada Revenue Agency (pending final approval)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">•</span>
                <span><strong>Tax-Deductible Donations:</strong> All donations are tax-deductible for Canadian donors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">•</span>
                <span><strong>Governance Structure:</strong> Board of directors, transparent financial reporting, and independent audits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">•</span>
                <span><strong>Public Accountability:</strong> Annual reports, public financial statements, and transparent operations</span>
              </li>
            </ul>
          </div>

          <div className="border-4 border-forest-green p-8">
            <h3 className="text-2xl font-bold mb-4 text-forest-green">Educational Mandate</h3>
            <p className="text-base leading-relaxed mb-4">
              As an educational institute, Justice for Barran is dedicated to:
            </p>
            <ul className="space-y-3 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="font-bold text-forest-green">→</span>
                <span>Teaching about human rights, constitutional law, and international legal frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-forest-green">→</span>
                <span>Documenting systemic failures and institutional negligence as educational case studies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-forest-green">→</span>
                <span>Training advocates and community organizers on systemic accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-forest-green">→</span>
                <span>Supporting research on systemic failures and institutional reform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-forest-green">→</span>
                <span>Providing resources to affected families and communities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Support This Educational Institute</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Your donation supports the McGovern Institute for Human Rights and Canadian Rights - a permanent educational institution dedicated to teaching Canadians about their rights and holding government accountable for systemic failures.
          </p>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Every dollar raised goes directly toward:
          </p>
          <ul className="space-y-2 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            <li>✓ Non-profit registration and legal establishment</li>
            <li>✓ Educational materials development</li>
            <li>✓ Legal advocacy and support for affected families</li>
            <li>✓ International human rights advocacy</li>
            <li>✓ Institutional accountability campaigns</li>
            <li>✓ Platform and operations to keep this work running 24/7</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donation-impact" 
              className="border-2 border-white bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors"
            >
              VIEW BUDGET BREAKDOWN
            </a>
            <a 
              href="/donate-etransfer" 
              className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              DONATE NOW
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
          <p className="mt-2">
            Contact: <strong>justiceforbarran@gmail.com</strong> | Phone: <strong>+1 (438) 926-3636</strong>
          </p>
          <p className="mt-4">
            A non-profit educational institute dedicated to teaching Canadians about their rights and holding government accountable for systemic failures.
          </p>
        </div>
      </section>
    </div>
  );
}
