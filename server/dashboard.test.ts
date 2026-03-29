import { describe, it, expect, beforeEach } from 'vitest';

describe('Dashboard Metrics', () => {
  let metrics: {
    donations: number;
    petitionSignatures: number;
    supporters: number;
    mediaReaches: number;
  };

  beforeEach(() => {
    metrics = {
      donations: 47500,
      petitionSignatures: 28340,
      supporters: 15200,
      mediaReaches: 2450000
    };
  });

  it('should initialize with correct donation amount', () => {
    expect(metrics.donations).toBe(47500);
  });

  it('should initialize with correct petition signatures', () => {
    expect(metrics.petitionSignatures).toBe(28340);
  });

  it('should initialize with correct supporter count', () => {
    expect(metrics.supporters).toBe(15200);
  });

  it('should initialize with correct media reach', () => {
    expect(metrics.mediaReaches).toBe(2450000);
  });

  it('should calculate progress percentage correctly', () => {
    const getProgressPercentage = (value: number, target: number) => {
      return Math.min((value / target) * 100, 100);
    };

    const donationProgress = getProgressPercentage(metrics.donations, 100000);
    expect(donationProgress).toBe(47.5);

    const petitionProgress = getProgressPercentage(metrics.petitionSignatures, 50000);
    expect(petitionProgress).toBe(56.68);
  });

  it('should format numbers correctly', () => {
    const formatNumber = (num: number) => {
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num.toString();
    };

    expect(formatNumber(47500)).toBe('47.5K');
    expect(formatNumber(2450000)).toBe('2.5M');
    expect(formatNumber(100)).toBe('100');
  });

  it('should simulate metric updates', () => {
    const updateMetrics = () => {
      metrics.donations += Math.floor(Math.random() * 500);
      metrics.petitionSignatures += Math.floor(Math.random() * 100);
      metrics.supporters += Math.floor(Math.random() * 50);
      metrics.mediaReaches += Math.floor(Math.random() * 50000);
    };

    const initialDonations = metrics.donations;
    updateMetrics();
    
    expect(metrics.donations).toBeGreaterThanOrEqual(initialDonations);
    expect(metrics.donations).toBeLessThanOrEqual(initialDonations + 500);
  });

  it('should determine milestone status correctly', () => {
    const getMilestoneStatus = (value: number, target: number) => {
      if (value >= target) return 'completed';
      if (value >= target * 0.5) return 'in-progress';
      return 'upcoming';
    };

    expect(getMilestoneStatus(47500, 100000)).toBe('upcoming');
    expect(getMilestoneStatus(100000, 100000)).toBe('completed');
    expect(getMilestoneStatus(20000, 100000)).toBe('upcoming');
  });

  it('should display milestone messages correctly', () => {
    const getMilestoneMessage = (progress: number) => {
      if (progress >= 100) return '🎉 GOAL REACHED!';
      if (progress >= 75) return '⚡ Almost there!';
      if (progress >= 50) return '💪 Halfway to goal';
      return '🚀 Building momentum';
    };

    expect(getMilestoneMessage(100)).toBe('🎉 GOAL REACHED!');
    expect(getMilestoneMessage(80)).toBe('⚡ Almost there!');
    expect(getMilestoneMessage(60)).toBe('💪 Halfway to goal');
    expect(getMilestoneMessage(30)).toBe('🚀 Building momentum');
  });
});
