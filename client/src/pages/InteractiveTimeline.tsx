import { ChevronDown, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface TimelineEvent {
  year: number;
  month: string;
  title: string;
  description: string;
  systemicFailure: string;
  governmentResponse: string;
  impact: string;
  category: 'trauma' | 'government' | 'advocacy' | 'failure';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2021,
    month: 'Approximately',
    title: 'Barran Stabbed - Serious Trauma Begins',
    description: 'A First Nations youth is stabbed three times in a serious violent incident. The trauma begins a journey through systemic abandonment.',
    systemicFailure: 'No immediate comprehensive psychological support provided despite severity of trauma',
    governmentResponse: 'DYP (Department of Youth Protection) eventually involved but inadequate follow-up',
    impact: 'Barran begins 5+ years without proper mental health care',
    category: 'trauma'
  },
  {
    year: 2021,
    month: 'Late 2021 - Early 2022',
    title: 'Family Seeks Help - System Fails',
    description: 'Family reaches out to government services seeking psychological support and intervention for Barran\'s trauma.',
    systemicFailure: 'Services fragmented, no coordinated response, Jordan\'s Principle ignored',
    governmentResponse: 'Minimal coordination between departments; services offered are inadequate',
    impact: 'Family loses confidence in government support systems',
    category: 'failure'
  },
  {
    year: 2022,
    month: 'Throughout 2022',
    title: 'Education Disrupted - Mental Health Deteriorates',
    description: 'Without proper psychological support, Barran\'s education suffers. Mental health continues to decline.',
    systemicFailure: 'Schools not equipped to support trauma victims; no mental health liaison',
    governmentResponse: 'DYP involvement continues but remains insufficient',
    impact: 'Educational opportunities lost; mental health crisis deepens',
    category: 'failure'
  },
  {
    year: 2023,
    month: 'January 2023',
    title: 'DYP Withdraws - Abandonment',
    description: 'Department of Youth Protection withdraws involvement despite ongoing crisis. No adequate transition plan or follow-up services provided.',
    systemicFailure: 'Systemic abandonment at critical moment; no continuity of care',
    governmentResponse: 'DYP closes file without ensuring alternative support',
    impact: 'Barran left without government support during peak crisis',
    category: 'failure'
  },
  {
    year: 2023,
    month: 'Throughout 2023',
    title: 'Advocacy Begins - Political Silence',
    description: 'Family begins advocating for help. Reaches out to elected officials at municipal, provincial, and federal levels.',
    systemicFailure: 'Political system fails to respond to constituent pleas',
    governmentResponse: 'MNA Céline Haytayan\'s office sends cease-and-desist warning instead of assistance (Nov 19, 2023)',
    impact: 'Political intimidation replaces government support',
    category: 'advocacy'
  },
  {
    year: 2023,
    month: 'November 19, 2023',
    title: 'Political Intimidation - Cease & Desist',
    description: 'MNA Céline Haytayan\'s office sends cease-and-desist letter threatening criminal harassment charges if family continues seeking help.',
    systemicFailure: 'Elected official uses legal intimidation instead of constituent service',
    governmentResponse: 'Threat of criminal charges for advocating for child welfare',
    impact: 'Family silenced through legal intimidation',
    category: 'government'
  },
  {
    year: 2024,
    month: 'Throughout 2024',
    title: 'Escalation to Federal Level - Continued Silence',
    description: 'Family escalates to federal MPs, national bodies. Multiple requests for intervention sent to Protecteur du citoyen, Commissaire à l\'éthique, Canadian Human Rights Commission.',
    systemicFailure: 'Federal systems also fail to intervene despite documented systemic failure',
    governmentResponse: 'Responses cite "limits on powers" but offer no real solutions',
    impact: 'Systemic failure confirmed at all government levels',
    category: 'failure'
  },
  {
    year: 2024,
    month: 'Throughout 2024',
    title: 'CDPDJ Systemic Inquiry - Evidence of Widespread Failure',
    description: 'CDPDJ launches systemic inquiry into Nunavik child protection. Report reveals chronic failures affecting Indigenous children across Quebec.',
    systemicFailure: 'Systemic inquiry confirms what Barran\'s family experienced: under-resourced, culturally inappropriate interventions',
    governmentResponse: 'CDPDJ documents failures but enforcement mechanisms remain weak',
    impact: 'Barran\'s case becomes evidence of systemic pattern',
    category: 'advocacy'
  },
  {
    year: 2024,
    month: 'Throughout 2024',
    title: 'Public Advocacy Campaign Launches',
    description: 'Family goes public with Barran\'s story. Social media campaign, media outreach, and international advocacy begins.',
    systemicFailure: 'Public pressure becomes necessary because government systems failed',
    governmentResponse: 'Continued silence from government officials',
    impact: 'Story reaches national and international audiences',
    category: 'advocacy'
  },
  {
    year: 2025,
    month: 'Throughout 2025',
    title: 'Five Years Without Justice - Crisis Continues',
    description: 'Barran reaches 5+ years without adequate psychological support, education, or government assistance. Mental health crisis ongoing.',
    systemicFailure: 'Complete systemic failure to protect and support Indigenous child victim',
    governmentResponse: 'No intervention; no accountability',
    impact: 'Barran\'s future compromised; family exhausted',
    category: 'failure'
  },
  {
    year: 2026,
    month: 'March 2026',
    title: 'Justice for Barran - Part 3 Campaign',
    description: 'Comprehensive advocacy platform launched. Government and corporate accountability campaigns begin. International attention grows.',
    systemicFailure: 'Systemic failures documented and exposed publicly',
    governmentResponse: 'Pressure mounts for government intervention and reform',
    impact: 'Movement for systemic change gains momentum',
    category: 'advocacy'
  }
];

export default function InteractiveTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getColorClass = (category: string) => {
    switch (category) {
      case 'trauma':
        return 'border-l-black bg-gray-100';
      case 'government':
        return 'border-l-black bg-gray-100';
      case 'advocacy':
        return 'border-l-black bg-white';
      case 'failure':
        return 'border-l-black bg-gray-50';
      default:
        return 'border-l-black bg-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'trauma':
        return 'TRAUMA';
      case 'government':
        return 'GOVERNMENT FAILURE';
      case 'advocacy':
        return 'ADVOCACY';
      case 'failure':
        return 'SYSTEMIC FAILURE';
      default:
        return 'EVENT';
    }
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            BARRAN'S TIMELINE
          </h1>
          <p className="text-lg md:text-xl mb-2">Five Years of Systemic Abandonment</p>
          <p className="text-sm tracking-widest">2021 - 2026: A Journey Through Government Failure</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">The Systemic Abandonment of a First Nations Youth</h2>
          <p className="text-lg leading-relaxed mb-4">
            This timeline documents Barran's journey from trauma victim to advocate for systemic change. It shows how every level of Canadian government—federal, provincial, and municipal—failed to protect and support an Indigenous child who needed help.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            Five years. No justice. No adequate support. No government accountability.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="space-y-6 pb-8 border-b-4 border-black">
          {timelineEvents.map((event, idx) => (
            <div
              key={idx}
              className={`border-l-8 pl-6 py-6 cursor-pointer transition-all ${getColorClass(event.category)}`}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              {/* YEAR MARKER */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="inline-block bg-black text-white px-4 py-2 font-black text-lg mb-2">
                    {event.year}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">{event.month}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">
                    {getCategoryLabel(event.category)}
                  </p>
                </div>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${expandedIndex === idx ? 'rotate-180' : ''}`}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black mb-3">{event.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-base leading-relaxed mb-4">{event.description}</p>

              {/* EXPANDED DETAILS */}
              {expandedIndex === idx && (
                <div className="mt-6 pt-6 border-t-2 border-black space-y-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <AlertCircle size={16} />
                      Systemic Failure
                    </p>
                    <p className="text-base leading-relaxed bg-gray-100 p-4 border-2 border-black">
                      {event.systemicFailure}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-2">Government Response</p>
                    <p className="text-base leading-relaxed bg-gray-50 p-4 border-2 border-black">
                      {event.governmentResponse}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest mb-2">Impact on Barran</p>
                    <p className="text-base leading-relaxed bg-white p-4 border-2 border-black font-bold">
                      {event.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* KEY STATISTICS */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-6 pb-4 border-b-4 border-black">
            By The Numbers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black text-white p-6 border-2 border-black text-center">
              <p className="text-5xl font-black mb-2">5+</p>
              <p className="text-lg font-bold">Years Without Justice</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black text-center">
              <p className="text-5xl font-black mb-2">3</p>
              <p className="text-lg font-bold">Stab Wounds</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black text-center">
              <p className="text-5xl font-black mb-2">0</p>
              <p className="text-lg font-bold">Government Interventions</p>
            </div>
            <div className="bg-black text-white p-6 border-2 border-black text-center">
              <p className="text-5xl font-black mb-2">4</p>
              <p className="text-lg font-bold">Government Levels Failed</p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-black text-white p-8 border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4">Demand Systemic Change</h2>
          <p className="text-lg mb-6 leading-relaxed">
            This timeline proves systemic failure. Government officials at all levels failed to protect Barran. It's time for accountability and reform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/government-accountability" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Demand Government Action
            </a>
            <a href="/accountability-petition" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Sign the Petition
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
