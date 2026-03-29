import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, MapPin, Mail, Download } from 'lucide-react';
import { useState } from 'react';

export default function AdminAnalytics() {
  const { user, isAuthenticated } = useAuth();
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'all'>('all');
  
  const surveyStats = trpc.survey.getStats.useQuery();
  const surveyResponses = trpc.survey.getResponses.useQuery({ limit: 1000 });

  // Check if user is admin
  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-background text-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground">You must be an admin to access this dashboard.</p>
          </Card>
        </div>
      </div>
    );
  }

  // Calculate trends
  const responsesByDate = surveyResponses.data?.reduce((acc: Record<string, { yes: number; no: number }>, response) => {
    const date = new Date(response.createdAt).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = { yes: 0, no: 0 };
    }
    if (response.response === 'yes') {
      acc[date].yes++;
    } else {
      acc[date].no++;
    }
    return acc;
  }, {}) || {};

  const trendData = Object.entries(responsesByDate).map(([date, counts]) => ({
    date,
    yes: counts.yes,
    no: counts.no,
    total: counts.yes + counts.no,
  })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Top provinces
  const provinceStats = surveyResponses.data?.reduce((acc: Record<string, { yes: number; no: number }>, response) => {
    const province = response.province || 'Unknown';
    if (!acc[province]) {
      acc[province] = { yes: 0, no: 0 };
    }
    if (response.response === 'yes') {
      acc[province].yes++;
    } else {
      acc[province].no++;
    }
    return acc;
  }, {}) || {};

  const provinceData = Object.entries(provinceStats)
    .map(([province, counts]) => ({
      name: province,
      yes: counts.yes,
      no: counts.no,
      total: counts.yes + counts.no,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  // Recent responses
  const recentResponses = surveyResponses.data?.slice(0, 10) || [];

  const COLORS = ['#16a34a', '#dc2626'];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Analytics Dashboard</h1>
            <p className="text-lg text-muted-foreground">Real-time survey response tracking and insights</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-medium">Experienced Issues</p>
                <p className="text-3xl font-bold text-green-900">{surveyStats.data?.yes || 0}</p>
              </div>
              <Users className="w-8 h-8 text-green-600 opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-700 font-medium">No Issues</p>
                <p className="text-3xl font-bold text-red-900">{surveyStats.data?.no || 0}</p>
              </div>
              <Users className="w-8 h-8 text-red-600 opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-medium">Total Responses</p>
                <p className="text-3xl font-bold text-blue-900">{surveyStats.data?.total || 0}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-600 opacity-50" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 font-medium">Conversion Rate</p>
                <p className="text-3xl font-bold text-purple-900">
                  {surveyStats.data?.total ? Math.round((surveyStats.data.yes / surveyStats.data.total) * 100) : 0}%
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600 opacity-50" />
            </div>
          </Card>
        </div>

        {/* Response Trend Chart */}
        {trendData.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Response Trend Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorYes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNo" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="yes" stackId="1" stroke="#16a34a" fillOpacity={1} fill="url(#colorYes)" name="Experienced Issues" />
                <Area type="monotone" dataKey="no" stackId="1" stroke="#dc2626" fillOpacity={1} fill="url(#colorNo)" name="No Issues" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        )}

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Province Distribution */}
          {provinceData.length > 0 && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Responses by Province</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={provinceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="yes" stackId="a" fill="#16a34a" name="Experienced Issues" />
                  <Bar dataKey="no" stackId="a" fill="#dc2626" name="No Issues" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          )}

          {/* Response Distribution Pie */}
          {surveyStats.data && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Overall Distribution</h2>
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

        {/* Recent Responses Table */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Responses</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Response</th>
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 font-semibold">City</th>
                  <th className="text-left py-3 px-4 font-semibold">Province</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentResponses.map((response, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted">
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        response.response === 'yes'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {response.response === 'yes' ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="py-3 px-4">{response.name || '-'}</td>
                    <td className="py-3 px-4 text-xs">{response.email || '-'}</td>
                    <td className="py-3 px-4">{response.city || '-'}</td>
                    <td className="py-3 px-4">{response.province || '-'}</td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">
                      {new Date(response.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
