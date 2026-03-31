import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  category: 'sports' | 'corporate' | 'government';
  status: 'pending' | 'responded' | 'redirected' | 'ghosted';
  responseDate?: string;
  donationRedirected?: boolean;
  notes?: string;
  contactEmail: string;
}

export default function SponsorResponseTracker() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [sponsors, setSponsors] = useState<Sponsor[]>([
    // Sports Teams
    { id: 's1', name: 'Toronto Maple Leafs', category: 'sports', status: 'pending', contactEmail: 'media@mapleleafs.com' },
    { id: 's2', name: 'Montreal Canadiens', category: 'sports', status: 'pending', contactEmail: 'communications@canadiens.com' },
    { id: 's3', name: 'Vancouver Canucks', category: 'sports', status: 'pending', contactEmail: 'media@canucks.com' },
    { id: 's4', name: 'Calgary Flames', category: 'sports', status: 'pending', contactEmail: 'media@flames.ca' },
    { id: 's5', name: 'Edmonton Oilers', category: 'sports', status: 'pending', contactEmail: 'media@oilers.com' },
    { id: 's6', name: 'Winnipeg Jets', category: 'sports', status: 'pending', contactEmail: 'media@winnipegjets.com' },
    { id: 's7', name: 'Toronto Argonauts', category: 'sports', status: 'pending', contactEmail: 'media@argonauts.ca' },
    { id: 's8', name: 'BC Lions', category: 'sports', status: 'pending', contactEmail: 'media@bclions.com' },
    // Corporations
    { id: 'c1', name: 'Royal Bank of Canada', category: 'corporate', status: 'pending', contactEmail: 'corporatecitizenship@rbc.com' },
    { id: 'c2', name: 'TD Bank', category: 'corporate', status: 'pending', contactEmail: 'td.community@td.com' },
    { id: 'c3', name: 'Scotiabank', category: 'corporate', status: 'pending', contactEmail: 'corporatecitizenship@scotiabank.com' },
    { id: 'c4', name: 'BMO Financial Group', category: 'corporate', status: 'pending', contactEmail: 'bmo.community@bmo.com' },
    { id: 'c5', name: 'Loblaws Companies', category: 'corporate', status: 'pending', contactEmail: 'corporate.affairs@loblaw.ca' },
    { id: 'c6', name: 'Shopify', category: 'corporate', status: 'pending', contactEmail: 'corporate@shopify.com' },
    { id: 'c7', name: 'Canadian Tire', category: 'corporate', status: 'pending', contactEmail: 'corporatecommunications@canadiantire.ca' },
    { id: 'c8', name: 'Telus', category: 'corporate', status: 'pending', contactEmail: 'corporate.citizenship@telus.com' },
    // Government
    { id: 'g1', name: 'Indigenous Services Canada', category: 'government', status: 'pending', contactEmail: 'ISC.Inquiries-Demandes.ISC@canada.ca' },
    { id: 'g2', name: 'Department of Canadian Heritage', category: 'government', status: 'pending', contactEmail: 'pch.inquiries-demandes.pch@canada.ca' },
    { id: 'g3', name: 'Ontario Ministry of Indigenous Affairs', category: 'government', status: 'pending', contactEmail: 'mia.inquiries@ontario.ca' },
    { id: 'g4', name: 'Quebec Ministry of Indigenous Affairs', category: 'government', status: 'pending', contactEmail: 'info.autochtones@mce.gouv.qc.ca' },
    { id: 'g5', name: 'BC Ministry of Indigenous Relations', category: 'government', status: 'pending', contactEmail: 'mir@gov.bc.ca' },
  ]);

  const content = {
    en: {
      title: 'SPONSOR RESPONSE TRACKER',
      subtitle: 'Tracking Accountability for Orange Shirt Day Sponsors',
      date: 'MARCH 31, 2026 - LIVE UPDATES',
      heading: 'Which Sponsors Will Demand Real Accountability?',
      intro: 'This tracker shows which organizations have responded to our demand that they redirect Orange Shirt Day donations to Justice for Barran. We update this page daily as responses come in.',
      stats: 'Response Statistics',
      pending: 'Pending Response',
      responded: 'Responded',
      redirected: 'Donations Redirected',
      ghosted: 'Ghosted (No Response)',
      sportsTeams: 'Professional Sports Teams',
      corporations: 'Corporate Sponsors',
      government: 'Government Agencies',
      statusPending: 'Awaiting Response',
      statusResponded: 'Responded',
      statusRedirected: 'Redirected Donations',
      statusGhosted: 'No Response',
      contactButton: 'Contact Sponsor',
      shareButton: 'Share on Social Media',
      footer: 'This tracker holds sponsors accountable for their response to our demand for real reconciliation through action, not marketing.'
    },
    fr: {
      title: 'SUIVI DES RÉPONSES DES COMMANDITAIRES',
      subtitle: 'Suivi de la responsabilité des commanditaires du Jour du Chandail Orange',
      date: '31 MARS 2026 - MISES À JOUR EN DIRECT',
      heading: 'Quels commanditaires exigeront une véritable responsabilité?',
      intro: 'Ce suivi montre quelles organisations ont répondu à notre demande de rediriger les dons du Jour du Chandail Orange vers Justice pour Barran. Nous mettons à jour cette page quotidiennement à mesure que les réponses arrivent.',
      stats: 'Statistiques de réponse',
      pending: 'En attente de réponse',
      responded: 'A répondu',
      redirected: 'Dons redirigés',
      ghosted: 'Ignoré (aucune réponse)',
      sportsTeams: 'Équipes sportives professionnelles',
      corporations: 'Commanditaires corporatifs',
      government: 'Organismes gouvernementaux',
      statusPending: 'En attente de réponse',
      statusResponded: 'A répondu',
      statusRedirected: 'Dons redirigés',
      statusGhosted: 'Aucune réponse',
      contactButton: 'Contacter le commanditaire',
      shareButton: 'Partager sur les réseaux sociaux',
      footer: 'Ce suivi tient les commanditaires responsables de leur réponse à notre demande de véritable réconciliation par l\'action, non par le marketing.'
    }
  };

  const lang = content[language];

  const getStatusIcon = (status: string) => {
    if (status === 'redirected') return <CheckCircle className="text-green-600" size={24} />;
    if (status === 'ghosted') return <XCircle className="text-red-600" size={24} />;
    if (status === 'responded') return <TrendingUp className="text-blue-600" size={24} />;
    return <Clock className="text-yellow-600" size={24} />;
  };

  const getStatusColor = (status: string) => {
    if (status === 'redirected') return 'bg-green-50 border-green-600';
    if (status === 'ghosted') return 'bg-red-50 border-red-600';
    if (status === 'responded') return 'bg-blue-50 border-blue-600';
    return 'bg-yellow-50 border-yellow-600';
  };

  const stats = {
    total: sponsors.length,
    pending: sponsors.filter(s => s.status === 'pending').length,
    responded: sponsors.filter(s => s.status === 'responded').length,
    redirected: sponsors.filter(s => s.status === 'redirected').length,
    ghosted: sponsors.filter(s => s.status === 'ghosted').length,
  };

  const sportSponsors = sponsors.filter(s => s.category === 'sports');
  const corpSponsors = sponsors.filter(s => s.category === 'corporate');
  const govSponsors = sponsors.filter(s => s.category === 'government');

  const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
    <div className={`border-4 p-6 ${getStatusColor(sponsor.status)}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{sponsor.name}</h3>
          <p className="text-sm text-gray-600">{sponsor.contactEmail}</p>
        </div>
        {getStatusIcon(sponsor.status)}
      </div>
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 font-bold text-sm rounded ${
          sponsor.status === 'redirected' ? 'bg-green-600 text-white' :
          sponsor.status === 'ghosted' ? 'bg-red-600 text-white' :
          sponsor.status === 'responded' ? 'bg-blue-600 text-white' :
          'bg-yellow-600 text-white'
        }`}>
          {sponsor.status === 'redirected' ? lang.statusRedirected :
           sponsor.status === 'ghosted' ? lang.statusGhosted :
           sponsor.status === 'responded' ? lang.statusResponded :
           lang.statusPending}
        </span>
        <a href={`mailto:${sponsor.contactEmail}`} className="text-blue-600 hover:underline font-bold">
          {lang.contactButton} →
        </a>
      </div>
    </div>
  );

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
          <p className="text-lg leading-relaxed">{lang.intro}</p>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{lang.stats}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-gray-100 border-4 border-black p-4 text-center">
              <p className="text-3xl font-bold">{stats.total}</p>
              <p className="text-sm font-bold">{language === 'en' ? 'Total Sponsors' : 'Commanditaires totaux'}</p>
            </div>
            <div className="bg-yellow-50 border-4 border-yellow-600 p-4 text-center">
              <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              <p className="text-sm font-bold">{lang.pending}</p>
            </div>
            <div className="bg-blue-50 border-4 border-blue-600 p-4 text-center">
              <p className="text-3xl font-bold text-blue-600">{stats.responded}</p>
              <p className="text-sm font-bold">{lang.responded}</p>
            </div>
            <div className="bg-green-50 border-4 border-green-600 p-4 text-center">
              <p className="text-3xl font-bold text-green-600">{stats.redirected}</p>
              <p className="text-sm font-bold">{lang.redirected}</p>
            </div>
            <div className="bg-red-50 border-4 border-red-600 p-4 text-center">
              <p className="text-3xl font-bold text-red-600">{stats.ghosted}</p>
              <p className="text-sm font-bold">{lang.ghosted}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS TEAMS */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.sportsTeams}</h2>
          <div className="space-y-4">
            {sportSponsors.map(sponsor => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATIONS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.corporations}</h2>
          <div className="space-y-4">
            {corpSponsors.map(sponsor => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT */}
      <section className="bg-gray-50 border-b-4 border-black py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{lang.government}</h2>
          <div className="space-y-4">
            {govSponsors.map(sponsor => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-black text-white py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm">{lang.footer}</p>
          <p className="mt-4 text-xs">
            {language === 'en' ? 'Last updated:' : 'Dernière mise à jour:'} {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </div>
  );
}
