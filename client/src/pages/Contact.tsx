import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            CONTACT US
          </h1>
          <p className="text-lg md:text-xl mb-2">Justice for Barran</p>
          <p className="text-sm tracking-widest">Get in Touch • Share Your Story • Demand Accountability</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">We Want to Hear From You</h2>
          <p className="text-lg leading-relaxed mb-4">
            Whether you have a similar story, want to support the campaign, offer legal assistance, or demand accountability from government and corporate officials, we're here to listen and connect you with resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b-4 border-black">
          {/* EMAIL */}
          <div className="border-2 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={28} className="font-black" />
              <h3 className="text-2xl font-black">Email</h3>
            </div>
            <p className="text-base mb-2">
              <a href="mailto:contact@justiceforbarran.org" className="underline hover:font-bold">
                contact@justiceforbarran.org
              </a>
            </p>
            <p className="text-sm text-gray-700">
              For general inquiries and support
            </p>
          </div>

          {/* PHONE */}
          <div className="border-2 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone size={28} className="font-black" />
              <h3 className="text-2xl font-black">Phone</h3>
            </div>
            <p className="text-base mb-2">
              <a href="tel:+1-555-BARRAN-1" className="underline hover:font-bold">
                +1 (555) BARRAN-1
              </a>
            </p>
            <p className="text-sm text-gray-700">
              Available during business hours
            </p>
          </div>

          {/* ADDRESS */}
          <div className="border-2 border-black p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={28} className="font-black" />
              <h3 className="text-2xl font-black">Location</h3>
            </div>
            <p className="text-base mb-2">
              Canada
            </p>
            <p className="text-sm text-gray-700">
              Supporting Indigenous justice nationwide
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Name *</label>
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

            {/* PHONE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100"
              >
                <option value="">Select a subject...</option>
                <option value="share-story">Share My Story</option>
                <option value="legal-support">Offer Legal Support</option>
                <option value="sponsorship">Sponsorship Inquiry</option>
                <option value="media">Media Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="accountability">Demand Accountability</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-widest mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full border-2 border-black p-4 font-base focus:outline-none focus:bg-gray-100 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* QUICK LINKS */}
        <div className="bg-black text-white p-8 border-4 border-black">
          <h2 className="text-3xl font-black mb-6">Quick Links</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Get Involved</h3>
              <ul className="space-y-2">
                <li><a href="/petition" className="underline hover:font-bold">Sign the Petition</a></li>
                <li><a href="/donate" className="underline hover:font-bold">Make a Donation</a></li>
                <li><a href="/volunteer" className="underline hover:font-bold">Volunteer</a></li>
                <li><a href="/share-story" className="underline hover:font-bold">Share Your Story</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="/timeline" className="underline hover:font-bold">Timeline of Events</a></li>
                <li><a href="/government-accountability" className="underline hover:font-bold">Government Accountability</a></li>
                <li><a href="/corporate-accountability" className="underline hover:font-bold">Corporate Accountability</a></li>
                <li><a href="/media-kit" className="underline hover:font-bold">Media Kit</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
