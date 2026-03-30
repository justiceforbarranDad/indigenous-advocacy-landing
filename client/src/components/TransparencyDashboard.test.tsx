import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TransparencyDashboard } from './TransparencyDashboard';

describe('TransparencyDashboard', () => {
  it('renders the transparency dashboard component', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Complete Transparency & Accountability')).toBeInTheDocument();
  });

  it('displays all transparency labels', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('100% Verified')).toBeInTheDocument();
    expect(screen.getByText('Publicly Audited')).toBeInTheDocument();
    expect(screen.getByText('Full Documentation')).toBeInTheDocument();
  });

  it('displays verified donations badge', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('✓ Verified Donations')).toBeInTheDocument();
    expect(screen.getByText(/All donations are verified through official channels/)).toBeInTheDocument();
  });

  it('displays zero hidden fees disclaimer', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('💰 Zero Hidden Fees')).toBeInTheDocument();
    expect(screen.getByText(/100% of donations go to legal defense and advocacy/)).toBeInTheDocument();
  });

  it('displays accountability commitment', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('📊 Full Accountability')).toBeInTheDocument();
    expect(screen.getByText(/Every dollar is tracked and allocated transparently/)).toBeInTheDocument();
  });

  it('displays public audit trail badge', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('🔍 Public Audit Trail')).toBeInTheDocument();
    expect(screen.getByText(/All transactions are publicly visible and auditable/)).toBeInTheDocument();
  });

  it('displays allocation breakdown section', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('How Donations Are Allocated')).toBeInTheDocument();
    expect(screen.getByText('Legal Representation')).toBeInTheDocument();
    expect(screen.getByText('Media & Outreach')).toBeInTheDocument();
    expect(screen.getByText('Advocacy & Documentation')).toBeInTheDocument();
    expect(screen.getByText('Administrative Overhead')).toBeInTheDocument();
  });

  it('displays allocation amounts correctly', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('$35,000')).toBeInTheDocument();
    expect(screen.getByText('$7,500')).toBeInTheDocument();
    expect(screen.getByText('$4,000')).toBeInTheDocument();
    expect(screen.getByText('$1,000')).toBeInTheDocument();
  });

  it('displays allocation percentages correctly', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('73.68%')).toBeInTheDocument();
    expect(screen.getByText('15.79%')).toBeInTheDocument();
    expect(screen.getByText('8.42%')).toBeInTheDocument();
    expect(screen.getByText('2.11%')).toBeInTheDocument();
  });

  it('displays real-time transaction log section', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Real-Time Transaction Log')).toBeInTheDocument();
    expect(screen.getByText('Export CSV')).toBeInTheDocument();
  });

  it('displays transaction log headers', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Reference')).toBeInTheDocument();
  });

  it('displays transaction entries', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Individual Donation')).toBeInTheDocument();
    expect(screen.getByText('Legal Representation')).toBeInTheDocument();
    expect(screen.getByText('Media & Outreach')).toBeInTheDocument();
  });

  it('displays verification status for transactions', () => {
    render(<TransparencyDashboard />);
    const verifiedElements = screen.getAllByText('Verified');
    expect(verifiedElements.length).toBeGreaterThan(0);
  });

  it('displays third-party verification badges section', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Third-Party Verification & Audits')).toBeInTheDocument();
    expect(screen.getByText('✓ Verified Non-Profit Status')).toBeInTheDocument();
    expect(screen.getByText('✓ Independent Audit Pending')).toBeInTheDocument();
    expect(screen.getByText('✓ Legal Compliance')).toBeInTheDocument();
    expect(screen.getByText('✓ Public Accountability')).toBeInTheDocument();
  });

  it('displays verification badge statuses', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Status: VERIFIED')).toBeInTheDocument();
    expect(screen.getByText('Status: SCHEDULED - Q2 2026')).toBeInTheDocument();
    expect(screen.getByText('Status: COMPLIANT')).toBeInTheDocument();
    expect(screen.getByText('Status: ACTIVE')).toBeInTheDocument();
  });

  it('displays commitment statement', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Our Commitment to You')).toBeInTheDocument();
    expect(screen.getByText(/No False Claims:/)).toBeInTheDocument();
    expect(screen.getByText(/Complete Transparency:/)).toBeInTheDocument();
    expect(screen.getByText(/Zero Hidden Fees:/)).toBeInTheDocument();
    expect(screen.getByText(/Accountability First:/)).toBeInTheDocument();
    expect(screen.getByText(/Justice for Barran:/)).toBeInTheDocument();
  });

  it('displays summary totals', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Total Raised')).toBeInTheDocument();
    expect(screen.getByText('Allocated')).toBeInTheDocument();
    expect(screen.getByText('Unallocated')).toBeInTheDocument();
    expect(screen.getByText('$47,500')).toBeInTheDocument();
  });

  it('displays full transaction history note', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText(/Full Transaction History:/)).toBeInTheDocument();
    expect(screen.getByText(/justiceforbarran@gmail.com/)).toBeInTheDocument();
  });

  it('renders allocation breakdown descriptions', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Direct legal defense and representation costs')).toBeInTheDocument();
    expect(screen.getByText('Podcast production, social media, and public awareness')).toBeInTheDocument();
    expect(screen.getByText('Research, documentation, and systemic change initiatives')).toBeInTheDocument();
    expect(screen.getByText('Minimal overhead: domain, hosting, and essential services')).toBeInTheDocument();
  });

  it('displays non-profit verification details', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Campaign operates under verified non-profit principles with transparent fund allocation.')).toBeInTheDocument();
  });

  it('displays independent audit information', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Third-party financial audit scheduled for Q2 2026 to verify all allocations and expenses.')).toBeInTheDocument();
  });

  it('displays legal compliance information', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('All donations handled in compliance with Canadian tax law and charitable giving regulations.')).toBeInTheDocument();
  });

  it('displays public accountability information', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('All financial records are publicly available and subject to community scrutiny.')).toBeInTheDocument();
  });

  it('renders all transaction types', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('Donation')).toBeInTheDocument();
    expect(screen.getByText('Allocation')).toBeInTheDocument();
    expect(screen.getByText('Expense')).toBeInTheDocument();
  });

  it('displays transaction reference numbers', () => {
    render(<TransparencyDashboard />);
    expect(screen.getByText('DON-2026-03-28-001')).toBeInTheDocument();
    expect(screen.getByText('INV-LAW-2026-03-27')).toBeInTheDocument();
    expect(screen.getByText('EXP-MEDIA-2026-03-26')).toBeInTheDocument();
  });
});
