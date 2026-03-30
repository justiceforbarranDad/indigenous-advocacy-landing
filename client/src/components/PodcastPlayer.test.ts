import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PodcastPlayer } from './PodcastPlayer';

describe('PodcastPlayer Component', () => {
  const mockProps = {
    title: 'Test Episode',
    description: 'Test Description',
    audioUrl: 'https://example.com/audio.mp3',
    duration: 900,
    language: 'EN',
    episodeNumber: 1,
    date: 'March 2026',
    speechifyUrl: 'https://speechify.app.link/test',
    transcript: 'Test transcript content',
  };

  describe('Rendering', () => {
    it('should render the podcast player with title and description', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      expect(screen.getByText('Test Episode')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    it('should display episode metadata', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      expect(screen.getByText('Episode 1')).toBeInTheDocument();
      expect(screen.getByText('March 2026')).toBeInTheDocument();
      expect(screen.getByText('EN')).toBeInTheDocument();
    });

    it('should render all control buttons', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /mute/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /show transcript/i })).toBeInTheDocument();
    });

    it('should render Speechify link when provided', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      const speechifyLink = screen.getByRole('link', { name: /speechify/i });
      expect(speechifyLink).toBeInTheDocument();
      expect(speechifyLink).toHaveAttribute('href', mockProps.speechifyUrl);
      expect(speechifyLink).toHaveAttribute('target', '_blank');
    });

    it('should render share button when onShare callback is provided', () => {
      const mockOnShare = vi.fn();
      render(<PodcastPlayer {...mockProps} onShare={mockOnShare} />);
      
      expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
    });
  });

  describe('Transcript Feature', () => {
    it('should initially hide transcript content', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      expect(screen.queryByText('Transcript & Translation')).not.toBeInTheDocument();
    });

    it('should show transcript when button is clicked', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      const showButton = screen.getByRole('button', { name: /show transcript/i });
      fireEvent.click(showButton);
      
      expect(screen.getByText('Transcript & Translation')).toBeInTheDocument();
      expect(screen.getByText('Test transcript content')).toBeInTheDocument();
    });

    it('should toggle transcript visibility', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      const toggleButton = screen.getByRole('button', { name: /show transcript/i });
      
      // Show transcript
      fireEvent.click(toggleButton);
      expect(screen.getByText('Test transcript content')).toBeInTheDocument();
      
      // Hide transcript
      fireEvent.click(toggleButton);
      expect(screen.queryByText('Test transcript content')).not.toBeInTheDocument();
    });

    it('should not render transcript button when transcript is not provided', () => {
      const propsWithoutTranscript = { ...mockProps, transcript: undefined };
      render(<PodcastPlayer {...propsWithoutTranscript} />);
      
      expect(screen.queryByRole('button', { name: /show transcript/i })).not.toBeInTheDocument();
    });
  });

  describe('Audio Controls', () => {
    it('should have audio element with correct src', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      const audioElement = document.querySelector('audio');
      expect(audioElement).toHaveAttribute('src', mockProps.audioUrl);
    });

    it('should have progress and volume input elements', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      const inputs = screen.getAllByRole('slider');
      expect(inputs.length).toBeGreaterThanOrEqual(2); // At least progress and volume
    });

    it('should have playback speed selector', () => {
      render(<PodcastPlayer {...mockProps} />);
      
      const speedSelect = screen.getByRole('combobox');
      expect(speedSelect).toBeInTheDocument();
      expect(speedSelect).toHaveValue('1');
    });
  });

  describe('Compact Mode', () => {
    it('should render compact version when compact prop is true', () => {
      render(<PodcastPlayer {...mockProps} compact={true} />);
      
      // Compact mode should still have basic controls
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
      expect(screen.getByText('Test Episode')).toBeInTheDocument();
    });
  });

  describe('Share Functionality', () => {
    it('should call onShare callback when share button is clicked', () => {
      const mockOnShare = vi.fn();
      render(<PodcastPlayer {...mockProps} onShare={mockOnShare} />);
      
      const shareButton = screen.getByRole('button', { name: /share/i });
      fireEvent.click(shareButton);
      
      expect(mockOnShare).toHaveBeenCalledTimes(1);
    });
  });

  describe('Podcast Data Integration', () => {
    it('should accept all required podcast episode properties', () => {
      const episodeProps = {
        title: 'Dix dollars : l\'abandon d\'une victime',
        description: 'Ten dollars per day...',
        audioUrl: 'https://example.com/episode1.mp3',
        duration: 918,
        language: 'French / English',
        episodeNumber: 1,
        date: 'March 2026',
        speechifyUrl: 'https://speechify.app.link/sIQ3mkmPU1b',
        transcript: '[INTRODUCTION]\n\nHost Noah: Welcome...',
      };
      
      render(<PodcastPlayer {...episodeProps} />);
      
      expect(screen.getByText('Dix dollars : l\'abandon d\'une victime')).toBeInTheDocument();
      expect(screen.getByText('French / English')).toBeInTheDocument();
      expect(screen.getByText('Episode 1')).toBeInTheDocument();
    });
  });
});
