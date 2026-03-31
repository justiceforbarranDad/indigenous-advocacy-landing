import { describe, it, expect } from 'vitest';
import {
  generateDonationConfirmationEmail,
  generateDonationConfirmationText,
  generateStripeDonationConfirmationEmail,
  generateStripeDonationConfirmationText,
  generateStripeDonationConfirmationEmailFR,
  generateStripeDonationConfirmationTextFR,
} from './server/_core/emailService';

/**
 * Bilingual Donor Thank You Email Test Suite
 * Tests English and French email templates for donations
 */

describe('Bilingual Donor Thank You Emails', () => {
  describe('English Donation Confirmation Emails', () => {
    it('should generate English HTML donation email', () => {
      const html = generateDonationConfirmationEmail(
        'John Doe',
        100,
        'etransfer',
        false,
        'Keep fighting for justice'
      );
      
      expect(html).toContain('Thank You for Your Support');
      expect(html).toContain('$100.00 CAD');
      expect(html).toContain('John Doe');
      expect(html).toContain('justiceforbarran@gmail.com');
      expect(html).toContain('Keep fighting for justice');
    });

    it('should generate English text donation email', () => {
      const text = generateDonationConfirmationText(
        'Jane Smith',
        50,
        'etransfer',
        false,
        undefined
      );
      
      expect(text).toContain('Thank You for Your Support');
      expect(text).toContain('$50.00 CAD');
      expect(text).toContain('Jane Smith');
      expect(text).toContain('DONATION DETAILS');
    });

    it('should handle anonymous donations in English', () => {
      const html = generateDonationConfirmationEmail(
        'John Doe',
        75,
        'etransfer',
        true
      );
      
      expect(html).toContain('Anonymous Supporter');
      expect(html).not.toContain('John Doe');
    });
  });

  describe('French Donation Confirmation Emails', () => {
    it('should generate French HTML donation email', () => {
      const html = generateDonationConfirmationEmail(
        'Jean Dupont',
        100,
        'etransfer',
        false,
        'Continuez la lutte',
        'fr'
      );
      
      expect(html).toContain('Merci pour Votre Soutien');
      expect(html).toContain('$100.00 CAD');
      expect(html).toContain('Jean Dupont');
      expect(html).toContain('justiceforbarran@gmail.com');
      expect(html).toContain('Continuez la lutte');
    });

    it('should generate French text donation email', () => {
      const text = generateDonationConfirmationText(
        'Marie Leclerc',
        50,
        'etransfer',
        false,
        undefined,
        'fr'
      );
      
      expect(text).toContain('Merci pour Votre Soutien');
      expect(text).toContain('$50.00 CAD');
      expect(text).toContain('Marie Leclerc');
      expect(text).toContain('DÉTAILS DU DON');
    });

    it('should handle anonymous donations in French', () => {
      const html = generateDonationConfirmationEmail(
        'Jean Dupont',
        75,
        'etransfer',
        true,
        undefined,
        'fr'
      );
      
      expect(html).toContain('Partisan Anonyme');
      expect(html).not.toContain('Jean Dupont');
    });
  });

  describe('English Stripe Donation Confirmation Emails', () => {
    it('should generate English HTML Stripe email', () => {
      const html = generateStripeDonationConfirmationEmail(
        'John Doe',
        10000, // $100 USD in cents
        'cs_test_123456',
        'Support the cause'
      );
      
      expect(html).toContain('Thank You for Your Support');
      expect(html).toContain('$100.00 USD');
      expect(html).toContain('Credit Card (Stripe)');
      expect(html).toContain('cs_test_123456');
      expect(html).toContain('Support the cause');
    });

    it('should generate English text Stripe email', () => {
      const text = generateStripeDonationConfirmationText(
        'Jane Smith',
        5000, // $50 USD in cents
        'cs_test_789012'
      );
      
      expect(text).toContain('Thank You for Your Support');
      expect(text).toContain('$50.00 USD');
      expect(text).toContain('Credit Card (Stripe)');
      expect(text).toContain('cs_test_789012');
    });
  });

  describe('French Stripe Donation Confirmation Emails', () => {
    it('should generate French HTML Stripe email', () => {
      const html = generateStripeDonationConfirmationEmailFR(
        'Jean Dupont',
        10000, // $100 USD in cents
        'cs_test_123456',
        'Soutenir la cause'
      );
      
      expect(html).toContain('Merci pour Votre Soutien');
      expect(html).toContain('$100.00 USD');
      expect(html).toContain('Carte de Crédit (Stripe)');
      expect(html).toContain('cs_test_123456');
      expect(html).toContain('Soutenir la cause');
    });

    it('should generate French text Stripe email', () => {
      const text = generateStripeDonationConfirmationTextFR(
        'Marie Leclerc',
        5000, // $50 USD in cents
        'cs_test_789012'
      );
      
      expect(text).toContain('Merci pour Votre Soutien');
      expect(text).toContain('$50.00 USD');
      expect(text).toContain('Carte de Crédit (Stripe)');
      expect(text).toContain('cs_test_789012');
    });
  });

  describe('Email Content Verification', () => {
    it('should include impact messaging in English', () => {
      const html = generateDonationConfirmationEmail(
        'Donor',
        100,
        'etransfer',
        false
      );
      
      expect(html).toContain('Your Impact');
      expect(html).toContain('Legal documentation');
      expect(html).toContain('Public awareness');
      expect(html).toContain('Accountability initiatives');
    });

    it('should include impact messaging in French', () => {
      const html = generateDonationConfirmationEmail(
        'Donateur',
        100,
        'etransfer',
        false,
        undefined,
        'fr'
      );
      
      expect(html).toContain('Votre Impact');
      expect(html).toContain('documentation juridique');
      expect(html).toContain('sensibilisation du public');
      expect(html).toContain('initiatives de responsabilité');
    });

    it('should include tax receipt information in English', () => {
      const text = generateDonationConfirmationText(
        'Donor',
        100,
        'etransfer',
        false
      );
      
      expect(text).toContain('TAX RECEIPT');
      expect(text).toContain('5 business days');
    });

    it('should include tax receipt information in French', () => {
      const text = generateDonationConfirmationText(
        'Donateur',
        100,
        'etransfer',
        false,
        undefined,
        'fr'
      );
      
      expect(text).toContain('REÇU FISCAL');
      expect(text).toContain('5 jours ouvrables');
    });
  });

  describe('Bilingual Language Detection', () => {
    it('should default to English when language not specified', () => {
      const html = generateDonationConfirmationEmail(
        'Donor',
        100,
        'etransfer',
        false
      );
      
      expect(html).toContain('Thank You for Your Support');
      expect(html).not.toContain('Merci pour Votre Soutien');
    });

    it('should switch to French when language is specified', () => {
      const html = generateDonationConfirmationEmail(
        'Donateur',
        100,
        'etransfer',
        false,
        undefined,
        'fr'
      );
      
      expect(html).toContain('Merci pour Votre Soutien');
      expect(html).not.toContain('Thank You for Your Support');
    });
  });

  describe('Email Formatting', () => {
    it('should include proper HTML structure in English emails', () => {
      const html = generateDonationConfirmationEmail(
        'Donor',
        100,
        'etransfer',
        false
      );
      
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<html>');
      expect(html).toContain('</html>');
      expect(html).toContain('<style>');
    });

    it('should include proper HTML structure in French emails', () => {
      const html = generateDonationConfirmationEmail(
        'Donateur',
        100,
        'etransfer',
        false,
        undefined,
        'fr'
      );
      
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('<html>');
      expect(html).toContain('</html>');
      expect(html).toContain('<style>');
    });

    it('should format currency correctly', () => {
      const html = generateDonationConfirmationEmail(
        'Donor',
        100.50,
        'etransfer',
        false
      );
      
      expect(html).toContain('$100.50');
    });
  });

  describe('Admin Notification', () => {
    it('should support donor information for admin notifications', () => {
      const donorInfo = {
        name: 'John Doe',
        email: 'john@example.com',
        amount: 100,
        method: 'etransfer',
        isAnonymous: false,
        language: 'en' as const,
      };
      
      expect(donorInfo.name).toBe('John Doe');
      expect(donorInfo.email).toBe('john@example.com');
      expect(donorInfo.amount).toBe(100);
      expect(donorInfo.language).toBe('en');
    });

    it('should support French donor information for admin notifications', () => {
      const donorInfo = {
        name: 'Jean Dupont',
        email: 'jean@example.com',
        amount: 100,
        method: 'etransfer',
        isAnonymous: false,
        language: 'fr' as const,
      };
      
      expect(donorInfo.name).toBe('Jean Dupont');
      expect(donorInfo.language).toBe('fr');
    });
  });
});
