import { Clock, BookOpen, Users, Globe } from 'lucide-react';

export default function McGovernInstitute() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-forest-green to-amber-orange text-white rounded-lg p-12 text-center mb-16 shadow-xl">
          <div className="flex justify-center mb-6">
            <Clock size={48} className="animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Coming Soon</h1>
          <p className="text-xl md:text-2xl font-semibold">The McGovern Institute for Human Rights Education</p>
          <p className="text-lg mt-2 opacity-90">L'Institut McGovern pour l'éducation aux droits de la personne</p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-forest-green mb-6 flex items-center gap-3">
              <BookOpen size={32} />
              Our Mission
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-charcoal leading-relaxed">
                The McGovern Institute for Human Rights Education is dedicated to advancing education, research, and public understanding of human rights, peacebuilding, and social justice.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-orange p-4">
                <p className="font-semibold text-forest-green mb-2">Incorporated under Part III of the Companies Act (Québec)</p>
                <p className="text-charcoal-light">
                  All activities are conducted exclusively for the public benefit, without political or partisan purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Bilingual Names */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-forest-green mb-4">English</h3>
              <p className="text-xl font-semibold text-charcoal">
                The McGovern Institute for Human Rights Education
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-forest-green mb-4">Français</h3>
              <p className="text-xl font-semibold text-charcoal">
                L'Institut McGovern pour l'éducation aux droits de la personne
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-forest-green mb-6 flex items-center gap-3">
              <Users size={32} />
              Core Pillars
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-orange pl-4">
                <h3 className="font-bold text-forest-green text-lg mb-2">Human Rights Education</h3>
                <p className="text-charcoal-light">
                  Educating the voiceless people about fundamental human rights that all possess, regardless of background or circumstance.
                </p>
              </div>
              <div className="border-l-4 border-amber-orange pl-4">
                <h3 className="font-bold text-forest-green text-lg mb-2">Research & Documentation</h3>
                <p className="text-charcoal-light">
                  Conducting rigorous research into systemic failures, institutional obstruction, and patterns of injustice affecting vulnerable populations.
                </p>
              </div>
              <div className="border-l-4 border-amber-orange pl-4">
                <h3 className="font-bold text-forest-green text-lg mb-2">Peacebuilding & Reconciliation</h3>
                <p className="text-charcoal-light">
                  Advancing reconciliation through truth-telling, accountability, and restorative justice approaches that honor all voices.
                </p>
              </div>
              <div className="border-l-4 border-amber-orange pl-4">
                <h3 className="font-bold text-forest-green text-lg mb-2">Social Justice Advocacy</h3>
                <p className="text-charcoal-light">
                  Advocating for systemic change and institutional accountability to protect vulnerable and marginalized communities.
                </p>
              </div>
            </div>
          </div>

          {/* What's Coming */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-forest-green mb-6 flex items-center gap-3">
              <Globe size={32} />
              What's Coming
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-forest-green mb-1">Educational Curriculum</h3>
                  <p className="text-charcoal-light">Comprehensive human rights education programs for students, educators, and community members</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-forest-green mb-1">Research Publications</h3>
                  <p className="text-charcoal-light">In-depth reports on systemic failures, institutional accountability, and best practices in human rights protection</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-forest-green mb-1">Community Workshops</h3>
                  <p className="text-charcoal-light">Interactive workshops on rights awareness, advocacy, and institutional accountability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-forest-green mb-1">International Partnerships</h3>
                  <p className="text-charcoal-light">Collaborations with UN bodies, international human rights organizations, and Indigenous advocacy networks</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-orange text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-forest-green mb-1">Policy Advocacy</h3>
                  <p className="text-charcoal-light">Advocating for legislative and policy changes to prevent systemic failures and protect vulnerable populations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fundamental Rights */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Fundamental Human Rights We All Have</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to life, liberty, and security of person</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to protection from violence and abuse</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to education and development</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to health and mental health services</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to fair treatment by government institutions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to seek justice and accountability</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to cultural identity and self-determination</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Right to freedom from discrimination</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-forest-green mb-4">Stay Updated</h2>
            <p className="text-charcoal-light mb-6">
              Subscribe to receive updates when the McGovern Institute launches its programs and initiatives.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-orange"
              />
              <button className="bg-amber-orange text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-light transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-charcoal-light text-sm">
            The McGovern Institute for Human Rights Education is committed to creating a world where the voiceless are heard, where systemic failures are exposed and corrected, and where fundamental human rights are protected for all.
          </p>
        </div>
      </div>
    </div>
  );
}
