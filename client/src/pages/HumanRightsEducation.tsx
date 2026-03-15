import { BookOpen, Users, AlertCircle, Heart } from 'lucide-react';

/**
 * HUMAN RIGHTS EDUCATION FOR NEXT GENERATION
 * 
 * What schools should teach but don't
 * Real life subjects: systemic abuse, institutional violence, global solidarity
 * Multi-ethnic crisis: First Nations, Asian, Black, immigrant, poor, disabled children
 * Present-day abuse: happening RIGHT NOW in the system
 * 
 * Before our elders are gone, teach the truth
 */

export default function HumanRightsEducation() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* Header */}
      <section className="bg-gradient-to-b from-forest-green to-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            HUMAN RIGHTS EDUCATION
          </h1>
          <p className="text-xl text-amber-light mb-6">
            What the Next Generation Needs to Know
          </p>
          <p className="text-lg text-white/90">
            Real life subjects. Real accountability. Before our elders are gone.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">WHAT SCHOOLS DON'T TEACH</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-orange mb-8">
            <h3 className="text-2xl font-bold mb-4">Current Education System</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>History without context (residential schools mentioned, but not the ongoing abuse)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>Civics that glorifies government institutions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>Human rights as abstract concepts, not lived reality</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>No teaching about systemic abuse happening NOW</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>No education about institutional violence</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>No multi-ethnic perspective on global crises</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-orange font-bold">✗</span>
                <span>No teaching about how to recognize and fight abuse</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-amber-100 p-8 rounded-lg border-4 border-red-500">
            <p className="text-xl leading-relaxed">
              <span className="font-bold">Result:</span> Students graduate without understanding the real world. 
              They don't know their rights. They don't know how to recognize abuse. They don't understand 
              systemic oppression. They can't protect themselves or their children.
            </p>
          </div>
        </div>
      </section>

      {/* What Should Be Taught */}
      <section className="bg-charcoal text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-light">WHAT NEEDS TO BE TAUGHT</h2>
          
          <div className="space-y-8">
            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle size={28} className="text-red-400" />
                SYSTEMIC ABUSE - HAPPENING NOW
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Students need to understand that abuse is not just individual acts. It's systemic. Institutions 
                abuse children. Governments protect abusers. This is happening RIGHT NOW to their peers.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>DYP/DPJ removes children and calls it protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Child trafficking networks operate openly</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Governments know and do nothing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Powerful people are protected</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Victims are blamed and silenced</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users size={28} className="text-amber-orange" />
                MULTI-ETHNIC SOLIDARITY
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                This crisis affects ALL vulnerable children: First Nations, Asian, Black, immigrant, poor, 
                disabled. Students need to understand global solidarity and intersectional oppression.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>First Nations children: 60%+ of children in care</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Asian children: Trafficked, exploited, invisible</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Black children: Systemic racism in child welfare</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Immigrant children: No protection, no rights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-orange font-bold">•</span>
                  <span>Poor children: Targeted by system</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <BookOpen size={28} className="text-amber-light" />
                REAL HISTORY & ACCOUNTABILITY
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Students need to learn the real history: residential schools, Sixties Scoop, and the ongoing 
                abuse. They need to understand that institutions repeat the same patterns with new names.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Residential schools: 150,000+ children harmed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Sixties Scoop: 20,000+ Indigenous children stolen</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>DYP/DPJ: Modern version of same abuse</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Pattern repeats: Renaming agencies, no accountability</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-light font-bold">•</span>
                  <span>Officials responsible: Never prosecuted</span>
                </li>
              </ul>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart size={28} className="text-red-400" />
                YOUR RIGHTS & HOW TO PROTECT YOURSELF
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Students need practical knowledge: What are your rights? How do you recognize abuse? What do 
                you do if you or someone you know is being abused?
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Your right to bodily autonomy and safety</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>How to recognize institutional abuse</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>How to document abuse (keep records)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Who to trust (not always institutions)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>How to support others being abused</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before Our Elders Are Gone */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">BEFORE OUR ELDERS ARE GONE</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-forest-green">
            <p className="text-xl leading-relaxed mb-6">
              Our elders have lived through residential schools, systemic oppression, and institutional abuse. 
              They have wisdom. They have stories. They have knowledge about how to survive and resist.
            </p>
            
            <p className="text-xl leading-relaxed mb-6">
              Before they are gone, we need to teach the next generation:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">•</span>
                <span>Their stories of resistance and survival</span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">•</span>
                <span>Their knowledge of traditional ways and values</span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">•</span>
                <span>Their understanding of community and family</span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">•</span>
                <span>Their lessons about fighting institutional abuse</span>
              </li>
              <li className="flex gap-2">
                <span className="text-forest-green font-bold">•</span>
                <span>Their vision of justice and accountability</span>
              </li>
            </ul>

            <p className="text-lg font-bold text-forest-green">
              If we don't teach this NOW, it's lost forever. The next generation won't know how to fight. 
              They won't know their history. They won't know their power.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            EDUCATE THE NEXT GENERATION
          </h2>
          
          <div className="space-y-6 text-white text-lg">
            <p>
              Don't wait for schools to teach real human rights. Teach your children yourself. Tell them 
              your stories. Show them how to recognize abuse. Teach them their rights. Teach them to fight.
            </p>
            
            <p className="text-2xl font-bold">
              The next generation is watching. What will you teach them?
            </p>
            
            <p className="border-t-2 border-white pt-6 mt-6">
              Teach them that all life matters. Teach them that all children matter. Teach them that their 
              voice matters. Teach them to never accept institutional abuse. Teach them to demand accountability.
            </p>

            <p className="text-xl font-bold">
              LOVE DAD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
