import { useEffect, useState } from "react";
import { useTimers } from "../context/TimersContext";
import FormInputs from "./FormInputs";
import { useClickSound } from "../hooks/useClickSound";

function FormAddTimer({ setShowAddTimer }) {
  const { createTimer, isMuted } = useTimers();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const playClickSound = useClickSound();

  useEffect(
    function () {
      setDuration(hours * 3600 + minutes * 60 + seconds);
    },
    [hours, minutes, seconds]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (duration === 0) return;

    createTimer(name, duration);
    setName("");
    setDuration(0);
    setShowAddTimer((show) => !show);
    if (isMuted) return;
    playClickSound();
  }

  function handleCancel(e) {
    e.preventDefault();
    setName("");
    setDuration(0);
    setShowAddTimer((show) => !show);
    if (isMuted) return;
    playClickSound();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-slate-700 font-semibold w-[150px] flex gap-0.5 flex-col items-center border-2 rounded-lg  border-blue-300 bg-white mb-6 shadow-md sm:w-80 sm:items-start md:w-[480px] md:pt-3"
    >
      <input
        id="name"
        autoComplete="no"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name your timer"
        className="w-full text-sm px-2 py-2 rounded-t-lg focus:outline-none sm:text-lg sm:px-4"
      />
      <div className="sm:px-4">
        <FormInputs value={hours} setValue={setHours}>
          Hours
        </FormInputs>
        <FormInputs value={minutes} setValue={setMinutes}>
          Minutes
        </FormInputs>
        <FormInputs value={seconds} setValue={setSeconds}>
          Seconds
        </FormInputs>
      </div>

      <div className="bg-slate-100 w-full rounded-b-lg mt-4 py-3 flex justify-around md:justify-end md:gap-8 md:pr-10">
        <button className="text-xs text-slate-500" onClick={handleCancel}>
          Cancel
        </button>
        <button
          id="submit"
          className="text-xs bg-slate-700 shadow-md  text-white py-2 px-3 rounded-lg hover:bg-slate-800 active:translate-y-0.5 active:shadow-none"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default FormAddTimer;
