import { useState } from 'react';
import { MapPin, Phone, Clock, Building2, X } from 'lucide-react';

interface CallLocation {
  id: string;
  city: string;
  province: string;
  lat: number;
  lng: number;
  calls: {
    date: string;
    time: string;
    duration: string;
    organization: string;
    type: 'government' | 'indigenous' | 'legal' | 'other';
    number: string;
    response: string;
  }[];
}

const callLocations: CallLocation[] = [
  {
    id: 'ottawa-1',
    city: 'Ottawa',
    province: 'Ontario',
    lat: 45.4215,
    lng: -75.6972,
    calls: [
      {
        date: 'March 12, 2026',
        time: '1:50 PM',
        duration: '12 minutes',
        organization: 'Federal Government Office',
        type: 'government',
        number: '613-233-7614',
        response: 'No follow-up received'
      },
      {
        date: 'March 12, 2026',
        time: '10:46 AM',
        duration: '7 minutes',
        organization: 'Federal Government Office',
        type: 'government',
        number: '613-230-5885',
        response: 'No follow-up received'
      },
      {
        date: 'March 12, 2026',
        time: '10:32 AM',
        duration: '2 minutes',
        organization: 'Federal Government Office',
        type: 'government',
        number: '613-944-4648',
        response: 'No follow-up received'
      },
      {
        date: 'March 4, 2026',
        time: '10:09 AM',
        duration: '3 minutes',
        organization: 'Federal Government Office',
        type: 'government',
        number: '613-236-1700',
        response: 'No follow-up received'
      }
    ]
  },
  {
    id: 'winnipeg',
    city: 'Winnipeg',
    province: 'Manitoba',
    lat: 49.8951,
    lng: -97.1384,
    calls: [
      {
        date: 'March 12, 2026',
        time: '11:48 AM',
        duration: '13 minutes',
        organization: 'Truth and Reconciliation Committee / Winnipeg Air',
        type: 'indigenous',
        number: '204-957-8450 / 1866',
        response: 'No follow-up received'
      }
    ]
  },
  {
    id: 'williams-lake',
    city: 'Williams Lake',
    province: 'British Columbia',
    lat: 52.1399,
    lng: -122.1426,
    calls: [
      {
        date: 'March 12, 2026',
        time: '2:51 PM',
        duration: '10 minutes',
        organization: 'Local Government/Organization',
        type: 'other',
        number: '250-302-0440',
        response: 'No follow-up received'
      }
    ]
  },
  {
    id: 'toronto',
    city: 'Toronto',
    province: 'Ontario',
    lat: 43.6629,
    lng: -79.3957,
    calls: [
      {
        date: 'March 3, 2026',
        time: '1:46 PM',
        duration: '5 minutes',
        organization: 'Government Office',
        type: 'government',
        number: '416-480-3000',
        response: 'No follow-up received'
      }
    ]
  },
  {
    id: 'montreal',
    city: 'Montreal',
    province: 'Quebec',
    lat: 45.5017,
    lng: -73.5673,
    calls: [
      {
        date: 'March 11, 2026',
        time: '1:41 PM',
        duration: '4 minutes',
        organization: 'Local Organization',
        type: 'other',
        number: '514-288-6180',
        response: 'No follow-up received'
      },
      {
        date: 'March 2, 2026',
        time: '2:45 PM',
        duration: '6 minutes',
        organization: 'Chief Paul\'s Office (First Nations)',
        type: 'indigenous',
        number: 'Chief Paul\'s Office',
        response: 'Told they were in meeting about Constitution'
      }
    ]
  },
  {
    id: 'quebec-city',
    city: 'Quebec City',
    province: 'Quebec',
    lat: 46.8139,
    lng: -71.2080,
    calls: [
      {
        date: 'March 12, 2026',
        time: '2:35 PM',
        duration: '13 minutes',
        organization: 'Provincial Government',
        type: 'government',
        number: '187723226110',
        response: 'No follow-up received'
      }
    ]
  }
];

const typeColors = {
  government: 'bg-red-500',
  indigenous: 'bg-orange-500',
  legal: 'bg-blue-500',
  other: 'bg-gray-500'
};

const typeLabels = {
  government: 'Government',
  indigenous: 'Indigenous Organization',
  legal: 'Legal',
  other: 'Other'
};

export default function InteractiveCallMap() {
  const [selectedLocation, setSelectedLocation] = useState<CallLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const totalCalls = callLocations.reduce((sum, loc) => sum + loc.calls.length, 0);
  const totalProvinces = new Set(callLocations.map(loc => loc.province)).size;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <section className="py-12 px-4 border-b border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Systemic Ghosting Across Canada</h1>
          <p className="text-xl text-slate-300 mb-6">
            Interactive map documenting {totalCalls} calls seeking help across {totalProvinces} provinces. 
            Zero follow-up from any organization as of March 15, 2026.
          </p>
          
          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${color}`}></div>
                <span className="text-sm">{typeLabels[type as keyof typeof typeLabels]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-slate-700 rounded-lg p-8 relative h-96 md:h-[500px] border border-slate-600">
              <svg viewBox="0 0 960 600" className="w-full h-full">
                {/* Simplified Canada map background */}
                <rect width="960" height="600" fill="#1e293b" />
                <text x="480" y="300" textAnchor="middle" fill="#64748b" fontSize="24" fontWeight="bold">
                  MAP OF CANADA
                </text>
              </svg>

              {/* Call Location Markers */}
              <div className="absolute inset-0 p-8">
                {callLocations.map((location) => {
                  // Approximate pixel positions for Canadian cities
                  const positions: Record<string, { x: string; y: string }> = {
                    'ottawa-1': { x: '70%', y: '35%' },
                    'winnipeg': { x: '40%', y: '30%' },
                    'williams-lake': { x: '15%', y: '25%' },
                    'toronto': { x: '72%', y: '32%' },
                    'montreal': { x: '75%', y: '28%' },
                    'quebec-city': { x: '78%', y: '25%' }
                  };

                  const pos = positions[location.id];
                  const isSelected = selectedLocation?.id === location.id;
                  const isHovered = hoveredLocation === location.id;

                  return (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(isSelected ? null : location)}
                      onMouseEnter={() => setHoveredLocation(location.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      style={{ left: pos.x, top: pos.y }}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                        isSelected ? 'scale-150' : isHovered ? 'scale-125' : 'scale-100'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer ring-2 ring-offset-2 ring-offset-slate-700 ${
                          typeColors[location.calls[0].type]
                        } ${isSelected ? 'ring-yellow-400' : 'ring-slate-600'}`}
                      >
                        {location.calls.length}
                      </div>
                      <div className="text-xs font-semibold mt-1 text-center whitespace-nowrap bg-slate-900 px-2 py-1 rounded">
                        {location.city}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            {selectedLocation ? (
              <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 sticky top-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedLocation.city}</h2>
                    <p className="text-slate-400">{selectedLocation.province}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="text-sm">
                    <p className="text-slate-400 mb-2">
                      <strong>{selectedLocation.calls.length}</strong> call{selectedLocation.calls.length !== 1 ? 's' : ''} made
                    </p>
                  </div>

                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {selectedLocation.calls.map((call, idx) => (
                      <div key={idx} className="bg-slate-600 rounded p-3 text-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 size={14} className="text-orange-400" />
                          <span className="font-semibold text-xs text-orange-300">
                            {typeLabels[call.type]}
                          </span>
                        </div>
                        <p className="text-slate-200 mb-2 font-medium">{call.organization}</p>
                        
                        <div className="space-y-1 text-slate-300">
                          <div className="flex items-center gap-2">
                            <Clock size={12} />
                            <span>{call.date} at {call.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={12} />
                            <span>{call.number}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={12} />
                            <span>Duration: {call.duration}</span>
                          </div>
                        </div>

                        <div className="mt-2 pt-2 border-t border-slate-500">
                          <p className="text-xs text-red-300 font-semibold">
                            Response: {call.response}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                <h3 className="text-lg font-bold mb-4">Click on a location to view call details</h3>
                <div className="space-y-3">
                  {callLocations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className="w-full text-left p-3 bg-slate-600 hover:bg-slate-500 rounded transition-colors"
                    >
                      <div className="font-semibold">{location.city}, {location.province}</div>
                      <div className="text-sm text-slate-300">{location.calls.length} call{location.calls.length !== 1 ? 's' : ''}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
            <div className="text-3xl font-bold text-orange-400">{totalCalls}</div>
            <div className="text-slate-400">Total Calls Made</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
            <div className="text-3xl font-bold text-red-400">{totalProvinces}</div>
            <div className="text-slate-400">Provinces Contacted</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
            <div className="text-3xl font-bold text-red-500">0</div>
            <div className="text-slate-400">Follow-ups Received</div>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 border border-slate-600">
            <div className="text-3xl font-bold text-yellow-500">100%</div>
            <div className="text-slate-400">Ghosting Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-red-900 border-2 border-red-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">This is Systemic Institutional Failure</h3>
          <p className="text-lg mb-6">
            From March 2-12, 2026, calls were made to government offices, Indigenous organizations, 
            legal firms, and reconciliation committees across Canada. As of March 15, 2026: 
            <strong className="block mt-2">ZERO follow-up from ANY organization.</strong>
          </p>
          <p className="text-slate-300">
            This is not coincidence. This is systemic abandonment of vulnerable families.
          </p>
        </div>
      </div>
    </div>
  );
}
