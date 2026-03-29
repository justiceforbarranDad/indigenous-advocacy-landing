import { ExternalLink, Twitter, Mail } from 'lucide-react';
import { Link } from 'wouter';

interface CorporatePartner {
  name: string;
  category: string;
  twitterHandle: string;
  twitterUrl: string;
  website: string;
  issue: string;
  action: string;
}

const corporatePartners: CorporatePartner[] = [
  {
    name: 'RBC (Royal Bank of Canada)',
    category: 'Banking',
    twitterHandle: '@RBC',
    twitterUrl: 'https://twitter.com/RBC',
    website: 'www.rbc.com',
    issue: 'Launched "Truth & Reconciliation Office" while Indigenous families like Barran\'s are denied basic services',
    action: 'Demand: Real accountability, not marketing. Where is your commitment when Indigenous children need help?'
  },
  {
    name: 'TD Bank',
    category: 'Banking',
    twitterHandle: '@TD_Canada',
    twitterUrl: 'https://twitter.com/TD_Canada',
    website: 'www.td.com',
    issue: 'Employees wear orange shirts while systemic failures continue',
    action: 'Demand: Move beyond performative activism. Support Indigenous communities with real action.'
  },
  {
    name: 'Scotiabank',
    category: 'Banking',
    twitterHandle: '@Scotiabank',
    twitterUrl: 'https://twitter.com/Scotiabank',
    website: 'www.scotiabank.com',
    issue: 'Sponsors reconciliation initiatives while profiting from systems that harm Indigenous peoples',
    action: 'Demand: Use your influence to pressure government for systemic change, not just marketing.'
  },
  {
    name: 'Walmart Canada',
    category: 'Retail',
    twitterHandle: '@WalmartCanada',
    twitterUrl: 'https://twitter.com/WalmartCanada',
    website: 'www.walmartcanada.ca',
    issue: 'Profits from Orange Shirt Day merchandise while Indigenous children suffer systemic neglect',
    action: 'Demand: Donate proceeds to legal defense funds for Indigenous victims like Barran.'
  },
  {
    name: 'Canadian Tire',
    category: 'Retail',
    twitterHandle: '@CanadianTire',
    twitterUrl: 'https://twitter.com/CanadianTire',
    website: 'www.canadiantire.ca',
    issue: 'Official merchandise partner while systemic failures go unaddressed',
    action: 'Demand: Real commitment to Indigenous justice, not just seasonal merchandise.'
  },
  {
    name: 'Winners & Marshalls',
    category: 'Retail',
    twitterHandle: '@WinnersCanada',
    twitterUrl: 'https://twitter.com/WinnersCanada',
    website: 'www.winners.ca',
    issue: 'Commissioned Indigenous artists for designs while ignoring systemic injustice',
    action: 'Demand: Support Indigenous legal defense and systemic change initiatives.'
  },
  {
    name: 'Aritzia',
    category: 'Retail',
    twitterHandle: '@Aritzia',
    twitterUrl: 'https://twitter.com/Aritzia',
    website: 'www.aritzia.com',
    issue: 'Corporate partner in reconciliation marketing',
    action: 'Demand: Meaningful action beyond merchandise partnerships.'
  },
  {
    name: 'Rogers Communications',
    category: 'Media & Sports',
    twitterHandle: '@RogersHelps',
    twitterUrl: 'https://twitter.com/RogersHelps',
    website: 'www.rogers.com',
    issue: 'Raised funds for awareness while media ignores ongoing systemic failures',
    action: 'Demand: Use your platform to amplify Indigenous voices demanding justice.'
  },
  {
    name: 'Toronto Maple Leafs',
    category: 'Sports',
    twitterHandle: '@MapleLeafs',
    twitterUrl: 'https://twitter.com/MapleLeafs',
    website: 'www.nhl.com/mapleleafs',
    issue: 'Wear orange jerseys while Indigenous communities face systemic abandonment',
    action: 'Demand: Support Indigenous legal defense and community programs year-round.'
  },
  {
    name: 'Vancouver Canucks',
    category: 'Sports',
    twitterHandle: '@Canucks',
    twitterUrl: 'https://twitter.com/Canucks',
    website: 'www.nhl.com/canucks',
    issue: 'Participate in Orange Shirt Day without addressing systemic issues',
    action: 'Demand: Real commitment to Indigenous justice in your community.'
  },
  {
    name: 'Calgary Flames',
    category: 'Sports',
    twitterHandle: '@NHLFlames',
    twitterUrl: 'https://twitter.com/NHLFlames',
    website: 'www.nhl.com/flames',
    issue: 'Seasonal reconciliation without systemic accountability',
    action: 'Demand: Support Indigenous legal defense and community initiatives.'
  },
  {
    name: 'Edmonton Oilers',
    category: 'Sports',
    twitterHandle: '@EdmontonOilers',
    twitterUrl: 'https://twitter.com/EdmontonOilers',
    website: 'www.nhl.com/oilers',
    issue: 'Orange Shirt Day participation without addressing systemic failure',
    action: 'Demand: Real action for Indigenous justice in your community.'
  },
  {
    name: 'Winnipeg Jets',
    category: 'Sports',
    twitterHandle: '@WinnipegJets',
    twitterUrl: 'https://twitter.com/WinnipegJets',
    website: 'www.nhl.com/jets',
    issue: 'Performative activism on Orange Shirt Day',
    action: 'Demand: Support Indigenous legal defense and community programs.'
  },
  {
    name: 'Montreal Canadiens',
    category: 'Sports',
    twitterHandle: '@CanadiensMTL',
    twitterUrl: 'https://twitter.com/CanadiensMTL',
    website: 'www.nhl.com/canadiens',
    issue: 'Seasonal reconciliation without year-round commitment',
    action: 'Demand: Real support for Indigenous justice initiatives.'
  },
  {
    name: 'Enbridge',
    category: 'Energy',
    twitterHandle: '@Enbridge',
    twitterUrl: 'https://twitter.com/Enbridge',
    website: 'www.enbridge.com',
    issue: 'Recognizes Orange Shirt Day while extracting resources from Indigenous lands',
    action: 'Demand: Stop resource extraction without Indigenous consent. Support Indigenous sovereignty.'
  }
];

const tweetTemplates = [
  {
    title: 'Direct Accountability',
    text: 'You sponsor Orange Shirt Day and "reconciliation" initiatives, but where were you when Barran needed help? 5 years of systemic failure. Real accountability or just marketing? #JusticeForBarran #ActualReconciliation'
  },
  {
    title: 'Demand Action',
    text: 'Corporate "reconciliation" is performative activism. While you profit from Orange Shirt Day merchandise, Indigenous children like Barran are denied basic services. Time for real action. #JusticeForBarran'
  },
  {
    title: 'Call Out Hypocrisy',
    text: 'You wear orange shirts on September 30th but ignore systemic failures the other 364 days. Barran waited 5 years for justice. Where is your year-round commitment? #JusticeForBarran #TruthBeforeReconciliation'
  },
  {
    title: 'Demand Legal Support',
    text: 'Instead of Orange Shirt Day merchandise, support Indigenous legal defense funds. Barran\'s case exposes systemic failure. Real reconciliation means real accountability. #JusticeForBarran'
  },
  {
    title: 'Systemic Change',
    text: 'Orange Shirt Day without systemic change is just marketing. Indigenous families are still being failed by the same systems. Support real justice, not just awareness. #JusticeForBarran #SystemicChange'
  }
];

export default function CorporateAccountability() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            CORPORATE ACCOUNTABILITY
          </h1>
          <p className="text-lg md:text-xl mb-2">Reconciliation or Marketing?</p>
          <p className="text-sm tracking-widest">Who Profits While Barran Suffers?</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">The Hypocrisy Exposed</h2>
          <p className="text-lg leading-relaxed mb-4">
            Major corporations across Canada sponsor Orange Shirt Day and "Truth & Reconciliation" initiatives. They donate merchandise, wear orange shirts, and launch reconciliation offices. Yet while they profit from reconciliation marketing, Indigenous families like Barran's are denied basic services and justice.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This is performative activism—reconciliation as a marketing tool, not a commitment to systemic change.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            It's time to demand real accountability.
          </p>
        </div>

        {/* CORPORATE PARTNERS */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-6 pb-4 border-b-4 border-black">
            Corporate Partners: Demand Action
          </h2>
          
          <div className="space-y-8">
            {corporatePartners.map((partner, idx) => (
              <div key={idx} className="border-l-4 border-black pl-6 pb-6 border-b-2 border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-black mb-1">{partner.name}</h3>
                    <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">{partner.category}</p>
                  </div>
                  <a
                    href={partner.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    <Twitter size={18} />
                    {partner.twitterHandle}
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">The Issue:</p>
                  <p className="text-base leading-relaxed">{partner.issue}</p>
                </div>
                
                <div className="bg-gray-100 p-4 border-2 border-black">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">Demand Action:</p>
                  <p className="text-base font-bold">{partner.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TWEET TEMPLATES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready-to-Use Tweet Templates</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Copy and paste these messages, tag the corporations, and demand real accountability. Share Barran's story and call out performative activism.
          </p>
          
          <div className="space-y-4">
            {tweetTemplates.map((template, idx) => (
              <div key={idx} className="bg-black text-white p-4 border-2 border-black">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-300">{template.title}</p>
                <p className="text-base leading-relaxed mb-3">{template.text}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(template.text);
                    alert('Tweet copied to clipboard!');
                  }}
                  className="bg-white text-black px-4 py-2 font-bold hover:bg-gray-200 transition-colors text-sm"
                >
                  Copy Tweet
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">What You Can Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">1. Tag & Tweet</h3>
              <p className="mb-4">Use the tweet templates above. Tag the corporations. Demand accountability. Show them that reconciliation is not a marketing opportunity.</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">2. Share Barran's Story</h3>
              <p className="mb-4">Tell corporations: "You sponsor reconciliation but ignore systemic failure. Barran waited 5 years for justice. Where is your commitment?"</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">3. Demand Real Action</h3>
              <p className="mb-4">Don't accept performative activism. Demand they support Indigenous legal defense funds, systemic change initiatives, and year-round commitment.</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">4. Sign the Petition</h3>
              <p className="mb-4">
                <Link href="/accountability-petition" className="underline hover:no-underline">
                  Demand corporate accountability and real systemic change
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* PETITION CTA */}
        <div className="bg-black text-white p-8 border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4">Demand Corporate Accountability</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Sign the petition demanding that corporations move beyond performative activism and commit to real systemic change that protects Indigenous children like Barran.
          </p>
          <Link href="/accountability-petition">
            <button className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Sign the Petition
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
