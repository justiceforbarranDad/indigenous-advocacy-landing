import { useState, useRef, useEffect } from 'react';
import { Volume2, Pause, Play, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ReadAloudProps {
  content: string;
  sectionId?: string;
  className?: string;
}

export function ReadAloud({ content, sectionId, className = '' }: ReadAloudProps) {
  const { i18n } = useTranslation();
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Map i18n language codes to speech synthesis language codes
  const getLanguageCode = () => {
    switch (i18n.language) {
      case 'fr':
        return 'fr-FR';
      case 'ht':
        return 'ht-HT'; // Haitian Creole
      default:
        return 'en-US';
    }
  };

  const handleRead = () => {
    if (isReading) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
      return;
    }

    // Clean the content: remove extra whitespace and HTML
    const cleanContent = content
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanContent);
    utterance.lang = getLanguageCode();
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsReading(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsReading(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsReading(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.cancel(); // Cancel any previous speech
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={handleRead}
        className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded bg-forest-green text-white hover:bg-forest-green/90 transition-colors"
        title={i18n.language === 'fr' ? 'Lire cette section' : i18n.language === 'ht' ? 'Li seksyon sa a' : 'Read this section'}
      >
        {isReading ? (
          <>
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
            {isPaused ? (i18n.language === 'fr' ? 'Reprendre' : i18n.language === 'ht' ? 'Kontinye' : 'Resume') : (i18n.language === 'fr' ? 'Pause' : i18n.language === 'ht' ? 'Poz' : 'Pause')}
          </>
        ) : (
          <>
            <Volume2 size={16} />
            {i18n.language === 'fr' ? 'Lire' : i18n.language === 'ht' ? 'Li' : 'Read'}
          </>
        )}
      </button>

      {isReading && (
        <button
          onClick={handleStop}
          className="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium rounded bg-amber-orange text-white hover:bg-amber-light transition-colors"
          title={i18n.language === 'fr' ? 'Arrêter' : i18n.language === 'ht' ? 'Sispann' : 'Stop'}
        >
          <X size={16} />
          {i18n.language === 'fr' ? 'Arrêter' : i18n.language === 'ht' ? 'Sispann' : 'Stop'}
        </button>
      )}
    </div>
  );
}
