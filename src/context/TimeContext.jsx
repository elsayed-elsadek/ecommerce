import { createContext, useContext, useState, useEffect } from "react";

const TimeContext = createContext();

// eslint-disable-next-line react/prop-types
export const TimeProvider = ({ children, targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <TimeContext.Provider value={timeLeft}>{children}</TimeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTime = () => useContext(TimeContext);
