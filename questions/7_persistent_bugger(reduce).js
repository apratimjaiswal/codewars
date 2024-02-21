/**
 * DESCRIPTION:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

 */

function persistence(num) {
  let result = 0;
  let initNum = num;

  while (initNum > 9) {
    initNum.toString();
    let newNum = initNum
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    // console.log("num ", newNum);

    initNum = newNum;
    ++result;
    if (initNum === 0) return result;
  }

  return result;
}

console.log("The result is: ", persistence(39));
console.log("The result is: ", persistence(999));
console.log("The result is: ", persistence(4));
console.log("The result is: ", persistence(2558619));
