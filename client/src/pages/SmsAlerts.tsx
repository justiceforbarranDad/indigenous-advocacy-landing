import { useState } from 'react';
import { MessageCircle, Bell, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SmsAlerts() {
  const [phone, setPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [alertTypes, setAlertTypes] = useState({
    caseUpdates: true,
    surveyMilestones: true,
    advocacyWins: true,
    newResources: false,
    emergencyAlerts: true
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubscribed(true);
      // In production, this would call an API to subscribe to SMS
      console.log('SMS subscription:', { phone, alertTypes });
    }
  };

  const toggleAlertType = (key: keyof typeof alertTypes) => {
    setAlertTypes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle size={40} className="text-blue-600" />
            <h1 className="text-4xl font-bold">SMS Alerts</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get real-time text message updates on case progress, survey milestones, and advocacy wins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Subscription Form */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Subscribe to SMS Alerts</h2>
            
            {subscribed ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <CheckCircle size={48} className="text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
                  Subscription Confirmed!
                </h3>
                <p className="text-green-600 dark:text-green-300 mb-4">
                  You'll receive SMS updates at {phone}
                </p>
                <Button 
                  onClick={() => setSubscribed(false)}
                  variant="outline"
                  className="w-full"
                >
                  Change Phone Number
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number (with country code)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (438) 926-3636"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Standard SMS rates may apply. Message frequency varies.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Alert Types</h3>
                  {Object.entries(alertTypes).map(([key, enabled]) => (
                    <label key={key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={() => toggleAlertType(key as keyof typeof alertTypes)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      <span className="capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </label>
                  ))}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-lg"
                >
                  Subscribe to SMS Alerts
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By subscribing, you agree to receive SMS messages. You can unsubscribe anytime by replying STOP.
                </p>
              </form>
            )}
          </div>

          {/* Sample Alerts */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Sample Alerts</h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded">
              <div className="flex items-start gap-3">
                <Bell size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-900 dark:text-blue-300">Case Update</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mt-1">
                    "UN Response: Special Rapporteurs acknowledged receipt of complaint. Formal investigation initiated. Case Reference: 100021349"
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">Example message</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4 rounded">
              <div className="flex items-start gap-3">
                <Bell size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-green-900 dark:text-green-300">Survey Milestone</h3>
                  <p className="text-sm text-green-800 dark:text-green-200 mt-1">
                    "500+ Canadians report similar systemic failures. Quebec: 127 responses. Your voice matters. Share your story: justiceforbarran.org/survey"
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">Example message</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-600 p-4 rounded">
              <div className="flex items-start gap-3">
                <Bell size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-900 dark:text-amber-300">Advocacy Win</h3>
                  <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
                    "Petition reached 10,000 signatures! Media coverage secured. Thank you for your support. Sign & share: justiceforbarran.org/petition"
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">Example message</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded">
              <div className="flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300">Emergency Alert</h3>
                  <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                    "URGENT: Court hearing scheduled March 30. Your presence matters. Details: justiceforbarran.org/case-tracker"
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2">Example message</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">How often will I receive messages?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Message frequency depends on your selected alert types. Case updates may be sent weekly, while emergency alerts are sent immediately when critical events occur.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Is there a cost?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                SMS alerts are free to subscribe. Standard text message rates from your carrier may apply depending on your phone plan.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">How do I unsubscribe?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reply STOP to any message to unsubscribe immediately. You can also manage your preferences on this page anytime.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Is my information private?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. Your phone number is encrypted and never shared with third parties. We use industry-standard security to protect your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
