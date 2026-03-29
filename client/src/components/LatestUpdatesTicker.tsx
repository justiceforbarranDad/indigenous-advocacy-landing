import { AlertCircle, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Update {
  id: string;
  title: string;
  date: string;
  icon: 'alert' | 'document';
  color: 'red' | 'blue';
}

export function LatestUpdatesTicker() {
  const updates: Update[] = [
    {
      id: '1',
      title: 'UN Letter Submitted - March 27, 2026',
      date: 'Verified',
      icon: 'alert',
      color: 'red'
    },
    {
      id: '2',
      title: 'Five Years of Systemic Abandonment Documented (2021-2026)',
      date: 'Verified',
      icon: 'document',
      color: 'blue'
    },
    {
      id: '3',
      title: 'Advocacy Campaign Active - Demanding Accountability',
      date: 'Ongoing',
      icon: 'alert',
      color: 'red'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [updates.length]);

  const current = updates[currentIndex];
  const colorMap = {
    red: 'bg-black text-white',
    blue: 'bg-black text-white'
  };

  const iconMap = {
    alert: AlertCircle,
    document: FileText
  };

  const Icon = iconMap[current.icon];

  return (
    <div className={`w-full ${colorMap[current.color]} py-4 px-4 border-b-4 border-black shadow-lg`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <Icon size={24} className="flex-shrink-0 animate-pulse" />
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-1 opacity-90">
              ✓ VERIFIED UPDATE
            </p>
            <p className="text-base md:text-lg font-bold">
              {current.title}
            </p>
            <p className="text-xs opacity-75 mt-1">
              {current.date}
            </p>
          </div>
          <div className="flex-shrink-0 text-xs font-bold opacity-75">
            {currentIndex + 1} / {updates.length}
          </div>
        </div>
      </div>
    </div>
  );
}
