/**
 * 150 YEARS OF BROKEN PROMISES PAGE
 * Timeline of government failures with infographic
 */

export default function BrokenPromises() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">150 Years of Broken Promises</h1>
          <p className="text-lg md:text-xl">From the Indian Act (1876) to Sunday Bloody Sunday (2025)</p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/broken-promises-infographic-ZxxePrPzTzkYG7HYvj9Yrg.webp"
            alt="150 Years of Broken Promises Infographic"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold text-forest-green mb-4">A Pattern of Systemic Betrayal</h2>
            <p className="text-lg leading-relaxed mb-4">
              For 150 years, Canadian governments have made promises to Indigenous peoples. Treaties promised land. Legislation promised rights. Commissions promised reform. Apologies promised change.
            </p>
            <p className="text-lg leading-relaxed">
              The pattern is consistent: promises made, promises broken, systemic failures continue, new promises made, cycle repeats. This infographic documents the most significant broken promises across three eras of Canadian history.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-4 border-charcoal p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-3">1876-1951</h3>
              <p className="text-sm leading-relaxed">Legal Discrimination: Indian Act, residential schools, forced assimilation, cultural genocide, 6,000+ deaths</p>
            </div>
            <div className="bg-white border-4 border-amber-orange p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-orange mb-3">1951-2008</h3>
              <p className="text-sm leading-relaxed">False Promises: Royal Commission, constitutional amendments, empty words, no real change</p>
            </div>
            <div className="bg-white border-4 border-forest-green p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-forest-green mb-3">2008-2026</h3>
              <p className="text-sm leading-relaxed">Systemic Failure Continues: DYP/DPJ failures, ghosting politicians, children still harmed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">No More Broken Promises</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
              Support This Movement
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
