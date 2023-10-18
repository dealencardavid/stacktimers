import { useState } from "react";

import { useCountdown } from "../hooks/useCountdown";
import { useClickSound } from "../hooks/useClickSound";
import { useAlarmSound } from "../hooks/useAlarmSound";

import { useTimers } from "../context/TimersContext";
import { HiLogout } from "react-icons/hi";

function ActiveTimer({ timer }) {
  const { isMuted, finishTimer, skipTimer } = useTimers();
  const { duration, name } = timer;
  const [isPaused, setIsPaused] = useState(false);

  const playClickSound = useClickSound();
  const playAlarmSound = useAlarmSound();

  function handleFinishCountdown() {
    finishTimer(timer);
    if (isMuted) return;
    playAlarmSound();
  }

  function handlePlayPause() {
    setIsPaused((p) => !p);
    if (isMuted) return;
    playClickSound();
  }

  function handleSkip() {
    skipTimer(timer);
    if (isMuted) return;
    playClickSound();
  }

  const btnStyle = isPaused
    ? " h-8 md:h-9 shadow-[0_-4px_0_0_rgba(191,219,254,1)_inset]"
    : " h-7 md:h-8 translate-y-[4px]";

  const btnSkip = isPaused ? " opacity-100" : " pointer-events-none opacity-0";

  const secondsRemaining = useCountdown(
    duration,
    handleFinishCountdown,
    isPaused
  );

  const hours = Math.floor(secondsRemaining / 3600);
  const mins = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const formattedHours = hours ? (hours < 10 ? `0${hours}:` : `${hours}:`) : "";
  const formattedMinutes = mins < 10 ? `0${mins}` : `${mins}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div className="bg-blue-500 border-[0.5px] border-blue-400 shadow-md w-[150px] h-[150px] rounded-lg flex flex-col gap-2 md:w-[480px] md:h-32 md:grid md:grid-cols-2 md:items-center md:place-items-center">
      <div className="basis-0 flex-1 flex flex-col justify-end items-center max-w-full px-2 ">
        <span className="text-base text-center text-white truncate w-32 md:hidden">
          {name}
        </span>
        <span className="text-4xl font-semibold text-white font-base md:text-6xl md:pl-6">{`${formattedHours}${formattedMinutes}:${formattedSeconds}`}</span>
      </div>
      <div className="justify-self-start basis-0 flex-1 flex flex-col items-center gap-4 relative md:w-full md:h-full ">
        <span className="text-2xl top-3  w-48  text-white hidden md:inline pt-5 truncate text-center">
          {name}
        </span>
        <button
          className={`bg-white  w-28 ${btnStyle} rounded-md text-blue-600 text-xs font-semibold tracking-wide md:w-32 md:text-base md:absolute md:bottom-6`}
          onClick={handlePlayPause}
        >
          {isPaused ? "START" : " PAUSE"}
        </button>

        <button
          className={`text-white absolute bottom-2 text-2xl ${btnSkip} ease-in-out transition-all duration-200 md:right-3 md:bottom-7 hover:text-blue-200`}
          onClick={handleSkip}
        >
          <HiLogout />
        </button>
      </div>
    </div>
  );
}

export default ActiveTimer;
