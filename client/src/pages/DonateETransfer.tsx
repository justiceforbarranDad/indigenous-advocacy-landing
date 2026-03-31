import { BankSelector } from '@/components/BankSelector';

export default function DonateETransfer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Support Justice for Barran
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Send a secure e-Transfer donation directly from your Canadian bank account. 
            Your support funds legal action and accountability for Indigenous families.
          </p>
        </div>

        {/* Bank Selector */}
        <BankSelector />

        {/* Why Your Support Matters */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-forest-green">
            <h3 className="text-xl font-bold text-forest-green mb-3">Legal Action</h3>
            <p className="text-charcoal-light">
              Funds support independent legal proceedings to hold institutions accountable for systemic failures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-orange">
            <h3 className="text-xl font-bold text-forest-green mb-3">Advocacy</h3>
            <p className="text-charcoal-light">
              Your donation amplifies Indigenous voices and demands for real change and reconciliation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-light">
            <h3 className="text-xl font-bold text-forest-green mb-3">Protection</h3>
            <p className="text-charcoal-light">
              Support protects vulnerable Indigenous families from ongoing systemic harm and neglect.
            </p>
          </div>
        </div>

        {/* Alternative Donation Methods */}
        <div className="mt-16 bg-forest-green/10 rounded-lg p-8 border border-forest-green/30">
          <h2 className="text-2xl font-bold text-forest-green mb-4">Other Ways to Donate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">GoFundMe</h3>
              <p className="text-charcoal-light mb-3">
                Donate via GoFundMe for additional payment options and international support.
              </p>
              <a
                href="https://www.gofundme.com/f/justice-for-barran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-orange hover:bg-amber-light text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Donate on GoFundMe →
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-charcoal mb-2">Direct Contact</h3>
              <p className="text-charcoal-light mb-3">
                For other donation methods or to discuss sponsorship opportunities, please reach out.
              </p>
              <a
                href="mailto:contact@justiceforbarran.com"
                className="inline-flex items-center gap-2 bg-forest-green hover:bg-forest-green/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>

        {/* Transparency */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-charcoal-light/10">
          <h2 className="text-2xl font-bold text-forest-green mb-4">Transparency & Accountability</h2>
          <p className="text-charcoal-light mb-4">
            All donations are tracked and reported transparently. Funds are used exclusively for:
          </p>
          <ul className="space-y-2 text-charcoal-light">
            <li className="flex items-start gap-3">
              <span className="text-amber-orange font-bold">✓</span>
              <span>Legal proceedings and court costs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-orange font-bold">✓</span>
              <span>Professional advocacy and research</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-orange font-bold">✓</span>
              <span>Documentation and evidence gathering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-orange font-bold">✓</span>
              <span>Support for affected Indigenous families</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
