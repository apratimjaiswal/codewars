let input = [
  [1, 2, 3, 4, 5],
  [10, 9, 8, 7, 6],
  [11, 12, 13, 14, 15],
  [20, 19, 18, 17, 16],
  [21, 22, 23, 24, 25],
];

function printSpiral(a) {
  let n = a.length;
  let index = 0;
  let result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i % 2 == 0) result[index++] = a[i][j];
      else result[index++] = a[i][n - j - 1];
    }
  }
  console.log("Print in spiral: ", result);
}
printSpiral(input);
