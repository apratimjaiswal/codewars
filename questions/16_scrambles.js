/**
 * DESCRIPTION:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
 */

// let str1 = "rkqodlw";
// let str2 = "world";
// String.prototype.sort = function () {
//   return this.split("").sort().join("");
// };
// console.log(str1.sort());
// console.log(str2.sort());

function scramble(str1, str2) {
  let sum = 0;
  for (let i in str2) {
    const index1 = str1.indexOf(str2[i]);
    if (index1 > -1) {
      str1[index1] = "@";
      sum += 1;
      // console.log("Hey", index1, str1[index1]);
    }
  }

  console.log(str1.join(""), str2);

  if (sum === str2.length) return true;
  else return false;
}

console.log(scramble("rkqodlw".split(""), "world"));
console.log(scramble("cedewaraaossoqqyt".split(""), "codewars"));
console.log(scramble("katas".split(""), "steak"));
