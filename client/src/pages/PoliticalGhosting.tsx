import { AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';

export default function PoliticalGhosting() {
  const ghostedOfficials = [
    {
      name: "Federal Level",
      count: "40+ MPs",
      contacted: "2021-2026",
      responses: "0 substantive responses",
      details: "Multiple federal MPs contacted including Sean Fraser, Annie Koutrakis, Aaron Stafford, Mark Carney - all ghosted"
    },
    {
      name: "Provincial Level (Quebec)",
      count: "75+ MNAs",
      contacted: "2021-2026",
      responses: "1 response only",
      details: "Contacted all Quebec MNAs. Only Marie-Ève Rousseau (Rosemont) responded with 'bonne chance' (good luck). Céline Haytayan sent cease-and-desist threat."
    },
    {
      name: "Municipal Level",
      count: "10+ Officials",
      contacted: "2021-2026",
      responses: "Auto-replies only",
      details: "Laval Ombudsman, municipal officials - all sent auto-replies with no substantive follow-up"
    },
    {
      name: "Institutional Bodies",
      count: "15+ Agencies",
      contacted: "2021-2026",
      responses: "Dismissals & deflections",
      details: "CDPDJ (rejected 2x), Protecteur du citoyen (limited response), Ethics Commission (confidential process)"
    }
  ];

  const oneResponse = {
    name: "Marie-Ève Rousseau",
    title: "Political Attaché to Vincent Marissal (MNA Rosemont)",
    date: "May 26, 2022",
    message: "I hope this email finds you well despite this very difficult situation. I invite you to give me a call so we can discuss the situation further.",
    significance: "The ONLY elected official out of 125+ who responded with genuine concern and offered to discuss the case"
  };

  const threatResponse = {
    name: "Céline Haytayan",
    title: "MNA Laval-des-Rapides (CAQ)",
    date: "November 19, 2023",
    message: "Stop all contact (in-person, phone, email, social) or face criminal harassment complaint/police",
    significance: "Threatened criminal charges for asking legitimate questions about DPJ and IVAC as a constituent"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Political Ghosting: 500+ Contacts, 1 Response
            </h1>
          </div>
          <p className="text-xl text-slate-700 mt-4">
            A comprehensive documentation of institutional silence from elected officials at federal, provincial, and municipal levels who were contacted for help between 2021-2026.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-lg text-slate-700">Total Contacts</div>
            <div className="text-sm text-slate-600 mt-2">Across all levels and sectors</div>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">125+</div>
            <div className="text-lg text-slate-700">Quebec Officials</div>
            <div className="text-sm text-slate-600 mt-2">MNAs, Ministers, Agencies</div>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
            <div className="text-4xl font-bold text-amber-600 mb-2">1</div>
            <div className="text-lg text-slate-700">Substantive Response</div>
            <div className="text-sm text-slate-600 mt-2">Marie-Ève Rousseau (May 26, 2022)</div>
          </div>
        </div>

        {/* Breakdown by Level */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Breakdown: 500+ Total Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ghostedOfficials.map((level, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{level.name}</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold text-slate-700">Officials:</span> {level.count}</div>
                  <div><span className="font-semibold text-slate-700">Contacted:</span> {level.contacted}</div>
                  <div><span className="font-semibold text-red-600">Responses:</span> {level.responses}</div>
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-slate-600">{level.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The One Response */}
        <div className="mb-12 bg-green-50 border-2 border-green-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">✓ The Only Response That Mattered</h2>
          <div className="space-y-3">
            <div><span className="font-bold text-slate-900">{oneResponse.name}</span> - {oneResponse.title}</div>
            <div className="text-sm text-slate-600">{oneResponse.date}</div>
            <div className="bg-white rounded p-4 mt-4 italic text-slate-700 border-l-4 border-green-500">
              "{oneResponse.message}"
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded text-green-900 text-sm">
              <strong>Significance:</strong> {oneResponse.significance}
            </div>
          </div>
        </div>

        {/* The Threat */}
        <div className="mb-12 bg-red-50 border-2 border-red-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">✗ The Cease-and-Desist Threat</h2>
          <div className="space-y-3">
            <div><span className="font-bold text-slate-900">{threatResponse.name}</span> - {threatResponse.title}</div>
            <div className="text-sm text-slate-600">{threatResponse.date}</div>
            <div className="bg-white rounded p-4 mt-4 italic text-slate-700 border-l-4 border-red-500">
              "{threatResponse.message}"
            </div>
            <div className="mt-4 p-4 bg-red-100 rounded text-red-900 text-sm">
              <strong>Significance:</strong> {threatResponse.significance}
            </div>
          </div>
        </div>

        {/* Pattern Analysis */}
        <div className="mb-12 bg-slate-100 border border-slate-300 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pattern of Institutional Silence</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Auto-Replies Only:</strong> Most officials sent automatic acknowledgment emails stating "your message will be forwarded to the appropriate person" - but never followed up with substantive response.
            </p>
            <p>
              <strong>Referrals & Deflections:</strong> When officials did respond, they deflected to other agencies: "This is not our jurisdiction" or "Contact the ministerial office instead."
            </p>
            <p>
              <strong>Ethics Commission Dismissal:</strong> When complaints were filed with the Ethics Commission, they responded: "No mechanism for citizens to complain about politicians" and "This is our last communication."
            </p>
            <p>
              <strong>Cease-and-Desist Threat:</strong> When persistence continued, one MNA's office threatened criminal harassment charges for asking legitimate questions about DPJ and IVAC.
            </p>
            <p>
              <strong>Legal Aid System Failure:</strong> Legal Aid office never responded to requests for help locating the mother for pension enforcement (since October 2022).
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Political Ghosting Matters</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              <strong>Democratic Accountability:</strong> Elected officials took an oath to represent their constituents. Ghosting a father asking for help protecting his children violates that oath.
            </p>
            <p>
              <strong>Systemic Complicity:</strong> When politicians refuse to intervene in DPJ failures, they become complicit in the system's abuse of power.
            </p>
            <p>
              <strong>Victim Silencing:</strong> Political ghosting sends a message: "Your suffering doesn't matter. The system won't help you. Stay silent."
            </p>
            <p>
              <strong>Institutional Failure Cascade:</strong> When politicians don't hold agencies accountable, those agencies continue harming vulnerable families without consequence.
            </p>
            <p>
              <strong>Legal Barriers:</strong> Without political pressure, judicial review becomes the only pathway to justice - a process that takes years and costs thousands.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Break the Silence</h2>
          <p className="mb-6 text-lg">
            If you've been ghosted by elected officials, share your story. Document their inaction. Hold them accountable.
          </p>
          <a href="/share-story" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
            Share Your Story
          </a>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-slate-50 border border-slate-300 rounded-lg p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900 mb-2">Legal Notice:</p>
          <p>
            This documentation is protected expression under Canadian Charter of Rights and Freedoms, s.2(b) (freedom of expression). All information is factual and based on official government communications. This is responsible communication on a matter of public interest regarding systemic failures in child protection and political accountability.
          </p>
        </div>
      </div>
    </div>
  );
}
