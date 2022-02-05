"use strict";

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */

const getPositiveTemperatures = (temperatures) =>
  temperatures.filter((temperature) => temperature > 0);

function getPositiveTemperatures() {}

// Sample usage - do not modify
console.log(getPositiveTemperatures([10, -2, 3]));
console.log(getPositiveTemperatures([-4, 15, -21, 27]));
