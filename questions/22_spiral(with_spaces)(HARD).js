/** HARD */

/**
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
 */
function createArray(n) {
  let a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = new Array(n).fill(0);
  return a;
}

function spiralize(n) {
  let a = createArray(n);

  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;

  let num = 0;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right && top <= bottom && left <= right; i++) {
      if (i == n - 1) a[top][i] = 1;
      else if (i + 1 <= n - 1 && a[top][i + 1] !== 1) {
        if (a[top + 1][i] !== 1) a[top][i] = 1;
      } else right--;
    }
    top++;

    for (let i = top; i <= bottom && top <= bottom && left <= right; i++) {
      if (i == n - 1) a[i][right] = 1;
      else if (i + 1 <= n - 1 && a[i + 1][right] !== 1) {
        if (a[i][right - 1] !== 1) a[i][right] = 1;
      } else bottom--;
    }
    right--;

    for (let i = right; i >= left && top <= bottom && left <= right; i--) {
      if (i == 0) a[bottom][i] = 1;
      else if (i - 1 >= 0 && a[bottom][i - 1] !== 1) {
        if (a[bottom - 1][i] !== 1) a[bottom][i] = 1;
      } else left++;
    }
    bottom--;

    for (let i = bottom; i >= top && top <= bottom && left <= right; i--) {
      if (i == 0) a[i][left] = 1;
      else if (i - 1 >= 0 && a[i - 1][left] !== 1) {
        if (a[i][left + 1] !== 1) a[i][left] = 1;
      } else top++;
    }
    left++;
  }

  console.log(a);
  return a;
}
spiralize(6);
