import { ExternalLink, Twitter } from 'lucide-react';
import { Link } from 'wouter';

interface OfficialAccount {
  name: string;
  title: string;
  category: string;
  twitterHandle: string;
  twitterUrl: string;
  responsibility: string;
  demand: string;
}

const governmentOfficials: OfficialAccount[] = [
  {
    name: 'Governor General of Canada',
    title: 'Head of State',
    category: 'Federal Leadership',
    twitterHandle: '@GGCanada',
    twitterUrl: 'https://twitter.com/GGCanada',
    responsibility: 'Constitutional guardian of Canadian values and justice',
    demand: 'Demand: Intervene on behalf of Indigenous children failed by systemic injustice. Barran\'s case demands vice-regal attention.'
  },
  {
    name: 'Prime Minister Justin Trudeau',
    title: 'Prime Minister of Canada',
    category: 'Federal Leadership',
    twitterHandle: '@JustinTrudeau',
    twitterUrl: 'https://twitter.com/JustinTrudeau',
    responsibility: 'Promised reconciliation. Failed to deliver systemic change.',
    demand: 'Demand: Real action on Truth & Reconciliation. Barran waited 5 years for justice while you promised change.'
  },
  {
    name: 'Prime Minister\'s Office',
    title: 'PMO',
    category: 'Federal Leadership',
    twitterHandle: '@CanadianPM',
    twitterUrl: 'https://twitter.com/CanadianPM',
    responsibility: 'Executive accountability for systemic failures',
    demand: 'Demand: Government intervention in cases of systemic failure affecting Indigenous children.'
  },
  {
    name: 'House of Commons of Canada',
    title: 'Parliament',
    category: 'Federal Legislature',
    twitterHandle: '@HouseofCommons',
    twitterUrl: 'https://twitter.com/HouseofCommons',
    responsibility: 'Legislative body responsible for laws protecting children',
    demand: 'Demand: Emergency legislation to protect Indigenous children from systemic abandonment.'
  },
  {
    name: 'The Senate of Canada',
    title: 'Upper House',
    category: 'Federal Legislature',
    twitterHandle: '@SenateCa',
    twitterUrl: 'https://twitter.com/SenateCa',
    responsibility: 'Chamber of sober second thought on justice issues',
    demand: 'Demand: Senate inquiry into systemic failures affecting Indigenous children like Barran.'
  },
  {
    name: 'Canadian Human Rights Commission',
    title: 'CHRC',
    category: 'Human Rights',
    twitterHandle: '@CHRC_CDP',
    twitterUrl: 'https://twitter.com/CHRC_CDPS',
    responsibility: 'Mandate to investigate human rights violations',
    demand: 'Demand: Full investigation into Barran\'s case as systemic human rights violation.'
  },
  {
    name: 'Minister of Indigenous Services',
    title: 'Federal Cabinet',
    category: 'Indigenous Affairs',
    twitterHandle: '@MinIndigenous',
    twitterUrl: 'https://twitter.com/MinIndigenous',
    responsibility: 'Direct accountability for Indigenous child welfare',
    demand: 'Demand: Immediate intervention and systemic reform to protect Indigenous children.'
  },
  {
    name: 'Minister of Justice',
    title: 'Federal Cabinet',
    category: 'Justice System',
    twitterHandle: '@JusticeMinCanada',
    twitterUrl: 'https://twitter.com/JusticeMinCanada',
    responsibility: 'Oversees justice system failures',
    demand: 'Demand: Justice system reform to address systemic abandonment of Indigenous victims.'
  },
  {
    name: 'Mandy Gull-Masty',
    title: 'National Chief, Métis National Council',
    category: 'Indigenous Leadership',
    twitterHandle: '@mandygull',
    twitterUrl: 'https://twitter.com/mandygull',
    responsibility: 'Indigenous leadership accountable to communities',
    demand: 'Demand: MNC support for Barran\'s case and systemic accountability measures.'
  },
  {
    name: 'Assembly of First Nations',
    title: 'AFN',
    category: 'Indigenous Leadership',
    twitterHandle: '@AFN_Secretariat',
    twitterUrl: 'https://twitter.com/AFN_Secretariat',
    responsibility: 'Represent First Nations interests nationally',
    demand: 'Demand: AFN mobilization for Indigenous children failed by systemic injustice.'
  },
  {
    name: 'Inuit Tapiriit Kanatami',
    title: 'ITK',
    category: 'Indigenous Leadership',
    twitterHandle: '@ITK_tweets',
    twitterUrl: 'https://twitter.com/ITK_tweets',
    responsibility: 'Represent Inuit interests and rights',
    demand: 'Demand: ITK support for Indigenous child protection and systemic accountability.'
  },
  {
    name: 'Métis National Council',
    title: 'MNC',
    category: 'Indigenous Leadership',
    twitterHandle: '@MetisNational',
    twitterUrl: 'https://twitter.com/MetisNational',
    responsibility: 'Represent Métis peoples nationally',
    demand: 'Demand: MNC action on systemic failures affecting Indigenous children.'
  },
  {
    name: 'Royal Canadian Mounted Police',
    title: 'RCMP',
    category: 'Law Enforcement',
    twitterHandle: '@RCMP_GRC',
    twitterUrl: 'https://twitter.com/RCMP_GRC',
    responsibility: 'Investigate crimes and protect citizens',
    demand: 'Demand: RCMP investigation into systemic failures in Barran\'s attempted murder case.'
  },
  {
    name: 'Department of Justice Canada',
    title: 'Justice Dept',
    category: 'Federal Department',
    twitterHandle: '@JusticeGovCan',
    twitterUrl: 'https://twitter.com/JusticeGovCan',
    responsibility: 'Oversee justice system and legal accountability',
    demand: 'Demand: Department action on systemic justice failures affecting Indigenous victims.'
  },
  {
    name: 'Department of Indigenous Services',
    title: 'ISC',
    category: 'Federal Department',
    twitterHandle: '@IndigenousGovCa',
    twitterUrl: 'https://twitter.com/IndigenousGovCa',
    responsibility: 'Direct responsibility for Indigenous child welfare',
    demand: 'Demand: ISC intervention and systemic reform to protect Indigenous children.'
  },
  {
    name: 'Protecteur du citoyen (Quebec)',
    title: 'Provincial Ombudsman',
    category: 'Provincial Oversight',
    twitterHandle: '@ProtecteurQC',
    twitterUrl: 'https://twitter.com/ProtecteurQC',
    responsibility: 'Investigate government complaints in Quebec',
    demand: 'Demand: Full investigation into DPJ systemic failures in Barran\'s case.'
  },
  {
    name: 'Commission des droits de la personne et des droits de la jeunesse',
    title: 'Quebec Human Rights Commission',
    category: 'Provincial Oversight',
    twitterHandle: '@CDPDJ1',
    twitterUrl: 'https://twitter.com/CDPDJ1',
    responsibility: 'Investigate human rights violations in Quebec',
    demand: 'Demand: CDPDJ investigation into systemic discrimination in child welfare.'
  }
];

const tweetTemplates = [
  {
    title: 'Direct Challenge to Leadership',
    text: 'You promised reconciliation. Barran waited 5 years for justice. Where is your commitment when Indigenous children need help? Systemic failure demands systemic accountability. #JusticeForBarran #ActualReconciliation'
  },
  {
    title: 'Demand Government Action',
    text: 'Government officials: Your job is to protect citizens. Barran was failed at every level—federal, provincial, municipal. Time for real accountability, not just words. #JusticeForBarran #GovernmentAccountability'
  },
  {
    title: 'Call Out Systemic Failure',
    text: 'Indigenous leadership: Barran\'s case exposes systemic failure across all government levels. Demand investigation, demand reform, demand justice. #JusticeForBarran #IndigenousJustice'
  },
  {
    title: 'Demand Investigation',
    text: 'RCMP, Justice Department, Human Rights Commission: Investigate the systemic failures in Barran\'s case. 5 years without justice is unacceptable. #JusticeForBarran #SystemicAccountability'
  },
  {
    title: 'Challenge Inaction',
    text: 'You have the power to investigate, reform, and protect. Barran\'s case proves the system is broken. What will you do about it? #JusticeForBarran #GovernmentAccountability'
  }
];

export default function GovernmentAccountability() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            GOVERNMENT ACCOUNTABILITY
          </h1>
          <p className="text-lg md:text-xl mb-2">Systemic Failure Demands Systemic Response</p>
          <p className="text-sm tracking-widest">Federal • Provincial • Indigenous Leadership • Human Rights</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">The Government Failed Barran</h2>
          <p className="text-lg leading-relaxed mb-4">
            Barran's case exposes systemic failure across every level of Canadian government. Federal, provincial, and municipal officials all failed to protect an Indigenous child victim of attempted murder.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            While government leaders promise reconciliation and protection, Indigenous families are denied basic services and justice. This is not a failure of individuals—it is systemic abandonment.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            Government officials have the power to investigate, reform, and protect. It's time to demand they use it.
          </p>
        </div>

        {/* GOVERNMENT OFFICIALS */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-6 pb-4 border-b-4 border-black">
            Demand Action from Government
          </h2>
          
          <div className="space-y-8">
            {governmentOfficials.map((official, idx) => (
              <div key={idx} className="border-l-4 border-black pl-6 pb-6 border-b-2 border-gray-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-black mb-1">{official.name}</h3>
                    <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">{official.title} • {official.category}</p>
                  </div>
                  <a
                    href={official.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    <Twitter size={18} />
                    {official.twitterHandle}
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">Responsibility:</p>
                  <p className="text-base leading-relaxed">{official.responsibility}</p>
                </div>
                
                <div className="bg-gray-100 p-4 border-2 border-black">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">Demand Action:</p>
                  <p className="text-base font-bold">{official.demand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TWEET TEMPLATES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Ready-to-Use Tweet Templates</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Tag government officials and Indigenous leaders. Demand investigation, reform, and justice. Hold them accountable.
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
              <h3 className="text-xl font-black mb-3">1. Tag Government Officials</h3>
              <p className="mb-4">Use the tweet templates. Tag @JustinTrudeau, @GGCanada, @SenateCa, @HouseofCommons. Demand investigation and reform.</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">2. Demand Indigenous Leadership Action</h3>
              <p className="mb-4">Tag @AFN_Secretariat, @mandygull, @ITK_tweets. Demand they mobilize for Indigenous children failed by systemic injustice.</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">3. Call for Investigation</h3>
              <p className="mb-4">Demand @CHRC_CDPS, @JusticeGovCan, @RCMP_GRC investigate systemic failures. Barran\'s case is a human rights violation.</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black">
              <h3 className="text-xl font-black mb-3">4. Sign the Petition</h3>
              <p className="mb-4">
                <Link href="/accountability-petition" className="underline hover:no-underline">
                  Demand government accountability and systemic reform
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* PETITION CTA */}
        <div className="bg-black text-white p-8 border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4">Demand Government Accountability</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Sign the petition demanding that government officials at all levels investigate systemic failures and commit to real reform that protects Indigenous children like Barran.
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
