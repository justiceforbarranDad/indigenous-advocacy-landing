import { NewspaperSpread } from '@/components/NewspaperSpread';
import { InteractiveHighlight, HighlightData } from '@/components/InteractiveHighlight';

export default function NewspaperHome() {
  // Define highlights for interactive elements
  const frontPageHighlights: HighlightData[] = [
    {
      id: 'dpj-failure',
      text: 'DPJ became involved but withdrew in January 2023',
      title: 'DPJ Withdrawal & System Failure',
      description: 'The Direction de la Protection de la Jeunesse (DPJ) abandoned the case without proper follow-up.',
      details: `In January 2023, the DPJ withdrew from our family's case without providing:
- Adequate follow-up services
- Educational support
- Mental health services
- Application of Jordan's Principle

This represents a critical failure in the system designed to protect vulnerable Indigenous children. The withdrawal left our family without support during a critical period of trauma recovery.

Jordan's Principle guarantees that First Nations children have access to no-delay services for health, social, and educational needs. The complete failure to apply this principle is a violation of Indigenous rights and federal policy.`,
      sources: [
        { label: "Jordan's Principle - Official", url: 'https://www.sac-isc.gc.ca/eng/1633027626267/1633027637975' },
        { label: 'DPJ Services Overview', url: 'https://www.quebec.ca/en/family-and-support-services/child-protection' },
      ],
      color: 'red',
    },
    {
      id: 'political-silence',
      text: '50+ officials contacted. Zero adequate responses.',
      title: 'Political Accountability Crisis',
      description: 'Over 50 elected officials at federal, provincial, and municipal levels were contacted for assistance.',
      details: `Our family reached out to:
- Federal Members of Parliament (MPs)
- Provincial National Assembly Members (MNAs)
- Municipal representatives
- Government agencies
- Human rights bodies

Response: Silence, cease-and-desist warnings, and institutional deflection.

Key incidents:
• MNA Céline Haytayan's office sent cease-and-desist warning (Nov 19, 2023)
• Federal MPs ignored pleas for intervention
• Provincial ministers ghosted multiple requests
• CDPDJ refused investigation requests twice

This represents systemic failure of democratic accountability and Indigenous rights protection.`,
      sources: [
        { label: 'CDPDJ Complaint Reference', url: 'https://www.cdpdj.qc.ca/en' },
        { label: 'UN Convention on Rights of the Child', url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child' },
      ],
      color: 'red',
    },
    {
      id: 'corporate-hypocrisy',
      text: 'RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada, NHL teams',
      title: 'Corporate Hypocrisy Exposed',
      description: 'Major corporations sponsor reconciliation initiatives while systemic failures continue.',
      details: `These corporations sponsor Orange Shirt Day and reconciliation programs while:

RBC, TD Bank, Scotiabank, CIBC:
- Profit from resource extraction on Indigenous lands
- Invest in projects affecting Indigenous communities
- Sponsor performative reconciliation events
- Fail to address systemic issues

Canadian Tire, Walmart Canada:
- Exploit Indigenous labor and resources
- Minimal investment in Indigenous communities
- Marketing-focused "reconciliation" initiatives

NHL Teams:
- Profit from Indigenous imagery and culture
- Limited genuine support for Indigenous causes
- Performative gestures without substance

Real reconciliation requires:
✓ Genuine accountability
✓ Meaningful resource allocation
✓ Systemic change
✗ Marketing campaigns alone`,
      sources: [
        { label: 'Orange Shirt Day - Official', url: 'https://www.orangeshirtday.org/' },
        { label: 'Corporate Accountability Report', url: 'https://www.canadiancorporateaccountability.org/' },
      ],
      color: 'blue',
    },
  ];

  const pages = [
    {
      id: 1,
      title: 'JUSTICE FOR BARRAN',
      leftPage: {
        section: 'FRONT PAGE',
        headline: 'Five Years of Systemic Abandonment',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/hero-bg-USRfqWoNeN2aPgVufSqEfJ.webp',
        content: 'Indigenous Family Demands Justice After DPJ Failure, Political Silence, and Corporate Hypocrisy. Since 2021, our Indigenous family has fought for justice after serious trauma. A teenager stabbed three times. Major impacts. Mental health destroyed. The system that promised to protect vulnerable children abandoned us instead.',
      },
      rightPage: {
        section: 'BREAKING NEWS',
        headline: 'UN Letter Submitted - March 27, 2026',
        image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/barran-plate_a0ea24a4.jpg',
        content: 'International bodies contacted. Direction de la Protection de la Jeunesse (DPJ) became involved but withdrew in January 2023 - with no adequate follow-up, no education, no mental health support. Jordan\'s Principle - which guarantees no-delay services for First Nations children - was completely ignored.',
      },
    },
    {
      id: 2,
      title: 'JUSTICE FOR BARRAN',
      leftPage: {
        section: 'GOVERNMENT ACCOUNTABILITY',
        headline: 'Political Silence = Complicity',
        image: '',
        content: 'We escalated to federal MPs - same silence. Our MNA sent a cease-and-desist warning instead of assistance. 50+ officials contacted. Zero adequate responses. This is what happens when a constituent asks for help from elected representatives bound by conduct rules.',
      },
      rightPage: {
        section: 'CORPORATE ACCOUNTABILITY',
        headline: 'Who Profits from Reconciliation?',
        image: '',
        content: 'RBC, TD Bank, Scotiabank, CIBC, Canadian Tire, Walmart Canada, NHL teams - all sponsor Orange Shirt Day while systemic failures continue. Corporate hypocrisy exposed. Real reconciliation requires action, not performative gestures.',
      },
    },
    {
      id: 3,
      title: 'JUSTICE FOR BARRAN',
      leftPage: {
        section: 'SYSTEMIC FAILURES',
        headline: 'CDPDJ Inquiry Reveals Chronic Failures',
        image: '',
        content: 'The 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids\' health/development. My kids pay the price—5+ years of violations. Breaks Article 23 UNCRC, Quebec Charter art. 39, reconciliation spirit.',
      },
      rightPage: {
        section: 'TAKE ACTION',
        headline: 'How You Can Help',
        image: '',
        content: 'Sign the petition demanding independent inquiry. Donate to support legal fees and media production. Share this story with your networks. Contact your elected officials. Demand accountability. Real survivors deserve a worry-free future—the same security you enjoy. Justice delayed is justice denied.',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <NewspaperSpread 
        pages={pages}
        title="JUSTICE FOR BARRAN"
        date="MARCH 29, 2026 — VOLUME 1, ISSUE 3"
        highlights={frontPageHighlights}
      />
      
      {/* Hidden highlight data for reference - used by InteractiveHighlight component */}
      <div className="hidden">
        {frontPageHighlights.map(h => (
          <div key={h.id} data-highlight-id={h.id}>{h.text}</div>
        ))}
      </div>
    </div>
  );
}
