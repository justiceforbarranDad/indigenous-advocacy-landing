import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, survivorStories, InsertSurvivorStory, donations, InsertDonation, donationCampaigns, DonationCampaign, legalProfiles, InsertLegalProfile, parentProfiles, InsertParentProfile, videoViews, InsertVideoView, emailSubscribers, InsertEmailSubscriber, newsUpdates, InsertNewsUpdate, emailCampaigns, InsertEmailCampaign, surveyResponses, InsertSurveyResponse, orangeShirtAccountability, InsertOrangeShirtAccountability, OrangeShirtAccountability, governmentAccountability, InsertGovernmentAccountability, GovernmentAccountability, donationImpactMetrics, InsertDonationImpactMetrics, DonationImpactMetrics, governmentResponseTracker, InsertGovernmentResponseTracker, GovernmentResponseTracker } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Initialize db synchronously for router use
if (!_db && process.env.DATABASE_URL) {
  try {
    _db = drizzle(process.env.DATABASE_URL);
  } catch (error) {
    console.warn("[Database] Failed to initialize:", error);
  }
}

export const db = _db || ({} as any);


export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Survivor Stories Functions
export async function createSurvivorStory(story: InsertSurvivorStory) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(survivorStories).values(story);
  return result;
}

export async function getSurvivorStories(limit: number = 10, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(survivorStories).limit(limit).offset(offset);
  return result;
}

export async function getPublicSurvivorStories(limit: number = 10, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select()
    .from(survivorStories)
    .where(eq(survivorStories.isPublic, "yes"))
    .limit(limit)
    .offset(offset);
  return result;
}

// Donations Functions
export async function createDonation(donation: InsertDonation) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(donations).values(donation);
  return result;
}

export async function getDonations(limit: number = 10, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(donations).limit(limit).offset(offset);
  return result;
}

export async function getTotalDonations() {
  const db = await getDb();
  if (!db) {
    return 0;
  }
  
  const result = await db.select().from(donations);
  const total = result.reduce((sum, donation) => sum + donation.amount, 0);
  return total; // in cents
}

// Legal Profiles Functions
export async function createLegalProfile(profile: InsertLegalProfile) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(legalProfiles).values(profile);
  return result;
}

export async function getLegalProfiles(limit: number = 50, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(legalProfiles).limit(limit).offset(offset);
  return result;
}

// Parent Profiles Functions
export async function createParentProfile(profile: InsertParentProfile) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(parentProfiles).values(profile);
  return result;
}

export async function getParentProfiles(limit: number = 50, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(parentProfiles).limit(limit).offset(offset);
  return result;
}

// Video Views Functions
export async function incrementVideoView(videoId: string, videoTitle: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  // Check if video view record exists
  const existing = await db.select().from(videoViews).where(eq(videoViews.videoId, videoId)).limit(1);
  
  if (existing.length > 0) {
    // Update existing record
    await db.update(videoViews)
      .set({
        viewCount: existing[0].viewCount + 1,
        lastViewedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(videoViews.videoId, videoId));
  } else {
    // Create new record
    await db.insert(videoViews).values({
      videoId,
      videoTitle,
      viewCount: 1,
      lastViewedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

export async function getVideoViews(videoId: string) {
  const db = await getDb();
  if (!db) {
    return null;
  }
  
  const result = await db.select().from(videoViews).where(eq(videoViews.videoId, videoId)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getAllVideoViews() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(videoViews).orderBy(videoViews.viewCount);
  return result;
}

// Email Subscribers Functions
export async function subscribeEmail(subscriber: InsertEmailSubscriber) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(emailSubscribers).values(subscriber);
  return result;
}

export async function getEmailSubscriber(email: string) {
  const db = await getDb();
  if (!db) {
    return null;
  }
  
  const result = await db.select().from(emailSubscribers).where(eq(emailSubscribers.email, email)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getActiveSubscribers() {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(emailSubscribers).where(eq(emailSubscribers.isActive, "yes"));
  return result;
}

export async function unsubscribeEmail(email: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  await db.update(emailSubscribers)
    .set({
      isActive: "no",
      unsubscribedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(emailSubscribers.email, email));
}

// News Updates Functions
export async function createNewsUpdate(update: InsertNewsUpdate) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(newsUpdates).values(update);
  return result;
}

export async function getPublishedNews(limit: number = 10, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(newsUpdates).where(eq(newsUpdates.status, "published")).limit(limit).offset(offset);
  return result;
}

// Email Campaigns Functions
export async function createEmailCampaign(campaign: InsertEmailCampaign) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(emailCampaigns).values(campaign);
  return result;
}

// Survey Response Functions
export async function submitSurveyResponse(response: InsertSurveyResponse) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(surveyResponses).values(response);
  return result;
}

export async function getSurveyStats() {
  const db = await getDb();
  if (!db) {
    return { yes: 0, no: 0, total: 0 };
  }
  
  const allResponses = await db.select().from(surveyResponses);
  const yesCount = allResponses.filter(r => r.response === "yes").length;
  const noCount = allResponses.filter(r => r.response === "no").length;
  
  return {
    yes: yesCount,
    no: noCount,
    total: allResponses.length,
  };
}

export async function getSurveyResponses(limit: number = 100, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(surveyResponses).limit(limit).offset(offset);
  return result;
}

// Donation Campaign Functions
export async function getActiveDonationCampaign(): Promise<DonationCampaign | null> {
  const db = await getDb();
  if (!db) {
    return null;
  }
  
  const result = await db.select().from(donationCampaigns).where(eq(donationCampaigns.isActive, "yes")).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getDonationCampaignById(id: number): Promise<DonationCampaign | null> {
  const db = await getDb();
  if (!db) {
    return null;
  }
  
  const result = await db.select().from(donationCampaigns).where(eq(donationCampaigns.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateDonationCampaignRaisedAmount(campaignId: number, newAmount: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  await db.update(donationCampaigns)
    .set({
      raisedAmount: newAmount,
      updatedAt: new Date(),
    })
    .where(eq(donationCampaigns.id, campaignId));
}

export async function getTotalRaisedAmount(): Promise<number> {
  const db = await getDb();
  if (!db) {
    return 0;
  }
  
  const campaign = await getActiveDonationCampaign();
  return campaign ? campaign.raisedAmount : 0;
}

// Orange Shirt Day Accountability Functions
export async function createOrangeShirtEntry(entry: InsertOrangeShirtAccountability) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(orangeShirtAccountability).values(entry);
  return result;
}

export async function getOrangeShirtEntries(limit: number = 100, offset: number = 0): Promise<OrangeShirtAccountability[]> {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(orangeShirtAccountability).limit(limit).offset(offset);
  return result;
}

export async function getOrangeShirtEntriesByType(type: string): Promise<OrangeShirtAccountability[]> {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(orangeShirtAccountability).where(eq(orangeShirtAccountability.organizationType, type as any));
  return result;
}

export async function updateOrangeShirtEntry(id: number, updates: Partial<OrangeShirtAccountability>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  await db.update(orangeShirtAccountability)
    .set({
      ...updates,
      updatedAt: new Date(),
    })
    .where(eq(orangeShirtAccountability.id, id));
}

export async function getOrangeShirtStats() {
  const db = await getDb();
  if (!db) {
    return { total: 0, noResponse: 0, responded: 0, performative: 0 };
  }
  
  const all = await db.select().from(orangeShirtAccountability);
  const noResponse = all.filter(e => e.responseStatus === "no_response").length;
  const responded = all.filter(e => e.responseStatus !== "no_response").length;
  const performative = all.filter(e => e.isPerformative === "yes").length;
  
  return {
    total: all.length,
    noResponse,
    responded,
    performative,
  };
}

// Government Accountability Functions
export async function createGovernmentEntry(entry: InsertGovernmentAccountability) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(governmentAccountability).values(entry);
  return result;
}

export async function getGovernmentEntries(limit: number = 100, offset: number = 0): Promise<GovernmentAccountability[]> {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(governmentAccountability).limit(limit).offset(offset);
  return result;
}

export async function getGovernmentEntriesByLevel(level: string): Promise<GovernmentAccountability[]> {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(governmentAccountability).where(eq(governmentAccountability.governmentLevel, level as any));
  return result;
}

export async function updateGovernmentEntry(id: number, updates: Partial<GovernmentAccountability>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  await db.update(governmentAccountability)
    .set({
      ...updates,
      updatedAt: new Date(),
    })
    .where(eq(governmentAccountability.id, id));
}

export async function getGovernmentStats() {
  const db = await getDb();
  if (!db) {
    return { total: 0, noResponse: 0, responded: 0, ceaseAndDesist: 0 };
  }
  
  const all = await db.select().from(governmentAccountability);
  const noResponse = all.filter(e => e.responseStatus === "no_response").length;
  const responded = all.filter(e => e.responseStatus !== "no_response").length;
  const ceaseAndDesist = all.filter(e => e.ceaseAndDesistReceived === "yes").length;
  
  return {
    total: all.length,
    noResponse,
    responded,
    ceaseAndDesist,
  };
}


// Donation Impact Metrics Functions
export async function getDonationImpactMetrics() {
  const db = await getDb();
  if (!db) {
    return null;
  }
  
  const result = await db.select().from(donationImpactMetrics).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateDonationImpactMetrics(metrics: Partial<InsertDonationImpactMetrics>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const existing = await getDonationImpactMetrics();
  
  if (existing) {
    await db.update(donationImpactMetrics)
      .set({
        ...metrics,
        lastUpdated: new Date(),
      })
      .where(eq(donationImpactMetrics.id, existing.id));
  } else {
    await db.insert(donationImpactMetrics).values({
      ...metrics,
      lastUpdated: new Date(),
    });
  }
}

// Government Response Tracker Functions
export async function createGovernmentResponse(response: InsertGovernmentResponseTracker) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  const result = await db.insert(governmentResponseTracker).values(response);
  return result;
}

export async function getGovernmentResponses(limit: number = 50, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select().from(governmentResponseTracker).limit(limit).offset(offset);
  return result;
}

export async function getPublicGovernmentResponses(limit: number = 50, offset: number = 0) {
  const db = await getDb();
  if (!db) {
    return [];
  }
  
  const result = await db.select()
    .from(governmentResponseTracker)
    .where(eq(governmentResponseTracker.publiclyShared, "yes"))
    .limit(limit)
    .offset(offset);
  return result;
}

export async function updateGovernmentResponse(id: number, updates: Partial<InsertGovernmentResponseTracker>) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }
  
  await db.update(governmentResponseTracker)
    .set({
      ...updates,
      updatedAt: new Date(),
    })
    .where(eq(governmentResponseTracker.id, id));
}

export async function getGovernmentResponseStats() {
  const db = await getDb();
  if (!db) {
    return {
      total: 0,
      noResponse: 0,
      acknowledged: 0,
      partialResponse: 0,
      fullResponse: 0,
      refused: 0,
      hostile: 0,
      avgDaysToRespond: 0,
    };
  }
  
  const all = await db.select().from(governmentResponseTracker);
  
  const stats = {
    total: all.length,
    noResponse: all.filter(r => r.responseStatus === "no_response").length,
    acknowledged: all.filter(r => r.responseStatus === "acknowledged").length,
    partialResponse: all.filter(r => r.responseStatus === "partial_response").length,
    fullResponse: all.filter(r => r.responseStatus === "full_response").length,
    refused: all.filter(r => r.responseStatus === "refused").length,
    hostile: all.filter(r => r.responseStatus === "hostile").length,
    avgDaysToRespond: 0,
  };
  
  // Calculate average days to respond
  const responded = all.filter(r => r.daysToRespond !== null);
  if (responded.length > 0) {
    const totalDays = responded.reduce((sum, r) => sum + (r.daysToRespond || 0), 0);
    stats.avgDaysToRespond = Math.round(totalDays / responded.length);
  }
  
  return stats;
}
