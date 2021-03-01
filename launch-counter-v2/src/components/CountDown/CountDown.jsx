import React, { useState, useEffect } from "react";

export default function CountDown({ launchTime, classes }) {
  const countdown = () => {
    const now = new Date();
    const countdownTo = new Date(launchTime);
    let countDownTime = countdownTo - now;
    let days = Math.floor(countDownTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (countDownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);
    let timeObj = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    return timeObj;
  };

  const [timeleft, settimeleft] = useState(countdown());
  const { days, hours, minutes, seconds } = timeleft;

  useEffect(() => {
    const timer = setInterval(() => {
      settimeleft(countdown());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      T- {days} D : {hours} H : {minutes} M : {seconds} S
    </>
  );
}
