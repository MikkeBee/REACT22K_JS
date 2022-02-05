/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

// const numberToString = (n) => {
//   n = n.toString();
//   return n;
// };
// console.log(numberToString(100));

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
// const increase = (n) => {
//   n = n + 1;
//   return n;
// };

// console.log(increase(10));

// /**
//  * Subtracts one from a given number.
//  * @param {number} n
//  * @return {number}
//  */

// const decrease = (n) => {
//   n = n - 1;
//   return n;
// };

// console.log(decrease(10));

// /**
//  * Adds two numbers.
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the sum
//  */

// const add = (x, y) => {
//   theSum = x + y;
//   return theSum;
// };

// console.log(add(10, 10));

// /**
//  * Subtracts the second number from the first.
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the difference
//  */

// const subtract = (x, y) => {
//   theDifference = x - y;
//   return theDifference;
// };

// console.log(subtract(35, 5));

// /**
//  * Multiplies two numbers.
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the product
//  */

// const multiply = (x, y) => {
//   theProduct = x * y;
//   return theProduct;
// };

// console.log(multiply(5, 5));

// /**
//  * Divides the first number by the second.
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the quotient
//  */

// const divide = (x, y) => {
//   theQuotient = x / y;
//   return theQuotient;
// };

// console.log(divide(100, 10));

// /**
//  * Multiplies a number by itself.
//  * @param {number} x, number to be squared
//  * @return {number} squared
//  */

// const square = (x, y) => {
//   squaredNumber = x * y;
//   return squaredNumber;
// };

// console.log(square(2, 2));

// /**
//  * Performs a mathematical operation on two numbers.
//  * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
//  * @param {string} operation "add", "subtract", "multiply", or "divide"
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the result
//  */
// const calculate = (operationMark, x, y) => {
//   if (operationMark == "add") {
//     theResult = x + y;
//   } else if (operationMark == "subtract") {
//     theResult = x - y;
//   } else if (operationMark == "multiply") {
//     theResult = x * y;
//   } else if (operationMark == "divide") {
//     theResult = x / y;
//   }
//   return theResult;
// };

// console.log(calculate("add", 2, 2));
// console.log(calculate("subtract", 10, 5));
// console.log(calculate("multiply", 2, 5));
// console.log(calculate("divide", 100, 10));

// /**
//  * Returns true if `a` is greater than `b`.
//  * @param {number} a
//  * @param {number} b
//  * @return {boolean} `a` is larger than `b`
//  */
// const isGreaterThan = (a, b) => {
//   if (a > b) {
//     return true;
//   }
// };

// console.log(isGreaterThan(200, 100));

// /**
//  * Returns true if `a` is less than `b`.
//  * @param {number} a
//  * @param {number} b
//  * @return {boolean} `a` is smaller than `b`
//  */

// const isLessThan = (a, b) => {
//   if (a < b) {
//     return true;
//   }
// };

// console.log(isLessThan(100, 200));

// /**
//  * Returns true if `a` and `b` are equal.
//  * @param {number} a
//  * @param {number} b
//  * @return {boolean} the numbers are equal
//  */

// const areEqual = (a, b) => {
//   if (a === b) {
//     return true;
//   }
// };

// console.log(areEqual(100, 100));

// /**
//  * Returns the smallest value of two numbers.
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the smallest number
//  */
// const minimum = (x, y) => {
//   if (x < y) {
//     return x;
//   } else {
//     return y;
//   }
// };

// console.log(minimum(100, 10));

// /**
//  * Returns the largest value of two numbers.
//  * @param {number} x
//  * @param {number} y
//  * @return {number} the largest number
//  */
// const maximum = (x, y) => {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// };

// console.log(maximum(100, 10));

// /**
//  * Returns true if `n` is even.
//  * @param {number} n
//  * @return {boolean} the number is even
//  */

// const isEven = (n) => {
//   if (n % 2 == 0) {
//     return true;
//   }
// };

// console.log(isEven(10));

// /**
//  * Returns true if `n` is odd.
//  * @param {number} n
//  * @return {boolean} the number is odd
//  */

// const isOdd = (n) => {
//   if (n % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isOdd(12));

// /**
//  * Joins two strings with a space.
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string} joined the words joined with a space
//  */

// const combine = (word1, word2) => {
//   wholeSentence = word1 + " " + word2;
//   return wholeSentence;
// };

// console.log(combine("hello", "world"));

// /**
//  * Returns a circle object with the properties `circumference` and `area`.
//  * Use Math.PI for the value π.
//  * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
//  * @param {number} radius
//  * @return {object} circle
//  */

// const createCircle = (radius) => {
//     circle =
// }

// console.log(createCircle(3));
function highAndLow(numbers) {
  let high;
  let low;
  Number(numbers);
  if (numbers > 0) {
    numbers = high;
  } else if (numbers > high) {
    numbers = high;
  } else if (numbers < high) {
    numbers = low;
  } else if (numbers < low) {
    numbers = low;
  }
  return high, low;
}

console.log(highAndLow("1 2 3 4 5"));
