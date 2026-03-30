import { useState } from 'react';
import { Button } from '@/components/ui/button';

export interface LanguageToggleProps {
  currentLanguage: 'english' | 'french';
  onLanguageChange: (language: 'english' | 'french') => void;
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex gap-2 mb-4">
      <Button
        onClick={() => onLanguageChange('english')}
        variant={currentLanguage === 'english' ? 'default' : 'outline'}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          currentLanguage === 'english'
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        🇬🇧 English
      </Button>
      <Button
        onClick={() => onLanguageChange('french')}
        variant={currentLanguage === 'french' ? 'default' : 'outline'}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          currentLanguage === 'french'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        🇫🇷 Français
      </Button>
    </div>
  );
}
