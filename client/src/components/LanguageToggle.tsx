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

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
    localStorage.setItem('language', lang);
  };

  const languages = [
    { code: 'en', label: '🇬🇧 English', activeClass: 'bg-red-600 text-white hover:bg-red-700' },
    { code: 'fr', label: '🇫🇷 Français', activeClass: 'bg-blue-600 text-white hover:bg-blue-700' },
    { code: 'ht', label: '🇭🇹 Kreyòl', activeClass: 'bg-green-600 text-white hover:bg-green-700' },
  ];

  return (
    <div className="flex gap-1.5">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => toggleLanguage(lang.code)}
          variant={currentLang === lang.code ? 'default' : 'outline'}
          className={`px-3 py-1.5 rounded font-semibold transition-all text-xs sm:text-sm ${
            currentLang === lang.code
              ? lang.activeClass
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
