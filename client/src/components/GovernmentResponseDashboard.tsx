import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import { CheckCircle, AlertCircle, Clock, XCircle, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export default function GovernmentResponseDashboard() {
  const { i18n } = useTranslation();
  const [limit] = useState(20);
  const { data: responses, isLoading: responsesLoading } = trpc.governmentTracker.getPublicResponses.useQuery({ limit });
  const { data: stats, isLoading: statsLoading } = trpc.governmentTracker.getStats.useQuery();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'full_response':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'partial_response':
        return <AlertCircle className="text-yellow-600" size={20} />;
      case 'acknowledged':
        return <Clock className="text-blue-600" size={20} />;
      case 'no_response':
        return <Clock className="text-gray-400" size={20} />;
      case 'refused':
      case 'hostile':
        return <XCircle className="text-red-600" size={20} />;
      default:
        return <AlertCircle className="text-gray-400" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'full_response':
        return 'bg-green-50 border-green-200';
      case 'partial_response':
        return 'bg-yellow-50 border-yellow-200';
      case 'acknowledged':
        return 'bg-blue-50 border-blue-200';
      case 'no_response':
        return 'bg-gray-50 border-gray-200';
      case 'refused':
      case 'hostile':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, Record<string, string>> = {
      en: {
        'no_response': 'No Response',
        'acknowledged': 'Acknowledged',
        'partial_response': 'Partial Response',
        'full_response': 'Full Response',
        'refused': 'Refused',
        'hostile': 'Hostile',
      },
      fr: {
        'no_response': 'Pas de Réponse',
        'acknowledged': 'Reconnu',
        'partial_response': 'Réponse Partielle',
        'full_response': 'Réponse Complète',
        'refused': 'Refusé',
        'hostile': 'Hostile',
      },
    };
    return labels[i18n.language]?.[status] || status;
  };

  const getGovernmentLevelLabel = (level: string) => {
    const labels: Record<string, Record<string, string>> = {
      en: {
        'federal': 'Federal',
        'provincial': 'Provincial',
        'municipal': 'Municipal',
        'agency': 'Agency',
        'other': 'Other',
      },
      fr: {
        'federal': 'Fédéral',
        'provincial': 'Provincial',
        'municipal': 'Municipal',
        'agency': 'Agence',
        'other': 'Autre',
      },
    };
    return labels[i18n.language]?.[level] || level;
  };

  if (statsLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse space-y-3">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-6 bg-gray-100 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <BarChart3 className="text-blue-600" size={32} />
          {i18n.language === 'fr' ? 'Suivi des Réponses Gouvernementales' : 'Government Response Tracker'}
        </h2>
        <p className="text-gray-600">
          {i18n.language === 'fr'
            ? 'Transparence totale : Qui a répondu, quand, et comment.'
            : 'Complete transparency: Who responded, when, and how.'}
        </p>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">
              {i18n.language === 'fr' ? 'Total Contacté' : 'Total Contacted'}
            </p>
            <p className="text-3xl font-bold text-blue-900">{stats.total}</p>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">
              {i18n.language === 'fr' ? 'Pas de Réponse' : 'No Response'}
            </p>
            <p className="text-3xl font-bold text-gray-900">{stats.noResponse}</p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">
              {i18n.language === 'fr' ? 'Réponses' : 'Responded'}
            </p>
            <p className="text-3xl font-bold text-green-900">
              {stats.acknowledged + stats.partialResponse + stats.fullResponse}
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">
              {i18n.language === 'fr' ? 'Hostile' : 'Hostile'}
            </p>
            <p className="text-3xl font-bold text-red-900">{stats.hostile}</p>
          </div>
        </div>
      )}

      {/* Average Response Time */}
      {stats && stats.avgDaysToRespond > 0 && (
        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">
            {i18n.language === 'fr' ? 'Temps Moyen de Réponse' : 'Average Response Time'}
          </p>
          <p className="text-2xl font-bold text-purple-900">
            {stats.avgDaysToRespond} {i18n.language === 'fr' ? 'jours' : 'days'}
          </p>
        </div>
      )}

      {/* Responses List */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {i18n.language === 'fr' ? 'Détails des Réponses' : 'Response Details'}
        </h3>

        {responsesLoading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-100 rounded-lg h-24"></div>
            ))}
          </div>
        ) : responses && responses.length > 0 ? (
          <div className="space-y-3">
            {responses.map((response) => (
              <div
                key={response.id}
                className={`border-2 rounded-lg p-4 ${getStatusColor(response.responseStatus)}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(response.responseStatus)}
                      <h4 className="font-bold text-gray-900">{response.officialName}</h4>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {response.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mb-2">
                      <div>
                        <p className="text-xs text-gray-600">
                          {i18n.language === 'fr' ? 'Niveau' : 'Level'}
                        </p>
                        <p className="font-semibold text-gray-900">
                          {getGovernmentLevelLabel(response.governmentLevel)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-600">
                          {i18n.language === 'fr' ? 'Département' : 'Department'}
                        </p>
                        <p className="font-semibold text-gray-900">
                          {response.department || 'N/A'}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-600">
                          {i18n.language === 'fr' ? 'Contacté' : 'Contacted'}
                        </p>
                        <p className="font-semibold text-gray-900">
                          {new Date(response.dateContacted).toLocaleDateString(
                            i18n.language === 'fr' ? 'fr-CA' : 'en-CA'
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-600">
                          {i18n.language === 'fr' ? 'Statut' : 'Status'}
                        </p>
                        <p className="font-semibold text-gray-900">
                          {getStatusLabel(response.responseStatus)}
                        </p>
                      </div>
                    </div>

                    <div className="mb-2">
                      <p className="text-xs text-gray-600 mb-1">
                        {i18n.language === 'fr' ? 'Sujet de Contact' : 'Contact Subject'}
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {response.contactSubject}
                      </p>
                    </div>

                    {response.responseNotes && (
                      <div className="bg-white bg-opacity-50 rounded p-2 mt-2">
                        <p className="text-xs text-gray-600 mb-1">
                          {i18n.language === 'fr' ? 'Notes de Réponse' : 'Response Notes'}
                        </p>
                        <p className="text-sm text-gray-800">{response.responseNotes}</p>
                      </div>
                    )}

                    {response.daysToRespond && (
                      <p className="text-xs text-gray-600 mt-2">
                        {i18n.language === 'fr'
                          ? `Réponse en ${response.daysToRespond} jours`
                          : `Responded in ${response.daysToRespond} days`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 text-center">
            <p className="text-gray-600">
              {i18n.language === 'fr'
                ? 'Aucune réponse publique disponible pour le moment.'
                : 'No public responses available yet.'}
            </p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          {i18n.language === 'fr'
            ? 'Ce tableau de bord affiche uniquement les réponses que nous avons marquées comme publiques. Toutes les informations sont vérifiées et documentées.'
            : 'This dashboard displays only responses marked as public. All information is verified and documented.'}
        </p>
      </div>
    </div>
  );
}
