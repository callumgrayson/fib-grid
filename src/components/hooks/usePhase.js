import { useEffect, useRef, useState } from "react";

const timeoutDurations = {
  incrementing: 300,
  fibPreClearning: 0,
  fibClearning: 2000,
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
    // This is the phase after a cell is clicked
    if (phase === 1) {
      setPhase(1.1);
    }

    // This is phase when the cell increments and turns green
    if (phase === 1.1) {
      timer.current = setTimeout(() => {
        setPhase(2);
      }, timeoutDurations.incrementing);
    }

    // This is the phase when the grid is checked for any sequences to clear
    if (phase === 2) {
      timer.current = setTimeout(() => {
        setPhase(2.1);
      }, timeoutDurations.fibPreClearning);
    }

    // This is the phase when any sequences are highlighted before being reset
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
