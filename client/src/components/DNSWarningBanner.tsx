import { AlertCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DNSWarningBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide banner on justiceforbarran.com domain - never show it there
    if (window.location.hostname === 'www.justiceforbarran.com' || window.location.hostname === 'justiceforbarran.com') {
      setIsVisible(false);
      return;
    }

    // On Manus domain, always show the banner (don't dismiss it)
    if (window.location.hostname.includes('manus.space')) {
      setIsVisible(true);
      return;
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('dns-banner-dismissed', 'true');
    localStorage.setItem('dns-banner-dismiss-time', new Date().toISOString());
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-yellow-400 border-b-4 border-yellow-600 px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-start gap-4">
        <AlertCircle className="text-yellow-700 flex-shrink-0 mt-1" size={24} />
        
        <div className="flex-1">
          <h3 className="font-bold text-yellow-900 mb-2">
            ⚠️ TEMPORARY NOTICE - PLEASE READ
          </h3>
          <p className="text-yellow-800 mb-3">
            Our website is LIVE and secure. If you're seeing an error on justiceforbarran.com, 
            that's a normal DNS propagation delay (resolves in 24-48 hours). 
            <strong> You're currently on the REAL, SAFE website.</strong>
          </p>
          <p className="text-sm text-yellow-700 mb-3">
            This banner will automatically disappear once DNS propagation is complete. 
            We're removing it to prevent confusion. Thank you for your patience.
          </p>
          
          <div className="flex gap-3">
            <a
              href="https://indigenousadv-ahjdmzis.manus.space"
              className="inline-block bg-yellow-700 text-white px-4 py-2 font-bold hover:bg-yellow-800 rounded"
            >
              ✓ Confirm You're on the Real Site
            </a>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-yellow-700 hover:text-yellow-900 mt-1"
          aria-label="Dismiss banner"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
