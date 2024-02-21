/**
Where my anagrams at? (retired)

DESCRIPTION:
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
 */

// Method #1
function createMap(str) {
  let map1 = new Map();

  str.split("").map((ch) => {
    let count = 0;
    if (map1.get(ch)) {
      count = map1.get(ch);
      count++;
      map1.set(ch, count);
    } else {
      map1.set(ch, 1);
    }
    return ch;
  });
  return map1;
}

let str1 = "aabb";
let str2 = "abba";
let map1 = createMap(str1);
let map2 = createMap(str2);
console.log(map1);
console.log(map2);
// console.log(map1 == map2);

function checkIfMapsAreEqual(map1, map2) {
  for (let [key, value] of map1) {
    if (value && !map2.get(key)) {
      return false;
    } else if (map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}
console.log("Check if 2 maps are equal: ", checkIfMapsAreEqual(map1, map2));

function checkAnagrams(word, words) {
  let map1 = createMap(word);

  return words.filter((word) => {
    let wordMap = createMap(word);
    return checkIfMapsAreEqual(map1, wordMap);
  });
  //
}
console.log(checkAnagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

// Method #3
String.prototype.sort = function () {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}

// Method #3
let str3 = "aabb";
let str4 = "abba";
str3.split("").sort().join("") == str4.split("").sort().join("");
