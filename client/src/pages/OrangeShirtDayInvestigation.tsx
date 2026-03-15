import { AlertCircle, DollarSign, Users, Eye } from 'lucide-react';

/**
 * ORANGE SHIRT DAY INVESTIGATION - NEWSPAPER FORMAT
 * 
 * Who owns the Orange Shirt Movement?
 * Where does the money go?
 * Why do leaders wear orange shirts while refusing to help families?
 * 
 * Performative activism while children suffer
 * Photo ops while families are ghosted
 * Hypocrisy documented
 * 
 * Vintage newspaper aesthetic: Black & white (investigation) → Color (accountability)
 */

export default function OrangeShirtDayInvestigation() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Eye className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ORANGE SHIRT DAY INVESTIGATION</h1>
          <p className="text-lg md:text-xl opacity-90">Who Owns the Movement? Where Does the Money Go?</p>
        </div>
      </section>

      {/* Investigation Newspaper - Black & White */}
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
                INVESTIGATIVE REPORT
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-yellow-900 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                ORANGE SHIRT DAY: PHOTO OPS & GHOSTING
              </h2>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-yellow-800">
                Performative Activism While Children Suffer
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-sm leading-relaxed text-yellow-900 mb-4">
                  Every September 30th, First Nations leaders wear orange shirts. They post photos. They make speeches about reconciliation. They talk about "Every Child Matters." They promote Orange Shirt Day.
                </p>
                <p className="text-sm leading-relaxed text-yellow-900 font-bold mb-4">
                  Meanwhile, thousands of families are being ghosted. Children are suffering. Organizations like AFN refuse to help. And the Orange Shirt movement continues as a photo op.
                </p>
              </div>

              {/* Who Owns It */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  WHO OWNS ORANGE SHIRT DAY?
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-yellow-900">FOUNDER: Phyllis Webstad</p>
                    <p className="text-sm text-yellow-900">Northern Secwepemc (Shuswap) author and activist. Created Orange Shirt Day in 2013 based on her personal residential school experience. Now: Founder/CEO and Board Member of Orange Shirt Society.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-yellow-900">ORGANIZATION: Orange Shirt Society</p>
                    <p className="text-sm text-yellow-900">Non-profit formed 2015, located in Williams Lake, BC. Mission: "Growing awareness of the individual, family and community intergenerational impacts of Residential Schools"</p>
                  </div>
                </div>
              </div>

              {/* Follow the Money */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-yellow-800 mb-4">
                  FOLLOW THE MONEY
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-yellow-900">WHERE THE MONEY COMES FROM:</p>
                  <div className="space-y-2 ml-4">
                    {[
                      'Merchandise sales - Orange t-shirts, branded items',
                      'Government funding - Federal grants for events',
                      'Donations - Public donations accepted',
                      'Grants & programs - Orange Shirt Day Fund'
                    ].map((item, i) => (
                      <p key={i} className="text-sm text-yellow-900">• {item}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transparency Issues */}
              <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-800">
                <p className="text-xs font-black tracking-widest text-yellow-800 mb-3">
                  ⚠️ TRANSPARENCY ISSUES
                </p>
                <div className="space-y-2">
                  {[
                    'NO detailed financial statements published',
                    'NO breakdown of revenue vs. expenses',
                    'NO clear donation tracking',
                    'NO staff salary disclosure',
                    'LIMITED program documentation'
                  ].map((item, i) => (
                    <p key={i} className="text-sm text-yellow-900">• {item}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-yellow-900 bg-yellow-100">
              <p className="text-xs font-semibold text-yellow-900/60">⬛ Black & White Edition - Investigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Newspaper - Color */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border-4 border-red-600 shadow-lg">
            {/* Masthead */}
            <div className="border-b-4 border-red-600 bg-white p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-red-600 mb-2">
                ACCOUNTABILITY REPORT
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-forest-green mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                THE HYPOCRISY EXPOSED
              </h2>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-charcoal">
                Orange Shirts While Families Are Ghosted
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* The Question */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-red-600 mb-4">
                  THE CENTRAL QUESTION
                </h3>
                <p className="text-sm leading-relaxed text-charcoal">
                  How can Orange Shirt Day leaders wear orange shirts, make speeches about "Every Child Matters," and promote reconciliation—while organizations like AFN refuse to help vulnerable Indigenous families? While politicians ghost constituents seeking help? While children suffer?
                </p>
              </div>

              {/* The Contradiction */}
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-600">
                <p className="text-xs font-black tracking-widest text-red-700 mb-3">
                  THE CONTRADICTION
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'WHAT THEY SAY', text: '"Every Child Matters" - Orange Shirt Day messaging' },
                    { label: 'WHAT THEY DO', text: 'AFN refuses to help vulnerable Indigenous children. Organizations ghost families seeking support.' },
                    { label: 'WHAT THEY SHOW', text: 'Photo ops on September 30th. Social media posts. Speeches about reconciliation.' },
                    { label: 'WHAT THEY HIDE', text: 'No financial transparency. No accountability. No real action for vulnerable children.' }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-red-700">{item.label}</p>
                      <p className="text-sm text-charcoal">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Impact */}
              <div>
                <h3 className="text-xs md:text-sm font-black tracking-widest text-red-600 mb-4">
                  THE REAL IMPACT
                </h3>
                <div className="space-y-2">
                  {[
                    'Performative activism replaces real action',
                    'Vulnerable families feel abandoned by organizations wearing orange shirts',
                    'Money raised for "reconciliation" lacks transparency',
                    'Children continue to suffer while leaders pose for photos',
                    'Trust in Indigenous organizations eroded'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-black text-lg text-red-600 flex-shrink-0">■</span>
                      <p className="text-sm text-charcoal">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call for Accountability */}
              <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-orange">
                <p className="text-xs font-black tracking-widest text-amber-orange mb-3">
                  WHAT NEEDS TO HAPPEN
                </p>
                <div className="space-y-2">
                  {[
                    'Full financial transparency - Publish detailed financial statements',
                    'Real accountability - Orange Shirt organizations must help vulnerable families',
                    'Action over photo ops - Actual support instead of September 30th posts',
                    'Follow the money - Track where donations go and how they\'re used',
                    'Demand answers - Ask leaders why they ghost families'
                  ].map((item, i) => (
                    <p key={i} className="text-sm text-charcoal">• {item}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-red-600 bg-white">
              <p className="text-xs font-semibold text-charcoal/60">🌈 Color Edition - Accountability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">DEMAND REAL ACCOUNTABILITY</h2>
          <div className="space-y-4 text-lg opacity-90">
            <p>Orange shirts are not enough. Speeches are not enough. Photos are not enough.</p>
            <p className="text-xl font-bold">Real children need real help. Real families need real support.</p>
            <p>Ask your leaders: Why do you wear orange while ghosting families? Where does the money go? When will you actually help?</p>
          </div>
        </div>
      </section>
    </div>
  );
}
