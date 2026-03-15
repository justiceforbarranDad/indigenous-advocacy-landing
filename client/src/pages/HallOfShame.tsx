import { AlertTriangle, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

/**
 * HALL OF SHAME
 * 
 * Politicians and officials who ghosted families seeking help
 * Documented failures and institutional neglect
 * Public accountability for public officials
 * 
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
      officialPage: "https://www.assnat.qc.ca/en/deputes/haytayan-celine"
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
      officialPage: "https://www.assnat.qc.ca/en/deputes/st-pierre-plamondon-paul"
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
      officialPage: "https://www.afn.ca/"
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
      officialPage: "https://www.pm.gc.ca/"
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
      officialPage: "https://www.amnesty.ca/"
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
      officialPage: "https://www.quebec.ca/en/"
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-red-900 to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            HALL OF SHAME
          </h1>
          <p className="text-xl text-red-300 mb-6">
            Politicians and Officials Who Ghosted Vulnerable Families
          </p>
          <div className="flex items-center justify-center gap-2 text-red-400">
            <AlertTriangle size={24} />
            <span className="font-semibold">Documented Failures. Public Accountability. No Excuses.</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-charcoal-light">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-center">
            These officials promised to help. They promised to advocate. They promised to protect vulnerable children. 
            Instead, they ghosted. They ignored. They failed. This is the documented record of their inaction.
          </p>
        </div>
      </section>

      {/* Officials */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {officials.map((official, idx) => (
            <div key={idx} className="bg-charcoal-light rounded-lg overflow-hidden border-l-4 border-red-500">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-900/50 to-charcoal-light p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{official.name}</h2>
                    <p className="text-red-300 font-semibold">{official.title}</p>
                    <p className="text-amber-light">{official.party}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Promised vs Actual */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-charcoal p-4 rounded border-l-4 border-green-500">
                    <p className="text-green-400 font-bold mb-2">PROMISED:</p>
                    <p className="text-white">{official.promised}</p>
                  </div>
                  <div className="bg-charcoal p-4 rounded border-l-4 border-red-500">
                    <p className="text-red-400 font-bold mb-2">ACTUAL:</p>
                    <p className="text-white">{official.actual}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="text-xl font-bold text-amber-light mb-4">TIMELINE OF GHOSTING</h3>
                  <div className="space-y-3">
                    {official.timeline.map((event, i) => (
                      <div key={i} className="flex gap-4 bg-charcoal p-3 rounded">
                        <div className="text-red-400 font-bold whitespace-nowrap">{event.date}</div>
                        <div className="text-white">{event.action}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                  <p className="text-red-300 font-bold mb-2">IMPACT ON VULNERABLE CHILDREN:</p>
                  <p className="text-white">{official.impact}</p>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-amber-light mb-4">PUBLIC CONTACT INFORMATION</h3>
                  <div className="space-y-3">
                    {official.email && (
                      <div className="flex gap-3 items-start">
                        <Mail size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-amber-light font-semibold">Email</p>
                          <p className="text-white break-all">{official.email}</p>
                        </div>
                      </div>
                    )}
                    {official.phone && (
                      <div className="flex gap-3 items-start">
                        <Phone size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-amber-light font-semibold">Phone</p>
                          <p className="text-white">{official.phone}</p>
                        </div>
                      </div>
                    )}
                    {official.address && (
                      <div className="flex gap-3 items-start">
                        <MapPin size={20} className="text-amber-orange flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-amber-light font-semibold">Address</p>
                          <p className="text-white">{official.address}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote if available */}
                {official.quote && (
                  <div className="bg-charcoal p-4 rounded border-l-4 border-amber-orange italic">
                    <p className="text-amber-light font-semibold mb-2">DIRECT QUOTE:</p>
                    <p className="text-white">"{official.quote}"</p>
                  </div>
                )}

                {/* Official Page Link */}
                {official.officialPage && (
                  <div>
                    <a
                      href={official.officialPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-orange hover:text-amber-light font-semibold transition-colors"
                    >
                      View Official Page <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-b from-charcoal to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            PUBLIC ACCOUNTABILITY STARTS WITH YOU
          </h2>
          
          <div className="bg-charcoal-light p-8 rounded-lg border-4 border-red-500 space-y-6">
            <p className="text-xl leading-relaxed">
              These officials have contact information. They have email addresses. They have phone numbers. 
              They have offices. They work for you. They are accountable to you.
            </p>
            
            <p className="text-xl font-bold text-red-300">
              Contact them. Ask them why they ghosted vulnerable families. Ask them why they failed children. 
              Demand accountability.
            </p>

            <p className="text-lg text-amber-light">
              Public officials must answer to the public. This is not harassment—this is democracy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-12 px-4 bg-charcoal text-center">
        <p className="text-lg text-amber-light max-w-2xl mx-auto">
          <span className="font-bold">BE A DAD. PROTECT YOUR CUBS AND YOUR QUEEN.</span>
          <br />
          <br />
          Cherish your home. Cherish your land. Demand accountability from those who failed your family.
          <br />
          <br />
          <span className="text-red-400">LOVE DAD</span>
        </p>
      </section>
    </div>
  );
}
