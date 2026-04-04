import { useState } from 'react';
import { Download, Copy, Mail } from 'lucide-react';

export default function UNComplaintTemplate() {
  const [copied, setCopied] = useState(false);

  const complaintText = `COMPLAINT TO THE UNITED NATIONS HUMAN RIGHTS COMMITTEE

TO: United Nations Human Rights Committee
     Office of the High Commissioner for Human Rights
     Palais Wilson
     52 rue des Pâquis
     1201 Geneva, Switzerland

DATE: [Current Date]

RE: Complaint of Systemic Violations of International Human Rights Law Against Canada

COMPLAINANT: [Your Name]
On behalf of Indigenous family affected by systemic failures in child protection

RESPONDENT STATE: Canada (Federal and Provincial - Quebec)

---

SUMMARY OF COMPLAINT

This complaint alleges systematic violations of the International Covenant on Civil and Political Rights (ICCPR) and the Convention on the Rights of the Child (CRC) by Canada, specifically:

1. VIOLATION OF ARTICLE 6 (Right to Life): Indigenous teenager stabbed three times (February 14, 2021) at mother's residence. Child protection system failed to prevent attack despite multiple prior reports (signalements).

2. VIOLATION OF ARTICLE 7 (Prohibition of Torture/Cruel Treatment): 14+ months without mental health support following traumatic stabbing incident. Systemic denial of care constitutes cruel and inhuman treatment.

3. VIOLATION OF ARTICLE 17 (Privacy and Family Protection): Government interference with family through DPJ involvement targeting father while ignoring mother's involvement. Arbitrary and unlawful interference with family life.

4. VIOLATION OF ARTICLE 24 (Rights of the Child): Child denied adequate protection, mental health services, and education following trauma.

5. VIOLATION OF ARTICLE 26 (Non-Discrimination): Indigenous family systematically denied services available to non-Indigenous families. Systemic racism in child protection system.

6. VIOLATION OF ARTICLE 2 (Effective Remedy): No effective domestic remedy available. Courts cannot enforce orders. Legal Aid system fails to provide assistance. Immunity laws (Article 309 Quebec Civil Code) protect government workers from accountability.

---

FACTUAL BACKGROUND

A. THE STABBING INCIDENT (February 14, 2021)

- Indigenous teenager stabbed three times at mother's residence (Paisley location)
- Attack caused severe physical and psychological trauma
- DPJ involvement initiated AFTER incident (reactive, not preventive)
- Multiple prior reports (signalements) to child protection ignored

B. SYSTEMIC FAILURES IN CHILD PROTECTION

- 7+ years of signalements to Batsha (Montreal child protection) - NONE taken seriously
- DPJ involvement with father (you) but NOT with mother where attack occurred
- This split responsibility created protection gaps
- Children unable to access mental health services due to DPJ involvement with father

C. DENIAL OF MENTAL HEALTH SUPPORT

- 14+ months without adequate mental health support following stabbing
- Requests to DPJ workers (Tania Lechasseur, François Duffy) denied
- Psychologist recommendations ignored
- Jordan's Principle (no-delay services for First Nations children) not applied

D. POLITICAL GHOSTING AND INSTITUTIONAL SILENCE

- Contacted 500+ elected officials (federal, provincial, municipal)
- Only 1 substantive response
- MNA (Céline Haytayan) sent cease-and-desist threat (Nov 2023) for asking questions
- Provincial ministers ignored pleas
- Federal MPs ignored escalation
- CDPDJ (Quebec Human Rights Commission) refused investigation 2x

E. LEGAL BARRIERS TO JUSTICE

- "A Father's Cry" letter written to court - NEVER PRESENTED
- Evidence disappearing from court proceedings
- Court orders cannot be enforced (pension case blocked since October 2022)
- Legal Aid system fails to assist
- Article 309 Quebec Civil Code provides immunity to DPJ workers

F. MEDIA SUPPRESSION

- APTN (Aboriginal Peoples Television Network) published story then ghosted
- No explanation for removal
- Media complicity in institutional silence

---

LEGAL ARGUMENTS

1. CANADA'S INTERNATIONAL OBLIGATIONS

Canada is party to:
- International Covenant on Civil and Political Rights (ICCPR)
- Convention on the Rights of the Child (CRC)
- United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP)

These instruments require Canada to:
- Protect children from violence and trauma
- Ensure effective remedies for violations
- Eliminate discrimination against Indigenous peoples
- Respect family integrity

2. SYSTEMIC NATURE OF VIOLATIONS

This is not an isolated incident but demonstrates:
- Systemic failure of child protection system
- Institutional racism against Indigenous families
- Immunity laws that prevent accountability
- Barriers to effective remedy

3. FAILURE TO INVESTIGATE AND REMEDY

Canada has failed to:
- Investigate systemic failures in child protection
- Provide effective remedy to affected family
- Hold government workers accountable
- Apply Jordan's Principle
- Ensure access to justice

---

REMEDIES SOUGHT

1. Investigation by UN Human Rights Committee into systemic failures
2. Canada to implement reforms in child protection system
3. Canada to eliminate immunity laws protecting government workers
4. Canada to apply Jordan's Principle effectively
5. Compensation for family for violations suffered
6. Public acknowledgment of systemic racism in child protection
7. Training for government workers on Indigenous rights
8. Establishment of independent oversight of DPJ decisions

---

SUPPORTING DOCUMENTATION

- Medical records from stabbing incident
- DPJ correspondence showing denial of services
- Signalement records (prior reports to child protection)
- Court orders and evidence of non-enforcement
- Political correspondence showing institutional silence
- APTN news report (before removal)
- CRARR (Quebec Human Rights Commission) correspondence
- Legal correspondence from lawyers

---

DECLARATION

I declare under penalty of perjury that the foregoing is true and correct to the best of my knowledge and belief.

Signed: _____________________
Date: _____________________

---

SUBMISSION INSTRUCTIONS:

1. Submit to: petitions@ohchr.org
2. Subject: "Complaint - Systemic Violations of ICCPR and CRC Against Canada"
3. Include all supporting documentation
4. Keep copies for your records
5. Request acknowledgment of receipt

---

REFERENCES:

- ICCPR: https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights
- CRC: https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child
- UNDRIP: https://www.un.org/development/desa/indigenouspeoples/declaration-on-the-rights-of-indigenous-peoples.html
- Jordan's Principle: https://www.sac-isc.gc.ca/eng/1629906214297/1629906235146
- UN Human Rights Committee: https://www.ohchr.org/en/treaty-bodies/ccpr/human-rights-committee`;

  const handleCopy = () => {
    navigator.clipboard.writeText(complaintText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([complaintText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'UN_Human_Rights_Complaint_Template.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">UN Human Rights Complaint Template</h1>
          <p className="text-lg text-gray-700">
            Pre-filled template for submitting complaints to the United Nations Human Rights Committee regarding systemic violations.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <Copy size={20} />
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            <Download size={20} />
            Download as Text
          </button>
          <a
            href="mailto:petitions@ohchr.org"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            <Mail size={20} />
            Email to UN
          </a>
        </div>

        {/* Template Content */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8 whitespace-pre-wrap font-mono text-sm overflow-auto max-h-96">
          {complaintText}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">How to Use This Template</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Copy or download the template above</li>
            <li>Fill in your personal information where indicated [Your Name], [Current Date]</li>
            <li>Customize details specific to your case</li>
            <li>Gather supporting documentation (medical records, correspondence, etc.)</li>
            <li>Submit to: <strong>petitions@ohchr.org</strong></li>
            <li>Include subject line: "Complaint - Systemic Violations of ICCPR and CRC Against Canada"</li>
            <li>Keep copies of everything for your records</li>
            <li>Request acknowledgment of receipt</li>
          </ol>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>This is a template - customize it to your specific situation</li>
            <li>Include all relevant documentation and evidence</li>
            <li>UN review process can take 6-12 months</li>
            <li>Decisions are not legally binding but carry significant moral weight</li>
            <li>Consider working with human rights organizations (like CRARR) for support</li>
            <li>Keep detailed records of all submissions and correspondence</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
