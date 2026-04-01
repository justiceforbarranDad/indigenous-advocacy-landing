import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Clock, FileText, AlertCircle } from 'lucide-react';

interface DisabilityEvent {
  id: string;
  year: string;
  age: string;
  event: string;
  status: 'declaration' | 'denial' | 'contradiction' | 'threat';
  details: string;
  impact: string;
}

const events: DisabilityEvent[] = [
  {
    id: 'event1',
    year: '2008-2010',
    age: '12-14 years old',
    event: 'First Handicap Declaration',
    status: 'declaration',
    details: 'Barran is officially declared handicapped due to pre-existing medical conditions: paraparesis (paralysis issues), biotinidase deficiency, and DNA-related medical conditions requiring ongoing specialist care at Montreal Shriners Hospital.',
    impact: 'System acknowledges Barran\'s disability. Access to medical specialists, occupational therapy, and disability tax credits established.',
  },
  {
    id: 'event2',
    year: '2014-2016',
    age: '17 years old (First Time)',
    event: 'Second Handicap Declaration',
    status: 'declaration',
    details: 'Barran is declared handicapped again at age 17. Medical evidence confirms ongoing disability requiring continued specialist care and accommodations.',
    impact: 'Disability status reconfirmed. Continued access to medical services and support programs.',
  },
  {
    id: 'event3',
    year: '2021',
    age: '17 years old (Second Time)',
    event: 'Third Handicap Declaration',
    status: 'declaration',
    details: 'Barran is declared handicapped for the third time at age 17. Medical documentation from Dr. D\'Agostino and occupational therapist Christiane Côté confirm ongoing disability.',
    impact: 'Multiple declarations should establish clear, undeniable disability status. Medical team provides comprehensive documentation.',
  },
  {
    id: 'event4',
    year: 'February 14, 2021',
    age: '17 years old',
    event: 'Stabbing Attack - Additional Trauma',
    status: 'denial',
    details: 'Barran is stabbed three times. On top of pre-existing disabilities, he now has acute trauma, PTSD, nightmares, and psychological injuries. Medical needs increase significantly.',
    impact: 'System should provide enhanced support for disabled youth experiencing trauma. Instead, government abandons family (see Documents & Evidence page).',
  },
  {
    id: 'event5',
    year: '2024',
    age: '20 years old',
    event: 'Age 18: Accepted on Regular Welfare',
    status: 'declaration',
    details: 'At age 18, Barran is accepted onto regular welfare. System acknowledges his disability and inability to work due to medical conditions.',
    impact: 'Government officially recognizes Barran cannot work and requires income support.',
  },
  {
    id: 'event6',
    year: '2024 (Months Later)',
    age: '20 years old',
    event: 'Transferred to Solidarité Sociale WITHOUT EXPLANATION',
    status: 'contradiction',
    details: 'Months after being accepted on regular welfare, Barran is transferred to Solidarité Sociale (social assistance for those with temporary difficulties). No explanation provided. No consultation with family.',
    impact: 'Contradictory decision. If Barran is disabled (which he is—declared 4 times), why transfer him to temporary assistance program?',
  },
  {
    id: 'event7',
    year: '2024 (Recent)',
    age: '20 years old',
    event: 'Solidarité Sociale Claims "Only 2 Years"',
    status: 'contradiction',
    details: 'Solidarité Sociale now claims Barran\'s support was "only for 2 years." This contradicts: (1) his multiple handicap declarations, (2) his acceptance on regular welfare, (3) his medical documentation showing ongoing disability.',
    impact: 'Institutional contradiction. System is denying its own previous decisions and declarations.',
  },
  {
    id: 'event8',
    year: '2024 (Current)',
    age: '20 years old',
    event: 'Demand to Re-Produce Medical Evidence',
    status: 'threat',
    details: 'Solidarité Sociale is demanding Barran re-produce medical evidence of disability—despite already being declared handicapped 4 times. They want him to go through the entire declaration process again.',
    impact: 'Bureaucratic harassment. Barran must re-live the medical evaluation process, provide new medical letters, and prove his disability—again—to the same system that already declared him disabled.',
  },
  {
    id: 'event9',
    year: '2024 (Current)',
    age: '20 years old',
    event: 'Constant Threats of Cut-Off',
    status: 'threat',
    details: 'Barran, his father, and stepmother are constantly threatened with termination of benefits. Every request for documentation, every deadline, carries the implicit threat: "Comply or lose your support."',
    impact: 'Psychological abuse through threat of abandonment. Living in constant fear of losing survival income while managing disability and trauma.',
  },
  {
    id: 'event10',
    year: '2024',
    age: '20 years old',
    event: 'IVAC Payment Scrutiny',
    status: 'threat',
    details: 'Father received IVAC (injury compensation) payment: 13% of $43,438 = ~$5,646 in 2024. Solidarité Sociale is now demanding justification for 194 transactions, including ones as small as $5. They want details on every penny spent.',
    impact: 'Harassment of injured victim. Money meant to help recovery is being weaponized against the family. Forced to justify basic survival spending (groceries, transportation, medical costs).',
  },
];

const statusColors = {
  declaration: 'bg-green-100 border-green-300 text-green-900',
  denial: 'bg-red-100 border-red-300 text-red-900',
  contradiction: 'bg-orange-100 border-orange-300 text-orange-900',
  threat: 'bg-red-200 border-red-400 text-red-900',
};

const statusIcons = {
  declaration: <CheckCircle className="w-5 h-5" />,
  denial: <XCircle className="w-5 h-5" />,
  contradiction: <AlertCircle className="w-5 h-5" />,
  threat: <AlertTriangle className="w-5 h-5" />,
};

const statusLabels = {
  declaration: 'Official Declaration',
  denial: 'System Denial',
  contradiction: 'Institutional Contradiction',
  threat: 'Threat of Cut-Off',
};

export default function BarransDisabilityBattle() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Barran's Disability Battle
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A Timeline of Institutional Contradictions and Bureaucratic Harassment
          </p>
          <p className="text-base text-gray-500 italic">
            Declared handicapped 4 times. Denied support repeatedly. Threatened with cut-off constantly.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <div className="text-3xl font-bold text-green-900">4</div>
            <div className="text-sm text-green-700">Handicap Declarations</div>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
            <div className="text-3xl font-bold text-orange-900">3</div>
            <div className="text-sm text-orange-700">Contradictions</div>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
            <div className="text-3xl font-bold text-red-900">∞</div>
            <div className="text-sm text-red-700">Threats of Cut-Off</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <div className="text-3xl font-bold text-blue-900">194</div>
            <div className="text-sm text-blue-700">Transactions to Justify</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 mb-12">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md border-l-4 border-gray-300 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Event Header */}
              <button
                onClick={() => toggleExpand(event.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border flex items-center gap-1 ${statusColors[event.status]}`}>
                      {statusIcons[event.status]}
                      {statusLabels[event.status]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {event.event}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Year:</strong> {event.year} | <strong>Age:</strong> {event.age}
                  </p>
                  <p className="text-gray-700 line-clamp-2">
                    {event.details}
                  </p>
                </div>
                <Clock className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
              </button>

              {/* Expanded Content */}
              {expandedId === event.id && (
                <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Full Details:</h4>
                    <p className="text-gray-700 bg-white p-4 rounded border border-gray-200">
                      {event.details}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Impact on Barran:</h4>
                    <p className="text-gray-700 bg-white p-4 rounded border border-gray-200">
                      {event.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The Pattern */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">The Pattern: Declare, Then Deny</h2>
          <ol className="space-y-3 text-red-900 list-decimal list-inside">
            <li className="ml-4">
              <strong>System declares Barran handicapped</strong> (4 times over 12 years)
            </li>
            <li className="ml-4">
              <strong>System accepts him on welfare</strong> acknowledging disability
            </li>
            <li className="ml-4">
              <strong>System transfers him to temporary assistance</strong> without explanation
            </li>
            <li className="ml-4">
              <strong>System claims "only 2 years"</strong> contradicting its own declarations
            </li>
            <li className="ml-4">
              <strong>System demands re-proof of disability</strong> despite 4 previous declarations
            </li>
            <li className="ml-4">
              <strong>System threatens cut-off</strong> if Barran doesn't comply with demands
            </li>
            <li className="ml-4">
              <strong>System scrutinizes every dollar spent</strong> (194 transactions, including $5 purchases)
            </li>
          </ol>
        </div>

        {/* Institutional Contradictions */}
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded mb-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">Institutional Contradictions</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-orange-200">
              <p className="font-bold text-orange-900 mb-2">Contradiction #1: Disability Status</p>
              <p className="text-orange-900">
                System declares Barran handicapped 4 times, then acts as if he's not disabled when transferring him to temporary assistance.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-orange-200">
              <p className="font-bold text-orange-900 mb-2">Contradiction #2: Welfare Eligibility</p>
              <p className="text-orange-900">
                System accepts Barran on regular welfare (for disabled people), then transfers him to Solidarité Sociale (for people with temporary difficulties). If he's disabled, why temporary?
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-orange-200">
              <p className="font-bold text-orange-900 mb-2">Contradiction #3: Memory Loss</p>
              <p className="text-orange-900">
                System "forgets" its own 4 previous handicap declarations and demands Barran re-prove his disability as if it's the first time.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-orange-200">
              <p className="font-bold text-orange-900 mb-2">Contradiction #4: Medical Evidence</p>
              <p className="text-orange-900">
                System has medical documentation from Dr. D'Agostino, occupational therapist, and Shriners Hospital confirming disability. Yet demands "new" medical evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Psychological Impact */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Psychological Impact: Living Under Threat</h2>
          <p className="text-blue-900 mb-4">
            Barran is living in constant fear of losing his survival income. This is not accidental—it is systemic psychological abuse through threat of abandonment.
          </p>
          <ul className="space-y-2 text-blue-900">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Every deadline is a threat: "Comply or lose your support"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Every request for documentation is a power play: "Prove you deserve to eat"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Every transaction scrutiny is harassment: "Justify why you bought groceries"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Barran is already traumatized from being stabbed. Now he's being re-traumatized by the system meant to help him.</span>
            </li>
          </ul>
        </div>

        {/* What Justice Requires */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-green-900 mb-4">What Justice Requires</h2>
          <ol className="space-y-3 text-green-900 list-decimal list-inside">
            <li className="ml-4">
              <strong>Recognize Barran's permanent disability status</strong> - Stop demanding re-proof. Accept the 4 previous declarations.
            </li>
            <li className="ml-4">
              <strong>Transfer to permanent disability support</strong> - Not temporary assistance. Barran's conditions are permanent.
            </li>
            <li className="ml-4">
              <strong>Stop harassment through transaction scrutiny</strong> - IVAC money is compensation for injury. Stop demanding justification for basic survival spending.
            </li>
            <li className="ml-4">
              <strong>Provide psychological support</strong> - Barran needs trauma counseling, not bureaucratic abuse.
            </li>
            <li className="ml-4">
              <strong>Apply Jordan's Principle</strong> - First Nations children with disabilities should not have to fight this hard for basic support.
            </li>
            <li className="ml-4">
              <strong>Independent inquiry</strong> - How many other disabled youth are being harassed this way by Solidarité Sociale?
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
