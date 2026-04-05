import React from 'react';

export default function NewspaperSamplePage() {
  // Royalty-free landscape background images
  const backgroundImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop';

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Content overlay with semi-transparent colored sections */}
      <div className="w-full h-full relative">
        {/* Header Section - Full width */}
        <div className="w-full bg-gradient-to-b from-red-600/90 to-red-700/85 text-white p-6 border-b-4 border-yellow-400">
          <h1 className="text-6xl font-black text-center mb-2 drop-shadow-lg">SUNDAY BLOODY SUNDAY</h1>
          <p className="text-center text-2xl font-bold mb-1 drop-shadow">Part Two: Canada's Systemic Injustice</p>
          <p className="text-center text-lg drop-shadow">February 14, 2021 | Justice for Barran | 1,873 DAYS OF SILENCE</p>
        </div>

        {/* Main Content - Full width grid */}
        <div className="grid grid-cols-4 gap-0 h-auto">
          {/* Column 1 - Dark Blue */}
          <div className="bg-blue-900/85 text-white p-6 border-r-2 border-yellow-400">
            <h2 className="text-2xl font-black mb-3 text-yellow-300">SYSTEM FAILURES</h2>
            <p className="text-sm leading-tight mb-4">
              Despite the 2008 apology for residential schools, systemic failures continue to plague Indigenous families across Canada. The Department of Youth Protection (DPJ) continues to remove Indigenous children without adequate support or cultural consideration.
            </p>
            
            <div className="bg-yellow-400/20 p-3 rounded mb-4 border-l-4 border-yellow-400">
              <p className="text-xs font-bold text-yellow-300 mb-1">KEY FACT</p>
              <p className="text-xl font-black">1,873 DAYS</p>
              <p className="text-xs">of injustice without resolution</p>
            </div>

            <h3 className="font-bold text-sm mb-2 text-yellow-300">JORDAN'S PRINCIPLE IGNORED</h3>
            <p className="text-xs leading-tight mb-3">
              Federal legislation mandates no-delay services for First Nations children. Yet implementation remains inadequate across provinces.
            </p>

            <div className="bg-red-600/40 p-2 rounded mb-3">
              <p className="text-xs font-bold">DPJ FAILURES:</p>
              <ul className="text-xs space-y-1 mt-1">
                <li>✗ Inadequate follow-up</li>
                <li>✗ No cultural support</li>
                <li>✗ Education lost</li>
                <li>✗ Mental health destroyed</li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Red */}
          <div className="bg-red-700/85 text-white p-6 border-r-2 border-yellow-400">
            <h2 className="text-2xl font-black mb-3 text-yellow-300">POLITICAL SILENCE</h2>
            <p className="text-sm leading-tight mb-4">
              When constituents reach out for help, elected officials respond with cease-and-desist letters instead of action. This is the reality facing Indigenous families seeking justice.
            </p>

            <div className="bg-black/40 p-3 rounded mb-4">
              <h3 className="font-bold text-sm text-yellow-300 mb-2">FEDERAL LEVEL FAILURE</h3>
              <ul className="text-xs space-y-2">
                <li><span className="font-bold">Sean Fraser (MP)</span> - No response</li>
                <li><span className="font-bold">Annie Koutrakis (MP)</span> - No response</li>
                <li><span className="font-bold">François Legault (Premier)</span> - No response</li>
              </ul>
            </div>

            <div className="bg-black/40 p-3 rounded mb-4">
              <h3 className="font-bold text-sm text-yellow-300 mb-2">PROVINCIAL GHOSTING</h3>
              <p className="text-xs">CAQ ministers and officials maintained complete silence on requests for intervention and inquiry.</p>
            </div>

            <div className="bg-yellow-400/20 p-2 rounded">
              <p className="text-xs font-bold text-yellow-300">CEASE-AND-DESIST WARNING</p>
              <p className="text-xs mt-1">Nov 19, 2023: MNA Céline Haytayan's office sent cease-and-desist threatening criminal harassment complaint.</p>
            </div>
          </div>

          {/* Column 3 - Dark Green */}
          <div className="bg-green-900/85 text-white p-6 border-r-2 border-yellow-400">
            <h2 className="text-2xl font-black mb-3 text-yellow-300">LEGAL PROTECTION</h2>
            <p className="text-sm leading-tight mb-4">
              All public posts are protected expression under Canadian Charter s.2(b) freedom of expression and Indigenous rights jurisprudence.
            </p>

            <div className="bg-yellow-400/20 p-3 rounded mb-4">
              <p className="text-xs font-bold text-yellow-300 mb-1">CHARTER RIGHTS</p>
              <ul className="text-xs space-y-1">
                <li>✓ Freedom of expression</li>
                <li>✓ Indigenous rights</li>
                <li>✓ Responsible communication</li>
                <li>✓ Public interest defense</li>
              </ul>
            </div>

            <h3 className="font-bold text-sm mb-2 text-yellow-300">WHAT CHILDREN DESERVE</h3>
            <ul className="text-xs space-y-1 bg-black/40 p-2 rounded">
              <li>✓ Right to be heard</li>
              <li>✓ Legal representation</li>
              <li>✓ Cultural protection</li>
              <li>✓ Community support</li>
              <li>✓ Justice</li>
              <li>✓ Worry-free future</li>
            </ul>
          </div>

          {/* Column 4 - Orange */}
          <div className="bg-orange-700/85 text-white p-6">
            <h2 className="text-2xl font-black mb-3 text-yellow-300">CALL TO ACTION</h2>
            
            <div className="bg-red-600 p-4 rounded mb-4 border-2 border-yellow-400">
              <p className="text-sm font-black mb-2">DEMAND ACCOUNTABILITY</p>
              <ul className="text-xs space-y-1">
                <li>✓ Independent inquiry</li>
                <li>✓ Jordan's Principle application</li>
                <li>✓ Real support for Indigenous families</li>
                <li>✓ Pension accountability</li>
              </ul>
            </div>

            <div className="bg-yellow-400/20 p-3 rounded mb-4">
              <p className="text-xs font-bold text-yellow-300 mb-2">SUPPORT JUSTICE FOR BARRAN</p>
              <p className="text-xs font-bold">CAD$5 • $10 • $20 • $50 • $100</p>
              <p className="text-xs font-bold mt-1">USD$5 • $10 • $20 • $50 • $100</p>
            </div>

            <div className="bg-black/40 p-3 rounded text-xs">
              <p className="font-bold text-yellow-300 mb-1">RESOURCES</p>
              <ul className="space-y-1 text-xs">
                <li>• CDPDJ Nunavik Inquiry</li>
                <li>• UN Convention on Rights of Child</li>
                <li>• Jordan's Principle</li>
                <li>• Truth & Reconciliation</li>
                <li>• Legal Support Network</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer - Full width */}
        <div className="w-full bg-gradient-to-t from-black/90 to-black/70 text-white p-4 border-t-4 border-yellow-400">
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <p className="font-bold text-yellow-300">The McGovern Foundation of Human Rights</p>
              <p>www.themcgovernfoundationofhumanrights.com</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-yellow-300">SINCE 2021</p>
              <p>Fighting for Justice | Current Truth Before Reconciliation</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-yellow-300">contact@justiceforbarran.com</p>
              <p>438-926-3636 (Masked for Safety)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
