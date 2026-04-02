import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Filter, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function OrangeShirtAccountability() {
  const { t } = useTranslation();
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Fetch all entries
  const { data: entries = [], isLoading: loadingEntries } = trpc.accountability.orangeShirt.getAll.useQuery({
    limit: 500,
    offset: 0,
  });

  // Fetch statistics
  const { data: stats = { total: 0, noResponse: 0, responded: 0, performative: 0 } } = trpc.accountability.orangeShirt.getStats.useQuery();

  // Filter entries
  const filteredEntries = entries.filter((entry: any) => {
    const typeMatch = filterType === 'all' || entry.organizationType === filterType;
    const statusMatch = filterStatus === 'all' || entry.responseStatus === filterStatus;
    return typeMatch && statusMatch;
  });

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['Organization', 'Type', 'Category', 'Email', 'Phone', 'Date Contacted', 'Contact Method', 'Response Status', 'Response Date', 'Commitment', 'Performative', 'Notes'];
    const rows = filteredEntries.map((entry: any) => [
      entry.organizationName,
      entry.organizationType,
      entry.category || '',
      entry.email || '',
      entry.phone || '',
      entry.dateFirstContacted ? new Date(entry.dateFirstContacted).toLocaleDateString() : '',
      entry.contactMethod || '',
      entry.responseStatus,
      entry.responseDate ? new Date(entry.responseDate).toLocaleDateString() : '',
      entry.commitmentDetails || '',
      entry.isPerformative,
      entry.notes || '',
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orange-shirt-accountability-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'no_response':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'acknowledged':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'committed':
        return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'acting':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'performative':
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case 'hostile':
        return <XCircle className="w-5 h-5 text-red-700" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      no_response: 'No Response',
      acknowledged: 'Acknowledged',
      committed: 'Committed',
      acting: 'Acting',
      performative: 'Performative',
      hostile: 'Hostile',
    };
    return labels[status] || status;
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('orangeShirtAccountability.title', 'Orange Shirt Day Accountability Tracker')}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {t('orangeShirtAccountability.subtitle', 'Tracking corporate sponsors and organizations claiming to support Indigenous rights while profiting from Orange Shirt Day')}
          </p>
          <p className="text-lg text-red-700 font-semibold">
            {t('orangeShirtAccountability.warning', 'Performative activism vs. real action: Who is actually supporting Indigenous children?')}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="text-3xl font-bold text-blue-900">{stats.total}</div>
            <div className="text-sm text-blue-700 mt-2">{t('orangeShirtAccountability.totalOrganizations', 'Total Organizations')}</div>
          </Card>
          <Card className="p-6 bg-red-50 border-red-200">
            <div className="text-3xl font-bold text-red-900">{stats.noResponse}</div>
            <div className="text-sm text-red-700 mt-2">{t('orangeShirtAccountability.noResponse', 'No Response')}</div>
          </Card>
          <Card className="p-6 bg-yellow-50 border-yellow-200">
            <div className="text-3xl font-bold text-yellow-900">{stats.performative}</div>
            <div className="text-sm text-yellow-700 mt-2">{t('orangeShirtAccountability.performative', 'Performative Only')}</div>
          </Card>
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="text-3xl font-bold text-green-900">{stats.responded}</div>
            <div className="text-sm text-green-700 mt-2">{t('orangeShirtAccountability.responded', 'Responded')}</div>
          </Card>
        </div>

        {/* Filters and Export */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex gap-4 flex-wrap">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('orangeShirtAccountability.filterType', 'Organization Type')}</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="corporate_sponsor">Corporate Sponsors</option>
                <option value="nhl_team">NHL Teams</option>
                <option value="sports_team">Sports Teams</option>
                <option value="orange_shirt_society">Orange Shirt Society</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('orangeShirtAccountability.filterStatus', 'Response Status')}</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Statuses</option>
                <option value="no_response">No Response</option>
                <option value="acknowledged">Acknowledged</option>
                <option value="committed">Committed</option>
                <option value="acting">Acting</option>
                <option value="performative">Performative</option>
                <option value="hostile">Hostile</option>
              </select>
            </div>
          </div>
          <Button
            onClick={handleExportCSV}
            className="mt-6 md:mt-0 ml-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t('orangeShirtAccountability.exportCSV', 'Export to CSV')}
          </Button>
        </div>

        {/* Entries Table */}
        <div className="overflow-x-auto">
          {loadingEntries ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('orangeShirtAccountability.loading', 'Loading accountability data...')}</p>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('orangeShirtAccountability.noEntries', 'No entries found matching your filters.')}</p>
            </div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{t('orangeShirtAccountability.organization', 'Organization')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{t('orangeShirtAccountability.type', 'Type')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{t('orangeShirtAccountability.contact', 'Contact')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{t('orangeShirtAccountability.dateContacted', 'Date Contacted')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{t('orangeShirtAccountability.status', 'Status')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">{t('orangeShirtAccountability.commitment', 'Commitment')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry: any, idx: number) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{entry.organizationName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{entry.organizationType.replace(/_/g, ' ')}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {entry.email && <div><a href={`mailto:${entry.email}`} className="text-blue-600 hover:underline">{entry.email}</a></div>}
                      {entry.phone && <div>{entry.phone}</div>}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {entry.dateFirstContacted ? new Date(entry.dateFirstContacted).toLocaleDateString() : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(entry.responseStatus)}
                        <span className="font-medium">{getStatusLabel(entry.responseStatus)}</span>
                        {entry.isPerformative === 'yes' && (
                          <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-semibold">
                            {t('orangeShirtAccountability.performativeTag', 'Performative')}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {entry.commitmentDetails ? (
                        <div className="max-w-xs truncate" title={entry.commitmentDetails}>
                          {entry.commitmentDetails}
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            {t('orangeShirtAccountability.footerTitle', 'About This Tracker')}
          </h3>
          <p className="text-blue-800">
            {t('orangeShirtAccountability.footerText', 'This tracker documents organizations that claim to support Indigenous rights and Orange Shirt Day while their actions (or inactions) tell a different story. We distinguish between genuine commitment, performative activism, and outright hostility. Real justice requires more than marketing campaigns—it requires systemic change and accountability.')}
          </p>
        </div>
      </div>
    </div>
  );
}
