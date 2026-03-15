import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Shield, XCircle } from "lucide-react";

export default function MotherAbuseDPJ() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-forest-green mb-4">
            Mother's Abuse & DPJ Failure
          </h1>
          <p className="text-2xl text-charcoal-light font-serif italic mb-6">
            Years of Domestic Violence. Years of Silence.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <p className="text-lg text-red-800">
              <strong>The biological father called DPJ three times over three years to report abuse.</strong> Each time, DPJ promised to investigate. Each time, they did nothing. The children were left in danger.
            </p>
          </div>
        </div>

        {/* The Pattern of Abuse */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">
            The Pattern of Domestic Violence
          </h2>
          
          <Card className="p-8 bg-red-50 border-2 border-red-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-3">What the Children Witnessed</h3>
                <p className="text-charcoal mb-4">
                  For years, Barran and his sister witnessed their mother physically fighting with her boyfriend in their home. These were not minor arguments—they were violent, physical altercations.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-red-600 mb-2">Frequency</p>
                    <p className="text-charcoal">Regular, recurring physical fights between mother and boyfriend</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-red-600 mb-2">Severity</p>
                    <p className="text-charcoal">Violent physical altercations, not just verbal arguments</p>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <p className="font-semibold text-red-600 mb-2">Impact on Children</p>
                    <p className="text-charcoal">Barran and his sister were exposed to this violence repeatedly, creating trauma and fear</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-red-500">
                <p className="font-semibold text-red-700 mb-2">Why Barran Didn't Tell Police</p>
                <p className="text-charcoal">
                  After the stabbing, Barran was too scared to tell the detective about the years of violence he witnessed. He feared his mother's reaction. It took being stabbed for him to finally speak up. His mother was standing outside his hospital room, and he was afraid she would hear what he said to police.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* DPJ Calls: What Happened */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">
            Three Calls to DPJ. Three Failures.
          </h2>
          
          <div className="space-y-6">
            {/* Call 1 */}
            <Card className="p-6 bg-cream-dark border-l-4 border-amber-orange">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">Call 1</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-forest-green mb-2">Report Domestic Violence</h3>
                  <p className="text-charcoal mb-3">
                    Biological father calls DPJ to report the pattern of domestic violence in the home where his children are staying.
                  </p>
                  <p className="text-charcoal-light text-sm">
                    <strong>DPJ Response:</strong> "We'll look into it."
                  </p>
                  <p className="text-charcoal-light text-sm">
                    <strong>Action Taken:</strong> NONE. No home visit. No investigation. No follow-up.
                  </p>
                </div>
              </div>
            </Card>

            {/* Call 2 */}
            <Card className="p-6 bg-cream-dark border-l-4 border-amber-orange">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">Call 2</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-forest-green mb-2">Second Report - Continued Violence</h3>
                  <p className="text-charcoal mb-3">
                    Violence continues. Biological father calls DPJ again to report ongoing abuse.
                  </p>
                  <p className="text-charcoal-light text-sm">
                    <strong>DPJ Response:</strong> "We'll look into it."
                  </p>
                  <p className="text-charcoal-light text-sm">
                    <strong>Action Taken:</strong> NONE. No home visit. No investigation. No follow-up.
                  </p>
                </div>
              </div>
            </Card>

            {/* Call 3 */}
            <Card className="p-6 bg-cream-dark border-l-4 border-amber-orange">
              <div className="flex gap-4">
                <div className="text-center flex-shrink-0">
                  <p className="text-2xl font-bold text-amber-orange">Call 3</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-forest-green mb-2">Third Report - Still No Action</h3>
                  <p className="text-charcoal mb-3">
                    Violence persists. Biological father calls DPJ a third time over three years.
                  </p>
                  <p className="text-charcoal-light text-sm">
                    <strong>DPJ Response:</strong> "We'll look into it."
                  </p>
                  <p className="text-charcoal-light text-sm">
                    <strong>Action Taken:</strong> NONE. No home visit. No investigation. No follow-up.
                  </p>
                </div>
              </div>
            </Card>

            {/* What Should Have Happened */}
            <Card className="p-8 bg-forest-green text-cream">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">What DPJ Should Have Done</h3>
                  <ul className="space-y-2">
                    <li>✓ Conducted a home visit after the first call</li>
                    <li>✓ Interviewed the children about the violence</li>
                    <li>✓ Documented the pattern of domestic violence</li>
                    <li>✓ Assessed the risk to the children</li>
                    <li>✓ Intervened to protect the children</li>
                    <li>✓ Applied Jordan's Principle for Indigenous children</li>
                    <li>✓ Provided support services to the family</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Mother's Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">
            Additional Concerns About the Mother
          </h2>
          
          <Card className="p-8 bg-amber-50 border-l-4 border-amber-orange">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-forest-green mb-3">Substance Abuse Issues</h3>
                <p className="text-charcoal mb-3">
                  The mother has a major drinking problem and significant weed consumption. These substance abuse issues impact her ability to care for and protect her children.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-forest-green mb-3">History of Violence</h3>
                <p className="text-charcoal mb-3">
                  In 2012, the mother assaulted the biological father with an extension cord in front of their son. This assault was serious enough that the biological father obtained custody of their son following the incident.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-amber-orange">
                <p className="font-semibold text-forest-green mb-2">Threats Against the Biological Father</p>
                <p className="text-charcoal">
                  The mother sent messages to the biological father saying she was going to "find someone to get me killed one day." She expressed that she "loved hitting men." These messages document a pattern of violence and threats.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-amber-orange">
                <p className="font-semibold text-forest-green mb-2">Behavior at Hospital</p>
                <p className="text-charcoal">
                  After Barran was stabbed, the mother pulled a fit at the hospital toward the social worker. When told that she and the biological father would have separate visiting hours (because they are "fire and gas"), she lashed out and used the "racist card" (she is Aboriginal). The social worker left and called the biological father to report the incident. The mother even told the worker she was "never coming back here."
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* The Custody Battle */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">
            The Custody Battle
          </h2>
          
          <Card className="p-8 bg-cream-dark">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-forest-green mb-3">Emergency Custody Application</h3>
                <p className="text-charcoal mb-3">
                  After the stabbing, the biological father's lawyer applied for emergency custody of the daughter. The stabbing happened just 5 feet from the mother's door—in the exact location where the children were staying.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-forest-green mb-3">Court-Appointed Lawyer</h3>
                <p className="text-charcoal mb-3">
                  Barran was assigned a court-appointed lawyer to testify against his mother in the full custody battle. This lawyer was prepared to present evidence of the abuse and neglect.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-forest-green">
                <p className="font-semibold text-forest-green mb-2">Custody Violations</p>
                <p className="text-charcoal text-sm mb-2">
                  The mother claimed the biological father was supposed to come bring the daughter to her place. However, court papers clearly state that the son (Barran) is the one who brings the daughter to the mother's place—not the biological father. The biological father has never once gone inside the mother's place in 8 years, following the court order precisely.
                </p>
                <p className="text-charcoal text-sm">
                  The mother blamed the biological father for the stabbing, claiming it was his fault. This is a clear distortion of responsibility and an attempt to deflect from her own failures to protect her children.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-forest-green text-cream p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            This Is Systemic Failure
          </h3>
          <p className="text-lg mb-6">
            DPJ had multiple opportunities to protect these children. They failed every time. The stabbing was preventable. The trauma was preventable. But DPJ chose inaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-amber-orange hover:bg-amber-light text-white px-8 py-3"
              onClick={() => window.location.href = "/barrans-story"}
            >
              Barran's Story
            </Button>
            <Button
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-forest-green px-8 py-3"
              onClick={() => window.location.href = "/dpj-accountability"}
            >
              DPJ Accountability
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
