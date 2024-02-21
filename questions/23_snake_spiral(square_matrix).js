/**
 * 
 * Create this spiral pattern:
[
  [ 1, 2, 3, 4, 5 ],
  [ 10, 9, 8, 7, 6 ],
  [ 11, 12, 13, 14, 15 ],
  [ 20, 19, 18, 17, 16 ],
  [ 21, 22, 23, 24, 25 ]
]
 */
function createSquareMatrix(n) {
  let a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = new Array(n).fill(0);

  return a;
}
// createSquareMatrix(5);

function spiral(n) {
  let a = createSquareMatrix(n);

  let num = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i % 2 == 0) {
        a[i][j] = num++;
      } else {
        a[i][n - j - 1] = num++;
      }
    }
  }

  console.log(a);
}
spiral(5);
spiral(6);
