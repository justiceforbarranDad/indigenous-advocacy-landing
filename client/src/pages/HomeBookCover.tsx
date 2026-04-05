import { useState } from 'react';
import { useLocation } from 'wouter';

export default function HomeBookCover() {
  const [, navigate] = useLocation();
  const [bloodLevel, setBloodLevel] = useState(0);
  const [flameExtinguished, setFlameExtinguished] = useState(false);
  const BLOOD_NEEDED = 840;

  const handleFlameClick = () => {
    if (flameExtinguished) {
      navigate('/book');
    } else {
      const newBlood = Math.min(bloodLevel + 60, BLOOD_NEEDED);
      setBloodLevel(newBlood);
      if (newBlood >= BLOOD_NEEDED) {
        setFlameExtinguished(true);
      }
    }
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden cursor-pointer"
      onClick={handleFlameClick}
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/parliament-composite-hero-no-snow_4c8f3d2e.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* That's it - just the image */}
    </div>
  );
}
