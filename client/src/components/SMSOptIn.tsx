import { MessageSquare, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface SMSOptInProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function SMSOptIn({ onSuccess, compact = false }: SMSOptInProps) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePhone = (phoneNumber: string) => {
    // Remove non-digits
    const cleaned = phoneNumber.replace(/\D/g, '');
    // Check if it's a valid phone number (10+ digits)
    return cleaned.length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!name.trim()) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call to register SMS alert
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('SMS opt-in registered:', { name, phone });
      setSubmitted(true);
      setName('');
      setPhone('');
      
      if (onSuccess) {
        onSuccess();
      }

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to register for SMS alerts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (compact) {
    return (
      <div className="border-2 border-black p-4 bg-gray-50">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare size={20} className="font-black" />
          <h3 className="text-lg font-black">Get SMS Alerts</h3>
        </div>
        
        {submitted ? (
          <div className="flex items-center gap-2 text-green-700 font-bold">
            <Check size={20} />
            You're subscribed to SMS alerts!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:bg-white"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:bg-white"
            />
            {error && (
              <div className="flex items-center gap-2 text-red-700 text-sm">
                <AlertCircle size={16} />
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white px-3 py-2 font-bold text-sm hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {loading ? 'Registering...' : 'Subscribe to SMS Alerts'}
            </button>
            <p className="text-xs text-gray-600">
              Get urgent notifications about court dates, government votes, and critical actions needed.
            </p>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="w-full bg-white border-4 border-black p-8" style={{ fontFamily: 'Georgia, serif' }}>
      {/* HEADER */}
      <div className="mb-6 pb-6 border-b-4 border-black">
        <div className="flex items-center gap-3 mb-3">
          <MessageSquare size={32} className="font-black" />
          <h2 className="text-3xl md:text-4xl font-black">SMS Alerts</h2>
        </div>
        <p className="text-lg text-gray-700">Stay informed with urgent notifications</p>
      </div>

      {/* BENEFITS */}
      <div className="mb-8 pb-8 border-b-4 border-black">
        <h3 className="text-2xl font-black mb-4">Why Subscribe?</h3>
        <div className="space-y-3">
          {[
            'Get instant alerts about court dates and legal updates',
            'Know when government votes affect your rights',
            'Receive calls-to-action for urgent advocacy moments',
            'Stay connected to campaign milestones and victories',
            'Direct access to media opportunities and interviews'
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check size={20} className="mt-1 flex-shrink-0 font-black" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className="mb-8 pb-8 border-b-4 border-black">
        <h3 className="text-2xl font-black mb-6">Subscribe Now</h3>
        
        {submitted ? (
          <div className="bg-black text-white p-8 text-center">
            <Check size={48} className="mx-auto mb-4" />
            <h4 className="text-2xl font-black mb-2">Thank You!</h4>
            <p className="text-lg mb-4">
              You're now subscribed to SMS alerts. You'll receive urgent notifications about Justice for Barran and systemic change efforts.
            </p>
            <p className="text-sm">
              Message frequency varies. Standard message rates apply.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Phone Number *</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
              />
              <p className="text-xs text-gray-600 mt-2">
                Include country code for international numbers
              </p>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="flex items-start gap-3 bg-red-50 border-2 border-red-300 p-4">
                <AlertCircle size={20} className="text-red-700 flex-shrink-0 mt-1" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* CONSENT */}
            <div className="border-2 border-black p-4 bg-gray-50">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <span className="text-sm">
                  I agree to receive SMS alerts about Justice for Barran and systemic change efforts. I understand message frequency varies and standard message rates apply. I can opt out anytime by replying STOP.
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              {loading ? 'Registering...' : 'Subscribe to SMS Alerts'}
            </button>
          </form>
        )}
      </div>

      {/* PRIVACY */}
      <div className="bg-black text-white p-6 border-4 border-black">
        <h4 className="font-black mb-3">Privacy & Security</h4>
        <p className="text-sm leading-relaxed">
          Your phone number is encrypted and stored securely. We will never share your information with third parties. You can unsubscribe anytime by replying STOP to any SMS message.
        </p>
      </div>
    </div>
  );
}
