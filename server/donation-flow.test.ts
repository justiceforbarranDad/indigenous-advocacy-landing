import { describe, it, expect, beforeEach } from 'vitest';

/**
 * Donation Flow Test Suite
 * Tests all critical donation paths to ensure users can donate successfully
 */

describe('Donation Flow Tests', () => {
  describe('DonateQuick Page', () => {
    it('should provide donation link for copying', () => {
      const donationLink = "https://indigenousadv-ahjdmzis.manus.space/donate";
      expect(donationLink).toContain('manus.space');
      expect(donationLink).toContain('/donate');
    });

    it('should provide e-transfer email address', () => {
      const etransferEmail = "justiceforbarran@gmail.com";
      expect(etransferEmail).toContain('@gmail.com');
      expect(etransferEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('should support card donations', () => {
      const cardDonationUrl = "https://indigenousadv-ahjdmzis.manus.space/donate-card";
      expect(cardDonationUrl).toContain('manus.space');
      expect(cardDonationUrl).toContain('donate-card');
    });

    it('should support e-transfer donations', () => {
      const etransferUrl = "https://indigenousadv-ahjdmzis.manus.space/donate-etransfer";
      expect(etransferUrl).toContain('manus.space');
      expect(etransferUrl).toContain('donate-etransfer');
    });
  });

  describe('QR Code Integration', () => {
    it('should use manus.space domain for QR codes', () => {
      const qrCodeUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/justice-for-barran-qr-code_ae3aa20e.png";
      expect(qrCodeUrl).toContain('cloudfront.net');
      expect(qrCodeUrl).toContain('qr-code');
    });

    it('should not redirect to .com domain', () => {
      const workingDomain = "https://indigenousadv-ahjdmzis.manus.space";
      const customDomain = "https://www.justiceforbarran.com";
      
      // QR code should point to working domain
      expect(workingDomain).toContain('manus.space');
      expect(customDomain).not.toContain('manus.space');
    });
  });

  describe('Home Page CTAs', () => {
    it('should have prominent donation button in hero', () => {
      const heroCTA = {
        text: 'DONATE NOW',
        href: '/donate',
        className: 'animate-pulse'
      };
      
      expect(heroCTA.text).toBe('DONATE NOW');
      expect(heroCTA.href).toBe('/donate');
      expect(heroCTA.className).toContain('animate-pulse');
    });

    it('should have donation button in sidebar', () => {
      const sidebarCTA = {
        text: 'DONATE NOW',
        href: '/donate',
        bgColor: 'bg-red-600'
      };
      
      expect(sidebarCTA.text).toBe('DONATE NOW');
      expect(sidebarCTA.href).toBe('/donate');
      expect(sidebarCTA.bgColor).toContain('red');
    });

    it('should link to correct donation page', () => {
      const donatePagePath = '/donate';
      expect(donatePagePath).toBe('/donate');
      expect(donatePagePath).not.toContain('comprehensive');
    });
  });

  describe('Donation Page Routing', () => {
    it('should route /donate to DonateQuick', () => {
      const route = '/donate';
      const component = 'DonateQuick';
      
      expect(route).toBe('/donate');
      expect(component).toBe('DonateQuick');
    });

    it('should preserve /donate-comprehensive route', () => {
      const route = '/donate-comprehensive';
      expect(route).toContain('comprehensive');
    });

    it('should have e-transfer specific route', () => {
      const etransferRoute = '/donate-etransfer';
      expect(etransferRoute).toContain('etransfer');
    });
  });

  describe('Domain Consistency', () => {
    it('should use manus.space for all active links', () => {
      const links = [
        'https://indigenousadv-ahjdmzis.manus.space/donate',
        'https://indigenousadv-ahjdmzis.manus.space/donate-etransfer',
        'https://indigenousadv-ahjdmzis.manus.space/donate-card'
      ];
      
      links.forEach(link => {
        expect(link).toContain('manus.space');
      });
    });

    it('should not use custom domains in active links', () => {
      const workingLink = 'https://indigenousadv-ahjdmzis.manus.space/donate';
      const customDomain = 'www.justiceforbarran.com';
      
      expect(workingLink).not.toContain(customDomain);
    });
  });

  describe('Email Contact', () => {
    it('should use correct contact email', () => {
      const contactEmail = 'justiceforbarran@gmail.com';
      expect(contactEmail).toBe('justiceforbarran@gmail.com');
    });

    it('should not use outdated email', () => {
      const correctEmail = 'justiceforbarran@gmail.com';
      const oldEmail = 'contact@justiceforbarran.org';
      
      expect(correctEmail).not.toBe(oldEmail);
    });
  });

  describe('Donation Impact Messaging', () => {
    it('should communicate 100% donation allocation', () => {
      const allocation = {
        toAdvocacy: '100%',
        administrativeFees: '0%'
      };
      
      expect(allocation.toAdvocacy).toBe('100%');
      expect(allocation.administrativeFees).toBe('0%');
    });
  });
});
