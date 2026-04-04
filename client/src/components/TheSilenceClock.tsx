import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TheSilenceClock.css';

export default function TheSilenceClock() {
  const { i18n } = useTranslation();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const getLabels = () => {
    if (i18n.language === 'fr') {
      return { days: 'JOURS', hours: 'HEURES', minutes: 'MINUTES', seconds: 'SECONDES' };
    } else if (i18n.language === 'ht') {
      return { days: 'JOU', hours: 'ZÈDTAN', minutes: 'MINIT', seconds: 'SEGONN' };
    }
    return { days: 'DAYS', hours: 'HOURS', minutes: 'MINUTES', seconds: 'SECONDS' };
  };

  const labels = getLabels();

  useEffect(() => {
    const calculateTime = () => {
      // February 14, 2021 - Start of the silence
      const startDate = new Date('2021-02-14T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="silence-clock-container">
      <div className="silence-clock-header">
        <h2>
          {i18n.language === 'fr' ? "L'HORLOGE DU SILENCE" : i18n.language === 'ht' ? 'REVÈY SILANS LA' : 'THE SILENCE CLOCK'}
        </h2>
      </div>

      <div className="silence-clock-display">
        <div className="time-unit">
          <div className="time-value">{String(time.days).padStart(4, '0')}</div>
          <div className="time-label">{labels.days}</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{String(time.hours).padStart(2, '0')}</div>
          <div className="time-label">{labels.hours}</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{String(time.minutes).padStart(2, '0')}</div>
          <div className="time-label">{labels.minutes}</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{String(time.seconds).padStart(2, '0')}</div>
          <div className="time-label">{labels.seconds}</div>
        </div>
      </div>

      <div className="silence-clock-footer">
        <p className="since-date">
          {i18n.language === 'fr' ? 'Depuis le 14 février 2021' : i18n.language === 'ht' ? 'Depi 14 fevriye 2021' : 'Since February 14, 2021'}
        </p>
        <p className="description">
          {i18n.language === 'fr' ? 'Jours de silence et d\'inaction gouvernementale' : i18n.language === 'ht' ? 'Jou silans ak inaksyon gouvènman' : 'Days of Government Silence & Inaction'}
        </p>
        <p className="tagline">
          {i18n.language === 'fr' ? 'Chaque seconde compte. La justice retardée est une justice refusée.' : i18n.language === 'ht' ? 'Chak segonn konte. Jistis retade se jistis refize.' : 'Every second counts. Justice delayed is justice denied.'}
        </p>
      </div>
    </div>
  );
}
