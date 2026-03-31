import React from 'react';
import { CheckCircle, Target } from 'lucide-react';

interface MilestoneTrackerProps {
  currentAmount: number;
  goalAmount: number;
  language: 'en' | 'fr';
  showDetails?: boolean;
}

export const MilestoneTracker: React.FC<MilestoneTrackerProps> = ({
  currentAmount,
  goalAmount,
  language,
  showDetails = true
}) => {
  const milestones = [50000, 100000, 250000, 500000];
  const percentage = Math.round((currentAmount / goalAmount) * 100);
  
  const labels = {
    en: {
      progress: 'Campaign Progress',
      raised: 'Raised',
      goal: 'Goal',
      of: 'of',
      milestone: 'Milestone',
      reached: 'Reached',
      next: 'Next Target',
    },
    fr: {
      progress: 'Progrès de la campagne',
      raised: 'Collecté',
      goal: 'Objectif',
      of: 'sur',
      milestone: 'Étape',
      reached: 'Atteint',
      next: 'Prochain objectif',
    }
  };

  const lang = labels[language];

  const getNextMilestone = () => {
    for (const milestone of milestones) {
      if (currentAmount < milestone) {
        return milestone;
      }
    }
    return null;
  };

  const nextMilestone = getNextMilestone();
  const remainingToNext = nextMilestone ? nextMilestone - currentAmount : 0;

  return (
    <div className="w-full bg-gradient-to-r from-amber-50 to-orange-50 border-4 border-amber-600 rounded-lg p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-amber-600" />
          <h3 className="text-2xl font-bold text-amber-900">{lang.progress}</h3>
        </div>

        {/* Main Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-lg font-bold text-amber-900">
              ${(currentAmount / 1000).toFixed(0)}k {lang.of} ${(goalAmount / 1000).toFixed(0)}k
            </span>
            <span className="text-2xl font-black text-amber-600">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden border-2 border-amber-600">
            <div
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            >
              {percentage > 10 && (
                <span className="text-white font-bold text-sm">{percentage}%</span>
              )}
            </div>
          </div>
        </div>

        {/* Milestones */}
        {showDetails && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {milestones.map((milestone, idx) => {
              const isReached = currentAmount >= milestone;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    isReached
                      ? 'bg-green-100 border-green-600'
                      : 'bg-gray-100 border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {isReached && <CheckCircle className="w-5 h-5 text-green-600" />}
                    <span className="font-bold text-sm">
                      ${(milestone / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <span className={`text-xs font-semibold ${isReached ? 'text-green-700' : 'text-gray-600'}`}>
                    {isReached ? lang.reached : lang.milestone}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Next Target */}
        {nextMilestone && (
          <div className="bg-white border-2 border-amber-600 rounded-lg p-4 text-center">
            <p className="text-sm font-semibold text-gray-600 mb-1">{lang.next}</p>
            <p className="text-2xl font-black text-amber-600">
              ${(nextMilestone / 1000).toFixed(0)}k
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {language === 'en' 
                ? `${(remainingToNext / 1000).toFixed(0)}k to go`
                : `${(remainingToNext / 1000).toFixed(0)}k restant`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MilestoneTracker;
