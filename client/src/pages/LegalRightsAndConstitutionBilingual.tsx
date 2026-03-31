import { FileText, Scale, Globe, Heart } from 'lucide-react';
import { useState } from 'react';

export default function LegalRightsAndConstitutionBilingual() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const content = {
    en: {
      title: 'LEGAL RIGHTS & CONSTITUTION',
      subtitle: 'Canadian Constitution and International Human Rights Instruments',
      date: 'MARCH 31, 2026',
      heading: 'Legal Foundation for Justice',
      intro: 'This campaign is grounded in Canadian constitutional law and international human rights instruments. The systemic failures documented here represent violations of fundamental rights protected by:',
      constitutionTitle: 'Canadian Constitution Act, 1982',
      unConventionTitle: 'UN Convention on the Rights of the Child (1989)',
      unDeclarationTitle: 'UN Universal Declaration of Human Rights (1948)',
      unIndigenousTitle: 'UN Declaration on the Rights of Indigenous Peoples (2007)',
      jordansPrincipleTitle: "Jordan's Principle",
      trcTitle: 'Truth and Reconciliation Commission Calls to Action',
      legalProtectionTitle: 'Legal Protection for This Advocacy',
      callToAction: 'Demand Accountability',
      supportButton: 'SUPPORT LEGAL ACTION',
      viewButton: 'VIEW ACCOUNTABILITY TRACKER',
      footer: 'For more information about these legal instruments and their application to this case, contact us at',
      footerInstitute: 'McGovern Institute for Human Rights and Canadian Rights',
      footerCampaign: 'Founded through the Justice for Barran Campaign',
      footerMission: 'This page is maintained as part of the McGovern Institute\'s educational mission. All information is accurate as of March 31, 2026.'
    },
    fr: {
      title: 'DROITS JURIDIQUES ET CONSTITUTION',
      subtitle: 'Constitution canadienne et instruments internationaux des droits de la personne',
      date: '31 MARS 2026',
      heading: 'Fondement juridique de la justice',
      intro: 'Cette campagne est fondée sur le droit constitutionnel canadien et les instruments internationaux des droits de la personne. Les défaillances systémiques documentées ici représentent des violations des droits fondamentaux protégés par:',
      constitutionTitle: 'Loi constitutionnelle canadienne de 1982',
      unConventionTitle: 'Convention des Nations unies relative aux droits de l\'enfant (1989)',
      unDeclarationTitle: 'Déclaration universelle des droits de l\'homme des Nations unies (1948)',
      unIndigenousTitle: 'Déclaration des Nations unies sur les droits des peuples autochtones (2007)',
      jordansPrincipleTitle: 'Principe de Jordan',
      trcTitle: 'Appels à l\'action de la Commission de vérité et réconciliation',
      legalProtectionTitle: 'Protection juridique de cet plaidoyer',
      callToAction: 'Exiger la responsabilité',
      supportButton: 'SOUTENIR L\'ACTION JURIDIQUE',
      viewButton: 'VOIR LE SUIVI DE LA RESPONSABILITÉ',
      footer: 'Pour plus d\'informations sur ces instruments juridiques et leur application à ce cas, contactez-nous à',
      footerInstitute: 'Institut McGovern pour les droits de la personne et les droits canadiens',
      footerCampaign: 'Fondé par la campagne Justice pour Barran',
      footerMission: 'Cette page est maintenue dans le cadre de la mission éducative de l\'Institut McGovern. Toutes les informations sont exactes au 31 mars 2026.'
    }
  };

  const lang = content[language];

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
          <p className="text-lg leading-relaxed mb-4">
            {lang.intro}
          </p>
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>{language === 'en' ? 'Canadian Constitution Act, 1982:' : 'Loi constitutionnelle canadienne de 1982:'}</strong> {language === 'en' ? 'Including the Charter of Rights and Freedoms and recognition of Aboriginal rights' : 'Incluant la Charte des droits et libertés et la reconnaissance des droits des Autochtones'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>{language === 'en' ? 'UN Convention on the Rights of the Child:' : 'Convention des Nations unies relative aux droits de l\'enfant:'}</strong> {language === 'en' ? 'Ratified by Canada in 1991, establishing binding obligations to protect children' : 'Ratifiée par le Canada en 1991, établissant des obligations contraignantes de protéger les enfants'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>{language === 'en' ? 'UN Universal Declaration of Human Rights:' : 'Déclaration universelle des droits de l\'homme des Nations unies:'}</strong> {language === 'en' ? 'Foundational international human rights law' : 'Droit international fondamental des droits de la personne'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-orange">•</span>
              <span><strong>{language === 'en' ? 'UN Declaration on the Rights of Indigenous Peoples:' : 'Déclaration des Nations unies sur les droits des peuples autochtones:'}</strong> {language === 'en' ? 'Adopted by Canada in 2016, protecting Indigenous rights and children' : 'Adoptée par le Canada en 2016, protégeant les droits des Autochtones et des enfants'}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-50 py-12 px-6 border-b-4 border-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{lang.callToAction}</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'These constitutional and international legal instruments are not merely words on paper. They represent binding obligations that Canada has made to protect the rights of all children, especially Indigenous children. The systemic failures documented in this campaign represent violations of these fundamental rights.'
              : 'Ces instruments juridiques constitutionnels et internationaux ne sont pas simplement des paroles. Ils représentent des obligations contraignantes que le Canada a prises pour protéger les droits de tous les enfants, en particulier les enfants autochtones. Les défaillances systémiques documentées dans cette campagne représentent des violations de ces droits fondamentaux.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate-etransfer" 
              className="border-2 border-black bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors"
            >
              {lang.supportButton}
            </a>
            <a 
              href="/accountability-tracker" 
              className="border-2 border-black px-8 py-3 font-bold hover:bg-black hover:text-white transition-colors"
            >
              {lang.viewButton}
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
            {lang.footer} <strong>justiceforbarran@gmail.com</strong>
          </p>
          <p className="mt-4">
            {lang.footerMission}
          </p>
        </div>
      </section>
    </div>
  );
}
