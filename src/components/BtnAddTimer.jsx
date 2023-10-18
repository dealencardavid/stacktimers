import { HiPlusCircle } from "react-icons/hi";
import { useClickSound } from "../hooks/useClickSound";
import { useTimers } from "../context/TimersContext";

function BtnAddTimer({ setShowAddTimer }) {
  const { isMuted } = useTimers();
  const playClickSound = useClickSound();

  function handleAddTimer() {
    setShowAddTimer((show) => !show);
    if (isMuted) return;
    playClickSound();
  }

  return (
    <button
      onClick={handleAddTimer}
      className="w-[150px] text-white font-semibold  flex gap-1 items-center justify-center py-2  border-dashed border-2 rounded-lg border-blue-400 bg-blue-500 shadow-md  hover:shadow-lg  hover:-translate-y-0.5 hover:cursor-pointer active:shadow-none active:translate-y-0 transition-all duration-300 sm:w-80 md:w-[480px] md:py-3 md:text-lg"
    >
      <span>
        <HiPlusCircle />
      </span>
      <span>Add Timer</span>
    </button>
  );
}

export default BtnAddTimer;
