import ExpiredTimer from "./ExpiredTimer";
import { useTimers } from "../context/TimersContext";

function ExpiredTimersContainer() {
  const { timers } = useTimers();

  return (
    <div className="flex flex-col w-[150px] gap-2 mt-3 sm:w-80 sm:grid sm:grid-cols-2 sm:justify-center sm:gap-3 sm:place-items-center md:w-[480px] md:flex md:flex-col">
      <div className="col-span-2 w-full">
        <p className="text-sm font-semibold text-white">Expired Timers</p>
        <div className="w-full bg-blue-900 h-[0.5px] rounded-md"></div>
      </div>

      {timers
        .filter((timer) => !timer.isActive)
        .map((timer) => (
          <ExpiredTimer key={timer.id} timer={timer} />
        ))}
    </div>
  );
}

export default ExpiredTimersContainer;
