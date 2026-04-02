import { useTranslation } from 'react-i18next';
import DonationImpactTracker from '@/components/DonationImpactTracker';
import GovernmentResponseDashboard from '@/components/GovernmentResponseDashboard';

export default function Trackers() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {i18n.language === 'fr' ? 'Tableaux de Suivi' : 'Impact & Accountability Trackers'}
          </h1>
          <p className="text-xl text-gray-600">
            {i18n.language === 'fr'
              ? 'Transparence totale : Voir comment vos dons créent un impact et comment les gouvernements répondent.'
              : 'Complete transparency: See how your donations create impact and how government officials respond.'}
          </p>
        </div>

        {/* Donation Impact Tracker */}
        <div className="mb-12">
          <DonationImpactTracker />
        </div>

        {/* Government Response Dashboard */}
        <div>
          <GovernmentResponseDashboard />
        </div>
      </div>
    </div>
  );
}
