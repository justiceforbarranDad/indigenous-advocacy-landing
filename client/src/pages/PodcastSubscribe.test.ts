import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PodcastSubscribe from './PodcastSubscribe';

describe('PodcastSubscribe Component', () => {
  beforeEach(() => {
    // Reset window.open mock
    vi.clearAllMocks();
  });

  it('renders the podcast subscribe page with title', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText('Subscribe to the Podcast')).toBeInTheDocument();
  });

  it('displays the podcast description', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText(/Listen to the Justice for Barran podcast/i)).toBeInTheDocument();
  });

  it('renders stats cards with episode count and platforms', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText('Episodes')).toBeInTheDocument();
    expect(screen.getByText('Platforms')).toBeInTheDocument();
    expect(screen.getByText('Share')).toBeInTheDocument();
  });

  it('displays all podcast platforms section', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText('Listen On Your Favorite Platform')).toBeInTheDocument();
    expect(screen.getByText('Apple Podcasts')).toBeInTheDocument();
    expect(screen.getByText('Spotify')).toBeInTheDocument();
    expect(screen.getByText('Google Podcasts')).toBeInTheDocument();
  });

  it('renders email subscription form', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText('Email Subscription')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
  });

  it('displays frequency selection dropdown', () => {
    render(<PodcastSubscribe />);
    const frequencySelect = screen.getByDisplayValue('All Episodes (as they release)');
    expect(frequencySelect).toBeInTheDocument();
  });

  it('handles email subscription with valid email', async () => {
    const user = userEvent.setup();
    render(<PodcastSubscribe />);

    const emailInput = screen.getByPlaceholderText('your@email.com');
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText(/Successfully subscribed/i)).toBeInTheDocument();
    });
  });

  it('shows error message when email is empty', async () => {
    const user = userEvent.setup();
    render(<PodcastSubscribe />);

    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter your email address')).toBeInTheDocument();
    });
  });

  it('changes frequency selection', async () => {
    const user = userEvent.setup();
    render(<PodcastSubscribe />);

    const frequencySelect = screen.getByDisplayValue('All Episodes (as they release)');
    await user.selectOptions(frequencySelect, 'weekly');

    expect(frequencySelect).toHaveValue('weekly');
  });

  it('clears email input after successful subscription', async () => {
    const user = userEvent.setup();
    render(<PodcastSubscribe />);

    const emailInput = screen.getByPlaceholderText('your@email.com') as HTMLInputElement;
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(emailInput.value).toBe('');
    });
  });

  it('renders share section', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText('Share the Podcast')).toBeInTheDocument();
    expect(screen.getByText('Help spread the message of justice and accountability')).toBeInTheDocument();
  });

  it('renders share button', () => {
    render(<PodcastSubscribe />);
    const shareButton = screen.getByRole('button', { name: /Share This Podcast/i });
    expect(shareButton).toBeInTheDocument();
  });

  it('opens platform links in new window when clicked', async () => {
    const user = userEvent.setup();
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<PodcastSubscribe />);

    const appleButton = screen.getByRole('button', { name: /Apple Podcasts/i });
    await user.click(appleButton);

    expect(windowOpenSpy).toHaveBeenCalledWith(
      expect.stringContaining('podcasts.apple.com'),
      '_blank',
      'noopener,noreferrer'
    );

    windowOpenSpy.mockRestore();
  });

  it('displays all platform names', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText('Apple Podcasts')).toBeInTheDocument();
    expect(screen.getByText('Spotify')).toBeInTheDocument();
    expect(screen.getByText('Google Podcasts')).toBeInTheDocument();
    expect(screen.getByText('Amazon Music')).toBeInTheDocument();
    expect(screen.getByText('iHeartRadio')).toBeInTheDocument();
    expect(screen.getByText('Podcast Addict')).toBeInTheDocument();
    expect(screen.getByText('Castbox')).toBeInTheDocument();
    expect(screen.getByText('RSS Feed')).toBeInTheDocument();
  });

  it('displays platform descriptions', () => {
    render(<PodcastSubscribe />);
    expect(screen.getByText(/Listen on Apple Podcasts/i)).toBeInTheDocument();
    expect(screen.getByText(/Stream on Spotify/i)).toBeInTheDocument();
  });

  it('shows loading state while subscribing', async () => {
    const user = userEvent.setup();
    render(<PodcastSubscribe />);

    const emailInput = screen.getByPlaceholderText('your@email.com');
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(subscribeButton);

    // Button should show loading text during the promise
    expect(screen.getByRole('button', { name: /Subscribing/i })).toBeInTheDocument();
  });

  it('resets success message after 5 seconds', async () => {
    const user = userEvent.setup();
    vi.useFakeTimers();

    render(<PodcastSubscribe />);

    const emailInput = screen.getByPlaceholderText('your@email.com');
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText(/Successfully subscribed/i)).toBeInTheDocument();
    });

    // Fast-forward time by 5 seconds
    vi.advanceTimersByTime(5000);

    await waitFor(() => {
      expect(screen.queryByText(/Successfully subscribed/i)).not.toBeInTheDocument();
    });

    vi.useRealTimers();
  });

  it('includes correct CSS classes for styling', () => {
    const { container } = render(<PodcastSubscribe />);
    
    // Check for gradient background
    const mainDiv = container.querySelector('.bg-gradient-to-b');
    expect(mainDiv).toBeInTheDocument();
  });
});
