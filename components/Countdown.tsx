// components/Countdown.js

import React, { useState, useEffect } from "react";
import { format, differenceInSeconds } from "date-fns";

const Countdown = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = differenceInSeconds(targetDate, now);

      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown pt-50 pb-60 brk-library-rendered rendered">
      <div className="countdown__section">
        <div className="font__family-montserrat font__size-56 font__weight-bold countdown__amount">
          {timeLeft.days}
        </div>
        <span className="font__family-montserrat font__size-21 font__weight-bold countdown__period">
          Jours
        </span>
      </div>
      <div className="countdown__section">
        <div className="font__family-montserrat font__size-56 font__weight-bold countdown__amount">
          {timeLeft.hours}
        </div>
        <span className="font__family-montserrat font__size-21 font__weight-bold countdown__period">
          Heures
        </span>
      </div>
      <div className="countdown__section">
        <div className="font__family-montserrat font__size-56 font__weight-bold countdown__amount">
          {timeLeft.minutes}
        </div>
        <span className="font__family-montserrat font__size-21 font__weight-bold countdown__period">
          Minu
        </span>
      </div>
      <div className="countdown__section">
        <div className="font__family-montserrat font__size-56 font__weight-bold countdown__amount">
          {timeLeft.seconds}
        </div>
        <span className="font__family-montserrat font__size-21 font__weight-bold countdown__period">
          Secs
        </span>
      </div>
    </div>
  );
};

export default Countdown;
