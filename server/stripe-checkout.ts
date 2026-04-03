import { Router } from 'express';
import Stripe from 'stripe';

const STRIPE_API_VERSION = '2026-03-25.dahlia' as const;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

const router = Router();

router.post('/checkout', async (req, res) => {
  try {
    const { amount, currency = 'CAD' } = req.body;

    if (!amount || amount < 0.50) {
      return res.status(400).json({ error: 'Minimum donation is $0.50' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Donation - Justice for Barran',
              description: 'Support Indigenous justice advocacy and systemic change',
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/`,
      customer_email: req.body.email,
      metadata: {
        purpose: 'justice_for_barran',
        campaign: 'indigenous_advocacy',
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

export default router;
