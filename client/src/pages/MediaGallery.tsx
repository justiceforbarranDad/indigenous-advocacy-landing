import { useState } from 'react';
import { Calendar, Image, FileText, ChevronDown } from 'lucide-react';

const timelineEvents = [
  {
    date: 'February 27, 2021',
    title: 'The Trigger Event: Barran Stabbed 3 Times',
    description: 'A young Indigenous teenager is violently attacked and stabbed three times. This traumatic event marks the beginning of a five-year journey through systemic failures.',
    category: 'Critical Event',
    documents: [
      { name: 'Hospital Records', type: 'Medical Document', url: '#' },
      { name: 'Police Report', type: 'Official Document', url: '#' },
    ],
    images: []
  },
  {
    date: 'March 2021 - January 2023',
    title: 'DPJ Involvement & Systemic Failure',
    description: 'Direction de la protection de la jeunesse (DPJ) becomes involved but fails to provide adequate psychological services, education support, or mental health follow-up. Jordan\'s Principle is ignored.',
    category: 'Systemic Failure',
    documents: [
      { name: 'DPJ Case File Summary', type: 'Government Document', url: '#' },
      { name: 'Psychological Assessment Request', type: 'Medical Document', url: '#' },
      { name: 'Education Withdrawal Notice', type: 'School Document', url: '#' },
    ],
    images: []
  },
  {
    date: 'November 19, 2023',
    title: 'Political Intimidation & Cease-and-Desist',
    description: 'MNA Céline Haytayan\'s office sends a cease-and-desist warning, threatening criminal harassment charges if the family continues seeking help. This marks institutional suppression of legitimate advocacy.',
    category: 'Political Intimidation',
    documents: [
      { name: 'Cease-and-Desist Letter', type: 'Legal Document', url: '#' },
      { name: 'Correspondence Timeline', type: 'Evidence', url: '#' },
    ],
    images: []
  },
  {
    date: 'December 2023 - March 2026',
    title: 'Escalation to Federal & International Level',
    description: 'Complaints filed with Protecteur du citoyen, CHRC (Reference 100021349), UN Special Rapporteurs. All levels of government remain silent or claim limited powers.',
    category: 'International Appeal',
    documents: [
      { name: 'UN Letter to Special Rapporteurs', type: 'International Document', url: '#' },
      { name: 'CHRC Reference 100021349', type: 'Official Document', url: '#' },
      { name: 'Protecteur du citoyen File', type: 'Government Document', url: '#' },
    ],
    images: []
  },
  {
    date: 'March 27, 2026',
    title: 'UN Letter Submitted - Breaking News',
    description: 'Formal complaint submitted to UN Special Rapporteur on the Rights of Indigenous Peoples and Special Rapporteur on the Rights of the Child, documenting five years of systemic failure and institutional obstruction.',
    category: 'Breaking News',
    documents: [
      { name: 'Full UN Letter', type: 'International Document', url: '#' },
      { name: 'Supporting Evidence Package', type: 'Compiled Documentation', url: '#' },
    ],
    images: []
  },
];

export default function MediaGallery() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            Timeline of Events
          </h1>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            A documented record of systemic failures, institutional obstruction, and the journey toward accountability
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-orange via-red-500 to-forest-green"></div>

          {/* Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-start`}>
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 flex justify-center">
                  <div className="w-6 h-6 bg-white border-4 border-amber-orange rounded-full mt-2 z-10 relative"></div>
                </div>

                {/* Event card */}
                <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedEvent(expandedEvent === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-amber-orange" />
                        <span className="text-sm font-semibold text-amber-orange">{event.date}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          event.category === 'Critical Event' ? 'bg-red-100 text-red-700' :
                          event.category === 'Political Intimidation' ? 'bg-orange-100 text-orange-700' :
                          event.category === 'Breaking News' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-forest-green">{event.title}</h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-amber-orange transition-transform flex-shrink-0 ${
                        expandedEvent === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded content */}
                  {expandedEvent === idx && (
                    <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
                      <p className="text-charcoal mb-6 leading-relaxed">{event.description}</p>

                      {/* Documents */}
                      {event.documents.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-bold text-forest-green mb-3 flex items-center gap-2">
                            <FileText size={18} />
                            Documents & Evidence
                          </h4>
                          <div className="space-y-2">
                            {event.documents.map((doc, docIdx) => (
                              <a
                                key={docIdx}
                                href={doc.url}
                                className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 hover:border-amber-orange hover:bg-amber-50 transition-colors"
                              >
                                <FileText size={16} className="text-amber-orange flex-shrink-0" />
                                <div>
                                  <p className="font-semibold text-charcoal">{doc.name}</p>
                                  <p className="text-xs text-charcoal-light">{doc.type}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Images */}
                      {event.images.length > 0 && (
                        <div>
                          <h4 className="font-bold text-forest-green mb-3 flex items-center gap-2">
                            <Image size={18} />
                            Photos & Images
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {event.images.map((img, imgIdx) => (
                              <img
                                key={imgIdx}
                                src={img}
                                alt="Event"
                                className="rounded border border-gray-200 hover:border-amber-orange transition-colors cursor-pointer"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-forest-green text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Help Document This History</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Do you have documents, photos, or evidence of systemic failures? We\'re building a comprehensive archive. Share your materials securely.
          </p>
          <button className="bg-amber-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-light transition-colors">
            Submit Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
