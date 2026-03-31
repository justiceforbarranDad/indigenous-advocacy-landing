import { getDb } from "./db";
import { donations, donationCampaigns } from "../drizzle/schema";
import { eq, sum } from "drizzle-orm";

/**
 * Initialize the main fundraising campaign for legal defense
 * Goal: $500,000 for international legal defense
 */
export async function initializeDonationCampaign() {
  try {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    // Check if campaign already exists
    const existing = await db
      .select()
      .from(donationCampaigns)
      .where(eq(donationCampaigns.title, "Legal Defense Fund - International Lawyers"))
      .limit(1);

    if (existing.length > 0) {
      return existing[0];
    }

    // Create new campaign
    const result = await db.insert(donationCampaigns).values({
      title: "Legal Defense Fund - International Lawyers",
      description: "Comprehensive international legal defense against systemic failures at federal and provincial levels",
      goalAmount: 50000000, // $500,000 in cents
      raisedAmount: 0,
      isActive: "yes",
    });

    console.log("✅ Donation campaign initialized: $500,000 goal");
    return result;
  } catch (error) {
    console.error("Error initializing donation campaign:", error);
    throw error;
  }
}

/**
 * Get the active donation campaign with current totals
 */
export async function getActiveCampaignWithTotals() {
  try {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const campaign = await db
      .select()
      .from(donationCampaigns)
      .where(eq(donationCampaigns.isActive, "yes"))
      .limit(1);

    if (!campaign.length) {
      // Initialize if none exists
    await initializeDonationCampaign();
    return await getActiveCampaignWithTotals();
    }

    const activeCampaign = campaign[0];

    // Calculate actual total from confirmed donations
    const totalResult = await db
      .select({ total: sum(donations.amount) })
      .from(donations)
      .where(eq(donations.status, "confirmed"));

    const actualTotal = totalResult[0]?.total || 0;

    const actualTotalNum = Number(actualTotal) || 0;
    const goalNum = Number(activeCampaign.goalAmount) || 1;
    
    return {
      ...activeCampaign,
      actualRaisedAmount: actualTotalNum,
      percentageComplete: Math.round((actualTotalNum / goalNum) * 100),
      remainingAmount: Math.max(0, goalNum - actualTotalNum),
    };
  } catch (error) {
    console.error("Error fetching campaign totals:", error);
    throw error;
  }
}

/**
 * Get donation statistics
 */
export async function getDonationStats() {
  try {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const stats = await db
      .select({
        totalAmount: sum(donations.amount),
        totalCount: sum(donations.id),
      })
      .from(donations)
      .where(eq(donations.status, "confirmed"));

    return {
      totalRaised: stats[0]?.totalAmount || 0,
      donationCount: stats[0]?.totalCount || 0,
    };
  } catch (error) {
    console.error("Error fetching donation stats:", error);
    throw error;
  }
}
