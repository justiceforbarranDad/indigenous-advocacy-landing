import { useTranslation } from 'react-i18next';
import { FileText, DollarSign, Users, Shield } from 'lucide-react';

export default function Legal() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('legal.title')}
          </h1>
          <p className="text-lg text-red-100">
            {t('legal.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">        {/* DISCLAIMER SECTION */}
        <section className="mb-12 bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">⚠️ Important Disclaimer</h2>
          <div className="space-y-4 text-gray-800">
            <p className="font-semibold text-lg">
              {t('legal.disclaimerAccuracy')}
            </p>
            <p>
              {t('legal.disclaimerDocumentation')}
            </p>
            <p className="border-l-4 border-yellow-600 pl-4 italic">
              {t('legal.disclaimerLegalAdvice')}
            </p>
            <p>
              {t('legal.disclaimerPublicInfo')}
            </p>
          </div>
        </section>

        {/* Financial Transparency */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-red-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('legal.financialTransparency')}
            </h2>
          </div>
          <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded">
            <p className="text-gray-700 mb-4">
              {t('legal.financialText')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t('legal.allFundsUsed')}</li>
              <li>{t('legal.noPersonalIncome')}</li>
              <li>{t('legal.annualReporting')}</li>
              <li>{t('legal.independentAudit')}</li>
            </ul>
          </div>
        </section>

        {/* Donor Privacy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('legal.donorPrivacy')}
            </h2>
          </div>
          <div className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-700 mb-4">
              {t('legal.privacyText')}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t('legal.anonymousDonations')}</li>
              <li>{t('legal.noDataSharing')}</li>
              <li>{t('legal.securePayments')}</li>
              <li>{t('legal.optInRecognition')}</li>
            </ul>
          </div>
        </section>

        {/* Fund Usage */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-green-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('legal.fundUsage')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3">
                {t('legal.legalDefense')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('legal.legalDefenseDesc')}
              </p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">
                {t('legal.advocacy')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('legal.advocacyDesc')}
              </p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-3">
                {t('legal.systemicChange')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('legal.systemicChangeDesc')}
              </p>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-3">
                {t('legal.communitySupport')}
              </h3>
              <p className="text-sm text-gray-700">
                {t('legal.communitySupportDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* McGovern Arts Institute of Human Rights */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-red-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">
              McGovern Arts Institute of Human Rights
            </h2>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
            <p className="text-gray-700 mb-4">
              {t('legal.mcGovernText')}
            </p>
            <p className="text-sm text-gray-600 italic">
              {t('legal.mcGovernNote')}
            </p>
          </div>
        </section>

        {/* Contact for Questions */}
        <section className="bg-gray-100 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('legal.questions')}
          </h3>
          <p className="text-gray-700 mb-6">
            {t('legal.questionsText')}
          </p>
          <a
            href="mailto:justiceforbarran@gmail.com"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {t('legal.contactUs')}
          </a>
        </section>
      </div>
    </div>
  );
}
