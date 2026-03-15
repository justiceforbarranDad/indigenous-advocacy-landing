import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, survivorStories, InsertSurvivorStory, donations, InsertDonation, legalProfiles, InsertLegalProfile } from "../drizzle/schema";
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
