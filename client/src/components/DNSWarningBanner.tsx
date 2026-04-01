import { AlertCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DNSWarningBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show banner - website is live and working
    setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-yellow-400 border-b-4 border-yellow-600 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-start gap-4">
        <AlertCircle className="text-yellow-700 flex-shrink-0 mt-1" size={24} />
        
        <div className="flex-1">
          <h3 className="font-bold text-yellow-900 mb-2">
            ✓ WEBSITE IS LIVE AND SECURE
          </h3>
          <p className="text-yellow-800 mb-3">
            You're on the official Justice for Barran website. All donations and information are secure.
          </p>
          <p className="text-sm text-yellow-700 mb-3">
            Website: https://indigenousadv-ahjdmzis.manus.space/
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-yellow-700 hover:text-yellow-900 mt-1"
          aria-label="Dismiss banner"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
