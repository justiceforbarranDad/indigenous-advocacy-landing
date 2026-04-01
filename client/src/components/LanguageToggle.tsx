import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>(i18n.language || 'en');

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const toggleLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => toggleLanguage('en')}
        variant={currentLang === 'en' ? 'default' : 'outline'}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          currentLang === 'en'
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        🇬🇧 English
      </Button>
      <Button
        onClick={() => toggleLanguage('fr')}
        variant={currentLang === 'fr' ? 'default' : 'outline'}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          currentLang === 'fr'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        🇫🇷 Français
      </Button>
    </div>
  );
}
