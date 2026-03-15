import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Ban, Mail, Phone, MapPin } from "lucide-react";

export default function OfficialsBlockedYou() {
  const blockedOfficials = [
    {
      name: "Valérie Schmaltz",
      title: "Deputée de Vimont-Auteuil à l'Assemblée Nationale",
      party: "CAQ (Coalition Avenir Québec)",
      level: "Provincial",
      action: "BLOCKED on X/Twitter",
      reason: "Attempted to contact regarding constituent services",
      message: "Cannot follow this user at this time. Please try again later.",
      status: "Blocked",
      color: "bg-red-50 border-red-500",
    },
    {
      name: "Annie Koutrakis",
      title: "Member of Parliament (MP) - VIMY",
      party: "Liberal Party of Canada",
      level: "Federal",
      action: "BLOCKED on X/Twitter",
      reason: "Attempted to contact regarding constituent services and child welfare issues",
      message: "You are blocked from engaging with this account.",
      status: "Blocked",
      color: "bg-red-50 border-red-500",
    },
    {
      name: "Ian Lafrenière",
      title: "Minister of Indigenous Affairs & Public Safety",
      party: "CAQ (Coalition Avenir Québec)",
      level: "Provincial",
      action: "GHOSTED - No response",
      reason: "Multiple attempts to contact regarding systemic failures in child welfare and Indigenous victim support",
      message: "No response to emails, calls, or official requests",
      status: "Ghosted",
      color: "bg-amber-50 border-amber-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">
            Officials Who Blocked You
          </h1>
          <p className="text-2xl text-charcoal-light font-serif italic mb-6">
            When Silence Becomes Obstruction
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <p className="text-lg text-red-800">
              <strong>These officials didn't just ignore your pleas for help—they actively blocked you from contacting them.</strong> This is not silence. This is obstruction. This is a violation of your rights as a Canadian citizen and as the biological father of vulnerable children.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-red-50 border-2 border-red-500">
            <div className="text-center">
              <p className="text-4xl font-bold text-red-600 mb-2">2</p>
              <p className="text-lg font-semibold text-charcoal">Officials Blocked You</p>
              <p className="text-sm text-charcoal-light">On Social Media</p>
            </div>
          </Card>

          <Card className="p-6 bg-amber-50 border-2 border-amber-orange">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-orange mb-2">1</p>
              <p className="text-lg font-semibold text-charcoal">Minister Ghosting</p>
              <p className="text-sm text-charcoal-light">No Response</p>
            </div>
          </Card>

          <Card className="p-6 bg-cream-dark">
            <div className="text-center">
              <p className="text-4xl font-bold text-forest-green mb-2">3</p>
              <p className="text-lg font-semibold text-charcoal">Levels of Government</p>
              <p className="text-sm text-charcoal-light">Federal & Provincial</p>
            </div>
          </Card>
        </div>

        {/* Officials List */}
        <div className="space-y-8 mb-12">
          {blockedOfficials.map((official, idx) => (
            <Card key={idx} className={`p-8 border-l-4 ${official.color}`}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <Ban className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-forest-green mb-2">
                      {official.name}
                    </h3>
                    <p className="text-lg text-charcoal font-semibold mb-1">
                      {official.title}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-forest-green text-cream text-sm font-semibold rounded">
                        {official.party}
                      </span>
                      <span className="inline-block px-3 py-1 bg-amber-orange text-white text-sm font-semibold rounded">
                        {official.level}
                      </span>
                      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded ${
                        official.status === "Blocked" 
                          ? "bg-red-500 text-white" 
                          : "bg-amber-500 text-white"
                      }`}>
                        {official.status}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Action Taken:</p>
                      <p className="text-charcoal-light">{official.action}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Reason for Contact:</p>
                      <p className="text-charcoal-light">{official.reason}</p>
                    </div>
                    <div className="bg-white/50 p-3 rounded border-l-2 border-red-500">
                      <p className="font-semibold text-charcoal mb-1">Response:</p>
                      <p className="text-charcoal italic">"{official.message}"</p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4 border-t border-charcoal/10">
                    <p className="text-sm text-charcoal-light mb-3">
                      This official has violated your right to petition government for redress of grievances.
                    </p>
                    <Button
                      variant="default"
                      className="bg-forest-green hover:bg-forest-green/80 text-cream"
                      onClick={() => window.location.href = '/accountability-tracker'}
                    >
                      See Full Accountability Tracker
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Legal Context */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Why This Is Unacceptable</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-cream-dark">
              <h3 className="text-xl font-bold text-forest-green mb-4">
                Your Rights as a Canadian
              </h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex gap-3">
                  <span className="text-amber-orange font-bold">✓</span>
                  <span>Right to petition government for redress of grievances</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-orange font-bold">✓</span>
                  <span>Right to constituent services from elected representatives</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-orange font-bold">✓</span>
                  <span>Right to freedom of expression and communication</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-orange font-bold">✓</span>
                  <span>Right to protection of children by government</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-cream-dark">
              <h3 className="text-xl font-bold text-forest-green mb-4">
                What These Officials Did
              </h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Blocked constituent from contacting them</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Refused to provide constituent services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Ignored pleas for help regarding child welfare</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>Failed to protect vulnerable Indigenous children</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Ian Lafrenière Special Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">
            Special Focus: Ian Lafrenière
          </h2>
          
          <Card className="p-8 bg-red-50 border-2 border-red-500">
            <div className="space-y-4">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-2">
                    Minister of Indigenous Affairs & Public Safety
                  </h4>
                  <p className="text-charcoal">
                    Ian Lafrenière holds TWO critical portfolios that directly impact your case:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-forest-green mb-2">Indigenous Affairs</p>
                  <p className="text-charcoal-light">
                    Responsible for supporting Indigenous peoples and addressing systemic failures affecting Indigenous families and children
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-forest-green mb-2">Public Safety</p>
                  <p className="text-charcoal-light">
                    Responsible for child protection, DPJ oversight, and ensuring vulnerable children are safe
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded mt-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-700 mb-2">The Failure:</p>
                <p className="text-charcoal">
                  Despite holding both portfolios, Ian Lafrenière has not responded to requests for help regarding systemic failures in child welfare that directly impact Indigenous children. This is a dereliction of duty.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-forest-green text-cream p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">This Is Not Over</h3>
          <p className="text-lg mb-6">
            Blocking a constituent is not a solution. It's an admission of guilt. These officials know they failed you and your children. Now the world knows too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-amber-orange hover:bg-amber-light text-white px-8 py-3"
              onClick={() => window.location.href = '/accountability-tracker'}
            >
              Full Accountability Tracker
            </Button>
            <Button 
              variant="outline" 
              className="border-cream text-cream hover:bg-cream hover:text-forest-green px-8 py-3"
              onClick={() => window.location.href = '/systemic-failures'}
            >
              Systemic Failures
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
