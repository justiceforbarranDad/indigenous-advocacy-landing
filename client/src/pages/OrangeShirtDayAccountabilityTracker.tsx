import { useTranslation } from 'react-i18next';
import { Mail, Twitter, Facebook, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Organization {
  name: string;
  category: 'corporate' | 'nhl' | 'sports';
  email?: string;
  pressEmail?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  website?: string;
  response?: 'no_response' | 'acknowledged' | 'committed' | 'acting';
  commitment?: string;
}

const organizations: Organization[] = [
  // Corporate Sponsors
  {
    name: 'RBC (Royal Bank of Canada)',
    category: 'corporate',
    email: 'media.relations@rbc.com',
    pressEmail: 'media.relations@rbc.com',
    twitter: 'https://twitter.com/RBC',
    facebook: 'https://facebook.com/RoyalBankofCanada',
    instagram: 'https://instagram.com/rbc',
    website: 'https://www.rbc.com',
    response: 'no_response',
  },
  {
    name: 'TD Bank (Toronto-Dominion Bank)',
    category: 'corporate',
    email: 'media.relations@td.com',
    pressEmail: 'media.relations@td.com',
    twitter: 'https://twitter.com/TD_Canada',
    facebook: 'https://facebook.com/TDCanada',
    instagram: 'https://instagram.com/td_canada',
    website: 'https://www.td.com',
    response: 'no_response',
  },
  {
    name: 'Scotiabank',
    category: 'corporate',
    email: 'mediarelations@scotiabank.com',
    pressEmail: 'mediarelations@scotiabank.com',
    twitter: 'https://twitter.com/Scotiabank',
    facebook: 'https://facebook.com/Scotiabank',
    instagram: 'https://instagram.com/scotiabank',
    website: 'https://www.scotiabank.com',
    response: 'no_response',
  },
  {
    name: 'CIBC (Canadian Imperial Bank of Commerce)',
    category: 'corporate',
    email: 'mediarelations@cibc.com',
    pressEmail: 'mediarelations@cibc.com',
    twitter: 'https://twitter.com/CIBC',
    facebook: 'https://facebook.com/CIBC',
    instagram: 'https://instagram.com/cibc',
    website: 'https://www.cibc.com',
    response: 'no_response',
  },
  {
    name: 'Canadian Tire',
    category: 'corporate',
    email: 'media@canadiantire.ca',
    pressEmail: 'media@canadiantire.ca',
    twitter: 'https://twitter.com/canadiantire',
    facebook: 'https://facebook.com/canadiantire',
    instagram: 'https://instagram.com/canadiantire',
    website: 'https://www.canadiantire.ca',
    response: 'no_response',
  },
  {
    name: 'Walmart Canada',
    category: 'corporate',
    email: 'mediarelations@walmart.ca',
    pressEmail: 'mediarelations@walmart.ca',
    twitter: 'https://twitter.com/WalmartCanada',
    facebook: 'https://facebook.com/WalmartCanada',
    instagram: 'https://instagram.com/walmartcanada',
    website: 'https://www.walmart.ca',
    response: 'no_response',
  },

  // NHL Teams
  {
    name: 'Toronto Maple Leafs',
    category: 'nhl',
    email: 'media@mapleleafs.com',
    twitter: 'https://twitter.com/MapleLeafs',
    facebook: 'https://facebook.com/mapleleafs',
    instagram: 'https://instagram.com/mapleleafs',
    website: 'https://www.nhl.com/mapleleafs',
    response: 'no_response',
  },
  {
    name: 'Montreal Canadiens',
    category: 'nhl',
    email: 'media@canadiens.com',
    twitter: 'https://twitter.com/CanadiensMTL',
    facebook: 'https://facebook.com/canadiensmtl',
    instagram: 'https://instagram.com/canadiensmtl',
    website: 'https://www.nhl.com/canadiens',
    response: 'no_response',
  },
  {
    name: 'Ottawa Senators',
    category: 'nhl',
    email: 'media@senators.ca',
    twitter: 'https://twitter.com/Senators',
    facebook: 'https://facebook.com/ottawasenators',
    instagram: 'https://instagram.com/ottawasenators',
    website: 'https://www.nhl.com/senators',
    response: 'no_response',
  },
  {
    name: 'Winnipeg Jets',
    category: 'nhl',
    email: 'media@winnipegjets.com',
    twitter: 'https://twitter.com/WinnipegJets',
    facebook: 'https://facebook.com/winnipegjets',
    instagram: 'https://instagram.com/winnipegjets',
    website: 'https://www.nhl.com/jets',
    response: 'no_response',
  },
  {
    name: 'Calgary Flames',
    category: 'nhl',
    email: 'media@flames.ca',
    twitter: 'https://twitter.com/NHLFlames',
    facebook: 'https://facebook.com/calgaryflames',
    instagram: 'https://instagram.com/calgaryflames',
    website: 'https://www.nhl.com/flames',
    response: 'no_response',
  },
  {
    name: 'Edmonton Oilers',
    category: 'nhl',
    email: 'media@oilers.ca',
    twitter: 'https://twitter.com/EdmontonOilers',
    facebook: 'https://facebook.com/edmontonoilers',
    instagram: 'https://instagram.com/edmontonoilers',
    website: 'https://www.nhl.com/oilers',
    response: 'no_response',
  },
  {
    name: 'Vancouver Canucks',
    category: 'nhl',
    email: 'media@canucks.com',
    twitter: 'https://twitter.com/Canucks',
    facebook: 'https://facebook.com/vancouvercanucks',
    instagram: 'https://instagram.com/vancouvercanucks',
    website: 'https://www.nhl.com/canucks',
    response: 'no_response',
  },

  // Other Sports Teams
  {
    name: 'Toronto Blue Jays (MLB)',
    category: 'sports',
    email: 'media@bluejays.ca',
    twitter: 'https://twitter.com/BlueJays',
    facebook: 'https://facebook.com/torontobluejays',
    instagram: 'https://instagram.com/bluejays',
    website: 'https://www.mlb.com/bluejays',
    response: 'no_response',
  },
  {
    name: 'Toronto FC (MLS)',
    category: 'sports',
    email: 'media@torontofc.ca',
    twitter: 'https://twitter.com/TorontoFC',
    facebook: 'https://facebook.com/torontofc',
    instagram: 'https://instagram.com/torontofc',
    website: 'https://www.mlssoccer.com/teams/toronto-fc',
    response: 'no_response',
  },
  {
    name: 'BC Lions (CFL)',
    category: 'sports',
    email: 'media@bclions.ca',
    twitter: 'https://twitter.com/BCLions',
    facebook: 'https://facebook.com/bclions',
    instagram: 'https://instagram.com/bclions',
    website: 'https://www.bclions.ca',
    response: 'no_response',
  },
  {
    name: 'Winnipeg Blue Bombers (CFL)',
    category: 'sports',
    email: 'media@bluebombers.ca',
    twitter: 'https://twitter.com/Wpg_BlueBombers',
    facebook: 'https://facebook.com/winnipeqbluebombers',
    instagram: 'https://instagram.com/wpgbluebombers',
    website: 'https://www.bluebombers.ca',
    response: 'no_response',
  },
  // Orange Shirt Society
  {
    name: 'Orange Shirt Society',
    category: 'corporate',
    email: 'info@orangeshirtday.org',
    pressEmail: 'media@orangeshirtday.org',
    twitter: 'https://twitter.com/orangeshirtday',
    facebook: 'https://facebook.com/orangeshirtday',
    instagram: 'https://instagram.com/orangeshirtday',
    website: 'https://www.orangeshirtday.org',
    response: 'acknowledged',
    commitment: 'Official organizer of Orange Shirt Day - must ensure corporate partners take real action beyond performative gestures',
  },
];

const ResponseStatus = ({ status }: { status: Organization['response'] }) => {
  const statusConfig = {
    no_response: { label: 'No Response', color: 'bg-red-100 text-red-800' },
    acknowledged: { label: 'Acknowledged', color: 'bg-yellow-100 text-yellow-800' },
    committed: { label: 'Committed', color: 'bg-blue-100 text-blue-800' },
    acting: { label: 'Taking Action', color: 'bg-green-100 text-green-800' },
  };

  const config = statusConfig[status || 'no_response'];
  return <span className={`px-3 py-1 rounded-full text-sm font-semibold ${config.color}`}>{config.label}</span>;
};

export default function OrangeShirtDayAccountabilityTracker() {
  const { t, i18n } = useTranslation();

  const corporateSponsors = organizations.filter((org) => org.category === 'corporate');
  const orangeShirtSociety = organizations.filter((org) => org.name === 'Orange Shirt Society');
  const nhlTeams = organizations.filter((org) => org.category === 'nhl');
  const sportsTeams = organizations.filter((org) => org.category === 'sports');

  const OrganizationCard = ({ org }: { org: Organization }) => (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{org.name}</h3>
        <ResponseStatus status={org.response} />
      </div>

      {org.commitment && <p className="text-gray-700 mb-4 italic">{org.commitment}</p>}

      <div className="flex flex-wrap gap-2 mb-4">
        {org.email && (
          <a href={`mailto:${org.email}`} className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Mail size={16} />
            Email
          </a>
        )}
        {org.pressEmail && org.pressEmail !== org.email && (
          <a href={`mailto:${org.pressEmail}`} className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Mail size={16} />
            Press
          </a>
        )}
        {org.twitter && (
          <a href={org.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Twitter size={16} />
            Twitter
          </a>
        )}
        {org.facebook && (
          <a href={org.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Facebook size={16} />
            Facebook
          </a>
        )}
        {org.instagram && (
          <a href={org.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Instagram size={16} />
            Instagram
          </a>
        )}
        {org.website && (
          <a href={org.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Globe size={16} />
            Website
          </a>
        )}
      </div>

      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Demand Action</Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Orange Shirt Day Accountability Tracker</h1>
          <p className="text-xl text-gray-700 mb-6">
            Coast to Coast to Coast - Corporations and Sports Teams Profiting from Orange Shirt Day While Failing Indigenous Children
          </p>
          <div className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded">
            <p className="text-gray-800 font-semibold mb-2">The Reality:</p>
            <p className="text-gray-700">
              Every September 30th, major corporations and sports teams sponsor Orange Shirt Day events and campaigns. Yet many of these same organizations have failed to take meaningful action to support Indigenous children, families, and communities. This tracker holds them accountable.
            </p>
          </div>
        </div>

        {/* Orange Shirt Society */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-red-600">Orange Shirt Society</h2>
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 mb-8">
            <p className="text-gray-800 mb-4">
              The Orange Shirt Society is the official organizer of Orange Shirt Day. They have a responsibility to ensure that corporate and organizational partners take meaningful action beyond performative gestures. This accountability tracker exists to hold ALL organizations - including the Orange Shirt Society - responsible for real change.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {orangeShirtSociety.map((org) => (
              <OrganizationCard key={org.name} org={org} />
            ))}
          </div>
        </section>

        {/* Corporate Sponsors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-orange-600">Corporate Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateSponsors.filter((org) => org.name !== 'Orange Shirt Society').map((org) => (
              <OrganizationCard key={org.name} org={org} />
            ))}
          </div>
        </section>

        {/* NHL Teams */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-blue-600">NHL Teams in Canada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nhlTeams.map((org) => (
              <OrganizationCard key={org.name} org={org} />
            ))}
          </div>
        </section>

        {/* Other Sports Teams */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-green-600">Other Sports Teams in Canada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsTeams.map((org) => (
              <OrganizationCard key={org.name} org={org} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Take Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact these organizations directly. Demand real action, not performative activism. Orange Shirt Day means nothing without systemic change.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">Share This Tracker</Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg">Report Response</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
