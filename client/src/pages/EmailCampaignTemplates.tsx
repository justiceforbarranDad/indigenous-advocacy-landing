import { useState } from 'react';
import { Copy, Mail, Share2 } from 'lucide-react';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  targetAudience: string;
}

export default function EmailCampaignTemplates() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('general');
  const [copied, setCopied] = useState(false);

  const templates: Record<'en' | 'fr', EmailTemplate[]> = {
    en: [
      {
        id: 'general',
        name: 'General Demand Letter',
        targetAudience: 'All Sponsors',
        subject: 'Redirect Orange Shirt Day Donations to Justice for Barran',
        body: `Dear [SPONSOR NAME],

I am writing to demand that you immediately redirect all Orange Shirt Day donations to Justice for Barran.

Reconciliation without accountability is complicity. While your organization promotes Orange Shirt Day as a symbol of reconciliation, Indigenous children continue to be failed by the same systemic failures that have plagued Canada for decades.

Justice for Barran documents a case where a 14-year-old Indigenous boy was stabbed three times and abandoned by child protection services for five years. This is not an isolated incident—it is a pattern of systemic institutional failure.

Your organization cannot claim to support reconciliation while:
- Donating to symbolic gestures instead of real accountability
- Ignoring systemic failures in child welfare and Indigenous rights
- Marketing reconciliation without demanding government action

I demand that you:
1. Redirect all Orange Shirt Day donations to Justice for Barran
2. Publicly commit to demanding government accountability for systemic failures
3. Support mandatory human rights education in all schools

Reconciliation requires truth, accountability, and action. Not marketing.

Sincerely,
[YOUR NAME]
[YOUR EMAIL]
[YOUR PHONE]

Learn more: justiceforbarran.com`,
      },
      {
        id: 'sports',
        name: 'Letter to Sports Teams',
        targetAudience: 'Professional Sports Teams',
        subject: 'Demand: Redirect Orange Shirt Day Donations to Justice for Barran',
        body: `Dear [TEAM NAME] Leadership,

Your team has a platform and responsibility to demand real accountability, not just symbolic gestures.

I demand that [TEAM NAME] redirect all Orange Shirt Day donations to Justice for Barran and publicly commit to supporting systemic reform.

Indigenous children are being failed by institutions while your organization profits from reconciliation marketing. Justice for Barran represents a case of systemic failure that your platform could help expose and demand accountability for.

Your fans expect more than orange shirts. They expect real action.

Redirect the donations. Demand accountability. Support real reconciliation.

Sincerely,
[YOUR NAME]
[YOUR EMAIL]

justiceforbarran.com`,
      },
      {
        id: 'corporate',
        name: 'Letter to Corporations',
        targetAudience: 'Corporate Sponsors',
        subject: 'Corporate Accountability: Redirect Orange Shirt Day Donations',
        body: `Dear [COMPANY NAME] Leadership,

Your company's commitment to reconciliation is being tested.

I demand that [COMPANY NAME] redirect all Orange Shirt Day donations to Justice for Barran and publicly support accountability for systemic institutional failures.

While your company markets reconciliation, Indigenous families are being abandoned by child protection services. Justice for Barran documents a case where institutional negligence lasted five years without consequence.

Real corporate responsibility means:
- Redirecting donations to real accountability, not symbolic gestures
- Publicly demanding government action on systemic failures
- Supporting mandatory human rights education

Your stakeholders and employees expect authentic commitment to reconciliation, not marketing.

Make the right choice. Redirect the donations.

Sincerely,
[YOUR NAME]
[YOUR EMAIL]

justiceforbarran.com`,
      },
      {
        id: 'government',
        name: 'Letter to Government Agencies',
        targetAudience: 'Government Agencies',
        subject: 'Government Accountability: Support Justice for Barran',
        body: `Dear [GOVERNMENT AGENCY] Leadership,

Your agency's role is to protect Indigenous children and uphold rights. Orange Shirt Day donations should support real accountability, not marketing.

I demand that [GOVERNMENT AGENCY]:
1. Redirect Orange Shirt Day donations to Justice for Barran
2. Conduct an independent inquiry into systemic failures in child welfare
3. Implement mandatory human rights education in all schools
4. Hold officials accountable for institutional negligence

Justice for Barran represents a case of systemic failure that your agency failed to prevent or address. This is not reconciliation—this is complicity.

Real accountability requires action, not symbols.

Sincerely,
[YOUR NAME]
[YOUR EMAIL]

justiceforbarran.com`,
      },
    ],
    fr: [
      {
        id: 'general',
        name: 'Lettre de demande générale',
        targetAudience: 'Tous les commanditaires',
        subject: 'Rediriger les dons du Jour du Chandail Orange vers Justice pour Barran',
        body: `Cher [NOM DU COMMANDITAIRE],

Je vous écris pour exiger que vous redirigiez immédiatement tous les dons du Jour du Chandail Orange vers Justice pour Barran.

La réconciliation sans responsabilité est la complicité. Bien que votre organisation promeuve le Jour du Chandail Orange comme symbole de réconciliation, les enfants autochtones continuent d'être échoués par les mêmes défaillances systémiques qui ont tourmenté le Canada pendant des décennies.

Justice pour Barran documente un cas où un garçon autochtone de 14 ans a été poignardé trois fois et abandonné par les services de protection de l'enfance pendant cinq ans. Ce n'est pas un incident isolé—c'est un modèle d'échec institutionnel systémique.

Votre organisation ne peut pas prétendre soutenir la réconciliation tout en:
- Donnant à des gestes symboliques au lieu de la véritable responsabilité
- Ignorant les défaillances systémiques dans la protection de l'enfance et les droits autochtones
- Commercialisant la réconciliation sans exiger l'action gouvernementale

J'exige que vous:
1. Redirigiez tous les dons du Jour du Chandail Orange vers Justice pour Barran
2. Vous engagiez publiquement à exiger la responsabilité gouvernementale pour les défaillances systémiques
3. Souteniez l'éducation obligatoire aux droits de la personne dans toutes les écoles

La réconciliation exige la vérité, la responsabilité et l'action. Pas du marketing.

Sincèrement,
[VOTRE NOM]
[VOTRE COURRIEL]
[VOTRE TÉLÉPHONE]

En savoir plus: justiceforbarran.com`,
      },
      {
        id: 'sports',
        name: 'Lettre aux équipes sportives',
        targetAudience: 'Équipes sportives professionnelles',
        subject: 'Exigence: Rediriger les dons du Jour du Chandail Orange vers Justice pour Barran',
        body: `Cher leadership de [NOM DE L'ÉQUIPE],

Votre équipe a une plateforme et une responsabilité d'exiger une véritable responsabilité, pas seulement des gestes symboliques.

J'exige que [NOM DE L'ÉQUIPE] rediriger tous les dons du Jour du Chandail Orange vers Justice pour Barran et s'engager publiquement à soutenir la réforme systémique.

Les enfants autochtones sont échoués par les institutions tandis que votre organisation profite du marketing de la réconciliation. Justice pour Barran représente un cas d'échec systémique que votre plateforme pourrait aider à exposer et à exiger de la responsabilité.

Vos fans s'attendent à plus que des chandails orange. Ils s'attendent à une véritable action.

Redirigez les dons. Exigez la responsabilité. Soutenez une véritable réconciliation.

Sincèrement,
[VOTRE NOM]
[VOTRE COURRIEL]

justiceforbarran.com`,
      },
      {
        id: 'corporate',
        name: 'Lettre aux entreprises',
        targetAudience: 'Commanditaires corporatifs',
        subject: 'Responsabilité corporative: Rediriger les dons du Jour du Chandail Orange',
        body: `Cher leadership de [NOM DE L'ENTREPRISE],

L'engagement de votre entreprise envers la réconciliation est mis à l'épreuve.

J'exige que [NOM DE L'ENTREPRISE] rediriger tous les dons du Jour du Chandail Orange vers Justice pour Barran et soutenir publiquement la responsabilité pour les défaillances institutionnelles systémiques.

Tandis que votre entreprise commercialise la réconciliation, les familles autochtones sont abandonnées par les services de protection de l'enfance. Justice pour Barran documente un cas où la négligence institutionnelle a duré cinq ans sans conséquence.

La véritable responsabilité corporative signifie:
- Rediriger les dons vers la véritable responsabilité, pas les gestes symboliques
- Exiger publiquement l'action gouvernementale sur les défaillances systémiques
- Soutenir l'éducation obligatoire aux droits de la personne

Vos parties prenantes et employés s'attendent à un engagement authentique envers la réconciliation, pas du marketing.

Faites le bon choix. Redirigez les dons.

Sincèrement,
[VOTRE NOM]
[VOTRE COURRIEL]

justiceforbarran.com`,
      },
      {
        id: 'government',
        name: 'Lettre aux organismes gouvernementaux',
        targetAudience: 'Organismes gouvernementaux',
        subject: 'Responsabilité gouvernementale: Soutenir Justice pour Barran',
        body: `Cher leadership de [ORGANISME GOUVERNEMENTAL],

Le rôle de votre organisme est de protéger les enfants autochtones et d'uphold les droits. Les dons du Jour du Chandail Orange devraient soutenir la véritable responsabilité, pas le marketing.

J'exige que [ORGANISME GOUVERNEMENTAL]:
1. Rediriger les dons du Jour du Chandail Orange vers Justice pour Barran
2. Mener une enquête indépendante sur les défaillances systémiques dans la protection de l'enfance
3. Mettre en œuvre l'éducation obligatoire aux droits de la personne dans toutes les écoles
4. Tenir les fonctionnaires responsables de la négligence institutionnelle

Justice pour Barran représente un cas d'échec systémique que votre organisme n'a pas réussi à prévenir ou à traiter. Ce n'est pas la réconciliation—c'est la complicité.

La véritable responsabilité exige l'action, pas les symboles.

Sincèrement,
[VOTRE NOM]
[VOTRE COURRIEL]

justiceforbarran.com`,
      },
    ],
  };

  const lang = language;
  const currentTemplates = templates[lang];
  const template = currentTemplates.find(t => t.id === selectedTemplate) || currentTemplates[0];

  const copyToClipboard = () => {
    const fullEmail = `Subject: ${template.subject}\n\n${template.body}`;
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = {
    en: {
      title: 'EMAIL CAMPAIGN TEMPLATES',
      subtitle: 'Pre-Written Letters to Demand Accountability',
      date: 'MARCH 31, 2026',
      heading: 'Make Your Voice Heard',
      intro: 'Use these pre-written email templates to contact sponsors and demand they redirect Orange Shirt Day donations to Justice for Barran. Copy, personalize, and send.',
      selectTemplate: 'Select Template',
      copyButton: 'Copy to Clipboard',
      copied: 'Copied!',
      sendButton: 'Send Email',
      shareButton: 'Share This Template',
      instructions: 'Instructions',
      step1: '1. Select a template below',
      step2: '2. Click "Copy to Clipboard"',
      step3: '3. Open your email client and paste',
      step4: '4. Replace [BRACKETS] with specific names',
      step5: '5. Send to the sponsor contact email',
      footer: 'These templates are designed to be respectful, factual, and legally protected as responsible communication on matters of public interest.'
    },
    fr: {
      title: 'MODÈLES DE CAMPAGNE PAR COURRIEL',
      subtitle: 'Lettres pré-écrites pour exiger la responsabilité',
      date: '31 MARS 2026',
      heading: 'Faites entendre votre voix',
      intro: 'Utilisez ces modèles de courriel pré-écrits pour contacter les commanditaires et exiger qu\'ils redirigent les dons du Jour du Chandail Orange vers Justice pour Barran. Copiez, personnalisez et envoyez.',
      selectTemplate: 'Sélectionner un modèle',
      copyButton: 'Copier dans le presse-papiers',
      copied: 'Copié!',
      sendButton: 'Envoyer un courriel',
      shareButton: 'Partager ce modèle',
      instructions: 'Instructions',
      step1: '1. Sélectionnez un modèle ci-dessous',
      step2: '2. Cliquez sur "Copier dans le presse-papiers"',
      step3: '3. Ouvrez votre client de messagerie et collez',
      step4: '4. Remplacez [CROCHETS] par des noms spécifiques',
      step5: '5. Envoyez à l\'adresse e-mail de contact du commanditaire',
      footer: 'Ces modèles sont conçus pour être respectueux, factuels et légalement protégés en tant que communication responsable sur des questions d\'intérêt public.'
    }
  };

  const langContent = content[language];

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
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">{langContent.title}</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">{langContent.subtitle}</p>
          <p className="text-xs md:text-sm tracking-widest">{langContent.date}</p>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{langContent.heading}</h2>
          <p className="text-lg leading-relaxed mb-8">{langContent.intro}</p>
          
          <div className="bg-white border-4 border-black p-6">
            <h3 className="text-xl font-bold mb-4">{langContent.instructions}</h3>
            <ul className="space-y-2 text-base">
              <li>{langContent.step1}</li>
              <li>{langContent.step2}</li>
              <li>{langContent.step3}</li>
              <li>{langContent.step4}</li>
              <li>{langContent.step5}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEMPLATE SELECTOR */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">{langContent.selectTemplate}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {currentTemplates.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTemplate(t.id)}
                className={`p-4 border-4 text-left transition-all ${
                  selectedTemplate === t.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black hover:bg-gray-50'
                }`}
              >
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-sm">{t.targetAudience}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL TEMPLATE */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black p-8">
            <div className="mb-6">
              <p className="font-bold text-sm mb-2">{language === 'en' ? 'Subject:' : 'Sujet:'}</p>
              <p className="text-lg bg-gray-100 p-3 border-2 border-black">{template.subject}</p>
            </div>

            <div className="mb-8">
              <p className="font-bold text-sm mb-2">{language === 'en' ? 'Email Body:' : 'Corps du courriel:'}</p>
              <div className="bg-gray-100 p-4 border-2 border-black whitespace-pre-wrap text-sm leading-relaxed max-h-96 overflow-y-auto">
                {template.body}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors"
              >
                <Copy size={20} />
                {copied ? langContent.copied : langContent.copyButton}
              </button>
              <a
                href={`mailto:?subject=${encodeURIComponent(template.subject)}&body=${encodeURIComponent(template.body)}`}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 font-bold hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                {langContent.sendButton}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-black text-white py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-sm">
          <p>{langContent.footer}</p>
          <p className="mt-4">
            {language === 'en' ? 'Learn more:' : 'En savoir plus:'} <strong>justiceforbarran.com</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
