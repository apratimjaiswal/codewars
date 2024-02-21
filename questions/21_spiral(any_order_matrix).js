/** MEDIUM */

var spiralOrderAnyOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let result = new Array(m * n);
  let index = 0;

  let top = 0;
  let left = 0;
  let bottom = m - 1;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right && top <= bottom && left <= right; i++)
      result[index++] = matrix[top][i];
    top++;

    for (let i = top; i <= bottom && top <= bottom && left <= right; i++)
      result[index++] = matrix[i][right];
    right--;

    for (let i = right; i >= left && top <= bottom && left <= right; i--)
      result[index++] = matrix[bottom][i];
    bottom--;

    for (let i = bottom; i >= top && top <= bottom && left <= right; i--)
      result[index++] = matrix[i][left];
    left++;
  }
  console.log(result);
  return result;
};
/**
   * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
   */
let input1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
spiralOrderAnyOrder(input1);
