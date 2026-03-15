import { Heart, Shield, Users } from 'lucide-react';

/**
 * FIRST NATIONS LEADERS & WAR VETERANS MEMORIAL
 * 
 * Honoring those who fought and died for freedom
 * Showing how current institutions betray their sacrifice
 * Connecting past resistance to present fight for children's rights
 */

export default function FirstNationsMemorial() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-forest-green to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            FIRST NATIONS LEADERS & WAR VETERANS
          </h1>
          <p className="text-xl text-amber-light mb-6">
            Those Who Fought and Died for Freedom
          </p>
          <p className="text-lg text-white/90">
            Their legacy is being betrayed by the institutions they fought to protect us from
          </p>
        </div>
      </section>

      {/* The Fight */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">THEY FOUGHT FOR OUR FREEDOM</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-forest-green">
              <h3 className="text-2xl font-bold mb-4 text-forest-green">WORLD WAR II VETERANS</h3>
              <p className="text-lg leading-relaxed mb-4">
                Indigenous soldiers fought alongside Canadian forces in World War II. They risked their lives 
                to protect freedom, democracy, and human rights. They came home expecting a country that honored 
                their sacrifice.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Over 4,000 Indigenous soldiers served</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Many died on foreign soil</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Survivors faced discrimination at home</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest-green font-bold">•</span>
                  <span>Their sacrifice was forgotten</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange">
              <h3 className="text-2xl font-bold mb-4 text-amber-orange">FIRST NATIONS LEADERS</h3>
              <p className="text-lg leading-relaxed mb-4">
                Indigenous leaders fought for sovereignty, rights, and protection of their people. They resisted 
                colonization, residential schools, and systemic oppression. They built the foundation for 
                Indigenous rights we have today.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Fought against residential school system</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Resisted forced assimilation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Advocated for treaty rights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Died fighting for their people</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Betrayal */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-light">THEIR SACRIFICE IS BEING BETRAYED</h2>
          
          <div className="space-y-8">
            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield size={28} className="text-amber-orange" />
                They Fought For Freedom
              </h3>
              <p className="text-lg leading-relaxed">
                Our grandfathers and uncles died so we could have freedom. They fought against tyranny, 
                oppression, and institutional abuse. They believed in a future where their children and 
                grandchildren would be free.
              </p>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users size={28} className="text-amber-orange" />
                We Are Still Fighting The Same Enemy
              </h3>
              <p className="text-lg leading-relaxed">
                Today, we face the same institutional abuse they fought against. DYP/DPJ is the modern 
                residential school. Government institutions are still removing children from families. 
                Systemic oppression continues under new names.
              </p>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart size={28} className="text-amber-orange" />
                Their Legacy Lives In Our Fight
              </h3>
              <p className="text-lg leading-relaxed">
                We honor their memory by continuing their fight. We refuse to be silent. We refuse to accept 
                institutional abuse. We demand accountability. We fight for our children's freedom, just as 
                they fought for ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Message */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">A MESSAGE TO CURRENT LEADERS</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-forest-green">
            <p className="text-xl leading-relaxed mb-6">
              <span className="font-bold">To all elected officials, government workers, and institutional leaders:</span>
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Our soldiers died for the freedoms you now deny us. Our leaders fought for the rights you now 
              violate. Our ancestors resisted the same institutional abuse you continue today.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              You sit in offices, wear suits, collect pensions—while families suffer. You make decisions that 
              destroy lives, then hide behind institutional protection. You ghost families who beg for help. 
              You retaliate against those who speak up.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our grandparents died so you could have the freedom to do your jobs ethically. Instead, you 
              abuse that freedom to abuse vulnerable families.
            </p>

            <p className="text-2xl font-bold text-forest-green">
              Your children will read about what you did. Your grandchildren will know your names. History 
              will judge you.
            </p>
          </div>
        </div>
      </section>

      {/* The Call */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            REMEMBER YOUR ANCESTORS
          </h2>
          
          <div className="space-y-6 text-white text-lg">
            <p>
              They fought so you could be free. They died so you could have rights. They resisted so you 
              could have a future.
            </p>
            
            <p className="text-2xl font-bold">
              Don't let their sacrifice be in vain.
            </p>
            
            <p>
              Speak up. Fight back. Demand accountability. Protect your children. Honor their memory by 
              refusing to accept institutional abuse.
            </p>
            
            <p className="text-xl font-bold border-t-2 border-white pt-6 mt-6">
              ALL LIFE MATTERS<br/>
              ALL CHILDREN MATTER<br/>
              YOUR VOICE MATTERS
            </p>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">THEIR LEGACY CONTINUES</h2>
          
          <div className="bg-gradient-to-b from-forest-green/10 to-amber-orange/10 p-8 rounded-lg">
            <p className="text-xl leading-relaxed text-center">
              Every time you speak up for justice, you honor their memory.<br/>
              Every time you protect a child, you continue their fight.<br/>
              Every time you demand accountability, you carry their torch.<br/>
              <br/>
              <span className="font-bold text-2xl">Their sacrifice was not in vain.</span><br/>
              <span className="font-bold text-2xl">We will finish what they started.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
