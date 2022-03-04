import { useEffect, useRef, useState } from "react";
import usePhase from "../hooks/usePhase";
import checkCellsToClear from "../../helpers/checkCellsToClear";
import buildGrid from "../../helpers/buildGrid";
import setCells from "../../helpers/setCells";
import Cell from "../Cell/Cell";
import "./App.css";

function Reset({ handler }) {
  return (
    <button type="button" onClick={handler}>
      Reset
    </button>
  );
}
const GRID_SIZE = 50;
const gridZeros = buildGrid(GRID_SIZE);

function App() {
  const timeout = useRef(null);
  const grid = useRef(gridZeros);
  const cellsToClear = useRef(null);
  const [phase, setPhase] = usePhase(0);
  const [clickedCell, setClickedCell] = useState(null);
  const [flop, setFlop] = useState(false);

  function handleReset() {
    grid.current = gridZeros;
    setPhase(0);
    setClickedCell(null);
    setFlop(!flop);
  }

  function handleClickCell({ x, y }) {
    if (phase === 0) {
      setClickedCell({ x, y });
      setPhase(1);
    }
  }

  useEffect(() => {
    if (!grid.current) return;

    if ([1, 1.1, 2.1].includes(phase)) {
      setCells({
        x: clickedCell.x,
        y: clickedCell.y,
        grid: grid.current,
        phase: phase,
        cellsToClear: cellsToClear.current,
      });
      if (phase === 2.1) {
        cellsToClear.current = null;
      }
    }

    if (phase === 2) {
      const cells = checkCellsToClear(grid.current);

      if (cells.length) {
        cellsToClear.current = cells;
        setCells({
          x: clickedCell.x,
          y: clickedCell.y,
          grid: grid.current,
          phase: phase,
          cellsToClear: cells,
        });
      } else {
        setPhase(0);
      }
    }
  }, [phase, clickedCell, setPhase]);

  return (
    <div className="App">
      <div className="col-box">
        <div className="col-1">
          <Reset handler={handleReset} />
          <div>
            Clicked cell: x = {clickedCell ? clickedCell.x : null}, y ={" "}
            {clickedCell ? clickedCell.y : null}{" "}
          </div>
          <div>phase: {phase}</div>
          <div>timeout: {timeout.current}</div>
        </div>
        <div className="col-2">
          {grid.current &&
            grid.current.map((row, idxRow) => (
              <div key={idxRow} className="row">
                {row.map((cell, idxCell) => (
                  <Cell
                    key={idxCell}
                    x={idxCell}
                    y={idxRow}
                    classNames={[cell.className]}
                    cellCount={cell.count}
                    handleClick={() =>
                      handleClickCell({ x: idxCell, y: idxRow })
                    }
                  />
                ))}
              </div>
            ))}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default App;
