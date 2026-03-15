import { useState } from 'react';
import { AlertCircle, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GhostedByPolitician() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  // Officials who ghosted Barran
  const officials = [
    { name: 'Céline Haytayan', handle: 'CelineHaytayan', title: 'MNA, Laval-des-Rapides' },
    { name: 'Annie Koutrakis', handle: 'AnnieKoutrakis', title: 'MP, Vimy' },
    { name: 'Sean Fraser', handle: 'SeanFraserMP', title: 'MP, Central Nova' },
    { name: 'François Legault', handle: 'francoislegault', title: 'Premier of Quebec' },
    { name: 'Bernard Drainville', handle: 'BDrainvilleQc', title: 'Minister of Education' },
    { name: 'Luc Ferrandez', handle: 'LucFerrandez', title: 'Montreal City Councillor' },
  ];

  const handleYes = () => {
    setResponse('yes');
    
    // Create Twitter mention string with all officials
    const mentions = officials.map(o => `@${o.handle}`).join(' ');
    
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ghosted by a Politician?</h1>
          <p className="text-lg md:text-xl opacity-90">
            Have you been ignored by elected officials on child welfare, Indigenous rights, or justice issues? You're not alone. Share your story and demand accountability.
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
                    {officials.map((official) => (
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

      {/* Officials List Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-forest-green">
            Officials Who Ghosted Barran
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {officials.map((official) => (
              <div key={official.handle} className="p-6 bg-background rounded-lg border-2 border-border hover:border-amber-orange transition-colors">
                <h3 className="font-bold text-lg mb-1">{official.name}</h3>
                <p className="text-amber-orange font-semibold text-sm mb-2">@{official.handle}</p>
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
                Barran was stabbed 3 times on February 14, 2021. His family sought help from DPJ (child protection), but were ghosted for years. Multiple elected officials ignored pleas for intervention and accountability. This is not an isolated case.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Systemic Failure</h3>
              <p className="text-foreground/70">
                When elected officials ignore constituents seeking help for vulnerable children, systemic failures persist. Public accountability is the first step toward real change.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Protected Speech</h3>
              <p className="text-foreground/70">
                This campaign is protected speech under the Canadian Charter of Rights and Freedoms. Demanding accountability from elected officials is a fundamental democratic right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-forest-green text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Every Voice Matters</h2>
          <p className="text-lg opacity-90 mb-6">
            Share your story. Demand accountability. Support systemic change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://twitter.com/HelpBarran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-forest-green px-6 py-3 rounded-lg font-bold hover:bg-amber-orange hover:text-white transition-colors"
            >
              Follow @HelpBarran
            </a>
            <a
              href="/contact-accountability"
              className="inline-block bg-amber-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-forest-green transition-colors"
            >
              Contact Officials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
