import { useState } from 'react';
import { AlertCircle, Mail, Phone, MapPin, CheckCircle, XCircle, Clock } from 'lucide-react';

/**
 * DESIGN SYSTEM: "Orange Sky" — Accountability Tracker
 * Purpose: Document officials who failed to respond to constituent requests for help
 * All information is based on documented correspondence and official records
 * Protected expression under Canadian Charter of Rights and Freedoms s.2(b)
 */

interface Official {
  id: string;
  name: string;
  title: string;
  level: 'Federal' | 'Provincial' | 'Municipal';
  party?: string;
  region: string;
  contactEmail: string;
  contactPhone?: string;
  dateContacted: string;
  status: 'ghosted' | 'responded' | 'pending';
  responseType?: string;
  notes: string;
  evidence?: string;
}

const officials: Official[] = [
  {
    id: 'fraser-sean',
    name: 'Sean Fraser',
    title: 'Member of Parliament',
    level: 'Federal',
    party: 'Liberal',
    region: 'Central Nova',
    contactEmail: 'sean.fraser@parl.gc.ca',
    contactPhone: '(902) 867-2687',
    dateContacted: '2023-2024',
    status: 'ghosted',
    notes: 'Multiple requests for intervention on DPJ/IVAC files. No substantive response to constituent pleas for help.',
    evidence: 'Documented email correspondence, no reply received'
  },
  {
    id: 'haytayan-celine',
    name: 'Céline Haytayan',
    title: 'Member of National Assembly (MNA)',
    level: 'Provincial',
    party: 'CAQ',
    region: 'Laval-des-Rapides',
    contactEmail: 'celine.haytayan@assnat.qc.ca',
    dateContacted: '2023',
    status: 'ghosted',
    responseType: 'Cease-and-Desist Warning',
    notes: 'Cease-and-desist letter sent (Nov 19, 2023) threatening criminal harassment complaint instead of assisting constituent. Chilling effect on freedom of expression.',
    evidence: 'Official cease-and-desist letter dated November 19, 2023'
  },
  {
    id: 'legault-francois',
    name: 'François Legault',
    title: 'Premier of Quebec',
    level: 'Provincial',
    party: 'CAQ',
    region: 'Quebec',
    contactEmail: 'premier@mce.gouv.qc.ca',
    dateContacted: '2023-2024',
    status: 'ghosted',
    notes: 'Multiple pleas for provincial intervention and independent inquiry into DPJ systemic failures. No meaningful response.',
    evidence: 'Multiple documented requests, no substantive reply'
  },
  {
    id: 'drainville-bernard',
    name: 'Bernard Drainville',
    title: 'Minister of Justice & Attorney General',
    level: 'Provincial',
    party: 'CAQ',
    region: 'Quebec',
    contactEmail: 'bernard.drainville@assnat.qc.ca',
    dateContacted: '2023-2024',
    status: 'ghosted',
    notes: 'Requests for legal intervention and DPJ accountability. No response from Minister responsible for justice.',
    evidence: 'Documented correspondence, no reply'
  },
  {
    id: 'koutrakis-annie',
    name: 'Annie Koutrakis',
    title: 'Member of Parliament',
    level: 'Federal',
    party: 'Liberal',
    region: 'Vimy',
    contactEmail: 'annie.koutrakis@parl.gc.ca',
    dateContacted: '2023-2024',
    status: 'ghosted',
    notes: 'Federal MP contacted for intervention on systemic child welfare failures. No substantive response.',
    evidence: 'Email correspondence, no reply received'
  },
  {
    id: 'cdpdj',
    name: 'Commission des droits de la personne et des droits de la jeunesse (CDPDJ)',
    title: 'Quebec Human Rights Commission',
    level: 'Provincial',
    region: 'Quebec',
    contactEmail: 'info@cdpdj.qc.ca',
    dateContacted: '2023-2024',
    status: 'ghosted',
    responseType: 'Rejection',
    notes: 'Requests for investigation into DPJ systemic failures REJECTED twice. Commission cited "limits on powers" despite documented violations of Quebec Charter art. 39 and UNCRC.',
    evidence: 'Official rejection letters from CDPDJ, Reference #100021349'
  },
  {
    id: 'protecteur-citoyen',
    name: 'Protecteur du citoyen (Ombudsman)',
    title: 'Quebec Ombudsman',
    level: 'Provincial',
    region: 'Quebec',
    contactEmail: 'protecteur@protecteurducitoyen.qc.ca',
    dateContacted: '2023-2024',
    status: 'ghosted',
    responseType: 'Limited Response',
    notes: 'Ombudsman acknowledged complaint but cited "limits on powers" to intervene in DPJ decisions affecting Indigenous families.',
    evidence: 'Official correspondence indicating limited jurisdiction'
  },
];

export default function AccountabilityTracker() {
  const [filterLevel, setFilterLevel] = useState<'All' | 'Federal' | 'Provincial' | 'Municipal'>('All');
  const [filterStatus, setFilterStatus] = useState<'all' | 'ghosted' | 'responded' | 'pending'>('all');

  const filteredOfficials = officials.filter(official => {
    const levelMatch = filterLevel === 'All' || official.level === filterLevel;
    const statusMatch = filterStatus === 'all' || official.status === filterStatus;
    return levelMatch && statusMatch;
  });

  const stats = {
    total: officials.length,
    ghosted: officials.filter(o => o.status === 'ghosted').length,
    responded: officials.filter(o => o.status === 'responded').length,
    pending: officials.filter(o => o.status === 'pending').length,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ghosted':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'responded':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ghosted':
        return 'No Response';
      case 'responded':
        return 'Responded';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 bg-forest-green text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Accountability Tracker
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            A public record of elected officials and government bodies contacted for help with systemic child welfare failures. This tracker documents who responded and who chose silence.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <AlertCircle size={24} className="text-amber-orange" />
            <span className="text-amber-light font-semibold">Transparency & Accountability</span>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-amber-orange/10 border-b-4 border-amber-orange">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg p-6 border-l-4 border-amber-orange">
            <h2 className="text-lg font-bold text-forest-green mb-4">Legal Notice</h2>
            <p className="text-sm text-charcoal-light leading-relaxed mb-3">
              All statements on this page are based on documented correspondence, official records, and verified facts. This constitutes protected expression under the Canadian Charter of Rights and Freedoms, Section 2(b) (freedom of expression). The information presented is in the public interest and relates to matters of government accountability and systemic failures affecting Indigenous families.
            </p>
            <p className="text-sm text-charcoal-light leading-relaxed">
              <strong>Reference:</strong> Grant v. Torstar Corp., 2009 SCC 61 (responsible communication on matters of public interest); Okanagan Indian Band v. Canada (Minister of Indian Affairs and Northern Development), [2003] 4 S.C.R. 519 (Indigenous rights jurisprudence).
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-forest-green mb-8 text-center">
            Accountability Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-forest-green/10 rounded-lg p-6 text-center border-l-4 border-forest-green">
              <p className="text-4xl font-bold text-forest-green mb-2">{stats.total}</p>
              <p className="text-sm text-charcoal-light">Officials Contacted</p>
            </div>
            <div className="bg-red-100 rounded-lg p-6 text-center border-l-4 border-red-600">
              <p className="text-4xl font-bold text-red-600 mb-2">{stats.ghosted}</p>
              <p className="text-sm text-charcoal-light">No Response</p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 text-center border-l-4 border-green-600">
              <p className="text-4xl font-bold text-green-600 mb-2">{stats.responded}</p>
              <p className="text-sm text-charcoal-light">Responded</p>
            </div>
            <div className="bg-amber-100 rounded-lg p-6 text-center border-l-4 border-amber-600">
              <p className="text-4xl font-bold text-amber-600 mb-2">{stats.pending}</p>
              <p className="text-sm text-charcoal-light">Pending</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-cream-dark border-b border-amber-orange/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-3">Government Level</label>
              <div className="flex gap-2 flex-wrap">
                {['All', 'Federal', 'Provincial', 'Municipal'].map(level => (
                  <button
                    key={level}
                    onClick={() => setFilterLevel(level as any)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      filterLevel === level
                        ? 'bg-amber-orange text-white'
                        : 'bg-white text-charcoal border-2 border-amber-orange hover:bg-amber-orange hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-3">Response Status</label>
              <div className="flex gap-2 flex-wrap">
                {['all', 'ghosted', 'responded', 'pending'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status as any)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      filterStatus === status
                        ? 'bg-amber-orange text-white'
                        : 'bg-white text-charcoal border-2 border-amber-orange hover:bg-amber-orange hover:text-white'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Officials List */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-forest-green mb-8">
            {filterLevel === 'All' ? 'All Officials' : `${filterLevel} Officials`} ({filteredOfficials.length})
          </h2>
          
          <div className="space-y-6">
            {filteredOfficials.map(official => (
              <div
                key={official.id}
                className="bg-white border-2 border-amber-orange/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-forest-green to-amber-orange text-white p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{official.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{official.title}</p>
                      <div className="flex gap-4 text-sm opacity-80">
                        <span>{official.level} Level</span>
                        {official.party && <span>{official.party}</span>}
                        <span>{official.region}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      {getStatusIcon(official.status)}
                      <span className="text-xs font-semibold text-center">{getStatusLabel(official.status)}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-charcoal-light font-semibold mb-1">EMAIL</p>
                      <a href={`mailto:${official.contactEmail}`} className="text-amber-orange hover:text-amber-light font-semibold break-all">
                        {official.contactEmail}
                      </a>
                    </div>
                    {official.contactPhone && (
                      <div>
                        <p className="text-xs text-charcoal-light font-semibold mb-1">PHONE</p>
                        <a href={`tel:${official.contactPhone}`} className="text-amber-orange hover:text-amber-light font-semibold">
                          {official.contactPhone}
                        </a>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-charcoal-light font-semibold mb-2">DATE CONTACTED</p>
                    <p className="text-charcoal">{official.dateContacted}</p>
                  </div>

                  <div>
                    <p className="text-xs text-charcoal-light font-semibold mb-2">NOTES</p>
                    <p className="text-charcoal leading-relaxed">{official.notes}</p>
                  </div>

                  {official.evidence && (
                    <div className="bg-amber-orange/10 p-4 rounded-lg border-l-4 border-amber-orange">
                      <p className="text-xs text-charcoal-light font-semibold mb-1">EVIDENCE</p>
                      <p className="text-sm text-charcoal">{official.evidence}</p>
                    </div>
                  )}

                  {official.responseType && (
                    <div className="bg-forest-green/10 p-4 rounded-lg border-l-4 border-forest-green">
                      <p className="text-xs text-charcoal-light font-semibold mb-1">RESPONSE TYPE</p>
                      <p className="text-sm text-charcoal font-semibold">{official.responseType}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredOfficials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-charcoal-light">No officials match your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Demand Accountability
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            If you've been ghosted by an elected official on matters of child welfare, systemic failures, or Indigenous rights, contact them directly. Demand answers. Document their responses. Hold them accountable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Back to Main Story
            </a>
            <a
              href="mailto:justiceforbarran@gmail.com?subject=Accountability%20Tracker%20-%20Official%20Information"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream text-forest-green px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <Mail size={20} />
              Report an Official
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-green text-cream py-12">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p className="mb-4">
            #EveryChildMatters · #JusticeForBarran · #Accountability
          </p>
          <p className="text-sm opacity-80">
            This tracker documents systemic failures and official inaction. All information is based on documented correspondence and verified facts. Protected expression under Canadian Charter of Rights and Freedoms.
          </p>
        </div>
      </footer>
    </div>
  );
}
