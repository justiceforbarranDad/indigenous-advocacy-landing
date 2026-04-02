export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "",
  stripePublishableKey: process.env.VITE_STRIPE_PUBLISHABLE_KEY ?? "",
};

// Validate Stripe keys are available
if (!ENV.stripeSecretKey) {
  console.warn("Warning: STRIPE_SECRET_KEY is not configured. Stripe payments will not work.");
}
if (!ENV.stripePublishableKey) {
  console.warn("Warning: VITE_STRIPE_PUBLISHABLE_KEY is not configured. Stripe payments will not work.");
}
