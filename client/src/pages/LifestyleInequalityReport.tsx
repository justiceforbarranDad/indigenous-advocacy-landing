/**
 * LIFESTYLE INEQUALITY REPORT PAGE
 * Comparing politician salaries vs. victim support
 */

export default function LifestyleInequalityReport() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lifestyle Inequality Report</h1>
          <p className="text-lg md:text-xl">Politicians Earn $150k+ While Victims Starve</p>
        </div>
      </section>

      {/* INFOGRAPHIC */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/lifestyle-inequality-infographic-Ws3pcN88h25fWCfEHhRwP7.webp"
            alt="Lifestyle Inequality Report Infographic"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold text-forest-green mb-4">The Inequality Crisis</h2>
            <p className="text-lg leading-relaxed mb-4">
              While politicians enjoy six-figure salaries, full benefits packages, pensions, and luxury lifestyles, Indigenous families and abuse victims struggle with inadequate support, food insecurity, and housing instability.
            </p>
            <p className="text-lg leading-relaxed">
              This report documents the stark disparity and demands resource reallocation toward those who need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-charcoal p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-3">POLITICIAN LUXURY</h3>
              <ul className="text-sm space-y-2">
                <li>• $150k+ annual salary</li>
                <li>• Full benefits & pensions</li>
                <li>• Luxury housing/cars</li>
                <li>• Expense accounts</li>
                <li>• Lifetime benefits</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-amber-orange p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-orange mb-3">VICTIM POVERTY</h3>
              <ul className="text-sm space-y-2">
                <li>• Inadequate DYP/DPJ funding</li>
                <li>• Food insecurity</li>
                <li>• Housing instability</li>
                <li>• Medical bill debt</li>
                <li>• No support systems</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-forest-green p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-forest-green mb-3">DEMAND EQUITY</h3>
              <ul className="text-sm space-y-2">
                <li>• Reasonable politician salaries</li>
                <li>• Fully funded victim support</li>
                <li>• Equal justice for all</li>
                <li>• Community growth</li>
                <li>• Real accountability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Demand Equity Now</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
              Support Victims
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
