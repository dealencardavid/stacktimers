import { HiClock, HiInformationCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTimers } from "../context/TimersContext";

import BtnToggleSound from "./BtnToggleSound";

function Header({ setModalOpen }) {
  const { isMuted, setIsMuted } = useTimers();

  return (
    <header className="flex flex-col items-center w-full mt-4 mb-6  xs:px-4 md:w-[608px] relative">
      <div className="flex justify-between w-full items-end px-1 py-2">
        <a
          className="text-white text-2xl font-bold flex items-center gap-1 hover:cursor-pointer"
          href=""
        >
          <HiClock />
          <span className="hidden sm:inline">StackTimers</span>
        </a>
        <div className="flex gap-3">
          <BtnToggleSound isMuted={isMuted} setIsMuted={setIsMuted} />
          <motion.button
            className="save-button flex items-center gap-1  bg-blue-500 text-blue-100 py-1 px-3 rounded-lg shadow-md hover:text-white active:shadow-none transition-all duration-150"
            whileTap={{ translateY: 5 }}
            onClick={() => setModalOpen((open) => !open)}
          >
            <HiInformationCircle />
            About
          </motion.button>
        </div>
      </div>
      <div className="bg-blue-800 h-[1px] w-full rounded-lg"></div>
    </header>
  );
}

export default Header;
