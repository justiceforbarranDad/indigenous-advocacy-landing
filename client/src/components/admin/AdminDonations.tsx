import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Card } from '@/components/ui/card';
import { Download, Filter } from 'lucide-react';

export function AdminDonations() {
  const [filterMethod, setFilterMethod] = useState('all');
  const { data: totalDonations, isLoading } = trpc.donations.getTotal.useQuery();

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded mb-6 w-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Raised</h3>
          <p className="text-3xl font-bold text-green-600">${totalDonations?.totalCAD || '0.00'}</p>
          <p className="text-xs text-gray-500 mt-1">CAD</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">E-Transfer</h3>
          <p className="text-3xl font-bold text-blue-600">—</p>
          <p className="text-xs text-gray-500 mt-1">Donations</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Other Methods</h3>
          <p className="text-3xl font-bold text-purple-600">—</p>
          <p className="text-xs text-gray-500 mt-1">Donations</p>
        </Card>
      </div>

      {/* Donations Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Recent Donations</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Filter size={18} />
              <span className="text-sm">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
              <Download size={18} />
              <span className="text-sm">Export CSV</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Donor Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Method</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td colSpan={6} className="py-8 px-4 text-center text-gray-500">
                  No donations recorded yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Donation Methods Breakdown */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Donation Methods</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm font-medium">E-Transfer</span>
            <span className="text-sm text-gray-600">0 donations</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm font-medium">GoFundMe</span>
            <span className="text-sm text-gray-600">0 donations</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span className="text-sm font-medium">Other</span>
            <span className="text-sm text-gray-600">0 donations</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
