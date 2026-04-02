import { getSessionCookieOptions } from "./_core/cookies";

const COOKIE_NAME = "session";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createSurvivorStory, getPublicSurvivorStories, createDonation, getTotalDonations, createLegalProfile, createParentProfile, incrementVideoView, getVideoViews, getAllVideoViews, subscribeEmail, getEmailSubscriber, unsubscribeEmail, getActiveSubscribers, createNewsUpdate, getPublishedNews, createEmailCampaign, submitSurveyResponse, getSurveyStats, getSurveyResponses, getActiveDonationCampaign, getDonationCampaignById, updateDonationCampaignRaisedAmount, getTotalRaisedAmount, createOrangeShirtEntry, getOrangeShirtEntries, getOrangeShirtEntriesByType, updateOrangeShirtEntry, getOrangeShirtStats, createGovernmentEntry, getGovernmentEntries, getGovernmentEntriesByLevel, updateGovernmentEntry, getGovernmentStats, getDonationImpactMetrics, updateDonationImpactMetrics, createGovernmentResponse, getPublicGovernmentResponses, updateGovernmentResponse, getGovernmentResponseStats } from "./db";
import { notifyOwner } from "./_core/notification";
import { adminProcedure } from "./_core/trpc";
import { db } from "./db";
import { exportSurveyAsCSV, exportAnalyticsSummaryAsCSV, generateAnalyticsReport } from "./dataExport";
import { sendEmail, generateStoryConfirmationEmail, generateStoryConfirmationText, generateDonationConfirmationEmail, generateDonationConfirmationText } from "./_core/emailService";
import { subscriptionRouter } from "./routers/subscriptions";
import { eq, desc } from "drizzle-orm";
import { generateRSSFeed, getPodcastFeedConfig, getPodcastEpisodesForRSS } from "./rss-feed";
import Stripe from "stripe";
import { donationImpactMetrics, governmentResponseTracker } from "../drizzle/schema";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// Import database tables

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  stories: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email required"),
        phone: z.string().optional(),
        story: z.string().min(10, "Story must be at least 10 characters"),
        category: z.enum(["child_victim", "adult_victim", "family_member", "advocate", "other"]),
        isPublic: z.enum(["yes", "no"]),
      }))
      .mutation(async ({ input }) => {
        try {
          await createSurvivorStory({
            name: input.name,
            email: input.email,
            phone: input.phone || null,
            story: input.story,
            category: input.category,
            isPublic: input.isPublic,
            status: "pending",
          });
          
          await notifyOwner({
            title: "New Survivor Story Submitted",
            content: `${input.name} (${input.category}) submitted a story. Public: ${input.isPublic}`,
          });
          
          // Send confirmation email to submitter
          const htmlEmail = generateStoryConfirmationEmail(input.name, input.category, input.isPublic === 'yes');
          const textEmail = generateStoryConfirmationText(input.name, input.category, input.isPublic === 'yes');
          
          await sendEmail({
            to: input.email,
            subject: 'Story Submission Confirmed - Sunday Bloody Sunday',
            htmlContent: htmlEmail,
            textContent: textEmail,
          });
          
          return { success: true, message: "Story submitted successfully. Thank you for sharing your experience. A confirmation email has been sent to you." };
        } catch (error) {
          console.error("Error submitting story:", error);
          throw new Error("Failed to submit story");
        }
      }),
    
    getPublic: publicProcedure
      .input(z.object({
        limit: z.number().default(10),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return await getPublicSurvivorStories(input.limit, input.offset);
      }),
  }),

  stripe: router({
    createCheckoutSession: publicProcedure
      .input(z.object({
        amount: z.number().min(0.50, "Minimum donation is $0.50"),
        donorName: z.string().min(1, "Name is required"),
        donorEmail: z.string().email("Valid email required"),
        message: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: "Donation - Justice for Barran",
                    description: input.message || "Support Indigenous Justice Advocacy",
                  },
                  unit_amount: Math.round(input.amount * 100),
                },
                quantity: 1,
              },
            ],
            mode: "payment",
            success_url: `${ctx.req.headers.origin}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${ctx.req.headers.origin}/donate`,
            customer_email: input.donorEmail,
            metadata: {
              donorName: input.donorName,
              donorEmail: input.donorEmail,
              message: input.message || "",
            },
          });
          return { sessionId: session.id, url: session.url };
        } catch (error) {
          console.error("Error creating checkout session:", error);
          throw new Error("Failed to create checkout session");
        }
      }),

    getPaymentStatus: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ input }) => {
        try {
          const session = await stripe.checkout.sessions.retrieve(input.sessionId);
          return {
            status: session.payment_status,
            amount: (session.amount_total || 0) / 100,
            currency: session.currency,
          };
        } catch (error) {
          console.error("Error retrieving payment status:", error);
          throw new Error("Failed to retrieve payment status");
        }
      }),

    createPaymentLink: publicProcedure
      .input(z.object({
        amount: z.number().min(0.50),
        isRecurring: z.boolean().default(false),
      }))
      .mutation(async ({ input }) => {
        try {
          const paymentLink = await stripe.paymentLinks.create({
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: input.isRecurring ? "Monthly Donation - Justice for Barran" : "Donation - Justice for Barran",
                    description: "Support Indigenous Justice Advocacy",
                  },
                  unit_amount: Math.round(input.amount * 100),
                  recurring: input.isRecurring ? { interval: "month" } : undefined,
                },
                quantity: 1,
              },
            ],
          });

          return { url: paymentLink.url };
        } catch (error) {
          console.error("Error creating payment link:", error);
          throw new Error("Failed to create payment link");
        }
      }),
  }),

  donations: router({
    submit: publicProcedure
      .input(z.object({
        donorName: z.string().min(1, "Name is required"),
        donorEmail: z.string().email("Valid email required"),
        amount: z.number().min(0.01, "Amount must be at least $0.01"),
        method: z.enum(["etransfer", "gofundme", "other"]),
        message: z.string().optional(),
        isAnonymous: z.enum(["yes", "no"]),
      }))
      .mutation(async ({ input }) => {
        try {
          await createDonation({
            donorName: input.donorName,
            donorEmail: input.donorEmail,
            amount: Math.round(input.amount * 100),
            method: input.method,
            message: input.message || null,
            isAnonymous: input.isAnonymous,
            status: "pending",
          });
          
          await notifyOwner({
            title: "New Donation Received",
            content: `${input.isAnonymous === "yes" ? "Anonymous" : input.donorName} donated $${(input.amount).toFixed(2)} via ${input.method}`,
          });
          
          // Send confirmation email to donor
          const htmlEmail = generateDonationConfirmationEmail(input.donorName, input.amount, input.method, input.isAnonymous === 'yes', input.message);
          const textEmail = generateDonationConfirmationText(input.donorName, input.amount, input.method, input.isAnonymous === 'yes', input.message);
          
          await sendEmail({
            to: input.donorEmail,
            subject: 'Donation Confirmation - Sunday Bloody Sunday',
            htmlContent: htmlEmail,
            textContent: textEmail,
          });
          
          return { success: true, message: "Thank you for your donation! A confirmation email has been sent to you." };
        } catch (error) {
          console.error("Error processing donation:", error);
          throw new Error("Failed to process donation");
        }
      }),
    
    getTotal: publicProcedure.query(async () => {
      const totalCents = await getTotalDonations();
      return { totalCAD: (totalCents / 100).toFixed(2) };
    }),

    getActiveCampaign: publicProcedure.query(async () => {
      try {
        const campaign = await getActiveDonationCampaign();
        if (!campaign) {
          return null;
        }
        return {
          id: campaign.id,
          title: campaign.title,
          description: campaign.description,
          goalAmount: campaign.goalAmount,
          raisedAmount: campaign.raisedAmount,
          percentageRaised: Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
          isActive: campaign.isActive === "yes",
        };
      } catch (error) {
        console.error("Error fetching donation campaign:", error);
        return null;
      }
    }),

    getCampaignById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        try {
          const campaign = await getDonationCampaignById(input.id);
          if (!campaign) {
            return null;
          }
          return {
            id: campaign.id,
            title: campaign.title,
            description: campaign.description,
            goalAmount: campaign.goalAmount,
            raisedAmount: campaign.raisedAmount,
            percentageRaised: Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
            isActive: campaign.isActive === "yes",
          };
        } catch (error) {
          console.error("Error fetching donation campaign:", error);
          return null;
        }
      }),
  }),

  parents: router({
    submitParentProfile: publicProcedure
      .input(
        z.object({
          parentName: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email required"),
          phone: z.string().optional(),
          childSituation: z.string().min(10, "Please provide details about your situation"),
          involvement: z.string().min(10, "Please describe how you'd like to get involved"),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createParentProfile({
            parentName: input.parentName,
            email: input.email,
            phone: input.phone || null,
            childSituation: input.childSituation,
            involvement: input.involvement,
            message: input.message || null,
            status: "pending",
          });

          await notifyOwner({
            title: "New Parent Profile Submission",
            content: `${input.parentName} (${input.email}) has joined the movement. Involvement: ${input.involvement}`,
          });

          return { success: true, message: "Your parent profile has been received. We will contact you soon." };
        } catch (error) {
          console.error("Error submitting parent profile:", error);
          throw new Error("Failed to submit parent profile");
        }
      }),
  }),

  legal: router({
    submitLawyerProfile: publicProcedure
      .input(z.object({
        lawyerName: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email required"),
        jurisdiction: z.string().min(1, "Jurisdiction is required"),
        specialization: z.string().min(1, "Specialization is required"),
        experience: z.string().min(1, "Experience is required"),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createLegalProfile({
            lawyerName: input.lawyerName,
            email: input.email,
            jurisdiction: input.jurisdiction,
            specialization: input.specialization,
            experience: input.experience,
            message: input.message || null,
            status: "pending",
          });
          
          await notifyOwner({
            title: "New Legal Professional Inquiry",
            content: `${input.lawyerName} from ${input.jurisdiction} submitted legal profile. Specialization: ${input.specialization}`,
          });
          
          return { success: true, message: "Thank you! Your legal profile has been received." };
        } catch (error) {
          console.error("Error submitting legal profile:", error);
          throw new Error("Failed to submit legal profile");
        }
      }),
  }),

  impact: router({
    getMonthlyReport: publicProcedure
      .input(z.object({
        month: z.string().optional(),
      }))
      .query(async ({ input }) => {
        // Return mock impact data
        return {
          month: input.month || new Date().toISOString().slice(0, 7),
          totalDonations: 1700,
          totalStories: 7,
          totalParents: 11,
          totalLawyers: 3,
          growth: {
            donations: 140,
            stories: 40,
            parents: 37,
            lawyers: 50,
          },
        };
      }),
  }),

  videos: router({
    recordView: publicProcedure
      .input(z.object({
        videoId: z.string().min(1, "Video ID is required"),
        videoTitle: z.string().min(1, "Video title is required"),
      }))
      .mutation(async ({ input }) => {
        try {
          await incrementVideoView(input.videoId, input.videoTitle);
          return { success: true, message: "View recorded" };
        } catch (error) {
          console.error("Error recording video view:", error);
          throw new Error("Failed to record view");
        }
      }),

    getViews: publicProcedure
      .input(z.object({
        videoId: z.string().min(1, "Video ID is required"),
      }))
      .query(async ({ input }) => {
        try {
          const views = await getVideoViews(input.videoId);
          return views || { videoId: input.videoId, viewCount: 0 };
        } catch (error) {
          console.error("Error fetching video views:", error);
          return { videoId: input.videoId, viewCount: 0 };
        }
      }),

    getAllViews: publicProcedure.query(async () => {
      try {
        const views = await getAllVideoViews();
        return views;
      } catch (error) {
        console.error("Error fetching all video views:", error);
        return [];
      }
    }),
  }),

  email: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email("Valid email required"),
        name: z.string().optional(),
        subscriptionType: z.enum(["all_updates", "news_only", "podcast_only"]).default("all_updates"),
      }))
      .mutation(async ({ input }) => {
        try {
          const existing = await getEmailSubscriber(input.email);
          if (existing && existing.isConfirmed === "yes") {
            return { success: false, message: "Already subscribed" };
          }
          
          await subscribeEmail({
            email: input.email,
            name: input.name,
            subscriptionType: input.subscriptionType,
            isConfirmed: "yes",
            confirmedAt: new Date(),
          });
          
          await notifyOwner({
            title: "New Email Subscriber",
            content: `${input.email} subscribed to ${input.subscriptionType}`,
          });
          
          return { success: true, message: "Successfully subscribed!" };
        } catch (error) {
          console.error("Error subscribing email:", error);
          throw new Error("Failed to subscribe");
        }
      }),

    unsubscribe: publicProcedure
      .input(z.object({
        email: z.string().email("Valid email required"),
      }))
      .mutation(async ({ input }) => {
        try {
          await unsubscribeEmail(input.email);
          return { success: true, message: "Successfully unsubscribed" };
        } catch (error) {
          console.error("Error unsubscribing email:", error);
          throw new Error("Failed to unsubscribe");
        }
      }),

    getSubscribers: publicProcedure.query(async () => {
      try {
        const subscribers = await getActiveSubscribers();
        return subscribers;
      } catch (error) {
        console.error("Error fetching subscribers:", error);
        return [];
      }
    }),
  }),

  news: router({
    getLatest: publicProcedure
      .input(z.object({
        limit: z.number().default(10),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        try {
          const news = await getPublishedNews(input.limit, input.offset);
          return news;
        } catch (error) {
          console.error("Error fetching news:", error);
          return [];
        }
      }),
  }),

  survey: router({
    submit: publicProcedure
      .input(z.object({
        response: z.enum(["yes", "no"]),
        email: z.string().email().optional(),
        name: z.string().optional(),
        city: z.string().optional(),
        province: z.string().optional(),
        additionalInfo: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        try {
          await submitSurveyResponse({
            response: input.response,
            email: input.email,
            name: input.name,
            city: input.city,
            province: input.province,
            additionalInfo: input.additionalInfo,
            ipAddress: ctx.req.ip || "unknown",
            userAgent: ctx.req.get("user-agent") || "unknown",
          });
          
          await notifyOwner({
            title: "New Survey Response",
            content: `Survey response: ${input.response}${input.email ? " from " + input.email : ""}`,
          });
          
          return { success: true, message: "Thank you for your response!" };
        } catch (error) {
          console.error("Error submitting survey:", error);
          throw new Error("Failed to submit survey");
        }
      }),

    getStats: publicProcedure.query(async () => {
      try {
        const stats = await getSurveyStats();
        return stats;
      } catch (error) {
        console.error("Error fetching survey stats:", error);
        return { yes: 0, no: 0, total: 0 };
      }
    }),

    getResponses: publicProcedure
      .input(z.object({
        limit: z.number().default(100),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        try {
          const responses = await getSurveyResponses(input.limit, input.offset);
          return responses;
        } catch (error) {
          console.error("Error fetching survey responses:", error);
          return [];
        }
      }),
   }),
  export: router({
    surveyCSV: publicProcedure.query(async () => {
      return await exportSurveyAsCSV();
    }),
    analyticsSummaryCSV: publicProcedure.query(async () => {
      return await exportAnalyticsSummaryAsCSV();
    }),
    analyticsReport: publicProcedure.query(async () => {
      return await generateAnalyticsReport();
    }),
  }),
  subscriptions: router(subscriptionRouter),

  accountability: router({
    orangeShirt: router({
      create: publicProcedure
        .input(z.object({
          organizationName: z.string().min(1, "Organization name is required"),
          organizationType: z.enum(["corporate_sponsor", "nhl_team", "sports_team", "orange_shirt_society", "other"]),
          category: z.string().optional(),
          email: z.string().email().optional(),
          phone: z.string().optional(),
          socialMedia: z.string().optional(),
          website: z.string().optional(),
          contactPerson: z.string().optional(),
          dateFirstContacted: z.date().optional(),
          contactMethod: z.enum(["email", "phone", "social_media", "in_person", "letter", "other"]).optional(),
          responseStatus: z.enum(["no_response", "acknowledged", "committed", "acting", "performative", "hostile"]).default("no_response"),
          responseDate: z.date().optional(),
          responseContent: z.string().optional(),
          commitmentDetails: z.string().optional(),
          followUpDate: z.date().optional(),
          notes: z.string().optional(),
          isPerformative: z.enum(["yes", "no"]).default("no"),
        }))
        .mutation(async ({ input }) => {
          try {
            await createOrangeShirtEntry({
              organizationName: input.organizationName,
              organizationType: input.organizationType,
              category: input.category || null,
              email: input.email || null,
              phone: input.phone || null,
              socialMedia: input.socialMedia || null,
              website: input.website || null,
              contactPerson: input.contactPerson || null,
              dateFirstContacted: input.dateFirstContacted || null,
              contactMethod: input.contactMethod || null,
              responseStatus: input.responseStatus,
              responseDate: input.responseDate || null,
              responseContent: input.responseContent || null,
              commitmentDetails: input.commitmentDetails || null,
              followUpDate: input.followUpDate || null,
              notes: input.notes || null,
              isPerformative: input.isPerformative,
            });
            
            await notifyOwner({
              title: "New Orange Shirt Accountability Entry",
              content: `${input.organizationName} (${input.organizationType}) added to tracker. Status: ${input.responseStatus}`,
            });
            
            return { success: true, message: "Entry created successfully" };
          } catch (error) {
            console.error("Error creating orange shirt entry:", error);
            throw new Error("Failed to create entry");
          }
        }),

      getAll: publicProcedure
        .input(z.object({
          limit: z.number().default(100),
          offset: z.number().default(0),
        }))
        .query(async ({ input }) => {
          try {
            return await getOrangeShirtEntries(input.limit, input.offset);
          } catch (error) {
            console.error("Error fetching orange shirt entries:", error);
            return [];
          }
        }),

      getByType: publicProcedure
        .input(z.object({
          type: z.enum(["corporate_sponsor", "nhl_team", "sports_team", "orange_shirt_society", "other"]),
        }))
        .query(async ({ input }) => {
          try {
            return await getOrangeShirtEntriesByType(input.type);
          } catch (error) {
            console.error("Error fetching orange shirt entries by type:", error);
            return [];
          }
        }),

      update: publicProcedure
        .input(z.object({
          id: z.number(),
          responseStatus: z.enum(["no_response", "acknowledged", "committed", "acting", "performative", "hostile"]).optional(),
          responseDate: z.date().optional(),
          responseContent: z.string().optional(),
          commitmentDetails: z.string().optional(),
          followUpDate: z.date().optional(),
          notes: z.string().optional(),
          isPerformative: z.enum(["yes", "no"]).optional(),
        }))
        .mutation(async ({ input }) => {
          try {
            const { id, ...updates } = input;
            await updateOrangeShirtEntry(id, updates as any);
            return { success: true, message: "Entry updated successfully" };
          } catch (error) {
            console.error("Error updating orange shirt entry:", error);
            throw new Error("Failed to update entry");
          }
        }),

      getStats: publicProcedure.query(async () => {
        try {
          return await getOrangeShirtStats();
        } catch (error) {
          console.error("Error fetching orange shirt stats:", error);
          return { total: 0, noResponse: 0, responded: 0, performative: 0 };
        }
      }),
    }),

    government: router({
      create: publicProcedure
        .input(z.object({
          officialName: z.string().min(1, "Official name is required"),
          title: z.string().min(1, "Title is required"),
          governmentLevel: z.enum(["federal", "provincial", "municipal", "agency", "other"]),
          department: z.string().optional(),
          jurisdiction: z.string().optional(),
          email: z.string().email().optional(),
          phone: z.string().optional(),
          officeAddress: z.string().optional(),
          socialMedia: z.string().optional(),
          website: z.string().optional(),
          dateFirstContacted: z.date().optional(),
          contactMethod: z.enum(["email", "phone", "social_media", "in_person", "letter", "other"]).optional(),
          responseStatus: z.enum(["no_response", "acknowledged", "committed", "acting", "hostile", "cease_and_desist"]).default("no_response"),
          responseDate: z.date().optional(),
          responseContent: z.string().optional(),
          commitmentDetails: z.string().optional(),
          followUpDate: z.date().optional(),
          ceaseAndDesistReceived: z.enum(["yes", "no"]).default("no"),
          ceaseAndDesistDate: z.date().optional(),
          notes: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          try {
            await createGovernmentEntry({
              officialName: input.officialName,
              title: input.title,
              governmentLevel: input.governmentLevel,
              department: input.department || null,
              jurisdiction: input.jurisdiction || null,
              email: input.email || null,
              phone: input.phone || null,
              officeAddress: input.officeAddress || null,
              socialMedia: input.socialMedia || null,
              website: input.website || null,
              dateFirstContacted: input.dateFirstContacted || null,
              contactMethod: input.contactMethod || null,
              responseStatus: input.responseStatus,
              responseDate: input.responseDate || null,
              responseContent: input.responseContent || null,
              commitmentDetails: input.commitmentDetails || null,
              followUpDate: input.followUpDate || null,
              ceaseAndDesistReceived: input.ceaseAndDesistReceived,
              ceaseAndDesistDate: input.ceaseAndDesistDate || null,
              notes: input.notes || null,
            });
            
            await notifyOwner({
              title: "New Government Accountability Entry",
              content: `${input.officialName} (${input.governmentLevel}) added to tracker. Status: ${input.responseStatus}`,
            });
            
            return { success: true, message: "Entry created successfully" };
          } catch (error) {
            console.error("Error creating government entry:", error);
            throw new Error("Failed to create entry");
          }
        }),

      getAll: publicProcedure
        .input(z.object({
          limit: z.number().default(100),
          offset: z.number().default(0),
        }))
        .query(async ({ input }) => {
          try {
            return await getGovernmentEntries(input.limit, input.offset);
          } catch (error) {
            console.error("Error fetching government entries:", error);
            return [];
          }
        }),

      getByLevel: publicProcedure
        .input(z.object({
          level: z.enum(["federal", "provincial", "municipal", "agency", "other"]),
        }))
        .query(async ({ input }) => {
          try {
            return await getGovernmentEntriesByLevel(input.level);
          } catch (error) {
            console.error("Error fetching government entries by level:", error);
            return [];
          }
        }),

      update: publicProcedure
        .input(z.object({
          id: z.number(),
          responseStatus: z.enum(["no_response", "acknowledged", "committed", "acting", "hostile", "cease_and_desist"]).optional(),
          responseDate: z.date().optional(),
          responseContent: z.string().optional(),
          commitmentDetails: z.string().optional(),
          followUpDate: z.date().optional(),
          ceaseAndDesistReceived: z.enum(["yes", "no"]).optional(),
          ceaseAndDesistDate: z.date().optional(),
          notes: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          try {
            const { id, ...updates } = input;
            await updateGovernmentEntry(id, updates as any);
            return { success: true, message: "Entry updated successfully" };
          } catch (error) {
            console.error("Error updating government entry:", error);
            throw new Error("Failed to update entry");
          }
        }),

      getStats: publicProcedure.query(async () => {
        try {
          return await getGovernmentStats();
        } catch (error) {
          console.error("Error fetching government stats:", error);
          return { total: 0, noResponse: 0, responded: 0, ceaseAndDesist: 0 };
        }
      }),
    }),
  }),
  
  podcast: router({
    feed: publicProcedure.query(() => {
      try {
        const config = getPodcastFeedConfig();
        const episodes = getPodcastEpisodesForRSS();
        const rssFeed = generateRSSFeed(config, episodes);
        return rssFeed;
      } catch (error) {
        console.error("Error generating RSS feed:", error);
        throw new Error("Failed to generate RSS feed");
      }
    }),

    getCampaignWithTotals: publicProcedure.query(async () => {
      try {
        const { getActiveCampaignWithTotals } = await import('./donations');
        const campaign = await getActiveCampaignWithTotals();
        return {
          goalAmount: Number(campaign.goalAmount),
          actualRaisedAmount: campaign.actualRaisedAmount,
          percentageComplete: campaign.percentageComplete,
          remainingAmount: campaign.remainingAmount,
          title: campaign.title,
          description: campaign.description,
        };
      } catch (error) {
        console.error("Error fetching campaign with totals:", error);
        return {
          goalAmount: 50000000,
          actualRaisedAmount: 0,
          percentageComplete: 0,
          remainingAmount: 50000000,
          title: "Legal Defense Fund - International Lawyers",
          description: "Comprehensive international legal defense against systemic failures at federal and provincial levels",
        };
      }
    }),
  }),

  donationImpact: router({
    getMetrics: publicProcedure.query(async () => {
      const metrics = await getDonationImpactMetrics();
      return metrics || {
        id: 0,
        totalRaisedCAD: 0,
        totalRaisedUSD: 0,
        totalDonors: 0,
        legalHoursFunded: 0,
        hourlyRate: 25000,
        lastUpdated: new Date(),
        createdAt: new Date(),
      };
    }),
  }),

   governmentResponses: router({
    getPublic: publicProcedure
      .input(z.object({
        limit: z.number().default(10),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return await getPublicGovernmentResponses(input.limit, input.offset);
      }),
    
    getStats: publicProcedure.query(async () => {
      return await getGovernmentResponseStats();
    }),
  }),

  admin: router({
    // Donation management
    donations: router({
      add: adminProcedure
        .input(z.object({
          donorName: z.string().min(1),
          donorEmail: z.string().email(),
          amountCAD: z.number().positive(),
          amountUSD: z.number().positive(),
          method: z.enum(['e-transfer', 'bank-transfer', 'gofundme', 'stripe', 'crypto']),
          isPublic: z.boolean().default(true),
          notes: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          const donation = await db.insert(donationImpactMetrics).values({
            ...input,
            donationDate: Math.floor(Date.now() / 1000),
          }).returning();
          return donation[0];
        }),

      update: adminProcedure
        .input(z.object({
          id: z.number(),
          donorName: z.string().optional(),
          isPublic: z.boolean().optional(),
          notes: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          const { id, ...updates } = input;
          const updated = await db.update(donationImpactMetrics)
            .set(updates)
            .where(eq(donationImpactMetrics.id, id))
            .returning();
          return updated[0];
        }),

      delete: adminProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
          await db.delete(donationImpactMetrics)
            .where(eq(donationImpactMetrics.id, input.id));
          return { success: true };
        }),

      getAll: adminProcedure.query(async () => {
        return await db.select().from(donationImpactMetrics).orderBy(desc(donationImpactMetrics.createdAt));
      }),
    }),

    // Government response management
    governmentResponses: router({
      add: adminProcedure
        .input(z.object({
          officialName: z.string().min(1),
          position: z.string().min(1),
          jurisdiction: z.string().min(1),
          contactEmail: z.string().email(),
          responseStatus: z.enum(['no-response', 'acknowledged', 'partial', 'full', 'refused', 'hostile']),
          responseNotes: z.string().optional(),
          isPublic: z.boolean().default(true),
        }))
        .mutation(async ({ input }) => {
          const response = await db.insert(governmentResponseTracker).values({
            ...input,
            dateContacted: new Date(),
            contactMethod: 'email',
            contactSubject: 'Contact',
          }).returning();
          return response[0];
        }),

      update: adminProcedure
        .input(z.object({
          id: z.number(),
          responseStatus: z.enum(['no-response', 'acknowledged', 'partial', 'full', 'refused', 'hostile']).optional(),
          responseNotes: z.string().optional(),
          isPublic: z.boolean().optional(),
          daysSinceContact: z.number().optional(),
        }))
        .mutation(async ({ input }) => {
          const { id, ...updates } = input;
          const updated = await db.update(governmentResponseTracker)
            .set(updates)
            .where(eq(governmentResponseTracker.id, id))
            .returning();
          return updated[0];
        }),

      delete: adminProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
          await db.delete(governmentResponseTracker)
            .where(eq(governmentResponseTracker.id, input.id));
          return { success: true };
        }),

      getAll: adminProcedure.query(async () => {
        return await db.select().from(governmentResponseTracker).orderBy(desc(governmentResponseTracker.updatedAt));
      }),
    }),
  }),

});

export type AppRouter = typeof appRouter;
