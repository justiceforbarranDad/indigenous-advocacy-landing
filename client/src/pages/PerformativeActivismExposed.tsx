import { AlertTriangle, TrendingDown, DollarSign } from 'lucide-react';

/**
 * PERFORMATIVE ACTIVISM EXPOSED
 * 
 * Orange Shirt Day Photo Ops
 * Sponsors Who Profit From Performative Gestures
 * Real Action vs. Fake Activism
 * 
 * Where donations should actually go
 */

export default function PerformativeActivismExposed() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-charcoal to-charcoal-light py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            PERFORMATIVE ACTIVISM EXPOSED
          </h1>
          <p className="text-xl text-amber-light mb-6">
            Orange Shirts, Photo Ops, and Empty Promises
          </p>
          <p className="text-lg text-white/90">
            Where the money goes vs. where it should go
          </p>
        </div>
      </section>

      {/* Orange Shirt Day */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">ORANGE SHIRT DAY: THE PERFORMANCE</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">WHAT HAPPENS</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Government leaders wear orange shirts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Photo ops with Indigenous people</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Speeches about reconciliation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Media coverage of "awareness"</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Shirts worn for one day</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Discarded after the event</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">WHAT ACTUALLY CHANGES</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>NOTHING</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Same systemic failures continue</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Same child welfare abuse</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Same institutional protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Same ghosting of families</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Same lack of accountability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-red-100 p-8 rounded-lg border-4 border-amber-orange">
            <h3 className="text-2xl font-bold mb-4 text-charcoal">THE CYCLE</h3>
            <p className="text-lg leading-relaxed">
              Year after year, the same performance. Leaders wear orange shirts. They make speeches about 
              reconciliation and truth. They promise change. Nothing changes. The next year, they do it again. 
              It's a performance designed to make people feel like something is being done, when nothing is.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors & Profiteers */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-light">SPONSORS WHO PROFIT</h2>
          
          <div className="space-y-8">
            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <DollarSign size={28} className="text-amber-orange" />
                Corporate Sponsors
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Major corporations sponsor Orange Shirt Day to improve their image. They donate money, then 
                use the association with Indigenous causes for marketing. It's called "cause washing."
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Corporations get tax deductions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Improve public image</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Use Indigenous causes for marketing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Minimal actual impact on communities</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle size={28} className="text-red-400" />
                Government Agencies
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Government agencies use Orange Shirt Day to show they care about Indigenous issues. Meanwhile, 
                they continue to operate the same systems that harm Indigenous children.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>DYP/DPJ continues removing Indigenous children</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>60%+ of children in care are Indigenous</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Same systemic failures documented</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Orange Shirt Day is cover for inaction</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <TrendingDown size={28} className="text-amber-light" />
                Media Coverage
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Media covers Orange Shirt Day as a feel-good story. They show leaders in orange shirts, 
                smiling with Indigenous people. They don't investigate what actually happens to Indigenous 
                children the rest of the year.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>One day of coverage per year</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>No investigation of systemic failures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>No accountability for institutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Feel-good story replaces real journalism</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Action vs. Performative */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">REAL ACTION vs. PERFORMATIVE ACTIVISM</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-red-500">
              <h3 className="text-2xl font-bold mb-6 text-red-600">PERFORMATIVE (What We See)</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Orange Shirt Day photo ops</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Government speeches about reconciliation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Corporate sponsorships</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Media coverage of awareness</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Symbolic gestures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>No systemic change</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-6 text-forest-green">REAL ACTION (What's Needed)</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">✓</span>
                  <span>Independent investigations of DYP/DPJ</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">✓</span>
                  <span>Prosecution of officials responsible</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">✓</span>
                  <span>Funding for real support services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">✓</span>
                  <span>Systemic reform of child welfare</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">✓</span>
                  <span>Accountability mechanisms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">✓</span>
                  <span>Measurable outcomes for children</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where Money Should Go */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">WHERE DONATIONS SHOULD GO</h2>
          
          <div className="bg-white text-charcoal p-8 rounded-lg space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-forest-green">INTERNATIONAL LAWYERS FUND FOR KIDS OF ALL NATIONS</h3>
              <p className="text-lg leading-relaxed">
                Instead of performative activism, donations should fund real legal support for vulnerable 
                children. International lawyers who will fight institutional abuse, not corporate sponsors 
                looking for good PR.
              </p>
            </div>

            <div className="border-t-2 border-charcoal pt-6">
              <h4 className="text-xl font-bold mb-3">What This Fund Would Do:</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Hire experienced lawyers to fight for children</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Fund investigations into institutional abuse</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Support families fighting DYP/DPJ</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Prosecute officials responsible for abuse</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Document systemic failures</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Create international accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">STOP THE PERFORMANCE</h2>
          
          <div className="bg-gradient-to-r from-amber-100 to-red-100 p-8 rounded-lg border-4 border-amber-orange mb-8">
            <p className="text-xl leading-relaxed mb-6">
              We don't need more photo ops. We don't need more speeches. We don't need more corporate sponsors 
              looking for good PR. We need REAL ACTION.
            </p>
            
            <p className="text-2xl font-bold text-charcoal">
              Real lawyers. Real investigations. Real accountability. Real change.
            </p>
          </div>

          <p className="text-lg text-charcoal-light">
            Stop supporting performative activism. Demand real action. Fund real solutions. Support families 
            fighting for justice.
          </p>
        </div>
      </section>
    </div>
  );
}
