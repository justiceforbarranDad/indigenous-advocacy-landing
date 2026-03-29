import { useState } from 'react';
import { Signature, Share2, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Signature {
  id: number;
  name: string;
  city: string;
  message: string;
  date: string;
}

const recentSignatures: Signature[] = [
  {
    id: 1,
    name: "Sarah M.",
    city: "Montreal, QC",
    message: "Justice for Barran and all Indigenous children. This must stop.",
    date: "March 28, 2026"
  },
  {
    id: 2,
    name: "James T.",
    city: "Toronto, ON",
    message: "The systemic failures must be exposed and accountability must be enforced.",
    date: "March 27, 2026"
  },
  {
    id: 3,
    name: "Anonymous",
    city: "Vancouver, BC",
    message: "I've experienced similar failures. We need real change.",
    date: "March 27, 2026"
  },
  {
    id: 4,
    name: "Maria L.",
    city: "Calgary, AB",
    message: "Standing with Indigenous families. Truth and reconciliation now!",
    date: "March 26, 2026"
  },
  {
    id: 5,
    name: "David K.",
    city: "Ottawa, ON",
    message: "Federal government must enforce Jordan's Principle. No more delays.",
    date: "March 26, 2026"
  }
];

export default function Petition() {
  const [signatures, setSignatures] = useState(10847);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    message: '',
    anonymous: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignatures(prev => prev + 1);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      city: '',
      message: '',
      anonymous: false
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const signatureGoal = 50000;
  const progress = (signatures / signatureGoal) * 100;

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Justice for Barran</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Demand accountability for systemic failures against Indigenous children
          </p>
          <p className="text-lg font-semibold text-red-600 dark:text-red-400">
            {signatures.toLocaleString()} signatures out of {signatureGoal.toLocaleString()} goal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Petition Info */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Petition Demands</h2>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">1. Independent Inquiry</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Establish an independent investigation into systemic failures by child protection services and government agencies.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">2. Enforce Jordan's Principle</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ensure federal government immediately implements Jordan's Principle to provide no-delay services to Indigenous children.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">3. Accountability & Consequences</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hold officials and agencies responsible for institutional obstruction and political intimidation of victims' families.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">4. Systemic Reform</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Implement comprehensive reforms to prevent future systemic failures against Indigenous children and families.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-bold text-lg mb-2">5. UN Response</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Support UN investigation and recommendations for justice and reparations for victims of systemic abuse.
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Progress</span>
                  <span className="font-semibold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-red-500 h-full transition-all duration-500"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg">Share This Petition</h3>
                <div className="flex flex-wrap gap-3">
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <Share2 size={18} /> Share on Facebook
                  </Button>
                  <Button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white">
                    <Share2 size={18} /> Share on Twitter
                  </Button>
                  <Button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white">
                    <Share2 size={18} /> Share on Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Petition Background */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Background</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  On February 27, 2021, a First Nations child was stabbed three times in a violent attack. What followed was not justice or protection, but five years of systemic failure, denial of services, and institutional obstruction.
                </p>
                <p>
                  Despite federal legal obligations under Jordan's Principle to provide immediate services to Indigenous children, this victim was denied psychological support, education, and basic protection. Instead of help, the family faced political intimidation and suppression when they sought accountability.
                </p>
                <p>
                  On March 27, 2026, a formal complaint was submitted to the United Nations Special Rapporteur on the Rights of Indigenous Peoples and Special Rapporteur on the Rights of the Child. This petition demands that governments take immediate action to prevent future systemic failures and ensure justice for all Indigenous children.
                </p>
              </div>
            </div>
          </div>

          {/* Signature Form */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 sticky top-4">
              <h2 className="text-2xl font-bold mb-6">Add Your Signature</h2>

              {submitted && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6 text-center">
                  <p className="text-green-700 dark:text-green-400 font-semibold">
                    ✓ Thank you for signing!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">City/Region</label>
                  <input
                    type="text"
                    placeholder="City, Province"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Message (Optional)</label>
                  <textarea
                    placeholder="Why do you support this petition?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.anonymous}
                    onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm">Sign anonymously</span>
                </label>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold rounded-lg"
                >
                  <Signature size={18} className="mr-2" /> Sign Petition
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <Users size={18} />
                  <span>Recent signers</span>
                </div>
                <div className="space-y-3">
                  {recentSignatures.slice(0, 3).map((sig) => (
                    <div key={sig.id} className="text-xs">
                      <p className="font-semibold text-foreground">{sig.name}</p>
                      <p className="text-gray-500">{sig.city}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Signatures */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">All Signatures</h2>
          <div className="space-y-4">
            {recentSignatures.map((sig) => (
              <div key={sig.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">{sig.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{sig.city} • {sig.date}</p>
                  </div>
                  <Heart size={18} className="text-red-600 flex-shrink-0" />
                </div>
                {sig.message && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                    "{sig.message}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
