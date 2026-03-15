import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createSurvivorStory, getPublicSurvivorStories, createDonation, getTotalDonations, createLegalProfile } from "./db";
import { notifyOwner } from "./_core/notification";
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
});

export type AppRouter = typeof appRouter;
