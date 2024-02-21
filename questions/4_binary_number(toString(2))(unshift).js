/**
 * DESCRIPTION:
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

// Method #1
function getBinary1(num) {
  let number = num;
  let result = [];
  while (number >= 1) {
    result.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  return result;
}
console.log("Method #1");
// getBinary(6); // 110 => 2
console.log(getBinary1(6).join(""));

// Method #2
function getBinary2(n) {
  let sum = 0,
    binary = "",
    binary1 = "";
  let initNum = n;

  while (n > 0) {
    let remainder = n % 2;
    binary = `${binary}${remainder}`;
    n = Math.floor(n / 2);

    if (remainder === 1) sum += 1;
  }

  let length = binary.length;
  for (let i in binary) {
    binary1 = `${binary1}${binary[length - i - 1]}`;
  }
  console.log(`Binary representation of ${initNum} is: ${binary1}`);
  console.log(`Number of 1s: ${sum}`);
}

console.log("Method #2");
getBinary2(6); // 110 => 2

// Method #3
let a = 6;
console.log("Method #3");
console.log(`Binary representation of ${a} is: ${a.toString(2)}`);
console.log(`Number of 1s: ${a.toString(2).split("0").join("").length}`);
console.log(a.toString(2).split("0").join("").length);
