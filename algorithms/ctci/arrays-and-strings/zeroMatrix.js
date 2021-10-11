// Write an algorithm such that if an element in an M x N matrix is 0,
// it's entire row and column are set to 0.

// T: O(m*n) S: O(1)
const zeroMatrix = (matrix) => {
  if (!matrix.length || !matrix[0].length) return [];

  const pos = [];

  for (let i = 0, len = matrix.length; i < len; i++) {
    for (let j = 0, len2 = matrix[i].length; j < len2; j++) {
      if (matrix[i][j] === 0) {
        pos.push(i, j);
      }
    }
  }

  if (!pos.length) return matrix;

  const [row, column] = pos;

  for (let i = 0, len = matrix.length; i < len; i++) {
    for (let j = 0, len2 = matrix[i].length; j < len2; j++) {
      if (i === row) {
        matrix[i][j] = 0;
      }
      if (j === column) {
        matrix[i][column] = 0;
      }
    }
  }

  return matrix;
};

/*
| 1 | 1 | 1 |     | 1 | 0 | 1 |
| 1 | 0 | 1 | ->  | 0 | 0 | 0 |
| 1 | 1 | 1 |     | 1 | 0 | 1 |
*/
console.log(
  zeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

/*
| 0 | 1 | 1 |     | 0 | 0 | 0 |
| 1 | 1 | 1 | ->  | 0 | 1 | 1 |
| 1 | 1 | 1 |     | 0 | 1 | 1 |
*/
console.log(
  zeroMatrix([
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])
);
