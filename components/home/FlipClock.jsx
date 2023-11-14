"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./flipclock.css";

const FlipClock = () => {
  return (
    <FlipClockCountdown
      to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      duration={0.5}
      className="flip-clock"
    />
  );
};

export default FlipClock;
