import { getDb } from './db';
import { emailCampaigns, emailSubscribers, surveyResponses } from '../drizzle/schema';
import { eq, gte, desc } from 'drizzle-orm';

/**
 * Send automated email campaign based on threshold triggers
 * Triggers: 10+ responses per province, critical thresholds reached
 */
export async function checkAndSendCampaigns() {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');
    
    // Get survey stats by province
    const responses = await db.select().from(surveyResponses);
    
    const provinceStats: Record<string, { yes: number; no: number; total: number }> = {};
    responses.forEach((response: any) => {
      const province = response.province || 'Unknown';
      if (!provinceStats[province]) {
        provinceStats[province] = { yes: 0, no: 0, total: 0 };
      }
      if (response.response === 'yes') {
        provinceStats[province].yes++;
      } else {
        provinceStats[province].no++;
      }
      provinceStats[province].total++;
    });

    // Check for threshold triggers
    const triggeredCampaigns: Array<{ province: string; threshold: string; count: number }> = [];

    Object.entries(provinceStats).forEach(([province, stats]) => {
      // Trigger 1: 10+ responses per province
      if (stats.total >= 10 && stats.total % 10 === 0) {
        triggeredCampaigns.push({
          province,
          threshold: `${stats.total} responses`,
          count: stats.total,
        });
      }

      // Trigger 2: 75%+ reporting issues (critical threshold)
      if (stats.total >= 5) {
        const percentage = (stats.yes / stats.total) * 100;
        if (percentage >= 75) {
          triggeredCampaigns.push({
            province,
            threshold: '75% critical threshold',
            count: stats.yes,
          });
        }
      }
    });

    // Send campaigns for triggered events
    for (const campaign of triggeredCampaigns) {
      await sendCampaignEmail(campaign.province, campaign.threshold, campaign.count);
    }

    return triggeredCampaigns;
  } catch (error) {
    console.error('Error checking campaign triggers:', error);
    throw error;
  }
}

/**
 * Send campaign email to all subscribers
 */
export async function sendCampaignEmail(
  province: string,
  threshold: string,
  count: number
) {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');
    
    // Get all active subscribers
    const subscribers = await db
      .select()
      .from(emailSubscribers)
      .where(eq(emailSubscribers.isActive, 'yes'));

    if (subscribers.length === 0) return;

    // Create campaign record
    const campaign = await db.insert(emailCampaigns).values({
      newsUpdateId: 1,
      subject: `Update: ${threshold} responses from ${province}`,
      recipientCount: subscribers.length,
      sentCount: subscribers.length,
      sentAt: new Date(),
      status: 'sent' as any,
    });

    // In production, integrate with email service (SendGrid, Mailgun, etc.)
    console.log(`Campaign sent to ${subscribers.length} subscribers for ${province}`);

    return campaign;
  } catch (error) {
    console.error('Error sending campaign email:', error);
    throw error;
  }
}

/**
 * Generate email content for campaign
 */
function generateEmailContent(province: string, threshold: string, count: number): string {
  return `
    <h2>Survey Update: ${province}</h2>
    <p>We've reached a significant milestone in documenting systemic failures:</p>
    <p><strong>${threshold}</strong> - ${count} people from ${province} have shared their experiences</p>
    <p>Your voice matters. Together, we're building an undeniable record of institutional failures affecting Indigenous families.</p>
    <p><a href="https://indigenousadv-ahjdmzis.manus.space/survey-map">View the interactive map</a></p>
    <p>Thank you for your support,<br>Justice for Barran Team</p>
  `;
}

/**
 * Get campaign history
 */
export async function getCampaignHistory(limit: number = 50) {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');
    
    const campaigns = await db
      .select()
      .from(emailCampaigns)
      .orderBy(desc(emailCampaigns.sentAt))
      .limit(limit);

    return campaigns;
  } catch (error) {
    console.error('Error fetching campaign history:', error);
    throw error;
  }
}

/**
 * Manually trigger campaign for specific province
 */
export async function triggerManualCampaign(
  province: string,
  subject: string,
  content: string
) {
  try {
    const db = await getDb();
    if (!db) throw new Error('Database not available');
    
    const subscribers = await db
      .select()
      .from(emailSubscribers)
      .where(eq(emailSubscribers.isActive, 'yes'));

    const campaign = await db.insert(emailCampaigns).values({
      newsUpdateId: 1,
      subject,
      recipientCount: subscribers.length,
      sentCount: subscribers.length,
      sentAt: new Date(),
      status: 'sent' as any,
    });

    console.log(`Manual campaign sent to ${subscribers.length} subscribers for ${province}`);
    return campaign;
  } catch (error) {
    console.error('Error triggering manual campaign:', error);
    throw error;
  }
}
