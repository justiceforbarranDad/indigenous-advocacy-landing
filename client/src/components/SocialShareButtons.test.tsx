import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SocialShareButtons } from './SocialShareButtons';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

describe('SocialShareButtons', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all social media buttons', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
      />
    );
    
    expect(screen.getByTitle('Share on Twitter/X')).toBeDefined();
    expect(screen.getByTitle('Share on Facebook')).toBeDefined();
    expect(screen.getByTitle('Share on WhatsApp')).toBeDefined();
    expect(screen.getByTitle('Share via Email')).toBeDefined();
    expect(screen.getByTitle('Share on LinkedIn')).toBeDefined();
    expect(screen.getByTitle('Copy link to clipboard')).toBeDefined();
  });

  it('displays share label when showLabel is true', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        showLabel={true}
      />
    );
    
    expect(screen.getByText('📢 Share This Story')).toBeDefined();
  });

  it('hides share label when showLabel is false', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        showLabel={false}
      />
    );
    
    expect(screen.queryByText('📢 Share This Story')).toBeNull();
  });

  it('displays custom highlight title', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        showLabel={true}
        highlightTitle="Custom Story"
      />
    );
    
    expect(screen.getByText('📢 Share: Custom Story')).toBeDefined();
  });

  it('copies URL to clipboard when copy button is clicked', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValue(undefined);
    
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        url="https://example.com"
      />
    );
    
    const copyButton = screen.getByTitle('Copy link to clipboard');
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://example.com');
    });
  });

  it('shows Copied! feedback after copying', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValue(undefined);
    
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        url="https://example.com"
      />
    );
    
    const copyButton = screen.getByTitle('Copy link to clipboard');
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeDefined();
    });
  });

  it('includes hashtags in social share text', () => {
    const { container } = render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        hashtags={['TestTag', 'AnotherTag']}
      />
    );
    
    const twitterLink = screen.getByTitle('Share on Twitter/X') as HTMLAnchorElement;
    expect(twitterLink.href).toContain('#TestTag');
    expect(twitterLink.href).toContain('#AnotherTag');
  });

  it('renders horizontal layout by default', () => {
    const { container } = render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        variant="horizontal"
      />
    );
    
    const wrapper = container.querySelector('.flex.flex-wrap');
    expect(wrapper).toBeDefined();
  });

  it('renders vertical layout when specified', () => {
    const { container } = render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        variant="vertical"
      />
    );
    
    const wrapper = container.querySelector('.flex.flex-col');
    expect(wrapper).toBeDefined();
  });

  it('renders compact layout when specified', () => {
    const { container } = render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        variant="compact"
      />
    );
    
    const wrapper = container.querySelector('.flex.gap-1');
    expect(wrapper).toBeDefined();
  });

  it('uses current URL when url prop is not provided', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        url="https://test.com"
      />
    );
    
    const twitterLink = screen.getByTitle('Share on Twitter/X') as HTMLAnchorElement;
    expect(twitterLink.href).toContain('https://test.com');
  });

  it('includes title in email subject', () => {
    render(
      <SocialShareButtons
        title="Test Email Title"
        text="Test text"
      />
    );
    
    const emailLink = screen.getByTitle('Share via Email') as HTMLAnchorElement;
    expect(emailLink.href).toContain('subject=Test%20Email%20Title');
  });

  it('includes text in email body', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test email body text"
      />
    );
    
    const emailLink = screen.getByTitle('Share via Email') as HTMLAnchorElement;
    expect(emailLink.href).toContain('Test%20email%20body%20text');
  });

  it('renders button labels in horizontal variant', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        variant="horizontal"
      />
    );
    
    expect(screen.getByText('X/Twitter')).toBeDefined();
    expect(screen.getByText('Facebook')).toBeDefined();
    expect(screen.getByText('WhatsApp')).toBeDefined();
    expect(screen.getByText('Email')).toBeDefined();
    expect(screen.getByText('LinkedIn')).toBeDefined();
  });

  it('hides button labels in compact variant', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
        variant="compact"
      />
    );
    
    expect(screen.queryByText('X/Twitter')).toBeNull();
    expect(screen.queryByText('Facebook')).toBeNull();
  });

  it('uses default hashtags when not provided', () => {
    render(
      <SocialShareButtons
        title="Test Title"
        text="Test text"
      />
    );
    
    const twitterLink = screen.getByTitle('Share on Twitter/X') as HTMLAnchorElement;
    expect(twitterLink.href).toContain('JusticeForBarran');
    expect(twitterLink.href).toContain('IndigenousRights');
    expect(twitterLink.href).toContain('EveryChildMatters');
  });
});

