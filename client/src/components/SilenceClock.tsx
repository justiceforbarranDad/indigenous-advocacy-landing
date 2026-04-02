import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function SilenceClock() {
  const { t } = useTranslation();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      // Calculate time since February 14, 2021
      const startDate = new Date('2021-02-14T00:00:00').getTime();
      const now = new Date().getTime();
      const diffMs = now - startDate;

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="silence-clock-container bg-black/90 border-4 border-red-600 rounded-xl p-4 md:p-6 text-center max-w-2xl mx-auto shadow-2xl">
      <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-widest uppercase">
        {t('silenceClock.title', 'THE SILENCE CLOCK')}
      </h3>
      
      <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6">
        {/* Days */}
        <div className="bg-red-600 rounded-lg p-2 md:p-3">
          <div className="text-white text-3xl md:text-4xl font-bold font-mono tracking-tight">
            {time.days}
          </div>
          <p className="text-white text-xs md:text-sm font-semibold mt-1 md:mt-2 uppercase">
            {t('silenceClock.days', 'Days')}
          </p>
        </div>

        {/* Hours */}
        <div className="bg-red-600 rounded-lg p-2 md:p-3">
          <div className="text-white text-3xl md:text-4xl font-bold font-mono tracking-tight">
            {formatNumber(time.hours)}
          </div>
          <p className="text-white text-xs md:text-sm font-semibold mt-1 md:mt-2 uppercase">
            {t('silenceClock.hours', 'Hours')}
          </p>
        </div>

        {/* Minutes */}
        <div className="bg-red-600 rounded-lg p-2 md:p-3">
          <div className="text-white text-3xl md:text-4xl font-bold font-mono tracking-tight">
            {formatNumber(time.minutes)}
          </div>
          <p className="text-white text-xs md:text-sm font-semibold mt-1 md:mt-2 uppercase">
            {t('silenceClock.minutes', 'Minutes')}
          </p>
        </div>

        {/* Seconds */}
        <div className="bg-red-600 rounded-lg p-2 md:p-3">
          <div className="text-white text-3xl md:text-4xl font-bold font-mono tracking-tight animate-pulse">
            {formatNumber(time.seconds)}
          </div>
          <p className="text-white text-xs md:text-sm font-semibold mt-1 md:mt-2 uppercase">
            {t('silenceClock.seconds', 'Seconds')}
          </p>
        </div>
      </div>
      
      <p className="text-red-400 text-sm md:text-base font-semibold mb-2 md:mb-3">
        {t('silenceClock.since', 'Since February 14, 2021')}
      </p>
      
      <p className="text-white text-xs md:text-sm leading-relaxed font-semibold">
        {t('silenceClock.subtitle', 'Days of Government Silence & Inaction')}
      </p>

      <p className="text-red-300 text-xs md:text-sm mt-2 md:mt-4 italic">
        {t('silenceClock.message', 'Every second counts. Justice delayed is justice denied.')}
      </p>
    </div>
  );
}
