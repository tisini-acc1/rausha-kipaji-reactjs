"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./flipclock.css";

const FlipClock = () => {
  return (
    <FlipClockCountdown
      to={"2024-04-01T10:00:00.635+03:00"}
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      duration={0.5}
      className="flip-clock"
    >
      <div></div>
    </FlipClockCountdown>
  );
};

export default FlipClock;
