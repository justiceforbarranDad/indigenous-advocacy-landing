import { Scale, AlertCircle, TrendingUp, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function HistoricalJurisprudenceBilingual() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const casesData = {
    en: [
      {
        id: 1,
        title: 'Colten Boushie - Systemic Racism in Criminal Justice (2016)',
        year: '2016',
        jurisdiction: 'Saskatchewan, Canada',
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
        outcome: 'ICWA upheld as constitutional',
        relevance: 'U.S. Supreme Court affirmed that the Indian Child Welfare Act (ICWA) is constitutional and protects Indigenous children\'s rights. Demonstrates international recognition of need to protect Indigenous children from systemic harm.',
        parallels: [
          'Recognition that Indigenous children face systemic discrimination in welfare systems',
          'Need for special protections to prevent family separation',
          'Acknowledgment of historical institutional abuse of Indigenous children',
          'Legal framework recognizing Indigenous rights to family integrity'
        ]
      }
    ],
    fr: [
      {
        id: 1,
        title: 'Colten Boushie - Racisme systémique dans la justice pénale (2016)',
        year: '2016',
        jurisdiction: 'Saskatchewan, Canada',
        outcome: 'Non coupable (acquittement)',
        relevance: 'Démontre le racisme systémique dans le système de justice canadien. Gerald Stanley acquitté malgré le tir sur Colten Boushie, un jeune Autochtone désarmé. Montre un modèle d\'échec institutionnel à protéger les vies autochtones.',
        parallels: [
          'Échec systémique de protéger les jeunes Autochtones',
          'Biais institutionnel dans le système de justice',
          'Responsabilité inadéquate pour les préjudices aux peuples autochtones',
          'Modèle de violence systémique contre les communautés autochtones'
        ]
      },
      {
        id: 2,
        title: 'Tina Fontaine - Femmes et filles autochtones disparues et assassinées (2014)',
        year: '2014',
        jurisdiction: 'Manitoba, Canada',
        outcome: 'Condamnation pour meurtre (2015), mais défaillances systémiques exposées',
        relevance: 'Tina Fontaine, une fille Ojibway de 15 ans de Sagkeeng, a été assassinée à Winnipeg. Sa mort a exposé les défaillances systémiques dans la protection de l\'enfance, la réponse policière et la responsabilité gouvernementale. Son corps a été retrouvé enveloppé dans une couette dans la rivière Rouge.',
        parallels: [
          'Échec systémique des services de protection de l\'enfance',
          'Négligence policière dans l\'enquête sur les disparitions autochtones',
          'Échec institutionnel de protéger les enfants autochtones vulnérables',
          'Modèle d\'inaction gouvernementale malgré les signes d\'avertissement',
          'Suivi inadéquat après l\'intervention initiale'
        ]
      },
      {
        id: 3,
        title: 'Tribunal canadien des droits de la personne - Protection de l\'enfance des Premières Nations (2016)',
        year: '2016',
        jurisdiction: 'Fédéral, Canada',
        outcome: 'Le tribunal a trouvé une discrimination systémique',
        relevance: 'Après 10 ans de négociations échouées, le Tribunal canadien des droits de la personne a constaté que le Canada discriminait systématiquement les enfants des Premières Nations en fournissant un financement inéquitable de la protection de l\'enfance. Cela a créé des défaillances systémiques dans les provinces.',
        parallels: [
          'Discrimination systémique dans le financement de la protection de l\'enfance',
          'Conflits de compétences entre les gouvernements fédéral et provinciaux',
          'Ressources inadéquates pour la protection de l\'enfance dans les Premières Nations',
          'Modèle de négligence institutionnelle s\'étendant sur des décennies',
          'Échec du gouvernement à remplir les obligations du Principe de Jordan'
        ]
      },
      {
        id: 4,
        title: 'Haaland c. Brackeen - Loi sur la protection des enfants indiens (2023)',
        year: '2023',
        jurisdiction: 'Cour suprême des États-Unis',
        outcome: 'ICWA confirmée comme constitutionnelle',
        relevance: 'La Cour suprême des États-Unis a confirmé que la Loi sur la protection des enfants indiens (ICWA) est constitutionnelle et protège les droits des enfants autochtones. Démontre la reconnaissance internationale du besoin de protéger les enfants autochtones des préjudices systémiques.',
        parallels: [
          'Reconnaissance que les enfants autochtones font face à une discrimination systémique dans les systèmes d\'aide sociale',
          'Besoin de protections spéciales pour prévenir la séparation des familles',
          'Reconnaissance de l\'abus institutionnel historique des enfants autochtones',
          'Cadre juridique reconnaissant les droits autochtones à l\'intégrité familiale'
        ]
      }
    ]
  };

  const content = {
    en: {
      title: 'HISTORICAL JURISPRUDENCE',
      subtitle: 'Landmark Cases Related to Barran\'s Story',
      date: 'MARCH 31, 2026',
      heading: 'Recurring Patterns of Systemic Failure',
      intro: 'The systemic failures documented in Barran\'s case are not new. Canadian courts have recognized these patterns for decades. Below are landmark cases that establish the legal precedent for holding government accountable.',
      parallelsTitle: 'Parallels to Barran\'s Case',
      caseStudy: 'Case Study: What Happens Without Rights Education',
      footer: 'This page documents historical jurisprudence and legal precedents related to Barran\'s case. All cases and legal principles cited are matters of public record.',
      footerInstitute: 'McGovern Institute for Human Rights and Canadian Rights',
      footerCampaign: 'Founded through the Justice for Barran Campaign',
      footerMission: 'For more information, contact us at',
      learnButton: 'LEARN ABOUT McGOVERN INSTITUTE',
      supportButton: 'SUPPORT LEGAL ACTION'
    },
    fr: {
      title: 'JURISPRUDENCE HISTORIQUE',
      subtitle: 'Cas marquants liés à l\'histoire de Barran',
      date: '31 MARS 2026',
      heading: 'Modèles récurrents d\'échec systémique',
      intro: 'Les défaillances systémiques documentées dans le cas de Barran ne sont pas nouvelles. Les tribunaux canadiens ont reconnu ces modèles pendant des décennies. Ci-dessous se trouvent des cas marquants qui établissent le précédent juridique pour tenir le gouvernement responsable.',
      parallelsTitle: 'Parallèles avec le cas de Barran',
      caseStudy: 'Étude de cas: Ce qui se passe sans éducation aux droits',
      footer: 'Cette page documente la jurisprudence historique et les précédents juridiques liés au cas de Barran. Tous les cas et principes juridiques cités sont des questions de dossier public.',
      footerInstitute: 'Institut McGovern pour les droits de la personne et les droits canadiens',
      footerCampaign: 'Fondé par la campagne Justice pour Barran',
      footerMission: 'Pour plus d\'informations, contactez-nous à',
      learnButton: 'EN SAVOIR PLUS SUR L\'INSTITUT McGOVERN',
      supportButton: 'SOUTENIR L\'ACTION JURIDIQUE'
    }
  };

  const lang = content[language];
  const cases = casesData[language];

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

      {/* INTRODUCTION */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{lang.heading}</h2>
          <p className="text-lg leading-relaxed">
            {lang.intro}
          </p>
        </div>
      </section>

      {/* LANDMARK CASES */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {cases.map((caseItem, idx) => (
              <div key={idx} className="border-4 border-forest-green p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Scale size={32} className="text-forest-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-forest-green mb-2">{caseItem.title}</h3>
                    <p className="text-base text-gray-600"><strong>{language === 'en' ? 'Year:' : 'Année:'}</strong> {caseItem.year}</p>
                    <p className="text-base text-gray-600"><strong>{language === 'en' ? 'Jurisdiction:' : 'Juridiction:'}</strong> {caseItem.jurisdiction}</p>
                    <p className="text-base text-gray-600"><strong>{language === 'en' ? 'Outcome:' : 'Résultat:'}</strong> {caseItem.outcome}</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6 bg-forest-green/5 p-4 border-l-4 border-forest-green">
                  {caseItem.relevance}
                </p>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider mb-3 text-forest-green">{lang.parallelsTitle}:</p>
                  <ul className="space-y-2">
                    {caseItem.parallels.map((parallel, pIdx) => (
                      <li key={pIdx} className="text-base flex items-start gap-2">
                        <span className="font-bold text-forest-green mt-1">→</span>
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

      {/* CALL TO ACTION */}
      <section className="bg-black text-white py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{language === 'en' ? 'Demand Accountability' : 'Exiger la responsabilité'}</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'These landmark cases establish the legal precedent for holding Canadian governments accountable for systemic failures. The McGovern Institute is committed to ensuring that cases like Barran\'s lead to real change and institutional accountability.'
              : 'Ces cas marquants établissent le précédent juridique pour tenir les gouvernements canadiens responsables des défaillances systémiques. L\'Institut McGovern s\'engage à veiller à ce que des cas comme celui de Barran mènent à un vrai changement et à une responsabilité institutionnelle.'}
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
            {lang.footerMission} <strong>justiceforbarran@gmail.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
