import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    // Update URL if using URL-based routing
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fr)/, '');
    window.history.pushState({}, '', `/${lang}${pathWithoutLang}`);
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => toggleLanguage('en')}
        variant={i18n.language === 'en' ? 'default' : 'outline'}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          i18n.language === 'en'
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        🇬🇧 English
      </Button>
      <Button
        onClick={() => toggleLanguage('fr')}
        variant={i18n.language === 'fr' ? 'default' : 'outline'}
        className={`px-4 py-2 rounded font-semibold transition-all ${
          i18n.language === 'fr'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        🇫🇷 Français
      </Button>
    </div>
  );
}
