/**
 * ELECTORAL REFORM DEMANDS PAGE
 * 4-Point proposal with infographic
 */

export default function ElectoralReformDemands() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Electoral Reform Demands</h1>
          <p className="text-lg md:text-xl">A 4-Point Blueprint for Political Accountability</p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/electoral-reform-infographic-PH8UPcYK95e2XnbFGzbYLt.webp"
            alt="Electoral Reform Demands Infographic"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="bg-white border-l-4 border-forest-green p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-forest-green mb-4">1. NO MORE FLOOR CROSSING</h2>
            <p className="text-lg leading-relaxed">Politicians who switch parties forfeit their seats immediately. Voter intent must be respected.</p>
          </div>

          <div className="bg-white border-l-4 border-amber-orange p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-amber-orange mb-4">2. 6-MONTH PERFORMANCE REVIEWS</h2>
            <p className="text-lg leading-relaxed">Campaign promises become measurable objectives. Progress reports are public. Constituents evaluate performance directly.</p>
          </div>

          <div className="bg-white border-l-4 border-red-600 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-red-600 mb-4">3. TERMINATION FOR NON-PERFORMANCE</h2>
            <p className="text-lg leading-relaxed">After two consecutive reviews showing minimal progress, a recall mechanism is triggered. Communities can remove politicians who fail to deliver.</p>
          </div>

          <div className="bg-white border-l-4 border-forest-green p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-forest-green mb-4">4. EMPLOYMENT INSURANCE FOR FAILED POLITICIANS</h2>
            <p className="text-lg leading-relaxed">Removed politicians receive 12 months EI, mandatory retraining, and 2-year restriction from industries they regulated.</p>
          </div>
        </div>
      </section>

      {/* ELON MUSK QUOTE */}
      <section className="py-12 bg-forest-green/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-l-4 border-amber-orange p-8 rounded-lg shadow-md italic text-center">
            <p className="text-2xl font-bold text-forest-green mb-4">
              "You don't need to go to university or college to learn stuff."
            </p>
            <p className="text-lg text-charcoal/70 mb-2">— Elon Musk</p>
            <p className="text-base text-charcoal/60">
              Learn about systemic injustice. Educate yourself about your rights. Understand how government works. Demand accountability. No formal education required to fight for justice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Demand Electoral Reform</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
              Fund This Movement
            </a>
            <a href="/parliamentary-reform-manifesto" className="inline-block bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3 rounded font-bold transition-colors">
              Full Manifesto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
