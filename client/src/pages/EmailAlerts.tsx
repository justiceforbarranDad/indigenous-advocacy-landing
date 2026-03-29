import { EmailOptIn } from '@/components/EmailOptIn';
import { Mail, CheckCircle, TrendingUp } from 'lucide-react';

export default function EmailAlerts() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            EMAIL ALERTS
          </h1>
          <p className="text-lg md:text-xl mb-2">Detailed Updates Delivered</p>
          <p className="text-sm tracking-widest">Get comprehensive information about Justice for Barran</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b-4 border-black">
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">2,156</div>
            <p className="text-sm font-bold uppercase tracking-widest">Email Subscribers</p>
          </div>
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">24</div>
            <p className="text-sm font-bold uppercase tracking-widest">Emails Sent</p>
          </div>
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">68%</div>
            <p className="text-sm font-bold uppercase tracking-widest">Open Rate</p>
          </div>
        </div>

        {/* EMAIL TYPES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">What You'll Receive</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Court Updates',
                description: 'Detailed reports on court dates, hearing results, and legal developments with full context and implications',
                icon: CheckCircle
              },
              {
                title: 'Government Action',
                description: 'Comprehensive alerts when Parliament votes, government officials respond, or policy changes occur',
                icon: TrendingUp
              },
              {
                title: 'Campaign Milestones',
                description: 'Celebration emails with detailed breakdowns of petition signatures, donations, and supporter growth',
                icon: Mail
              },
              {
                title: 'Media Coverage',
                description: 'Links to news articles, interviews, and media mentions with analysis of coverage impact',
                icon: Mail
              }
            ].map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="border-4 border-black p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="font-black" />
                    <h3 className="text-2xl font-black">{type.title}</h3>
                  </div>
                  <p className="text-lg leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RECENT EMAILS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Recent Emails</h2>
          
          <div className="space-y-4">
            {[
              {
                date: 'March 28, 2026',
                subject: 'Court Hearing Scheduled - April 15',
                preview: 'Justice for Barran hearing has been scheduled for April 15, 2026. Here\'s what to expect and how you can help...'
              },
              {
                date: 'March 25, 2026',
                subject: 'Milestone Alert: 25,000 Petition Signatures!',
                preview: 'We\'ve reached 25,000 signatures! Here\'s the breakdown of support by region and demographic...'
              },
              {
                date: 'March 22, 2026',
                subject: 'Government Response Expected This Week',
                preview: 'The PMO has committed to responding to our petition by end of week. Here\'s what we\'re expecting...'
              },
              {
                date: 'March 20, 2026',
                subject: 'Media Coverage: CBC Feature Story',
                preview: 'CBC is featuring our story on their national news program. Here\'s how to watch and share...'
              }
            ].map((email, idx) => (
              <div key={idx} className="border-l-4 border-black pl-6 py-4">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">{email.date}</p>
                <h4 className="text-xl font-black mb-2">{email.subject}</h4>
                <p className="text-lg leading-relaxed text-gray-700">{email.preview}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OPT-IN FORM */}
        <EmailOptIn />

        {/* COMPARISON */}
        <div className="mt-8 pt-8 border-t-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Email vs SMS</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="border-r-2 border-black p-4 text-left font-black">Feature</th>
                  <th className="border-r-2 border-black p-4 text-left font-black">Email</th>
                  <th className="p-4 text-left font-black">SMS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Detailed Information', email: '✓', sms: '✗' },
                  { feature: 'Links & Resources', email: '✓', sms: '✗' },
                  { feature: 'Instant Notification', email: '✗', sms: '✓' },
                  { feature: 'Works Offline', email: '✗', sms: '✓' },
                  { feature: 'Formatting & Images', email: '✓', sms: '✗' },
                  { feature: 'Urgent Alerts', email: '✗', sms: '✓' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b-2 border-gray-300">
                    <td className="border-r-2 border-black p-4 font-bold">{row.feature}</td>
                    <td className="border-r-2 border-black p-4 text-center text-lg">{row.email}</td>
                    <td className="p-4 text-center text-lg">{row.sms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 pt-8 border-t-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How often will I receive emails?',
                a: 'Email frequency varies based on campaign developments. You may receive 2-4 emails per week during active periods, or fewer during quiet periods.'
              },
              {
                q: 'Can I customize which emails I receive?',
                a: 'Yes. You can manage your preferences by clicking the link in any email. Choose which types of updates you want to receive.'
              },
              {
                q: 'How do I unsubscribe?',
                a: 'Click the unsubscribe link at the bottom of any email. Your email will be removed from our list within 24 hours.'
              },
              {
                q: 'Is my email address safe?',
                a: 'Yes. Your email is encrypted and stored securely. We will never share your information with third parties.'
              },
              {
                q: 'Can I subscribe to both SMS and email?',
                a: 'Absolutely! Many supporters subscribe to both to get urgent SMS alerts and detailed email updates.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-2 border-black p-6">
                <h4 className="text-xl font-black mb-3">{faq.q}</h4>
                <p className="text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
