import { useEffect, useState } from 'react';
import { CheckCircle, Heart, Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function SubscriptionSuccess() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSessionId(params.get('session_id'));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <CheckCircle size={80} className="text-green-400 relative" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Thank You for Your Support!
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Your monthly donation has been successfully set up. You're now part of the movement for Indigenous justice.
        </p>

        {/* Confirmation Details */}
        <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-700">
              <span className="text-gray-300">Status:</span>
              <span className="font-bold text-green-400 flex items-center gap-2">
                <CheckCircle size={20} />
                Active
              </span>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-gray-700">
              <span className="text-gray-300">Session ID:</span>
              <span className="font-mono text-sm text-gray-400">{sessionId || 'Loading...'}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-300">Next Billing:</span>
              <span className="font-bold text-amber-400">
                {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8 text-left">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Heart size={28} className="text-amber-400" />
            What Happens Next
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Confirmation Email</h3>
                <p className="text-gray-300 text-sm">
                  Check your email for a receipt and subscription details. You can manage your subscription anytime.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Monthly Updates</h3>
                <p className="text-gray-300 text-sm">
                  Receive monthly impact reports showing exactly how your donation is being used.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Campaign Updates</h3>
                <p className="text-gray-300 text-sm">
                  Get exclusive access to campaign strategy calls and behind-the-scenes updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail size={24} className="text-amber-400" />
            <h3 className="text-lg font-bold">Questions?</h3>
          </div>
          <p className="text-gray-300 mb-4">
            If you have any questions about your subscription or need to make changes, contact us:
          </p>
          <a
            href="mailto:justiceforbarran@gmail.com"
            className="text-amber-400 hover:text-amber-300 font-bold underline"
          >
            justiceforbarran@gmail.com
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-8 rounded-lg transition-colors">
              Return to Home
            </a>
          </Link>
          <Link href="/donation-impact">
            <a className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold py-3 px-8 rounded-lg transition-colors">
              See Impact Report
            </a>
          </Link>
        </div>

        {/* Footer Message */}
        <p className="text-gray-400 text-sm mt-12">
          Your support means everything to Indigenous families fighting for justice. Together, we will create real change.
        </p>
      </div>
    </div>
  );
}
