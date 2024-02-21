/**
 * DESCRIPTION:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
 */

function createMap(inputArr) {
  let map1 = new Map();
  for (let val of inputArr) {
    let temp = map1.get(val);
    if (temp) {
      map1.set(val, ++temp);
    } else {
      map1.set(val, 1);
    }
  }
  return map1;
}

function diceGame(inputArr) {
  let map1 = createMap(inputArr);

  let result = 0;
  for (let [key, value] of map1) {
    if (key === 1) {
      if (value === 1) result += 100;
      else if (value === 2) result += 200;
      else if (value === 3) result += 1000;
      else if (value === 4) result += 1100;
      else if (value === 5) result += 1200;
    } else if (key === 6 && value === 3) {
      result += 600;
    } else if (key === 5) {
      if (value === 1) result += 50;
      else if (value === 2) result += 100;
      else if (value === 3) result += 500;
      else if (value === 4) result += 550;
      else if (value === 5) result += 600;
    } else if (key === 4 && value === 3) {
      result += 400;
    } else if (key === 3 && value === 3) {
      result += 300;
    } else if (key === 2 && value === 3) {
      result += 200;
    } else if (key === 1 && value === 1) {
      result += 100;
    } else if (key === 1 && value === 2) {
      result += 200;
    } else if (key === 5 && value === 1) {
      result += 50;
    } else if (key === 5 && value === 2) {
      result += 100;
    }
  }
  console.log(result);
}

diceGame([5, 1, 3, 4, 1]);
diceGame([1, 1, 1, 3, 1]);
diceGame([2, 4, 4, 5, 4]);
