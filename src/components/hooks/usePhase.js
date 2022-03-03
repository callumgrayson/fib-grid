import { useEffect, useRef, useState } from "react";

const timeoutDurations = {
  incrementing: 400,
  fibPreClearning: 0,
  fibClearning: 1000,
};

function usePhase(initialValue) {
  const timer = useRef(null);
  const [phase, setPhase] = useState(initialValue);

  function handleSetPhase(num) {
    clearTimeout(timer.current);
    timer.current = null;
    setPhase(num);
  }

  useEffect(() => {
    if (phase === 1) {
      setPhase(1.1);
    }
    if (phase === 1.1) {
      timer.current = setTimeout(() => {
        setPhase(2);
      }, timeoutDurations.incrementing);
    }

    if (phase === 2) {
      timer.current = setTimeout(() => {
        setPhase(2.1);
      }, timeoutDurations.fibPreClearning);
    }
    if (phase === 2.1) {
      timer.current = setTimeout(() => {
        setPhase(0);
      }, timeoutDurations.fibClearning);
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [phase]);

  return [phase, handleSetPhase];
}

export default usePhase;
