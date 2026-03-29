import { Heart, Share2, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PetitionSignature {
  name: string;
  email: string;
  message?: string;
}

export default function AccountabilityPetition() {
  const [signatures, setSignatures] = useState(2847);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    shareStory: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSignatures(signatures + 1);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', shareStory: false });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const signatureGoal = 5000;
  const progressPercent = (signatures / signatureGoal) * 100;

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            DEMAND ACCOUNTABILITY
          </h1>
          <p className="text-lg md:text-xl mb-2">Corporate Reconciliation Must Be Real</p>
          <p className="text-sm tracking-widest">{signatures.toLocaleString()} Signatures • Goal: {signatureGoal.toLocaleString()}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* PROGRESS BAR */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <div className="bg-gray-200 border-2 border-black h-12 flex items-center overflow-hidden">
            <div 
              className="bg-black h-full flex items-center justify-center text-white font-bold transition-all duration-500"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            >
              {progressPercent > 20 && `${Math.round(progressPercent)}%`}
            </div>
          </div>
          <p className="text-sm mt-2 text-gray-700">{signatures.toLocaleString()} of {signatureGoal.toLocaleString()} signatures</p>
        </div>

        {/* PETITION TEXT */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">We Demand Corporate Accountability</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Major corporations across Canada profit from "reconciliation" initiatives. They sponsor Orange Shirt Day, launch Truth & Reconciliation offices, and market themselves as allies to Indigenous communities. Yet while they profit from reconciliation messaging, Indigenous families are denied basic services and justice.
            </p>

            <p>
              <span className="font-bold">Barran's case is proof:</span> A First Nations youth stabbed three times, denied psychological services for five years, failed by every government level—while corporations wear orange shirts and call themselves reconciliation partners.
            </p>

            <p className="bg-gray-100 p-4 border-2 border-black">
              <span className="font-bold">This is performative activism.</span> Reconciliation cannot be a marketing tool. Real accountability requires systemic change, not seasonal awareness campaigns.
            </p>

            <p>
              We demand that corporations move beyond performative activism and commit to:
            </p>

            <ul className="space-y-3 ml-6">
              <li className="flex gap-3">
                <span className="font-black">•</span>
                <span><span className="font-bold">Real systemic change:</span> Support Indigenous legal defense funds and systemic accountability initiatives</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black">•</span>
                <span><span className="font-bold">Year-round commitment:</span> Reconciliation is not a September 30th marketing opportunity</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black">•</span>
                <span><span className="font-bold">Transparency:</span> Report on actual impact, not just merchandise sales</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black">•</span>
                <span><span className="font-bold">Accountability:</span> Support cases like Barran's where systemic failure continues</span>
              </li>
              <li className="flex gap-3">
                <span className="font-black">•</span>
                <span><span className="font-bold">Indigenous leadership:</span> Let Indigenous communities define reconciliation, not corporate marketing departments</span>
              </li>
            </ul>

            <p className="font-bold text-xl">
              Reconciliation without accountability is just marketing. We demand real change.
            </p>
          </div>
        </div>

        {/* SIGNATURE FORM */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl font-black mb-6">Add Your Voice</h2>
          
          {submitted && (
            <div className="bg-black text-white p-6 border-2 border-black mb-6 flex items-start gap-4">
              <CheckCircle size={24} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg mb-2">Thank you for signing!</p>
                <p>Your voice matters. Share this petition to amplify the demand for real accountability.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black font-base"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black font-base"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Your Message (Optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black font-base h-24"
                placeholder="Why is corporate accountability important to you?"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.shareStory}
                onChange={(e) => setFormData({ ...formData, shareStory: e.target.checked })}
                className="mt-1 w-5 h-5 border-2 border-black"
              />
              <span className="text-base">I agree to have my name and message shared publicly to amplify this petition</span>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-4 font-bold text-lg hover:bg-gray-800 transition-colors border-2 border-black"
            >
              Sign the Petition
            </button>
          </form>
        </div>

        {/* SHARE SECTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl font-black mb-6">Amplify This Message</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Share this petition with your network. Tag corporations on social media. Demand they move beyond performative activism.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => {
                const text = `Corporations profit from "reconciliation" while Indigenous families like Barran's are denied justice. Real accountability now. Sign the petition: #JusticeForBarran #ActualReconciliation`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="w-full bg-black text-white px-6 py-3 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black"
            >
              <Share2 size={18} />
              Share on Twitter/X
            </button>
            
            <button
              onClick={() => {
                const text = `Corporations profit from "reconciliation" while Indigenous families like Barran's are denied justice. Real accountability now. Sign the petition: https://justiceforbarran.org/accountability-petition #JusticeForBarran`;
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
              }}
              className="w-full bg-black text-white px-6 py-3 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black"
            >
              <Share2 size={18} />
              Share on Facebook
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="w-full bg-black text-white px-6 py-3 font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors border-2 border-black"
            >
              <Share2 size={18} />
              Copy Link
            </button>
          </div>
        </div>

        {/* RECENT SIGNATURES */}
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-6 pb-4 border-b-4 border-black">Recent Signatures</h2>
          <div className="space-y-3">
            {[
              { name: 'Sarah M.', message: 'Reconciliation must be real, not performative.' },
              { name: 'James T.', message: 'Support Indigenous justice and accountability.' },
              { name: 'Maria L.', message: 'Corporations must do more than wear orange shirts.' },
              { name: 'David K.', message: 'Justice for Barran. Real change now.' },
              { name: 'Emma R.', message: 'Systemic change requires accountability.' }
            ].map((sig, idx) => (
              <div key={idx} className="border-l-4 border-black pl-4 pb-3 border-b-2 border-gray-300">
                <p className="font-bold">{sig.name}</p>
                <p className="text-sm italic text-gray-700">"{sig.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
