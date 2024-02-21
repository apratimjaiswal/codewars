/**
 * DESCRIPTION:
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|
has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|  
|d e f|  
|g h i|  
the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|  
Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)


 */
/**
 * 00  01  02
 * 10  11  12
 * 20  21  22
 */
/**
 * 00  01  02  03
 * 10  11  12  13
 * 20  21  22  23
 * 30  31  32  33
 */
let sizeOneArray = [1];
let sizeTwoArray = [
  [1, 2],
  [3, 4],
];
let sizeThreeArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const minor = (arr, index) => {
  // if (arr.length === 2) return arr[0][0];

  // Creating 2D array
  let minorArr = new Array(arr.length - 1);
  for (let i = 0; i < minorArr.length; i++) {
    minorArr[i] = new Array(); // TODO: [IMP] Here length not specified -> so PUSH elements in this array
  }

  let a = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== index) {
        // minorArr[i - 1][j - 1] = arr[i][j];
        // minorArr[a].push(arr[i][j]); // TODO: [IMP] Push the element in the array
        minorArr[a].push(arr[i][j]);
      }
    }
    a++;
  }
  return minorArr;
};

function determinant(arr) {
  if (!(arr instanceof Array)) return arr;
  if (arr instanceof Array && arr.length == 1) return arr[0];
  if (arr instanceof Array && arr.length == 2)
    return arr[0][0] * arr[1][1] - arr[1][0] * arr[0][1];

  // matrix size 3
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[0][i] * determinant(minor(arr, i)) * Math.pow(-1, i);
  }
  return result;
}

console.log(determinant(1));
console.log(determinant(sizeOneArray));
console.log(determinant(sizeTwoArray));
console.log(determinant(sizeThreeArray));

let m1 = [
  [4, 6],
  [3, 8],
];
let m2 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];
console.log(determinant(m1));
console.log(determinant(m2));
