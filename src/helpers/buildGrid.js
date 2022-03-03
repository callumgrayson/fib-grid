import { classNames_Cell } from "../CONSTANTS";

function buildGrid(dimension) {
  const grid = [];

  for (let i = 0; i < dimension; i++) {
    let row = [];
    for (let j = 0; j < dimension; j++) {
      row[j] = {
        className: classNames_Cell.default,
        count: 0,
        id: `${j}_${i}`,
      };
    }
    grid[i] = row;
  }

  return grid;
}

export default buildGrid;
