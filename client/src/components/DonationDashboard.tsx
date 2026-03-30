import { useEffect, useState } from 'react';
import { trpc } from '@/lib/trpc';
import { TrendingUp, Users, Heart, Target } from 'lucide-react';

export function DonationDashboard() {
  const [stats, setStats] = useState({
    totalRaised: 0,
    goalAmount: 100000,
    donorCount: 0,
    percentageFunded: 0,
    remainingAmount: 100000
  });

  // Fetch campaign data
  const { data: campaign, isLoading } = trpc.donations.getActiveCampaign.useQuery();

  useEffect(() => {
    if (campaign) {
      const totalRaised = campaign.raisedAmount || 0;
      const goalAmount = campaign.goalAmount || 100000;
      const percentageFunded = campaign.percentageRaised || 0;
      const remainingAmount = Math.max(0, goalAmount - totalRaised);

      setStats({
        totalRaised,
        goalAmount,
        donorCount: 0,
        percentageFunded,
        remainingAmount
      });
    }
  }, [campaign]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded mb-6 w-full"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-50 to-white rounded-lg p-6 shadow-lg border-2 border-red-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Target className="text-red-700" size={28} />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Campaign Progress</h3>
          <p className="text-sm text-gray-600">Real-time donation tracking</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Amount Raised */}
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-600" size={20} />
            <span className="text-xs font-semibold text-green-700 uppercase">Raised</span>
          </div>
          <p className="text-2xl font-bold text-green-700">
            ${(stats.totalRaised / 1000).toFixed(1)}K
          </p>
          <p className="text-xs text-gray-600 mt-1">of ${(stats.goalAmount / 1000).toFixed(0)}K goal</p>
        </div>

        {/* Percentage */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-blue-600" size={20} />
            <span className="text-xs font-semibold text-blue-700 uppercase">Progress</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">{stats.percentageFunded}%</p>
          <p className="text-xs text-gray-600 mt-1">of goal funded</p>
        </div>

        {/* Remaining */}
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="text-orange-600" size={20} />
            <span className="text-xs font-semibold text-orange-700 uppercase">Remaining</span>
          </div>
          <p className="text-2xl font-bold text-orange-700">
            ${(stats.remainingAmount / 1000).toFixed(1)}K
          </p>
          <p className="text-xs text-gray-600 mt-1">to reach goal</p>
        </div>

        {/* Donors */}
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-purple-600" size={20} />
            <span className="text-xs font-semibold text-purple-700 uppercase">Supporters</span>
          </div>
          <p className="text-2xl font-bold text-purple-700">{stats.donorCount}</p>
          <p className="text-xs text-gray-600 mt-1">people supporting</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">Campaign Goal: ${stats.goalAmount.toLocaleString()} for Comprehensive Legal Defense</span>
          <span className="text-sm font-bold text-red-700">{stats.percentageFunded}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-600 to-red-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(stats.percentageFunded, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Payment Options Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
        <p className="text-sm text-gray-800">
          <span className="font-bold text-yellow-700">💳 Payment Options Coming Soon</span> — Online payment processing will be available soon. Currently, you can donate via <span className="font-semibold">e-transfer</span> or contact us directly.
        </p>
      </div>

      {/* Impact Message */}
      <div className="bg-red-100 border-l-4 border-red-700 p-4 rounded">
        <p className="text-sm text-gray-800">
          <span className="font-bold text-red-700">100% of donations</span> go directly to legal defense and advocacy efforts. <span className="font-semibold">No administrative fees.</span> Every dollar supports justice for Barran and systemic change.
        </p>
      </div>

      {/* Milestone Messages */}
      {stats.percentageFunded >= 25 && stats.percentageFunded < 50 && (
        <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded text-sm text-blue-800">
          🎯 <strong>25% milestone reached!</strong> We're gaining momentum. Share this campaign to reach more supporters.
        </div>
      )}
      {stats.percentageFunded >= 50 && stats.percentageFunded < 75 && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded text-sm text-green-800">
          🎉 <strong>50% milestone reached!</strong> Halfway to our goal. Keep sharing and supporting!
        </div>
      )}
      {stats.percentageFunded >= 75 && stats.percentageFunded < 100 && (
        <div className="mt-4 p-3 bg-purple-100 border border-purple-300 rounded text-sm text-purple-800">
          🚀 <strong>75% milestone reached!</strong> We're almost there. Final push to reach the goal!
        </div>
      )}
      {stats.percentageFunded >= 100 && (
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded text-sm text-yellow-800">
          ✨ <strong>Goal reached!</strong> Thank you to all supporters. Funds will now be allocated to legal defense.
        </div>
      )}
    </div>
  );
}
