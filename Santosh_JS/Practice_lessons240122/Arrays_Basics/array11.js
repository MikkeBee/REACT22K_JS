"use strict";

/**
Complete the function sumOddNumbers such that it returns the sum of all the odd numbers
from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
  let oddNumber = 0;
  numbers.forEach(function (number) {
    if (number % 2 === 1) {
      oddNumber = oddNumber += number;
    }
  });
  return oddNumber;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
