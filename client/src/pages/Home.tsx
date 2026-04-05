import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BookCoverEnhanced } from '@/components/BookCoverEnhanced';
import { BookInterface26Pages } from '@/components/BookInterface26Pages';

export default function Home() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [bookOpened, setBookOpened] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr' | 'ht'>('en');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {!bookOpened ? (
        <BookCoverEnhanced
          selectedLanguage={selectedLanguage}
          onEnter={() => setBookOpened(true)}
        />
      ) : (
        <BookInterface26Pages />
      )}
    </div>
  );
}
