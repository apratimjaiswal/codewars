/**
 * DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 */

function duplicateEncoder(str) {
  let result = "";
  str = str.toLowerCase();

  for (let i of str) {
    if (str.indexOf(i) === str.lastIndexOf(i)) {
      result += "(";
    } else {
      result += ")";
    }
  }
  console.log("The decoded result is: ", result);
}

duplicateEncoder("dad");
duplicateEncoder("din");
duplicateEncoder("recede");
duplicateEncoder("Success");
duplicateEncoder("(( @");

// Method #2
function duplicateEncode1(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
