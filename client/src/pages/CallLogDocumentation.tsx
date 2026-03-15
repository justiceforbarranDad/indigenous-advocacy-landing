import { Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

/**
 * CALL LOG DOCUMENTATION - NEWSPAPER FORMAT
 * 
 * BULLETPROOF EVIDENCE OF SYSTEMIC GHOSTING
 * 
 * Every call documented with:
 * - Date and time (verified by phone carrier)
 * - Duration (proving actual connection, not voicemail)
 * - Organization/person called
 * - Location
 * - Response received (or ghosting)
 * - Follow-up status (as of March 15, 2026)
 * 
 * Vintage newspaper aesthetic: Black & white (documentation) → Color (accountability)
 * This is not speculation. This is documented fact.
 * This is happening NOW across Canada.
 * This is systemic.
 */

export default function CallLogDocumentation() {
  const callsData = [
    {
      date: 'March 2, 2026',
      calls: [
        { time: '2:58 PM', duration: 'Call verified by carrier', organization: 'Unknown', location: 'Canada', number: 'Not specified', response: 'No follow-up', status: 'GHOSTED' },
        { time: '2:45 PM', duration: '6 minutes', organization: "Chief Paul's Office (Quebec First Nation Assembly)", location: 'Quebec', number: 'Not specified', response: "Secretary said they were busy, going into meeting. No follow-up.", status: 'DISMISSED' }
      ]
    },
    {
      date: 'March 3, 2026',
      calls: [
        { time: '1:46 PM', duration: '5 minutes', organization: 'Toronto Office', location: 'Toronto, ON', number: '416-480-3000', response: 'Connected but no follow-up', status: 'GHOSTED' }
      ]
    },
    {
      date: 'March 4, 2026',
      calls: [
        { time: '2:28 PM', duration: '9 minutes', organization: 'Unknown (1866 number)', location: 'Canada', number: '1-866-481-8429', response: 'No follow-up', status: 'GHOSTED' },
        { time: '10:09 AM', duration: '3 minutes', organization: 'Ottawa Office', location: 'Ottawa, ON', number: '613-236-1700', response: 'Connected but no follow-up', status: 'GHOSTED' },
        { time: '10:02 AM', duration: '3 minutes', organization: 'Federal Office', location: 'Canada', number: '1-800-267-8860', response: 'Connected but no follow-up', status: 'GHOSTED' }
      ]
    },
    {
      date: 'March 12, 2026 (INTENSIVE OUTREACH DAY)',
      calls: [
        { time: '2:51 PM', duration: '10 minutes', organization: 'Julius Gray Law Firm', location: 'Williams Lake, BC', number: '250-302-0440', response: 'Consultation fee: ~$300. No case acceptance yet.', status: 'REQUIRES PAYMENT' },
        { time: '2:35 PM', duration: '13 minutes', organization: 'Unknown (outgoing call)', location: 'Unknown', number: '1-877-232-2611', response: 'No follow-up', status: 'GHOSTED' },
        { time: '1:50 PM', duration: '12 minutes', organization: 'Ottawa Office', location: 'Ottawa, ON', number: '613-233-7614', response: 'Connected but no follow-up', status: 'GHOSTED' },
        { time: '11:24 AM', duration: '8 minutes', organization: "Jordan's Principle (Funding Request)", location: 'Canada', number: '1-833-852-0755', response: 'Called to request funding. No callback.', status: 'GHOSTED - NO CALLBACK' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Phone className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CALL LOG DOCUMENTATION</h1>
          <p className="text-lg md:text-xl opacity-90">Bulletproof Evidence of Systemic Ghosting Across Canada</p>
        </div>
      </section>

      {/* Introduction Newspaper */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="bg-yellow-50 border-4 border-yellow-900 shadow-xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)',
            }}
          >
            {/* Masthead */}
            <div className="border-b-4 border-yellow-900 bg-yellow-100 p-6 md:p-8">
              <div className="text-xs md:text-sm font-bold tracking-widest text-yellow-800 mb-2">
                DOCUMENTED EVIDENCE
              </div>
              <h2
                className="text-3xl md:text-4xl font-black tracking-tight text-yellow-900 mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                EVERY CALL VERIFIED BY PHONE CARRIER
              </h2>
              <p className="text-xs md:text-sm font-semibold tracking-widest text-yellow-800">
                March 2-12, 2026: Complete Call Log
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-sm leading-relaxed text-yellow-900">
                Between March 2-12, 2026, I made dozens of calls across Canada seeking help for my family. I called government offices, lawyers, Indigenous organizations, Jordan's Principle, and more.
              </p>
              <p className="text-sm leading-relaxed text-yellow-900 font-bold">
                Every single call is documented. Every call duration is verified by my phone carrier. Every call shows I actually connected - this is not speculation about voicemails.
              </p>
              <p className="text-sm leading-relaxed text-yellow-900">
                As of March 15, 2026 - 11 days later - I have received NO follow-up from any of them.
              </p>
              <p className="text-sm leading-relaxed text-yellow-900 font-bold">
                This is not an isolated incident. This is systemic ghosting across every institution in Canada.
              </p>
            </div>

            {/* Edition Indicator */}
            <div className="px-6 md:px-8 py-3 text-right border-t-2 border-yellow-900 bg-yellow-100">
              <p className="text-xs font-semibold text-yellow-900/60">⬛ Black & White Edition - Documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call Log - Newspaper Format */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {callsData.map((dayData, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white border-4 border-red-600 shadow-lg"
            >
              {/* Masthead */}
              <div className="border-b-4 border-red-600 bg-white p-6 md:p-8">
                <div className="text-xs md:text-sm font-bold tracking-widest text-red-600 mb-2">
                  CALL LOG REPORT
                </div>
                <h2
                  className="text-3xl md:text-4xl font-black tracking-tight text-forest-green mb-1"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {dayData.date}
                </h2>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-charcoal">
                  {dayData.calls.length} calls documented
                </p>
              </div>

              {/* Calls */}
              <div className="p-6 md:p-8 space-y-6">
                {dayData.calls.map((call, callIndex) => (
                  <div key={callIndex} className="border-l-4 border-amber-orange bg-amber-50 p-4 rounded">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-black tracking-widest text-amber-orange mb-1">TIME</p>
                        <p className="text-sm font-bold text-charcoal">{call.time}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black tracking-widest text-amber-orange mb-1">DURATION</p>
                        <p className="text-sm font-bold text-charcoal">{call.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black tracking-widest text-amber-orange mb-1">LOCATION</p>
                        <p className="text-sm font-bold text-charcoal">{call.location}</p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-black tracking-widest text-amber-orange mb-1">ORGANIZATION</p>
                      <p className="text-sm font-bold text-charcoal">{call.organization}</p>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-black tracking-widest text-amber-orange mb-1">PHONE NUMBER</p>
                      <p className="text-sm font-mono text-charcoal">{call.number}</p>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-black tracking-widest text-amber-orange mb-1">RESPONSE</p>
                      <p className="text-sm text-charcoal">{call.response}</p>
                    </div>

                    <div className={`inline-block px-3 py-1 rounded text-xs font-bold ${
                      call.status === 'GHOSTED' || call.status === 'GHOSTED - NO CALLBACK' || call.status === 'DISMISSED'
                        ? 'bg-red-600 text-white'
                        : 'bg-amber-orange text-white'
                    }`}>
                      {call.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* Edition Indicator */}
              <div className="px-6 md:px-8 py-3 text-right border-t-2 border-red-600 bg-white">
                <p className="text-xs font-semibold text-charcoal/60">🌈 Color Edition - Accountability</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 md:py-24 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">THE PATTERN IS CLEAR</h2>
          <div className="space-y-4 text-lg opacity-90">
            <p>✓ Calls verified by phone carrier</p>
            <p>✓ Actual connections (not voicemails)</p>
            <p>✓ Documented dates and times</p>
            <p>✓ Zero follow-up from any organization</p>
            <p className="text-xl font-bold mt-6">This is not coincidence. This is systemic.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
