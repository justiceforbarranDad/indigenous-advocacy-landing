import { TrendingUp, Users, Heart, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DashboardMetric {
  label: string;
  value: number;
  target: number;
  icon: React.ReactNode;
  color: string;
  unit: string;
}

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    donations: 0,
    petitionSignatures: 0,
    supporters: 0,
    mediaReaches: 0
  });

  const [displayMetrics, setDisplayMetrics] = useState({
    donations: 0,
    petitionSignatures: 0,
    supporters: 0,
    mediaReaches: 0
  });

  // Simulate real-time data updates
  useEffect(() => {
    // Initial data
    const initialMetrics = {
      donations: 47500,
      petitionSignatures: 28340,
      supporters: 15200,
      mediaReaches: 2450000
    };

    setMetrics(initialMetrics);
    setDisplayMetrics(initialMetrics);

    // Simulate real-time updates every 5 seconds
    const interval = setInterval(() => {
      setMetrics(prev => ({
        donations: prev.donations + Math.floor(Math.random() * 500),
        petitionSignatures: prev.petitionSignatures + Math.floor(Math.random() * 100),
        supporters: prev.supporters + Math.floor(Math.random() * 50),
        mediaReaches: prev.mediaReaches + Math.floor(Math.random() * 50000)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate counter changes
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDisplayMetrics(prev => ({
        donations: Math.floor(prev.donations + (metrics.donations - prev.donations) * 0.1),
        petitionSignatures: Math.floor(prev.petitionSignatures + (metrics.petitionSignatures - prev.petitionSignatures) * 0.1),
        supporters: Math.floor(prev.supporters + (metrics.supporters - prev.supporters) * 0.1),
        mediaReaches: Math.floor(prev.mediaReaches + (metrics.mediaReaches - prev.mediaReaches) * 0.1)
      }));
    }, 100);

    return () => clearInterval(animationInterval);
  }, [metrics]);

  const dashboardMetrics: DashboardMetric[] = [
    {
      label: 'Total Donations',
      value: displayMetrics.donations,
      target: 100000,
      icon: <Heart size={32} />,
      color: 'bg-black',
      unit: '$'
    },
    {
      label: 'Petition Signatures',
      value: displayMetrics.petitionSignatures,
      target: 50000,
      icon: <Users size={32} />,
      color: 'bg-black',
      unit: ''
    },
    {
      label: 'Active Supporters',
      value: displayMetrics.supporters,
      target: 25000,
      icon: <TrendingUp size={32} />,
      color: 'bg-black',
      unit: ''
    },
    {
      label: 'Media Reach',
      value: displayMetrics.mediaReaches,
      target: 5000000,
      icon: <Target size={32} />,
      color: 'bg-black',
      unit: ''
    }
  ];

  const getProgressPercentage = (value: number, target: number) => {
    return Math.min((value / target) * 100, 100);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Georgia, serif' }}>
      {/* MASTHEAD */}
      <div className="w-full bg-black text-white py-8 px-4 border-b-8 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>
            CAMPAIGN DASHBOARD
          </h1>
          <p className="text-lg md:text-xl mb-2">Real-Time Metrics</p>
          <p className="text-sm tracking-widest">Justice for Barran - Live Campaign Tracking</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* INTRODUCTION */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Campaign Progress</h2>
          <p className="text-lg leading-relaxed">
            Every donation, signature, and supporter brings us closer to justice for Barran and systemic change. Watch our campaign grow in real-time.
          </p>
        </div>

        {/* METRICS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {dashboardMetrics.map((metric, idx) => {
            const progress = getProgressPercentage(metric.value, metric.target);
            return (
              <div key={idx} className="border-4 border-black p-8 bg-white">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black">{metric.label}</h3>
                  <div className={`${metric.color} text-white p-3 rounded`}>
                    {metric.icon}
                  </div>
                </div>

                {/* COUNTER */}
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-black mb-2">
                    {metric.unit}{formatNumber(metric.value)}
                  </p>
                  <p className="text-sm text-gray-700 font-bold uppercase tracking-widest">
                    of {metric.unit}{formatNumber(metric.target)} goal
                  </p>
                </div>

                {/* PROGRESS BAR */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 border-2 border-black h-8">
                    <div
                      className="bg-black h-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: `${progress}%` }}
                    >
                      {progress > 15 && (
                        <span className="text-white font-bold text-sm">{Math.round(progress)}%</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* MILESTONE MESSAGE */}
                <p className="text-sm text-gray-700 font-bold">
                  {progress >= 100
                    ? '🎉 GOAL REACHED!'
                    : progress >= 75
                    ? '⚡ Almost there!'
                    : progress >= 50
                    ? '💪 Halfway to goal'
                    : '🚀 Building momentum'}
                </p>
              </div>
            );
          })}
        </div>

        {/* RECENT ACTIVITY */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">Just now</p>
              <p className="text-lg font-bold">New donation received: $250</p>
              <p className="text-sm text-gray-700">Supporting legal defense fund</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">2 minutes ago</p>
              <p className="text-lg font-bold">5 new petition signatures</p>
              <p className="text-sm text-gray-700">Growing support for systemic change</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">5 minutes ago</p>
              <p className="text-lg font-bold">Media coverage: 50K impressions</p>
              <p className="text-sm text-gray-700">Story reaching new audiences</p>
            </div>

            <div className="border-l-4 border-black pl-6 py-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-1">10 minutes ago</p>
              <p className="text-lg font-bold">New supporter joined campaign</p>
              <p className="text-sm text-gray-700">Volunteer for accountability efforts</p>
            </div>
          </div>
        </div>

        {/* CAMPAIGN MILESTONES */}
        <div className="mb-8 pb-8 border-b-4 border-black">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Campaign Milestones</h2>
          
          <div className="space-y-4">
            {[
              { milestone: '1,000 Signatures', status: 'completed', date: 'March 1, 2026' },
              { milestone: '5,000 Signatures', status: 'completed', date: 'March 10, 2026' },
              { milestone: '10,000 Signatures', status: 'completed', date: 'March 15, 2026' },
              { milestone: '25,000 Signatures', status: 'in-progress', date: 'Target: March 31, 2026' },
              { milestone: '50,000 Signatures', status: 'upcoming', date: 'Target: April 30, 2026' },
              { milestone: '$50,000 Raised', status: 'in-progress', date: 'Current: $47,500' },
              { milestone: '$100,000 Raised', status: 'upcoming', date: 'Target: May 31, 2026' },
              { milestone: 'Government Inquiry Launched', status: 'upcoming', date: 'Demanding action' }
            ].map((item, idx) => (
              <div key={idx} className="border-2 border-black p-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-black">{item.milestone}</p>
                  <p className="text-sm text-gray-700">{item.date}</p>
                </div>
                <div className="text-right">
                  {item.status === 'completed' && (
                    <span className="bg-black text-white px-4 py-2 font-bold text-sm">✓ COMPLETED</span>
                  )}
                  {item.status === 'in-progress' && (
                    <span className="bg-black text-white px-4 py-2 font-bold text-sm">⚡ IN PROGRESS</span>
                  )}
                  {item.status === 'upcoming' && (
                    <span className="border-2 border-black px-4 py-2 font-bold text-sm">UPCOMING</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-black text-white p-8 border-4 border-black text-center">
          <h2 className="text-3xl font-black mb-4">Help Us Reach Our Goals</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Every contribution matters. Donate, sign the petition, or share your story to amplify the call for justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Donate Now
            </a>
            <a href="/petition" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Sign Petition
            </a>
            <a href="/share-story" className="bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-colors">
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
