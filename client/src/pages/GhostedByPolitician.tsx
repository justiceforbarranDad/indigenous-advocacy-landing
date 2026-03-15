import { useState } from 'react';
import { AlertCircle, Share2, Building2, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GhostedByPolitician() {
  const [activeTab, setActiveTab] = useState<'politicians' | 'organizations' | 'lawyers'>('politicians');

  const politicians = [
    { name: 'Céline Haytayan', handle: 'CelineHaytayan', title: 'MNA, Laval-des-Rapides', level: 'Provincial', year: 2023, isColor: false },
    { name: 'Annie Koutrakis', handle: 'AnnieKoutrakis', title: 'MP, Vimy', level: 'Federal', year: 2023, isColor: false },
    { name: 'Sean Fraser', handle: 'SeanFraserMP', title: 'MP, Central Nova', level: 'Federal', year: 2023, isColor: false },
    { name: 'François Legault', handle: 'francoislegault', title: 'Premier of Quebec', level: 'Provincial', year: 2023, isColor: false },
    { name: 'Bernard Drainville', handle: 'BDrainvilleQc', title: 'Minister of Education', level: 'Provincial', year: 2023, isColor: false },
    { name: 'Luc Ferrandez', handle: 'LucFerrandez', title: 'Montreal City Councillor', level: 'Municipal', year: 2024, isColor: true },
  ];

  const organizations = [
    { 
      name: 'Assembly of First Nations (AFN)', 
      description: 'Refused to help, stated that Barran\'s family was not "status" or part of their band, despite being First Nations children in need of support.',
      years: '2021-2026',
      impact: 'Denied support to vulnerable Indigenous children',
      year: 2021,
      isColor: false
    },
    { 
      name: 'Prime Minister\'s Office (PMO)', 
      description: 'No response to pleas for federal intervention on systemic failures affecting Indigenous children. Complete ghosting despite repeated contact attempts.',
      years: '2021-2026',
      impact: 'Federal government indifference to Indigenous child welfare crisis',
      year: 2021,
      isColor: false
    },
    { 
      name: 'Amnesty Canada', 
      description: 'No response to requests for support on human rights violations affecting Indigenous children. Despite mandate to defend human rights, remained silent.',
      years: '2021-2026',
      impact: 'Human rights organization failed to advocate for vulnerable children',
      year: 2022,
      isColor: false
    },
    { 
      name: 'Legal Aid Quebec', 
      description: 'No response to requests for legal support. Despite mandate to provide legal assistance to those in need, refused to help.',
      years: '2021-2026',
      impact: 'Vulnerable family denied access to justice',
      year: 2023,
      isColor: false
    },
  ];

  const lawyerIssue = {
    title: 'Legal Profession Accountability',
    description: 'Not a single lawyer stepped up to help protect vulnerable Indigenous children despite their oath to uphold justice and defend the vulnerable.',
    details: [
      'No lawyer willing to take the case against corrupt government workers',
      'Legal profession bound by oath to protect children\'s rights - oath broken',
      'Lawyers paid by government - conflict of interest prevents them from challenging systemic failures',
      'Shame on all lawyers who don\'t care for victims of systemic abuse',
      'Where is the legal profession\'s responsibility to protect the most vulnerable?'
    ],
    year: 2023,
    isColor: false
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-6 text-amber-orange" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ghosted by Officials & Organizations?</h1>
          <p className="text-lg md:text-xl opacity-90">
            Barran's family has been ghosted by politicians, Indigenous organizations, human rights groups, and the legal profession for over 5 years. You're not alone if you've been ignored by those who should protect vulnerable children.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b-4 border-amber-orange sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTab('politicians')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'politicians'
                  ? 'bg-forest-green text-white'
                  : 'bg-gray-100 border-2 border-gray-300 text-charcoal hover:border-amber-orange'
              }`}
            >
              <Users size={18} />
              Politicians
            </button>
            <button
              onClick={() => setActiveTab('organizations')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'organizations'
                  ? 'bg-forest-green text-white'
                  : 'bg-gray-100 border-2 border-gray-300 text-charcoal hover:border-amber-orange'
              }`}
            >
              <Building2 size={18} />
              Organizations
            </button>
            <button
              onClick={() => setActiveTab('lawyers')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-colors ${
                activeTab === 'lawyers'
                  ? 'bg-forest-green text-white'
                  : 'bg-gray-100 border-2 border-gray-300 text-charcoal hover:border-amber-orange'
              }`}
            >
              <Briefcase size={18} />
              Legal Profession
            </button>
          </div>
        </div>
      </section>

      {/* Politicians Tab - Newspaper Format */}
      {activeTab === 'politicians' && (
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 space-y-12">
            {politicians.map((official, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  official.isColor
                    ? 'bg-white border-4 border-amber-orange shadow-lg'
                    : 'bg-yellow-50 border-4 border-yellow-900 shadow-xl'
                }`}
                style={{
                  backgroundImage: official.isColor
                    ? 'none'
                    : 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
                }}
              >
                {/* Newspaper Masthead */}
                <div
                  className={`border-b-4 p-6 md:p-8 ${
                    official.isColor
                      ? 'bg-white border-amber-orange'
                      : 'bg-yellow-100 border-yellow-900'
                  }`}
                >
                  <div className={`text-xs md:text-sm font-bold tracking-widest mb-2 ${
                    official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                  }`}>
                    OFFICIAL ACCOUNTABILITY RECORD
                  </div>
                  <h2
                    className={`text-3xl md:text-4xl font-black tracking-tight mb-1 ${
                      official.isColor ? 'text-forest-green' : 'text-yellow-900'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {official.name}
                  </h2>
                  <p
                    className={`text-xs md:text-sm font-semibold tracking-widest ${
                      official.isColor ? 'text-charcoal' : 'text-yellow-800'
                    }`}
                  >
                    {official.title} · {official.level} Level
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 border-b-2" style={{
                  borderColor: official.isColor ? '#d97706' : '#b8860b'
                }}>
                  <p
                    className={`text-lg md:text-xl font-bold mb-4 italic ${
                      official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Ghosted by {official.name} - {official.year}
                  </p>
                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      official.isColor ? 'text-charcoal' : 'text-yellow-900'
                    }`}
                  >
                    Despite being a constituent seeking help on critical child welfare issues, {official.name} and their office provided no substantive response or action. This represents a failure of democratic accountability and a betrayal of the public trust.
                  </p>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8">
                  <h3
                    className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                      official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                    }`}
                  >
                    OFFICIAL DETAILS
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <span
                        className={`font-black text-lg flex-shrink-0 ${
                          official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}
                      >
                        ■
                      </span>
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                          }`}
                        >
                          TWITTER HANDLE
                        </p>
                        <p
                          className={`text-sm ${
                            official.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}
                        >
                          @{official.handle}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span
                        className={`font-black text-lg flex-shrink-0 ${
                          official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}
                      >
                        ■
                      </span>
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            official.isColor ? 'text-amber-orange' : 'text-yellow-800'
                          }`}
                        >
                          GOVERNMENT LEVEL
                        </p>
                        <p
                          className={`text-sm ${
                            official.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}
                        >
                          {official.level}
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`https://twitter.com/${official.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 mt-4 px-6 py-2 rounded font-bold transition-colors ${
                      official.isColor
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-yellow-800 hover:bg-yellow-900 text-white'
                    }`}
                  >
                    <Share2 size={16} />
                    View Twitter Profile
                  </a>
                </div>

                {/* Edition Indicator */}
                <div
                  className={`px-6 md:px-8 py-3 text-right border-t-2 ${
                    official.isColor
                      ? 'bg-white border-amber-orange'
                      : 'bg-yellow-100 border-yellow-900'
                  }`}
                  style={{
                    borderColor: official.isColor ? '#d97706' : '#b8860b'
                  }}
                >
                  <p
                    className={`text-xs font-semibold ${
                      official.isColor ? 'text-charcoal/60' : 'text-yellow-900/60'
                    }`}
                  >
                    {official.isColor ? '🌈 Color Edition' : '⬛ Black & White Edition'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Organizations Tab - Newspaper Format */}
      {activeTab === 'organizations' && (
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 space-y-12">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  org.isColor
                    ? 'bg-white border-4 border-amber-orange shadow-lg'
                    : 'bg-yellow-50 border-4 border-yellow-900 shadow-xl'
                }`}
                style={{
                  backgroundImage: org.isColor
                    ? 'none'
                    : 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
                }}
              >
                {/* Newspaper Masthead */}
                <div
                  className={`border-b-4 p-6 md:p-8 ${
                    org.isColor
                      ? 'bg-white border-amber-orange'
                      : 'bg-yellow-100 border-yellow-900'
                  }`}
                >
                  <div className={`text-xs md:text-sm font-bold tracking-widest mb-2 ${
                    org.isColor ? 'text-amber-orange' : 'text-yellow-800'
                  }`}>
                    INSTITUTIONAL FAILURE RECORD
                  </div>
                  <h2
                    className={`text-3xl md:text-4xl font-black tracking-tight mb-1 ${
                      org.isColor ? 'text-forest-green' : 'text-yellow-900'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {org.name}
                  </h2>
                  <p
                    className={`text-xs md:text-sm font-semibold tracking-widest ${
                      org.isColor ? 'text-charcoal' : 'text-yellow-800'
                    }`}
                  >
                    Years of Ghosting: {org.years}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 border-b-2" style={{
                  borderColor: org.isColor ? '#d97706' : '#b8860b'
                }}>
                  <p
                    className={`text-sm md:text-base leading-relaxed mb-4 ${
                      org.isColor ? 'text-charcoal' : 'text-yellow-900'
                    }`}
                  >
                    {org.description}
                  </p>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8">
                  <h3
                    className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                      org.isColor ? 'text-amber-orange' : 'text-yellow-800'
                    }`}
                  >
                    IMPACT ANALYSIS
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <span
                        className={`font-black text-lg flex-shrink-0 ${
                          org.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}
                      >
                        ■
                      </span>
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            org.isColor ? 'text-amber-orange' : 'text-yellow-800'
                          }`}
                        >
                          YEARS OF GHOSTING
                        </p>
                        <p
                          className={`text-sm ${
                            org.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}
                        >
                          {org.years}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span
                        className={`font-black text-lg flex-shrink-0 ${
                          org.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}
                      >
                        ■
                      </span>
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            org.isColor ? 'text-amber-orange' : 'text-yellow-800'
                          }`}
                        >
                          IMPACT ON VULNERABLE CHILDREN
                        </p>
                        <p
                          className={`text-sm ${
                            org.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}
                        >
                          {org.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edition Indicator */}
                <div
                  className={`px-6 md:px-8 py-3 text-right border-t-2 ${
                    org.isColor
                      ? 'bg-white border-amber-orange'
                      : 'bg-yellow-100 border-yellow-900'
                  }`}
                  style={{
                    borderColor: org.isColor ? '#d97706' : '#b8860b'
                  }}
                >
                  <p
                    className={`text-xs font-semibold ${
                      org.isColor ? 'text-charcoal/60' : 'text-yellow-900/60'
                    }`}
                  >
                    {org.isColor ? '🌈 Color Edition' : '⬛ Black & White Edition'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lawyers Tab - Newspaper Format */}
      {activeTab === 'lawyers' && (
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4">
            <div
              className={`transition-all duration-500 ${
                lawyerIssue.isColor
                  ? 'bg-white border-4 border-amber-orange shadow-lg'
                  : 'bg-yellow-50 border-4 border-yellow-900 shadow-xl'
              }`}
              style={{
                backgroundImage: lawyerIssue.isColor
                  ? 'none'
                  : 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
              }}
            >
              {/* Newspaper Masthead */}
              <div
                className={`border-b-4 p-6 md:p-8 ${
                  lawyerIssue.isColor
                    ? 'bg-white border-amber-orange'
                    : 'bg-yellow-100 border-yellow-900'
                }`}
              >
                <div className={`text-xs md:text-sm font-bold tracking-widest mb-2 ${
                  lawyerIssue.isColor ? 'text-amber-orange' : 'text-yellow-800'
                }`}>
                  PROFESSION ACCOUNTABILITY REPORT
                </div>
                <h2
                  className={`text-3xl md:text-4xl font-black tracking-tight mb-1 ${
                    lawyerIssue.isColor ? 'text-forest-green' : 'text-yellow-900'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {lawyerIssue.title}
                </h2>
                <p
                  className={`text-xs md:text-sm font-semibold tracking-widest ${
                    lawyerIssue.isColor ? 'text-charcoal' : 'text-yellow-800'
                  }`}
                >
                  Complete Abandonment of Vulnerable Children
                </p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 border-b-2" style={{
                borderColor: lawyerIssue.isColor ? '#d97706' : '#b8860b'
              }}>
                <p
                  className={`text-sm md:text-base leading-relaxed mb-6 ${
                    lawyerIssue.isColor ? 'text-charcoal' : 'text-yellow-900'
                  }`}
                >
                  {lawyerIssue.description}
                </p>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <h3
                  className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                    lawyerIssue.isColor ? 'text-amber-orange' : 'text-yellow-800'
                  }`}
                >
                  KEY FINDINGS
                </h3>
                <div className="space-y-3">
                  {lawyerIssue.details.map((detail, i) => (
                    <div key={i} className="flex gap-3">
                      <span
                        className={`font-black text-lg flex-shrink-0 ${
                          lawyerIssue.isColor ? 'text-amber-orange' : 'text-yellow-800'
                        }`}
                      >
                        ■
                      </span>
                      <p
                        className={`text-sm leading-relaxed ${
                          lawyerIssue.isColor ? 'text-charcoal' : 'text-yellow-900'
                        }`}
                      >
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edition Indicator */}
              <div
                className={`px-6 md:px-8 py-3 text-right border-t-2 ${
                  lawyerIssue.isColor
                    ? 'bg-white border-amber-orange'
                    : 'bg-yellow-100 border-yellow-900'
                }`}
                style={{
                  borderColor: lawyerIssue.isColor ? '#d97706' : '#b8860b'
                }}
              >
                <p
                  className={`text-xs font-semibold ${
                    lawyerIssue.isColor ? 'text-charcoal/60' : 'text-yellow-900/60'
                  }`}
                >
                  {lawyerIssue.isColor ? '🌈 Color Edition' : '⬛ Black & White Edition'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Demand Accountability</h2>
          <p className="text-lg opacity-90 mb-8">
            Share this page. Tag these officials. Demand they respond to constituents seeking justice for vulnerable children.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/donate-comprehensive" className="bg-amber-orange hover:bg-amber-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Support This Movement
            </a>
            <a href="/timeline-newspaper" className="bg-white hover:bg-gray-100 text-forest-green font-bold py-3 px-8 rounded-lg transition-colors">
              Read Full Timeline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
