import { AlertCircle, Users, Globe, Mail } from 'lucide-react';
import { useState } from 'react';

export default function OrangeShirtDayAccountability() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const content = {
    en: {
      title: 'ORANGE SHIRT DAY ACCOUNTABILITY',
      subtitle: 'Reconciliation Without Truth is Complicity',
      date: 'MARCH 31, 2026',
      heading: 'Stop Promoting Reconciliation While Systemic Abuse Continues',
      mainMessage: 'We demand that all financial donations to Orange Shirt Day be redirected to Justice for Barran until the real truth about systemic failures is told and accountability is achieved.',
      statement: 'You cannot promote reconciliation while children like Barran are still being failed by the same systems. Orange Shirt Day has become a marketing opportunity for corporations and sports teams to appear progressive without demanding real accountability.',
      callToAction: 'We call on all sponsors of Orange Shirt Day to:',
      demand1: 'Redirect all Orange Shirt Day donations to Justice for Barran',
      demand2: 'Stop promoting reconciliation until systemic failures are addressed',
      demand3: 'Demand government accountability for institutional negligence',
      demand4: 'Support mandatory human rights education in all schools',
      sponsorsTitle: 'Sponsors Called to Account',
      sportsTeamsTitle: 'Professional Sports Teams',
      corporationsTitle: 'Corporate Sponsors',
      governmentTitle: 'Government Agencies',
      contactTitle: 'Contact Information',
      statusTitle: 'Response Status',
      responded: 'Responded',
      ghosted: 'Ghosted',
      pending: 'Pending Response',
      emailTemplate: 'Email Template',
      emailSubject: 'Redirect Orange Shirt Day Donations to Justice for Barran',
      emailBody: 'We demand that you redirect all Orange Shirt Day donations to Justice for Barran until systemic failures are addressed and real accountability is achieved. You cannot promote reconciliation while children like Barran are still being failed by the same systems.',
      footer: 'This page holds all Orange Shirt Day sponsors accountable for promoting reconciliation without demanding real systemic change.',
      footerInstitute: 'McGovern Institute for Human Rights and Canadian Rights',
      footerCampaign: 'Founded through the Justice for Barran Campaign',
      learnButton: 'LEARN ABOUT JUSTICE FOR BARRAN',
      donateButton: 'DONATE TO JUSTICE FOR BARRAN'
    },
    fr: {
      title: 'RESPONSABILITÉ DU JOUR DU CHANDAIL ORANGE',
      subtitle: 'La réconciliation sans vérité est la complicité',
      date: '31 MARS 2026',
      heading: 'Arrêtez de promouvoir la réconciliation pendant que les abus systémiques se poursuivent',
      mainMessage: 'Nous exigeons que tous les dons financiers au Jour du Chandail Orange soient redirigés vers Justice pour Barran jusqu\'à ce que la véritable vérité sur les défaillances systémiques soit révélée et que la responsabilité soit établie.',
      statement: 'Vous ne pouvez pas promouvoir la réconciliation pendant que des enfants comme Barran sont toujours échoués par les mêmes systèmes. Le Jour du Chandail Orange est devenu une opportunité de marketing pour les entreprises et les équipes sportives de paraître progressistes sans exiger une véritable responsabilité.',
      callToAction: 'Nous appelons tous les commanditaires du Jour du Chandail Orange à:',
      demand1: 'Rediriger tous les dons du Jour du Chandail Orange vers Justice pour Barran',
      demand2: 'Arrêter de promouvoir la réconciliation jusqu\'à ce que les défaillances systémiques soient traitées',
      demand3: 'Exiger la responsabilité gouvernementale pour la négligence institutionnelle',
      demand4: 'Soutenir l\'éducation obligatoire aux droits de la personne dans toutes les écoles',
      sponsorsTitle: 'Commanditaires tenus responsables',
      sportsTeamsTitle: 'Équipes sportives professionnelles',
      corporationsTitle: 'Commanditaires corporatifs',
      governmentTitle: 'Organismes gouvernementaux',
      contactTitle: 'Coordonnées',
      statusTitle: 'Statut de réponse',
      responded: 'A répondu',
      ghosted: 'Ignoré',
      pending: 'En attente de réponse',
      emailTemplate: 'Modèle de courriel',
      emailSubject: 'Rediriger les dons du Jour du Chandail Orange vers Justice pour Barran',
      emailBody: 'Nous exigeons que vous redirigiez tous les dons du Jour du Chandail Orange vers Justice pour Barran jusqu\'à ce que les défaillances systémiques soient traitées et que la véritable responsabilité soit établie. Vous ne pouvez pas promouvoir la réconciliation pendant que des enfants comme Barran sont toujours échoués par les mêmes systèmes.',
      footer: 'Cette page tient tous les commanditaires du Jour du Chandail Orange responsables de promouvoir la réconciliation sans exiger un véritable changement systémique.',
      footerInstitute: 'Institut McGovern pour les droits de la personne et les droits canadiens',
      footerCampaign: 'Fondé par la campagne Justice pour Barran',
      learnButton: 'EN SAVOIR PLUS SUR JUSTICE POUR BARRAN',
      donateButton: 'DONNER À JUSTICE POUR BARRAN'
    }
  };

  const sponsors = {
    en: {
      sportsTeams: [
        { name: 'Toronto Maple Leafs', contact: 'media@mapleleafs.com', phone: '(416) 815-5500', status: 'pending' },
        { name: 'Montreal Canadiens', contact: 'communications@canadiens.com', phone: '(514) 925-6996', status: 'pending' },
        { name: 'Vancouver Canucks', contact: 'media@canucks.com', phone: '(604) 899-7400', status: 'pending' },
        { name: 'Calgary Flames', contact: 'media@flames.ca', phone: '(403) 777-2177', status: 'pending' },
        { name: 'Edmonton Oilers', contact: 'media@oilers.com', phone: '(780) 414-4000', status: 'pending' },
        { name: 'Winnipeg Jets', contact: 'media@winnipegjets.com', phone: '(204) 987-7825', status: 'pending' },
        { name: 'Toronto Argonauts (CFL)', contact: 'media@argonauts.ca', phone: '(416) 341-2700', status: 'pending' },
        { name: 'BC Lions (CFL)', contact: 'media@bclions.com', phone: '(604) 930-5466', status: 'pending' }
      ],
      corporations: [
        { name: 'Royal Bank of Canada', contact: 'corporatecitizenship@rbc.com', phone: '1-800-769-2511', status: 'pending' },
        { name: 'TD Bank', contact: 'td.community@td.com', phone: '1-800-895-4463', status: 'pending' },
        { name: 'Scotiabank', contact: 'corporatecitizenship@scotiabank.com', phone: '1-800-472-6842', status: 'pending' },
        { name: 'BMO Financial Group', contact: 'bmo.community@bmo.com', phone: '1-800-363-9992', status: 'pending' },
        { name: 'Loblaws Companies Limited', contact: 'corporate.affairs@loblaw.ca', phone: '(416) 922-8500', status: 'pending' },
        { name: 'Shopify', contact: 'corporate@shopify.com', phone: '(613) 241-3800', status: 'pending' },
        { name: 'Canadian Tire', contact: 'corporatecommunications@canadiantire.ca', phone: '(416) 480-3000', status: 'pending' },
        { name: 'Telus', contact: 'corporate.citizenship@telus.com', phone: '1-866-558-3835', status: 'pending' }
      ],
      government: [
        { name: 'Indigenous Services Canada', contact: 'ISC.Inquiries-Demandes.ISC@canada.ca', phone: '1-855-552-6189', status: 'pending' },
        { name: 'Department of Canadian Heritage', contact: 'pch.inquiries-demandes.pch@canada.ca', phone: '1-866-811-0055', status: 'pending' },
        { name: 'Ontario Ministry of Indigenous Affairs', contact: 'mia.inquiries@ontario.ca', phone: '(416) 325-1234', status: 'pending' },
        { name: 'Quebec Ministry of Indigenous Affairs', contact: 'info.autochtones@mce.gouv.qc.ca', phone: '(418) 644-9545', status: 'pending' },
        { name: 'British Columbia Ministry of Indigenous Relations', contact: 'mir@gov.bc.ca', phone: '(250) 387-8000', status: 'pending' }
      ]
    },
    fr: {
      sportsTeams: [
        { name: 'Maple Leafs de Toronto', contact: 'media@mapleleafs.com', phone: '(416) 815-5500', status: 'pending' },
        { name: 'Canadiens de Montréal', contact: 'communications@canadiens.com', phone: '(514) 925-6996', status: 'pending' },
        { name: 'Canucks de Vancouver', contact: 'media@canucks.com', phone: '(604) 899-7400', status: 'pending' },
        { name: 'Flames de Calgary', contact: 'media@flames.ca', phone: '(403) 777-2177', status: 'pending' },
        { name: 'Oilers d\'Edmonton', contact: 'media@oilers.com', phone: '(780) 414-4000', status: 'pending' },
        { name: 'Jets de Winnipeg', contact: 'media@winnipegjets.com', phone: '(204) 987-7825', status: 'pending' },
        { name: 'Argonautes de Toronto (LCF)', contact: 'media@argonauts.ca', phone: '(416) 341-2700', status: 'pending' },
        { name: 'Lions de la Colombie-Britannique (LCF)', contact: 'media@bclions.com', phone: '(604) 930-5466', status: 'pending' }
      ],
      corporations: [
        { name: 'Banque Royale du Canada', contact: 'corporatecitizenship@rbc.com', phone: '1-800-769-2511', status: 'pending' },
        { name: 'Banque TD', contact: 'td.community@td.com', phone: '1-800-895-4463', status: 'pending' },
        { name: 'Banque Scotia', contact: 'corporatecitizenship@scotiabank.com', phone: '1-800-472-6842', status: 'pending' },
        { name: 'Groupe financier BMO', contact: 'bmo.community@bmo.com', phone: '1-800-363-9992', status: 'pending' },
        { name: 'Compagnies Loblaws Limitée', contact: 'corporate.affairs@loblaw.ca', phone: '(416) 922-8500', status: 'pending' },
        { name: 'Shopify', contact: 'corporate@shopify.com', phone: '(613) 241-3800', status: 'pending' },
        { name: 'Canadian Tire', contact: 'corporatecommunications@canadiantire.ca', phone: '(416) 480-3000', status: 'pending' },
        { name: 'Telus', contact: 'corporate.citizenship@telus.com', phone: '1-866-558-3835', status: 'pending' }
      ],
      government: [
        { name: 'Services aux Autochtones Canada', contact: 'ISC.Inquiries-Demandes.ISC@canada.ca', phone: '1-855-552-6189', status: 'pending' },
        { name: 'Ministère du Patrimoine canadien', contact: 'pch.inquiries-demandes.pch@canada.ca', phone: '1-866-811-0055', status: 'pending' },
        { name: 'Ministère des Affaires autochtones de l\'Ontario', contact: 'mia.inquiries@ontario.ca', phone: '(416) 325-1234', status: 'pending' },
        { name: 'Ministère des Affaires autochtones du Québec', contact: 'info.autochtones@mce.gouv.qc.ca', phone: '(418) 644-9545', status: 'pending' },
        { name: 'Ministère des Relations avec les Autochtones de la Colombie-Britannique', contact: 'mir@gov.bc.ca', phone: '(250) 387-8000', status: 'pending' }
      ]
    }
  };

  const lang = content[language];
  const sponsorData = sponsors[language];

  const getStatusColor = (status: string) => {
    if (status === 'responded') return 'bg-green-50 border-green-600';
    if (status === 'ghosted') return 'bg-red-50 border-red-600';
    return 'bg-yellow-50 border-yellow-600';
  };

  const getStatusText = (status: string) => {
    if (status === 'responded') return lang.responded;
    if (status === 'ghosted') return lang.ghosted;
    return lang.pending;
  };

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
          <h2 className="text-3xl font-bold mb-6">{lang.heading}</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>{lang.mainMessage}</strong>
          </p>
          <p className="text-lg leading-relaxed">
            {lang.statement}
          </p>
        </div>
      </section>

      {/* DEMANDS */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{lang.callToAction}</h2>
          <ul className="space-y-4 text-base leading-relaxed">
            <li className="flex items-start gap-3 border-l-4 border-amber-orange pl-4">
              <span className="font-bold text-amber-orange text-xl">1.</span>
              <span>{lang.demand1}</span>
            </li>
            <li className="flex items-start gap-3 border-l-4 border-amber-orange pl-4">
              <span className="font-bold text-amber-orange text-xl">2.</span>
              <span>{lang.demand2}</span>
            </li>
            <li className="flex items-start gap-3 border-l-4 border-amber-orange pl-4">
              <span className="font-bold text-amber-orange text-xl">3.</span>
              <span>{lang.demand3}</span>
            </li>
            <li className="flex items-start gap-3 border-l-4 border-amber-orange pl-4">
              <span className="font-bold text-amber-orange text-xl">4.</span>
              <span>{lang.demand4}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* PROFESSIONAL SPORTS TEAMS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.sportsTeamsTitle}</h2>
          <div className="space-y-4">
            {sponsorData.sportsTeams.map((team, idx) => (
              <div key={idx} className={`border-4 p-6 ${getStatusColor(team.status)}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{team.name}</h3>
                  <span className={`px-3 py-1 font-bold text-sm rounded ${team.status === 'responded' ? 'bg-green-600 text-white' : team.status === 'ghosted' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'}`}>
                    {getStatusText(team.status)}
                  </span>
                </div>
                <p className="text-base mb-2"><strong>{lang.contactTitle}:</strong> {team.contact}</p>
                <p className="text-base"><strong>{language === 'en' ? 'Phone:' : 'Téléphone:'}  </strong>{team.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE SPONSORS */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.corporationsTitle}</h2>
          <div className="space-y-4">
            {sponsorData.corporations.map((corp, idx) => (
              <div key={idx} className={`border-4 p-6 ${getStatusColor(corp.status)}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{corp.name}</h3>
                  <span className={`px-3 py-1 font-bold text-sm rounded ${corp.status === 'responded' ? 'bg-green-600 text-white' : corp.status === 'ghosted' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'}`}>
                    {getStatusText(corp.status)}
                  </span>
                </div>
                <p className="text-base mb-2"><strong>{lang.contactTitle}:</strong> {corp.contact}</p>
                <p className="text-base"><strong>{language === 'en' ? 'Phone:' : 'Téléphone:'}  </strong>{corp.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT AGENCIES */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.governmentTitle}</h2>
          <div className="space-y-4">
            {sponsorData.government.map((agency, idx) => (
              <div key={idx} className={`border-4 p-6 ${getStatusColor(agency.status)}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{agency.name}</h3>
                  <span className={`px-3 py-1 font-bold text-sm rounded ${agency.status === 'responded' ? 'bg-green-600 text-white' : agency.status === 'ghosted' ? 'bg-red-600 text-white' : 'bg-yellow-600 text-white'}`}>
                    {getStatusText(agency.status)}
                  </span>
                </div>
                <p className="text-base mb-2"><strong>{lang.contactTitle}:</strong> {agency.contact}</p>
                <p className="text-base"><strong>{language === 'en' ? 'Phone:' : 'Téléphone:'}  </strong>{agency.phone}</p>
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
              ? 'Contact these sponsors and demand they redirect Orange Shirt Day donations to Justice for Barran. Reconciliation without accountability is complicity.'
              : 'Contactez ces commanditaires et exigez qu\'ils redirigent les dons du Jour du Chandail Orange vers Justice pour Barran. La réconciliation sans responsabilité est la complicité.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/barrans-story" 
              className="border-2 border-white bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors"
            >
              {lang.learnButton}
            </a>
            <a 
              href="/donate-etransfer" 
              className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition-colors"
            >
              {lang.donateButton}
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
            {language === 'en' ? 'Contact:' : 'Contact:'} <strong>justiceforbarran@gmail.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
