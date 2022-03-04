import { classNames_Cell } from "../CONSTANTS";

function setCells({ x, y, grid, phase, cellsToClear }) {
  // Phase 1
  if (phase === 1) {
    // Set all the row cells
    for (let row = 0; row < grid.length; row++) {
      // Increment
      grid[row][x].count = grid[row][x].count + 1;
      // to incrementing style
      grid[row][x].className = classNames_Cell.inc;
    }
    // Set all the column cells
    for (let col = 0; col < grid[0].length; col++) {
      // to incrementing style
      grid[y][col].className = classNames_Cell.inc;
      // If it is the clicked cell do not increment it again
      if (col === x) continue;
      // Increment cells
      grid[y][col].count = grid[y][col].count + 1;
    }
  }

  // Phase 1.1
  if (phase === 1.1) {
    // Set all the row cells
    for (let row = 0; row < grid.length; row++) {
      // to incrementing style
      grid[row][x].className = classNames_Cell.default;
    }
    // Set all the column cells
    for (let col = 0; col < grid[0].length; col++) {
      // to incrementing style
      grid[y][col].className = classNames_Cell.default;
    }
  }

  // Phase 2
  if (phase === 2) {
    // Set style to "clearing"
    for (let i = 0; i < cellsToClear.length; i++) {
      const [col, row] = cellsToClear[i];

      grid[row][col].className = classNames_Cell.clear;
    }
  }
  // Phase 2.1
  if (phase === 2.1) {
    // Set style to "default" and count to zero
    for (let i = 0; i < cellsToClear.length; i++) {
      const [col, row] = cellsToClear[i];

      grid[row][col].className = classNames_Cell.default;
      grid[row][col].count = 0;
    }
  }
}

export default setCells;
