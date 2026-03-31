import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageToggle } from './LanguageToggle';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

describe('LanguageToggle Component', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  it('renders English and French buttons', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );

    expect(screen.getByText(/🇬🇧 English/)).toBeInTheDocument();
    expect(screen.getByText(/🇫🇷 Français/)).toBeInTheDocument();
  });

  it('highlights the current language button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );

    const englishButton = screen.getByText(/🇬🇧 English/).closest('button');
    expect(englishButton).toHaveClass('bg-red-600');
  });

  it('changes language when French button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );

    const frenchButton = screen.getByText(/🇫🇷 Français/).closest('button');
    await user.click(frenchButton!);

    expect(i18n.language).toBe('fr');
  });

  it('changes language when English button is clicked', async () => {
    const user = userEvent.setup();
    i18n.changeLanguage('fr');
    
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );

    const englishButton = screen.getByText(/🇬🇧 English/).closest('button');
    await user.click(englishButton!);

    expect(i18n.language).toBe('en');
  });

  it('displays correct styling for active button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );

    const englishButton = screen.getByText(/🇬🇧 English/).closest('button');
    expect(englishButton).toHaveClass('bg-red-600');
    expect(englishButton).toHaveClass('text-white');
  });

  it('displays correct styling for inactive button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggle />
      </I18nextProvider>
    );

    const frenchButton = screen.getByText(/🇫🇷 Français/).closest('button');
    expect(frenchButton).toHaveClass('bg-gray-200');
    expect(frenchButton).toHaveClass('text-gray-800');
  });
});
