import { ExternalLink, Heart, Users, Zap } from 'lucide-react';

/**
 * CREDITS & ACKNOWLEDGMENTS PAGE
 * 
 * Honors all those who made this advocacy platform possible
 * and contributed to the fight for justice.
 */

export default function Credits() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-green via-charcoal to-black text-cream">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-orange">
          Credits & Acknowledgments
        </h1>
        <p className="text-xl md:text-2xl text-cream-light max-w-3xl mx-auto leading-relaxed">
          This platform exists because of the courage, support, and dedication of many
        </p>
        <p className="text-lg text-amber-light mt-4 italic">
          "This could create a precedent" — Fo
        </p>
      </section>

      {/* CRarr Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <div className="bg-charcoal-light p-8 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="text-amber-orange flex-shrink-0 mt-2" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-amber-orange mb-2">
                  CRarr
                </h2>
                <p className="text-cream-light text-lg">
                  For believing in this story and providing the platform to publish it
                </p>
              </div>
            </div>
            <p className="text-cream-light leading-relaxed">
              CRarr's commitment to amplifying Indigenous voices and supporting systemic accountability made this platform possible. Without this support, this story would remain unheard.
            </p>
          </div>
        </div>
      </section>

      {/* APTN Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <div className="bg-charcoal-light p-8 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <Users className="text-amber-orange flex-shrink-0 mt-2" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-amber-orange mb-2">
                  APTN Crew
                </h2>
                <p className="text-cream-light text-lg">
                  For amplifying this story and reaching Indigenous communities across Canada
                </p>
              </div>
            </div>
            <p className="text-cream-light leading-relaxed mb-4">
              APTN (Aboriginal Peoples Television Network) played a crucial role in bringing this testimony to Indigenous communities. Their commitment to Indigenous storytelling and accountability journalism gave voice to the voiceless.
            </p>
            <a
              href="https://www.aptn.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-light hover:text-amber-orange transition-colors"
            >
              Visit APTN <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Fo's Statement Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <div className="bg-forest-green p-8 rounded-lg border-l-4 border-amber-orange">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="text-amber-orange flex-shrink-0 mt-2" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-amber-orange mb-2">
                  Fo's Vision
                </h2>
                <p className="text-cream-light text-lg italic">
                  "This could create a precedent"
                </p>
              </div>
            </div>
            <p className="text-cream-light leading-relaxed mb-4">
              Fo understood the power of this story from the beginning. Their recognition that this testimony could create legal, systemic, and social precedent for protecting voiceless victims gave this platform its purpose.
            </p>
            <p className="text-cream-light leading-relaxed">
              Every official who reads this, every lawyer who sees this, every institution that acknowledges this—they are part of the precedent Fo envisioned. This is not just one family's story. This is a blueprint for justice.
            </p>
          </div>
        </div>
      </section>

      {/* Community Supporters Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-orange mb-8 text-center">
            All Supporters & Allies
          </h2>
          <div className="bg-charcoal-light p-8 rounded-lg space-y-6">
            <div>
              <h3 className="text-xl font-bold text-amber-light mb-3">
                International Lawyers
              </h3>
              <p className="text-cream-light leading-relaxed">
                To all lawyers who have joined this fight for systemic accountability—your expertise, your courage, and your commitment to justice give hope to voiceless victims across Canada and beyond.
              </p>
            </div>

            <div className="border-t border-charcoal pt-6">
              <h3 className="text-xl font-bold text-amber-light mb-3">
                Survivor Communities
              </h3>
              <p className="text-cream-light leading-relaxed">
                To every survivor who has shared their story on this platform—your courage in speaking truth is the foundation of systemic change. Your voice matters. Your pain will not be forgotten.
              </p>
            </div>

            <div className="border-t border-charcoal pt-6">
              <h3 className="text-xl font-bold text-amber-light mb-3">
                Indigenous Nations & Communities
              </h3>
              <p className="text-cream-light leading-relaxed">
                To the 70+ Indigenous languages and 12 language families represented on this platform—your cultures, your rights, and your children deserve protection. This platform exists for you.
              </p>
            </div>

            <div className="border-t border-charcoal pt-6">
              <h3 className="text-xl font-bold text-amber-light mb-3">
                Donors & Supporters
              </h3>
              <p className="text-cream-light leading-relaxed">
                To everyone who has donated, shared, and amplified this message—your financial support and your voice are fuel for systemic change. Every e-Transfer, every share, every conversation brings justice closer.
              </p>
            </div>

            <div className="border-t border-charcoal pt-6">
              <h3 className="text-xl font-bold text-amber-light mb-3">
                Translation Volunteers
              </h3>
              <p className="text-cream-light leading-relaxed">
                To all Indigenous language speakers who translate this story into their native languages—you are ensuring that voiceless victims in your communities hear this message. Your work is sacred.
              </p>
            </div>

            <div className="border-t border-charcoal pt-6">
              <h3 className="text-xl font-bold text-amber-light mb-3">
                Media & Journalists
              </h3>
              <p className="text-cream-light leading-relaxed mb-3">
                To journalists and media outlets who have covered this story with integrity—your reporting holds officials accountable and gives voice to the voiceless. Your work is essential.
              </p>
              <div className="bg-charcoal-light p-4 rounded border-l-2 border-amber-orange">
                <p className="text-cream-light text-sm italic">
                  <span className="text-amber-light font-semibold">IMPORTANT NOTATION:</span> I am the biological father of the child at the center of this story—not a foster father. This distinction is crucial to the historical record and to understanding my legal rights and responsibilities in this fight for justice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Precedent Section */}
      <section className="py-16 px-4 border-t-2 border-amber-orange">
        <div className="max-w-4xl mx-auto">
          <div className="bg-charcoal p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-amber-orange mb-6 text-center">
              The Precedent We're Creating
            </h2>
            <div className="space-y-4 text-cream-light leading-relaxed">
              <p>
                This platform is not just about one family's story. It is about creating a precedent for how systemic failures are documented, how officials are held accountable, and how voiceless victims are finally heard.
              </p>
              <p>
                The precedent we're creating says: <span className="text-amber-light font-semibold">Your silence is complicity. Your inaction will be documented. Your failure to protect vulnerable children will be remembered.</span>
              </p>
              <p>
                The precedent we're creating says: <span className="text-amber-light font-semibold">Survivors have a right to justice. Voiceless victims deserve representation. Systemic failures demand systemic accountability.</span>
              </p>
              <p>
                The precedent we're creating says: <span className="text-amber-light font-semibold">This is not the end. This is the beginning of real change.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-amber-orange mb-6">
          Join Us in Creating This Precedent
        </h2>
        <p className="text-xl text-cream-light max-w-2xl mx-auto mb-8">
          Whether you're a survivor, a lawyer, a journalist, or an ally—this fight needs you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/share-story"
            className="inline-flex items-center justify-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Share Your Story
            <ExternalLink size={20} />
          </a>
          <a
            href="/legal-support"
            className="inline-flex items-center justify-center gap-2 bg-charcoal-light hover:bg-charcoal text-amber-orange px-8 py-4 rounded-lg font-semibold transition-colors border-2 border-amber-orange"
          >
            Become a Lawyer Ally
            <ExternalLink size={20} />
          </a>
          <a
            href="/donate"
            className="inline-flex items-center justify-center gap-2 bg-charcoal-light hover:bg-charcoal text-amber-orange px-8 py-4 rounded-lg font-semibold transition-colors border-2 border-amber-orange"
          >
            Support the Fight
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-16 px-4 bg-charcoal-light border-t-2 border-amber-orange text-center">
        <p className="text-cream-light text-lg max-w-2xl mx-auto leading-relaxed">
          To everyone who has supported this journey: Thank you. Your courage, your voice, and your commitment to justice will be remembered in history. Together, we are creating a precedent that will protect voiceless victims for generations to come.
        </p>
        <p className="text-amber-light font-semibold mt-6 text-xl">
          This is NOT the end. This is the beginning.
        </p>
      </section>
    </div>
  );
}
