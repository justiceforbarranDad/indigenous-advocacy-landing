import { useEffect, useState } from 'react';

export function DaysCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // Calculate days since February 14, 2021
    const stabDate = new Date(2021, 1, 14); // Month is 0-indexed
    const today = new Date();
    const timeDiff = today.getTime() - stabDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDays(daysDiff);
  }, []);

  const years = Math.floor(days / 365);
  const remainingDays = days % 365;

  return (
    <div className="w-full bg-red-900 text-white py-8 px-6 border-4 border-red-700 my-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wider">
          DAYS WAITING FOR JUSTICE
        </h2>
        
        <div className="text-6xl md:text-7xl font-black mb-4 tracking-wider">
          {days.toLocaleString()}
        </div>
        
        <p className="text-lg md:text-xl mb-4">
          {years} years and {remainingDays} days since February 14, 2021
        </p>
        
        <p className="text-base md:text-lg leading-relaxed">
          Barran was stabbed three times. The case remains unsolved. 
          Authorities have not called. Justice has not been served.
        </p>
        
        <p className="text-sm md:text-base mt-6 italic">
          Every day that passes is another day of injustice.
        </p>
      </div>
    </div>
  );
}
