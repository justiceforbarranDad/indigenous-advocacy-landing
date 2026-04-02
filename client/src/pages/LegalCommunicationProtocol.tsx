import { useTranslation } from 'react-i18next';
import { AlertCircle, Mail, Globe, Shield, FileText } from 'lucide-react';

export default function LegalCommunicationProtocol() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl font-bold text-red-600">
              {t('legalCommunicationProtocol.title', 'Legal Communication Protocol')}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            {t('legalCommunicationProtocol.subtitle', 'Established Communication Standards for Safety and Accountability')}
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-red-900 mb-2">
                {t('legalCommunicationProtocol.alert', 'Important Notice')}
              </h2>
              <p className="text-red-800">
                {t('legalCommunicationProtocol.alertText', 'This communication protocol has been established and implemented for personal safety, mental health protection, and legal accountability purposes. All government officials, agencies, and representatives are hereby notified of these communication standards.')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1: Health & Safety */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {t('legalCommunicationProtocol.healthSafety', 'Health & Safety Foundation')}
                </h2>
                <div className="space-y-3 text-foreground">
                  <p>
                    {t('legalCommunicationProtocol.healthText1', 'Due to documented mental health conditions (PTSD and BPD) resulting from prolonged government abuse of power and systemic failures, in-person communication is not a safe option for this individual or their family.')}
                  </p>
                  <p>
                    {t('legalCommunicationProtocol.healthText2', 'These conditions have been exacerbated by:')}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('legalCommunicationProtocol.healthItem1', 'Inadequate child protection services (DPJ)')}</li>
                    <li>{t('legalCommunicationProtocol.healthItem2', 'Political intimidation and cease-and-desist threats')}</li>
                    <li>{t('legalCommunicationProtocol.healthItem3', 'Systemic government silence and inaction')}</li>
                    <li>{t('legalCommunicationProtocol.healthItem4', 'Repeated institutional failures across all government levels')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Approved Communication Methods */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-4">
                  {t('legalCommunicationProtocol.approvedMethods', 'Approved Communication Methods')}
                </h2>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="bg-background rounded p-4 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-green-600" />
                      {t('legalCommunicationProtocol.emailMethod', 'Email Communication')}
                    </h3>
                    <p className="text-foreground mb-2">
                      {t('legalCommunicationProtocol.emailDesc', 'Email is the PRIMARY and PREFERRED method of communication with all government officials, agencies, and representatives.')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground ml-2">
                      <li>{t('legalCommunicationProtocol.emailReq1', 'All correspondence MUST be in writing')}</li>
                      <li>{t('legalCommunicationProtocol.emailReq2', 'All names of officials/staff MUST be included')}</li>
                      <li>{t('legalCommunicationProtocol.emailReq3', 'All file numbers MUST be referenced')}</li>
                      <li>{t('legalCommunicationProtocol.emailReq4', 'All dates MUST be documented')}</li>
                      <li>{t('legalCommunicationProtocol.emailReq5', 'Creates permanent, recorded documentation')}</li>
                    </ul>
                  </div>

                  {/* Social Media */}
                  <div className="bg-background rounded p-4 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      {t('legalCommunicationProtocol.socialMethod', 'Social Media Communication')}
                    </h3>
                    <p className="text-foreground mb-2">
                      {t('legalCommunicationProtocol.socialDesc', 'Social media platforms are APPROVED for public accountability and transparency purposes.')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground ml-2">
                      <li>{t('legalCommunicationProtocol.socialReq1', 'Public posts create transparent record')}</li>
                      <li>{t('legalCommunicationProtocol.socialReq2', 'Demonstrates pattern of government silence')}</li>
                      <li>{t('legalCommunicationProtocol.socialReq3', 'Protects against intimidation and threats')}</li>
                      <li>{t('legalCommunicationProtocol.socialReq4', 'Enables public awareness and support')}</li>
                      <li>{t('legalCommunicationProtocol.socialReq5', 'Protected speech under Charter s.2(b)')}</li>
                    </ul>
                  </div>

                  {/* Phone Calls */}
                  <div className="bg-background rounded p-4 border border-border">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-orange-600" />
                      {t('legalCommunicationProtocol.phoneMethod', 'Phone Calls (Recorded)')}
                    </h3>
                    <p className="text-foreground mb-2">
                      {t('legalCommunicationProtocol.phoneDesc', 'Phone calls are ONLY acceptable if recorded and documented in writing afterward.')}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground ml-2">
                      <li>{t('legalCommunicationProtocol.phoneReq1', 'All calls must be recorded (where legal)')}</li>
                      <li>{t('legalCommunicationProtocol.phoneReq2', 'Recording request must be stated at call start')}</li>
                      <li>{t('legalCommunicationProtocol.phoneReq3', 'Follow-up email MUST confirm call details')}</li>
                      <li>{t('legalCommunicationProtocol.phoneReq4', 'Names, dates, and topics must be documented')}</li>
                      <li>{t('legalCommunicationProtocol.phoneReq5', 'Recording provided as evidence if needed')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: NOT Approved */}
          <section className="bg-red-50 rounded-lg p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 text-red-900">
              {t('legalCommunicationProtocol.notApproved', 'NOT Approved: In-Person Communication')}
            </h2>
            <div className="space-y-3 text-red-900">
              <p className="font-semibold">
                {t('legalCommunicationProtocol.inPersonNotice', 'In-person meetings are NOT an approved communication method for the following reasons:')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>{t('legalCommunicationProtocol.inPersonReason1', 'Mental health conditions make in-person interaction unsafe')}</li>
                <li>{t('legalCommunicationProtocol.inPersonReason2', 'Direct communication style may be misinterpreted')}</li>
                <li>{t('legalCommunicationProtocol.inPersonReason3', 'No permanent record of conversation')}</li>
                <li>{t('legalCommunicationProtocol.inPersonReason4', 'Vulnerability to false accusations or misrepresentation')}</li>
                <li>{t('legalCommunicationProtocol.inPersonReason5', 'Cannot safely defend family interests')}</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Requirements for All Officials */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">
              {t('legalCommunicationProtocol.requirements', 'Requirements for All Government Officials & Agencies')}
            </h2>
            <div className="bg-background rounded p-4 border border-border space-y-3">
              <p className="font-semibold">
                {t('legalCommunicationProtocol.reqNotice', 'All correspondence from government officials MUST include:')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-2">
                <li>{t('legalCommunicationProtocol.req1', 'Full name and title of official/staff member')}</li>
                <li>{t('legalCommunicationProtocol.req2', 'Department and agency name')}</li>
                <li>{t('legalCommunicationProtocol.req3', 'All relevant file numbers')}</li>
                <li>{t('legalCommunicationProtocol.req4', 'Date of correspondence')}</li>
                <li>{t('legalCommunicationProtocol.req5', 'Clear reference to previous communications')}</li>
                <li>{t('legalCommunicationProtocol.req6', 'Specific response to all questions asked')}</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Legal Basis */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">
              {t('legalCommunicationProtocol.legalBasis', 'Legal Basis & Charter Rights')}
            </h2>
            <div className="space-y-3 text-foreground">
              <p>
                {t('legalCommunicationProtocol.legalText1', 'This communication protocol is protected under:')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>{t('legalCommunicationProtocol.legal1', 'Canadian Charter of Rights and Freedoms, s.2(b) - Freedom of Expression')}</li>
                <li>{t('legalCommunicationProtocol.legal2', 'Quebec Charter of Human Rights and Freedoms, s.3 - Right to Life')}</li>
                <li>{t('legalCommunicationProtocol.legal3', 'Mental Health Act protections for individuals with PTSD/BPD')}</li>
                <li>{t('legalCommunicationProtocol.legal4', 'Access to Information Act - Right to documented government communication')}</li>
                <li>{t('legalCommunicationProtocol.legal5', 'Duty to accommodate - Accessibility for persons with disabilities')}</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Effective Date */}
          <section className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              {t('legalCommunicationProtocol.effectiveDate', 'Effective Date & Implementation')}
            </h2>
            <div className="text-blue-900 space-y-3">
              <p>
                {t('legalCommunicationProtocol.effectiveText', 'This communication protocol has been established and implemented for an extended period and is now formally documented on this website for official notice to all government officials, agencies, and representatives.')}
              </p>
              <p className="font-semibold">
                {t('legalCommunicationProtocol.effectiveNotice', 'Effective immediately upon publication. All future correspondence must comply with these standards.')}
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="bg-muted rounded-lg p-6 text-center text-sm text-muted-foreground">
            <p>
              {t('legalCommunicationProtocol.footer', 'This protocol is published in both English and French for official notice to all levels of government (Federal, Provincial, Municipal).')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
