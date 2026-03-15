import { AlertTriangle, Globe, TrendingUp } from 'lucide-react';

/**
 * INTERNATIONAL MISSING & EXPLOITED CHILDREN CRISIS
 * 
 * It's not just Epstein's island
 * It's systemic everywhere
 * Institutions are complicit
 * 
 * PROTECT YOUR CHILDREN FIRST - SPEAK UP
 */

export default function InternationalChildCrisis() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-red-900 to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            INTERNATIONAL CHILD CRISIS
          </h1>
          <p className="text-xl text-red-200 mb-6">
            Missing, Exploited, and Trafficked Children Worldwide
          </p>
          <div className="flex items-center justify-center gap-2 text-red-300">
            <AlertTriangle size={24} />
            <span className="font-semibold text-lg">It's Not Just Epstein. It's Systemic Everywhere.</span>
          </div>
        </div>
      </section>

      {/* The Scope */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">THE GLOBAL SCALE</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">MISSING CHILDREN</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-red-600">8 MILLION+</p>
                  <p className="text-lg">Children reported missing annually worldwide</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">1.2 MILLION</p>
                  <p className="text-lg">Children trafficked annually</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">300,000</p>
                  <p className="text-lg">Children in sex trafficking in USA alone</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">COUNTRIES AFFECTED</h3>
              <div className="space-y-3">
                <p className="text-lg"><span className="font-bold">USA:</span> 300,000+ children in sex trafficking</p>
                <p className="text-lg"><span className="font-bold">Canada:</span> 50,000+ children in care, systemic abuse</p>
                <p className="text-lg"><span className="font-bold">UK:</span> Grooming gangs, institutional failures</p>
                <p className="text-lg"><span className="font-bold">Australia:</span> Institutional abuse documented</p>
                <p className="text-lg"><span className="font-bold">Global:</span> Trafficking networks in every country</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epstein & Beyond */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-red-300">IT'S NOT JUST EPSTEIN</h2>
          
          <div className="space-y-8">
            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-300">THE EPSTEIN CASE</h3>
              <p className="text-lg leading-relaxed mb-4">
                Jeffrey Epstein was a symptom, not the disease. His island was one location. His network 
                included politicians, celebrities, and powerful people. But he was just one person exploiting 
                children. The real crisis is systemic.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Epstein had connections to powerful people</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Institutions protected him for years</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Many victims never got justice</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>His network was never fully exposed</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-300">THE SYSTEMIC CRISIS</h3>
              <p className="text-lg leading-relaxed mb-4">
                Child exploitation is not isolated incidents. It's systemic networks operating in every country, 
                every city, every institution. Governments know. Institutions know. They do nothing.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Trafficking networks operate openly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Institutions turn a blind eye</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Powerful people are protected</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-300 font-bold">•</span>
                  <span>Victims are blamed and silenced</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Complicity */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">INSTITUTIONAL COMPLICITY</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-600">GOVERNMENT INSTITUTIONS</h3>
              <p className="text-lg leading-relaxed mb-4">
                Governments know about child trafficking and exploitation. They have intelligence agencies, 
                law enforcement, child protection services. Yet children continue to disappear.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Inadequate funding for investigations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Corruption within agencies</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Protection of powerful perpetrators</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Victim-blaming instead of prosecution</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">CHILD WELFARE SYSTEMS</h3>
              <p className="text-lg leading-relaxed mb-4">
                Child welfare agencies are supposed to protect vulnerable children. Instead, they often 
                become pathways for exploitation.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Children in care are vulnerable to trafficking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Foster care system has abuse</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Inadequate monitoring of placements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Perpetrators work within systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-4 text-forest-green">INTERNATIONAL ORGANIZATIONS</h3>
              <p className="text-lg leading-relaxed mb-4">
                UN agencies, NGOs, and international organizations document the crisis but have limited power 
                to stop it. Governments don't enforce international laws protecting children.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>UN Convention on Rights of Child: Not enforced</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>International protocols: Ignored by governments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>NGOs: Underfunded and powerless</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Victims: No real access to justice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Know */}
      <section className="bg-gradient-to-b from-red-900 to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">WHAT WE KNOW</h2>
          
          <div className="bg-charcoal-light p-8 rounded-lg text-white space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-3">Child trafficking is organized</h3>
              <p className="text-lg leading-relaxed">
                Trafficking networks operate like businesses. They have supply chains, distribution networks, 
                and profit margins. This is not random crime—it's organized exploitation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-3">Powerful people are involved</h3>
              <p className="text-lg leading-relaxed">
                Politicians, celebrities, business leaders, and government officials are connected to trafficking 
                networks. They are protected by institutions that benefit from their power.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-3">Governments are complicit</h3>
              <p className="text-lg leading-relaxed">
                Governments know about trafficking. They have intelligence. They choose not to act because 
                powerful people are involved. Institutions protect themselves.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-300 mb-3">Victims are blamed</h3>
              <p className="text-lg leading-relaxed">
                Instead of prosecuting perpetrators, systems blame victims. Children are criminalized for being 
                exploited. Survivors are silenced and discredited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">PROTECT YOUR CHILDREN FIRST</h2>
          
          <div className="bg-gradient-to-r from-red-100 to-amber-100 p-8 rounded-lg border-4 border-red-500">
            <div className="space-y-6 text-lg">
              <p className="text-xl font-bold text-red-600">
                SPEAK UP
              </p>
              <p className="leading-relaxed">
                Don't wait for institutions to protect your children. They won't. Speak up about abuse. Report 
                trafficking. Tell your story. Support other families. Create community accountability.
              </p>

              <p className="text-xl font-bold text-red-600">
                DOCUMENT EVERYTHING
              </p>
              <p className="leading-relaxed">
                Keep records of abuse, neglect, and exploitation. Document institutional failures. Save emails, 
                messages, and evidence. Build a case for accountability.
              </p>

              <p className="text-xl font-bold text-red-600">
                CONNECT WITH OTHERS
              </p>
              <p className="leading-relaxed">
                Find other families fighting the same battles. Share resources, information, and support. 
                Together, you have power. Alone, you are silenced.
              </p>

              <p className="text-xl font-bold text-red-600">
                DEMAND ACCOUNTABILITY
              </p>
              <p className="leading-relaxed">
                Hold institutions accountable. Name the people responsible. Document their failures. Make it 
                impossible for them to hide. Public accountability is the only language institutions understand.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-charcoal mb-4">
              YOUR CHILDREN'S LIVES DEPEND ON YOUR ACTION
            </p>
            <p className="text-xl text-charcoal-light">
              Institutions will not protect them. You must.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
