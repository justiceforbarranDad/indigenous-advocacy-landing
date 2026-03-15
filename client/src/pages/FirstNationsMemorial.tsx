import { Heart, Shield, Users } from 'lucide-react';

/**
 * FIRST NATIONS LEADERS & WAR VETERANS MEMORIAL - NEWSPAPER FORMAT
 * 
 * Honoring those who fought and died for freedom
 * Showing how current institutions betray their sacrifice
 * Connecting past resistance to present fight for children's rights
 * 
 * Vintage newspaper aesthetic: Black & white (historical) → Color (present day)
 */

export default function FirstNationsMemorial() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FIRST NATIONS LEADERS & WAR VETERANS</h1>
          <p className="text-lg md:text-xl opacity-90">Those Who Fought and Died for Freedom</p>
        </div>
      </section>

      {/* Historical Newspaper - Black & White */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="bg-yellow-50 border-4 border-yellow-900 shadow-xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
            }}
          >
            {/* Masthead */}
            <div className="border-b-4 border-yellow-900 bg-yellow-100 p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-yellow-800 mb-2">
                HISTORICAL RECORD
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-yellow-900 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                THEY FOUGHT FOR OUR FREEDOM
              </h2>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-yellow-800">
                World War II Veterans & First Nations Leaders
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* WWII Veterans */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  WORLD WAR II INDIGENOUS SOLDIERS
                </h3>
                <p className="text-sm leading-relaxed text-yellow-900 mb-4">
                  Indigenous soldiers fought alongside Canadian forces in World War II. They risked their lives to protect freedom, democracy, and human rights. They came home expecting a country that honored their sacrifice.
                </p>
                <div className="space-y-2">
                  {[
                    'Over 4,000 Indigenous soldiers served',
                    'Many died on foreign soil',
                    'Survivors faced discrimination at home',
                    'Their sacrifice was forgotten'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-yellow-800 flex-shrink-0">■</span>
                      <p className="text-sm text-yellow-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* First Nations Leaders */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  FIRST NATIONS LEADERS & RESISTANCE
                </h3>
                <p className="text-sm leading-relaxed text-yellow-900 mb-4">
                  Indigenous leaders fought for sovereignty, rights, and protection of their people. They resisted colonization, residential schools, and systemic oppression. They built the foundation for Indigenous rights we have today.
                </p>
                <div className="space-y-2">
                  {[
                    'Fought against residential school system',
                    'Resisted forced assimilation',
                    'Advocated for treaty rights',
                    'Died fighting for their people'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-yellow-800 flex-shrink-0">■</span>
                      <p className="text-sm text-yellow-900">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-yellow-900 bg-yellow-100">
              <p className="text-xs font-semibold text-yellow-900/60">⬛ Black & White Edition - Historical Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Newspaper - Color */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border-4 border-amber-orange shadow-lg">
            {/* Masthead */}
            <div className="border-b-4 border-amber-orange bg-white p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-amber-orange mb-2">
                PRESENT DAY ACCOUNTABILITY REPORT
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-forest-green mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                THEIR SACRIFICE IS BEING BETRAYED
              </h2>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-charcoal">
                2026: The Reckoning
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* They Fought For Freedom */}
              <div className="flex gap-4">
                <Shield size={32} className="text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs md:text-sm font-black tracking-widest text-amber-orange mb-2">
                    THEY FOUGHT FOR FREEDOM
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal">
                    Our grandfathers and uncles died so we could have freedom. They fought against tyranny, oppression, and institutional abuse. They believed in a future where their children and grandchildren would be free.
                  </p>
                </div>
              </div>

              {/* We Are Still Fighting */}
              <div className="flex gap-4">
                <Users size={32} className="text-forest-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs md:text-sm font-black tracking-widest text-forest-green mb-2">
                    WE ARE STILL FIGHTING THE SAME ENEMY
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal">
                    Today, we face the same institutional abuse they fought against. DYP/DPJ is the modern residential school. Government institutions are still removing children from families. Systemic oppression continues under new names.
                  </p>
                </div>
              </div>

              {/* Their Legacy */}
              <div className="flex gap-4">
                <Heart size={32} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs md:text-sm font-black tracking-widest text-red-600 mb-2">
                    THEIR LEGACY LIVES IN OUR FIGHT
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal">
                    We honor their memory by continuing their fight. We refuse to be silent. We refuse to accept institutional abuse. We demand accountability. We fight for our children's freedom, just as they fought for ours.
                  </p>
                </div>
              </div>

              {/* Message to Leaders */}
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
                <p className="text-xs font-black tracking-widest text-red-700 mb-2">
                  MESSAGE TO CURRENT LEADERS
                </p>
                <p className="text-sm leading-relaxed text-charcoal mb-3">
                  Our soldiers died for the freedoms you now deny us. Our leaders fought for the rights you now violate. Our ancestors resisted the same institutional abuse you continue today.
                </p>
                <p className="text-sm leading-relaxed text-charcoal mb-3">
                  You sit in offices, wear suits, collect pensions—while families suffer. You make decisions that destroy lives, then hide behind institutional protection. You ghost families who beg for help. You retaliate against those who speak up.
                </p>
                <p className="text-sm font-bold text-forest-green">
                  Your children will read about what you did. Your grandchildren will know your names. History will judge you.
                </p>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-amber-orange bg-white">
              <p className="text-xs font-semibold text-charcoal/60">🌈 Color Edition - Present Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">REMEMBER YOUR ANCESTORS</h2>
          <div className="space-y-4 text-lg opacity-90">
            <p>They fought so you could be free. They died so you could have rights. They resisted so you could have a future.</p>
            <p className="text-2xl font-bold">Don't let their sacrifice be in vain.</p>
            <p>Speak up. Fight back. Demand accountability. Protect your children. Honor their memory by refusing to accept institutional abuse.</p>
            <div className="border-t border-white pt-6 mt-6">
              <p className="text-xl font-bold">ALL LIFE MATTERS<br/>ALL CHILDREN MATTER<br/>YOUR VOICE MATTERS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Footer */}
      <section className="py-12 px-4 bg-cream text-center border-t-4 border-forest-green">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-forest-green">
            <span className="font-bold">THEIR LEGACY CONTINUES</span><br/><br/>
            Every time you speak up for justice, you honor their memory.<br/>
            Every time you protect a child, you continue their fight.<br/>
            Every time you demand accountability, you carry their torch.<br/><br/>
            <span className="font-bold text-xl">Their sacrifice was not in vain.<br/>We will finish what they started.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
