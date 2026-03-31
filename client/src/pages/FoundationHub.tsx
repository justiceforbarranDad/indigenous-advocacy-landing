import { Link } from 'wouter';
import { ArrowRight, BookOpen, Users, DollarSign, Zap, Target, TrendingUp } from 'lucide-react';

export default function FoundationHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-cream/95 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">
            McGovern Arts of Human Rights Foundation
          </h1>
          <h2 className="text-3xl md:text-4xl text-amber-orange mb-6 font-serif italic">
            Foundation Hub
          </h2>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto">
            Complete information about the McGovern Foundation: legal structure, governance, publishing vision, and budget allocation.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-forest-green text-white rounded-lg p-6 text-center">
            <DollarSign size={32} className="mx-auto mb-3" />
            <p className="text-3xl font-bold">$500k</p>
            <p className="text-amber-light">Fundraising Goal</p>
          </div>
          <div className="bg-amber-orange text-white rounded-lg p-6 text-center">
            <BookOpen size={32} className="mx-auto mb-3" />
            <p className="text-3xl font-bold">5</p>
            <p className="text-amber-light">Books Planned</p>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
            <Users size={32} className="mx-auto mb-3" />
            <p className="text-3xl font-bold">25</p>
            <p className="text-amber-light">Family Members Affected</p>
          </div>
          <div className="bg-green-600 text-white rounded-lg p-6 text-center">
            <TrendingUp size={32} className="mx-auto mb-3" />
            <p className="text-3xl font-bold">50k+</p>
            <p className="text-amber-light">Students/Year (Goal)</p>
          </div>
        </div>

        {/* Foundation Pages Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Foundation Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Foundation Setup */}
            <Link href="/foundation-setup">
              <a className="bg-white border-4 border-forest-green rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-forest-green text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-forest-green mb-2">Foundation Setup & Legal Process</h3>
                    <p className="text-charcoal-light mb-4">
                      Learn how McGovern Foundation will be legally established in Quebec, including timeline, costs, and CRA registration process.
                    </p>
                    <div className="flex items-center gap-2 text-forest-green font-semibold">
                      <span>View Details</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Foundation Governance */}
            <Link href="/foundation-governance">
              <a className="bg-white border-4 border-amber-orange rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-orange text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-amber-orange mb-2">Governance & Transparency</h3>
                    <p className="text-charcoal-light mb-4">
                      Understand how the foundation will be governed, including board structure, decision-making process, and financial accountability mechanisms.
                    </p>
                    <div className="flex items-center gap-2 text-amber-orange font-semibold">
                      <span>View Details</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Publishing & Legacy */}
            <Link href="/publishing-legacy">
              <a className="bg-white border-4 border-blue-600 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">Publishing & Legacy Vision</h3>
                    <p className="text-charcoal-light mb-4">
                      Discover how the foundation will create permanent educational infrastructure through 5 books, curriculum development, and international distribution.
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <span>View Details</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/* Operations Budget */}
            <Link href="/operations-budget">
              <a className="bg-white border-4 border-green-600 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Operations Budget & Fund Allocation</h3>
                    <p className="text-charcoal-light mb-4">
                      See exactly how your $500,000 donation will be allocated: $200k legal defense, $150k publishing, $70k family living, $50k operations, $30k transportation.
                    </p>
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <span>View Details</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>

        {/* Related Pages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-forest-green mb-8">Related Information</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/financial-transparency">
              <a className="bg-amber-orange/10 border-2 border-amber-orange rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="text-xl font-bold text-amber-orange mb-2">Financial Transparency</h4>
                <p className="text-charcoal-light text-sm">
                  How donations are protected in Trust Account and disability benefits are safeguarded.
                </p>
              </a>
            </Link>

            <Link href="/family-case-documentation">
              <a className="bg-forest-green/10 border-2 border-forest-green rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="text-xl font-bold text-forest-green mb-2">Family Case Documentation</h4>
                <p className="text-charcoal-light text-sm">
                  Complete documentation of 25 family members affected by 15 years of systemic negligence.
                </p>
              </a>
            </Link>

            <Link href="/un-complaint">
              <a className="bg-blue-600/10 border-2 border-blue-600 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="text-xl font-bold text-blue-600 mb-2">UN Complaint</h4>
                <p className="text-charcoal-light text-sm">
                  Official UN complaint letter documenting human rights violations and international accountability.
                </p>
              </a>
            </Link>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-forest-green text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Foundation Mission</h2>
          
          <p className="text-lg mb-6">
            McGovern Arts of Human Rights Foundation exists to:
          </p>

          <ul className="space-y-3 text-amber-light text-lg">
            <li>✓ <strong>Fight systemic injustice</strong> - Legal defense for Indigenous families abandoned by governments</li>
            <li>✓ <strong>Create accountability</strong> - Hold elected officials and institutions responsible for harm</li>
            <li>✓ <strong>Build educational infrastructure</strong> - Publish books and curriculum reaching 50,000+ students annually</li>
            <li>✓ <strong>Change laws and policies</strong> - Influence federal, provincial, and municipal governments</li>
            <li>✓ <strong>Create lasting legacy</strong> - Ensure future generations learn from our fight and never repeat these mistakes</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-amber-orange text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support McGovern Foundation</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Your donation funds legal defense, educational publishing, and systemic accountability. Every dollar is tracked, transparent, and mission-driven.
          </p>
          <Link href="/donate">
            <a className="inline-block bg-white text-amber-orange px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-light transition-colors">
              Donate Now
            </a>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-charcoal-light">
          <p className="mb-2">
            <strong>McGovern Arts of Human Rights Foundation</strong>
          </p>
          <p>
            Fighting systemic injustice. Creating lasting change. Building a better future.
          </p>
        </div>
      </div>
    </div>
  );
}
