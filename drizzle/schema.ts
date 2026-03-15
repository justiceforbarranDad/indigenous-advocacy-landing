import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Survivor Stories Table
export const survivorStories = mysqlTable("survivor_stories", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  story: text("story").notNull(),
  category: mysqlEnum("category", ["child_victim", "adult_victim", "family_member", "advocate", "other"]).notNull(),
  isPublic: mysqlEnum("is_public", ["yes", "no"]).default("no").notNull(),
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SurvivorStory = typeof survivorStories.$inferSelect;
export type InsertSurvivorStory = typeof survivorStories.$inferInsert;

// Donations Table
export const donations = mysqlTable("donations", {
  id: int("id").autoincrement().primaryKey(),
  donorName: varchar("donor_name", { length: 255 }).notNull(),
  donorEmail: varchar("donor_email", { length: 320 }).notNull(),
  amount: int("amount").notNull(), // Amount in cents (CAD)
  method: mysqlEnum("method", ["etransfer", "gofundme", "other"]).notNull(),
  message: text("message"),
  isAnonymous: mysqlEnum("is_anonymous", ["yes", "no"]).default("no").notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "failed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Donation = typeof donations.$inferSelect;
export type InsertDonation = typeof donations.$inferInsert;

// Legal Profiles Table
export const legalProfiles = mysqlTable("legal_profiles", {
  id: int("id").autoincrement().primaryKey(),
  lawyerName: varchar("lawyer_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  jurisdiction: varchar("jurisdiction", { length: 255 }).notNull(),
  specialization: text("specialization").notNull(),
  experience: text("experience").notNull(),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "reviewed", "contacted"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type LegalProfile = typeof legalProfiles.$inferSelect;
export type InsertLegalProfile = typeof legalProfiles.$inferInsert;