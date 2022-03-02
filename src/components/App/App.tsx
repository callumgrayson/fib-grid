import { useState } from "react";
import Cell from "../Cell/Cell";
import "./App.css";

type cellCoords = { x: number; y: number };

function increment(n: number) {
  return n + 1;
}

function Reset({ handler }: { handler: () => void }) {
  return (
    <button type="button" onClick={handler}>
      Reset
    </button>
  );
}

function App() {
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(0);

  function handleReset() {
    setPhase(0);
    setCount(0);
  }

  function handleClickCell({ x, y }: cellCoords) {
    setCount(increment(count));
    if (phase === 0) {
      setPhase(1);
      return;
    }
    if (phase === 1) {
      setPhase(2);
      return;
    }
    if (phase === 2) {
      setPhase(0);
      return;
    }
  }

  const classNames_Cell =
    phase === 2
      ? ["color-fibClearing"]
      : phase === 1
      ? ["color-incrementing"]
      : ["color-default"];

  return (
    <div className="App">
      <Reset handler={handleReset} />
      <Cell
        classNames={classNames_Cell}
        cellCount={count}
        handleClick={() => handleClickCell({ x: 1, y: 1 })}
      />
    </div>
  );
}

export default App;
