/**
 * ALLIES & ORGANIZATIONS PAGE
 * Indigenous organizations, media outlets, and human rights groups to tag and amplify
 */

export default function AlliesAndOrganizations() {
  const indigenousOrganizations = [
    { name: "Assembly of First Nations (AFN)", handle: "@AFN", focus: "National Indigenous leadership" },
    { name: "Métis National Council", handle: "@MétisNationalCouncil", focus: "Métis rights and advocacy" },
    { name: "Inuit Tapiriit Kanatami", handle: "@ITK_news", focus: "Inuit advocacy and rights" },
    { name: "Native Women's Association of Canada", handle: "@NWAC_ANAC", focus: "Indigenous women's rights" },
    { name: "First Nations Child and Family Caring Society", handle: "@FN_CFS", focus: "Child welfare advocacy" },
    { name: "Amnesty International Canada", handle: "@AmnestyCanada", focus: "Human rights advocacy" },
  ];

  const mediaOutlets = [
    { name: "CBC News", handle: "@CBCNews", focus: "National news coverage" },
    { name: "The Globe and Mail", handle: "@globeandmail", focus: "National journalism" },
    { name: "CTV News", handle: "@CTVNews", focus: "National news coverage" },
    { name: "APTN News", handle: "@APTNNews", focus: "Indigenous media" },
    { name: "Maclean's", handle: "@MacleansMag", focus: "Canadian journalism" },
    { name: "The Toronto Star", handle: "@TorontoStar", focus: "Investigative journalism" },
  ];

  const humanRightsOrganizations = [
    { name: "Human Rights Watch", handle: "@hrw", focus: "Global human rights advocacy" },
    { name: "Canadian Human Rights Commission", handle: "@CHRC_CDP", focus: "Federal human rights enforcement" },
    { name: "Amnesty International", handle: "@amnesty", focus: "International human rights" },
    { name: "UN Office of the High Commissioner for Human Rights", handle: "@UN_HRC", focus: "International accountability" },
    { name: "International Indigenous Policy Journal", handle: "@IndigenousPolicy", focus: "Policy research and advocacy" },
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* HERO */}
      <section className="bg-gradient-to-r from-forest-green to-amber-orange py-12 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Allies & Organizations</h1>
          <p className="text-lg md:text-xl">Tag these organizations to amplify your voice for justice</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          {/* INTRODUCTION */}
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-forest-green mb-4">How to Amplify This Movement</h2>
            <p className="text-lg leading-relaxed mb-4">
              Your voice is powerful. When you share this manifesto with Indigenous organizations, media outlets, and human rights groups, you amplify the message exponentially. Below are organizations actively working on systemic justice, child welfare, and Indigenous rights.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              When you post about Electoral Reform, Broken Promises, or Accountability Framework, tag these organizations. Share your story. Demand their support. Together, we create unstoppable momentum.
            </p>
            <p className="text-lg leading-relaxed font-bold text-amber-orange">
              Copy the handle, paste it in your social media post, and tag them directly.
            </p>
          </div>

          {/* INDIGENOUS ORGANIZATIONS */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-forest-green mb-6">Indigenous Organizations & Leaders</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {indigenousOrganizations.map((org, idx) => (
                <div key={idx} className="bg-white border-l-4 border-forest-green p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-forest-green mb-2">{org.name}</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2 text-charcoal">{org.handle}</p>
                  <p className="text-sm text-charcoal/70">{org.focus}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(org.handle);
                      alert(`Copied: ${org.handle}`);
                    }}
                    className="mt-3 bg-forest-green hover:bg-forest-green/90 text-white px-4 py-2 rounded text-sm font-bold transition-colors"
                  >
                    Copy Handle
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* MEDIA OUTLETS */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-orange mb-6">Media Outlets to Tag</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaOutlets.map((outlet, idx) => (
                <div key={idx} className="bg-white border-l-4 border-amber-orange p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-amber-orange mb-2">{outlet.name}</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2 text-charcoal">{outlet.handle}</p>
                  <p className="text-sm text-charcoal/70">{outlet.focus}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(outlet.handle);
                      alert(`Copied: ${outlet.handle}`);
                    }}
                    className="mt-3 bg-amber-orange hover:bg-amber-light text-white px-4 py-2 rounded text-sm font-bold transition-colors"
                  >
                    Copy Handle
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* HUMAN RIGHTS ORGANIZATIONS */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Human Rights Organizations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {humanRightsOrganizations.map((org, idx) => (
                <div key={idx} className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-2">{org.name}</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2 text-charcoal">{org.handle}</p>
                  <p className="text-sm text-charcoal/70">{org.focus}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(org.handle);
                      alert(`Copied: ${org.handle}`);
                    }}
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-bold transition-colors"
                  >
                    Copy Handle
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SUGGESTED HASHTAGS */}
          <div className="bg-forest-green/10 border-4 border-forest-green p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-forest-green mb-6">Suggested Hashtags</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-forest-green mb-3">Indigenous Justice</p>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">#JusticeForBarran</p>
                  <p className="font-mono">#IndigenousJustice</p>
                  <p className="font-mono">#EveryChildMatters</p>
                  <p className="font-mono">#TruthAndReconciliation</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-forest-green mb-3">Systemic Reform</p>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">#ElectoralReform</p>
                  <p className="font-mono">#SystemicChange</p>
                  <p className="font-mono">#Accountability</p>
                  <p className="font-mono">#DemandJustice</p>
                </div>
              </div>
            </div>
          </div>

          {/* CALL TO ACTION */}
          <div className="bg-black text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Amplify?</h2>
            <p className="text-lg mb-6">
              Share the manifesto. Tag these organizations. Tell your story. Together, we demand justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/electoral-reform-demands" className="inline-block bg-amber-orange hover:bg-amber-light text-white px-8 py-3 rounded font-bold transition-colors">
                Electoral Reform
              </a>
              <a href="/broken-promises" className="inline-block bg-forest-green hover:bg-forest-green/90 text-white px-8 py-3 rounded font-bold transition-colors">
                Broken Promises
              </a>
              <a href="/donate" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition-colors">
                Support Movement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
