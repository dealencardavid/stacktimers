import { useEffect, useState } from "react";

export function useCountdown(initialTime, onFinish, isPaused) {
  const [time, setTime] = useState(initialTime);

  useEffect(
    function () {
      const id = setInterval(() => {
        if ((time > 0) & !isPaused) {
          setTime((time) => time - 1);
        }
      }, 1000);

      if (time === 0) onFinish();

      return () => clearInterval(id);
    },
    [time, onFinish, isPaused]
  );
  return time;
}
