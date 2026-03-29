import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage(`Thank you! You've been added to our mailing list. We'll send updates about the campaign to ${email}`);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-green to-charcoal text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Stay Updated</h1>
          <p className="text-xl text-cream mb-2">
            Get campaign updates, accountability tracker changes, and advocacy alerts
          </p>
          <p className="text-lg text-amber-light">
            Join hundreds of supporters demanding justice for Barran
          </p>
        </div>

        {/* BENEFITS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-10 border-amber-orange p-6 text-center">
            <Mail className="w-12 h-12 text-amber-orange mx-auto mb-4" />
            <h3 className="font-bold mb-2">Campaign Updates</h3>
            <p className="text-sm text-cream">Latest news and developments in the Justice for Barran campaign</p>
          </Card>
          <Card className="bg-white bg-opacity-10 border-amber-orange p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Accountability Alerts</h3>
            <p className="text-sm text-cream">When government officials respond (or don't respond) to demands</p>
          </Card>
          <Card className="bg-white bg-opacity-10 border-amber-orange p-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Action Calls</h3>
            <p className="text-sm text-cream">When we need you to amplify the message and demand change</p>
          </Card>
        </div>

        {/* SIGNUP FORM */}
        <Card className="bg-white bg-opacity-95 text-charcoal p-8 border-4 border-amber-orange">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-charcoal rounded font-semibold focus:outline-none focus:border-amber-orange"
                disabled={status === 'loading'}
              />
            </div>

            <div className="flex items-start gap-3 text-xs text-charcoal-light">
              <input type="checkbox" id="consent" className="mt-1" required />
              <label htmlFor="consent">
                I agree to receive campaign updates and accountability alerts. We respect your privacy and will never share your email.
              </label>
            </div>

            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-forest-green hover:bg-charcoal text-white px-6 py-3 font-bold text-lg transition-colors"
            >
              {status === 'loading' ? 'Signing up...' : status === 'success' ? '✓ Signed Up!' : 'Join the Campaign'}
            </Button>

            {status === 'success' && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                <p className="font-bold">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                <p className="font-bold">{message}</p>
              </div>
            )}
          </form>
        </Card>

        {/* PRIVACY NOTICE */}
        <div className="mt-8 text-center text-sm text-cream">
          <p>Your email is safe with us. We only send updates about the Justice for Barran campaign.</p>
          <p className="mt-2 text-xs text-amber-light">No spam. No selling your data. Just accountability.</p>
        </div>
      </div>
    </div>
  );
}
