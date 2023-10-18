import { useTimers } from "../context/TimersContext";
import ActiveTimer from "./ActiveTimer";

function ActiveTimersContainer() {
  const { timers } = useTimers();

  return (
    <div className="flex flex-col items-center w-[150px] gap-2 sm:w-80 sm:grid sm:grid-cols-2 sm:justify-center sm:gap-3 sm:place-items-center md:w-[480px] md:flex md:flex-col">
      {timers
        .filter((timer) => timer.isActive)
        .map((timer) => (
          <ActiveTimer key={timer.id} timer={timer} />
        ))}
    </div>
  );
}

export default ActiveTimersContainer;
