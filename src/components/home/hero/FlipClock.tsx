"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./flipclock.css";

const FlipClock = () => {
  const endDate = new Date("2024-04-18T10:00:00.635+03:00");

  return (
    <FlipClockCountdown
      to={endDate}
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      duration={0.5}
      className="flip-clock"
    />
  );
};

export default FlipClock;
