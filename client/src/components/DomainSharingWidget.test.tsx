import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DomainSharingWidget } from './DomainSharingWidget';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

// Mock window.open
global.window.open = vi.fn();

describe('DomainSharingWidget', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all three domain options', () => {
    render(<DomainSharingWidget />);
    
    expect(screen.getByText('Canada (.ca)')).toBeDefined();
    expect(screen.getByText('International (.com)')).toBeDefined();
    expect(screen.getByText('Organization (.org)')).toBeDefined();
  });

  it('displays correct domain URLs', () => {
    render(<DomainSharingWidget />);
    
    expect(screen.getByText('https://www.justiceforbarran.ca')).toBeDefined();
    expect(screen.getByText('https://www.justiceforbarran.com')).toBeDefined();
    expect(screen.getByText('https://homepage.justiceforbarran.org')).toBeDefined();
  });

  it('shows title and description when showLabel is true', () => {
    render(<DomainSharingWidget showLabel={true} />);
    
    expect(screen.getByText('Share the Right Domain')).toBeDefined();
    expect(screen.getByText('Choose your preferred domain to share with supporters')).toBeDefined();
  });

  it('hides title and description when showLabel is false', () => {
    render(<DomainSharingWidget showLabel={false} />);
    
    expect(screen.queryByText('Share the Right Domain')).toBeNull();
  });

  it('copies URL to clipboard when Copy button is clicked', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValue(undefined);
    
    render(<DomainSharingWidget />);
    
    const copyButtons = screen.getAllByText('Copy');
    fireEvent.click(copyButtons[0]);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://www.justiceforbarran.ca');
    });
  });

  it('shows Copied! feedback after copying', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValue(undefined);
    
    render(<DomainSharingWidget />);
    
    const copyButtons = screen.getAllByText('Copy');
    fireEvent.click(copyButtons[0]);
    
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeDefined();
    });
  });

  it('renders Share buttons for each domain', () => {
    render(<DomainSharingWidget />);
    
    const shareButtons = screen.getAllByText('Share');
    expect(shareButtons).toHaveLength(3);
  });

  it('opens Twitter share when Share button is clicked', async () => {
    render(<DomainSharingWidget />);
    
    const shareButtons = screen.getAllByText('Share');
    fireEvent.click(shareButtons[0]);
    
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('twitter.com/intent/tweet'),
        '_blank'
      );
    });
  });

  it('includes all three domains in Tweet All Links button', async () => {
    render(<DomainSharingWidget />);
    
    const tweetAllButton = screen.getByText('Tweet All Links');
    fireEvent.click(tweetAllButton);
    
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('twitter.com/intent/tweet'),
        '_blank'
      );
      const callArgs = (window.open as any).mock.calls[0][0];
      expect(callArgs).toContain('justiceforbarran.ca');
      expect(callArgs).toContain('justiceforbarran.com');
      expect(callArgs).toContain('justiceforbarran.org');
    });
  });

  it('renders custom title and description', () => {
    const customTitle = 'Custom Title';
    const customDescription = 'Custom Description';
    
    render(
      <DomainSharingWidget
        title={customTitle}
        description={customDescription}
        showLabel={true}
      />
    );
    
    expect(screen.getByText(customTitle)).toBeDefined();
    expect(screen.getByText(customDescription)).toBeDefined();
  });

  it('displays domain descriptions', () => {
    render(<DomainSharingWidget />);
    
    expect(screen.getByText('Primary Canadian domain')).toBeDefined();
    expect(screen.getByText('Global reach')).toBeDefined();
    expect(screen.getByText('Non-profit focused')).toBeDefined();
  });

  it('renders quick share buttons section', () => {
    render(<DomainSharingWidget />);
    
    expect(screen.getByText('📱 Share All Domains')).toBeDefined();
    expect(screen.getByText('Tweet All Links')).toBeDefined();
    expect(screen.getByText('Share on Facebook')).toBeDefined();
    expect(screen.getByText('Share on WhatsApp')).toBeDefined();
  });
});
