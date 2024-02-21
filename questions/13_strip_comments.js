/**
 * DESCRIPTION:
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
 */

function solution(str, markers) {
  let sentences = str.split("\n");

  markers.forEach((marker) => {
    sentences = sentences.map((sentence) => {
      if (sentence.indexOf(marker) >= 0) {
        let index = sentence.indexOf(marker);
        // return sentence.substring(0, index).trim();
        return sentence.substring(0, index).trimEnd();
      } else {
        return sentence;
      }
    });
  });

  sentences.join("\n");
  console.log("The result is: ", sentences);
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
