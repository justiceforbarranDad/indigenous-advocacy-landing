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
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* REAL Centennial Flame Memorial - Parliament Buildings Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/parliament-composite-hero-no-snow_4c8f3d2e.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* REAL Canadian Flag - Top Center */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/J4feixvIOLMK_5821732f.jpg"
          alt="Canadian Flag"
          className="w-72 h-44 object-contain drop-shadow-2xl"
        />
      </div>

      {/* REAL Totem Pole - Left Side */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/totem-pole-only_e082be28.png"
          alt="Totem Pole"
          className="h-96 object-contain drop-shadow-lg"
        />
      </div>

      {/* Main Content - Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        {!flameExtinguished ? (
          <div className="text-center">
            {/* Clickable Flame Area */}
            <button
              onClick={handleFlameClick}
              className="mb-12 w-40 h-40 rounded-full bg-gradient-to-b from-yellow-200 via-orange-400 to-red-700 hover:from-yellow-100 hover:via-orange-300 hover:to-red-600 transition-all duration-200 shadow-2xl border-4 border-yellow-300 focus:outline-none cursor-pointer"
              style={{
                boxShadow: '0 0 80px rgba(255, 150, 0, 1), inset 0 0 50px rgba(255, 200, 0, 0.8), 0 0 120px rgba(255, 100, 0, 0.6)'
              }}
            />

            {/* Main Text */}
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-300 drop-shadow-2xl mb-6 max-w-4xl">
              Click the Flame to Extinguish It
            </h1>

            {/* Blood Counter */}
            <div className="text-4xl text-yellow-200 drop-shadow-lg mb-6 font-bold">
              Blood: {Math.round(bloodLevel)}/{BLOOD_NEEDED}
            </div>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-100 drop-shadow-lg">
              14 stab wounds. 14 seconds. Remember Barran.
            </p>
          </div>
        ) : (
          <div className="text-center">
            {/* After Flame Extinguished */}
            <h1 className="text-6xl md:text-7xl font-bold text-yellow-300 drop-shadow-2xl mb-8 max-w-4xl">
              The Flame is Extinguished
            </h1>

            <button
              onClick={() => navigate('/book')}
              className="px-16 py-8 bg-yellow-400 text-black font-bold text-3xl rounded-lg hover:bg-yellow-300 transition-all duration-200 drop-shadow-2xl shadow-2xl"
            >
              Click to Enter the Book
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
