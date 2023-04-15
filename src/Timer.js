import React, { useState, useEffect } from 'react';
import './Product.css';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(19000); // 3 hours and 30 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hoursLeft = Math.floor(timeLeft / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = Math.floor(timeLeft % 60);

  return (
    <div className="timer">
      <div className="timer__hours">{hoursLeft.toString().padStart(2, '0')}</div>
      <div className="timer__colon">H:</div>
      <div className="timer__minutes">{minutesLeft.toString().padStart(2, '0')}</div>
      <div className="timer__colon">:min</div>
      <div className="timer__seconds">{secondsLeft.toString().padStart(2, '0')}</div>
      <div className="timer__colon">:s</div>
   
    </div>
  );
}

export default Timer;
