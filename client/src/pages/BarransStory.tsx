import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Heart, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SocialShareButtons } from "@/components/SocialShareButtons";
import BarransTimeline from "@/components/BarransTimeline";

const beforeMemories = [
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_Z0Z5EB_image_blurred_4ce86e8f.png',
    caption: 'Childhood innocence'
  },
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_R7Nc5x_image_blurred_df41ed37.png',
    caption: 'New life begins'
  },
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_KcddPM_image_blurred_df4b8c5a.png',
    caption: 'Family bond'
  }
];

export default function BarransStory() {
  const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);
  
  const nextMemory = () => {
    setCurrentMemoryIndex((prev) => (prev + 1) % beforeMemories.length);
  };
  
  const prevMemory = () => {
    setCurrentMemoryIndex((prev) => (prev - 1 + beforeMemories.length) % beforeMemories.length);
  };

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

        {/* Before 2021 - Childhood Memories */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Before 2021: Who Barran Was</h2>
          <p className="text-gray-700 mb-6">These are the moments before everything changed. The childhood joys that shaped him. Faces blurred to protect privacy.</p>
          
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
              <img 
                src={beforeMemories[currentMemoryIndex].image}
                alt={beforeMemories[currentMemoryIndex].caption}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6">
                <p className="text-white text-xl md:text-2xl font-bold">{beforeMemories[currentMemoryIndex].caption}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
              <button 
                onClick={prevMemory}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {beforeMemories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMemoryIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentMemoryIndex ? 'bg-blue-600 w-8' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextMemory}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
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
                  href="https://www.ctvnews.ca/montreal/local"
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

        {/* Judge Pilon's Ruling: The Cover-Up */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Judge Pilon's Ruling: The Accountability Failure</h2>
          
          <Card className="p-8 bg-blue-50 border-2 border-blue-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">January 6, 2023 — Judge Dany Pilon Orders DPJ to Close Files</h3>
                <p className="text-charcoal mb-4">
                  After a court hearing, Judge Dany Pilon issued a landmark ruling: <strong>The DPJ's involvement with Barran and his sister was to be terminated immediately.</strong>
                </p>
                <p className="text-charcoal mb-4">
                  The DPJ had requested a 6-month extension to continue their involvement. Judge Pilon rejected this request and ordered the files closed.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-blue-500">
                <p className="font-semibold text-blue-700 mb-2">Judge's Key Finding (Point 30):</p>
                <p className="text-charcoal italic">
                  "The Court notes that all services obtained for the children were through the father's efforts—NOT DPJ efforts."
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-2 border-blue-500">
                <p className="font-semibold text-blue-700 mb-2">Judge's Conclusion (Point 39):</p>
                <p className="text-charcoal italic">
                  "The only interest in continuing DPJ involvement would be to allow the mother to obtain information about her children, which does not meet the objectives of the Law."
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* The Revisor's Refusal to Sign */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Revisor's Refusal: Accountability Erased</h2>
          
          <Card className="p-8 bg-red-50 border-2 border-red-500">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">
                  The Revisor Refused to Sign Her Name on Court Documents
                </h3>
                <div className="space-y-4 text-charcoal">
                  <p>
                    <strong>A revisor (legal professional) made the final recommendation to Judge Pilon.</strong> This recommendation led to the judge's decision to close the DPJ files.
                  </p>
                  <p>
                    However, when the court documents were prepared, the revisor—Madame Stéphanie Bonneau (member of OPCQ, the professional order of criminologists in Quebec)—<strong>refused to put her name on the official court documents.</strong>
                  </p>
                  <p>
                    This is extraordinary. A legal professional who influences a judge's decision refuses to sign her name. No accountability. No transparency. No responsibility.
                  </p>
                  <div className="bg-white p-4 rounded border-l-2 border-red-500 mt-4">
                    <p className="font-semibold text-red-700 mb-2">Why This Matters</p>
                    <ul className="space-y-2 text-sm">
                      <li>✗ Revisors are ethically bound to sign their professional work</li>
                      <li>✗ Without a signature, there is no accountability for the recommendation</li>
                      <li>✗ The judge's decision rests on an unsigned recommendation</li>
                      <li>✗ This is a procedural violation and breach of professional ethics</li>
                      <li>✗ It suggests the system is protecting itself, not protecting children</li>
                    </ul>
                  </div>
                </div>
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

        {/* Supporting Documents Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Supporting Documents & Evidence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cease-and-Desist Letter */}
            <Card className="p-6 bg-red-50 border-2 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-2">Cease-and-Desist Letter</h3>
              <p className="text-sm text-charcoal-light mb-4">November 19, 2023</p>
              <p className="text-charcoal mb-4">
                <strong>UNSIGNED letter</strong> from MNA Céline Haytayan's office (NOT from a lawyer) threatening criminal harassment charges for asking for help.
              </p>
              <Button className="w-full bg-red-700 hover:bg-red-800 text-white">
                View Document
              </Button>
            </Card>

            {/* Email Evidence */}
            <Card className="p-6 bg-blue-50 border-2 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Email Evidence</h3>
              <p className="text-sm text-charcoal-light mb-4">50+ emails to officials</p>
              <p className="text-charcoal mb-4">
                Complete correspondence showing repeated contact attempts and official silence.
              </p>
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                View Evidence
              </Button>
            </Card>

            {/* Call Log Records */}
            <Card className="p-6 bg-orange-50 border-2 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Call Log & Records</h3>
              <p className="text-sm text-charcoal-light mb-4">Feb 27, 2026 - Governor General</p>
              <p className="text-charcoal mb-4">
                Documentation of phone calls including the 18-minute wellness check.
              </p>
              <Button className="w-full bg-orange-700 hover:bg-orange-800 text-white">
                View Records
              </Button>
            </Card>

            {/* Medical Records */}
            <Card className="p-6 bg-green-50 border-2 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-2">Medical Documentation</h3>
              <p className="text-sm text-charcoal-light mb-4">Montreal Children's Hospital</p>
              <p className="text-charcoal mb-4">
                Hospital records documenting the stabbing injuries and trauma treatment.
              </p>
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                View Records
              </Button>
            </Card>

            {/* Judge Pilon Ruling */}
            <Card className="p-6 bg-blue-50 border-2 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Judge Pilon's Ruling</h3>
              <p className="text-sm text-charcoal-light mb-4">January 6, 2023 - 2023 QCCQ 930</p>
              <p className="text-charcoal mb-4">
                Judge Dany Pilon orders DPJ closure. DPJ wanted 6 more months but judge rejected. "All services obtained through father's efforts."
              </p>
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                View Ruling
              </Button>
            </Card>

            {/* CDPDJ Report */}
            <Card className="p-6 bg-purple-50 border-2 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-2">CDPDJ Nunavik Inquiry</h3>
              <p className="text-sm text-charcoal-light mb-4">Quebec Human Rights Commission</p>
              <p className="text-charcoal mb-4">
                Systemic inquiry documenting DPJ failures affecting Indigenous children.
              </p>
              <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                View Report
              </Button>
            </Card>

            {/* Legal References */}
            <Card className="p-6 bg-indigo-50 border-2 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Legal References</h3>
              <p className="text-sm text-charcoal-light mb-4">Charter & International Law</p>
              <p className="text-charcoal mb-4">
                Legal framework protecting this advocacy and documenting systemic violations.
              </p>
              <Button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white">
                View References
              </Button>
            </Card>
          </div>
        </div>

        {/* Lawyer Accountability Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">Lawyer Accountability: When Those Sworn to Protect Abandon Their Duty</h2>
          
          <div className="space-y-6">
            {/* Children's Lawyer Abandonment */}
            <Card className="p-8 bg-red-50 border-2 border-red-500">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">The Children's Lawyer Stepped Down One Month Before the Critical Hearing</h3>
                  <div className="space-y-4 text-charcoal">
                    <p>
                      <strong>The teen had a lawyer appointed to represent his rights.</strong> This lawyer's job was to advocate for him in court. To protect his interests. To fight for him.
                    </p>
                    <p>
                      One month before the January 6, 2023 hearing—the most critical hearing in the case—this lawyer stepped down.
                    </p>
                    <div className="bg-white p-4 rounded border-l-2 border-red-500">
                      <p className="font-semibold text-red-700 mb-2">This lawyer never:</p>
                      <ul className="space-y-1 text-sm">
                        <li>✗ Asked why psychological services were denied</li>
                        <li>✗ Challenged the DPJ's refusal to help</li>
                        <li>✗ Fought for the services the court ordered</li>
                        <li>✗ Advocated for the teen's rights in court</li>
                      </ul>
                    </div>
                    <p className="font-semibold text-red-700">
                      When the judge heard the case, the teen had NO lawyer protecting his interests. This is professional negligence. This is abandonment.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Father's Lawyer Betrayal */}
            <Card className="p-8 bg-red-50 border-2 border-red-500">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-red-700 mb-4">The Father's Lawyer Quit Without Warning After 12 Years</h3>
                  <div className="space-y-4 text-charcoal">
                    <p>
                      <strong>After 12 years of representation, the father's lawyer quit without warning.</strong> No explanation. No transition. Just gone.
                    </p>
                    <div className="bg-white p-4 rounded border-l-2 border-red-500">
                      <p className="font-semibold text-red-700 mb-2">This lawyer:</p>
                      <ul className="space-y-1 text-sm">
                        <li>✗ Refused to provide case files</li>
                        <li>✗ Refused to present the father's letter to the court</li>
                        <li>✗ Left the father to represent himself at critical court dates</li>
                        <li>✗ Never asked why the DPJ refused to help</li>
                      </ul>
                    </div>
                    <p>
                      The father had to do ALL the work himself. The judge later confirmed: <strong>"All services were obtained through the father's efforts—NOT the system's efforts."</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Ongoing Battles Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-6">The Ongoing Battles: Twelve Years and Still Fighting</h2>
          
          <Card className="p-8 bg-orange-50 border-2 border-orange-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4">12 Years of Court Battles</h3>
                <div className="space-y-4 text-charcoal">
                  <p>
                    Since 2012, the family has been fighting in court: over 15 court appearances, over 500 hours of legal representation, custody battles that continue to 2026.
                  </p>
                  <p>
                    The mother keeps changing lawyers. Every time the case moves forward, she changes attorneys. Buys more time. Forces postponements.
                  </p>
                  <p className="font-semibold text-orange-700">
                    "She keeps buying time and changing lawyers. It's not fair for us, the victims."
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-orange-300 pt-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">The Children's Wishes Are Clear</h3>
                <div className="bg-white p-4 rounded border-l-2 border-orange-500">
                  <ul className="space-y-2 text-charcoal">
                    <li>✓ NO contact with their mother</li>
                    <li>✓ Want to END all court proceedings</li>
                    <li>✓ Need therapy and recovery</li>
                    <li>✓ Are traumatized by ongoing legal battles</li>
                  </ul>
                  <p className="mt-4 text-sm text-orange-700 font-semibold">
                    The DPJ confirmed this. The tribunal confirmed this. The judge confirmed this. But the legal battles continue.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-orange-300 pt-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">Political Intimidation</h3>
                <div className="space-y-4 text-charcoal">
                  <p>
                    The father tried to ask his elected representative for help. The politician's office responded with an <strong>UNSIGNED cease-and-desist letter</strong> threatening criminal harassment charges if he contacts them again.
                  </p>
                  <p className="font-semibold text-orange-700">
                    A concerned father asking for help was threatened with arrest. This is suppression of free speech. This is intimidation.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-orange-300 pt-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">IVAC's Refusal to Help Disabled Victim</h3>
                <div className="space-y-4 text-charcoal">
                  <p>
                    The teen is now 18 years old and disabled. He was a victim of violent crime. He should be eligible for crime victim compensation.
                  </p>
                  <p>
                    IVAC refused to help financially. Instead, he's forced to apply for welfare. An advocacy organization (CRARR) is now suing for discrimination.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-orange-300 pt-6">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">The Family in Crisis</h3>
                <div className="bg-white p-4 rounded border-l-2 border-orange-500">
                  <ul className="space-y-2 text-charcoal text-sm">
                    <li>• Family of 9 on welfare</li>
                    <li>• Cannot find housing</li>
                    <li>• Teen broke foot months ago</li>
                    <li>• Ongoing legal issues for 5+ years</li>
                    <li>• All children suffering mental health impacts</li>
                  </ul>
                  <p className="mt-4 text-orange-700 font-semibold">
                    The system that was supposed to help has destroyed this family.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Sharing Section */}
        <div className="bg-amber-orange/10 p-8 rounded-lg border-2 border-amber-orange mb-8">
          <h3 className="text-2xl font-bold text-forest-green mb-6">📢 Share Barran's Story</h3>
          <p className="text-charcoal mb-6">
            Help amplify this story. Share it with your network to raise awareness about systemic failures affecting Indigenous children.
          </p>
          <SocialShareButtons
            title="Barran's Story: The Beginning - Justice for Barran"
            text="Read Barran's story - a 14-year-old stabbed three times and failed by the system. This is why we fight for Indigenous justice and accountability. #JusticeForBarran #EveryChildMatters"
            hashtags={['JusticeForBarran', 'IndigenousRights', 'EveryChildMatters', 'BarransStory']}
            variant="horizontal"
            showLabel={false}
          />
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

        {/* VISUAL TIMELINE WITH PHOTOS */}
        <BarransTimeline />
      </div>
    </div>
  );
}
