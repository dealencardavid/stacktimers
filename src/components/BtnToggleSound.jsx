import { memo, useEffect } from "react";
import { useClickSound } from "../hooks/useClickSound";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

const BtnToggleSound = memo(function BtnToggleSound({ isMuted, setIsMuted }) {
  const playClickSound = useClickSound();
  useEffect(
    function () {
      if (isMuted) return;
      playClickSound();
    },
    [isMuted, playClickSound]
  );
  return (
    <button
      onClick={() => setIsMuted((muted) => !muted)}
      className="bg-blue-500 text-blue-100 py-1 px-3 rounded-lg shadow-md hover:text-white active:shadow-none active:translate-y-1 transition-all duration-150"
    >
      {isMuted ? <HiVolumeOff /> : <HiVolumeUp />}
    </button>
  );
});

export default BtnToggleSound;
