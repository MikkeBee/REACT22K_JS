"use strict";

/**
Complete the function multiplyNumbers such that it multiplies every number from the numbers parameter it receives.
/**
 *
 */

/**
 * @param {number[]} numbers
 */
const multiplyNumbers = (numbers) => {
  let multiplyNum = numbers.reduce((total, current) => {
    return total * current;
  }, 1);
  return multiplyNum;
};

// const multiplyNumbers = (numbers) =>
//   numbers.reduce((total, current) => total * current, 1); toinen tapa toteuttaa

// Sample usage - do not modify
console.log(multiplyNumbers([10, 20, 30])); // 6000
console.log(multiplyNumbers([2, 4, 2, 10])); // 160
