import { SMSOptIn } from '@/components/SMSOptIn';
import { MessageSquare, AlertCircle, TrendingUp } from 'lucide-react';

export default function SMSAlerts() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            SMS ALERTS
          </h1>
          <p className="text-lg md:text-xl mb-2">Get Urgent Notifications</p>
          <p className="text-sm tracking-widest">Stay informed about critical actions and campaign updates</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b-4 border-black">
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">3,247</div>
            <p className="text-sm font-bold uppercase tracking-widest">Subscribers</p>
          </div>
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">15</div>
            <p className="text-sm font-bold uppercase tracking-widest">Alerts Sent</p>
          </div>
          <div className="border-4 border-black p-6 text-center">
            <div className="text-4xl font-black mb-2">92%</div>
            <p className="text-sm font-bold uppercase tracking-widest">Open Rate</p>
          </div>
        </div>

        {/* ALERT TYPES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">What You'll Receive</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Court Updates',
                description: 'Immediate notifications about court dates, hearing results, and legal developments',
                icon: AlertCircle
              },
              {
                title: 'Government Action',
                description: 'Alerts when Parliament votes, government officials respond, or policy changes occur',
                icon: TrendingUp
              },
              {
                title: 'Campaign Milestones',
                description: 'Celebrations of petition signatures reached, donations milestones, and supporter growth',
                icon: MessageSquare
              },
              {
                title: 'Media Opportunities',
                description: 'Invitations to interviews, media appearances, and public speaking opportunities',
                icon: MessageSquare
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

        {/* RECENT ALERTS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Recent Alerts</h2>
          
          <div className="space-y-4">
            {[
              {
                date: 'March 28, 2026',
                title: 'Court Hearing Scheduled',
                message: 'Justice for Barran hearing set for April 15. Legal team needs community support.'
              },
              {
                date: 'March 25, 2026',
                title: 'Petition Milestone: 25,000 Signatures!',
                message: 'We reached 25,000 signatures! Share this victory and keep pushing for 50,000.'
              },
              {
                date: 'March 22, 2026',
                title: 'Government Response Expected',
                message: 'PMO response to petition due this week. Stay tuned for updates.'
              },
              {
                date: 'March 20, 2026',
                title: 'Media Interview Opportunity',
                message: 'CBC wants to feature our story. Volunteers needed for interviews.'
              }
            ].map((alert, idx) => (
              <div key={idx} className="border-l-4 border-black pl-6 py-4">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-2">{alert.date}</p>
                <h4 className="text-xl font-black mb-2">{alert.title}</h4>
                <p className="text-lg leading-relaxed">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OPT-IN FORM */}
        <SMSOptIn />

        {/* FAQ */}
        <div className="mt-8 pt-8 border-t-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'How often will I receive SMS alerts?',
                a: 'Alert frequency varies based on campaign developments. You may receive 1-3 messages per week during active periods, or fewer during quiet periods.'
              },
              {
                q: 'Will this cost me money?',
                a: 'Standard SMS message rates apply based on your phone plan. We recommend checking with your carrier for details.'
              },
              {
                q: 'How do I unsubscribe?',
                a: 'Reply STOP to any SMS message to unsubscribe immediately. You can also manage your preferences on this page.'
              },
              {
                q: 'Is my phone number safe?',
                a: 'Yes. Your phone number is encrypted and stored securely. We will never share your information with third parties.'
              },
              {
                q: 'Can I change my preferences?',
                a: 'Yes. You can choose which types of alerts you want to receive by replying HELP to any SMS message.'
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
