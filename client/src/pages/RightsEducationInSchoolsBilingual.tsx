import { BookOpen, Users, AlertCircle, TrendingDown, Globe } from 'lucide-react';
import { useState } from 'react';

export default function RightsEducationInSchoolsBilingual() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const content = {
    en: {
      title: 'RIGHTS EDUCATION IN SCHOOLS',
      subtitle: 'Mandatory Human Rights Curriculum from Primary School to High School',
      date: 'MARCH 31, 2026',
      criticalHeading: 'Every Child Should Know Their Rights',
      criticalStatement: 'Every child in Canada should be taught their fundamental human rights from Primary School through High School.',
      criticalSubtext: 'This is not optional. This is not a "nice to have." This is a fundamental requirement for:',
      protectingChildren: 'Protecting children from abuse and exploitation',
      recognizingViolations: 'Enabling children to recognize when their rights are violated',
      empoweringChildren: 'Empowering children to seek help and speak up',
      creatingAccountability: 'Creating a society where institutional accountability is the norm',
      preventingFailures: 'Preventing systemic failures like the ones that harmed Barran',
      curriculumTitle: 'Proposed Mandatory Curriculum',
      whyGovernmentsTitle: 'Why Governments Don\'t Fund Rights Education',
      bottomLine: 'The Bottom Line',
      bottomLineText: 'Knowing your rights costs money. It costs the elite money through accountability, lawsuits, and forced reforms. Governments would rather spend on prisons, military, and corporate subsidies than educate children about their rights. This is a choice. And it\'s a choice that enables systemic abuse.',
      internationalTitle: 'International Standards',
      caseStudyTitle: 'Case Study: What Happens Without Rights Education',
      barranStory: 'Barran\'s Story: A 14-year-old Indigenous boy was stabbed three times in 2021. He didn\'t know:',
      rightToProtection: 'That he had a right to protection from violence',
      rightToObligation: 'That government agencies had legal obligations to help him',
      rightToDemandAccountability: 'That he could demand accountability when DPJ withdrew without follow-up',
      rightToPoliticians: 'That politicians were legally required to respond to constituent requests',
      rightToCeaseDesist: 'That cease-and-desist warnings in response to requests for help were illegal',
      ifBarranKnew: 'If Barran had been taught his rights in school, he would have known how to advocate for himself and his family. He would have recognized systemic failures as violations of his rights. He would have had the tools to demand accountability.',
      demandTitle: 'Demand Mandatory Rights Education',
      demandText: 'The McGovern Institute calls on all Canadian governments to implement mandatory human rights education in all schools from Primary through High School. This is not a luxury. This is a necessity for protecting children and creating a society where systemic accountability is the norm.',
      learnButton: 'LEARN ABOUT McGOVERN INSTITUTE',
      supportButton: 'SUPPORT THIS MISSION',
      footer: 'This page advocates for mandatory human rights education in all Canadian schools. Every child deserves to know their rights.',
      contact: 'Contact:',
      footerInstitute: 'McGovern Institute for Human Rights and Canadian Rights',
      footerCampaign: 'Founded through the Justice for Barran Campaign'
    },
    fr: {
      title: 'ÉDUCATION AUX DROITS À L\'ÉCOLE',
      subtitle: 'Curriculum obligatoire en matière de droits de la personne de l\'école primaire au secondaire',
      date: '31 MARS 2026',
      criticalHeading: 'Chaque enfant devrait connaître ses droits',
      criticalStatement: 'Chaque enfant au Canada devrait apprendre ses droits fondamentaux de la personne de l\'école primaire au secondaire.',
      criticalSubtext: 'Ce n\'est pas facultatif. Ce n\'est pas un « plus ». C\'est une exigence fondamentale pour:',
      protectingChildren: 'Protéger les enfants de l\'abus et de l\'exploitation',
      recognizingViolations: 'Permettre aux enfants de reconnaître quand leurs droits sont violés',
      empoweringChildren: 'Autonomiser les enfants pour qu\'ils cherchent de l\'aide et parlent',
      creatingAccountability: 'Créer une société où la responsabilité institutionnelle est la norme',
      preventingFailures: 'Prévenir les défaillances systémiques comme celles qui ont endommagé Barran',
      curriculumTitle: 'Curriculum obligatoire proposé',
      whyGovernmentsTitle: 'Pourquoi les gouvernements ne financent pas l\'éducation aux droits',
      bottomLine: 'L\'essentiel',
      bottomLineText: 'Connaître ses droits coûte de l\'argent. Cela coûte de l\'argent à l\'élite par le biais de la responsabilité, des poursuites judiciaires et des réformes forcées. Les gouvernements préfèrent dépenser pour les prisons, l\'armée et les subventions aux entreprises plutôt que d\'éduquer les enfants sur leurs droits. C\'est un choix. Et c\'est un choix qui permet les abus systémiques.',
      internationalTitle: 'Normes internationales',
      caseStudyTitle: 'Étude de cas: Ce qui se passe sans éducation aux droits',
      barranStory: 'L\'histoire de Barran: Un garçon autochtone de 14 ans a été poignardé trois fois en 2021. Il ne savait pas:',
      rightToProtection: 'Qu\'il avait le droit d\'être protégé contre la violence',
      rightToObligation: 'Que les organismes gouvernementaux avaient des obligations légales de l\'aider',
      rightToDemandAccountability: 'Qu\'il pouvait exiger une responsabilité lorsque la DPJ s\'est retirée sans suivi',
      rightToPoliticians: 'Que les politiciens étaient légalement tenus de répondre aux demandes des électeurs',
      rightToCeaseDesist: 'Que les avertissements de cesser et de s\'abstenir en réponse aux demandes d\'aide étaient illégaux',
      ifBarranKnew: 'Si Barran avait appris ses droits à l\'école, il aurait su comment plaider pour lui-même et sa famille. Il aurait reconnu les défaillances systémiques comme des violations de ses droits. Il aurait eu les outils pour exiger une responsabilité.',
      demandTitle: 'Exiger une éducation obligatoire aux droits',
      demandText: 'L\'Institut McGovern appelle tous les gouvernements canadiens à mettre en œuvre une éducation obligatoire en matière de droits de la personne dans toutes les écoles du primaire au secondaire. Ce n\'est pas un luxe. C\'est une nécessité pour protéger les enfants et créer une société où la responsabilité systémique est la norme.',
      learnButton: 'EN SAVOIR PLUS SUR L\'INSTITUT McGOVERN',
      supportButton: 'SOUTENIR CETTE MISSION',
      footer: 'Cette page plaide pour une éducation obligatoire en matière de droits de la personne dans toutes les écoles canadiennes. Chaque enfant mérite de connaître ses droits.',
      contact: 'Contact:',
      footerInstitute: 'Institut McGovern pour les droits de la personne et les droits canadiens',
      footerCampaign: 'Fondé par la campagne Justice pour Barran'
    }
  };

  const curriculumData = {
    en: [
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
    ],
    fr: [
      {
        grade: 'École primaire (M-3)',
        age: 'Âges 4-8',
        topics: [
          'Dignité humaine fondamentale et respect',
          'Droit à la sécurité et à la protection',
          'Droit à l\'éducation',
          'Droit à la famille et à la communauté',
          'Reconnaître quand les droits sont violés',
          'Parler et demander de l\'aide'
        ]
      },
      {
        grade: 'École élémentaire (4-6)',
        age: 'Âges 9-11',
        topics: [
          'Charte canadienne des droits et libertés',
          'Droit à la vie, à la liberté et à la sécurité',
          'Liberté d\'expression et de pensée',
          'Droit à l\'égalité et à la non-discrimination',
          'Droits et histoire des Autochtones',
          'Comment signaler les violations',
          'Responsabilité gouvernementale'
        ]
      },
      {
        grade: 'École secondaire (7-9)',
        age: 'Âges 12-14',
        topics: [
          'Convention des Nations unies relative aux droits de l\'enfant (détaillée)',
          'Déclaration universelle des droits de l\'homme',
          'Droit constitutionnel canadien',
          'Systèmes de protection de l\'enfance (DPJ, SPE)',
          'Droits à la santé mentale et au bien-être',
          'Droits à l\'éducation et accessibilité',
          'Recours juridiques et plaidoyer',
          'Études de cas de défaillances systémiques'
        ]
      },
      {
        grade: 'École secondaire (10-12)',
        age: 'Âges 15-18',
        topics: [
          'Droit constitutionnel avancé',
          'Cadres internationaux des droits de la personne',
          'Déclaration des Nations unies sur les droits des peuples autochtones',
          'Discrimination systémique et défaillances institutionnelles',
          'Plaidoyer juridique et activisme',
          'Jurisprudence et cas marquants',
          'Mécanismes de responsabilité gouvernementale',
          'Comment documenter les violations',
          'Préparation à l\'âge adulte: connaître ses droits en tant que travailleur, locataire, citoyen',
          'Analyse critique des défaillances systémiques au Canada'
        ]
      }
    ]
  };

  const whyGovernmentsData = {
    en: [
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
    ],
    fr: [
      {
        reason: 'Les citoyens éduqués exigent la responsabilité',
        explanation: 'Lorsque les citoyens connaissent leurs droits, ils tiennent le gouvernement responsable. Cela coûte de l\'argent à l\'élite par le biais de poursuites judiciaires, de règlements et de réformes institutionnelles forcées.'
      },
      {
        reason: 'Pouvoir institutionnel réduit',
        explanation: 'Les institutions comme la DPJ, la police et les bureaucraties comptent sur le fait que les citoyens ne connaissent pas leurs droits. L\'éducation aux droits réduit les abus institutionnels et la corruption.'
      },
      {
        reason: 'Intérêts de l\'élite plutôt que le bien public',
        explanation: 'Les gouvernements priorisent le financement des intérêts des entreprises, de l\'armée et des services d\'élite. L\'éducation aux droits de la personne pour les enfants est considérée comme une « dépense inutile ».'
      },
      {
        reason: 'Les défaillances systémiques seraient exposées',
        explanation: 'Si tous les enfants apprenaient leurs droits, les défaillances systémiques dans la protection de l\'enfance, les affaires autochtones et la responsabilité institutionnelle deviendraient indéniables.'
      },
      {
        reason: 'Conformité et contrôle réduits',
        explanation: 'Les gouvernements préfèrent les citoyens qui ne connaissent pas leurs droits. Les citoyens éduqués sont plus difficiles à contrôler et plus susceptibles de contester l\'injustice.'
      },
      {
        reason: 'Les priorités budgétaires reflètent les valeurs',
        explanation: 'Les gouvernements dépensent des milliards pour les prisons, l\'armée et les subventions aux entreprises. L\'absence de financement pour l\'éducation aux droits montre que la protection des droits des enfants n\'est pas une priorité.'
      }
    ]
  };

  const internationalData = {
    en: [
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
    ],
    fr: [
      {
        country: 'Finlande',
        status: 'Éducation obligatoire aux droits de la personne dans toutes les écoles',
        result: 'Constamment classée #1 en qualité de l\'éducation et bien-être des étudiants'
      },
      {
        country: 'Allemagne',
        status: 'Exigence constitutionnelle d\'éducation civique et aux droits',
        result: 'Participation démocratique forte et abus institutionnels faibles'
      },
      {
        country: 'Nouvelle-Zélande',
        status: 'Éducation aux droits intégrée au curriculum',
        result: 'Meilleurs résultats pour les étudiants autochtones (Māori)'
      },
      {
        country: 'Australie',
        status: 'Le curriculum national comprend les droits de la personne',
        result: 'Sensibilisation accrue aux droits des Autochtones et à la réconciliation'
      },
      {
        country: 'Canada',
        status: 'PAS de curriculum obligatoire en matière de droits de la personne',
        result: 'Les enfants ne connaissent pas leurs droits; les défaillances systémiques se poursuivent sans contrôle'
      }
    ]
  };

  const lang = content[language];
  const curriculum = curriculumData[language];
  const whyGovernments = whyGovernmentsData[language];
  const international = internationalData[language];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* LANGUAGE TOGGLE */}
      <div className="bg-gray-100 border-b-2 border-black py-3 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div></div>
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 font-bold ${language === 'en' ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'}`}
            >
              ENGLISH
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-4 py-2 font-bold ${language === 'fr' ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'}`}
            >
              FRANÇAIS
            </button>
          </div>
        </div>
      </div>

      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">{lang.title}</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">{lang.subtitle}</p>
          <p className="text-xs md:text-sm tracking-widest">{lang.date}</p>
        </div>
      </div>

      {/* CRITICAL STATEMENT */}
      <section className="bg-red-600 text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{lang.criticalHeading}</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>{lang.criticalStatement}</strong>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {lang.criticalSubtext}
          </p>
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>{lang.protectingChildren}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>{lang.recognizingViolations}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>{lang.empoweringChildren}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>{lang.creatingAccountability}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-xl">✓</span>
              <span>{lang.preventingFailures}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROPOSED CURRICULUM */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.curriculumTitle}</h2>
          
          <div className="space-y-8">
            {curriculum.map((level, idx) => (
              <div key={idx} className="border-4 border-forest-green p-8">
                <h3 className="text-2xl font-bold mb-2 text-forest-green">{level.grade}</h3>
                <p className="text-base font-semibold text-gray-600 mb-4">{level.age}</p>
                
                <div className="bg-forest-green/5 border-2 border-forest-green p-4">
                  <p className="text-sm font-bold uppercase tracking-wider mb-3">{language === 'en' ? 'Topics to Cover:' : 'Sujets à couvrir:'}</p>
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
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.whyGovernmentsTitle}</h2>
          
          <div className="space-y-6">
            {whyGovernments.map((item, idx) => (
              <div key={idx} className="border-4 border-red-600 p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">{item.reason}</h3>
                <p className="text-base leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{lang.bottomLine}</h3>
            <p className="text-lg leading-relaxed">
              {lang.bottomLineText}
            </p>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL COMPARISON */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.internationalTitle}</h2>
          
          <div className="space-y-4">
            {international.map((standard, idx) => (
              <div key={idx} className={`border-4 p-6 ${standard.country === 'Canada' || standard.country === 'Canada' ? 'border-red-600 bg-red-50' : 'border-green-600 bg-green-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${standard.country === 'Canada' || standard.country === 'Canada' ? 'text-red-600' : 'text-green-600'}`}>
                  {standard.country}
                </h3>
                <p className="text-base mb-2"><strong>{language === 'en' ? 'Status:' : 'Statut:'}  </strong>{standard.status}</p>
                <p className="text-base"><strong>{language === 'en' ? 'Result:' : 'Résultat:'}</strong> {standard.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY: BARRAN */}
      <section className="bg-amber-orange/10 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">{lang.caseStudyTitle}</h2>
          
          <div className="border-4 border-amber-orange p-8">
            <p className="text-lg leading-relaxed mb-4">
              <strong>{lang.barranStory}</strong>
            </p>
            <ul className="space-y-3 text-base leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>{lang.rightToProtection}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>{lang.rightToObligation}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>{lang.rightToDemandAccountability}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>{lang.rightToPoliticians}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-amber-orange">•</span>
                <span>{lang.rightToCeaseDesist}</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed font-bold">
              {lang.ifBarranKnew}
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{lang.demandTitle}</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {lang.demandText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/institution-mission" 
              className="border-2 border-white bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors"
            >
              {lang.learnButton}
            </a>
            <a 
              href="/donate-etransfer" 
              className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              {lang.supportButton}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-white border-t-4 border-black py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
          <p>
            <strong>{lang.footerInstitute}</strong>
          </p>
          <p className="mt-2">
            {lang.footerCampaign}
          </p>
          <p className="mt-4">
            {lang.footer}
          </p>
          <p className="mt-4">
            {lang.contact} <strong>justiceforbarran@gmail.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
