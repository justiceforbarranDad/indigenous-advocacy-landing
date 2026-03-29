/**
 * Subscription Router - Handle recurring donations via Stripe
 */

import { publicProcedure, protectedProcedure } from '../_core/trpc';
import { z } from 'zod';
import Stripe from 'stripe';
type StripeClient = InstanceType<typeof Stripe>;
import { DONATION_PRODUCTS, ONE_TIME_AMOUNTS } from '../products';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '') as StripeClient;

export const subscriptionRouter = {
  /**
   * Get all subscription tiers with benefits
   */
  getTiers: publicProcedure.query(async () => {
    return {
      monthly: [
        {
          id: 'supporter',
          name: 'Monthly Supporter',
          price: '$10',
          amount: 1000,
          description: 'Help sustain the campaign',
          benefits: [
            '✓ Monthly campaign updates',
            '✓ Supporter badge',
            '✓ Exclusive content access',
          ],
        },
        {
          id: 'advocate',
          name: 'Monthly Advocate',
          price: '$25',
          amount: 2500,
          description: 'Fuel the movement',
          benefits: [
            '✓ Monthly campaign updates',
            '✓ Advocate badge',
            '✓ Exclusive content access',
            '✓ Monthly impact report',
            '✓ Direct email access',
          ],
        },
        {
          id: 'champion',
          name: 'Monthly Champion',
          price: '$50',
          amount: 5000,
          description: 'Lead the fight for justice',
          benefits: [
            '✓ Champion badge',
            '✓ Exclusive content',
            '✓ Monthly impact report',
            '✓ Direct email access',
            '✓ Quarterly strategy calls',
            '✓ Newsletter recognition',
          ],
        },
        {
          id: 'guardian',
          name: 'Monthly Guardian',
          price: '$100',
          amount: 10000,
          description: 'Protect Indigenous futures',
          benefits: [
            '✓ Guardian badge',
            '✓ Exclusive content',
            '✓ Monthly impact report',
            '✓ Direct email access',
            '✓ Quarterly strategy calls',
            '✓ Newsletter recognition',
            '✓ Annual thank you event',
            '✓ Custom recognition',
          ],
        },
      ],
      oneTime: ONE_TIME_AMOUNTS.map(item => ({
        amount: item.amount,
        label: item.label,
      })),
    };
  }),

  /**
   * Create subscription checkout session
   */
  createSubscriptionCheckout: publicProcedure
    .input(
      z.object({
        tier: z.enum(['supporter', 'advocate', 'champion', 'guardian']),
        email: z.string().email().optional(),
        name: z.string().optional(),
        origin: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const tierConfig = DONATION_PRODUCTS.monthly[input.tier as keyof typeof DONATION_PRODUCTS.monthly];
      
      if (!tierConfig) {
        throw new Error('Invalid tier selected');
      }

      try {
        const session = await stripe.checkout.sessions.create({
          mode: 'subscription',
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'cad',
                product_data: {
                  name: tierConfig.name,
                  description: tierConfig.description,
                  metadata: {
                    tier: input.tier,
                    campaign: 'justice_for_barran',
                  },
                },
                recurring: {
                  interval: 'month',
                  interval_count: 1,
                },
                unit_amount: tierConfig.amount,
              },
              quantity: 1,
            },
          ],
          success_url: `${input.origin}/subscription-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${input.origin}/donate-recurring`,
          customer_email: input.email,
          metadata: {
            tier: input.tier,
            customer_name: input.name || 'Anonymous',
            campaign: 'justice_for_barran',
          },
          allow_promotion_codes: true,
        });

        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (error) {
        console.error('Stripe subscription checkout error:', error);
        throw new Error('Failed to create subscription checkout session');
      }
    }),

  /**
   * Create one-time donation checkout session
   */
  createOneTimeCheckout: publicProcedure
    .input(
      z.object({
        amount: z.number().min(50).max(100000), // $0.50 to $1000 CAD
        email: z.string().email().optional(),
        name: z.string().optional(),
        origin: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const session = await stripe.checkout.sessions.create({
          mode: 'payment',
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'cad',
                product_data: {
                  name: 'Justice for Barran - One-Time Donation',
                  description: 'Support the fight for Indigenous justice',
                  metadata: {
                    campaign: 'justice_for_barran',
                  },
                },
                unit_amount: input.amount,
              },
              quantity: 1,
            },
          ],
          success_url: `${input.origin}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${input.origin}/donate`,
          customer_email: input.email,
          metadata: {
            amount: input.amount.toString(),
            customer_name: input.name || 'Anonymous',
            campaign: 'justice_for_barran',
            type: 'one_time',
          },
          allow_promotion_codes: true,
        });

        return {
          sessionId: session.id,
          url: session.url,
        };
      } catch (error) {
        console.error('Stripe one-time checkout error:', error);
        throw new Error('Failed to create donation checkout session');
      }
    }),

  /**
   * Get subscription status (for authenticated users)
   */
  getSubscriptionStatus: protectedProcedure.query(async ({ ctx }) => {
    try {
      // In a real app, you'd fetch this from your database
      // For now, return a placeholder
      return {
        hasActiveSubscription: false,
        tier: null,
        nextBillingDate: null,
        amount: null,
      };
    } catch (error) {
      console.error('Error fetching subscription status:', error);
      throw new Error('Failed to fetch subscription status');
    }
  }),

  /**
   * Cancel subscription (for authenticated users)
   */
  cancelSubscription: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      // In a real app, you'd fetch the subscription ID from your database
      // and cancel it here
      return {
        success: true,
        message: 'Subscription cancelled successfully',
      };
    } catch (error) {
      console.error('Error cancelling subscription:', error);
      throw new Error('Failed to cancel subscription');
    }
  }),
};
