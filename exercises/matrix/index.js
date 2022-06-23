// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];
  for (let index = 0; index < n; index++) {
    result.push([]);
  }

  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    //top row
    for (let index = startCol; index <= endCol; index++) {
      result[startRow][index] = counter;
      counter++;
    }
    startRow++; // now came to next row

    //right column - start from where u end means did change- above one
    for (let index = startRow; index <= endRow; index++) {
      result[index][endCol] = counter;
      counter++;
    }
    endCol--; // now came to previous column

    // bottom row
    for (let index = endCol; index >= startCol; index--) {
      result[endRow][index] = counter;
      counter++;
    }
    endRow--;

    //start column
    for (let index = endRow; index >= startRow; index--) {
      result[index][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  //   console.log(counter);

  return result;
}

console.log(matrix(3));

module.exports = matrix;
