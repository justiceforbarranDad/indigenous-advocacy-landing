import { Heart, FileText, Megaphone, Users, Scale, Globe } from 'lucide-react';

export default function DonationImpact() {
  const impactAreas = [
    {
      icon: <Scale size={32} />,
      title: 'Legal Representation',
      percentage: 40,
      amount: '$40,000',
      description: 'Professional legal fees for independent inquiry, court proceedings, and expert testimony. Securing pro bono lawyers and covering their administrative costs.',
      items: [
        'Independent legal counsel',
        'Court filing fees',
        'Expert witness testimony',
        'Legal research and documentation'
      ]
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Media & Advocacy Campaign',
      percentage: 25,
      amount: '$25,000',
      description: 'Professional video production, podcast hosting, social media amplification, and media outreach to ensure the story reaches decision-makers and the public.',
      items: [
        'Video production and editing',
        'Podcast production and hosting',
        'Social media advertising',
        'Press release distribution',
        'Media kit creation'
      ]
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Government Accountability Campaign',
      percentage: 15,
      amount: '$15,000',
      description: 'Direct outreach to elected officials, government agencies, and international bodies. Travel costs for in-person advocacy and documentation of systemic failures.',
      items: [
        'Travel to government offices',
        'Documentation and evidence gathering',
        'International advocacy (UN, human rights bodies)',
        'FOIA requests and legal discovery',
        'Public awareness campaigns'
      ]
    },
    {
      icon: <Users size={32} />,
      title: 'Support for Affected Families',
      percentage: 12,
      amount: '$12,000',
      description: 'Direct support for Barran and other families affected by systemic failures. Mental health services, education support, and emergency assistance.',
      items: [
        'Mental health counseling',
        'Education support and tutoring',
        'Emergency financial assistance',
        'Family support services',
        'Trauma-informed care'
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'International & Indigenous Rights',
      percentage: 5,
      amount: '$5,000',
      description: 'Support for international human rights organizations, Indigenous advocacy groups, and legal frameworks protecting children\'s rights globally.',
      items: [
        'UN submissions and advocacy',
        'Indigenous rights organizations',
        'International human rights bodies',
        'Research on systemic failures',
        'Global advocacy network'
      ]
    },
    {
      icon: <FileText size={32} />,
      title: 'Platform & Operations',
      percentage: 3,
      amount: '$3,000',
      description: 'Website hosting, domain registration, email services, and operational costs to keep the campaign running 24/7.',
      items: [
        'Website hosting and maintenance',
        'Domain registration',
        'Email and communication services',
        'Database and security',
        'Technical support'
      ]
    }
  ];

  const totalGoal = 100000;
  const currentRaised = 47500;

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-6 border-b-8 border-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4">WHERE YOUR DONATION GOES</h1>
          <div className="h-1 bg-white my-3 w-32"></div>
          <p className="text-base md:text-lg tracking-wide mb-2">Transparent Breakdown of Campaign Funding</p>
          <p className="text-xs md:text-sm tracking-widest">MARCH 29, 2026</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* CAMPAIGN GOAL */}
        <div className="bg-gray-50 border-4 border-black p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Campaign Goal: $100,000</h2>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-bold">Progress: ${currentRaised.toLocaleString()}</span>
              <span className="font-bold">{Math.round((currentRaised / totalGoal) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-300 border-2 border-black h-8">
              <div 
                className="bg-black h-full transition-all duration-500"
                style={{ width: `${(currentRaised / totalGoal) * 100}%` }}
              ></div>
            </div>
          </div>

          <p className="text-sm text-gray-700">
            Every dollar raised goes directly toward securing justice for Barran and all voiceless victims of systemic failure. We operate with complete transparency and accountability.
          </p>
        </div>

        {/* IMPACT BREAKDOWN */}
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-black pb-4">How Donations Are Used</h2>

        <div className="space-y-8">
          {impactAreas.map((area, idx) => (
            <div key={idx} className="border-4 border-black p-8 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-black flex-shrink-0">
                  {area.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-lg font-bold">{area.amount}</span>
                    <div className="flex-1 bg-gray-300 border-2 border-black h-6">
                      <div 
                        className="bg-black h-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ width: `${area.percentage}%` }}
                      >
                        {area.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Items List */}
              <div className="bg-white border-2 border-black p-4">
                <p className="text-xs font-bold uppercase tracking-wider mb-3">Specific Uses:</p>
                <ul className="space-y-2">
                  {area.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm flex items-start gap-2">
                      <span className="text-black font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* TRANSPARENCY STATEMENT */}
        <div className="border-4 border-black bg-black text-white p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">Our Commitment to Transparency</h3>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              We believe in complete accountability to our donors and supporters. Every dollar raised is tracked and reported publicly. We operate under the principles of:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>Full Disclosure:</strong> All expenses are documented and available for review</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>No Hidden Costs:</strong> 100% of donations go to the campaign (no administrative overhead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>Regular Updates:</strong> Monthly reports on campaign progress and fund allocation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>Donor Choice:</strong> Donors can specify which area they want their donation to support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>Legal Compliance:</strong> All funds managed according to Canadian charitable standards</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DONATION CALL TO ACTION */}
        <div className="border-4 border-black p-8 mt-12 text-center bg-gray-50">
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-base mb-6 leading-relaxed">
            Your donation directly supports justice for Barran and all voiceless victims. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donate-etransfer" 
              className="border-2 border-black bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors"
            >
              DONATE NOW
            </a>
            <a 
              href="/" 
              className="border-2 border-black px-8 py-3 font-bold hover:bg-black hover:text-white transition-colors"
            >
              BACK TO HOME
            </a>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="border-t-4 border-black mt-12 pt-8 text-center text-sm text-gray-600">
          <p>
            For detailed financial reports and audit information, contact us at <strong>justiceforbarran@gmail.com</strong>
          </p>
          <p className="mt-2">
            Last updated: March 29, 2026 | Campaign Goal: $100,000 | Current Raised: ${currentRaised.toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
}
