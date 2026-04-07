import { useParams, useLocation } from 'wouter';
import Home from './Home';

export default function Book() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const [, navigate] = useLocation();

  // Map language codes to i18n language names
  const languageMap: { [key: string]: string } = {
    'en': 'en',
    'fr': 'fr',
    'ht': 'ht'
  };

  const selectedLanguage = languageMap[lang] || 'en';

  // Set the language in localStorage so Home component uses it
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferredLanguage', selectedLanguage);
  }

  return (
    <div>
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-50 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all"
      >
        ← Back to Front Cover
      </button>

      {/* Display Home component with selected language */}
      <Home />
    </div>
  );
}
