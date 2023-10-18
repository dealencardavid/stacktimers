import { HiTrash } from "react-icons/hi";
import { useTimers } from "../context/TimersContext";
import { useClickSound } from "../hooks/useClickSound";

function ExpiredTimer({ timer }) {
  const { restartTimer, deleteTimer, isMuted } = useTimers();
  const { duration, name } = timer;

  const playClickSound = useClickSound();

  function handleRestart() {
    restartTimer(timer);
    if (isMuted) return;
    playClickSound();
  }

  function handleDelete() {
    deleteTimer(timer);
    if (isMuted) return;
    playClickSound();
  }

  const hours = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const formattedHours = hours ? (hours < 10 ? `0${hours}:` : `${hours}:`) : "";
  const formattedMinutes = mins < 10 ? `0${mins}` : `${mins}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div className="bg-blue-500 border-[0.5px] border-blue-400 shadow-sm w-[150px] h-28 py-2 rounded-lg flex flex-col gap-1 items-center md:w-[480px] md:h-20 md:flex-row md:justify-around">
      <div className="flex gap-2 items-center max-w-full px-2">
        <span className="text-xl text-slate-100 font-semibold md:text-4xl">
          {`${formattedHours}${formattedMinutes}:${formattedSeconds}`}
        </span>
        <p className="text-sm text-white truncate md:hidden">{name}</p>
      </div>
      <p className="hidden md:inline text-xl text-slate-100 truncate">{name}</p>
      <div className="flex grow flex-col items-center relative md:grow-0 md:gap-1 md:flex-row">
        <button
          className="bg-white w-28 h-8 shadow-[0_-4px_0_0_rgba(203,213,225,1)_inset] rounded-md text-slate-600 text-xs font-semibold tracking-wide active:h-7 active:shadow-none active:translate-y-[4px] md:w-20"
          onClick={handleRestart}
        >
          RESTART
        </button>
        <button
          className="hidden md:inline bg-white w-28 h-8 shadow-[0_-4px_0_0_rgba(203,213,225,1)_inset] rounded-md text-slate-600 text-xs font-semibold tracking-wide active:h-7 active:shadow-none active:translate-y-[4px] md:w-20"
          onClick={handleDelete}
        >
          DELETE
        </button>
        <button
          className="text-white absolute bottom-0 text-2xl md:hidden"
          onClick={handleDelete}
        >
          <HiTrash />
        </button>
      </div>
    </div>
  );
}

export default ExpiredTimer;
