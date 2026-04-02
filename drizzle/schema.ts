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
  userId: int("user_id"),
  donorName: varchar("donor_name", { length: 255 }).notNull(),
  donorEmail: varchar("donor_email", { length: 320 }).notNull(),
  amount: int("amount").notNull(), // Amount in cents (CAD)
  method: mysqlEnum("method", ["etransfer", "gofundme", "stripe", "other"]).notNull(),
  message: text("message"),
  isAnonymous: mysqlEnum("is_anonymous", ["yes", "no"]).default("no").notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "failed"]).default("pending").notNull(),
  stripePaymentIntentId: varchar("stripe_payment_intent_id", { length: 255 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Donation = typeof donations.$inferSelect;
export type InsertDonation = typeof donations.$inferInsert;

// Donation Campaign/Goal Table
export const donationCampaigns = mysqlTable("donation_campaigns", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  goalAmount: int("goal_amount").notNull(), // Amount in cents (CAD)
  raisedAmount: int("raised_amount").default(0).notNull(), // Amount in cents (CAD)
  isActive: mysqlEnum("is_active", ["yes", "no"]).default("yes").notNull(),
  startDate: timestamp("start_date").defaultNow().notNull(),
  endDate: timestamp("end_date"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type DonationCampaign = typeof donationCampaigns.$inferSelect;
export type InsertDonationCampaign = typeof donationCampaigns.$inferInsert;

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

// Parent Profiles Table
export const parentProfiles = mysqlTable("parent_profiles", {
  id: int("id").autoincrement().primaryKey(),
  parentName: varchar("parent_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  childSituation: text("child_situation").notNull(),
  involvement: text("involvement").notNull(),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "reviewed", "contacted"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ParentProfile = typeof parentProfiles.$inferSelect;
export type InsertParentProfile = typeof parentProfiles.$inferInsert;

// Video Views Table
export const videoViews = mysqlTable("video_views", {
  id: int("id").autoincrement().primaryKey(),
  videoId: varchar("video_id", { length: 255 }).notNull(),
  videoTitle: varchar("video_title", { length: 255 }).notNull(),
  viewCount: int("view_count").default(0).notNull(),
  lastViewedAt: timestamp("last_viewed_at").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type VideoView = typeof videoViews.$inferSelect;
export type InsertVideoView = typeof videoViews.$inferInsert;


// Email Subscribers Table
export const emailSubscribers = mysqlTable("email_subscribers", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  subscriptionType: mysqlEnum("subscription_type", ["all_updates", "news_only", "podcast_only"]).default("all_updates").notNull(),
  isActive: mysqlEnum("is_active", ["yes", "no"]).default("yes").notNull(),
  confirmationToken: varchar("confirmation_token", { length: 255 }),
  isConfirmed: mysqlEnum("is_confirmed", ["yes", "no"]).default("no").notNull(),
  confirmedAt: timestamp("confirmed_at"),
  unsubscribedAt: timestamp("unsubscribed_at"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type EmailSubscriber = typeof emailSubscribers.$inferSelect;
export type InsertEmailSubscriber = typeof emailSubscribers.$inferInsert;

// News Updates Table
export const newsUpdates = mysqlTable("news_updates", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  category: mysqlEnum("category", ["breaking_news", "podcast_episode", "legal_update", "event", "other"]).notNull(),
  imageUrl: varchar("image_url", { length: 512 }),
  status: mysqlEnum("status", ["draft", "published", "archived"]).default("draft").notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type NewsUpdate = typeof newsUpdates.$inferSelect;
export type InsertNewsUpdate = typeof newsUpdates.$inferInsert;

// Email Campaigns Table
export const emailCampaigns = mysqlTable("email_campaigns", {
  id: int("id").autoincrement().primaryKey(),
  newsUpdateId: int("news_update_id").notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  recipientCount: int("recipient_count").default(0).notNull(),
  sentCount: int("sent_count").default(0).notNull(),
  openCount: int("open_count").default(0).notNull(),
  clickCount: int("click_count").default(0).notNull(),
  status: mysqlEnum("status", ["draft", "scheduled", "sent", "failed"]).default("draft").notNull(),
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type EmailCampaign = typeof emailCampaigns.$inferSelect;
export type InsertEmailCampaign = typeof emailCampaigns.$inferInsert;

// Survey Responses Table
export const surveyResponses = mysqlTable("survey_responses", {
  id: int("id").autoincrement().primaryKey(),
  response: mysqlEnum("response", ["yes", "no"]).notNull(),
  email: varchar("email", { length: 320 }),
  name: varchar("name", { length: 255 }),
  city: varchar("city", { length: 100 }),
  province: varchar("province", { length: 100 }),
  additionalInfo: text("additional_info"),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: varchar("user_agent", { length: 500 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SurveyResponse = typeof surveyResponses.$inferSelect;
export type InsertSurveyResponse = typeof surveyResponses.$inferInsert;

// Stripe Payments Table
export const stripePayments = mysqlTable("stripe_payments", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id"),
  paymentIntentId: varchar("payment_intent_id", { length: 255 }).notNull().unique(),
  amount: int("amount").notNull(), // Amount in cents
  currency: varchar("currency", { length: 3 }).default("CAD").notNull(),
  status: mysqlEnum("status", ["pending", "succeeded", "failed", "canceled"]).default("pending").notNull(),
  customerEmail: varchar("customer_email", { length: 320 }).notNull(),
  customerName: varchar("customer_name", { length: 255 }),
  metadata: text("metadata"), // JSON metadata
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type StripePayment = typeof stripePayments.$inferSelect;
export type InsertStripePayment = typeof stripePayments.$inferInsert;

// Orange Shirt Day Accountability Tracker Table
export const orangeShirtAccountability = mysqlTable("orange_shirt_accountability", {
  id: int("id").autoincrement().primaryKey(),
  organizationName: varchar("organization_name", { length: 255 }).notNull(),
  organizationType: mysqlEnum("organization_type", ["corporate_sponsor", "nhl_team", "sports_team", "orange_shirt_society", "other"]).notNull(),
  category: varchar("category", { length: 100 }), // e.g., "Banking", "Retail", "Sports"
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  socialMedia: text("social_media"), // JSON: {twitter, facebook, instagram, linkedin}
  website: varchar("website", { length: 512 }),
  contactPerson: varchar("contact_person", { length: 255 }),
  dateFirstContacted: timestamp("date_first_contacted"),
  contactMethod: mysqlEnum("contact_method", ["email", "phone", "social_media", "in_person", "letter", "other"]),
  responseStatus: mysqlEnum("response_status", ["no_response", "acknowledged", "committed", "acting", "performative", "hostile"]).default("no_response").notNull(),
  responseDate: timestamp("response_date"),
  responseContent: text("response_content"), // What they said
  commitmentDetails: text("commitment_details"), // What they committed to
  followUpDate: timestamp("follow_up_date"),
  notes: text("notes"),
  isPerformative: mysqlEnum("is_performative", ["yes", "no"]).default("no").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type OrangeShirtAccountability = typeof orangeShirtAccountability.$inferSelect;
export type InsertOrangeShirtAccountability = typeof orangeShirtAccountability.$inferInsert;

// Government Agencies Accountability Tracker Table
export const governmentAccountability = mysqlTable("government_accountability", {
  id: int("id").autoincrement().primaryKey(),
  officialName: varchar("official_name", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  governmentLevel: mysqlEnum("government_level", ["federal", "provincial", "municipal", "agency", "other"]).notNull(),
  department: varchar("department", { length: 255 }),
  jurisdiction: varchar("jurisdiction", { length: 255 }), // e.g., "Quebec", "Canada"
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  officeAddress: text("office_address"),
  socialMedia: text("social_media"), // JSON: {twitter, facebook, instagram, linkedin}
  website: varchar("website", { length: 512 }),
  dateFirstContacted: timestamp("date_first_contacted"),
  contactMethod: mysqlEnum("contact_method", ["email", "phone", "social_media", "in_person", "letter", "other"]),
  responseStatus: mysqlEnum("response_status", ["no_response", "acknowledged", "committed", "acting", "hostile", "cease_and_desist"]).default("no_response").notNull(),
  responseDate: timestamp("response_date"),
  responseContent: text("response_content"),
  commitmentDetails: text("commitment_details"),
  followUpDate: timestamp("follow_up_date"),
  ceaseAndDesistReceived: mysqlEnum("cease_and_desist_received", ["yes", "no"]).default("no").notNull(),
  ceaseAndDesistDate: timestamp("cease_and_desist_date"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type GovernmentAccountability = typeof governmentAccountability.$inferSelect;
export type InsertGovernmentAccountability = typeof governmentAccountability.$inferInsert;
