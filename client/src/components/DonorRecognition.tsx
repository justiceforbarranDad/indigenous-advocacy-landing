import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

export function DonorRecognition() {
  const { t } = useTranslation();

  // Placeholder donors - users can add real names later
  const foundationBuilders: string[] = [
    // "Name of Foundation/Individual"
  ];

  const justicePartners: string[] = [
    // "Corporate Partner Name"
  ];

  const communityChampions: string[] = [
    // "Individual Donor Name"
  ];

  return (
    <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-t-4 border-red-600 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-red-600" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('donors.title')}
            </h2>
            <Heart className="text-red-600" size={28} />
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t('donors.subtitle')}
          </p>
        </div>

        {/* Foundation Builders */}
        {foundationBuilders.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              {t('donors.foundationBuilders')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {foundationBuilders.map((donor, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-red-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-gray-900">{donor}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Justice Partners */}
        {justicePartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              {t('donors.justicePartners')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {justicePartners.map((donor, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-gray-900">{donor}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Champions */}
        {communityChampions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              {t('donors.communityChampions')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {communityChampions.map((donor, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-green-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-gray-900">{donor}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {foundationBuilders.length === 0 &&
          justicePartners.length === 0 &&
          communityChampions.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-gray-600 mb-2">{t('donors.emptyState')}</p>
              <p className="text-sm text-gray-500">{t('donors.addDonorsInfo')}</p>
            </div>
          )}

        {/* Transparency Note */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-blue-900">{t('donors.transparency')}:</span>{' '}
            {t('donors.transparencyText')}
          </p>
        </div>
      </div>
    </div>
  );
}
