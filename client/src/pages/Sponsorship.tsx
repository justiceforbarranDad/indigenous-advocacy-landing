import { Mail, Heart, Scale, Globe, Users, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function Sponsorship() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 text-charcoal py-12 px-4" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Support All Voiceless Victims
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Sponsorship & Pro Bono Legal Representation for Systemic Justice
          </p>
          <p className="text-lg italic text-gray-600 max-w-3xl mx-auto">
            This platform exists for Barran and for every voiceless victim globally—children failed by systems, marginalized communities denied justice, and vulnerable populations whose voices have been silenced. If you can help, we need you.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'sponsor', label: 'Become a Sponsor' },
            { id: 'legal', label: 'Pro Bono Legal' },
            { id: 'inkind', label: 'In-Kind Support' },
            { id: 'corporate', label: 'Corporate Partners' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                activeTab === tab.id
                  ? 'bg-forest-green text-cream'
                  : 'bg-white text-forest-green border-2 border-forest-green hover:bg-forest-green/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border-4 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-red-700" size={32} />
                  <h2 className="text-2xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                    Why We Need You
                  </h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Systemic failures don't discriminate. They affect Indigenous children in Canada, foster children in America, refugee families in Europe, and vulnerable populations everywhere. When institutions fail, voiceless victims need advocates, lawyers, and supporters.
                </p>
                <p className="text-lg leading-relaxed">
                  This platform was built for Barran—a First Nations youth denied justice for five years. But it's also for every child, every family, every community that has been failed by the systems meant to protect them.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-4 border-black">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-blue-700" size={32} />
                  <h2 className="text-2xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                    Global Impact
                  </h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Your support can help:
                </p>
                <ul className="space-y-2 text-lg">
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Fund legal action for marginalized communities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Connect pro bono lawyers with voiceless victims</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Document systemic failures across borders</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Amplify voices of those denied justice</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Become a Sponsor */}
          {activeTab === 'sponsor' && (
            <div className="bg-white p-8 rounded-lg border-4 border-black">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-red-700" size={32} />
                <h2 className="text-3xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                  Become a Sponsor
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Individual Sponsor
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Support specific cases or general advocacy work. Your contribution helps fund legal action, documentation, and amplification of voiceless victims.
                  </p>
                  <p className="text-xs font-bold text-gray-700">
                    Flexible amounts • Tax receipt provided • Updates on impact
                  </p>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Organizational Sponsor
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    NGOs, nonprofits, and advocacy organizations can partner with us to expand reach and impact for voiceless victims globally.
                  </p>
                  <p className="text-xs font-bold text-gray-700">
                    Co-branding • Joint campaigns • Shared resources
                  </p>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Corporate Sponsor
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Companies committed to social justice can sponsor specific initiatives or become ongoing partners in the fight for systemic accountability.
                  </p>
                  <p className="text-xs font-bold text-gray-700">
                    Visibility • CSR alignment • Impact reporting
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 border-2 border-black rounded-lg mb-6">
                <h3 className="font-bold mb-4">How to Become a Sponsor:</h3>
                <ol className="space-y-3 text-lg">
                  <li className="flex gap-3">
                    <span className="font-bold">1.</span>
                    <span>Email us at <a href="mailto:sponsor@justiceforbarran.org" className="text-blue-700 font-bold hover:underline">sponsor@justiceforbarran.org</a></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">2.</span>
                    <span>Tell us about your organization and sponsorship interests</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">3.</span>
                    <span>We'll discuss partnership opportunities and impact</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">4.</span>
                    <span>Finalize terms and begin supporting voiceless victims</span>
                  </li>
                </ol>
              </div>
            </div>
          )}

          {/* Pro Bono Legal */}
          {activeTab === 'legal' && (
            <div className="bg-white p-8 rounded-lg border-4 border-black">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="text-blue-700" size={32} />
                <h2 className="text-3xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                  Pro Bono Legal Representation
                </h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                We're seeking lawyers, legal teams, and law firms willing to offer pro bono representation for voiceless victims facing systemic failure. Your expertise can change lives.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    We Need
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Family law specialists</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Human rights lawyers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Constitutional law experts</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>International law specialists</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Administrative law practitioners</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Paralegals & law students</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Types of Cases
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Systemic institutional failure</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Child protection violations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Indigenous rights violations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Government accountability</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Refugee & immigration issues</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Marginalized community advocacy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 border-2 border-black rounded-lg">
                <h3 className="font-bold mb-4">Interested in Pro Bono Work?</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Contact us to discuss how your legal expertise can help voiceless victims access justice:
                </p>
                <a 
                  href="mailto:legal@justiceforbarran.org"
                  className="inline-flex items-center gap-2 bg-forest-green text-cream px-6 py-3 rounded-lg font-bold hover:bg-forest-green/90 transition-colors"
                >
                  <Mail size={20} />
                  Email Legal Team
                </a>
              </div>
            </div>
          )}

          {/* In-Kind Support */}
          {activeTab === 'inkind' && (
            <div className="bg-white p-8 rounded-lg border-4 border-black">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-green-700" size={32} />
                <h2 className="text-3xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                  In-Kind Donations & Support
                </h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Beyond financial support, we need organizations and professionals offering services that amplify the voices of voiceless victims.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Media & Communications
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Video production & editing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Podcast production</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Graphic design & branding</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Social media management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Journalism & storytelling</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Translation services</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Professional Services
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Accounting & financial management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Web development & hosting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Marketing & PR</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Research & data analysis</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Psychological counseling</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span>Medical expertise & consultation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 border-2 border-black rounded-lg">
                <h3 className="font-bold mb-4">Offer In-Kind Support:</h3>
                <p className="text-lg leading-relaxed mb-4">
                  If your organization or business can offer services to support voiceless victims, we want to hear from you:
                </p>
                <a 
                  href="mailto:inkind@justiceforbarran.org"
                  className="inline-flex items-center gap-2 bg-forest-green text-cream px-6 py-3 rounded-lg font-bold hover:bg-forest-green/90 transition-colors"
                >
                  <Mail size={20} />
                  Offer In-Kind Support
                </a>
              </div>
            </div>
          )}

          {/* Corporate Partners */}
          {activeTab === 'corporate' && (
            <div className="bg-white p-8 rounded-lg border-4 border-black">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-purple-700" size={32} />
                <h2 className="text-3xl font-black" style={{ fontFamily: 'Georgia, serif' }}>
                  Corporate Partnerships
                </h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Companies committed to social justice and accountability can become strategic partners in our mission to amplify voiceless victims globally.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Partnership Benefits
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex gap-2">
                      <span className="font-bold">✓</span>
                      <span>Co-branding & visibility</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">✓</span>
                      <span>CSR alignment & impact reporting</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">✓</span>
                      <span>Employee engagement opportunities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">✓</span>
                      <span>Tax deductibility</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">✓</span>
                      <span>Media & PR opportunities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">✓</span>
                      <span>Global reach & impact</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 border-2 border-black rounded-lg">
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    Partnership Levels
                  </h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Advocate Partner:</strong> $5K-25K annually</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Champion Partner:</strong> $25K-100K annually</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Justice Partner:</strong> $100K+ annually</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Strategic Partner:</strong> Custom arrangements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-6 border-2 border-black rounded-lg">
                <h3 className="font-bold mb-4">Interested in Corporate Partnership?</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Let's discuss how your company can make a meaningful impact on voiceless victims globally:
                </p>
                <a 
                  href="mailto:corporate@justiceforbarran.org"
                  className="inline-flex items-center gap-2 bg-forest-green text-cream px-6 py-3 rounded-lg font-bold hover:bg-forest-green/90 transition-colors"
                >
                  <Mail size={20} />
                  Explore Partnerships
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-forest-green text-cream p-8 rounded-lg border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Every Voice Matters
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Whether you're a lawyer, sponsor, organization, or professional with skills to share—we need you. Voiceless victims around the world are waiting for advocates like you.
          </p>
          <p className="text-lg font-bold">
            Contact us today to join the fight for justice, accountability, and systemic change.
          </p>
        </div>
      </div>
    </div>
  );
}
