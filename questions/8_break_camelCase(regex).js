/**
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

function breakCamelCase(str) {
  let resultStr = str
    .split("")
    .map((ch) => {
      if (/[A-Z]/.test(ch)) {
        return " " + ch;
      } else {
        return ch;
      }
    })
    .join("");
  console.log("Result: ", resultStr);
}

breakCamelCase("camelCasing");
breakCamelCase("identifier");
breakCamelCase("");
