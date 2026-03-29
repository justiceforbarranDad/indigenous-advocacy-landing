/**
 * Stripe Products & Pricing Configuration
 * Define all donation products and subscription plans
 */

export const DONATION_PRODUCTS = {
  // One-time donations
  oneTime: {
    id: 'prod_onetime_donation',
    name: 'One-Time Donation',
    description: 'Make a single donation to support Justice for Barran',
    type: 'one_time',
  },
  
  // Recurring subscription tiers
  monthly: {
    supporter: {
      id: 'prod_monthly_supporter',
      name: 'Monthly Supporter',
      description: '$10/month - Help sustain the campaign',
      amount: 1000, // $10 in cents
      currency: 'cad',
      interval: 'month',
      tier: 'supporter',
    },
    advocate: {
      id: 'prod_monthly_advocate',
      name: 'Monthly Advocate',
      description: '$25/month - Fuel the movement',
      amount: 2500, // $25 in cents
      currency: 'cad',
      interval: 'month',
      tier: 'advocate',
    },
    champion: {
      id: 'prod_monthly_champion',
      name: 'Monthly Champion',
      description: '$50/month - Lead the fight for justice',
      amount: 5000, // $50 in cents
      currency: 'cad',
      interval: 'month',
      tier: 'champion',
    },
    guardian: {
      id: 'prod_monthly_guardian',
      name: 'Monthly Guardian',
      description: '$100/month - Protect Indigenous futures',
      amount: 10000, // $100 in cents
      currency: 'cad',
      interval: 'month',
      tier: 'guardian',
    },
  },
};

/**
 * Get subscription tier benefits
 */
export function getTierBenefits(tier: string) {
  const benefits: Record<string, string[]> = {
    supporter: [
      '✓ Monthly campaign updates',
      '✓ Supporter badge on website',
      '✓ Access to exclusive content',
    ],
    advocate: [
      '✓ Monthly campaign updates',
      '✓ Advocate badge on website',
      '✓ Access to exclusive content',
      '✓ Monthly impact report',
      '✓ Direct email access',
    ],
    champion: [
      '✓ Monthly campaign updates',
      '✓ Champion badge on website',
      '✓ Access to exclusive content',
      '✓ Monthly impact report',
      '✓ Direct email access',
      '✓ Quarterly strategy calls',
      '✓ Recognition in newsletter',
    ],
    guardian: [
      '✓ Monthly campaign updates',
      '✓ Guardian badge on website',
      '✓ Access to exclusive content',
      '✓ Monthly impact report',
      '✓ Direct email access',
      '✓ Quarterly strategy calls',
      '✓ Recognition in newsletter',
      '✓ Annual thank you event invitation',
      '✓ Custom donor recognition',
    ],
  };
  
  return benefits[tier] || [];
}

/**
 * One-time donation amounts
 */
export const ONE_TIME_AMOUNTS = [
  { amount: 500, label: '$5' },
  { amount: 1000, label: '$10' },
  { amount: 2500, label: '$25' },
  { amount: 5000, label: '$50' },
  { amount: 10000, label: '$100' },
  { amount: 25000, label: '$250' },
  { amount: 50000, label: '$500' },
];
