import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = targetDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now if no target
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const getTimerItemColor = (type: string): string => {
    switch (type) {
      case 'days': return 'text-accent-cyan';
      case 'hours': return 'text-accent-orange';
      case 'minutes': return 'text-accent-red';
      case 'seconds': return 'text-accent-green';
      default: return 'text-accent-cyan';
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl font-bold text-text-primary">ICO Will Start In..</h3>
      
      <div className="flex space-x-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div 
            key={key}
            className="crypto-card p-6 min-w-[100px] text-center hover:scale-105 transition-transform duration-300"
          >
            <div className={`text-4xl font-bold ${getTimerItemColor(key)} glow-cyan`}>
              {formatNumber(value)}
            </div>
            <div className="text-text-secondary text-sm uppercase mt-2 font-medium">
              {key === 'days' ? 'Days' : 
               key === 'hours' ? 'Hour' : 
               key === 'minutes' ? 'Minute' : 'Second'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;