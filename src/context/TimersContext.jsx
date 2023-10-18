import { createContext, useContext, useReducer, useState } from "react";

const TimersContext = createContext();

const initialTimers = [
  { id: 1, name: "Timer1", duration: 300, isActive: false },
];

// The reducer
function reducer(state, action) {
  switch (action.type) {
    case "timerCreated": {
      return [
        ...state,
        {
          // For this purpose, it's okay that id is generated with math.random
          id: Math.random(),
          name: action.payload.name || `Timer ${state.length + 1}`,
          duration: action.payload.duration,
          isActive: true,
        },
      ];
    }
    case "timerFinished": {
      return state.map((timer) => {
        if (timer.id === action.payload.id) {
          return {
            ...timer,
            isActive: false,
          };
        }
        return timer;
      });
    }
    case "timerRestarted": {
      return state.map((timer) => {
        if (timer.id === action.payload.id) {
          return {
            ...timer,
            isActive: true,
          };
        }
        return timer;
      });
    }
    case "timerSkiped": {
      return state.map((timer) => {
        if (timer.id === action.payload.id) {
          return {
            ...timer,
            isActive: false,
          };
        }
        return timer;
      });
    }
    case "timerDeleted": {
      return state.filter((timer) => timer.id !== action.payload.id);
    }
    case "clearAll":
      return initialTimers;

    default:
      throw new Error("Action unknown");
  }
}

function TimersProvider({ children }) {
  const [timers, dispatch] = useReducer(reducer, initialTimers);
  const [isMuted, setIsMuted] = useState(false);

  function createTimer(name, duration) {
    dispatch({ type: "timerCreated", payload: { name, duration } });
  }

  function finishTimer(timer) {
    dispatch({ type: "timerFinished", payload: timer });
  }

  function restartTimer(timer) {
    dispatch({ type: "timerRestarted", payload: timer });
  }

  function skipTimer(timer) {
    dispatch({ type: "timerSkiped", payload: timer });
  }

  function deleteTimer(timer) {
    dispatch({ type: "timerDeleted", payload: timer });
  }

  function clearAll() {
    dispatch({ type: "clearAll" });
  }

  return (
    <TimersContext.Provider
      value={{
        timers,
        isMuted,
        setIsMuted,
        createTimer,
        finishTimer,
        restartTimer,
        deleteTimer,
        skipTimer,
        clearAll,
      }}
    >
      {children}
    </TimersContext.Provider>
  );
}

function useTimers() {
  const context = useContext(TimersContext);
  if (context === undefined)
    throw new Error("TimersContext was used outside the TimersProvider");
  return context;
}

export { TimersProvider, useTimers };
