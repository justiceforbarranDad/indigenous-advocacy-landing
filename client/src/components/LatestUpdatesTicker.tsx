import { AlertCircle, TrendingUp, Heart, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Update {
  id: string;
  title: string;
  date: string;
  icon: 'alert' | 'trending' | 'heart' | 'document';
  color: 'red' | 'blue' | 'green' | 'amber';
}

export function LatestUpdatesTicker() {
  const updates: Update[] = [
    {
      id: '1',
      title: 'UN Letter Submitted - March 27, 2026',
      date: 'Yesterday',
      icon: 'alert',
      color: 'red'
    },
    {
      id: '2',
      title: 'Petition Signatures: 10,847+ and growing',
      date: 'Today',
      icon: 'trending',
      color: 'green'
    },
    {
      id: '3',
      title: 'Barran Turns 20 - A New Chapter Begins',
      date: 'Today',
      icon: 'heart',
      color: 'amber'
    },
    {
      id: '4',
      title: 'French Podcast Series Complete - 5 Episodes',
      date: '2 days ago',
      icon: 'document',
      color: 'blue'
    },
    {
      id: '5',
      title: 'Survey: 1,200+ Similar Cases Documented',
      date: '1 week ago',
      icon: 'trending',
      color: 'green'
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
    red: 'bg-red-700 text-white',
    blue: 'bg-blue-700 text-white',
    green: 'bg-green-700 text-white',
    amber: 'bg-amber-700 text-white'
  };

  const iconMap = {
    alert: AlertCircle,
    trending: TrendingUp,
    heart: Heart,
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
              🔴 LATEST UPDATE
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
