import { Phone, MapPin, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

/**
 * CALL LOG DOCUMENTATION
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
 * This is not speculation. This is documented fact.
 * This is happening NOW across Canada.
 * This is systemic.
 */

export default function CallLogDocumentation() {
  const callsData = [
    {
      date: 'March 2, 2026',
      calls: [
        {
          time: '2:58 PM',
          duration: 'Call verified by carrier',
          organization: 'Unknown',
          location: 'Canada',
          number: 'Not specified',
          response: 'No follow-up',
          status: 'GHOSTED'
        },
        {
          time: '2:45 PM',
          duration: '6 minutes',
          organization: "Chief Paul's Office (Quebec First Nation Assembly)",
          location: 'Quebec',
          number: 'Not specified',
          response: "Secretary/attaché politique said they were busy, going into meeting about new Constitution. Chief Paul in disagreement with Justice Barrett.",
          status: 'DISMISSED'
        }
      ]
    },
    {
      date: 'March 3, 2026',
      calls: [
        {
          time: '1:46 PM',
          duration: '5 minutes',
          organization: 'Toronto Office',
          location: 'Toronto, ON',
          number: '416-480-3000',
          response: 'Connected but no follow-up',
          status: 'GHOSTED'
        }
      ]
    },
    {
      date: 'March 4, 2026',
      calls: [
        {
          time: '2:28 PM',
          duration: '9 minutes',
          organization: 'Unknown (1866 number)',
          location: 'Canada',
          number: '1-866-481-8429',
          response: 'No follow-up',
          status: 'GHOSTED'
        },
        {
          time: '10:09 AM',
          duration: '3 minutes',
          organization: 'Ottawa Office',
          location: 'Ottawa, ON',
          number: '613-236-1700',
          response: 'Connected but no follow-up',
          status: 'GHOSTED'
        },
        {
          time: '10:02 AM',
          duration: '3 minutes',
          organization: 'Federal Office',
          location: 'Canada',
          number: '1-800-267-8860',
          response: 'Connected but no follow-up',
          status: 'GHOSTED'
        }
      ]
    },
    {
      date: 'March 6, 2026',
      calls: [
        {
          time: '11:50 AM',
          duration: '23 minutes',
          organization: 'INCOMING CALL - Organization spotted denunciation on Instagram',
          location: 'Unknown',
          number: 'Unknown',
          response: 'Called after seeing Instagram post about case. 23-minute conversation. No follow-up since.',
          status: 'GHOSTED AFTER CONTACT'
        }
      ]
    },
    {
      date: 'March 10, 2026',
      calls: [
        {
          time: '8:41 AM',
          duration: '2 minutes',
          organization: 'Unknown (1866 number)',
          location: 'Canada',
          number: '1-866-869-6789',
          response: 'Brief call - "wake-up call"',
          status: 'GHOSTED'
        }
      ]
    },
    {
      date: 'March 11, 2026',
      calls: [
        {
          time: '1:41 PM',
          duration: '4 minutes',
          organization: 'Unknown',
          location: 'Unknown',
          number: '514-288-6180',
          response: 'No follow-up',
          status: 'GHOSTED'
        }
      ]
    },
    {
      date: 'March 12, 2026 (THURSDAY - INTENSIVE OUTREACH DAY)',
      calls: [
        {
          time: '2:51 PM',
          duration: '10 minutes',
          organization: 'Julius Gray Law Firm (Consultation)',
          location: 'Williams Lake, BC',
          number: '250-302-0440',
          response: 'Consultation fee: ~$300. No case acceptance yet.',
          status: 'REQUIRES PAYMENT'
        },
        {
          time: '2:35 PM',
          duration: '13 minutes',
          organization: 'Unknown (outgoing call)',
          location: 'Unknown',
          number: '1-877-232-2611',
          response: 'No follow-up',
          status: 'GHOSTED'
        },
        {
          time: '1:50 PM',
          duration: '12 minutes',
          organization: 'Ottawa Office',
          location: 'Ottawa, ON',
          number: '613-233-7614',
          response: 'Connected but no follow-up',
          status: 'GHOSTED'
        },
        {
          time: '11:48 AM',
          duration: '13 minutes',
          organization: 'Winnipeg Air (or similar)',
          location: 'Winnipeg, MB',
          number: '204-957-8450',
          response: 'No follow-up',
          status: 'GHOSTED'
        },
        {
          time: '11:24 AM',
          duration: '8 minutes',
          organization: "Jordan's Principle (Funding Request)",
          location: 'Canada',
          number: '1-833-852-0755',
          response: 'Called to request funding. No callback.',
          status: 'GHOSTED - NO CALLBACK'
        },
        {
          time: '10:46 AM',
          duration: '7 minutes',
          organization: 'Ottawa Office',
          location: 'Ottawa, ON',
          number: '613-230-5885',
          response: 'No follow-up',
          status: 'GHOSTED'
        },
        {
          time: '10:32 AM',
          duration: '2 minutes',
          organization: 'Unknown',
          location: 'Ottawa, ON',
          number: '613-944-4648',
          response: 'Brief call - no follow-up',
          status: 'GHOSTED'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-charcoal text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-red-600 to-charcoal py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            CALL LOG DOCUMENTATION
          </h1>
          <p className="text-xl text-red-200 mb-6">
            BULLETPROOF EVIDENCE OF SYSTEMIC GHOSTING ACROSS CANADA
          </p>
          <div className="flex items-center justify-center gap-2 text-red-300">
            <AlertCircle size={24} />
            <span className="font-semibold">Every call verified by phone carrier. Every ghosting documented.</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-charcoal-light">
        <div className="max-w-5xl mx-auto">
          <div className="bg-charcoal p-8 rounded-lg border-l-4 border-red-500">
            <p className="text-lg leading-relaxed mb-4">
              Between March 2-12, 2026, I made dozens of calls across Canada seeking help for my family. 
              I called government offices, lawyers, Indigenous organizations, Jordan's Principle, and more.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-bold text-red-300">
              Every single call is documented. Every call duration is verified by my phone carrier. 
              Every call shows I actually connected - this is not speculation about voicemails.
            </p>
            <p className="text-lg leading-relaxed">
              As of March 15, 2026 - **11 days later** - I have received **NO follow-up from any of them**.
            </p>
            <p className="text-lg leading-relaxed mt-4 font-bold">
              This is not an isolated incident. This is systemic ghosting across every institution in Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Call Log by Date */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-red-300">COMPLETE CALL LOG - MARCH 2-12, 2026</h2>

          <div className="space-y-12">
            {callsData.map((dayData, dayIndex) => (
              <div key={dayIndex} className="bg-charcoal-light p-8 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                  <Clock size={24} className="text-red-400" />
                  {dayData.date}
                </h3>

                <div className="space-y-4">
                  {dayData.calls.map((call, callIndex) => (
                    <div key={callIndex} className="bg-charcoal p-6 rounded-lg border-l-4 border-amber-orange">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-amber-orange font-bold mb-1">TIME</p>
                          <p className="text-white">{call.time}</p>
                        </div>
                        <div>
                          <p className="text-amber-orange font-bold mb-1">DURATION</p>
                          <p className="text-white">{call.duration}</p>
                        </div>
                        <div>
                          <p className="text-amber-orange font-bold mb-1">PHONE NUMBER</p>
                          <p className="text-white font-mono">{call.number}</p>
                        </div>
                        <div>
                          <p className="text-amber-orange font-bold mb-1">LOCATION</p>
                          <p className="text-white flex items-center gap-2">
                            <MapPin size={16} />
                            {call.location}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-amber-orange font-bold mb-1">ORGANIZATION/PERSON</p>
                        <p className="text-white text-lg">{call.organization}</p>
                      </div>

                      <div className="mb-4">
                        <p className="text-amber-orange font-bold mb-1">RESPONSE RECEIVED</p>
                        <p className="text-white">{call.response}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {call.status === 'GHOSTED' || call.status === 'GHOSTED AFTER CONTACT' || call.status === 'GHOSTED - NO CALLBACK' ? (
                          <>
                            <XCircle size={20} className="text-red-500" />
                            <span className="font-bold text-red-400">{call.status}</span>
                          </>
                        ) : call.status === 'DISMISSED' ? (
                          <>
                            <AlertCircle size={20} className="text-orange-500" />
                            <span className="font-bold text-orange-400">{call.status}</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle size={20} className="text-amber-500" />
                            <span className="font-bold text-amber-400">{call.status}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Statistics */}
      <section className="py-16 px-4 bg-charcoal-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-red-300">SUMMARY STATISTICS</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-charcoal p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-red-400 font-bold text-3xl">20+</p>
              <p className="text-white mt-2">Calls Made</p>
              <p className="text-gray-400 text-sm">March 2-12, 2026</p>
            </div>

            <div className="bg-charcoal p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-red-400 font-bold text-3xl">100%</p>
              <p className="text-white mt-2">Ghosted</p>
              <p className="text-gray-400 text-sm">No follow-up from any</p>
            </div>

            <div className="bg-charcoal p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-red-400 font-bold text-3xl">11 Days</p>
              <p className="text-white mt-2">Since Last Call</p>
              <p className="text-gray-400 text-sm">Still waiting for response</p>
            </div>

            <div className="bg-charcoal p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-red-400 font-bold text-3xl">0</p>
              <p className="text-white mt-2">Callbacks Received</p>
              <p className="text-gray-400 text-sm">From any organization</p>
            </div>
          </div>

          <div className="bg-charcoal p-8 rounded-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold mb-4 text-white">Organizations Called</h3>
            <ul className="space-y-2 text-white">
              <li>✗ Government offices (Federal & Provincial)</li>
              <li>✗ Ottawa offices (multiple)</li>
              <li>✗ Winnipeg offices</li>
              <li>✗ Toronto offices</li>
              <li>✗ Quebec offices (Chief Paul's office)</li>
              <li>✗ Julius Gray Law Firm (requires $300 consultation)</li>
              <li>✗ Jordan's Principle (no callback)</li>
              <li>✗ National Centre for Truth and Reconciliation (Winnipeg)</li>
              <li>✗ Various 1-800 and 1-866 government numbers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Pattern */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-red-300">THE PATTERN: SYSTEMIC GHOSTING</h2>

          <div className="space-y-6">
            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">MARCH 12, 2026 - THE INTENSIVE OUTREACH DAY</h3>
              <p className="text-white leading-relaxed mb-4">
                On Thursday, March 12, I made 7 calls in a single day - desperate to find help. 
                I called government offices, lawyers, Jordan's Principle, and more. 
                I was "on a roll" trying everything possible.
              </p>
              <p className="text-white leading-relaxed font-bold text-red-300">
                All 7 calls on March 12 have resulted in ZERO follow-up.
              </p>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">THE MARCH 6 ANOMALY</h3>
              <p className="text-white leading-relaxed mb-4">
                One organization saw my Instagram post about the case and called me - a 23-minute conversation. 
                They showed interest. They engaged. They seemed to care.
              </p>
              <p className="text-white leading-relaxed font-bold text-red-300">
                Since that call on March 6, they have also ghosted me. No follow-up. No action.
              </p>
            </div>

            <div className="bg-charcoal-light p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-white">THE ONLY RESPONSE</h3>
              <p className="text-white leading-relaxed mb-4">
                Julius Gray's law firm responded - but with a consultation fee of ~$300. 
                That's why we're building funds. We need money to get a lawyer to fight this.
              </p>
              <p className="text-white leading-relaxed font-bold text-red-300">
                Even the lawyers require payment. The system is designed to keep victims silent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call Verification */}
      <section className="py-16 px-4 bg-charcoal-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-amber-orange">VERIFICATION & AUTHENTICITY</h2>

          <div className="bg-charcoal p-8 rounded-lg border-l-4 border-amber-orange">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle size={24} className="text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">PHONE CARRIER VERIFIED</p>
                  <p className="text-gray-300">All calls are verified by my phone carrier. These are not speculative or estimated.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={24} className="text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">ACTUAL CONNECTIONS</p>
                  <p className="text-gray-300">Call durations prove I actually connected with people, not left voicemails. Some calls lasted 23 minutes.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={24} className="text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">DOCUMENTED RESPONSES</p>
                  <p className="text-gray-300">Where responses were given (Chief Paul's office, Julius Gray), they are documented.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={24} className="text-amber-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white mb-1">NO FOLLOW-UP DOCUMENTED</p>
                  <p className="text-gray-300">As of March 15, 2026, zero follow-up from any organization. This is documented fact, not opinion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">WHAT THIS PROVES</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              This is not a single case of ghosting. This is not a communication failure. 
              This is **systemic institutional failure across every level of Canadian government and organizations**.
            </p>

            <p className="text-2xl font-bold">
              I called 20+ times in 11 days. I got through to people. I made my case. 
              And I received ZERO follow-up from any of them.
            </p>

            <p>
              This is what happens when you seek help for a child in crisis. 
              This is what happens when you demand accountability. 
              This is what happens when you're a First Nations family in Canada.
            </p>

            <p className="text-xl font-bold">
              BE A DAD. PROTECT YOUR CUBS AND YOUR QUEEN.
              <br />
              LOVE DAD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
