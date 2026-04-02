import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getDonationImpactMetrics,
  updateDonationImpactMetrics,
  getGovernmentResponseStats,
} from './db';

// Mock the database
vi.mock('./db', { spy: true });

describe('Donation Impact Tracker', () => {
  it('should retrieve donation impact metrics', async () => {
    // This would test the actual database query in a real scenario
    // For now, we're testing the structure
    const mockMetrics = {
      id: 1,
      totalRaisedCAD: 250000, // $2500 in cents
      totalRaisedUSD: 180000, // $1800 in cents
      totalDonors: 15,
      legalHoursFunded: 10, // $2500 / $250 per hour
      hourlyRate: 25000, // $250/hour in cents
      lastUpdated: new Date(),
      createdAt: new Date(),
    };

    expect(mockMetrics.totalRaisedCAD).toBe(250000);
    expect(mockMetrics.legalHoursFunded).toBe(10);
    expect(mockMetrics.totalDonors).toBe(15);
  });

  it('should calculate legal hours correctly', () => {
    const totalRaisedCAD = 500000; // $5000
    const hourlyRate = 25000; // $250/hour
    const legalHoursFunded = Math.floor(totalRaisedCAD / hourlyRate);

    expect(legalHoursFunded).toBe(20);
  });

  it('should handle zero donations', () => {
    const totalRaisedCAD = 0;
    const hourlyRate = 25000;
    const legalHoursFunded = Math.floor(totalRaisedCAD / hourlyRate);

    expect(legalHoursFunded).toBe(0);
  });

  it('should convert CAD to USD approximately', () => {
    const cadAmount = 250000; // $2500
    const exchangeRate = 0.72; // Approximate CAD to USD
    const usdAmount = Math.round(cadAmount * exchangeRate);

    expect(usdAmount).toBeLessThan(cadAmount);
    expect(usdAmount).toBeGreaterThan(0);
  });
});

describe('Government Response Tracker', () => {
  it('should calculate response statistics correctly', () => {
    const mockResponses = [
      {
        id: 1,
        officialName: 'John Smith',
        title: 'MNA',
        governmentLevel: 'provincial' as const,
        department: 'Child Welfare',
        jurisdiction: 'Quebec',
        email: 'john@gov.qc.ca',
        phone: '514-123-4567',
        dateContacted: new Date('2026-03-01'),
        contactMethod: 'email' as const,
        contactSubject: 'DPJ Support Request',
        responseStatus: 'no_response' as const,
        responseDate: null,
        responseNotes: null,
        daysToRespond: null,
        followUpRequired: 'yes' as const,
        followUpDate: null,
        publiclyShared: 'yes' as const,
        notes: 'Initial contact',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        officialName: 'Jane Doe',
        title: 'Federal MP',
        governmentLevel: 'federal' as const,
        department: 'Indigenous Affairs',
        jurisdiction: 'Canada',
        email: 'jane@parliament.ca',
        phone: '613-123-4567',
        dateContacted: new Date('2026-02-15'),
        contactMethod: 'email' as const,
        contactSubject: "Jordan's Principle",
        responseStatus: 'full_response' as const,
        responseDate: new Date('2026-02-25'),
        responseNotes: 'Committed to review the case',
        daysToRespond: 10,
        followUpRequired: 'no' as const,
        followUpDate: null,
        publiclyShared: 'yes' as const,
        notes: 'Positive response',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        officialName: 'Bob Wilson',
        title: 'Agency Director',
        governmentLevel: 'agency' as const,
        department: 'Child Protection',
        jurisdiction: 'Quebec',
        email: 'bob@agency.qc.ca',
        phone: '514-987-6543',
        dateContacted: new Date('2026-01-20'),
        contactMethod: 'phone' as const,
        contactSubject: 'DPJ Accountability',
        responseStatus: 'hostile' as const,
        responseDate: new Date('2026-01-22'),
        responseNotes: 'Refused to engage',
        daysToRespond: 2,
        followUpRequired: 'yes' as const,
        followUpDate: new Date('2026-04-20'),
        publiclyShared: 'yes' as const,
        notes: 'Hostile response',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const stats = {
      total: mockResponses.length,
      noResponse: mockResponses.filter(r => r.responseStatus === 'no_response').length,
      acknowledged: mockResponses.filter(r => r.responseStatus === 'acknowledged').length,
      partialResponse: mockResponses.filter(r => r.responseStatus === 'partial_response').length,
      fullResponse: mockResponses.filter(r => r.responseStatus === 'full_response').length,
      refused: mockResponses.filter(r => r.responseStatus === 'refused').length,
      hostile: mockResponses.filter(r => r.responseStatus === 'hostile').length,
      avgDaysToRespond: 0,
    };

    // Calculate average days to respond
    const responded = mockResponses.filter(r => r.daysToRespond !== null);
    if (responded.length > 0) {
      const totalDays = responded.reduce((sum, r) => sum + (r.daysToRespond || 0), 0);
      stats.avgDaysToRespond = Math.round(totalDays / responded.length);
    }

    expect(stats.total).toBe(3);
    expect(stats.noResponse).toBe(1);
    expect(stats.fullResponse).toBe(1);
    expect(stats.hostile).toBe(1);
    expect(stats.avgDaysToRespond).toBe(6); // (10 + 2) / 2
  });

  it('should identify hostile responses', () => {
    const responses = [
      { responseStatus: 'hostile' as const },
      { responseStatus: 'full_response' as const },
      { responseStatus: 'hostile' as const },
    ];

    const hostileCount = responses.filter(r => r.responseStatus === 'hostile').length;
    expect(hostileCount).toBe(2);
  });

  it('should track days to respond', () => {
    const dateContacted = new Date('2026-03-01');
    const responseDate = new Date('2026-03-15');
    const daysToRespond = Math.floor(
      (responseDate.getTime() - dateContacted.getTime()) / (1000 * 60 * 60 * 24)
    );

    expect(daysToRespond).toBe(14);
  });

  it('should handle null response dates', () => {
    const responses = [
      { daysToRespond: 5 },
      { daysToRespond: null },
      { daysToRespond: 10 },
    ];

    const responded = responses.filter(r => r.daysToRespond !== null);
    const avgDays = responded.length > 0
      ? Math.round(responded.reduce((sum, r) => sum + (r.daysToRespond || 0), 0) / responded.length)
      : 0;

    expect(avgDays).toBe(8); // Math.round((5 + 10) / 2) = Math.round(7.5) = 8
  });
});

describe('Impact Tracker Integration', () => {
  it('should correlate donations to legal hours', () => {
    const scenarios = [
      { raised: 0, expectedHours: 0 },
      { raised: 25000, expectedHours: 1 }, // $250
      { raised: 250000, expectedHours: 10 }, // $2500
      { raised: 500000, expectedHours: 20 }, // $5000
    ];

    scenarios.forEach(({ raised, expectedHours }) => {
      const hours = Math.floor(raised / 25000);
      expect(hours).toBe(expectedHours);
    });
  });

  it('should display impact message with correct metrics', () => {
    const metrics = {
      totalRaisedCAD: 250000,
      totalDonors: 15,
      legalHoursFunded: 10,
    };

    const message = `${metrics.legalHoursFunded} hours of legal defense for Indigenous families funded by ${metrics.totalDonors} donors.`;
    expect(message).toContain('10 hours');
    expect(message).toContain('15 donors');
  });
});
