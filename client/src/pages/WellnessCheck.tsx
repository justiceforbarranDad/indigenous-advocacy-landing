import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Phone, Mail, Clock, MapPin } from "lucide-react";

export default function WellnessCheck() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">
            The Trigger Event
          </h1>
          <p className="text-2xl text-charcoal-light font-serif italic mb-6">
            February 27, 2026 — Governor General's Office Wellness Check
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="text-lg text-red-800">
              <strong>This wellness check was the final insult that made the decision to publicly expose the systemic failures.</strong> After 5 years of being ghosted by every level of government, the Governor General's office sent a wellness check. The dad only spoke with a receptionist—not with the children who needed help.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Timeline of Events</h2>
          
          <div className="space-y-6">
            {/* Event 1 */}
            <Card className="p-6 border-l-4 border-amber-orange">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-forest-green mb-2">
                    February 27, 2026 — 11:15 AM
                  </h3>
                  <p className="text-charcoal mb-3">
                    <strong>Outgoing Call to Governor General's Office</strong>
                  </p>
                  <p className="text-charcoal-light mb-2">
                    Call Duration: 18 minutes
                  </p>
                  <p className="text-charcoal">
                    After years of being ignored by Sean Fraser (MP), Simon Jolin-Barrette (Provincial Deputy), Ian Lafrenière (Indian Affairs Minister), and every other official, a call was made to the Governor General's office seeking advice on how to get help and accountability from those who ghosted us.
                  </p>
                </div>
              </div>
            </Card>

            {/* Event 2 */}
            <Card className="p-6 border-l-4 border-red-500">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-forest-green mb-2">
                    February 27, 2026 — Wellness Check Response
                  </h3>
                  <p className="text-charcoal mb-3">
                    <strong>Governor General's Office Sends Wellness Check</strong>
                  </p>
                  <p className="text-charcoal">
                    Instead of providing guidance or support, the Governor General's office sent a wellness check. However, when it arrived, the biological father only spoke with a receptionist—not with the children who needed help.
                  </p>
                  <p className="text-red-600 font-semibold mt-3">
                    This was the final insult. The highest office in the land couldn't even ensure the children were properly checked on.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Why This Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-cream-dark">
              <h3 className="text-xl font-bold text-forest-green mb-4">
                5 Years of Ghosting
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>• 2013: Fought for paternity & custody of sister</li>
                <li>• 2013-2021: Reported mother's actions to DPJ - all refused</li>
                <li>• 2021+: Teen stabbed 3x - serious trauma</li>
                <li>• January 2023: DPJ withdrawn without support</li>
                <li>• 2023-2026: Continued fighting for justice</li>
              </ul>
            </Card>

            <Card className="p-6 bg-cream-dark">
              <h3 className="text-xl font-bold text-forest-green mb-4">
                Officials Who Ghosted
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>✗ Sean Fraser (Federal MP)</li>
                <li>✗ Simon Jolin-Barrette (Provincial Deputy)</li>
                <li>✗ Ian Lafrenière (Indian Affairs Minister)</li>
                <li>✗ François Legault (Premier)</li>
                <li>✗ Annie Koutrakis (Federal MP)</li>
                <li>✗ Valérie Schmaltz (Deputée - BLOCKED)</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Wellness Check Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Wellness Check Details</h2>
          
          <Card className="p-8 bg-amber-50 border-2 border-amber-orange">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Call Placed To:</p>
                  <p className="text-charcoal-light">Governor General's Office</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Date & Time:</p>
                  <p className="text-charcoal-light">February 27, 2026 at 11:15 AM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Duration:</p>
                  <p className="text-charcoal-light">18 minutes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-charcoal">Purpose:</p>
                  <p className="text-charcoal-light">
                    Seeking guidance on how to obtain help and accountability from officials who ghosted us for 5 years
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* The Insult */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">The Final Insult</h2>
          
          <Card className="p-8 bg-red-50 border-2 border-red-500">
            <p className="text-lg text-charcoal mb-4">
              After seeking help from the highest office in Canada, a wellness check was sent. However:
            </p>
            <ul className="space-y-3 text-charcoal">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>The biological father only spoke with a <strong>receptionist</strong>, not with the children</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>The children who needed help were <strong>not properly assessed</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>No real support or guidance was provided</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>This confirmed that <strong>even the Governor General's office couldn't help</strong></span>
              </li>
            </ul>
            <p className="text-lg text-red-700 font-semibold mt-6">
              This wellness check was the moment it became clear: the system is broken from top to bottom. There is no help. There is no accountability. There is only silence.
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-forest-green text-cream p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">This Is Not Acceptable</h3>
          <p className="text-lg mb-6">
            When the Governor General's office can't even ensure proper wellness checks for vulnerable children, we know the system has failed completely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="bg-amber-orange hover:bg-amber-light text-white px-8 py-3"
              onClick={() => window.location.href = '/accountability-tracker'}
            >
              See Who Ghosted Us
            </Button>
            <Button 
              variant="outline" 
              className="border-cream text-cream hover:bg-cream hover:text-forest-green px-8 py-3"
              onClick={() => window.location.href = '/share-story'}
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
