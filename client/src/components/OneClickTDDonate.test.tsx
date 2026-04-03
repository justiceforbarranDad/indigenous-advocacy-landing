import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { OneClickTDDonate } from './OneClickTDDonate';

describe('OneClickTDDonate Component', () => {
  beforeEach(() => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(() => Promise.resolve()),
      },
    });
  });

  it('renders the donation component', () => {
    render(<OneClickTDDonate />);
    expect(screen.getByText('Make a Donation')).toBeInTheDocument();
    expect(screen.getByText('Support Justice for Barran - Every donation helps')).toBeInTheDocument();
  });

  it('renders all donation amount buttons', () => {
    render(<OneClickTDDonate />);
    expect(screen.getByText('CA$5')).toBeInTheDocument();
    expect(screen.getByText('CA$10')).toBeInTheDocument();
    expect(screen.getByText('CA$20')).toBeInTheDocument();
    expect(screen.getByText('CA$50')).toBeInTheDocument();
    expect(screen.getByText('CA$100')).toBeInTheDocument();
  });

  it('displays bank details', () => {
    render(<OneClickTDDonate />);
    expect(screen.getByText('justiceforbarran@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('4303')).toBeInTheDocument();
    expect(screen.getByText('6255007')).toBeInTheDocument();
  });

  it('highlights selected amount', () => {
    render(<OneClickTDDonate />);
    const button10 = screen.getByText('CA$10');
    fireEvent.click(button10);
    
    // Check if button has the selected styling
    expect(button10.closest('button')).toHaveClass('bg-red-700');
  });

  it('copies email to clipboard', async () => {
    render(<OneClickTDDonate />);
    const copyEmailButton = screen.getAllByTitle('Copy email')[0];
    fireEvent.click(copyEmailButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('justiceforbarran@gmail.com');
    });
  });

  it('copies branch to clipboard', async () => {
    render(<OneClickTDDonate />);
    const copyBranchButton = screen.getAllByTitle('Copy branch')[0];
    fireEvent.click(copyBranchButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('4303');
    });
  });

  it('copies account to clipboard', async () => {
    render(<OneClickTDDonate />);
    const copyAccountButton = screen.getAllByTitle('Copy account')[0];
    fireEvent.click(copyAccountButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('6255007');
    });
  });

  it('copies all details to clipboard', async () => {
    render(<OneClickTDDonate />);
    const copyAllButton = screen.getByText('Copy All Details');
    fireEvent.click(copyAllButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
      const callArg = (navigator.clipboard.writeText as any).mock.calls[0][0];
      expect(callArg).toContain('TD Bank e-Transfer');
      expect(callArg).toContain('4303');
      expect(callArg).toContain('6255007');
      expect(callArg).toContain('justiceforbarran@gmail.com');
    });
  });

  it('shows copy confirmation', async () => {
    render(<OneClickTDDonate />);
    const copyEmailButton = screen.getAllByTitle('Copy email')[0];
    fireEvent.click(copyEmailButton);
    
    await waitFor(() => {
      expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
    });
  });

  it('displays instructions for donation', () => {
    render(<OneClickTDDonate />);
    expect(screen.getByText('How to Donate:')).toBeInTheDocument();
    expect(screen.getByText(/Select an amount above/)).toBeInTheDocument();
    expect(screen.getByText(/Copy the email address/)).toBeInTheDocument();
    expect(screen.getByText(/Open your bank's e-Transfer app/)).toBeInTheDocument();
    expect(screen.getByText(/Send e-Transfer to/)).toBeInTheDocument();
    expect(screen.getByText(/Your donation arrives instantly/)).toBeInTheDocument();
  });

  it('displays 100% donation message', () => {
    render(<OneClickTDDonate />);
    expect(screen.getByText(/100% of donations go directly to legal defense/)).toBeInTheDocument();
  });
});
