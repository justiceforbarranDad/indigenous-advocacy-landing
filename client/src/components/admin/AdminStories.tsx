import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle, Clock, Search } from 'lucide-react';

export function AdminStories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const stories = [
    // Placeholder - would be fetched from API
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">0</p>
          <p className="text-xs text-gray-500 mt-1">Stories</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Approved</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
          <p className="text-xs text-gray-500 mt-1">Stories</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Rejected</h3>
          <p className="text-3xl font-bold text-red-600">0</p>
          <p className="text-xs text-gray-500 mt-1">Stories</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Total</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
          <p className="text-xs text-gray-500 mt-1">Stories</p>
        </Card>
      </div>

      {/* Stories Table */}
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Manage Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="child_victim">Child Victim</option>
              <option value="adult_victim">Adult Victim</option>
              <option value="family_member">Family Member</option>
              <option value="advocate">Advocate</option>
              <option value="other">Other</option>
            </select>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Public</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td colSpan={6} className="py-8 px-4 text-center text-gray-500">
                  No stories submitted yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Story Status Legend */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Status Legend</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded">
            <Clock size={20} className="text-yellow-600" />
            <div>
              <p className="font-semibold text-gray-900">Pending</p>
              <p className="text-sm text-gray-600">Awaiting review</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
            <CheckCircle size={20} className="text-green-600" />
            <div>
              <p className="font-semibold text-gray-900">Approved</p>
              <p className="text-sm text-gray-600">Published</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-red-50 rounded">
            <XCircle size={20} className="text-red-600" />
            <div>
              <p className="font-semibold text-gray-900">Rejected</p>
              <p className="text-sm text-gray-600">Not published</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
