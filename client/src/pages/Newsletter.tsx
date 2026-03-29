import { Mail, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('monthly');
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubscribe = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setInterests([]);
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-amber-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-forest-green mb-4 flex items-center justify-center gap-3">
            <Mail size={40} />
            Monthly Newsletter
          </h1>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Stay informed about case updates, new resources, advocacy wins, and systemic failures affecting Indigenous families
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Newsletter Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-forest-green mb-6">What You'll Receive</h2>
            
            <div className="flex gap-4">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-forest-green mb-1">Case Updates</h3>
                <p className="text-charcoal-light text-sm">Monthly progress reports on Barran's case, CDPDJ inquiry, and Jordan's Principle violations</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-forest-green mb-1">New Resources</h3>
                <p className="text-charcoal-light text-sm">Newly published complaint templates, guides, and advocacy tools</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-forest-green mb-1">Policy Updates</h3>
                <p className="text-charcoal-light text-sm">Changes to Jordan's Principle, child protection laws, and government accountability</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-forest-green mb-1">Community Stories</h3>
                <p className="text-charcoal-light text-sm">Testimonies from other families experiencing systemic failures (with permission)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-forest-green mb-1">Podcast Episodes</h3>
                <p className="text-charcoal-light text-sm">Links to new French podcast episodes with transcripts and resources</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-forest-green mb-1">Action Alerts</h3>
                <p className="text-charcoal-light text-sm">Urgent calls to action when critical thresholds are reached (e.g., 100+ survey responses from a province)</p>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-forest-green mb-6">Subscribe Now</h2>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Thank You!</h3>
                <p className="text-green-800">
                  You've been added to our newsletter. Check your email for confirmation and our latest update.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                  />
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-3">Newsletter Frequency</label>
                  <div className="space-y-2">
                    {[
                      { value: 'weekly', label: 'Weekly Updates' },
                      { value: 'monthly', label: 'Monthly Digest' },
                      { value: 'alerts', label: 'Urgent Alerts Only' },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="frequency"
                          value={option.value}
                          checked={frequency === option.value}
                          onChange={e => setFrequency(e.target.value)}
                          className="w-4 h-4 text-forest-green"
                        />
                        <span className="text-charcoal">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-bold text-forest-green mb-3">Topics of Interest</label>
                  <div className="space-y-2">
                    {[
                      'Case Updates',
                      'Jordan\'s Principle',
                      'Legal Resources',
                      'Policy Changes',
                      'Community Stories',
                      'Podcast Episodes',
                    ].map(interest => (
                      <label key={interest} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-4 h-4 text-forest-green rounded"
                        />
                        <span className="text-charcoal">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Subscribe Button */}
                <button
                  onClick={handleSubscribe}
                  disabled={!email}
                  className="w-full bg-forest-green text-white font-bold py-3 rounded-lg hover:bg-forest-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Subscribe to Newsletter
                </button>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-sm text-blue-900">
                  <p className="font-semibold mb-1">Your Privacy Matters</p>
                  <p>We never sell your email. Unsubscribe anytime with one click.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sample Newsletter */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-forest-green mb-6 flex items-center gap-2">
            <Calendar size={28} />
            Sample Newsletter (March 2026)
          </h2>

          <div className="space-y-6 border-t pt-6">
            <div>
              <h3 className="text-lg font-bold text-forest-green mb-2">📋 Case Update: UN Letter Submitted</h3>
              <p className="text-charcoal-light">
                Formal complaint submitted to UN Special Rapporteurs on March 27, 2026. Response expected within 60 days. CHRC Reference: I00021349
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-forest-green mb-2">🎙️ New Podcast: Principes de Jordan (Episode 4)</h3>
              <p className="text-charcoal-light">
                Listen to our latest episode explaining Jordan's Principle and why it failed to protect Barran. Available in French with English transcripts.
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-forest-green mb-2">📊 Survey Update: 247 Responses from 8 Provinces</h3>
              <p className="text-charcoal-light">
                We've reached 247 responses to our "Have you experienced similar issues?" survey. Quebec leads with 89 responses, followed by Ontario (56) and British Columbia (43).
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-forest-green mb-2">📚 New Resource: Evidence Collection Checklist</h3>
              <p className="text-charcoal-light">
                We've published a comprehensive checklist to help you gather evidence for complaints. Download it from our Resource Kit.
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-forest-green mb-2">⚖️ Policy Alert: Bill C-23 Advances in Parliament</h3>
              <p className="text-charcoal-light">
                New legislation on child protection is moving through Parliament. Contact your MP to support amendments strengthening Jordan's Principle enforcement.
              </p>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-forest-green mb-2">🤝 Community Story: Maria's Journey</h3>
              <p className="text-charcoal-light">
                Read how Maria from British Columbia successfully used our complaint templates to hold DPJ accountable for systemic failures.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-forest-green mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-forest-green mb-2">How often will I receive emails?</h3>
              <p className="text-charcoal-light">
                That depends on your preference. Choose weekly updates, monthly digest, or urgent alerts only. You can change your frequency anytime.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-forest-green mb-2">Can I unsubscribe?</h3>
              <p className="text-charcoal-light">
                Yes, every email has an unsubscribe link. You can also update your preferences anytime from your account settings.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-forest-green mb-2">Will you share my email?</h3>
              <p className="text-charcoal-light">
                Never. We respect your privacy completely. Your email is only used to send you our newsletter and important updates.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-forest-green mb-2">Can I change my interests?</h3>
              <p className="text-charcoal-light">
                Yes, you can update your topic preferences anytime. We'll only send you content related to your interests.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-forest-green mb-2">What if I have questions?</h3>
              <p className="text-charcoal-light">
                Use our live chat support or email us directly. Our team responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
