import { BookOpen, Globe, Users, Zap, Award, Lightbulb } from 'lucide-react';

export default function PublishingLegacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            McGovern Arts of Human Rights Foundation
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Publishing & Legacy Vision
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Creating permanent educational infrastructure to fight systemic injustice for generations to come.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-forest-green text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Legacy Vision</h2>
          <p className="text-lg mb-4">
            McGovern Arts of Human Rights Foundation is not just fighting one case. We are building a permanent educational infrastructure that will:
          </p>
          <ul className="space-y-3 text-amber-light text-lg">
            <li>✓ Document systemic failures affecting Indigenous families across Canada</li>
            <li>✓ Create educational materials for schools, universities, and communities</li>
            <li>✓ Publish books that become required reading in human rights courses</li>
            <li>✓ Train advocates and lawyers to fight systemic injustice</li>
            <li>✓ Change laws and policies at federal, provincial, and municipal levels</li>
            <li>✓ Create permanent accountability for governments and institutions</li>
          </ul>
        </div>

        {/* Publishing Strategy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Publishing Strategy</h2>
          
          <div className="space-y-6">
            {/* Book 1 */}
            <div className="bg-white border-l-4 border-forest-green p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <BookOpen className="text-amber-orange flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-forest-green mb-2">
                    "Sunday Bloody Sunday, Part Two: Indigenous Justice Denied"
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    The complete story of systemic abandonment of a First Nations family in Quebec. Documents 15 years of government failure, political intimidation, and institutional negligence.
                  </p>
                  <div className="bg-amber-orange/10 p-4 rounded">
                    <p className="font-semibold text-charcoal mb-2">Target Audience:</p>
                    <p className="text-charcoal-light">High school & university students, human rights advocates, policy makers, Indigenous communities</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-amber-orange font-semibold">
                    <Lightbulb size={20} />
                    <span>Budget: $15,000-25,000 (writing, editing, publishing)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white border-l-4 border-amber-orange p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <BookOpen className="text-forest-green flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-amber-orange mb-2">
                    "Systemic Abandonment: How Governments Fail Indigenous Children"
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    Policy analysis of systemic failures across DPJ, CISSS, education, and mental health systems. Documents how policies designed to protect actually harm Indigenous families.
                  </p>
                  <div className="bg-forest-green/10 p-4 rounded">
                    <p className="font-semibold text-charcoal mb-2">Target Audience:</p>
                    <p className="text-charcoal-light">Policy makers, government officials, social workers, educators, researchers</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-forest-green font-semibold">
                    <Lightbulb size={20} />
                    <span>Budget: $20,000-30,000 (research, analysis, publishing)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <BookOpen className="text-blue-600 flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    "Jordan's Principle Betrayed: Federal Failure to Protect Indigenous Youth"
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    Legal analysis of Jordan's Principle implementation failures. Documents how federal government ignores its legal obligations to Indigenous children in crisis.
                  </p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-charcoal mb-2">Target Audience:</p>
                    <p className="text-charcoal-light">Lawyers, judges, legal scholars, Indigenous rights advocates, UN bodies</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold">
                    <Lightbulb size={20} />
                    <span>Budget: $25,000-35,000 (legal research, international distribution)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 4 */}
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <BookOpen className="text-red-600 flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">
                    "The Cost of Silence: Survivor Testimonies from Systemic Injustice"
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    Anthology of stories from Indigenous families experiencing systemic failure. Raw, powerful testimonies that expose the human cost of government negligence.
                  </p>
                  <div className="bg-red-50 p-4 rounded">
                    <p className="font-semibold text-charcoal mb-2">Target Audience:</p>
                    <p className="text-charcoal-light">General public, educators, survivors, advocates, international audiences</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-red-600 font-semibold">
                    <Lightbulb size={20} />
                    <span>Budget: $20,000-25,000 (collection, editing, publishing)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 5 */}
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <BookOpen className="text-green-600 flex-shrink-0" size={28} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    "Educational Justice: Curriculum for Human Rights in Schools"
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    Complete curriculum package for high schools and universities. Lesson plans, case studies, discussion guides, and assessment tools for teaching systemic injustice.
                  </p>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-charcoal mb-2">Target Audience:</p>
                    <p className="text-charcoal-light">Teachers, educators, school boards, universities, youth organizations</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
                    <Lightbulb size={20} />
                    <span>Budget: $30,000-40,000 (curriculum development, teacher training)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publishing Partners */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Publishing Partners</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-forest-green/10 p-6 rounded border-l-4 border-forest-green">
              <h4 className="text-xl font-bold text-forest-green mb-3">Indigenous Publishers</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Fernwood Publishing (Indigenous focus)</li>
                <li>✓ Between the Lines (social justice)</li>
                <li>✓ Breakwater Books (Atlantic Canada)</li>
                <li>✓ Talon Books (Canadian independent)</li>
              </ul>
            </div>

            <div className="bg-amber-orange/10 p-6 rounded border-l-4 border-amber-orange">
              <h4 className="text-xl font-bold text-amber-orange mb-3">Academic Publishers</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ University of Toronto Press</li>
                <li>✓ University of British Columbia Press</li>
                <li>✓ McGill-Queen's University Press</li>
                <li>✓ Wilfrid Laurier University Press</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-600 mb-3">International Publishers</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Routledge (global reach)</li>
                <li>✓ Oxford University Press</li>
                <li>✓ Cambridge University Press</li>
                <li>✓ UN Publications (human rights)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-600 mb-3">Self-Publishing Options</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Amazon KDP (global distribution)</li>
                <li>✓ IngramSpark (bookstore placement)</li>
                <li>✓ Blurb (print-on-demand)</li>
                <li>✓ Open access (free online distribution)</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-orange/10 p-6 rounded border-l-4 border-amber-orange">
            <p className="text-charcoal">
              <strong>Strategy:</strong> Publish with combination of academic publishers (credibility, international reach) and independent publishers (speed, control, Indigenous focus). Make all books available in print, digital, and open-access formats.
            </p>
          </div>
        </div>

        {/* Educational Distribution */}
        <div className="bg-white border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Educational Distribution</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-orange/10 p-6 rounded">
              <h4 className="text-xl font-bold text-amber-orange mb-4">School Distribution</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Donate free copies to all Quebec schools</li>
                <li>✓ Provide free curriculum materials to teachers</li>
                <li>✓ Host author visits and student discussions</li>
                <li>✓ Create student advocacy groups</li>
                <li>✓ Fund student research projects</li>
              </ul>
            </div>

            <div className="bg-forest-green/10 p-6 rounded">
              <h4 className="text-xl font-bold text-forest-green mb-4">University Distribution</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Donate copies to law, social work, education programs</li>
                <li>✓ Fund university research chairs</li>
                <li>✓ Support graduate student research</li>
                <li>✓ Host academic conferences</li>
                <li>✓ Create scholarship programs</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded">
              <h4 className="text-xl font-bold text-blue-600 mb-4">Community Distribution</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Free distribution to Indigenous communities</li>
                <li>✓ Public library donations</li>
                <li>✓ Community center programs</li>
                <li>✓ Youth organization partnerships</li>
                <li>✓ International human rights networks</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded">
              <h4 className="text-xl font-bold text-green-600 mb-4">Digital Distribution</h4>
              <ul className="space-y-2 text-charcoal-light">
                <li>✓ Free PDF downloads on website</li>
                <li>✓ Open-access academic databases</li>
                <li>✓ Audiobook versions</li>
                <li>✓ Video documentaries</li>
                <li>✓ Podcast series</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white border-4 border-forest-green rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Measuring Legacy Impact</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Award className="text-amber-orange flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Educational Reach</h4>
                <p className="text-charcoal-light">
                  Track how many students, teachers, and educators use our materials. Goal: 50,000+ students per year by year 5.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">International Impact</h4>
                <p className="text-charcoal-light">
                  Track international adoption of our materials. Goal: Books used in 20+ countries by year 5.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Users className="text-amber-orange flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Advocate Training</h4>
                <p className="text-charcoal-light">
                  Track how many advocates, lawyers, and activists are trained through our programs. Goal: 1,000+ trained by year 5.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Zap className="text-forest-green flex-shrink-0" size={28} />
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Policy Change</h4>
                <p className="text-charcoal-light">
                  Track laws, policies, and institutional reforms influenced by our work. Goal: 10+ major policy changes by year 5.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-amber-orange/10 border-4 border-amber-orange rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-amber-orange mb-8">Publishing Timeline</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-bold text-charcoal">Year 1: Foundation Setup & First Book</h4>
                <p className="text-charcoal-light">Establish foundation, hire team, complete first book ("Sunday Bloody Sunday, Part Two")</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-bold text-charcoal">Year 2: Expand Publishing</h4>
                <p className="text-charcoal-light">Publish 2-3 more books, launch school distribution, establish university partnerships</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h4 className="font-bold text-charcoal">Year 3: Educational Programs</h4>
                <p className="text-charcoal-light">Launch curriculum programs, train educators, establish international partnerships</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h4 className="font-bold text-charcoal">Year 4-5: Scale & Impact</h4>
                <p className="text-charcoal-light">Reach 50,000+ students annually, influence major policy changes, expand internationally</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Statement */}
        <div className="bg-forest-green text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Legacy Promise</h2>
          
          <p className="text-lg mb-6">
            McGovern Arts of Human Rights Foundation will create a permanent educational legacy that:
          </p>
          
          <ul className="space-y-3 text-amber-light text-lg">
            <li>✓ Makes systemic injustice impossible to ignore</li>
            <li>✓ Trains the next generation of human rights advocates</li>
            <li>✓ Changes laws and policies that harm Indigenous families</li>
            <li>✓ Creates accountability for governments and institutions</li>
            <li>✓ Ensures that future generations learn from our fight</li>
            <li>✓ Builds a world where Indigenous children are protected, not abandoned</li>
          </ul>

          <p className="mt-8 text-amber-light text-lg font-bold">
            This is not just a foundation. This is a movement. This is a legacy that will outlive us all.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            Building permanent educational infrastructure for justice and accountability
          </p>
        </div>
      </div>
    </div>
  );
}
