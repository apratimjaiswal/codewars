/** EASY */

/**
 * [
  [ 1, 2, 3, 4, 5, 6 ],
  [ 20, 21, 22, 23, 24, 7 ],
  [ 19, 32, 33, 34, 25, 8 ],
  [ 18, 31, 36, 35, 26, 9 ],
  [ 17, 30, 29, 28, 27, 10 ],
  [ 16, 15, 14, 13, 12, 11 ]
]
 */
function createArray(n) {
  let a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = new Array(n).fill(0);
  return a;
}

/**
 * 00 01 02 03 04
 * 10 11 12 13 14
 * 20 21 22 23 24
 * 30 31 32 33 34
 * 40 41 42 43 44
 */

function spiralFunc(n) {
  let a = createArray(n);

  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;

  // let counter = 0;
  let num = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      a[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      a[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      a[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      a[i][left] = num++;
    }
    left++;
  }

  console.log(a);
}
spiralFunc(4);
spiralFunc(6);
