import { useState } from 'react';
import { Scale, Calendar, User, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'Barran\'s Case - DPJ System Failure',
    status: 'Active',
    priority: 'Critical',
    startDate: '2021-02-27',
    description: 'Five-year documentation of systemic failures in child protection following violent assault. Denial of psychological services, education support, and mental health follow-up.',
    jurisdiction: 'Quebec',
    agencies: ['DPJ', 'CDPDJ', 'UN'],
    timeline: [
      { date: '2021-02-27', event: 'Incident - Teen stabbed 3 times', status: 'completed' },
      { date: '2021-03-15', event: 'DPJ involvement begins', status: 'completed' },
      { date: '2023-01-15', event: 'DPJ withdraws without adequate follow-up', status: 'completed' },
      { date: '2023-11-19', event: 'Political intimidation - cease-and-desist', status: 'completed' },
      { date: '2026-03-27', event: 'UN Letter submitted', status: 'completed' },
      { date: '2026-04-15', event: 'Expected: UN response', status: 'pending' },
    ],
    documents: [
      { name: 'DPJ Case File', type: 'Government Document', date: '2021-03-15' },
      { name: 'Psychological Assessment Request', type: 'Medical', date: '2021-04-01' },
      { name: 'Education Withdrawal Notice', type: 'School Document', date: '2023-01-10' },
      { name: 'UN Letter', type: 'International Document', date: '2026-03-27' },
    ],
    outcome: null,
  },
  {
    id: 2,
    title: 'CDPDJ Systemic Inquiry - Nunavik Region',
    status: 'Active',
    priority: 'High',
    startDate: '2025-01-01',
    description: 'CDPDJ investigation into systemic failures in child protection services across Nunavik (Northern Quebec). Findings show chronic under-resourcing and culturally inappropriate interventions.',
    jurisdiction: 'Quebec',
    agencies: ['CDPDJ', 'DPJ'],
    timeline: [
      { date: '2025-01-01', event: 'CDPDJ systemic inquiry launched', status: 'completed' },
      { date: '2025-06-15', event: 'Preliminary findings released', status: 'completed' },
      { date: '2026-03-31', event: 'Final report expected', status: 'pending' },
    ],
    documents: [
      { name: 'CDPDJ Systemic Inquiry Notice', type: 'Government Document', date: '2025-01-01' },
      { name: 'Preliminary Findings', type: 'Report', date: '2025-06-15' },
    ],
    outcome: null,
  },
  {
    id: 3,
    title: 'Jordan\'s Principle Violation - Federal Level',
    status: 'Active',
    priority: 'Critical',
    startDate: '2023-06-01',
    description: 'Federal complaint regarding violation of Jordan\'s Principle - the legal obligation to provide no-delay services to First Nations children. Case documents five years of service denial.',
    jurisdiction: 'Federal',
    agencies: ['ISC', 'CHRC', 'UN'],
    timeline: [
      { date: '2023-06-01', event: 'Complaint filed with Indigenous Services Canada', status: 'completed' },
      { date: '2024-01-15', event: 'CHRC reference assigned (100021349)', status: 'completed' },
      { date: '2026-03-27', event: 'Escalated to UN', status: 'completed' },
      { date: '2026-06-01', event: 'Expected: UN preliminary findings', status: 'pending' },
    ],
    documents: [
      { name: 'Jordan\'s Principle Complaint', type: 'Legal Document', date: '2023-06-01' },
      { name: 'CHRC Reference 100021349', type: 'Government Document', date: '2024-01-15' },
      { name: 'UN Letter - Jordan\'s Principle Section', type: 'International Document', date: '2026-03-27' },
    ],
    outcome: null,
  },
];

export default function LegalCaseTracker() {
  const [expandedCase, setExpandedCase] = useState<number | null>(0);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle size={16} className="text-green-600" />;
    if (status === 'pending') return <Clock size={16} className="text-amber-600" />;
    return <AlertCircle size={16} className="text-red-600" />;
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'Critical') return 'bg-red-100 text-red-700';
    if (priority === 'High') return 'bg-orange-100 text-orange-700';
    return 'bg-blue-100 text-blue-700';
  };

  const filteredCases = filterStatus === 'All' ? cases : cases.filter(c => c.status === filterStatus);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4 flex items-center justify-center gap-3">
            <Scale size={40} />
            Legal Case Tracker
          </h1>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Transparent tracking of systemic failure cases at local, provincial, federal, and international levels
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          {['All', 'Active', 'Resolved'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filterStatus === status
                  ? 'bg-forest-green text-white'
                  : 'bg-white text-forest-green border-2 border-forest-green hover:bg-forest-green hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Cases */}
        <div className="space-y-6">
          {filteredCases.map((caseItem, idx) => (
            <div key={caseItem.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Case Header */}
              <button
                onClick={() => setExpandedCase(expandedCase === caseItem.id ? null : caseItem.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-forest-green">{caseItem.title}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded ${getPriorityColor(caseItem.priority)}`}>
                      {caseItem.priority}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded ${
                      caseItem.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {caseItem.status}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal-light">{caseItem.description}</p>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedCase === caseItem.id && (
                <div className="px-6 py-6 border-t border-gray-200 bg-gray-50 space-y-6">
                  {/* Case Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-xs text-charcoal-light font-semibold mb-1">JURISDICTION</p>
                      <p className="font-bold text-charcoal">{caseItem.jurisdiction}</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-xs text-charcoal-light font-semibold mb-1">START DATE</p>
                      <p className="font-bold text-charcoal">{new Date(caseItem.startDate).toLocaleDateString()}</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-xs text-charcoal-light font-semibold mb-1">AGENCIES INVOLVED</p>
                      <p className="font-bold text-charcoal">{caseItem.agencies.join(', ')}</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h4 className="font-bold text-forest-green mb-4">Case Timeline</h4>
                    <div className="space-y-3">
                      {caseItem.timeline.map((event, eventIdx) => (
                        <div key={eventIdx} className="flex gap-4">
                          <div className="flex-shrink-0 w-6 flex justify-center pt-1">
                            {getStatusIcon(event.status)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-charcoal">{event.event}</p>
                            <p className="text-xs text-charcoal-light">{new Date(event.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Documents */}
                  {caseItem.documents.length > 0 && (
                    <div>
                      <h4 className="font-bold text-forest-green mb-4 flex items-center gap-2">
                        <FileText size={18} />
                        Supporting Documents
                      </h4>
                      <div className="space-y-2">
                        {caseItem.documents.map((doc, docIdx) => (
                          <div key={docIdx} className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                            <FileText size={16} className="text-amber-orange flex-shrink-0" />
                            <div className="flex-1">
                              <p className="font-semibold text-charcoal text-sm">{doc.name}</p>
                              <p className="text-xs text-charcoal-light">{doc.type} • {new Date(doc.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-red-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Know of Another Case?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We\'re documenting all cases of systemic failure affecting Indigenous families. If you have information about a case that should be tracked, please share it.
          </p>
          <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Report a Case
          </button>
        </div>
      </div>
    </div>
  );
}
