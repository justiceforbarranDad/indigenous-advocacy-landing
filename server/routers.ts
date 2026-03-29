import { COOKIE_NAME } from "../shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createSurvivorStory, getPublicSurvivorStories, createDonation, getTotalDonations, createLegalProfile, createParentProfile, incrementVideoView, getVideoViews, getAllVideoViews, subscribeEmail, getEmailSubscriber, unsubscribeEmail, getActiveSubscribers, createNewsUpdate, getPublishedNews, createEmailCampaign, submitSurveyResponse, getSurveyStats, getSurveyResponses } from "./db";
import { notifyOwner } from "./_core/notification";
import { exportSurveyAsCSV, exportAnalyticsSummaryAsCSV, generateAnalyticsReport } from "./dataExport";
import { sendEmail, generateStoryConfirmationEmail, generateStoryConfirmationText, generateDonationConfirmationEmail, generateDonationConfirmationText } from "./_core/emailService";

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
});
export type AppRouter = typeof appRouter;
