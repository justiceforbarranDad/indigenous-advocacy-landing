import { db } from './server/db.ts';
import { donationImpactTable, governmentResponseTable } from './drizzle/schema.ts';

const seedTrackerData = async () => {
  try {
    console.log('🌱 Seeding tracker data...');

    // Sample donation records
    const sampleDonations = [
      {
        donorName: 'Anonymous Supporter',
        donorEmail: 'supporter1@example.com',
        amountCAD: 250,
        amountUSD: 185,
        donationDate: new Date('2026-03-15'),
        method: 'e-transfer',
        isPublic: true,
        notes: 'Supporting legal defense efforts',
      },
      {
        donorName: 'Justice Alliance',
        donorEmail: 'contact@justicealliance.org',
        amountCAD: 1000,
        amountUSD: 740,
        donationDate: new Date('2026-03-18'),
        method: 'bank-transfer',
        isPublic: true,
        notes: 'Organizational support for systemic change',
      },
      {
        donorName: 'Community Member',
        donorEmail: 'community@example.com',
        amountCAD: 50,
        amountUSD: 37,
        donationDate: new Date('2026-03-20'),
        method: 'gofundme',
        isPublic: false,
        notes: 'Monthly recurring donation',
      },
      {
        donorName: 'Legal Fund Contributors',
        donorEmail: 'legal@example.com',
        amountCAD: 500,
        amountUSD: 370,
        donationDate: new Date('2026-03-22'),
        method: 'stripe',
        isPublic: true,
        notes: 'Dedicated to legal representation',
      },
      {
        donorName: 'Indigenous Rights Group',
        donorEmail: 'rights@indigenous.org',
        amountCAD: 750,
        amountUSD: 555,
        donationDate: new Date('2026-03-25'),
        method: 'bank-transfer',
        isPublic: true,
        notes: 'Supporting Indigenous justice advocacy',
      },
    ];

    // Sample government response records
    const sampleResponses = [
      {
        officialName: 'Céline Haytayan',
        position: 'MNA (Member of National Assembly)',
        jurisdiction: 'Quebec - Laval-des-Rapides',
        contactEmail: 'celine.haytayan@assnat.qc.ca',
        responseStatus: 'hostile',
        responseDate: new Date('2026-01-19'),
        daysSinceContact: 31,
        responseNotes: 'Sent cease-and-desist warning instead of assistance',
        isPublic: true,
        lastUpdated: new Date('2026-03-20'),
      },
      {
        officialName: 'François Legault',
        position: 'Premier of Quebec',
        jurisdiction: 'Quebec - Provincial',
        contactEmail: 'premier@quebec.ca',
        responseStatus: 'no-response',
        responseDate: null,
        daysSinceContact: 365,
        responseNotes: 'Multiple requests for intervention - no response received',
        isPublic: true,
        lastUpdated: new Date('2026-03-20'),
      },
      {
        officialName: 'Annie Koutrakis',
        position: 'Member of Parliament',
        jurisdiction: 'Federal - Vimy',
        contactEmail: 'annie.koutrakis@parl.gc.ca',
        responseStatus: 'no-response',
        responseDate: null,
        daysSinceContact: 180,
        responseNotes: 'Escalated to federal level - no response',
        isPublic: true,
        lastUpdated: new Date('2026-03-20'),
      },
      {
        officialName: 'Sean Fraser',
        position: 'Member of Parliament',
        jurisdiction: 'Federal - Central Nova',
        contactEmail: 'sean.fraser@parl.gc.ca',
        responseStatus: 'no-response',
        responseDate: null,
        daysSinceContact: 150,
        responseNotes: 'Contacted regarding systemic failures - awaiting response',
        isPublic: true,
        lastUpdated: new Date('2026-03-20'),
      },
      {
        officialName: 'Bernard Drainville',
        position: 'Minister of Immigration, Francization and Integration',
        jurisdiction: 'Quebec - Provincial',
        contactEmail: 'bernard.drainville@assnat.qc.ca',
        responseStatus: 'no-response',
        responseDate: null,
        daysSinceContact: 200,
        responseNotes: 'Request for intervention on DPJ accountability',
        isPublic: true,
        lastUpdated: new Date('2026-03-20'),
      },
      {
        officialName: 'CDPDJ (Commission des droits de la personne)',
        position: 'Human Rights Commission',
        jurisdiction: 'Quebec - Provincial',
        contactEmail: 'info@cdpdj.qc.ca',
        responseStatus: 'refused',
        responseDate: new Date('2026-02-15'),
        daysSinceContact: 45,
        responseNotes: 'Refused investigation request twice - cited limitations',
        isPublic: true,
        lastUpdated: new Date('2026-03-20'),
      },
    ];

    // Insert donation records
    console.log('📊 Adding donation records...');
    for (const donation of sampleDonations) {
      await db.insert(donationImpactTable).values({
        ...donation,
        donationDate: Math.floor(donation.donationDate.getTime() / 1000),
      });
    }
    console.log(`✅ Added ${sampleDonations.length} donation records`);

    // Insert government response records
    console.log('🏛️ Adding government response records...');
    for (const response of sampleResponses) {
      await db.insert(governmentResponseTable).values({
        ...response,
        responseDate: response.responseDate ? Math.floor(response.responseDate.getTime() / 1000) : null,
        lastUpdated: Math.floor(response.lastUpdated.getTime() / 1000),
      });
    }
    console.log(`✅ Added ${sampleResponses.length} government response records`);

    console.log('🌱 Seed data successfully populated!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedTrackerData();
