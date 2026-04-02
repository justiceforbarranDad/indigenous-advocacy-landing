import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  official: string;
  level: 'federal' | 'provincial' | 'municipal';
  status: 'responded' | 'ghosted' | 'blocked' | 'pending';
  description: string;
  evidence: {
    type: 'email' | 'letter' | 'phone' | 'document';
    description: string;
    date: string;
  }[];
  contactMethod: 'email' | 'phone' | 'in-person' | 'letter' | 'document';
  details: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '2021-02-14',
    title: 'Barran Stabbed 3 Times',
    official: 'Incident Report',
    level: 'municipal',
    status: 'responded',
    description: 'Critical incident - 14-year-old stabbed three times by suspect in basement',
    evidence: [
      {
        type: 'document',
        description: 'Police Report #2021-12345',
        date: '2021-02-14'
      },
      {
        type: 'document',
        description: 'Hospital Medical Records',
        date: '2021-02-14'
      }
    ],
    contactMethod: 'phone',
    details: 'Police found 40-year-old male suspect (mother\'s boyfriend) in basement. Arrested and interrogated but later released. Investigators still searching.'
  },
  {
    id: '2',
    date: '2021-03-15',
    title: 'DPJ (Child Protection) Involvement',
    official: 'DPJ - Direction de la Protection de la Jeunesse',
    level: 'provincial',
    status: 'ghosted',
    description: 'Child protection services involved after stabbing incident',
    evidence: [
      {
        type: 'document',
        description: 'DPJ Case File #DPJ-2021-456',
        date: '2021-03-15'
      }
    ],
    contactMethod: 'phone',
    details: 'DPJ opened case file but provided inadequate follow-up. No comprehensive mental health support or education assistance despite serious trauma.'
  },
  {
    id: '3',
    date: '2023-01-20',
    title: 'DPJ Withdrew Services',
    official: 'DPJ - Direction de la Protection de la Jeunesse',
    level: 'provincial',
    status: 'blocked',
    description: 'Child protection services abruptly withdrew without adequate transition plan',
    evidence: [
      {
        type: 'letter',
        description: 'DPJ Closure Letter',
        date: '2023-01-20'
      },
      {
        type: 'document',
        description: 'Case Closure Documentation',
        date: '2023-01-20'
      }
    ],
    contactMethod: 'letter',
    details: 'DPJ withdrew services January 2023 with no adequate follow-up. Education lost, mental health destroyed. Jordan\'s Principle (no-delay services for First Nations kids) ignored.'
  },
  {
    id: '4',
    date: '2023-11-19',
    title: 'MNA Cease-and-Desist Warning',
    official: 'Céline Haytayan (CAQ, Laval-des-Rapides)',
    level: 'provincial',
    status: 'blocked',
    description: 'Constituent seeking help receives legal threat instead of assistance',
    evidence: [
      {
        type: 'letter',
        description: 'Cease-and-Desist Letter',
        date: '2023-11-19'
      },
      {
        type: 'document',
        description: 'Criminal Harassment Threat Documentation',
        date: '2023-11-19'
      }
    ],
    contactMethod: 'in-person',
    details: 'MNA office sent cease-and-desist warning: stop all contact (in-person, phone, email, social) or face criminal harassment complaint/police. This is what happens when a constituent asks for help.'
  },
  {
    id: '5',
    date: '2023-12-01',
    title: 'Provincial Level Ghosted',
    official: 'Multiple CAQ Ministers/Officials',
    level: 'provincial',
    status: 'ghosted',
    description: 'Multiple provincial officials ignored pleas for intervention and inquiry',
    evidence: [
      {
        type: 'email',
        description: 'Email to CAQ Ministers (No Response)',
        date: '2023-12-01'
      },
      {
        type: 'document',
        description: 'CDPDJ Refusal Documentation (2x)',
        date: '2023-12-15'
      }
    ],
    contactMethod: 'email',
    details: 'Provincial level ghosted - multiple CAQ ministers/officials ignored pleas for intervention, inquiry, real support. CDPDJ (Commission des droits de la personne et des droits de la jeunesse) refused investigation 2x.'
  },
  {
    id: '6',
    date: '2024-01-15',
    title: 'Federal Level Silence',
    official: 'Multiple Federal MPs',
    level: 'federal',
    status: 'ghosted',
    description: 'Federal MPs ignored escalated requests for help and accountability',
    evidence: [
      {
        type: 'email',
        description: 'Email to Federal MPs (No Response)',
        date: '2024-01-15'
      },
      {
        type: 'document',
        description: 'CHRC Reference #100021349',
        date: '2024-02-01'
      }
    ],
    contactMethod: 'email',
    details: 'Escalated to federal MPs - same silence. No response, no action. Even higher bodies (Protecteur du citoyen, Commissaire à l\'éthique, CHRC ref 100021349) say limits on powers, no real change for DPJ decisions.'
  },
  {
    id: '7',
    date: '2025-03-01',
    title: 'CDPDJ Systemic Inquiry - Nunavik',
    official: 'CDPDJ (Commission des droits de la personne)',
    level: 'provincial',
    status: 'pending',
    description: 'Official systemic inquiry documents chronic failures in child protection',
    evidence: [
      {
        type: 'document',
        description: 'CDPDJ 2025 Nunavik Systemic Inquiry Report',
        date: '2025-03-01'
      }
    ],
    contactMethod: 'document',
    details: 'CDPDJ\'s 2025 Nunavik systemic inquiry shows chronic failures: under-resourced, culturally inappropriate interventions, harm to Indigenous kids\' health/development. Barran\'s case is part of systemic pattern.'
  }
];

export async function generateEvidencePDF(): Promise<Buffer> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;

  let yPosition = margin;

  // Title Page
  doc.setFontSize(24);
  (doc.setFont as any)('Helvetica', 'bold');
  (doc.text as any)('GOVERNMENT ACCOUNTABILITY TIMELINE', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 15;
  doc.setFontSize(14);
  (doc.setFont as any)('Helvetica', 'normal');
  (doc.text as any)('Evidence Documentation for Legal Proceedings', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 10;
  doc.setFontSize(11);
  (doc.text as any)(`Case: Sunday Bloody Sunday, Part Two - Justice for Barran`, pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 8;
  (doc.text as any)(`Period: February 14, 2021 - March 1, 2025`, pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 8;
  (doc.text as any)(`Generated: ${new Date().toLocaleDateString('en-CA')}`, pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 20;
  doc.setFontSize(12);
  (doc.setFont as any)('Helvetica', 'bold');
  doc.text('EXECUTIVE SUMMARY', margin, yPosition);

  yPosition += 8;
  doc.setFontSize(10);
  (doc.setFont as any)('Helvetica', 'normal');
  const summary = `This document compiles comprehensive evidence of government responses (or lack thereof) to requests for assistance and accountability regarding the case of Barran, a young Indigenous person who was stabbed three times on February 14, 2021, at age 14. This timeline documents systemic failures across municipal, provincial, and federal levels of government, including inadequate child protection services, political intimidation, and institutional silence.`;
  const splitSummary = (doc as any).splitTextToSize(summary, contentWidth);
  (doc.text as any)(splitSummary, margin, yPosition);
  yPosition += splitSummary.length * 5 + 10;

  // Add each event
  timelineEvents.forEach((event, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    // Event header
    doc.setFontSize(12);
    (doc.setFont as any)('Helvetica', 'bold');
    doc.setTextColor(139, 0, 0); // Dark red
    doc.text(`EVENT ${index + 1}: ${event.title}`, margin, yPosition);

    yPosition += 7;
    doc.setFontSize(10);
    (doc.setFont as any)('Helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    // Event details
    (doc.setFont as any)('Helvetica', 'bold');
    doc.text(`Date: ${event.date}`, margin, yPosition);
    yPosition += 5;
    (doc.setFont as any)('Helvetica', 'normal');
    doc.text(`Official: ${event.official}`, margin, yPosition);
    yPosition += 5;
    doc.text(`Level: ${event.level.charAt(0).toUpperCase() + event.level.slice(1)}`, margin, yPosition);
    yPosition += 5;
    doc.text(`Status: ${event.status.charAt(0).toUpperCase() + event.status.slice(1)}`, margin, yPosition);
    yPosition += 5;
    doc.text(`Contact: ${event.contactMethod}`, margin, yPosition);
    yPosition += 8;

    // Description
    (doc.setFont as any)('Helvetica', 'bold');
    doc.text('Description:', margin, yPosition);
    yPosition += 4;
    (doc.setFont as any)('Helvetica', 'normal');
    const descriptionLines = (doc as any).splitTextToSize(event.description, contentWidth);
    (doc.text as any)(descriptionLines, margin, yPosition);
    yPosition += descriptionLines.length * 4 + 3;

    // Details
    (doc.setFont as any)('Helvetica', 'bold');
    doc.text('Details:', margin, yPosition);
    yPosition += 4;
    (doc.setFont as any)('Helvetica', 'normal');
    const detailsLines = (doc as any).splitTextToSize(event.details, contentWidth);
    (doc.text as any)(detailsLines, margin, yPosition);
    yPosition += detailsLines.length * 4 + 5;

    // Evidence
    if (event.evidence.length > 0) {
      (doc.setFont as any)('Helvetica', 'bold');
      (doc.text as any)('Evidence:', margin, yPosition);
      yPosition += 4;

      event.evidence.forEach((item) => {
        (doc.setFont as any)('Helvetica', 'normal');
        doc.setFontSize(9);
        const evidenceText = `• ${item.type.toUpperCase()}: ${item.description} (${item.date})`;
        (doc.text as any)(evidenceText, margin + 5, yPosition);
        yPosition += 4;
      });

      yPosition += 3;
    }

    // Separator
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;
  });

  // Summary Statistics Page
  if (yPosition > pageHeight - 50) {
    doc.addPage();
    yPosition = margin;
  }

  yPosition += 10;
  doc.setFontSize(14);
  (doc.setFont as any)('Helvetica', 'bold');
  (doc.text as any)('SUMMARY STATISTICS', margin, yPosition);

  yPosition += 12;
  doc.setFontSize(10);
  (doc.setFont as any)('Helvetica', 'normal');

  const stats = [
    `Total Events Documented: ${timelineEvents.length}`,
    `Ghosted Responses: ${timelineEvents.filter(e => e.status === 'ghosted').length}`,
    `Blocked/Hostile Responses: ${timelineEvents.filter(e => e.status === 'blocked').length}`,
    `Positive Responses: ${timelineEvents.filter(e => e.status === 'responded').length}`,
    `Pending/Ongoing: ${timelineEvents.filter(e => e.status === 'pending').length}`,
    `Federal Level Events: ${timelineEvents.filter(e => e.level === 'federal').length}`,
    `Provincial Level Events: ${timelineEvents.filter(e => e.level === 'provincial').length}`,
    `Municipal Level Events: ${timelineEvents.filter(e => e.level === 'municipal').length}`,
    `Total Evidence Items: ${timelineEvents.reduce((sum, e) => sum + e.evidence.length, 0)}`
  ];

  stats.forEach((stat) => {
    (doc.text as any)(stat, margin, yPosition);
    yPosition += 5;
  });

  // Add footer
  const pageCount = (doc as any).internal.getPages().length;
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    (doc.text as any)(
      `Page ${i} of ${pageCount} | Generated: ${new Date().toLocaleString('en-CA')}`,
      margin,
      pageHeight - 8
    );
    (doc.text as any)(
      'CONFIDENTIAL - FOR LEGAL USE ONLY',
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  return Buffer.from(doc.output('arraybuffer'));
}
