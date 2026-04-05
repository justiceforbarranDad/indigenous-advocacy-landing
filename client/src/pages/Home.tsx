import { useState } from 'react';
import { AnimatedFrontCover } from '@/components/AnimatedFrontCover';
import { BookInterface26Pages } from '@/components/BookInterface26Pages';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'cover' | 'book'>('cover');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr' | 'ht'>('en');

  if (currentPage === 'cover') {
    return (
      <AnimatedFrontCover
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        onEnter={() => setCurrentPage('book')}
      />
    );
  }

  return (
    <BookInterface26Pages />
  );
}
