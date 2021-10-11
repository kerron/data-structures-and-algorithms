/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

// T: O(n2) S: O(1)
const rotateImage = (matrix) => {
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
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [[7,4,1],[8,5,2],[9,6,3]]
