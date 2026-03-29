import { trpc } from '@/lib/trpc';
import { Card } from '@/components/ui/card';
import { MapPin, Users } from 'lucide-react';
import { useMemo } from 'react';

// Canadian provinces with approximate coordinates
const PROVINCES = [
  { name: 'British Columbia', code: 'BC', x: 15, y: 35 },
  { name: 'Alberta', code: 'AB', x: 25, y: 30 },
  { name: 'Saskatchewan', code: 'SK', x: 35, y: 25 },
  { name: 'Manitoba', code: 'MB', x: 40, y: 25 },
  { name: 'Ontario', code: 'ON', x: 55, y: 30 },
  { name: 'Quebec', code: 'QC', x: 65, y: 35 },
  { name: 'New Brunswick', code: 'NB', x: 72, y: 42 },
  { name: 'Nova Scotia', code: 'NS', x: 75, y: 45 },
  { name: 'Prince Edward Island', code: 'PE', x: 78, y: 42 },
  { name: 'Newfoundland and Labrador', code: 'NL', x: 82, y: 40 },
];

export default function CanadaMap() {
  const surveyStats = trpc.survey.getStats.useQuery();
  const surveyResponses = trpc.survey.getResponses.useQuery({ limit: 1000 });

  // Calculate responses by province
  const provinceData = useMemo(() => {
    if (!surveyResponses.data) return {};
    
    const grouped: Record<string, { yes: number; no: number; total: number }> = {};
    
    surveyResponses.data.forEach((response) => {
      const province = response.province || 'Unknown';
      if (!grouped[province]) {
        grouped[province] = { yes: 0, no: 0, total: 0 };
      }
      if (response.response === 'yes') {
        grouped[province].yes++;
      } else {
        grouped[province].no++;
      }
      grouped[province].total++;
    });

    return grouped;
  }, [surveyResponses.data]);

  // Get color intensity based on response count
  const getColor = (province: string) => {
    const data = provinceData[province];
    if (!data) return '#f3f4f6'; // light gray
    
    const yesPercentage = (data.yes / data.total) * 100;
    
    if (yesPercentage >= 75) return '#dc2626'; // dark red
    if (yesPercentage >= 50) return '#ef4444'; // red
    if (yesPercentage >= 25) return '#fca5a5'; // light red
    return '#fecaca'; // very light red
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Systemic Failures Across Canada</h1>
          <p className="text-lg text-muted-foreground">
            Interactive map showing geographic distribution of reported issues
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-green-700">Experienced Issues</p>
                <p className="text-3xl font-bold text-green-900">{surveyStats.data?.yes || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-700">Provinces Affected</p>
                <p className="text-3xl font-bold text-red-900">{Object.keys(provinceData).length}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-blue-700">Total Responses</p>
                <p className="text-3xl font-bold text-blue-900">{surveyStats.data?.total || 0}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Canada Map */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Response Density Map</h2>
          <svg viewBox="0 0 100 60" className="w-full border border-border rounded-lg bg-blue-50">
            {/* Simplified Canada outline */}
            <rect x="0" y="0" width="100" height="60" fill="#e0f2fe" stroke="#0284c7" strokeWidth="0.5" />
            
            {/* Province circles */}
            {PROVINCES.map((province) => {
              const data = provinceData[province.name];
              const color = getColor(province.name);
              const radius = data ? Math.min(3 + (data.total / 2), 5) : 2;
              
              return (
                <g key={province.code}>
                  <circle
                    cx={province.x}
                    cy={province.y}
                    r={radius}
                    fill={color}
                    stroke="#1f2937"
                    strokeWidth="0.3"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                  <text
                    x={province.x}
                    y={province.y - radius - 1}
                    textAnchor="middle"
                    fontSize="2"
                    fontWeight="bold"
                    fill="#1f2937"
                    className="pointer-events-none"
                  >
                    {province.code}
                  </text>
                </g>
              );
            })}
          </svg>
          
          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <span className="text-sm">No Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 rounded"></div>
              <span className="text-sm">0-25% Issues</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-300 rounded"></div>
              <span className="text-sm">25-50% Issues</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">50-75% Issues</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-700 rounded"></div>
              <span className="text-sm">75%+ Issues</span>
            </div>
          </div>
        </Card>

        {/* Province Details */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Province Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROVINCES.map((province) => {
              const data = provinceData[province.name];
              if (!data) return null;
              
              const yesPercentage = Math.round((data.yes / data.total) * 100);
              
              return (
                <Card key={province.code} className="p-4 bg-muted">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{province.name}</h3>
                      <p className="text-sm text-muted-foreground">{province.code}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      yesPercentage >= 75 ? 'bg-red-100 text-red-800' :
                      yesPercentage >= 50 ? 'bg-orange-100 text-orange-800' :
                      yesPercentage >= 25 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {yesPercentage}%
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-green-700">Issues: {data.yes}</span>
                      <span className="text-gray-700">No Issues: {data.no}</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${yesPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Total: {data.total} responses
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
