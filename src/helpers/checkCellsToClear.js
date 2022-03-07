import { fibTerms } from "../CONSTANTS";
const SEQUENCE_LENGTH = 5;

const directions = [
  // [col-dir, row-dir]
  [1, 0], // right
  [-1, 0], // left
  [0, 1], // down
  [0, -1], // up
  [1, 1], // right down
  [1, -1], // right up
  [-1, 1], // left down
  [-1, -1], // left up
];

function checkCellsToClear(grid) {
  let sequences = [];

  // Check rows
  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];

    // Check columns
    for (let c = 0; c < row.length; c++) {
      const cell = row[c];

      // If the cell count is any number in the first 20 fibTerms start checks to see if any sequences are present
      // This is an array of indices since there are two 1s, which both need checking
      let fibTermIndices = [fibTerms.slice(0, 20).indexOf(cell.count)];

      // Since there are two 1s in the list run checks on two starting points, ie:
      // 1, 1, 2, 3,...
      // 1, 2, 3, 5,...
      if (cell.count === 1) {
        fibTermIndices = [0, 1];
      }

      for (let fibIndex = 0; fibIndex < fibTermIndices.length; fibIndex++) {
        if (fibTermIndices[fibIndex] >= 0) {
          // Push cell into list
          let checkSequence = [[c, r]];

          // Check each direction
          for (let dir = 0; dir < directions.length; dir++) {
            const direction = directions[dir];

            // Reset list before checking this direction
            checkSequence = [[c, r]];

            // check each cell along vector
            for (
              let vectorIndex = 1;
              vectorIndex < SEQUENCE_LENGTH;
              vectorIndex++
            ) {
              // const vectorCell = array[vectorIndex];
              const lastCell = checkSequence[checkSequence.length - 1];
              const nextCell = [
                lastCell[0] + direction[0],
                lastCell[1] + direction[1],
              ];

              // Check that no cells are out of bounds
              if (
                nextCell[0] < 0 ||
                nextCell[1] < 0 ||
                nextCell[0] >= grid.length ||
                nextCell[1] >= grid.length
              )
                break;

              const cellObject = grid[nextCell[1]][nextCell[0]];
              const count = cellObject && cellObject?.count;
              const term = fibTerms[vectorIndex + fibTermIndices[fibIndex]];
              if (count === term) {
                checkSequence.push(nextCell);
              }
              if (checkSequence.length === SEQUENCE_LENGTH) {
                sequences.push(...checkSequence);
              }
            }
          }
        }
      }
    }
  }

  return sequences;
}

export default checkCellsToClear;
