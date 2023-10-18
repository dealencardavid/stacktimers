import { HiMinusSm, HiPlusSm } from "react-icons/hi";

function FormInputs({ children, value, setValue }) {
  function handleInc(e) {
    e.preventDefault();
    if (value === 99) return;
    setValue((value) => value + 1);
  }
  function handleDec(e) {
    e.preventDefault();
    if (value === 0) return;
    setValue((value) => value - 1);
  }
  return (
    <div className="flex items-end gap-1 ">
      <div className="flex flex-col">
        <label htmlFor={value} className="text-xs">
          {children}
        </label>
        <input
          id={value}
          type="number"
          min={0}
          max={99}
          onChange={(e) => setValue(Number(e.target.value))}
          value={value}
          className="bg-slate-100 w-14 rounded-md text-sm py-1 text-center"
        />
      </div>
      <button
        className="border border-slate-400 p-1.5 bg-slate-100 rounded-md shadow-md active:shadow-none active:translate-y-px"
        onClick={handleInc}
      >
        <HiPlusSm />
      </button>
      <button
        className="border border-slate-400 p-1.5 bg-slate-100 rounded-md shadow-md active:shadow-none active:translate-y-px"
        onClick={handleDec}
      >
        <HiMinusSm />
      </button>
    </div>
  );
}

export default FormInputs;
