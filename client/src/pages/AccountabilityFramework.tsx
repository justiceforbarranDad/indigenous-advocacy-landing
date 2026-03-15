/**
 * ACCOUNTABILITY FRAMEWORK PAGE
 * 6-Month probation system with infographic
 */

export default function AccountabilityFramework() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accountability Framework</h1>
          <p className="text-lg md:text-xl">From Broken Promises to Real Justice</p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/accountability-framework-infographic-PhGU6w5foxDwrThhbf8ENy.webp"
            alt="Accountability Framework Infographic"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold text-forest-green mb-4">The Problem: Broken Promises</h2>
            <p className="text-lg leading-relaxed mb-4">
              Politicians make campaign promises with no formal mechanism to track whether they deliver. Voters must wait 4-5 years to hold them accountable through elections. Meanwhile, communities suffer from systemic failures and broken agreements.
            </p>
            <p className="text-lg leading-relaxed">
              This framework transforms political accountability from an election-day event into a continuous process with real consequences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-charcoal p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-3">PROBLEM</h3>
              <p className="text-sm leading-relaxed">Broken promises, ghosted constituents, no accountability, politicians coast until next election</p>
            </div>
            <div className="bg-white border-l-4 border-amber-orange p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-orange mb-3">SOLUTION</h3>
              <p className="text-sm leading-relaxed">6-month reviews, progress reports, performance metrics, constituent evaluation, transparency</p>
            </div>
            <div className="bg-white border-l-4 border-forest-green p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-forest-green mb-3">CONSEQUENCE</h3>
              <p className="text-sm leading-relaxed">Removal from office, recall votes, employment insurance, real accountability for failure</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Demand Accountability</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
              Fund This Movement
            </a>
            <a href="/electoral-reform-demands" className="inline-block bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3 rounded font-bold transition-colors">
              Electoral Reform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
