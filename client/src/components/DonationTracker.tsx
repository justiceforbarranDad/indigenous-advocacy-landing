import { useEffect, useState } from 'react';
import { trpc } from '@/lib/trpc';

interface CampaignData {
  actualRaisedAmount: number;
  goalAmount: number;
  percentageComplete: number;
  remainingAmount: number;
}

export function DonationTracker() {
  const [campaign, setCampaign] = useState<CampaignData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch campaign data on mount and every 30 seconds
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        setLoading(true);
        // This will be called via tRPC
        const data = await fetch('/api/donations/campaign').then(r => r.json());
        setCampaign(data);
      } catch (error) {
        console.error('Error fetching campaign:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
    const interval = setInterval(fetchCampaign, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading || !campaign) {
    return (
      <div className="bg-black text-white p-8 rounded-lg animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
      </div>
    );
  }

  const raisedUSD = campaign.actualRaisedAmount / 100;
  const goalUSD = campaign.goalAmount / 100;
  const remaining = campaign.remainingAmount / 100;
  const percentage = Math.min(campaign.percentageComplete, 100);

  return (
    <div className="bg-black text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-2">
        Current Goal: ${goalUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })} for comprehensive legal defense
      </h3>
      
      <div className="mb-6">
        <div className="bg-gray-800 h-8 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-600 to-red-500 h-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg">
        <span className="font-semibold">
          Raised: ${raisedUSD.toLocaleString('en-US', { maximumFractionDigits: 2 })}
        </span>
        <span className="text-gray-300">
          Remaining: ${remaining.toLocaleString('en-US', { maximumFractionDigits: 2 })}
        </span>
      </div>

      <p className="text-sm text-gray-400 mt-4">
        {percentage}% of goal reached • All funds go directly to legal defense and administration
      </p>
    </div>
  );
}
