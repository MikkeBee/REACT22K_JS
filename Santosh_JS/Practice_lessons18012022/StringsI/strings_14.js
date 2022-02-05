"use strict";
/**
Complete the function capitalize such that it capitalizes the name parameter it receives.
There's no capitalize method in JavaScript, so you have to write it yourself.

Look at the sample usage to understand what capitalization means, then look at the hints
if it's still not clear.

Tests:
returns a string
returns capitalized word

 * @param {string} word
 */
function capitalize(word) {
  let capitalLetter = word[0];
  let restofWord = word.substring(1);
  return capitalLetter.toUpperCase() + restofWord.toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
