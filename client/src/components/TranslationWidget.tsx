import { useState } from 'react';
import { Globe, Copy, Download } from 'lucide-react';

interface TranslationWidgetProps {
  content: string;
  title: string;
}

export function TranslationWidget({ content, title }: TranslationWidgetProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translatedContent, setTranslatedContent] = useState(content);
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ];

  const handleTranslate = async (langCode: string) => {
    if (langCode === 'en') {
      setTranslatedContent(content);
      setSelectedLanguage(langCode);
      return;
    }

    setIsTranslating(true);
    try {
      // Using a simple translation approach - in production, would use Google Translate API or similar
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: content,
          targetLanguage: langCode,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setTranslatedContent(data.translatedText);
        setSelectedLanguage(langCode);
      } else {
        // Fallback: show original content if translation fails
        setTranslatedContent(content);
        setSelectedLanguage(langCode);
      }
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedContent(content);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([translatedContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title}_${selectedLanguage}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
      {/* Language Selection */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Globe size={24} className="text-blue-600" />
          <span className="font-bold text-blue-600">Translate:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleTranslate(lang.code)}
              disabled={isTranslating}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedLanguage === lang.code
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border-2 border-blue-300 hover:bg-blue-100'
              } disabled:opacity-50`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          <Copy size={18} />
          {copied ? 'Copied!' : 'Copy Translation'}
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          <Download size={18} />
          Download
        </button>
      </div>

      {/* Translation Status */}
      {isTranslating && (
        <div className="text-center text-blue-600 font-semibold mb-4">
          Translating to {languages.find((l) => l.code === selectedLanguage)?.name}...
        </div>
      )}

      {/* Language Info */}
      <div className="text-sm text-gray-600 italic">
        <p>📢 Translated to: <strong>{languages.find((l) => l.code === selectedLanguage)?.name}</strong></p>
        <p>💡 Tip: Copy the translated text and paste it into your complaint submission</p>
      </div>
    </div>
  );
}
