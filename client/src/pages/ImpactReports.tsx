import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, TrendingUp } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export default function ImpactReports() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));

  const { data: impactData } = trpc.impact.getMonthlyReport.useQuery({
    month: selectedMonth,
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const fundAllocation = [
    { name: 'Legal Support', value: 40, color: '#2D5016' },
    { name: 'Advocacy & Outreach', value: 35, color: '#D97706' },
    { name: 'Community Support', value: 15, color: '#F59E0B' },
    { name: 'Operations', value: 10, color: '#FCD34D' },
  ];

  const growthData = [
    { month: 'Jan', donations: 0, stories: 0, parents: 0, lawyers: 0 },
    { month: 'Feb', donations: 500, stories: 2, parents: 3, lawyers: 1 },
    { month: 'Mar', donations: 1200, stories: 5, parents: 8, lawyers: 2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-forest-green text-cream py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impact Reports</h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Track our movement's growth, donations, and impact on systemic accountability.
          </p>
        </div>
      </section>

      {/* Month Selector */}
      <section className="bg-background border-b border-border py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <span className="text-sm font-semibold text-foreground/70">Select Month:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="">All Time</option>
              {months.map((month, idx) => (
                <option key={idx} value={`2026-${String(idx + 1).padStart(2, '0')}`}>
                  {month} 2026
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-green mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-foreground/70 mb-2">Total Donations</h3>
              <p className="text-3xl font-bold text-amber-orange mb-2">$1,700</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={14} /> +140% from last month
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-foreground/70 mb-2">Stories Published</h3>
              <p className="text-3xl font-bold text-amber-orange mb-2">7</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={14} /> +2 new stories
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-foreground/70 mb-2">Parent Members</h3>
              <p className="text-3xl font-bold text-amber-orange mb-2">11</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={14} /> +3 new members
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-foreground/70 mb-2">Lawyers Committed</h3>
              <p className="text-3xl font-bold text-amber-orange mb-2">3</p>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp size={14} /> +1 new lawyer
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="py-12 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-green mb-6">Movement Growth</h2>
          <Card className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="donations" stroke="#D97706" name="Donations ($)" />
                <Line type="monotone" dataKey="stories" stroke="#2D5016" name="Stories" />
                <Line type="monotone" dataKey="parents" stroke="#F59E0B" name="Parent Members" />
                <Line type="monotone" dataKey="lawyers" stroke="#FCD34D" name="Lawyers" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-green mb-6">Fund Allocation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={fundAllocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {fundAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-forest-green">Budget Breakdown</h3>
              {fundAllocation.map((item, idx) => (
                <div key={idx} className="p-4 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <span className="text-lg font-bold text-amber-orange">{item.value}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${item.value}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Breakdown */}
      <section className="py-12 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-forest-green mb-6">Monthly Breakdown</h2>
          <Card className="p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Month</th>
                  <th className="text-right py-3 px-4 font-semibold">Donations</th>
                  <th className="text-right py-3 px-4 font-semibold">Stories</th>
                  <th className="text-right py-3 px-4 font-semibold">Parents</th>
                  <th className="text-right py-3 px-4 font-semibold">Lawyers</th>
                </tr>
              </thead>
              <tbody>
                {growthData.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50">
                    <td className="py-3 px-4">{row.month}</td>
                    <td className="text-right py-3 px-4 font-semibold text-amber-orange">${row.donations}</td>
                    <td className="text-right py-3 px-4">{row.stories}</td>
                    <td className="text-right py-3 px-4">{row.parents}</td>
                    <td className="text-right py-3 px-4">{row.lawyers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Download Report */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-forest-green mb-4">Download Full Report</h2>
          <p className="text-foreground/70 mb-6">
            Get detailed monthly reports with full metrics and fund allocation breakdown.
          </p>
          <Button className="bg-amber-orange hover:bg-amber-light text-white inline-flex items-center gap-2">
            <Download size={20} />
            Download PDF Report
          </Button>
        </div>
      </section>
    </div>
  );
}
