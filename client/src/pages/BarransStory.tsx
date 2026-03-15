import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Heart, Clock, MapPin, Users } from "lucide-react";

export default function BarransStory() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">
            Barran's Story: The Beginning
          </h1>
          <p className="text-2xl text-charcoal-light font-serif italic mb-6">
            February 14, 2021 — The Day Everything Changed
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <p className="text-lg text-red-800">
              <strong>A 14-year-old boy was stabbed three times by a stranger wearing a balaclava.</strong> He survived. But the system that was supposed to protect him failed—before the stabbing, during his recovery, and for the next six years.
            </p>
          </div>
        </div>

        {/* CTV News Article Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">CTV News Report</h2>
          <Card className="p-8 bg-cream-dark border-l-4 border-amber-orange">
            <div className="mb-4">
              <p className="text-sm font-semibold text-charcoal-light uppercase mb-2">
                CTV Montreal News - February 14, 2021
              </p>
              <h3 className="text-2xl font-bold text-forest-green mb-4">
                14-year-old stabbing victim's condition upgraded
              </h3>
            </div>
            <div className="space-y-4 text-charcoal">
              <p>
                A 14-year-old boy was stabbed multiple times in what police are investigating as a random attack. The victim's condition has been upgraded following the incident.
              </p>
              <p>
                The attack occurred in the afternoon when the young man was on his way to take his sister to their mother's house. He was confronted by a stranger wearing a balaclava who attacked him without provocation.
              </p>
              <div className="bg-white p-4 rounded border-l-2 border-amber-orange">
                <p className="font-semibold text-forest-green mb-2">Source:</p>
                <a
                  href="https://montreal.ctvnews.ca/mobile/14-year-old-stabbing-victim-s-condition-upgraded-1.5308685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-orange hover:text-amber-light font-semibold break-all"
                >
                  CTV Montreal News
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Medical Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Attack: Medical Details</h2>
          
          <div className="space-y-6">
            {/* Injuries Card */}
            <Card className="p-8 bg-red-50 border-2 border-red-500">
              <div className="flex gap-4 mb-6">
                <Heart className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">Injuries Sustained</h3>
                  <div className="space-y-3 text-charcoal">
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-red-600">Stab Wound #1: Left Lung</p>
                      <p className="text-sm mt-1">A collapsed lung requiring immediate medical intervention</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-red-600">Stab Wound #2: Chest</p>
                      <p className="text-sm mt-1">Deep penetrating wound to the chest cavity</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-red-600">Stab Wound #3: Back</p>
                      <p className="text-sm mt-1">Serious injury to the back requiring surgical repair</p>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <p className="font-semibold text-red-600">Attempted Stab Wounds: Stomach (x2)</p>
                      <p className="text-sm mt-1">Barran's iPhone in his front pocket protected him from additional fatal injuries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-red-500 mt-6">
                <p className="font-semibold text-red-700 mb-2">The iPhone That Saved His Life</p>
                <p className="text-charcoal">
                  The attacker attempted to stab Barran twice in the stomach, but his iPhone in his front pocket stopped the blade. Without this protection, the injuries would have been fatal.
                </p>
              </div>
            </Card>

            {/* Hospital Treatment */}
            <Card className="p-8 bg-cream-dark">
              <h3 className="text-2xl font-bold text-forest-green mb-4 flex items-center gap-2">
                <Clock size={28} />
                Hospital Treatment
              </h3>
              <div className="space-y-4 text-charcoal">
                <div>
                  <p className="font-semibold text-forest-green mb-2">Chest Tube Placement</p>
                  <p>
                    Barran required a chest tube to drain fluid from his collapsed lung. This tube remained in place for several days following the attack.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green mb-2">Hospital Stay</p>
                  <p>
                    He was admitted to the Children's Hospital for emergency treatment and observation. Medical staff worked to stabilize his condition and prevent life-threatening complications.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green mb-2">Recovery Timeline</p>
                  <p>
                    His condition was upgraded from critical to stable within days. However, the physical and psychological trauma would last far longer than his hospital stay.
                  </p>
                </div>
              </div>
            </Card>

            {/* Witness Trauma */}
            <Card className="p-8 bg-amber-50 border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold text-forest-green mb-4 flex items-center gap-2">
                <Users size={28} />
                Witnesses to Trauma
              </h3>
              <div className="space-y-4 text-charcoal">
                <p>
                  <strong>Three of Barran's sisters witnessed the attack.</strong> They saw their brother emerge from the building covered in blood, waiting for the ambulance. This image is burned into their memory.
                </p>
                <p>
                  The biological father waited what felt like an hour (5 minutes) for emergency services to arrive. Police arrived in under 2 minutes, followed by ambulance volunteers from Côte-Saint-Luc, then the regular ambulance 5 minutes later.
                </p>
                <p>
                  While Barran was being transported to the Children's Hospital, the biological father had to file a police report for 4.5 hours—unable to be with his son during those critical first hours.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* The Attacker & Questions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Attack: Questions Remain</h2>
          
          <Card className="p-8 bg-amber-50 border-2 border-amber-orange">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-forest-green mb-3">Who Was the Attacker?</h3>
                <p className="text-charcoal mb-3">
                  A man wearing a balaclava attacked Barran without provocation. The attack appeared to be random—Barran did not know his attacker.
                </p>
                <p className="text-charcoal">
                  Someone was arrested in connection with the attack. However, Barran has always had a "weird feeling" that something doesn't add up about the story. After 8 years, he still questions whether the right person was held accountable.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-amber-orange">
                <p className="font-semibold text-forest-green mb-2">Suspicious Timing</p>
                <p className="text-charcoal text-sm">
                  The attack happened just 5 feet from the mother's door. The biological father later learned that the person arrested was the mother's boyfriend—the same person who had been physically fighting with the mother in front of Barran and his sister for years.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-amber-orange">
                <p className="font-semibold text-forest-green mb-2">Barran's Fear</p>
                <p className="text-charcoal text-sm">
                  Barran was too scared to tell the detective about the years of violence he witnessed between his mother and her boyfriend. He feared his mother's reaction. It took being stabbed for him to finally speak up.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* The Real Crime: System Failure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Real Crime: System Failure</h2>
          
          <Card className="p-8 bg-red-50 border-2 border-red-500">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">
                  DPJ Knew. DPJ Did Nothing.
                </h3>
                <div className="space-y-4 text-charcoal">
                  <p>
                    <strong>The biological father called DPJ (Direction de la Protection de la Jeunesse) THREE TIMES over three years to report possible abuse.</strong>
                  </p>
                  <p>
                    Each time, DPJ told him: "We'll look into it." Each time, they did nothing. They never conducted a single home visit. They never investigated. They never protected the children.
                  </p>
                  <div className="bg-white p-4 rounded border-l-2 border-red-500 mt-4">
                    <p className="font-semibold text-red-700 mb-2">What DPJ Should Have Done</p>
                    <ul className="space-y-2 text-sm">
                      <li>✗ Conducted home visits to assess the living conditions</li>
                      <li>✗ Interviewed the children about the violence they witnessed</li>
                      <li>✗ Documented the pattern of domestic violence</li>
                      <li>✗ Intervened to protect the children from ongoing trauma</li>
                      <li>✗ Applied Jordan's Principle for Indigenous children</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline Context */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Bigger Picture: 13-Year Timeline</h2>
          
          <div className="space-y-4">
            <Card className="p-6 bg-cream-dark">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">2013</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green">Paternity Fight Begins</p>
                  <p className="text-charcoal-light">Biological father fights for custody of his daughter born in 2013</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-cream-dark">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">2012-2021</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green">Years of Domestic Violence</p>
                  <p className="text-charcoal-light">Mother's boyfriend physically fights with mother in front of children. DPJ called 3 times. No action taken.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-red-50 border-l-4 border-red-500">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-red-600">Feb 14, 2021</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">THE STABBING</p>
                  <p className="text-charcoal">Barran stabbed 3 times. System failure becomes undeniable.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-cream-dark">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">2021-2023</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green">Court Battle for Custody</p>
                  <p className="text-charcoal-light">Biological father fights for full custody of daughter. Court-appointed lawyer testifies against mother.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-cream-dark">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">2023-2026</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green">Accountability Campaign</p>
                  <p className="text-charcoal-light">Demands for investigation, Jordan's Principle, and systemic change. Officials ghost, block, and refuse to respond.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-cream-dark">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">Feb 27, 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-forest-green">Governor General's Wellness Check</p>
                  <p className="text-charcoal-light">THE TRIGGER EVENT: Dad only spoke with receptionist, not with children. Final insult.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-forest-green text-cream p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            This Is Why We Fight
          </h3>
          <p className="text-lg mb-6">
            Barran survived the stabbing. But the system that failed to protect him is still failing other Indigenous children today. His story is not unique. It is a symptom of systemic failure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-amber-orange hover:bg-amber-light text-white px-8 py-3"
              onClick={() => window.location.href = "/dpj-accountability"}
            >
              DPJ Accountability Timeline
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-forest-green px-8 py-3"
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
