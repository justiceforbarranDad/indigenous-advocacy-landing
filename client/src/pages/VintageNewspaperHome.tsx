import '../styles/vintage-newspaper.css';
import { useAuth } from '@/_core/hooks/useAuth';

export default function VintageNewspaperHome() {
  const { user } = useAuth();

  return (
    <div className="vintage-paper min-h-screen pb-20">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        
        {/* MASTHEAD */}
        <div className="newspaper-masthead">
          <div className="masthead-title">JUSTICE FOR BARRAN</div>
          <div className="masthead-subtitle">A Newspaper of Indigenous Rights & Systemic Accountability</div>
          <div className="masthead-date">MARCH 29, 2026 — VOLUME 1, ISSUE 3</div>
        </div>

        {/* TOP BANNER */}
        <div className="news-box mb-6">
          <div className="news-box-title">✓ VERIFIED UPDATE</div>
          <div className="text-center text-lg font-bold mb-2">UN Letter Submitted - March 27, 2026</div>
          <p className="text-center text-sm">International bodies contacted regarding systemic failures in child protection services</p>
        </div>

        <div className="divider-double"></div>

        {/* MAIN STORY - TWO COLUMN */}
        <div className="newspaper-columns mb-8">
          
          {/* LEFT COLUMN - MAIN STORY */}
          <div className="column">
            <div className="headline-main">Five Years of Systemic Abandonment</div>
            <div className="subheading">Indigenous Family Demands Justice After DPJ Failure, Political Silence, and Corporate Hypocrisy</div>
            
            <div className="divider-line my-3"></div>

            <div className="byline">By Justice for Barran Campaign</div>
            <div className="dateline">MARCH 29, 2026</div>

            <p className="article-text-single mb-3">
              <span className="drop-cap">S</span>ince 2021, our Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed. The system that promised to protect vulnerable children abandoned us instead.
            </p>

            <div className="news-box my-3">
              <div className="news-box-title">FAMILY TRAUMA</div>
              <p className="text-sm">Teen stabbed 3x, major impacts, mental health destroyed</p>
            </div>

            <p className="article-text-single mb-3">
              The Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up, no education, no mental health support. Jordan's Principle - which guarantees no-delay services for First Nations children - was completely ignored.
            </p>

            <div className="news-box my-3">
              <div className="news-box-title">SYSTEM FAILURE</div>
              <p className="text-sm">DPJ withdrew Jan 2023, no follow-up, Jordan's Principle ignored</p>
            </div>

            <p className="article-text-single">
              This is not an isolated case. The 2025 Nunavik systemic inquiry reveals chronic failures: under-resourced services, culturally inappropriate interventions, and ongoing harm to Indigenous children's health and development.
            </p>
          </div>

          {/* RIGHT COLUMN - POLITICAL & CORPORATE */}
          <div className="column">
            <div className="headline-secondary">POLITICAL ACCOUNTABILITY</div>
            <div className="subheading">Government Silence = Complicity</div>
            
            <p className="article-text-single mb-3">
              We escalated to federal Members of Parliament - same silence. Our provincial MNA sent a cease-and-desist warning instead of assistance. This is what happens when a constituent asks for help from elected representatives bound by conduct rules.
            </p>

            <div className="news-box my-3">
              <div className="news-box-title">POLITICAL SILENCE</div>
              <p className="text-sm">50+ officials contacted, zero adequate responses</p>
            </div>

            <div className="divider-line my-4"></div>

            <div className="headline-secondary">CORPORATE ACCOUNTABILITY</div>
            <div className="subheading">Who Profits from Reconciliation?</div>

            <p className="article-text-single mb-3">
              RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada, NHL teams - all sponsor Orange Shirt Day while systemic failures continue. Corporate hypocrisy exposed.
            </p>

            <div className="news-box my-3">
              <div className="news-box-title">CORPORATE SPONSORS</div>
              <ul className="article-list text-sm">
                <li>RBC - Profit from resource extraction</li>
                <li>TD Bank - Invest in projects affecting Indigenous lands</li>
                <li>Scotiabank & CIBC - Performative reconciliation</li>
                <li>Canadian Tire - Minimal Indigenous investment</li>
                <li>Walmart Canada - Exploit Indigenous resources</li>
                <li>NHL Teams - Profit from Indigenous imagery</li>
              </ul>
            </div>

            <p className="article-text-single text-sm">
              Real reconciliation requires genuine accountability and meaningful resource allocation, not marketing campaigns.
            </p>
          </div>
        </div>

        <div className="divider-double"></div>

        {/* MIDDLE SECTION - THREE COLUMNS */}
        <div className="newspaper-columns newspaper-columns-3 mb-8">
          
          <div className="column">
            <div className="headline-tertiary">LISTEN</div>
            <div className="subheading">Le Silence des Politiciens</div>
            <p className="text-sm mb-2">Episode 3 - 14:15</p>
            <p className="text-xs mb-3">Bilingual podcast series documenting systemic failures and political accountability</p>
            <div className="classified-ad">
              <div className="ad-title">PLAY PODCAST</div>
              <p className="text-xs">Available on all platforms</p>
            </div>
          </div>

          <div className="column">
            <div className="headline-tertiary">TAKE ACTION</div>
            <div className="subheading">Sign the Petition</div>
            <p className="text-sm mb-2">28,300+ signatures</p>
            <p className="text-xs mb-3">Demanding independent inquiry into systemic failures and application of Jordan's Principle</p>
            <div className="classified-ad">
              <div className="ad-title">SIGN NOW</div>
              <p className="text-xs">Join the movement</p>
            </div>
          </div>

          <div className="column">
            <div className="headline-tertiary">DONATE</div>
            <div className="subheading">Support Legal Fund</div>
            <p className="text-sm mb-2">Donations: $0</p>
            <p className="text-xs mb-3">Support legal fees, media production, and international advocacy efforts</p>
            <div className="classified-ad">
              <div className="ad-title">CONTRIBUTE</div>
              <p className="text-xs">E-Transfer or online</p>
            </div>
          </div>
        </div>

        <div className="divider-double"></div>

        {/* BOTTOM SECTION - SYSTEMIC INQUIRY */}
        <div className="newspaper-columns mb-8">
          <div className="column">
            <div className="headline-secondary">SYSTEMIC FAILURES DOCUMENTED</div>
            <div className="subheading">2025 Nunavik Inquiry Reveals Chronic Issues</div>
            
            <p className="article-text-single mb-3">
              The CDPDJ's 2025 systemic inquiry into Nunavik child protection services documents:
            </p>

            <div className="news-box my-3">
              <ul className="article-list text-sm">
                <li>Under-resourced services unable to meet demand</li>
                <li>Culturally inappropriate interventions</li>
                <li>Harm to Indigenous children's health and development</li>
                <li>Violations of Article 23 UNCRC</li>
                <li>Breach of Quebec Charter Article 39</li>
                <li>Failure to apply Jordan's Principle</li>
              </ul>
            </div>

            <p className="article-text-single">
              Five years of violations. Multiple government bodies contacted. Zero adequate responses. This is the reality of systemic failure in child protection for Indigenous families.
            </p>
          </div>

          <div className="column">
            <div className="headline-secondary">INTERNATIONAL RESPONSE</div>
            <div className="subheading">UN Bodies Contacted</div>

            <p className="article-text-single mb-3">
              On March 27, 2026, letters were submitted to international human rights bodies documenting systemic failures:
            </p>

            <div className="news-box my-3">
              <ul className="article-list text-sm">
                <li>UN Committee on the Rights of the Child</li>
                <li>UN Special Rapporteur on Indigenous Rights</li>
                <li>International Court of Justice</li>
                <li>Human Rights Watch</li>
                <li>Amnesty International</li>
              </ul>
            </div>

            <div className="divider-line my-4"></div>

            <div className="headline-tertiary">PROTECTED EXPRESSION</div>
            <p className="text-xs mb-2">
              Public posts calling for independent inquiry, Jordan's Principle application, and real support are protected by Charter s.2(b) freedom of expression and Indigenous rights jurisprudence.
            </p>

            <div className="classified-ad mt-3">
              <div className="ad-title">CONTACT US</div>
              <p className="text-xs">justiceforbarran@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="divider-double"></div>

        {/* FOOTER SECTION */}
        <div className="text-center py-8 border-t-2 border-b-2 border-black">
          <div className="headline-tertiary mb-3">TRUTH AND RECONCILIATION</div>
          <p className="text-sm mb-4 italic">
            "Real survivors deserve a worry-free future—the same security you enjoy. Justice delayed is justice denied."
          </p>
          <p className="text-xs font-bold">
            JUSTICE FOR BARRAN | VOLUME 1, ISSUE 3 | MARCH 29, 2026
          </p>
        </div>

        {/* SIDEBAR INFORMATION */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="sidebar">
            <div className="headline-tertiary text-sm">RESOURCES</div>
            <ul className="article-list text-xs mt-2">
              <li><a href="#" className="underline">Jordan's Principle - Official</a></li>
              <li><a href="#" className="underline">CDPDJ Complaint Process</a></li>
              <li><a href="#" className="underline">UN Convention on Rights of Child</a></li>
              <li><a href="#" className="underline">Quebec Charter of Rights</a></li>
            </ul>
          </div>

          <div className="sidebar">
            <div className="headline-tertiary text-sm">SHARE THIS STORY</div>
            <p className="text-xs mt-2">
              Share this newspaper with your networks. Tag elected officials. Demand accountability. Real justice requires action, not silence.
            </p>
            <p className="text-xs mt-2 font-bold">
              #JusticeForBarran #IndigenousRights #EveryChildMatters #TruthAndReconciliation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
