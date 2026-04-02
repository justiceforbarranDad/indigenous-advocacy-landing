import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, FileText, Mail, Phone, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  official: string;
  level: 'federal' | 'provincial' | 'municipal';
  status: 'responded' | 'ghosted' | 'blocked' | 'pending';
  description: string;
  evidence: {
    type: 'email' | 'letter' | 'phone' | 'document';
    description: string;
    date: string;
  }[];
    contactMethod: 'email' | 'phone' | 'in-person' | 'letter' | 'document';
  details: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '2021-02-14',
    title: 'Barran Stabbed 3 Times',
    official: 'Incident Report',
    level: 'municipal',
    status: 'responded',
    description: 'Critical incident - 14-year-old stabbed three times by suspect in basement',
    evidence: [
      {
        type: 'document',
        description: 'Police Report #2021-12345',
        date: '2021-02-14'
      },
      {
        type: 'document',
        description: 'Hospital Medical Records',
        date: '2021-02-14'
      }
    ],
    contactMethod: 'phone',
    details: 'Police found 40-year-old male suspect (mother\'s boyfriend) in basement. Arrested and interrogated but later released. Investigators still searching.'
  },
  {
    id: '2',
    date: '2021-03-15',
    title: 'DPJ (Child Protection) Involvement',
    official: 'DPJ - Direction de la Protection de la Jeunesse',
    level: 'provincial',
    status: 'ghosted',
    description: 'Child protection services involved after stabbing incident',
    evidence: [
      {
        type: 'document',
        description: 'DPJ Case File #DPJ-2021-456',
        date: '2021-03-15'
      }
    ],
    contactMethod: 'phone',
    details: 'DPJ opened case file but provided inadequate follow-up. No comprehensive mental health support or education assistance despite serious trauma.'
  },
  {
    id: '3',
    date: '2023-01-20',
    title: 'DPJ Withdrew Services',
    official: 'DPJ - Direction de la Protection de la Jeunesse',
    level: 'provincial',
    status: 'blocked',
    description: 'Child protection services abruptly withdrew without adequate transition plan',
    evidence: [
      {
        type: 'letter',
        description: 'DPJ Closure Letter',
        date: '2023-01-20'
      },
      {
        type: 'document',
        description: 'Case Closure Documentation',
        date: '2023-01-20'
      }
    ],
    contactMethod: 'letter',
    details: 'DPJ withdrew services January 2023 with no adequate follow-up. Education lost, mental health destroyed. Jordan\'s Principle (no-delay services for First Nations kids) ignored.'
  },
  {
    id: '4',
    date: '2023-11-19',
    title: 'MNA Cease-and-Desist Warning',
    official: 'Céline Haytayan (CAQ, Laval-des-Rapides)',
    level: 'provincial',
    status: 'blocked',
    description: 'Constituent seeking help receives legal threat instead of assistance',
    evidence: [
      {
        type: 'letter',
        description: 'Cease-and-Desist Letter',
        date: '2023-11-19'
      },
      {
        type: 'document',
        description: 'Criminal Harassment Threat Documentation',
        date: '2023-11-19'
      }
    ],
    contactMethod: 'in-person',
    details: 'MNA office sent cease-and-desist warning: stop all contact (in-person, phone, email, social) or face criminal harassment complaint/police. This is what happens when a constituent asks for help.'
  },
  {
    id: '5',
    date: '2023-12-01',
    title: 'Provincial Level Ghosted',
    official: 'Multiple CAQ Ministers/Officials',
    level: 'provincial',
    status: 'ghosted',
    description: 'Multiple provincial officials ignored pleas for intervention and inquiry',
    evidence: [
      {
        type: 'email',
        description: 'Email to CAQ Ministers (No Response)',
        date: '2023-12-01'
      },
      {
        type: 'document',
        description: 'CDPDJ Refusal Documentation (2x)',
        date: '2023-12-15'
      }
    ],
    contactMethod: 'email',
    details: 'Provincial level ghosted - multiple CAQ ministers/officials ignored pleas for intervention, inquiry, real support. CDPDJ (Commission des droits de la personne et des droits de la jeunesse) refused investigation 2x.'
  },
  {
    id: '6',
    date: '2024-01-15',
    title: 'Federal Level Silence',
    official: 'Multiple Federal MPs',
    level: 'federal',
    status: 'ghosted',
    description: 'Federal MPs ignored escalated requests for help and accountability',
    evidence: [
      {
        type: 'email',
        description: 'Email to Federal MPs (No Response)',
        date: '2024-01-15'
      },
      {
        type: 'document',
        description: 'CHRC Reference #100021349',
        date: '2024-02-01'
      }
    ],
    contactMethod: 'email',
    details: 'Escalated to federal MPs - same silence. No response, no action. Even higher bodies (Protecteur du citoyen, Commissaire à l\'éthique, CHRC ref 100021349) say limits on powers, no real change for DPJ decisions.'
  },
  {
    id: '7',
    date: '2025-03-01',
    title: 'CDPDJ Systemic Inquiry - Nunavik',
    official: 'CDPDJ (Commission des droits de la personne)',
    level: 'provincial',
    status: 'pending',
    description: 'Official systemic inquiry documents chronic failures in child protection',
    evidence: [
      {
        type: 'document',
        description: 'CDPDJ 2025 Nunavik Systemic Inquiry Report',
        date: '2025-03-01'
      }
    ],
    contactMethod: 'document',
    details: 'CDPDJ\'s 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids\' health/development. Barran\'s case is part of systemic pattern.'
  }
];

const statusConfig = {
  responded: {
    icon: CheckCircle,
    label: { en: 'Responded', fr: 'Répondu' },
    color: 'bg-green-100 border-green-500 text-green-900',
    badge: 'bg-green-500'
  },
  ghosted: {
    icon: Clock,
    label: { en: 'Ghosted', fr: 'Ignoré' },
    color: 'bg-yellow-100 border-yellow-500 text-yellow-900',
    badge: 'bg-yellow-500'
  },
  blocked: {
    icon: XCircle,
    label: { en: 'Blocked', fr: 'Bloqué' },
    color: 'bg-red-100 border-red-500 text-red-900',
    badge: 'bg-red-500'
  },
  pending: {
    icon: AlertCircle,
    label: { en: 'Pending', fr: 'En attente' },
    color: 'bg-blue-100 border-blue-500 text-blue-900',
    badge: 'bg-blue-500'
  }
};

export default function GovernmentAccountabilityTimeline() {
  const { i18n } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState<'all' | 'federal' | 'provincial' | 'municipal'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'responded' | 'ghosted' | 'blocked' | 'pending'>('all');

  const filteredEvents = timelineEvents.filter(event => {
    const levelMatch = filterLevel === 'all' || event.level === filterLevel;
    const statusMatch = filterStatus === 'all' || event.status === filterStatus;
    return levelMatch && statusMatch;
  });

  const levelLabels = {
    federal: { en: 'Federal', fr: 'Fédéral' },
    provincial: { en: 'Provincial', fr: 'Provincial' },
    municipal: { en: 'Municipal', fr: 'Municipal' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-900 text-white py-12 border-b-4 border-red-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">
            {i18n.language === 'fr' ? 'CHRONOLOGIE DE LA RESPONSABILITÉ GOUVERNEMENTALE' : 'GOVERNMENT ACCOUNTABILITY TIMELINE'}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            {i18n.language === 'fr'
              ? 'Suivi détaillé des réponses gouvernementales, du silence et des preuves documentées depuis 2021.'
              : 'Detailed tracking of government responses, silence, and documented evidence since 2021.'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Level Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {i18n.language === 'fr' ? 'Niveau de gouvernement' : 'Government Level'}
            </label>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value as any)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold focus:outline-none focus:border-red-900"
            >
              <option value="all">{i18n.language === 'fr' ? 'Tous les niveaux' : 'All Levels'}</option>
              <option value="federal">{levelLabels.federal[i18n.language as 'en' | 'fr']}</option>
              <option value="provincial">{levelLabels.provincial[i18n.language as 'en' | 'fr']}</option>
              <option value="municipal">{levelLabels.municipal[i18n.language as 'en' | 'fr']}</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {i18n.language === 'fr' ? 'Statut de réponse' : 'Response Status'}
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold focus:outline-none focus:border-red-900"
            >
              <option value="all">{i18n.language === 'fr' ? 'Tous les statuts' : 'All Statuses'}</option>
              <option value="responded">{statusConfig.responded.label[i18n.language as 'en' | 'fr']}</option>
              <option value="ghosted">{statusConfig.ghosted.label[i18n.language as 'en' | 'fr']}</option>
              <option value="blocked">{statusConfig.blocked.label[i18n.language as 'en' | 'fr']}</option>
              <option value="pending">{statusConfig.pending.label[i18n.language as 'en' | 'fr']}</option>
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-red-900 transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => {
              const StatusIcon = statusConfig[event.status].icon;
              const isExpanded = expandedId === event.id;

              return (
                <div key={event.id} className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 top-0 w-16 h-16 transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center ${statusConfig[event.status].badge} rounded-full border-4 border-white shadow-lg`}>
                    <StatusIcon size={24} className="text-white" />
                  </div>

                  {/* Event card */}
                  <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div
                      onClick={() => setExpandedId(isExpanded ? null : event.id)}
                      className={`${statusConfig[event.status].color} border-2 p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest">
                              {levelLabels[event.level][i18n.language as 'en' | 'fr']}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest">
                              {event.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                          <p className="text-sm font-semibold mb-2">{event.official}</p>
                          <p className="text-sm">{event.description}</p>
                        </div>
                        <button className="ml-4 flex-shrink-0">
                          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </button>
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t-2 border-current border-opacity-30 space-y-4">
                          <div>
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                              <FileText size={18} />
                              {i18n.language === 'fr' ? 'Détails' : 'Details'}
                            </h4>
                            <p className="text-sm leading-relaxed">{event.details}</p>
                          </div>

                          {event.evidence.length > 0 && (
                            <div>
                              <h4 className="font-bold mb-2 flex items-center gap-2">
                                <FileText size={18} />
                                {i18n.language === 'fr' ? 'Preuves' : 'Evidence'}
                              </h4>
                              <div className="space-y-2">
                                {event.evidence.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-sm">
                                    <span className="font-bold min-w-fit">
                                      {item.type === 'email' && '📧'}
                                      {item.type === 'letter' && '📄'}
                                      {item.type === 'phone' && '☎️'}
                                      {item.type === 'document' && '📋'}
                                    </span>
                                    <div>
                                      <p className="font-semibold">{item.description}</p>
                                      <p className="text-xs opacity-75">{item.date}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div>
                            <h4 className="font-bold mb-2">
                              {i18n.language === 'fr' ? 'Méthode de contact' : 'Contact Method'}
                            </h4>
                            <p className="text-sm">
                              {event.contactMethod === 'email' && '📧 Email'}
                              {event.contactMethod === 'phone' && '☎️ Phone'}
                              {event.contactMethod === 'in-person' && '👤 In-Person'}
                              {event.contactMethod === 'letter' && '📮 Letter'}
                              {event.contactMethod === 'document' && '📋 Official Document'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {i18n.language === 'fr'
                  ? 'Aucun événement ne correspond aux filtres sélectionnés.'
                  : 'No events match the selected filters.'}
              </p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white p-6 rounded-lg border-2 border-red-900 text-center">
            <div className="text-3xl font-bold text-red-900">{timelineEvents.length}</div>
            <div className="text-sm font-semibold text-gray-600">
              {i18n.language === 'fr' ? 'Événements totaux' : 'Total Events'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-yellow-500 text-center">
            <div className="text-3xl font-bold text-yellow-600">
              {timelineEvents.filter(e => e.status === 'ghosted').length}
            </div>
            <div className="text-sm font-semibold text-gray-600">
              {i18n.language === 'fr' ? 'Ignorés' : 'Ghosted'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-red-600 text-center">
            <div className="text-3xl font-bold text-red-600">
              {timelineEvents.filter(e => e.status === 'blocked').length}
            </div>
            <div className="text-sm font-semibold text-gray-600">
              {i18n.language === 'fr' ? 'Bloqués' : 'Blocked'}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border-2 border-green-600 text-center">
            <div className="text-3xl font-bold text-green-600">
              {timelineEvents.filter(e => e.status === 'responded').length}
            </div>
            <div className="text-sm font-semibold text-gray-600">
              {i18n.language === 'fr' ? 'Répondus' : 'Responded'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
