import React, { useState, useEffect } from "react";

const Countdown = () => {
 
  const initialTime =  10 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000 + 15 * 60 * 1000 +  10 * 1000; ;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1000);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, [timeLeft]);

  const formatTime = (milliseconds) => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="py-[18px]">
      <p className="leading-150 text-white font-bold text-5xl font-oswald">{formatTime(timeLeft)}</p>
      <p className="text-[#99A9BD] text-lg leading-150 font-oswald font-normal">Days left</p>
    </div>
  );
};

export default Countdown;
