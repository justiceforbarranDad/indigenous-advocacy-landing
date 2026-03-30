import { Request, Response } from 'express';
import Stripe from 'stripe';
import { getDb } from './db';
import { donations } from '../drizzle/schema';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-03-25.dahlia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers['stripe-signature'] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle test events
  if (event.id.startsWith('evt_test_')) {
    console.log('[Webhook] Test event detected, returning verification response');
    return res.json({ verified: true });
  }

  try {
    const db = await getDb();
    if (!db) {
      console.error('[Webhook] Database not available');
      return res.status(500).json({ error: 'Database unavailable' });
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Save donation to database
        await db.insert(donations).values({
          amount: session.amount_total || 0, // Amount in cents
          donorName: session.customer_details?.name || 'Anonymous',
          donorEmail: session.customer_details?.email || '',
          method: 'stripe',
          stripePaymentIntentId: session.payment_intent as string,
          status: 'confirmed',
          message: session.metadata?.message as string | undefined,
        });

        console.log(`[Webhook] Donation recorded: ${session.id}`);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`[Webhook] Payment succeeded: ${paymentIntent.id}`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`[Webhook] Payment failed: ${paymentIntent.id}`);
        break;
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}
