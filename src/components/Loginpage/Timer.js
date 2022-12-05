import React, { useEffect } from "react";
import { useState } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      if (seconds <= 10) {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return <div>{seconds}</div>;
};

export default Timer;
