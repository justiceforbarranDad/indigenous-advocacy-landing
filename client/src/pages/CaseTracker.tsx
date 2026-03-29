import { Calendar, AlertCircle, CheckCircle, Clock, FileText, Users } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'UN Complaint - Rights of Indigenous Peoples',
    status: 'In Progress',
    progress: 65,
    date: 'March 27, 2026',
    description: 'Formal complaint submitted to UN Special Rapporteurs on Rights of Indigenous Peoples and Rights of the Child',
    timeline: [
      { date: 'Feb 27, 2021', event: 'Trigger Event - Child stabbed 3x', status: 'completed' },
      { date: 'Feb 2021 - Jan 2023', event: 'DPJ involvement & system failures', status: 'completed' },
      { date: 'Jan 2023', event: 'DPJ withdrew without adequate support', status: 'completed' },
      { date: 'March 27, 2026', event: 'UN Complaint filed', status: 'completed' },
      { date: 'April - June 2026', event: 'UN review and response expected', status: 'in-progress' },
      { date: 'July 2026+', event: 'Potential UN investigation', status: 'pending' },
    ],
    documents: [
      { name: 'UN Complaint Letter', url: '#', date: 'March 27, 2026' },
      { name: 'Supporting Documentation', url: '#', date: 'March 27, 2026' },
      { name: 'CHRC Reference: I00021349', url: '#', date: 'March 2026' },
    ],
  },
  {
    id: 2,
    title: 'Provincial Level - DPJ Accountability',
    status: 'Pending Response',
    progress: 40,
    date: 'Ongoing',
    description: 'Seeking investigation and accountability from Quebec DPJ for systemic failures and denial of services',
    timeline: [
      { date: 'Jan 2023', event: 'DPJ case closed without support', status: 'completed' },
      { date: 'Nov 2023', event: 'Political intimidation from MNA office', status: 'completed' },
      { date: '2024-2025', event: 'Multiple requests to provincial officials', status: 'completed' },
      { date: 'March 2026', event: 'CDPDJ systemic inquiry - Nunavik findings', status: 'completed' },
      { date: 'April 2026+', event: 'Awaiting provincial response', status: 'in-progress' },
    ],
    documents: [
      { name: 'DPJ Case File Summary', url: '#', date: 'Jan 2023' },
      { name: 'CDPDJ Nunavik Systemic Inquiry', url: '#', date: 'March 2026' },
      { name: 'Political Correspondence', url: '#', date: 'Nov 2023' },
    ],
  },
  {
    id: 3,
    title: 'Federal Level - Jordan\'s Principle Violation',
    status: 'Under Review',
    progress: 50,
    date: 'Ongoing',
    description: 'Documenting federal failure to apply Jordan\'s Principle for First Nations child protection services',
    timeline: [
      { date: '2021-2023', event: 'Systemic denial of psychological services', status: 'completed' },
      { date: '2024', event: 'Multiple MP and federal agency requests', status: 'completed' },
      { date: 'March 2026', event: 'UN complaint includes Jordan\'s Principle violation', status: 'completed' },
      { date: 'April 2026+', event: 'Federal review expected', status: 'in-progress' },
    ],
    documents: [
      { name: 'Jordan\'s Principle Documentation', url: '#', date: '2024' },
      { name: 'Federal Agency Correspondence', url: '#', date: '2024-2025' },
      { name: 'UN Complaint - Jordan\'s Principle Section', url: '#', date: 'March 2026' },
    ],
  },
];

export default function CaseTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4 flex items-center justify-center gap-3">
            <FileText size={40} className="text-amber-orange" />
            Case Status Tracker
          </h1>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Real-time updates on legal proceedings, UN complaints, and government accountability efforts
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-8">
          {cases.map(caseItem => (
            <div key={caseItem.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Case Header */}
              <div className="bg-forest-green text-cream p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{caseItem.title}</h2>
                    <p className="text-cream/90">{caseItem.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${
                      caseItem.status === 'completed' ? 'bg-green-500' :
                      caseItem.status === 'in-progress' ? 'bg-amber-orange' :
                      'bg-blue-500'
                    }`}>
                      {caseItem.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-charcoal">Progress</span>
                    <span className="text-sm font-bold text-amber-orange">{caseItem.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-amber-orange h-3 rounded-full transition-all duration-500"
                      style={{ width: `${caseItem.progress}%` }}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-forest-green mb-6">Timeline</h3>
                  <div className="space-y-4">
                    {caseItem.timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          {item.status === 'completed' ? (
                            <CheckCircle size={24} className="text-green-600 mb-2" />
                          ) : item.status === 'in-progress' ? (
                            <Clock size={24} className="text-amber-orange mb-2 animate-spin" />
                          ) : (
                            <Clock size={24} className="text-gray-400 mb-2" />
                          )}
                          {idx < caseItem.timeline.length - 1 && (
                            <div className="w-1 h-12 bg-gray-200 mt-2" />
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="font-bold text-charcoal">{item.date}</p>
                          <p className="text-charcoal-light">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="text-lg font-bold text-forest-green mb-4">Supporting Documents</h3>
                  <div className="space-y-3">
                    {caseItem.documents.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-amber-orange hover:bg-amber-orange/5 transition-all"
                      >
                        <FileText size={20} className="text-amber-orange flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-semibold text-charcoal">{doc.name}</p>
                          <p className="text-xs text-charcoal-light">{doc.date}</p>
                        </div>
                        <span className="text-amber-orange font-bold">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Dates */}
        <div className="mt-16 bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
            <AlertCircle size={28} />
            Important Dates to Watch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-charcoal-light mb-1">UN Response Expected</p>
              <p className="text-xl font-bold text-red-600">April - June 2026</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-charcoal-light mb-1">Provincial Hearing</p>
              <p className="text-xl font-bold text-red-600">TBD</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-charcoal-light mb-1">Federal Review</p>
              <p className="text-xl font-bold text-red-600">Ongoing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
