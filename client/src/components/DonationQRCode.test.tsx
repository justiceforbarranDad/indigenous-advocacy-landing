import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DonationQRCode } from './DonationQRCode';

describe('DonationQRCode', () => {
  it('renders QR code component', () => {
    render(<DonationQRCode />);
    expect(screen.getByText(/Point camera to donate instantly/i)).toBeInTheDocument();
  });

  it('displays donation instructions', () => {
    render(<DonationQRCode />);
    expect(screen.getByText(/Choose \$5, \$10, \$20, \$50, \$100 or custom amount/i)).toBeInTheDocument();
  });

  it('shows bank deposit confirmation', () => {
    render(<DonationQRCode />);
    expect(screen.getByText(/Donations go directly to your bank/i)).toBeInTheDocument();
  });

  it('renders SVG QR code', () => {
    const { container } = render(<DonationQRCode />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });
});
