import { Mail, Phone, MapPin, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const emotionalMemories = [
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_hSszDN_image_blurred_55817d16.png',
    caption: 'Childhood joy'
  },
  {
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_gtFlxD_image_blurred_44d2b93a.png',
    caption: 'Hope after hospital'
  }
];

export default function Contact() {
  const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const nextMemory = () => {
    setCurrentMemoryIndex((prev) => (prev + 1) % emotionalMemories.length);
  };
  
  const prevMemory = () => {
    setCurrentMemoryIndex((prev) => (prev - 1 + emotionalMemories.length) % emotionalMemories.length);
  };

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

        {/* EMOTIONAL MEMORIES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Why We Fight</h2>
          <p className="text-lg leading-relaxed mb-6">
            These are the moments that matter. The childhood joys that were taken away. Every donation helps us fight for justice and ensure no other family experiences what Barran's family has endured.
          </p>
          
          <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80 bg-gray-200">
              <img 
                src={emotionalMemories[currentMemoryIndex].image}
                alt={emotionalMemories[currentMemoryIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6">
                <p className="text-white text-xl md:text-2xl font-bold">{emotionalMemories[currentMemoryIndex].caption}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between p-3 md:p-4 bg-gray-50 border-t-2 border-black gap-2">
              <button 
                onClick={prevMemory}
                className="flex items-center justify-center gap-1 md:gap-2 bg-red-700 text-white px-3 md:px-4 py-2 md:py-2 rounded hover:bg-red-800 transition-colors font-bold min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto"
                aria-label="Previous memory"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="flex gap-2 flex-wrap justify-center">
                {emotionalMemories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMemoryIndex(index)}
                    className={`rounded-full transition-all min-h-[32px] min-w-[32px] md:min-h-auto md:min-w-auto ${
                      index === currentMemoryIndex ? 'bg-red-700 w-8 h-3' : 'bg-gray-400 w-2 h-2'
                    }`}
                    aria-label={`View memory ${index + 1}`}
                    aria-current={index === currentMemoryIndex}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextMemory}
                className="flex items-center justify-center gap-1 md:gap-2 bg-red-700 text-white px-3 md:px-4 py-2 md:py-2 rounded hover:bg-red-800 transition-colors font-bold min-h-[44px] min-w-[44px] md:min-h-auto md:min-w-auto"
                aria-label="Next memory"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 pb-8 border-b-4 border-black">
          {/* EMAIL */}
          <div className="border-2 border-black p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={28} className="font-black" />
              <h3 className="text-2xl font-black">Email</h3>
            </div>
            <p className="text-base mb-2">
              <a href="mailto:justiceforbarran@gmail.com" className="underline hover:font-bold">
                justiceforbarran@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-700">
              For general inquiries and support
            </p>
          </div>

          {/* PHONE */}
          <div className="border-2 border-black p-4 md:p-6">
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
          <div className="border-2 border-black p-4 md:p-6">
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
                className="w-full border-2 border-black p-3 md:p-4 font-base focus:outline-none focus:bg-gray-100 text-base min-h-[44px]"
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
                className="w-full border-2 border-black p-3 md:p-4 font-base focus:outline-none focus:bg-gray-100 text-base min-h-[44px]"
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
                className="w-full border-2 border-black p-3 md:p-4 font-base focus:outline-none focus:bg-gray-100 text-base min-h-[44px]"
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
                className="w-full border-2 border-black p-3 md:p-4 font-base focus:outline-none focus:bg-gray-100 text-base min-h-[44px]"
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
                className="w-full border-2 border-black p-3 md:p-4 font-base focus:outline-none focus:bg-gray-100 resize-none text-base"
                placeholder="Your message here..."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white px-6 md:px-8 py-4 md:py-4 font-bold text-base md:text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* QUICK LINKS */}
        <div className="bg-black text-white p-8 border-4 border-black">
          <h2 className="text-3xl font-black mb-6">Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
