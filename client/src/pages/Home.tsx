import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";

export default function Home() {
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Justice for Barran McGovern</h1>
        <p className="text-xl text-gray-700 mb-6">
          Legal documentation and advocacy materials are being prepared for the June 2026 TAQ hearing.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          All materials are organized and ready for distribution to relevant institutions.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-gray-800 mb-4">
            <strong>Complete Documentation Package Includes:</strong>
          </p>
          <ul className="text-left text-gray-700 space-y-2 mb-6">
            <li>✓ IVAC Appeal (all 11 family members)</li>
            <li>✓ Legal Justification ($882,000+ compensation)</li>
            <li>✓ Whistleblower Complaint (Ombudsman)</li>
            <li>✓ Welfare Clawback Protection</li>
            <li>✓ Court Documents for June 2026 Hearing</li>
            <li>✓ Distribution to 50+ institutions</li>
          </ul>
        </div>
        <p className="text-gray-600 mt-8">
          For more information, contact James Robert McGovern (sole legal representative)
        </p>
      </div>
    </div>
  );
}
