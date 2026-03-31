import { Download, FileText, Quote } from 'lucide-react';

interface PressRelease {
  title: string;
  date: string;
  content: string;
}

const pressReleases: PressRelease[] = [
  {
    title: 'Justice for Barran: Five Years of Systemic Abandonment',
    date: 'March 29, 2026',
    content: `FOR IMMEDIATE RELEASE

Justice for Barran: Five Years of Systemic Abandonment
Indigenous Youth Victim Denied Support by All Government Levels

CANADA — A First Nations youth stabbed three times has been denied psychological support, education, and government assistance for over five years, exposing systemic failure across federal, provincial, and municipal governments.

The case of Barran demonstrates how Canada's promise of reconciliation and child protection has failed Indigenous communities. Despite multiple interventions from family members, elected officials at all levels have failed to provide adequate support or accountability.

KEY FACTS:
- Barran stabbed 3 times in serious violent incident (~2021)
- 5+ years without adequate psychological support
- Department of Youth Protection withdrew services January 2023
- Political intimidation: MNA sent cease-and-desist letter instead of assistance
- Federal level: Multiple requests for intervention ignored
- CDPDJ systemic inquiry confirms widespread failures in child protection

SYSTEMIC FAILURES:
- No coordinated response across government departments
- Jordan's Principle (no-delay services for First Nations children) ignored
- Education disrupted; mental health crisis deepened
- Political system used intimidation instead of constituent service

DEMANDS:
1. Independent inquiry into Barran's case and systemic failures
2. Application of Jordan's Principle with real funding
3. Government accountability and reform
4. Support for all Indigenous children failed by systemic injustice

"This is not about one child. This is about systemic abandonment of Indigenous families across Canada," says Barran's family.

For more information: www.justiceforbarran.com
Contact: [Contact Information]

###`
  },
  {
    title: 'Corporate Hypocrisy: Reconciliation Cannot Be Marketing',
    date: 'March 29, 2026',
    content: `FOR IMMEDIATE RELEASE

Corporate Hypocrisy: Reconciliation Cannot Be Marketing
Major Corporations Profit from Reconciliation While Indigenous Families Are Denied Justice

CANADA — Major Canadian corporations including RBC, TD Bank, Walmart, and NHL teams profit from "reconciliation" initiatives while Indigenous families like Barran's are denied basic government services and justice.

The case of Barran exposes the contradiction between corporate reconciliation messaging and systemic abandonment of Indigenous children. While corporations sponsor Orange Shirt Day and launch reconciliation offices, government systems continue to fail Indigenous victims.

CORPORATIONS PROFITING FROM RECONCILIATION:
- Banks: RBC, TD Bank, Scotiabank, CIBC
- Retail: Canadian Tire, Walmart Canada, Winners & Marshalls, Aritzia
- Sports: NHL teams (Maple Leafs, Canucks, Flames, Oilers, Jets, Habs, Senators), Rogers Communications
- Energy: Enbridge

DEMANDS:
1. Move beyond performative activism
2. Support Indigenous legal defense funds
3. Year-round commitment to reconciliation, not seasonal marketing
4. Transparency in reporting actual impact
5. Support cases like Barran's where systemic failure continues

"Reconciliation without accountability is just marketing. We demand real change," says Barran's family.

For more information: www.justiceforbarran.com/corporate-accountability

###`
  },
  {
    title: 'Government Accountability: Systemic Failure Demands Systemic Response',
    date: 'March 29, 2026',
    content: `FOR IMMEDIATE RELEASE

Government Accountability: Systemic Failure Demands Systemic Response
Federal, Provincial, and Municipal Officials Failed to Protect Indigenous Child

CANADA — Government officials at all levels—federal, provincial, and municipal—have failed to protect and support Barran, a First Nations youth victim of attempted murder who has been denied adequate services for over five years.

The case demonstrates systemic failure across:
- Department of Youth Protection (withdrew services without adequate transition)
- Provincial government (political intimidation instead of constituent service)
- Federal government (ignored multiple requests for intervention)
- Human rights bodies (cited "limits on powers" instead of taking action)

TIMELINE OF GOVERNMENT FAILURE:
- 2021: Barran stabbed 3 times; inadequate response
- 2021-2023: Fragmented services; no coordinated support
- January 2023: DYP withdraws without follow-up
- November 2023: MNA sends cease-and-desist letter threatening criminal charges
- 2024: Federal escalation met with silence
- 2025-2026: 5+ years without justice

DEMANDS:
1. Governor General intervention on behalf of failed Indigenous child
2. Parliamentary inquiry into systemic failures
3. Senate investigation into child protection system
4. RCMP investigation into attempted murder case
5. Government reform and accountability

"Government officials have the power to investigate, reform, and protect. It's time to demand they use it," says Barran's family.

For more information: www.justiceforbarran.com/government-accountability

###`
  }
];

const keyQuotes = [
  {
    quote: "Five years. No justice. No adequate support. No government accountability.",
    attribution: "Barran's Family"
  },
  {
    quote: "Reconciliation without accountability is just marketing. We demand real change.",
    attribution: "Justice for Barran Campaign"
  },
  {
    quote: "This is not about one child. This is about systemic abandonment of Indigenous families across Canada.",
    attribution: "Barran's Family"
  },
  {
    quote: "Government officials have the power to investigate, reform, and protect. It's time to demand they use it.",
    attribution: "Justice for Barran Campaign"
  },
  {
    quote: "Current Truth Before Reconciliation. Systemic failure must be exposed before healing can begin.",
    attribution: "Justice for Barran Campaign"
  }
];

const mediaAssets = [
  {
    title: 'Barran\'s Story - Key Facts Sheet',
    description: 'One-page summary of Barran\'s case, systemic failures, and demands',
    format: 'PDF',
    size: '500 KB',
    downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/barran-key-facts-sheet.pdf'
  },
  {
    title: 'Timeline Infographic',
    description: 'Visual timeline of 2021-2026 showing government failures',
    format: 'PNG/PDF',
    size: '2 MB',
    downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/timeline-infographic.png'
  },
  {
    title: 'Corporate Accountability List',
    description: 'Complete list of corporations profiting from reconciliation',
    format: 'PDF',
    size: '300 KB',
    downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/corporate-accountability-list.pdf'
  },
  {
    title: 'Government Officials Contact List',
    description: 'Twitter handles and contact info for accountability campaign',
    format: 'PDF',
    size: '400 KB',
    downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/government-contacts.pdf'
  },
  {
    title: 'Social Media Graphics Pack',
    description: '10 ready-to-share graphics for Twitter, Facebook, Instagram',
    format: 'ZIP (PNG)',
    size: '5 MB',
    downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/social-media-graphics.zip'
  },
  {
    title: 'Video Testimonial Clips',
    description: 'Short clips for media use (with permission)',
    format: 'MP4',
    size: '50 MB',
    downloadUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/video-testimonials.mp4'
  }
];

export default function MediaKit() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            MEDIA KIT
          </h1>
          <p className="text-lg md:text-xl mb-2">Justice for Barran - Part 3</p>
          <p className="text-sm tracking-widest">Press Releases • Assets • Resources for Journalists</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">About This Campaign</h2>
          <p className="text-lg leading-relaxed mb-4">
            Justice for Barran is a comprehensive advocacy campaign exposing systemic failure across Canadian government and corporate institutions. The campaign demands accountability, reform, and real support for all voiceless victims of systemic injustice.
          </p>
          <p className="text-lg leading-relaxed">
            This media kit provides journalists, advocates, and supporters with ready-to-use resources, press releases, and assets to amplify this story.
          </p>
        </div>

        {/* PRESS RELEASES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Press Releases</h2>
          
          <div className="space-y-6">
            {pressReleases.map((release, idx) => (
              <div key={idx} className="border-l-4 border-black pl-6 pb-6 border-b-2 border-gray-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-black mb-1">{release.title}</h3>
                    <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">{release.date}</p>
                  </div>
                  <FileText size={24} className="flex-shrink-0" />
                </div>
                
                <pre className="bg-gray-50 p-4 border-2 border-black overflow-x-auto text-xs leading-relaxed mb-4 whitespace-pre-wrap break-words">
                  {release.content}
                </pre>
                
                <button
                  onClick={() => {
                    const element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(release.content));
                    element.setAttribute('download', `${release.title.replace(/\s+/g, '_')}.txt`);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors"
                >
                  <Download size={18} />
                  Download Press Release
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* KEY QUOTES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Key Quotes for Media</h2>
          
          <div className="space-y-4">
            {keyQuotes.map((item, idx) => (
              <div key={idx} className="bg-black text-white p-6 border-2 border-black">
                <div className="flex gap-4 mb-3">
                  <Quote size={24} className="flex-shrink-0" />
                  <p className="text-lg leading-relaxed italic">{item.quote}</p>
                </div>
                <p className="text-sm font-bold text-gray-300 ml-10">— {item.attribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MEDIA ASSETS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Downloadable Media Assets</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mediaAssets.map((asset, idx) => (
              <div key={idx} className="border-2 border-black p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-black mb-2">{asset.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{asset.description}</p>
                  </div>
                  <Download size={24} className="flex-shrink-0" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                    {asset.format} • {asset.size}
                  </span>
                </div>
                
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = asset.downloadUrl;
                    link.download = asset.title.replace(/\s+/g, '_');
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="w-full bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors text-sm"
                >
                  Download Asset
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* MEDIA CONTACT */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Media Contact</h2>
          
          <div className="bg-gray-100 p-6 border-2 border-black">
            <p className="text-lg mb-4 leading-relaxed">
              For media inquiries, interview requests, or additional information about the Justice for Barran campaign:
            </p>
            
            <div className="space-y-2 text-base">
              <p><span className="font-bold">Email:</span> justiceforbarran@gmail.com</p>
              <p><span className="font-bold">Phone:</span> [Contact Number]</p>
              <p><span className="font-bold">Website:</span> www.justiceforbarran.com</p>
              <p><span className="font-bold">Twitter:</span> @HelpBarran</p>
            </div>
          </div>
        </div>

        {/* USAGE GUIDELINES */}
        <div className="bg-black text-white p-8 border-4 border-black">
          <h2 className="text-3xl font-black mb-4">Media Usage Guidelines</h2>
          
          <ul className="space-y-3 text-base leading-relaxed">
            <li className="flex gap-3">
              <span className="font-black">•</span>
              <span>All press releases are available for immediate publication</span>
            </li>
            <li className="flex gap-3">
              <span className="font-black">•</span>
              <span>Media assets may be used with proper attribution to Justice for Barran</span>
            </li>
            <li className="flex gap-3">
              <span className="font-black">•</span>
              <span>Video testimonials require written permission from family</span>
            </li>
            <li className="flex gap-3">
              <span className="font-black">•</span>
              <span>For interviews, contact media relations at least 48 hours in advance</span>
            </li>
            <li className="flex gap-3">
              <span className="font-black">•</span>
              <span>Please tag @HelpBarran and use #JusticeForBarran in social media coverage</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
