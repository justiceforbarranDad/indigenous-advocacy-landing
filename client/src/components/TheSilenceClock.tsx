import { useEffect, useState } from 'react';
import './TheSilenceClock.css';

export default function TheSilenceClock() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
        <h2>THE SILENCE CLOCK</h2>
      </div>

      <div className="silence-clock-display">
        <div className="time-unit">
          <div className="time-value">{String(time.days).padStart(4, '0')}</div>
          <div className="time-label">DAYS</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{String(time.hours).padStart(2, '0')}</div>
          <div className="time-label">HOURS</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{String(time.minutes).padStart(2, '0')}</div>
          <div className="time-label">MINUTES</div>
        </div>
        <div className="time-unit">
          <div className="time-value">{String(time.seconds).padStart(2, '0')}</div>
          <div className="time-label">SECONDS</div>
        </div>
      </div>

      <div className="silence-clock-footer">
        <p className="since-date">Since February 14, 2021</p>
        <p className="description">Days of Government Silence & Inaction</p>
        <p className="tagline">Every second counts. Justice delayed is justice denied.</p>
      </div>
    </div>
  );
}
