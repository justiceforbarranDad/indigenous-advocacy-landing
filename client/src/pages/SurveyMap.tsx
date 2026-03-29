import { useState, useMemo } from 'react';
import { trpc } from '@/lib/trpc';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MapPin, Users } from 'lucide-react';

export default function SurveyMap() {
  const surveyStats = trpc.survey.getStats.useQuery();
  const surveyResponses = trpc.survey.getResponses.useQuery({ limit: 1000 });

  // Group responses by province
  const provinceData = useMemo(() => {
    if (!surveyResponses.data) return [];
    
    const grouped: Record<string, { yes: number; no: number }> = {};
    
    surveyResponses.data.forEach((response) => {
      const province = response.province || 'Unknown';
      if (!grouped[province]) {
        grouped[province] = { yes: 0, no: 0 };
      }
      if (response.response === 'yes') {
        grouped[province].yes++;
      } else {
        grouped[province].no++;
      }
    });

    return Object.entries(grouped).map(([province, counts]) => ({
      name: province,
      yes: counts.yes,
      no: counts.no,
      total: counts.yes + counts.no,
    })).sort((a, b) => b.total - a.total);
  }, [surveyResponses.data]);

  // Group responses by city
  const cityData = useMemo(() => {
    if (!surveyResponses.data) return [];
    
    const grouped: Record<string, number> = {};
    
    surveyResponses.data.forEach((response) => {
      if (response.city) {
        grouped[response.city] = (grouped[response.city] || 0) + 1;
      }
    });

    return Object.entries(grouped)
      .map(([city, count]) => ({ name: city, value: count }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
  }, [surveyResponses.data]);

  const COLORS = ['#16a34a', '#dc2626', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#6366f1', '#14b8a6'];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Survey Response Map</h1>
          <p className="text-lg text-muted-foreground">
            Geographic distribution of systemic failures reported across Canada
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-green-700">Experienced Similar Issues</p>
                <p className="text-3xl font-bold text-green-900">{surveyStats.data?.yes || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gray-50 border-gray-200">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-gray-600" />
              <div>
                <p className="text-sm text-gray-700">No Similar Issues</p>
                <p className="text-3xl font-bold text-gray-900">{surveyStats.data?.no || 0}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-blue-700">Total Responses</p>
                <p className="text-3xl font-bold text-blue-900">{surveyStats.data?.total || 0}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Province Distribution Chart */}
        {provinceData.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Responses by Province/Region</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={provinceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="yes" stackId="a" fill="#16a34a" name="Experienced Issues" />
                <Bar dataKey="no" stackId="a" fill="#dc2626" name="No Issues" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        )}

        {/* Top Cities */}
        {cityData.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Top Cities Reporting Issues</h2>
              <div className="space-y-3">
                {cityData.map((city, index) => (
                  <div key={city.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                      <span className="font-medium">{city.name}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{city.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Response Distribution Pie Chart */}
            {surveyStats.data && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Overall Response Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Experienced Issues', value: surveyStats.data.yes },
                        { name: 'No Issues', value: surveyStats.data.no },
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value, percent }) =>
                        `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      <Cell fill="#16a34a" />
                      <Cell fill="#dc2626" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            )}
          </div>
        )}

        {/* All Responses Table */}
        {surveyResponses.data && surveyResponses.data.length > 0 && (
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-bold mb-6">All Responses</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">Response</th>
                    <th className="text-left py-3 px-4 font-semibold">City</th>
                    <th className="text-left py-3 px-4 font-semibold">Province</th>
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {surveyResponses.data.slice(0, 50).map((response, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted">
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          response.response === 'yes'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {response.response === 'yes' ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="py-3 px-4">{response.city || '-'}</td>
                      <td className="py-3 px-4">{response.province || '-'}</td>
                      <td className="py-3 px-4">{response.name || 'Anonymous'}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">
                        {new Date(response.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {surveyResponses.data.length > 50 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Showing 50 of {surveyResponses.data.length} responses
                </p>
              )}
            </div>
          </Card>
        )}

        {!surveyResponses.data || surveyResponses.data.length === 0 && (
          <Card className="p-12 text-center">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No survey responses yet</p>
          </Card>
        )}
      </div>
    </div>
  );
}
