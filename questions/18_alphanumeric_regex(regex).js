/**
 * DESCRIPTION:
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
 */

function checkAlphanumericCHARACTERRegex(ch) {
  return /[A-Z0-9]/i.test(ch);
}

function checkAlphanumeric(input) {
  const filtered = input.split("").filter((ch) => {
    return checkAlphanumericCHARACTERRegex(ch);
  });
  return filtered.length == input.length;
}
console.log("The result is: ", checkAlphanumeric("abc1"));
console.log("The result is: ", checkAlphanumeric("abc 1"));
console.log("The result is: ", checkAlphanumeric("abc1@"));
console.log("The result is: ", checkAlphanumeric("abc1 @"));

console.log(/[A-Z0-9]/i.test(" "));

// Method #2
function alphanumeric(string) {
  return /^[0-9a-z]+$/i.test(string);
}
