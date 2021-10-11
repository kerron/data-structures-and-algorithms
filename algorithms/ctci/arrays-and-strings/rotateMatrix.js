// Given an image represented by an N x N matrix, where
// each pixel in the image is 4 bytes, write a method to
// rotate the image by 90 degrees. Can you do this in place.

//T: O(m*n) S: O(1)
const rotateMatrix = (matrix) => {
  if (!matrix.length || !matrix[0].length) return [];
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const curr = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = curr;
    }
  }

  const middle = Math.floor(len / 2);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < middle; j++) {
      const curr = matrix[i][j];
      const endPos = len - 1 - j;
      matrix[i][j] = matrix[i][endPos];
      matrix[i][endPos] = curr;
    }
  }

  return matrix;
};

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [[7,4,1],[8,5,2],[9,6,3]]
