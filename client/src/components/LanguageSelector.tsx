import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ht', name: 'Créole Haïtien' },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
  };

  return (
    <div className="language-selector">
      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`language-button ${i18n.language === lang.code ? 'active' : ''}`}
            title={lang.name}
          >
            <span className="name">{lang.name}</span>
          </button>
        ))}
      </div>

      <style>{`
        .language-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .language-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border: 2px solid #ddd;
          border-radius: 6px;
          background: white;
          color: #333;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .language-button:hover {
          border-color: #dc2626;
          background: #fff5f5;
          transform: translateY(-2px);
        }

        .language-button.active {
          background: #dc2626;
          color: white;
          border-color: #dc2626;
          box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
        }

        .name {
          display: inline;
        }

        @media (max-width: 480px) {
          .language-button {
            padding: 6px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
