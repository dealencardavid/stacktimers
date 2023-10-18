function TimerActions({ onClick, children }) {
  return (
    <button
      className="bg-white w-28 h-8 rounded-md text-blue-600 text-xs font-semibold tracking-wide shadow-[0_-4px_0_0_rgba(191,219,254,1)_inset]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TimerActions;
