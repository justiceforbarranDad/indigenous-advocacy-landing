import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import { Heart, TrendingUp } from 'lucide-react';

export default function DonationImpactTracker() {
  const { i18n } = useTranslation();
  const { data: metrics, isLoading } = trpc.donationImpact.getMetrics.useQuery();

  if (isLoading || !metrics) {
    return (
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-200">
        <div className="animate-pulse space-y-3">
          <div className="h-8 bg-amber-200 rounded w-3/4"></div>
          <div className="h-6 bg-amber-100 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  // Convert cents to dollars
  const totalCAD = (metrics.totalRaisedCAD / 100).toFixed(2);
  const totalUSD = (metrics.totalRaisedUSD / 100).toFixed(2);
  const legalHours = metrics.legalHoursFunded;

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-200 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <Heart className="text-red-600" size={28} />
        <h3 className="text-2xl font-bold text-amber-900">
          {i18n.language === 'fr' ? 'Impact de Votre Générosité' : 'Your Impact'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Raised */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-amber-600">
          <p className="text-sm text-gray-600 mb-1">
            {i18n.language === 'fr' ? 'Montant Total Collecté' : 'Total Raised'}
          </p>
          <p className="text-2xl font-bold text-amber-900">
            ${totalCAD} CAD
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ≈ ${totalUSD} USD
          </p>
        </div>

        {/* Legal Hours Funded */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
          <p className="text-sm text-gray-600 mb-1">
            {i18n.language === 'fr' ? 'Heures Juridiques Financées' : 'Legal Hours Funded'}
          </p>
          <p className="text-2xl font-bold text-blue-900">
            {legalHours}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {i18n.language === 'fr' ? 'à $250/heure' : 'at $250/hour'}
          </p>
        </div>

        {/* Number of Donors */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
          <p className="text-sm text-gray-600 mb-1">
            {i18n.language === 'fr' ? 'Nombre de Donateurs' : 'Number of Donors'}
          </p>
          <p className="text-2xl font-bold text-green-900">
            {metrics.totalDonors}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {i18n.language === 'fr' ? 'Voix Unies pour la Justice' : 'Voices for Justice'}
          </p>
        </div>
      </div>

      {/* Impact Message */}
      <div className="mt-4 bg-white rounded-lg p-4 border-l-4 border-red-500">
        <div className="flex items-start gap-2">
          <TrendingUp className="text-red-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              {i18n.language === 'fr'
                ? 'Chaque Don Compte'
                : 'Every Donation Counts'}
            </p>
            <p className="text-xs text-gray-700">
              {i18n.language === 'fr'
                ? `${legalHours} heures de défense juridique pour les familles autochtones. Votre générosité finance la justice systémique et l'accountability.`
                : `${legalHours} hours of legal defense for Indigenous families. Your generosity funds systemic justice and accountability.`}
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <p className="text-xs text-gray-500 text-center mt-4">
        {i18n.language === 'fr'
          ? 'Mis à jour le'
          : 'Last updated'}{' '}
        {new Date(metrics.lastUpdated).toLocaleDateString(
          i18n.language === 'fr' ? 'fr-CA' : 'en-CA'
        )}
      </p>
    </div>
  );
}
