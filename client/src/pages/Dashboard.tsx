import { Mail, AlertCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            CAMPAIGN STATUS
          </h1>
          <p className="text-lg md:text-xl mb-2">Verified Facts Only</p>
          <p className="text-sm tracking-widest">Justice for Barran - Transparent Updates</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">What We Know - Verified Facts</h2>
          <p className="text-lg leading-relaxed">
            This page contains only verified, documented facts about Barran's case and our advocacy efforts. We do not speculate or make unverified claims.
          </p>
        </div>

        {/* VERIFIED ACTIONS */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Actions Taken</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">VERIFIED - 2026</p>
              <p className="text-lg font-bold">Letter Sent to United Nations</p>
              <p className="text-sm text-gray-700">Official correspondence documenting systemic failures in Barran's case</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">VERIFIED - 2025-2026</p>
              <p className="text-lg font-bold">Advocacy Campaign Launched</p>
              <p className="text-sm text-gray-700">Public awareness and accountability efforts ongoing</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">VERIFIED - 2021-2026</p>
              <p className="text-lg font-bold">Five Years of Systemic Abandonment Documented</p>
              <p className="text-sm text-gray-700">DPJ involvement, withdrawal, and lack of follow-up services</p>
            </div>
          </div>
        </div>

        {/* IMPORTANT NOTE */}
        <div className="mb-8 pb-8 border-b-4 border-black bg-white border-4 border-black p-8">
          <div className="flex gap-4 items-start">
            <AlertCircle size={32} className="flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-black mb-4">No False Claims</h3>
              <p className="text-lg leading-relaxed mb-4">
                This website contains only verified information. We do NOT include:
              </p>
              <ul className="text-lg space-y-2 ml-4">
                <li>❌ Unconfirmed court dates</li>
                <li>❌ Speculative petition numbers</li>
                <li>❌ Unverified government responses</li>
                <li>❌ Fabricated media opportunities</li>
                <li>❌ False donation amounts</li>
                <li>❌ Unverified supporter counts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RECENT ALERTS - VERIFIED ONLY */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Recent Verified Updates</h2>
          
          <div className="space-y-4">
            <div className="border-2 border-black p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">MARCH 2026</p>
              <p className="text-xl font-black mb-2">Letter to United Nations Sent</p>
              <p className="text-lg leading-relaxed">
                Official correspondence documenting systemic failures in Barran's case has been submitted to UN human rights bodies.
              </p>
            </div>

            <div className="border-2 border-black p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">ONGOING</p>
              <p className="text-xl font-black mb-2">Advocacy & Accountability Campaign</p>
              <p className="text-lg leading-relaxed">
                Demanding transparency, investigation, and systemic change from government officials and institutions.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT WE'RE ASKING FOR */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Our Demands</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-lg font-bold">Independent Inquiry</p>
              <p className="text-sm text-gray-700">Into systemic failures affecting Indigenous children</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-lg font-bold">Application of Jordan's Principle</p>
              <p className="text-sm text-gray-700">No-delay services for First Nations children</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-lg font-bold">Real Support for Affected Families</p>
              <p className="text-sm text-gray-700">Beyond apologies - actual systemic change</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-lg font-bold">Government Accountability</p>
              <p className="text-sm text-gray-700">For abandonment of Indigenous families</p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-black text-white p-8 border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4">Support Real Change</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Help amplify this message and demand accountability from government and institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/government-accountability" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Contact Officials
            </a>
            <a href="/corporate-accountability" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Corporate Accountability
            </a>
            <a href="/contact" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
