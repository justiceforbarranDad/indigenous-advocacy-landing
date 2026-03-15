import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Copy, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactAccountability() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const officials = [
    {
      name: "Valérie Schmaltz",
      title: "Deputée de Vimont-Auteuil",
      party: "CAQ",
      level: "Provincial",
      email: "valerie.schmaltz@assnat.qc.ca",
      phone: "(514) 332-0000",
      address: "Assemblée Nationale du Québec, 1045 rue des Parlementaires, Québec, QC G1A 1A3",
      twitter: "@VSchmaltzCAQ",
      facebook: "Valérie Schmaltz",
      action: "BLOCKED on X/Twitter",
    },
    {
      name: "Annie Koutrakis",
      title: "Member of Parliament - VIMY",
      party: "Liberal Party of Canada",
      level: "Federal",
      email: "annie.koutrakis@parl.gc.ca",
      phone: "(514) 283-2000",
      address: "House of Commons, 111 North River Road, Ottawa, ON K1A 0A6",
      twitter: "@AnnieKoutrakis",
      facebook: "Annie Koutrakis MP",
      action: "BLOCKED on X/Twitter",
    },
    {
      name: "Ian Lafrenière",
      title: "Minister of Indigenous Affairs & Public Safety",
      party: "CAQ",
      level: "Provincial",
      email: "ian.lafreniere@assnat.qc.ca",
      phone: "(514) 873-3000",
      address: "Ministère de la Sécurité publique, 2525 Boulevard Laurier, Québec, QC G1V 2L2",
      twitter: "@IanLafreniere",
      facebook: "Ian Lafrenière",
      action: "GHOSTED - No response",
    },
    {
      name: "Sean Fraser",
      title: "Member of Parliament - Central Nova",
      party: "Liberal Party of Canada",
      level: "Federal",
      email: "sean.fraser@parl.gc.ca",
      phone: "(613) 995-0000",
      address: "House of Commons, 111 North River Road, Ottawa, ON K1A 0A6",
      twitter: "@SeanFraserMP",
      facebook: "Sean Fraser MP",
      action: "GHOSTED - No response",
    },
    {
      name: "François Legault",
      title: "Premier of Quebec",
      party: "CAQ",
      level: "Provincial",
      email: "francois.legault@assnat.qc.ca",
      phone: "(418) 643-5321",
      address: "National Assembly of Quebec, 1045 rue des Parlementaires, Québec, QC G1A 1A3",
      twitter: "@francoislegault",
      facebook: "François Legault",
      action: "GHOSTED - No response",
    },
    {
      name: "Bernard Drainville",
      title: "Minister of Justice",
      party: "CAQ",
      level: "Provincial",
      email: "bernard.drainville@assnat.qc.ca",
      phone: "(418) 643-5321",
      address: "Ministère de la Justice, 1200 route de l'Église, Sainte-Foy, QC G1V 4M1",
      twitter: "@BDrainvilleQc",
      facebook: "Bernard Drainville",
      action: "GHOSTED - No response",
    },
    {
      name: "Céline Haytayan",
      title: "Member of the National Assembly - Laval-des-Rapides",
      party: "CAQ",
      level: "Provincial",
      email: "celine.haytayan@assnat.qc.ca",
      phone: "(514) 629-0000",
      address: "Assemblée Nationale du Québec, 1045 rue des Parlementaires, Québec, QC G1A 1A3",
      twitter: "@CelineHaytayan",
      facebook: "Céline Haytayan",
      action: "SENT CEASE-AND-DESIST WARNING",
    },
  ];

  const emailTemplate = `Subject: Accountability for Systemic Failures in Child Welfare

Dear [Official Name],

I am writing to demand accountability for the systemic failures in Quebec's child welfare system (DPJ/DYP) that have devastated Indigenous families.

For over 13 years, a biological father has fought for justice after his son was stabbed three times and his daughter was born into a system that failed to protect them. Despite repeated requests for help, your office has:

- Failed to respond to constituent services requests
- Ignored pleas for intervention in child welfare failures
- Refused to support Jordan's Principle implementation
- Blocked constituent contact (in some cases)

This is not acceptable. As an elected official, you have a duty to:

1. Respond to constituent services requests
2. Protect vulnerable Indigenous children
3. Ensure government accountability
4. Support families fighting systemic failures

I demand:
- Immediate response to this constituent
- Independent inquiry into DPJ systemic failures
- Full implementation of Jordan's Principle
- Protection for Indigenous children

This testimony is protected expression under the Canadian Charter of Rights and Freedoms, Section 2(b).

Respectfully,
[Your Name]
[Your Contact Information]`;

  const phoneScript = `Hello, I'm calling to demand accountability for systemic failures in Quebec's child welfare system.

For 13 years, a biological father has fought for justice after his son was stabbed three times. Despite repeated requests for help, your office has failed to respond.

I'm calling to demand:
1. Immediate response to this constituent
2. Independent inquiry into DPJ failures
3. Full implementation of Jordan's Principle
4. Protection for Indigenous children

This is a matter of life and death for vulnerable children. When will you take action?`;

  const copyToClipboard = (text: string, email: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">
            Contact & Accountability Campaign
          </h1>
          <p className="text-2xl text-charcoal-light font-serif italic mb-6">
            Public Pressure for Justice
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-orange p-6 rounded">
            <p className="text-lg text-charcoal mb-3">
              <strong>These officials have failed their duty to protect vulnerable children.</strong> Use the contact information below to demand accountability.
            </p>
            <p className="text-sm text-charcoal-light">
              All communications are protected expression under the Canadian Charter of Rights and Freedoms, Section 2(b). This is not harassment—this is democratic accountability.
            </p>
          </div>
        </div>

        {/* Templates Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Template */}
          <Card className="p-6 bg-cream-dark">
            <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
              <Mail size={24} />
              Email Template
            </h3>
            <div className="bg-white p-4 rounded mb-4 max-h-64 overflow-y-auto font-mono text-sm">
              <p className="whitespace-pre-wrap text-charcoal">{emailTemplate}</p>
            </div>
            <Button
              variant="default"
              className="w-full bg-forest-green hover:bg-forest-green/80"
              onClick={() => copyToClipboard(emailTemplate, "email-template")}
            >
              {copiedEmail === "email-template" ? "✓ Copied!" : "Copy Email Template"}
            </Button>
          </Card>

          {/* Phone Script */}
          <Card className="p-6 bg-cream-dark">
            <h3 className="text-xl font-bold text-forest-green mb-4 flex items-center gap-2">
              <Phone size={24} />
              Phone Script
            </h3>
            <div className="bg-white p-4 rounded mb-4 max-h-64 overflow-y-auto font-mono text-sm">
              <p className="whitespace-pre-wrap text-charcoal">{phoneScript}</p>
            </div>
            <Button
              variant="default"
              className="w-full bg-forest-green hover:bg-forest-green/80"
              onClick={() => copyToClipboard(phoneScript, "phone-script")}
            >
              {copiedEmail === "phone-script" ? "✓ Copied!" : "Copy Phone Script"}
            </Button>
          </Card>
        </div>

        {/* Officials Contact Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Contact Information</h2>
          <div className="space-y-6">
            {officials.map((official, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-amber-orange">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Official Info */}
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">
                      {official.name}
                    </h3>
                    <p className="text-charcoal font-semibold mb-1">{official.title}</p>
                    <div className="flex gap-2 mb-3">
                      <span className="inline-block px-2 py-1 bg-forest-green text-cream text-xs font-semibold rounded">
                        {official.party}
                      </span>
                      <span className="inline-block px-2 py-1 bg-amber-orange text-white text-xs font-semibold rounded">
                        {official.level}
                      </span>
                    </div>
                    <p className="text-sm text-red-600 font-semibold">{official.action}</p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3">
                    {/* Email */}
                    <div>
                      <p className="text-xs font-semibold text-charcoal-light uppercase mb-1">Email</p>
                      <div className="flex gap-2">
                        <a
                          href={`mailto:${official.email}`}
                          className="text-amber-orange hover:text-amber-light font-mono text-sm break-all flex-1"
                        >
                          {official.email}
                        </a>
                        <button
                          onClick={() => copyToClipboard(official.email, official.email)}
                          className="text-amber-orange hover:text-amber-light"
                          title="Copy email"
                        >
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <p className="text-xs font-semibold text-charcoal-light uppercase mb-1">Phone</p>
                      <a
                        href={`tel:${official.phone.replace(/\D/g, "")}`}
                        className="text-amber-orange hover:text-amber-light font-mono text-sm"
                      >
                        {official.phone}
                      </a>
                    </div>

                    {/* Social Media */}
                    <div>
                      <p className="text-xs font-semibold text-charcoal-light uppercase mb-1">Social Media</p>
                      <div className="flex gap-2">
                        {official.twitter && (
                          <a
                            href={`https://twitter.com/${official.twitter.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-orange hover:text-amber-light text-sm"
                            title="X/Twitter"
                          >
                            X/Twitter
                          </a>
                        )}
                        {official.facebook && (
                          <span className="text-charcoal-light text-sm">
                            {official.facebook}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mailing Address */}
                  <div>
                    <p className="text-xs font-semibold text-charcoal-light uppercase mb-2">Mailing Address</p>
                    <p className="text-sm text-charcoal leading-relaxed font-mono">
                      {official.address}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 pt-4 border-t border-charcoal/10 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = `mailto:${official.email}`}
                    className="text-amber-orange border-amber-orange hover:bg-amber-50"
                  >
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = `tel:${official.phone.replace(/\D/g, "")}`}
                    className="text-amber-orange border-amber-orange hover:bg-amber-50"
                  >
                    Call Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-forest-green text-cream p-8 rounded-lg mb-12">
          <div className="flex gap-4">
            <AlertCircle className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-3">Legal Protection</h3>
              <p className="mb-3">
                All communications to elected officials regarding matters of public concern are protected expression under the Canadian Charter of Rights and Freedoms, Section 2(b). This includes:
              </p>
              <ul className="space-y-2 text-sm ml-4">
                <li>✓ Emails demanding accountability</li>
                <li>✓ Phone calls requesting constituent services</li>
                <li>✓ Social media posts about systemic failures</li>
                <li>✓ Public testimony about child welfare issues</li>
              </ul>
              <p className="mt-3 text-sm">
                This is not harassment. This is democracy. Officials who block constituents or refuse constituent services violate their oath of office.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-forest-green mb-4">
            Every Call Matters. Every Email Counts.
          </h3>
          <p className="text-lg text-charcoal mb-6">
            When enough people demand accountability, politicians listen. Use the contact information above to make your voice heard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-forest-green hover:bg-forest-green/80 text-cream px-8 py-3"
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </Button>
            <Button
              variant="outline"
              className="border-forest-green text-forest-green hover:bg-forest-green hover:text-cream px-8 py-3"
              onClick={() => window.location.href = "/accountability-tracker"}
            >
              Accountability Tracker
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
