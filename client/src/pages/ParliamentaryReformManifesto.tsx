/**
 * PARLIAMENTARY REFORM MANIFESTO PAGE
 * Complete blueprint for systemic change
 */

export default function ParliamentaryReformManifesto() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Parliamentary Reform Manifesto</h1>
          <p className="text-lg md:text-xl">Blueprint for Real Democracy & Indigenous Justice</p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/parliamentary-reform-infographic-KUeVqPGty3T29dwdo3nHLC.webp"
            alt="Parliamentary Reform Manifesto Infographic"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold text-forest-green mb-4">A Vision for Real Democracy</h2>
            <p className="text-lg leading-relaxed mb-4">
              The current parliamentary system is broken. Corruption is endemic. Indigenous voices are marginalized. Accountability is nonexistent. This manifesto outlines a complete blueprint for systemic reform that centers Indigenous rights, ensures real accountability, and creates genuine democracy.
            </p>
            <p className="text-lg leading-relaxed">
              This is not incremental change. This is systemic transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-l-4 border-charcoal p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-3">CURRENT SYSTEM BROKEN</h3>
              <ul className="text-sm space-y-2">
                <li>• Corruption endemic</li>
                <li>• Indigenous marginalized</li>
                <li>• No accountability</li>
                <li>• Systemic racism</li>
                <li>• Communities ignored</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-amber-orange p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-orange mb-3">SYSTEMIC REFORM NEEDED</h3>
              <ul className="text-sm space-y-2">
                <li>• Electoral reform</li>
                <li>• Indigenous representation</li>
                <li>• Accountability mechanisms</li>
                <li>• Transparency requirements</li>
                <li>• Planning & transition</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-forest-green p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-forest-green mb-3">REAL DEMOCRACY ACHIEVED</h3>
              <ul className="text-sm space-y-2">
                <li>• Indigenous voices heard</li>
                <li>• Accountability working</li>
                <li>• Justice served</li>
                <li>• Communities thriving</li>
                <li>• Real democracy</li>
              </ul>
            </div>
          </div>

          <div className="bg-forest-green/10 border-4 border-forest-green p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-forest-green mb-4">Key Reform Pillars</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg text-forest-green mb-2">Electoral Reform</h4>
                <p className="text-sm">No floor crossing, 6-month reviews, performance accountability, recall mechanisms</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-forest-green mb-2">Indigenous Representation</h4>
                <p className="text-sm">Guaranteed seats for Indigenous leaders, treaty recognition, land rights protection</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-forest-green mb-2">Accountability Mechanisms</h4>
                <p className="text-sm">Public performance tracking, constituent evaluation, removal for non-performance</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-forest-green mb-2">Transparency Requirements</h4>
                <p className="text-sm">All government actions public, funding tracked, decisions documented</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Reform Movement</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
              Fund This Vision
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
