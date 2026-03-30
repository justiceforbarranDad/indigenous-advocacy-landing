import { describe, it, expect, vi, beforeEach } from 'vitest';
import { generateStripeDonationConfirmationEmail, generateStripeDonationConfirmationText } from './_core/emailService';

describe('Stripe Payment Features', () => {
  describe('Email Confirmation Generation', () => {
    it('should generate HTML email with correct donor name', () => {
      const html = generateStripeDonationConfirmationEmail('John Doe', 5000, 'session_123', 'Test message');
      expect(html).toContain('John Doe');
      expect(html).toContain('$50.00');
      expect(html).toContain('session_123');
      expect(html).toContain('Test message');
    });

    it('should format amount correctly from cents to dollars', () => {
      const html = generateStripeDonationConfirmationEmail('Jane Smith', 2500, 'session_456');
      expect(html).toContain('$25.00');
    });

    it('should include payment method indicator', () => {
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      expect(html).toContain('Credit Card (Stripe)');
    });

    it('should include impact statement', () => {
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      expect(html).toContain('Legal documentation');
      expect(html).toContain('Public awareness campaigns');
      expect(html).toContain('Accountability initiatives');
    });

    it('should include tax receipt information', () => {
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      expect(html).toContain('tax receipt');
      expect(html).toContain('5 business days');
    });

    it('should handle optional message field', () => {
      const htmlWithMessage = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789', 'My message');
      expect(htmlWithMessage).toContain('My message');

      const htmlWithoutMessage = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      expect(htmlWithoutMessage).not.toContain('YOUR MESSAGE:');
    });
  });

  describe('Text Email Confirmation Generation', () => {
    it('should generate plain text email with correct donor name', () => {
      const text = generateStripeDonationConfirmationText('John Doe', 5000, 'session_123', 'Test message');
      expect(text).toContain('John Doe');
      expect(text).toContain('$50.00');
      expect(text).toContain('session_123');
    });

    it('should format amount correctly in text version', () => {
      const text = generateStripeDonationConfirmationText('Jane Smith', 2500, 'session_456');
      expect(text).toContain('$25.00');
    });

    it('should include all required sections', () => {
      const text = generateStripeDonationConfirmationText('Donor', 1000, 'session_789');
      expect(text).toContain('DONATION DETAILS:');
      expect(text).toContain('YOUR IMPACT:');
      expect(text).toContain('TAX RECEIPT:');
      expect(text).toContain('QUESTIONS?');
    });

    it('should include payment confirmation status', () => {
      const text = generateStripeDonationConfirmationText('Donor', 1000, 'session_789');
      expect(text).toContain('✓ Payment Confirmed');
    });
  });

  describe('Email Content Validation', () => {
    it('should include website URL in both formats', () => {
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      const text = generateStripeDonationConfirmationText('Donor', 1000, 'session_789');

      expect(html).toContain('justiceforbarran.com');
      expect(text).toContain('justiceforbarran.com');
    });

    it('should include copyright notice', () => {
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      const text = generateStripeDonationConfirmationText('Donor', 1000, 'session_789');

      expect(html).toContain('&copy; 2026');
      expect(text).toContain('© 2026');
    });

    it('should include organization name', () => {
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_789');
      const text = generateStripeDonationConfirmationText('Donor', 1000, 'session_789');

      expect(html).toContain('Sunday Bloody Sunday');
      expect(text).toContain('Sunday Bloody Sunday');
    });

    it('should not be empty for any amount', () => {
      const amounts = [50, 500, 5000, 50000];

      amounts.forEach((amount) => {
        const html = generateStripeDonationConfirmationEmail('Donor', amount, 'session_123');
        const text = generateStripeDonationConfirmationText('Donor', amount, 'session_123');

        expect(html.length).toBeGreaterThan(100);
        expect(text.length).toBeGreaterThan(100);
      });
    });
  });

  describe('Amount Formatting', () => {
    it('should correctly convert cents to dollars', () => {
      const testCases = [
        { cents: 50, expected: '$0.50' },
        { cents: 100, expected: '$1.00' },
        { cents: 2500, expected: '$25.00' },
        { cents: 10000, expected: '$100.00' },
        { cents: 99999, expected: '$999.99' },
      ];

      testCases.forEach(({ cents, expected }) => {
        const html = generateStripeDonationConfirmationEmail('Donor', cents, 'session_123');
        expect(html).toContain(expected);
      });
    });
  });

  describe('Security and Sanitization', () => {
    it('should handle special characters in donor name', () => {
      const specialNames = [
        "O'Brien",
        'Jean-Pierre',
        'José María',
        'Müller',
        'Ñoño',
      ];

      specialNames.forEach((name) => {
        const html = generateStripeDonationConfirmationEmail(name, 1000, 'session_123');
        const text = generateStripeDonationConfirmationText(name, 1000, 'session_123');

        expect(html).toContain(name);
        expect(text).toContain(name);
      });
    });

    it('should handle long messages without breaking layout', () => {
      const longMessage = 'This is a very long message that should not break the email layout. '.repeat(10);
      const html = generateStripeDonationConfirmationEmail('Donor', 1000, 'session_123', longMessage);
      const text = generateStripeDonationConfirmationText('Donor', 1000, 'session_123', longMessage);

      expect(html).toContain(longMessage);
      expect(text).toContain(longMessage);
    });

    it('should include receipt ID without modification', () => {
      const sessionIds = [
        'session_abc123',
        'pi_1234567890abcdef',
        'evt_test_123456',
      ];

      sessionIds.forEach((id) => {
        const html = generateStripeDonationConfirmationEmail('Donor', 1000, id);
        const text = generateStripeDonationConfirmationText('Donor', 1000, id);

        expect(html).toContain(id);
        expect(text).toContain(id);
      });
    });
  });
});
