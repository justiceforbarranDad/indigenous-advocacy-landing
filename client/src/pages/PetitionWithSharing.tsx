import { Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ShareSuccess } from '@/components/ShareSuccess';

export default function PetitionWithSharing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });
  const [showShare, setShowShare] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle petition submission
    console.log('Petition signed:', formData);
    setSubmitted(true);
    setShowShare(true);
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            SIGN THE PETITION
          </h1>
          <p className="text-lg md:text-xl mb-2">Demand Justice for Barran</p>
          <p className="text-sm tracking-widest">28,340 signatures and counting</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Add Your Voice</h2>
          <p className="text-lg leading-relaxed mb-4">
            We demand an independent inquiry into systemic failures affecting Barran and countless other children. We demand Jordan's Principle be applied. We demand accountability from government officials at all levels.
          </p>
          <div className="bg-black text-white p-6 border-4 border-black">
            <div className="flex items-center gap-3 mb-2">
              <Users size={28} />
              <p className="text-2xl font-black">28,340 Signatures</p>
            </div>
            <p className="text-sm">Goal: 50,000 signatures</p>
          </div>
        </div>

        {/* PETITION FORM */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Sign Now</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
                placeholder="Your name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
                placeholder="your@email.com"
              />
            </div>

            {/* COUNTRY */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
                placeholder="Your country"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100 resize-none"
                placeholder="Why does this cause matter to you?"
              />
            </div>

            {/* CONSENT */}
            <div className="border-2 border-black p-4 bg-gray-50">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <span className="text-sm">
                  I agree that my name and country may be displayed on this petition. I understand my email will be used to send updates about this campaign.
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle size={20} />
              Sign the Petition
            </button>
          </form>
        </div>

        {/* PETITION DEMANDS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Our Demands</h2>
          
          <div className="space-y-4">
            {[
              'Independent inquiry into systemic failures affecting Barran and similar cases',
              'Immediate application of Jordan\'s Principle for First Nations children',
              'Government accountability for DPJ (DYP) failures',
              'Real support for families failed by systems',
              'Transparency in government responses',
              'Criminal investigation into systemic negligence'
            ].map((demand, idx) => (
              <div key={idx} className="border-l-4 border-black pl-6 py-4">
                <p className="text-lg font-bold">{demand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IMPACT STATEMENT */}
        <div className="bg-black text-white p-8 border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4">Every Signature Counts</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Your signature adds weight to our demands for accountability and systemic change. Share this petition with your network to amplify the call for justice.
          </p>
          <a href="/donate" className="inline-block bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
            Support with a Donation
          </a>
        </div>
      </div>

      {/* SHARE SUCCESS MODAL */}
      {showShare && (
        <ShareSuccess type="signature" />
      )}
    </div>
  );
}
