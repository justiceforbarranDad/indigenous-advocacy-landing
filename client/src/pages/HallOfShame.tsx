import { AlertTriangle, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

/**
 * HALL OF SHAME - NEWSPAPER FORMAT
 * 
 * Politicians and officials who ghosted families seeking help
 * Documented failures and institutional neglect
 * Public accountability for public officials
 * 
 * Vintage newspaper aesthetic: Black & white (2020-2023) → Color (2024-2026)
 * Every fact documented. Every promise broken. Every child failed.
 */

export default function HallOfShame() {
  const officials = [
    {
      name: "Céline Haytayan",
      title: "Member of National Assembly (MNA)",
      party: "Coalition Avenir Québec (CAQ)",
      riding: "Laval-des-Rapides",
      promised: "Constituent support and assistance with child welfare issues",
      actual: "Issued cease-and-desist warning threatening criminal harassment complaint",
      timeline: [
        { date: "2023", action: "Constituent sought help for DYP/IVAC files" },
        { date: "Nov 19, 2023", action: "Office sent cease-and-desist warning" },
        { date: "2024-2026", action: "No follow-up, no assistance provided" }
      ],
      impact: "Family silenced, child welfare case unresolved, victim intimidated",
      email: "Celine.Haytayan.CALA@assnat.qc.ca",
      phone: "514-251-8126",
      address: "8695, rue Hochelaga, Bureau 202-E, Montreal",
      quote: "Cease-and-desist warning: stop all contact (in-person, phone, email, social) or face criminal harassment complaint/police",
      officialPage: "https://www.assnat.qc.ca/en/deputes/haytayan-celine",
      year: 2023,
      isColor: false
    },
    {
      name: "Paul St-Pierre Plamondon",
      title: "Deputy Leader, Bloc Québécois",
      party: "Bloc Québécois (PQ)",
      riding: "Camille-Laurin",
      promised: "Constituent representation and advocacy",
      actual: "Acknowledged case but took no action",
      timeline: [
        { date: "2023-2024", action: "Constituent contacted with DYP case details" },
        { date: "2024", action: "Office acknowledged receipt of case" },
        { date: "2024-2026", action: "No follow-up, no intervention, no support" }
      ],
      impact: "Case remains unresolved, child still suffering, no advocacy provided",
      email: "Paul.St-PierrePlamondon.CALA@assnat.qc.ca",
      phone: "514-251-8126",
      address: "8695, rue Hochelaga, Bureau 202-E, Montreal",
      officialPage: "https://www.assnat.qc.ca/en/deputes/st-pierre-plamondon-paul",
      year: 2024,
      isColor: true
    },
    {
      name: "Assembly of First Nations (AFN)",
      title: "National Indigenous Organization",
      party: "AFN Leadership",
      riding: "National",
      promised: "Support for First Nations children and families",
      actual: "Refused to help despite Jordan's Principle mandate",
      timeline: [
        { date: "2021-2023", action: "Family sought AFN support for First Nations child in DYP care" },
        { date: "2023", action: "AFN refused assistance" },
        { date: "2024-2026", action: "No response, no advocacy, no support" }
      ],
      impact: "First Nations child denied services, Jordan's Principle ignored, family abandoned",
      email: "Contact through AFN website",
      phone: "613-241-6789",
      address: "55 Metcalfe Street, Suite 1600, Ottawa, ON K1P 6L5",
      officialPage: "https://www.afn.ca/",
      year: 2021,
      isColor: false
    },
    {
      name: "Prime Minister's Office (PMO)",
      title: "Federal Government",
      party: "Government of Canada",
      riding: "National",
      promised: "Federal responsibility for Indigenous child welfare",
      actual: "Complete silence and ghosting",
      timeline: [
        { date: "2023-2024", action: "Constituent escalated to PMO with documented case" },
        { date: "2024-2026", action: "No response, no acknowledgment, complete ghosting" }
      ],
      impact: "Federal government ignores systemic child welfare abuse, no accountability",
      email: "pm@pm.gc.ca",
      phone: "613-957-5555",
      address: "80 Wellington Street, Ottawa, ON K1A 0A2",
      officialPage: "https://www.pm.gc.ca/",
      year: 2023,
      isColor: false
    },
    {
      name: "Amnesty International Canada",
      title: "Human Rights Organization",
      party: "NGO",
      riding: "National",
      promised: "Human rights advocacy and support",
      actual: "No response to human rights violations documentation",
      timeline: [
        { date: "2023-2024", action: "Submitted documentation of human rights violations" },
        { date: "2024-2026", action: "No response, no investigation, no advocacy" }
      ],
      impact: "Human rights organization fails to advocate for vulnerable child",
      email: "info@amnesty.ca",
      phone: "1-800-266-3789",
      address: "312 Laurier Ave W, Ottawa, ON K1P 5J6",
      officialPage: "https://www.amnesty.ca/",
      year: 2023,
      isColor: false
    },
    {
      name: "DYP/DPJ Leadership",
      title: "Child Welfare Agency",
      party: "Quebec Government",
      riding: "Provincial",
      promised: "Protection and support for vulnerable children",
      actual: "Removed child without adequate follow-up, withdrew support without transition plan",
      timeline: [
        { date: "Feb 14, 2021", action: "Child stabbed 3 times - DYP involved" },
        { date: "2021-2023", action: "Inadequate support, no mental health services, education disrupted" },
        { date: "Jan 2023", action: "DYP withdrew support without transition plan" },
        { date: "Feb 27, 2026", action: "Wellness check failure - child in crisis" }
      ],
      impact: "Child's life disrupted, mental health destroyed, education lost, family traumatized",
      email: "Contact through Quebec government",
      phone: "1-800-361-6477",
      address: "Multiple locations across Quebec",
      officialPage: "https://www.quebec.ca/en/",
      year: 2021,
      isColor: false
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-500" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HALL OF SHAME</h1>
          <p className="text-lg md:text-xl opacity-90">
            Politicians and Officials Who Ghosted Vulnerable Families
          </p>
        </div>
      </section>

      {/* Officials - Newspaper Format */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {officials.map((official, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                official.isColor
                  ? 'bg-white border-4 border-red-600 shadow-lg'
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
                    ? 'bg-white border-red-600'
                    : 'bg-yellow-100 border-yellow-900'
                }`}
              >
                <div className={`text-xs md:text-sm font-bold tracking-widest mb-2 ${
                  official.isColor ? 'text-red-600' : 'text-yellow-800'
                }`}>
                  ACCOUNTABILITY RECORD
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
                  {official.title} · {official.party}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Promised vs Actual */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-4 rounded border-l-4 ${
                    official.isColor
                      ? 'bg-green-50 border-green-600'
                      : 'bg-yellow-100 border-yellow-800'
                  }`}>
                    <p className={`text-xs font-black tracking-widest mb-2 ${
                      official.isColor ? 'text-green-700' : 'text-yellow-800'
                    }`}>
                      PROMISED
                    </p>
                    <p className={`text-sm ${
                      official.isColor ? 'text-charcoal' : 'text-yellow-900'
                    }`}>
                      {official.promised}
                    </p>
                  </div>
                  <div className={`p-4 rounded border-l-4 ${
                    official.isColor
                      ? 'bg-red-50 border-red-600'
                      : 'bg-yellow-100 border-yellow-800'
                  }`}>
                    <p className={`text-xs font-black tracking-widest mb-2 ${
                      official.isColor ? 'text-red-700' : 'text-yellow-800'
                    }`}>
                      ACTUAL
                    </p>
                    <p className={`text-sm ${
                      official.isColor ? 'text-charcoal' : 'text-yellow-900'
                    }`}>
                      {official.actual}
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                    official.isColor ? 'text-red-600' : 'text-yellow-800'
                  }`}>
                    TIMELINE OF GHOSTING
                  </h3>
                  <div className="space-y-3">
                    {official.timeline.map((event, i) => (
                      <div key={i} className="flex gap-4">
                        <span className={`font-black text-lg flex-shrink-0 ${
                          official.isColor ? 'text-red-600' : 'text-yellow-800'
                        }`}>
                          ■
                        </span>
                        <div>
                          <p className={`text-xs font-bold ${
                            official.isColor ? 'text-red-600' : 'text-yellow-800'
                          }`}>
                            {event.date}
                          </p>
                          <p className={`text-sm ${
                            official.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}>
                            {event.action}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className={`p-4 rounded border-l-4 ${
                  official.isColor
                    ? 'bg-red-50 border-red-600'
                    : 'bg-yellow-100 border-yellow-800'
                }`}>
                  <p className={`text-xs font-black tracking-widest mb-2 ${
                    official.isColor ? 'text-red-700' : 'text-yellow-800'
                  }`}>
                    IMPACT ON VULNERABLE CHILDREN
                  </p>
                  <p className={`text-sm ${
                    official.isColor ? 'text-charcoal' : 'text-yellow-900'
                  }`}>
                    {official.impact}
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className={`text-xs md:text-sm font-black tracking-widest mb-4 ${
                    official.isColor ? 'text-red-600' : 'text-yellow-800'
                  }`}>
                    PUBLIC CONTACT INFORMATION
                  </h3>
                  <div className="space-y-3">
                    {official.email && (
                      <div className="flex gap-3 items-start">
                        <Mail size={20} className={`flex-shrink-0 mt-1 ${
                          official.isColor ? 'text-red-600' : 'text-yellow-800'
                        }`} />
                        <div>
                          <p className={`text-xs font-bold ${
                            official.isColor ? 'text-red-600' : 'text-yellow-800'
                          }`}>
                            EMAIL
                          </p>
                          <p className={`text-sm break-all ${
                            official.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}>
                            {official.email}
                          </p>
                        </div>
                      </div>
                    )}
                    {official.phone && (
                      <div className="flex gap-3 items-start">
                        <Phone size={20} className={`flex-shrink-0 mt-1 ${
                          official.isColor ? 'text-red-600' : 'text-yellow-800'
                        }`} />
                        <div>
                          <p className={`text-xs font-bold ${
                            official.isColor ? 'text-red-600' : 'text-yellow-800'
                          }`}>
                            PHONE
                          </p>
                          <p className={`text-sm ${
                            official.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}>
                            {official.phone}
                          </p>
                        </div>
                      </div>
                    )}
                    {official.address && (
                      <div className="flex gap-3 items-start">
                        <MapPin size={20} className={`flex-shrink-0 mt-1 ${
                          official.isColor ? 'text-red-600' : 'text-yellow-800'
                        }`} />
                        <div>
                          <p className={`text-xs font-bold ${
                            official.isColor ? 'text-red-600' : 'text-yellow-800'
                          }`}>
                            ADDRESS
                          </p>
                          <p className={`text-sm ${
                            official.isColor ? 'text-charcoal' : 'text-yellow-900'
                          }`}>
                            {official.address}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote if available */}
                {official.quote && (
                  <div className={`p-4 rounded border-l-4 italic ${
                    official.isColor
                      ? 'bg-amber-50 border-amber-600'
                      : 'bg-yellow-100 border-yellow-800'
                  }`}>
                    <p className={`text-xs font-bold tracking-widest mb-2 ${
                      official.isColor ? 'text-amber-700' : 'text-yellow-800'
                    }`}>
                      DIRECT QUOTE
                    </p>
                    <p className={`text-sm ${
                      official.isColor ? 'text-charcoal' : 'text-yellow-900'
                    }`}>
                      "{official.quote}"
                    </p>
                  </div>
                )}

                {/* Official Page Link */}
                {official.officialPage && (
                  <div>
                    <a
                      href={official.officialPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                        official.isColor
                          ? 'text-red-600 hover:text-red-700'
                          : 'text-yellow-800 hover:text-yellow-900'
                      }`}
                    >
                      View Official Page <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>

              {/* Edition Indicator */}
              <div
                className={`px-6 md:px-8 py-3 text-right border-t-2 ${
                  official.isColor
                    ? 'bg-white border-red-600'
                    : 'bg-yellow-100 border-yellow-900'
                }`}
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

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            PUBLIC ACCOUNTABILITY STARTS WITH YOU
          </h2>
          <p className="text-lg opacity-90 mb-8">
            These officials have contact information. They have email addresses. They have phone numbers. They have offices. They work for you. They are accountable to you.
          </p>
          <p className="text-lg font-bold mb-8">
            Contact them. Ask them why they ghosted vulnerable families. Ask them why they failed children. Demand accountability.
          </p>
          <p className="text-base opacity-80">
            Public officials must answer to the public. This is not harassment—this is democracy.
          </p>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-12 px-4 bg-cream text-center border-t-4 border-forest-green">
        <p className="text-lg text-forest-green max-w-2xl mx-auto">
          <span className="font-bold">BE A DAD. PROTECT YOUR CUBS AND YOUR QUEEN.</span>
          <br />
          <br />
          Cherish your home. Cherish your land. Demand accountability from those who failed your family.
          <br />
          <br />
          <span className="text-amber-orange">LOVE DAD</span>
        </p>
      </section>
    </div>
  );
}
