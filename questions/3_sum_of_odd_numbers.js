// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function sumNthRow(n) {
  // 1 => 1 (= n^3)
  // 3 5 => 8 (= n^3)
  // 7 9 11 => 27 (= n^3)
  // 13 15 17 19 => 64 (= n^3)
  // 21 23 25 27 29
  // n row -> n elements (at a distance of 2)

  // series: 1, 3, 7, 13, 21.... (n*n - n + 1)
  // series: 2, 4, 6, 8.... (2n)
  // series: 1, 3, 5, 7, 9.... (2n -1)

  // OR
  // startNumber = (n^2 - n + 1)
  let sum = 0;
  let firstNum = Math.pow(n, 2) - n + 1;
  for (let i = firstNum; n > 0; n--, i = i + 2) {
    sum += i;
  }
  console.log("Final sum is: ", sum);
}

sumNthRow(1);
sumNthRow(2);
sumNthRow(3);
