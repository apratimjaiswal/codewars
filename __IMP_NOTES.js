/**
 * BINARY CONVERTION
 * Number.prototype.toString(radix)
 * // radix is base (optional) (default base is 10)
 */
let num = 6;
num.toString(2); // '100'
parseInt(num.toString(2)); // 100

/**
 * STRING MANIPULATION
 * String.prototype.split()
 */
let str = "Apratim";
str.split(""); // ['A', 'p', 'r', 'a', 't', 'i', 'm']
str.split("").join(""); // 'Apratim'
str.split("").reverse(); // ['m', 'i', 't', 'a', 'r', 'p', 'A']
str.split("").reverse().join(""); // 'mitarpA'

/**
 * REVERSE A STRING
 * Array.prototype.reverse()
 */
let str1 = "Apratim";
let reverseString = str.split("").reverse("").join(""); // 'mitarpA'
console.log(`Reverse string of ${str1} is: ${reverseString}`);

/** 
 * Nth NUM OF A SERIES
series: 1, 3, 7, 13, 21.... (n^2 - n + 1)
series: 2, 4, 6, 8.... (2n)
series: 1, 3, 5, 7, 9.... (2n -1)

SUM OF FIRST N NUMBERS
series: 1, 2, 3, 4, 5, 6... (n * (n + 1) / 2)
*/

/**
 * unshift method
 * Array.prototype.unshift()
 * Add to the starting of the array
 */
let arr3 = [2, 3, 4];
arr3.unshift(1);
arr3.push(5);
console.log("unshift method: ", arr3);

/**
 * MAP function
 * The map() method creates a new array, populated with the results of calling a provided function on every element in the calling array.
 */
const arr1 = [1, 2, 3, 4];
function multiplyBy2(n) {
  return n * 2;
}
const newArr = arr1.map(multiplyBy2);
console.log("Map function result: ", arr1.map(multiplyBy2));

/**
 * REDUCE function
 * reduce() method executes a reducer function for array element
 * reduce() method returns a SINGLE value, function's accumulated result
 * reduce() method does not change the original array
 */
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let arrReduce = [1, 2, 3, 4];
console.log(
  "Reducer function implementation: ",
  arrReduce.reduce(
    (result, currentValue, currentIndex, arr) => result + currentValue,
    0
  )
);

/**
 * Product of digits
 */
let num1 = 1234;
let product1 = num1
  .toString()
  .split("")
  .map((i) => parseInt(i))
  .reduce((result, currentValue, currentIndex) => result * currentValue, 1);
console.log(num1, product1);

/**
 * Check for uppercase - using regex
 * REGEX
 * i - This is for case-insensitive
 */
function checkUppercase(ch) {
  if (/[A-Z]/.test(ch)) return true;
  return false;
}
console.log("Checking if uppercase: ", checkUppercase("A"));
// /[A-Z]/.test(ch)

// Regex to check if character is anything from lowercase, uppercase or number -> alphanumeric
/[A-Za-z0-9]/.test("a");
/[A-Za-z0-9]/.test("A");
/[A-Za-z0-9]/.test("@");

// Case insensitive regex check
/[A-Z]/i.test("a"); // true

/^[0-9a-z]+$/i.test("abc1");

/**
 * MAP function
 * Iterating over a MAP
 * check whether maps are equal
 */
let map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

map1.get("a");
map1.delete("a");

// IMP
for (let [key, value] of map1) {
  console.log(key, value, " - ", map1.get(key));
}

/**
 * filter method
 */
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr2 = arr2.filter((num) => {
  // if (num % 2 == 0) return true;
  return num % 2 == 0; // IMP
});
console.log(newArr2);

/**
 * Adding a prototype method to STRING, ARRAY
 */
String.prototype.sort = function () {
  return this.split("").sort().join("");
};
let str2 = "ccbbaa";
console.log(str2.sort());

/**
 * replace method
 */
let formatStr = "(xxx) xxx-xxxx";
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr4.forEach((num) => {
  formatStr = formatStr.replace("x", num);
});
console.log(formatStr);

/**
 * indexOf() & lastIndexOf()
 * String.prototype.indexOf()
 */
let str3 = "dad";
console.log(str3.indexOf("d")); // 0
console.log(str3.lastIndexOf("d")); // 2

/**
 * toLowerCase() and toUpperCase()
 * String.prototype.toLowerCase()
 */
let str4 = "Mom";
console.log(str4.toLowerCase());
console.log(str4.toUpperCase());

/**
 * Array.push() & Array.pop() // from the end
 * Array.unshift() & Array.shift() // from the front
 */
let arr = [2, 3, 4]; // [2, 3, 4]
arr.push(5); // [2, 3, 4, 5]
arr.pop(); // [2, 3, 4]
arr.unshift(1); // [1, 2, 3, 4]
arr.shift(); // [2, 3, 4]

/**
 * Array.sort()
 * Array.sort((a, b) => a - b) // Ascending order
 * Array.sort((a, b) => b - a) // Descending order
 */
let arr5 = [2, 4, 1, 6, 3];
arr.sort(); // [1, 2, 3, 4, 6]
arr.sort((a, b) => a - b); // [1, 2, 3, 4, 6]
arr.sort((a, b) => b - a); // [6, 4, 3, 2, 1]

/**
 * Function returning a function
 */
function outerFunc() {
  return function () {
    console.log("Hello!");
  };
}
console.log("Function returning a function: ", outerFunc()());

/**
 * Function taking in a function as an argument
 */
function outerFunc1(fn) {
  if (fn) {
    fn();
  } else console.log("Else block");
}
console.log(
  "Function taking in a function as an argument: ",
  outerFunc1(outerFunc())
);
// outerFunc1(outerFunc);
outerFunc1(() => console.log("Hey!"));
outerFunc1();

/**
 * 2-Dimensional Arrays
 *
 * 1) INITIALISING a 2D Array
 *
 * 2) ITERATING over a 2D Array
 * Iterate using the COMPLETE-for loop, not the short for loop (for-in)
 * for (let i = 0; i < 3; i++) // This is correct
 *
 * 3) Creating a "minor" in a 2D array: 19_matrix_determinant(2Darray).js
 */

// The correct way to INITIALISE a 2D array
function createTwoDimensionalArray(n) {
  let tempArr = new Array(n);
  for (let i = 0; i < tempArr.length; i++) {
    tempArr[i] = new Array(); // TODO: Use this way to initialise a 2D array! [Need to PUSH here, as array length not specified]
  }
  return tempArr;
}

function iterateTwoDimensionalArray(arr) {
  // TODO: Use COMPLETE for-loops [Now the shortform for-in loop]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = i * j;
    }
  }
  console.log(arr);
}
iterateTwoDimensionalArray(createTwoDimensionalArray(3));

// Creating a "minor" in a 2D array: 19_matrix_determinant(2Darray).js

/**
 * typeof
 * instanceof
 */
let a = [1, 2];
typeof a; // 'object'
a instanceof Array; // true

// m * n => matrix, m => row, n => columns

// instaceof
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // false, string primitive is not a String
stringObject instanceof String; // true

literalString instanceof Object; // false, string primitive is not an Object
stringObject instanceof Object; // true

stringObject instanceof Date; // false

// Date
const myDate = new Date();

myDate instanceof Date; // true
myDate instanceof Object; // true
myDate instanceof String; // false

// typeof
console.log(typeof 42); // Expected output: "number"
console.log(typeof "blubber"); // Expected output: "string"
console.log(typeof true); // Expected output: "boolean"
console.log(typeof undeclaredVariable); // Expected output: "undefined"

typeof null === "object"; // This stands since the beginning of JavaScript

const str5 = new String("String");
const num2 = new Number(100);
typeof str5; // "object"
typeof num2; // "object"
const func = new Function();
typeof func; // "function"
