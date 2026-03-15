import { useState } from 'react';
import { AlertCircle, Share2, Heart, Users, Building2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GhostedByPolitician() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);
  const [activeTab, setActiveTab] = useState<'politicians' | 'organizations' | 'lawyers'>('politicians');

  // Politicians who ghosted Barran
  const politicians = [
    { name: 'Céline Haytayan', handle: 'CelineHaytayan', title: 'MNA, Laval-des-Rapides', level: 'Provincial' },
    { name: 'Annie Koutrakis', handle: 'AnnieKoutrakis', title: 'MP, Vimy', level: 'Federal' },
    { name: 'Sean Fraser', handle: 'SeanFraserMP', title: 'MP, Central Nova', level: 'Federal' },
    { name: 'François Legault', handle: 'francoislegault', title: 'Premier of Quebec', level: 'Provincial' },
    { name: 'Bernard Drainville', handle: 'BDrainvilleQc', title: 'Minister of Education', level: 'Provincial' },
    { name: 'Luc Ferrandez', handle: 'LucFerrandez', title: 'Montreal City Councillor', level: 'Municipal' },
  ];

  // Indigenous organizations that failed to support
  const organizations = [
    { 
      name: 'Assembly of First Nations (AFN)', 
      description: 'Refused to help, stated that Barran\'s family was not "status" or part of their band, despite being First Nations children in need of support.',
      years: '2021-2026',
      impact: 'Denied support to vulnerable Indigenous children'
    },
    { 
      name: 'Prime Minister\'s Office (PMO)', 
      description: 'No response to pleas for federal intervention on systemic failures affecting Indigenous children. Complete ghosting despite repeated contact attempts.',
      years: '2021-2026',
      impact: 'Federal government indifference to Indigenous child welfare crisis'
    },
    { 
      name: 'Amnesty Canada', 
      description: 'No response to requests for support on human rights violations affecting Indigenous children. Despite mandate to defend human rights, remained silent.',
      years: '2021-2026',
      impact: 'Human rights organization failed to advocate for vulnerable children'
    },
    { 
      name: 'Legal Aid Quebec', 
      description: 'No response to requests for legal support. Despite mandate to provide legal assistance to those in need, refused to help.',
      years: '2021-2026',
      impact: 'Vulnerable family denied access to justice'
    },
  ];

  // Lawyers who failed to step up
  const lawyerIssue = {
    title: 'Legal Profession Accountability',
    description: 'Not a single lawyer stepped up to help protect vulnerable Indigenous children despite their oath to uphold justice and defend the vulnerable.',
    details: [
      'No lawyer willing to take the case against corrupt government workers',
      'Legal profession bound by oath to protect children\'s rights - oath broken',
      'Lawyers paid by government - conflict of interest prevents them from challenging systemic failures',
      'Shame on all lawyers who don\'t care for victims of systemic abuse',
      'Where is the legal profession\'s responsibility to protect the most vulnerable?'
    ]
  };

  const handleYes = () => {
    setResponse('yes');
    
    // Create Twitter mention string with all politicians
    const mentions = politicians.map(o => `@${o.handle}`).join(' ');
    
    // Pre-written tweet with evidence and call to action
    const tweetText = `I've been ghosted by elected officials on child welfare issues. Like Barran's family, my pleas for help were ignored. ${mentions} - when will you respond to constituents seeking justice for vulnerable children? #EveryChildMatters #JusticeForBarran #TruthAndReconciliation`;
    
    // Open Twitter with pre-filled tweet
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-forest-green to-forest-green/80">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <AlertCircle className="w-16 h-16 mx-auto mb-6 text-amber-orange" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ghosted by Officials & Organizations?</h1>
          <p className="text-lg md:text-xl opacity-90">
            Barran's family has been ghosted by politicians, Indigenous organizations, human rights groups, and the legal profession for over 5 years. You're not alone if you've been ignored by those who should protect vulnerable children.
          </p>
        </div>
      </section>

      {/* Main Poll Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          {/* Question */}
          <div className="bg-card rounded-lg border-2 border-amber-orange p-8 md:p-12 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Have you been ghosted by a politician on child welfare or justice issues?
            </h2>

            {/* Response Buttons */}
            {response === null ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleYes}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-lg"
                >
                  Yes - Tag Them Now
                </Button>
                <Button
                  onClick={handleNo}
                  variant="outline"
                  className="border-2 border-forest-green text-forest-green hover:bg-forest-green/10 font-bold py-3 px-8 text-lg"
                >
                  No
                </Button>
              </div>
            ) : response === 'yes' ? (
              <div className="space-y-6">
                <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
                  <p className="text-green-800 font-bold text-lg mb-2">✓ Tweet Posted!</p>
                  <p className="text-green-700">
                    Your tweet tagging all ghosting officials has been sent. Thank you for demanding accountability.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-foreground/70">
                    <strong>Officials Tagged:</strong>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {politicians.map((official) => (
                      <div key={official.handle} className="p-3 bg-background rounded border border-border text-left">
                        <p className="font-semibold text-sm">{official.name}</p>
                        <p className="text-xs text-foreground/60">@{official.handle}</p>
                        <p className="text-xs text-amber-orange">{official.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => setResponse(null)}
                  variant="outline"
                  className="border-2 border-forest-green text-forest-green hover:bg-forest-green/10"
                >
                  Share Again
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
                  <p className="text-blue-800 font-bold text-lg mb-2">Thank You</p>
                  <p className="text-blue-700">
                    If you know someone who has been ghosted, please share this page with them.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-foreground/70 font-semibold">
                    You can still help by:
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="flex gap-2">
                      <span className="text-amber-orange">✓</span>
                      <span>Sharing this page on social media</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-orange">✓</span>
                      <span>Contacting officials directly about child welfare</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-orange">✓</span>
                      <span>Supporting Barran's justice campaign</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-orange">✓</span>
                      <span>Advocating for systemic reform</span>
                    </li>
                  </ul>
                </div>
                <Button
                  onClick={() => setResponse(null)}
                  variant="outline"
                  className="border-2 border-forest-green text-forest-green hover:bg-forest-green/10"
                >
                  Back
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setActiveTab('politicians')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'politicians'
                  ? 'bg-forest-green text-white'
                  : 'bg-background border-2 border-border text-foreground hover:border-amber-orange'
              }`}
            >
              <Users size={18} />
              Politicians
            </button>
            <button
              onClick={() => setActiveTab('organizations')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'organizations'
                  ? 'bg-forest-green text-white'
                  : 'bg-background border-2 border-border text-foreground hover:border-amber-orange'
              }`}
            >
              <Building2 size={18} />
              Organizations
            </button>
            <button
              onClick={() => setActiveTab('lawyers')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'lawyers'
                  ? 'bg-forest-green text-white'
                  : 'bg-background border-2 border-border text-foreground hover:border-amber-orange'
              }`}
            >
              <Briefcase size={18} />
              Legal Profession
            </button>
          </div>

          {/* Politicians Tab */}
          {activeTab === 'politicians' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-forest-green">
                Politicians Who Ghosted Barran
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {politicians.map((official) => (
                  <div key={official.handle} className="p-6 bg-background rounded-lg border-2 border-border hover:border-amber-orange transition-colors">
                    <h3 className="font-bold text-lg mb-1">{official.name}</h3>
                    <p className="text-amber-orange font-semibold text-sm mb-1">@{official.handle}</p>
                    <p className="text-forest-green font-semibold text-xs mb-3">{official.level}</p>
                    <p className="text-foreground/70 text-sm mb-4">{official.title}</p>
                    <a
                      href={`https://twitter.com/${official.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      <Share2 size={16} />
                      View Profile
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Organizations Tab */}
          {activeTab === 'organizations' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-forest-green">
                Organizations That Failed to Support
              </h2>
              <div className="space-y-6">
                {organizations.map((org, idx) => (
                  <div key={idx} className="p-6 bg-background rounded-lg border-2 border-border hover:border-amber-orange transition-colors">
                    <div className="flex items-start gap-4">
                      <Building2 className="w-6 h-6 text-amber-orange flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{org.name}</h3>
                        <p className="text-foreground/70 mb-3">{org.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div>
                            <p className="text-amber-orange font-semibold">Years of Ghosting</p>
                            <p className="text-foreground/70">{org.years}</p>
                          </div>
                          <div>
                            <p className="text-amber-orange font-semibold">Impact</p>
                            <p className="text-foreground/70">{org.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-red-50 border-2 border-red-600 rounded-lg">
                <p className="text-red-800 font-bold mb-2">⚠️ Systemic Failure</p>
                <p className="text-red-700">
                  When Indigenous organizations, human rights groups, and government agencies all fail to support vulnerable Indigenous children, it reveals a systemic failure across all sectors of Canadian society.
                </p>
              </div>
            </div>
          )}

          {/* Lawyers Tab */}
          {activeTab === 'lawyers' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-forest-green">
                {lawyerIssue.title}
              </h2>
              <div className="p-8 bg-background rounded-lg border-2 border-border">
                <p className="text-lg text-foreground/80 mb-6">{lawyerIssue.description}</p>
                <div className="space-y-4">
                  {lawyerIssue.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-card rounded border-l-4 border-amber-orange">
                      <span className="text-amber-orange font-bold text-xl flex-shrink-0">•</span>
                      <p className="text-foreground/70">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 p-6 bg-red-50 border-2 border-red-600 rounded-lg">
                <p className="text-red-800 font-bold mb-2">⚠️ Conflict of Interest</p>
                <p className="text-red-700">
                  Many lawyers are paid by the government or have financial interests in maintaining the status quo. This creates a fundamental conflict of interest that prevents them from challenging systemic failures and protecting vulnerable children who need justice.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-forest-green">
            Why This Matters
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                Barran's Story
              </h3>
              <p className="text-foreground/70">
                Barran was stabbed 3 times on February 14, 2021. His family sought help from DPJ (child protection), but were ghosted for years. Multiple elected officials, Indigenous organizations, human rights groups, and legal professionals ignored pleas for intervention and accountability. This is not an isolated case.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Systemic Failure Across All Sectors</h3>
              <p className="text-foreground/70">
                When politicians, Indigenous organizations, human rights groups, legal aid services, and the entire legal profession all fail to support vulnerable Indigenous children, it reveals a systemic failure that goes beyond any single institution. This is institutional abandonment.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Public Accountability is Essential</h3>
              <p className="text-foreground/70">
                Public accountability is the first step toward real change. When officials and organizations are held accountable for their inaction, systemic failures can begin to be addressed. Silence enables abuse. Speaking out demands justice.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Justice for All Indigenous Children</h3>
              <p className="text-foreground/70">
                This movement is not just about Barran. It's about breaking the cycle of systemic failure that affects all Indigenous children in Canada. Every child deserves protection, support, and justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Demand Accountability</h2>
          <p className="text-lg opacity-90 mb-8">
            Share your story. Tag the officials who ghosted you. Demand that politicians, organizations, and legal professionals step up to protect vulnerable Indigenous children.
          </p>
          <Button
            onClick={() => setResponse(null)}
            className="bg-amber-orange hover:bg-amber-light text-white font-bold py-3 px-8 text-lg"
          >
            Share Your Story
          </Button>
        </div>
      </section>
    </div>
  );
}
