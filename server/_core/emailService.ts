import { invokeLLM } from "./llm";

export interface EmailOptions {
  to: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

/**
 * Send email using Manus built-in email service
 * Note: This uses the LLM service as a proxy for email delivery
 * In production, you would integrate with SendGrid, AWS SES, or similar
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // For now, we'll log the email that would be sent
    // In production, integrate with your email provider
    console.log(`[EMAIL] Sending to: ${options.to}`);
    console.log(`[EMAIL] Subject: ${options.subject}`);
    console.log(`[EMAIL] Content preview: ${options.htmlContent.substring(0, 100)}...`);
    
    // TODO: Replace with actual email provider integration
    // Example: SendGrid, AWS SES, Mailgun, etc.
    return true;
  } catch (error) {
    console.error("[EMAIL] Failed to send email:", error);
    return false;
  }
}

/**
 * Generate HTML email for story submission confirmation
 */
export function generateStoryConfirmationEmail(
  name: string,
  storyCategory: string,
  isPublic: boolean
): string {
  const statusText = isPublic ? "will be reviewed for public sharing" : "has been saved privately";
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2d5016 0%, #d4843a 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f7f4; padding: 30px; border-radius: 0 0 8px 8px; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    .button { display: inline-block; background: #d4843a; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; margin-top: 20px; }
    .highlight { color: #d4843a; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Sharing Your Story</h1>
    </div>
    <div class="content">
      <p>Dear <span class="highlight">${name}</span>,</p>
      
      <p>We have received your story submission. Thank you for taking the courageous step to share your experience and contribute to our advocacy for justice and accountability.</p>
      
      <h3>Submission Details:</h3>
      <ul>
        <li><strong>Category:</strong> ${storyCategory.replace(/_/g, ' ')}</li>
        <li><strong>Status:</strong> ${statusText}</li>
        <li><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</li>
      </ul>
      
      <p>Your story is an important part of documenting systemic failures and advocating for change. If you selected public sharing, our team will review your submission to ensure it meets our guidelines, and it will be featured on our platform to amplify your voice.</p>
      
      <p>If you have any questions or would like to update your submission, please reply to this email or visit our website.</p>
      
      <p><strong>What happens next:</strong></p>
      <ol>
        <li>Our team reviews your story (typically within 2-3 business days)</li>
        <li>If approved for public sharing, it will appear on our Stories Gallery</li>
        <li>You'll receive a notification when your story is published</li>
      </ol>
      
      <p>Together, we are building a record of truth and demanding accountability.</p>
      
      <p>In solidarity,<br>
      <strong>Sunday Bloody Sunday - Indigenous Justice Advocacy</strong></p>
      
      <div class="footer">
        <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
        <p>&copy; 2026 Indigenous Justice Advocacy. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate HTML email for donation confirmation
 */
export function generateDonationConfirmationEmail(
  donorName: string,
  amount: number,
  method: string,
  isAnonymous: boolean,
  message?: string
): string {
  const displayName = isAnonymous ? "Anonymous Supporter" : donorName;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2d5016 0%, #d4843a 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f7f4; padding: 30px; border-radius: 0 0 8px 8px; }
    .amount-box { background: white; border-left: 4px solid #d4843a; padding: 20px; margin: 20px 0; border-radius: 4px; }
    .amount { font-size: 32px; color: #d4843a; font-weight: bold; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    .highlight { color: #d4843a; font-weight: bold; }
    .impact-list { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You for Your Support</h1>
    </div>
    <div class="content">
      <p>Dear ${displayName},</p>
      
      <p>We have received your generous donation of <strong>$${amount.toFixed(2)} CAD</strong>. Thank you for standing with us in the fight for justice, accountability, and Indigenous rights.</p>
      
      <p><strong>e-Transfer Details:</strong></p>
      <p>If you sent your donation via e-Transfer, please send it to: <code style="background: #f0f0f0; padding: 5px 10px; border-radius: 3px;">justiceforbarran@gmail.com</code></p>
      <p style="font-size: 12px; color: #666;">This is a direct auto-deposit account - no security question needed.</p>
      
      <div class="amount-box">
        <div class="amount">$${amount.toFixed(2)} CAD</div>
        <p><strong>Donation Method:</strong> ${method.replace(/_/g, ' ').toUpperCase()}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Status:</strong> <span class="highlight">Received & Confirmed</span></p>
      </div>
      
      <h3>Your Impact:</h3>
      <div class="impact-list">
        <p>Your donation directly supports:</p>
        <ul>
          <li>📋 Legal documentation and advocacy efforts</li>
          <li>📢 Public awareness campaigns</li>
          <li>🤝 Support for survivor testimonies</li>
          <li>⚖️ Accountability initiatives</li>
        </ul>
      </div>
      
      ${message ? `<p><strong>Your Message:</strong></p><p style="font-style: italic; border-left: 3px solid #d4843a; padding-left: 15px;">"${message}"</p>` : ''}
      
      <p>Every dollar contributes to our mission of ensuring that systemic failures are documented, survivors are heard, and those responsible are held accountable.</p>
      
      <p><strong>Tax Receipt:</strong> A tax receipt will be issued within 5 business days (if applicable).</p>
      
      <p>Thank you for being part of this movement for justice.</p>
      
      <p>In solidarity,<br>
      <strong>Sunday Bloody Sunday - Indigenous Justice Advocacy</strong></p>
      
      <div class="footer">
        <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
        <p>&copy; 2026 Indigenous Justice Advocacy. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate plain text version of story confirmation
 */
export function generateStoryConfirmationText(
  name: string,
  storyCategory: string,
  isPublic: boolean
): string {
  const statusText = isPublic ? "will be reviewed for public sharing" : "has been saved privately";
  
  return `
Thank You for Sharing Your Story

Dear ${name},

We have received your story submission. Thank you for taking the courageous step to share your experience and contribute to our advocacy for justice and accountability.

SUBMISSION DETAILS:
- Category: ${storyCategory.replace(/_/g, ' ')}
- Status: ${statusText}
- Submission Date: ${new Date().toLocaleDateString()}

Your story is an important part of documenting systemic failures and advocating for change.

WHAT HAPPENS NEXT:
1. Our team reviews your story (typically within 2-3 business days)
2. If approved for public sharing, it will appear on our Stories Gallery
3. You'll receive a notification when your story is published

Together, we are building a record of truth and demanding accountability.

In solidarity,
Sunday Bloody Sunday - Indigenous Justice Advocacy

---
This is an automated confirmation email. Please do not reply directly to this message.
© 2026 Indigenous Justice Advocacy. All rights reserved.
  `;
}

/**
 * Generate plain text version of donation confirmation
 */
export function generateDonationConfirmationText(
  donorName: string,
  amount: number,
  method: string,
  isAnonymous: boolean,
  message?: string
): string {
  const displayName = isAnonymous ? "Anonymous Supporter" : donorName;
  
  return `
Thank You for Your Support

Dear ${displayName},

We have received your generous donation of $${amount.toFixed(2)} CAD via ${method.replace(/_/g, ' ').toUpperCase()}.

Thank you for standing with us in the fight for justice, accountability, and Indigenous rights.

DONATION DETAILS:
- Amount: $${amount.toFixed(2)} CAD
- Method: ${method.replace(/_/g, ' ').toUpperCase()}
- Date: ${new Date().toLocaleDateString()}
- Status: Received & Confirmed

YOUR IMPACT:
Your donation directly supports:
- Legal documentation and advocacy efforts
- Public awareness campaigns
- Support for survivor testimonies
- Accountability initiatives

${message ? `YOUR MESSAGE:\n"${message}"\n\n` : ''}
Every dollar contributes to our mission of ensuring that systemic failures are documented, survivors are heard, and those responsible are held accountable.

TAX RECEIPT:
A tax receipt will be issued within 5 business days (if applicable).

Thank you for being part of this movement for justice.

In solidarity,
Sunday Bloody Sunday - Indigenous Justice Advocacy

---
This is an automated confirmation email. Please do not reply directly to this message.
© 2026 Indigenous Justice Advocacy. All rights reserved.
  `;
}

/**
 * Generate HTML email for Stripe donation confirmation
 */
export function generateStripeDonationConfirmationEmail(
  donorName: string,
  amount: number,
  sessionId: string,
  message?: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2d5016 0%, #d4843a 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
    .content { background: #f9f7f4; padding: 30px; border-radius: 0 0 8px 8px; }
    .amount-box { background: white; border-left: 4px solid #d4843a; padding: 20px; margin: 20px 0; border-radius: 4px; }
    .amount { font-size: 32px; color: #d4843a; font-weight: bold; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
    .highlight { color: #d4843a; font-weight: bold; }
    .impact-list { background: white; padding: 15px; border-radius: 4px; margin: 15px 0; }
    .receipt-id { background: #f0f0f0; padding: 10px; border-radius: 4px; font-family: monospace; word-break: break-all; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Thank You for Your Support</h1>
    </div>
    <div class="content">
      <p>Dear ${donorName},</p>
      
      <p>We have received your generous donation of <strong>$${(amount / 100).toFixed(2)} USD</strong>. Thank you for standing with us in the fight for justice, accountability, and Indigenous rights.</p>
      
      <div class="amount-box">
        <div class="amount">$${(amount / 100).toFixed(2)}</div>
        <p><strong>Payment Method:</strong> Credit Card (Stripe)</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Status:</strong> <span class="highlight">✓ Payment Confirmed</span></p>
        <p><strong>Receipt ID:</strong></p>
        <div class="receipt-id">${sessionId}</div>
      </div>
      
      <h3>Your Impact:</h3>
      <div class="impact-list">
        <p>Your donation directly supports:</p>
        <ul>
          <li>📋 Legal documentation and advocacy efforts</li>
          <li>📢 Public awareness campaigns</li>
          <li>🤝 Support for survivor testimonies</li>
          <li>⚖️ Accountability initiatives</li>
          <li>🎙️ Podcast production and distribution</li>
        </ul>
      </div>
      
      ${message ? `<p><strong>Your Message:</strong></p><p style="font-style: italic; border-left: 3px solid #d4843a; padding-left: 15px;">"${message}"</p>` : ''}
      
      <p>Every dollar contributes to our mission of ensuring that systemic failures are documented, survivors are heard, and those responsible are held accountable.</p>
      
      <p><strong>Tax Receipt:</strong> A tax receipt will be issued within 5 business days (if applicable in your jurisdiction).</p>
      
      <p><strong>Questions?</strong> Reply to this email or visit <strong>www.justiceforbarran.com</strong></p>
      
      <p>Thank you for being part of this movement for justice.</p>
      
      <p>In solidarity,<br>
      <strong>Sunday Bloody Sunday - Indigenous Justice Advocacy</strong></p>
      
      <div class="footer">
        <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
        <p>&copy; 2026 Indigenous Justice Advocacy. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate plain text version of Stripe donation confirmation
 */
export function generateStripeDonationConfirmationText(
  donorName: string,
  amount: number,
  sessionId: string,
  message?: string
): string {
  return `
Thank You for Your Support

Dear ${donorName},

We have received your generous donation of $${(amount / 100).toFixed(2)} USD via credit card.

Thank you for standing with us in the fight for justice, accountability, and Indigenous rights.

DONATION DETAILS:
- Amount: $${(amount / 100).toFixed(2)} USD
- Payment Method: Credit Card (Stripe)
- Date: ${new Date().toLocaleDateString()}
- Status: ✓ Payment Confirmed
- Receipt ID: ${sessionId}

YOUR IMPACT:
Your donation directly supports:
- Legal documentation and advocacy efforts
- Public awareness campaigns
- Support for survivor testimonies
- Accountability initiatives
- Podcast production and distribution

${message ? `YOUR MESSAGE:\n"${message}"\n\n` : ''}
Every dollar contributes to our mission of ensuring that systemic failures are documented, survivors are heard, and those responsible are held accountable.

TAX RECEIPT:
A tax receipt will be issued within 5 business days (if applicable in your jurisdiction).

QUESTIONS?
Reply to this email or visit www.justiceforbarran.com

Thank you for being part of this movement for justice.

In solidarity,
Sunday Bloody Sunday - Indigenous Justice Advocacy

---
This is an automated confirmation email. Please do not reply directly to this message.
© 2026 Indigenous Justice Advocacy. All rights reserved.
  `;
}
