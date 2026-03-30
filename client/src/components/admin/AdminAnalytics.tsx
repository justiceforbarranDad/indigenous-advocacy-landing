import { trpc } from '@/lib/trpc';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, FileText, Heart } from 'lucide-react';

export function AdminAnalytics() {
  const { data: campaign, isLoading } = trpc.donations.getActiveCampaign.useQuery();
  const { data: totalDonations } = trpc.donations.getTotal.useQuery();

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded mb-6 w-full"></div>
      </div>
    );
  }

  const percentageFunded = campaign?.percentageRaised || 0;
  const totalRaised = campaign?.raisedAmount || 0;
  const goalAmount = campaign?.goalAmount || 100000;
  const remainingAmount = Math.max(0, goalAmount - totalRaised);

  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp size={24} className="text-green-600" />
            <h3 className="text-sm font-semibold text-gray-600">Total Raised</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">${(totalRaised / 1000).toFixed(1)}K</p>
          <p className="text-xs text-gray-500 mt-1">of ${(goalAmount / 1000).toFixed(0)}K goal</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Heart size={24} className="text-red-600" />
            <h3 className="text-sm font-semibold text-gray-600">Progress</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">{percentageFunded}%</p>
          <p className="text-xs text-gray-500 mt-1">of goal funded</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users size={24} className="text-blue-600" />
            <h3 className="text-sm font-semibold text-gray-600">Supporters</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">0</p>
          <p className="text-xs text-gray-500 mt-1">people supporting</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText size={24} className="text-purple-600" />
            <h3 className="text-sm font-semibold text-gray-600">Stories</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">0</p>
          <p className="text-xs text-gray-500 mt-1">published</p>
        </Card>
      </div>

      {/* Campaign Progress */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-6">Campaign Progress</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Funding Goal: ${goalAmount.toLocaleString()}</span>
            <span className="text-sm font-bold text-green-600">{percentageFunded}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(percentageFunded, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            ${remainingAmount.toLocaleString()} remaining to reach goal
          </p>
        </div>

        {/* Milestone Indicators */}
        <div className="grid grid-cols-4 gap-2">
          {[25, 50, 75, 100].map((milestone) => (
            <div key={milestone} className="text-center">
              <div
                className={`h-2 rounded-full mb-2 ${
                  percentageFunded >= milestone ? 'bg-green-600' : 'bg-gray-300'
                }`}
              ></div>
              <p className="text-xs font-semibold text-gray-600">{milestone}%</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Campaign Impact */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Campaign Impact</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-semibold text-blue-900 mb-1">Legal Defense Fund</p>
            <p className="text-xs text-blue-700">Funds allocated to comprehensive legal representation and advocacy efforts</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-1">Systemic Change</p>
            <p className="text-xs text-green-700">Supporting policy reform and institutional accountability</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm font-semibold text-purple-900 mb-1">Community Support</p>
            <p className="text-xs text-purple-700">Building solidarity and raising awareness for Indigenous rights</p>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Donation Methods</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">E-Transfer</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">GoFundMe</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">Other Methods</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Content Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">Stories Pending</span>
              <span className="font-semibold text-yellow-600">0</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">Stories Published</span>
              <span className="font-semibold text-green-600">0</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">Email Subscribers</span>
              <span className="font-semibold text-blue-600">0</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
