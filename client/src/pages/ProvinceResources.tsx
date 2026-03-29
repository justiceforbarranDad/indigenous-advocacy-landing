import { useState } from 'react';
import { ChevronDown, MapPin, Phone, Globe, Users, FileText } from 'lucide-react';

const provinceData = {
  'Quebec': {
    flag: '🇫🇷',
    responseCount: 12,
    affectedPercentage: 83,
    resources: [
      {
        name: 'CDPDJ (Commission des droits de la personne et des droits de la jeunesse)',
        type: 'Government Oversight',
        phone: '1-800-361-6477',
        website: 'https://www.cdpdj.qc.ca',
        description: 'Quebec\'s human rights commission - file complaints about systemic failures'
      },
      {
        name: 'DPJ (Direction de la protection de la jeunesse)',
        type: 'Child Protection',
        phone: '1-800-361-6477',
        website: 'https://www.quebec.ca/famille-et-soutien-aux-personnes/services-de-protection-de-lenfance',
        description: 'Child protection services - request case reviews and appeals'
      },
      {
        name: 'Protecteur du citoyen',
        type: 'Ombudsman',
        phone: '1-800-463-5070',
        website: 'https://protecteurducitoyen.qc.ca',
        description: 'Quebec\'s ombudsman - investigate government complaints'
      },
      {
        name: 'First Nations Child and Family Caring Society',
        type: 'Indigenous Support',
        phone: '613-230-5885',
        website: 'https://fncaringsociety.com',
        description: 'Jordan\'s Principle implementation and Indigenous child rights'
      },
    ],
    cases: [
      { title: 'Barran\'s Case (Feb 2021)', description: 'Teen stabbed 3x, DPJ failed to provide adequate follow-up support' },
      { title: 'DPJ System Failures', description: '5+ years of documented systemic failures in child protection' },
    ]
  },
  'Ontario': {
    flag: '🍁',
    responseCount: 8,
    affectedPercentage: 75,
    resources: [
      {
        name: 'Ontario Ombudsman',
        type: 'Ombudsman',
        phone: '1-800-263-1830',
        website: 'https://www.ombudsman.on.ca',
        description: 'Investigate complaints about government agencies including CAS'
      },
      {
        name: 'CAS (Children\'s Aid Society)',
        type: 'Child Protection',
        phone: '1-800-668-0746',
        website: 'https://www.oacas.org',
        description: 'Child protection services - request case reviews'
      },
      {
        name: 'Indigenous Legal Services',
        type: 'Legal Support',
        phone: '416-598-4747',
        website: 'https://www.indigenouslegal.ca',
        description: 'Free legal support for Indigenous families'
      },
    ],
    cases: []
  },
  'British Columbia': {
    flag: '🏔️',
    responseCount: 6,
    affectedPercentage: 67,
    resources: [
      {
        name: 'BC Ombudsman',
        type: 'Ombudsman',
        phone: '1-800-567-3247',
        website: 'https://www.ombudsman.bc.ca',
        description: 'Investigate complaints about government agencies'
      },
      {
        name: 'Ministry of Children and Family Development',
        type: 'Child Protection',
        phone: '1-844-366-2363',
        website: 'https://www2.gov.bc.ca/gov/content/family-social-supports/child-family-services',
        description: 'Request case reviews and appeals'
      },
    ],
    cases: []
  },
  'Alberta': {
    flag: '🏔️',
    responseCount: 4,
    affectedPercentage: 80,
    resources: [
      {
        name: 'Alberta Ombudsman',
        type: 'Ombudsman',
        phone: '1-888-454-2555',
        website: 'https://www.ombudsman.ab.ca',
        description: 'Investigate complaints about government agencies'
      },
      {
        name: 'Alberta Child and Youth Advocate',
        type: 'Child Rights',
        phone: '1-855-356-2292',
        website: 'https://www.childadvocate.ab.ca',
        description: 'Advocate for children\'s rights and systemic improvements'
      },
    ],
    cases: []
  },
  'Manitoba': {
    flag: '🌾',
    responseCount: 3,
    affectedPercentage: 100,
    resources: [
      {
        name: 'Manitoba Ombudsman',
        type: 'Ombudsman',
        phone: '1-800-665-0531',
        website: 'https://www.ombudsman.mb.ca',
        description: 'Investigate complaints about government agencies'
      },
      {
        name: 'Child Advocate Office',
        type: 'Child Rights',
        phone: '1-866-689-8346',
        website: 'https://www.childadvocate.mb.ca',
        description: 'Advocate for children\'s rights'
      },
    ],
    cases: []
  },
};

export default function ProvinceResources() {
  const [expandedProvince, setExpandedProvince] = useState<string | null>('Quebec');

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            Provincial Resources
          </h1>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Find local support, legal resources, and documented cases of systemic failures in your province
          </p>
        </div>

        {/* Province Cards */}
        <div className="space-y-4">
          {Object.entries(provinceData).map(([province, data]: [string, any]) => (
            <div key={province} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Province Header */}
              <button
                onClick={() => setExpandedProvince(expandedProvince === province ? null : province)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-amber-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{data.flag}</span>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-forest-green">{province}</h2>
                    <p className="text-sm text-charcoal-light">
                      {data.responseCount} responses • {data.affectedPercentage}% affected
                    </p>
                  </div>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-amber-orange transition-transform ${
                    expandedProvince === province ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedProvince === province && (
                <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
                  {/* Resources Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
                      <Users size={20} />
                      Support & Resources
                    </h3>
                    <div className="space-y-4">
                      {data.resources.map((resource: any, idx: number) => (
                        <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-bold text-charcoal">{resource.name}</h4>
                              <p className="text-sm text-amber-orange font-semibold">{resource.type}</p>
                            </div>
                          </div>
                          <p className="text-sm text-charcoal-light mb-3">{resource.description}</p>
                          <div className="flex flex-wrap gap-3">
                            {resource.phone && (
                              <a
                                href={`tel:${resource.phone}`}
                                className="inline-flex items-center gap-1 text-sm bg-amber-orange text-white px-3 py-1 rounded hover:bg-amber-light transition-colors"
                              >
                                <Phone size={14} />
                                {resource.phone}
                              </a>
                            )}
                            {resource.website && (
                              <a
                                href={resource.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm bg-forest-green text-white px-3 py-1 rounded hover:opacity-90 transition-opacity"
                              >
                                <Globe size={14} />
                                Visit Website
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cases Section */}
                  {data.cases.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
                        <FileText size={20} />
                        Documented Cases
                      </h3>
                      <div className="space-y-3">
                        {data.cases.map((caseItem: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded-lg border border-red-200 bg-red-50">
                            <h4 className="font-bold text-charcoal mb-1">{caseItem.title}</h4>
                            <p className="text-sm text-charcoal-light">{caseItem.description}</p>
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
          <h3 className="text-2xl font-bold mb-4">Your Province Not Listed?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're expanding our provincial resource database. If you have information about systemic failures or support resources in your province, please share your story.
          </p>
          <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  );
}
