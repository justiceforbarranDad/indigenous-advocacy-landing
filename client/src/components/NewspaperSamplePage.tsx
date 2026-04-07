import React from 'react';

export default function NewspaperSamplePage() {
  return (
    <div className="min-h-screen bg-white p-8 relative overflow-hidden">
      {/* Background: Native feet artwork (watermark) */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="50" cy="30" r="20" fill="black"/><ellipse cx="50" cy="60" rx="8" ry="15" fill="black"/><ellipse cx="40" cy="75" rx="6" ry="10" fill="black"/><ellipse cx="50" cy="80" rx="6" ry="10" fill="black"/><ellipse cx="60" cy="75" rx="6" ry="10" fill="black"/><circle cx="150" cy="100" r="20" fill="black"/><ellipse cx="150" cy="130" rx="8" ry="15" fill="black"/><ellipse cx="140" cy="145" rx="6" ry="10" fill="black"/><ellipse cx="150" cy="150" rx="6" ry="10" fill="black"/><ellipse cx="160" cy="145" rx="6" ry="10" fill="black"/></svg>')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-b-4 border-red-600 pb-4 mb-6">
          <h1 className="text-5xl font-bold text-center mb-2">SUNDAY BLOODY SUNDAY</h1>
          <p className="text-center text-gray-600 text-lg">Part Two: Canada's Systemic Injustice</p>
          <p className="text-center text-gray-500 text-sm mt-2">February 14, 2021 | Justice for Barran</p>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-2">SYSTEM FAILURES</h2>
              <p className="text-sm text-gray-800 leading-tight">
                Despite the 2008 apology for residential schools, systemic failures continue to plague Indigenous families across Canada. The Department of Youth Protection (DPJ) continues to remove Indigenous children without adequate support or cultural consideration.
              </p>
            </div>

            <div className="bg-gray-100 p-3 border-l-4 border-red-600">
              <p className="text-xs font-bold text-red-600 mb-1">KEY FACT</p>
              <p className="text-sm font-bold">1,873 DAYS</p>
              <p className="text-xs text-gray-700">of injustice without resolution</p>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-1">JORDAN'S PRINCIPLE IGNORED</h3>
              <p className="text-xs text-gray-800">
                Federal legislation mandates no-delay services for First Nations children. Yet implementation remains inadequate across provinces.
              </p>
            </div>
          </div>

          {/* Column 2 - Main story */}
          <div className="space-y-4 border-l-2 border-r-2 border-gray-300 px-4">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-3">POLITICAL SILENCE</h2>
              <p className="text-sm text-gray-800 leading-tight mb-3">
                When constituents reach out for help, elected officials respond with cease-and-desist letters instead of action. This is the reality facing Indigenous families seeking justice.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="bg-gray-300 h-40 flex items-center justify-center rounded">
              <span className="text-gray-600 text-sm">📸 Image: Officials Ghosted</span>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-1 text-red-600">FEDERAL LEVEL FAILURE</h3>
              <p className="text-xs text-gray-800 mb-2">
                Multiple MPs ignored requests for intervention. No response. No action. No accountability.
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Sean Fraser (MP) - No response</li>
                <li>• Annie Koutrakis (MP) - No response</li>
                <li>• François Legault (Premier) - No response</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-2">PROVINCIAL LEVEL GHOSTED</h2>
              <p className="text-sm text-gray-800 leading-tight">
                Provincial ministers and officials have maintained complete silence on requests for intervention and inquiry into systemic failures.
              </p>
            </div>

            <div className="bg-red-50 p-3 border-l-4 border-red-600">
              <p className="text-xs font-bold text-red-600 mb-1">CALL TO ACTION</p>
              <p className="text-sm font-bold">DEMAND ACCOUNTABILITY</p>
              <p className="text-xs text-gray-700 mt-1">
                Independent inquiry. Jordan's Principle application. Real support for Indigenous families.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-1">WHAT CHILDREN DESERVE</h3>
              <ul className="text-xs text-gray-800 space-y-1">
                <li>✓ Right to be heard</li>
                <li>✓ Legal representation</li>
                <li>✓ Cultural protection</li>
                <li>✓ Community support</li>
                <li>✓ Justice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t-2 border-gray-300 text-center">
          <p className="text-xs text-gray-600">
            <span className="font-bold">The McGovern Foundation of Human Rights</span> | 
            <span className="ml-2">www.themcgovernfoundationofhumanrights.com</span> | 
            <span className="ml-2">contact@justiceforbarran.com</span>
          </p>
          <p className="text-xs text-red-600 font-bold mt-2">
            ❤️ SUPPORT JUSTICE FOR BARRAN | CAD$5 • $10 • $20 • $50 • $100
          </p>
        </div>
      </div>
    </div>
  );
}
