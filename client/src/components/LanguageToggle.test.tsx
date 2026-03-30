import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageToggle } from './LanguageToggle';

describe('LanguageToggle Component', () => {
  it('renders English and French buttons', () => {
    const mockOnChange = vi.fn();
    render(
      <LanguageToggle
        currentLanguage="english"
        onLanguageChange={mockOnChange}
      />
    );

    expect(screen.getByText(/🇬🇧 English/)).toBeInTheDocument();
    expect(screen.getByText(/🇫🇷 Français/)).toBeInTheDocument();
  });

  it('highlights the current language button', () => {
    const mockOnChange = vi.fn();
    const { rerender } = render(
      <LanguageToggle
        currentLanguage="english"
        onLanguageChange={mockOnChange}
      />
    );

    const englishButton = screen.getByText(/🇬🇧 English/).closest('button');
    expect(englishButton).toHaveClass('bg-red-600');

    rerender(
      <LanguageToggle
        currentLanguage="french"
        onLanguageChange={mockOnChange}
      />
    );

    const frenchButton = screen.getByText(/🇫🇷 Français/).closest('button');
    expect(frenchButton).toHaveClass('bg-blue-600');
  });

  it('calls onLanguageChange when English button is clicked', () => {
    const mockOnChange = vi.fn();
    render(
      <LanguageToggle
        currentLanguage="french"
        onLanguageChange={mockOnChange}
      />
    );

    const englishButton = screen.getByText(/🇬🇧 English/).closest('button');
    fireEvent.click(englishButton!);

    expect(mockOnChange).toHaveBeenCalledWith('english');
  });

  it('calls onLanguageChange when French button is clicked', () => {
    const mockOnChange = vi.fn();
    render(
      <LanguageToggle
        currentLanguage="english"
        onLanguageChange={mockOnChange}
      />
    );

    const frenchButton = screen.getByText(/🇫🇷 Français/).closest('button');
    fireEvent.click(frenchButton!);

    expect(mockOnChange).toHaveBeenCalledWith('french');
  });

  it('displays correct styling for inactive button', () => {
    const mockOnChange = vi.fn();
    render(
      <LanguageToggle
        currentLanguage="english"
        onLanguageChange={mockOnChange}
      />
    );

    const frenchButton = screen.getByText(/🇫🇷 Français/).closest('button');
    expect(frenchButton).toHaveClass('bg-gray-200');
    expect(frenchButton).toHaveClass('text-gray-800');
  });
});
