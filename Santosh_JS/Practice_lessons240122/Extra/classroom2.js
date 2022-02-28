"use strict";

/**
Task 1;
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
What is the length of the array?
Write a function called myAlphabetLength which console.logs the length of the array
Within the function also use an if-conditional statement that checks if the number of items within the array are less than 5
**/

/**
Task 2;
Declare a arrow function checkFunc that takes a string and a boolean as parameters
Call the function using 2 arguments
**/

/**
Task 3;
Declare and initialize an array called Planets with 5 string values
console.log each item in the array
Also console.log the index in each iteration
**/

/**
Task 4:
Declare and initialize an array called wowDatatypes
The array must have 5 different data types (NOT objects)
Iterate over the array and console.log each item in the array + it’s index and data type in the array
**/

/**
Task 5:
console.log each item in this array WITHOUT using a for loop
   let myArr = [ 1, 2, 'One', true];
**/

/**
Task 6:
let student1Courses = ['Math', 'English', 'JSProgramming'];
let student2Courses = ['Geography', 'Spanish', 'JSProgramming'];
Loop over the 2 arrays and if there are any common courses, if so console.log them
**/

/*

Task 7:
let furniture = ['Table', 'Chairs','Couch'];
For each item in this array console.log the letters in each item
**/

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

// const myAlphabetLength = () => {
//   if (myAlphabet.length < 5) {
//     return true;
//   }
//   return myAlphabet.length;
// };

// console.log(myAlphabetLength());

// const planets = ["Venus", "Mars", "Saturn", "Jupiter", "Neptune"];

// const solar = () => {
//   planets.forEach(function (planet) {
//     console.log(planet);
//     console.log(planets);
//   });
// };

// solar();

// const wowDatatypes = [false, 42, "wow", "Hello World", 666];

// const dataTypes = () => {
//   wowDatatypes.forEach(function (dataType) {
//     console.log(dataType);
//     console.log(typeof dataType);
//     console.log(wowDatatypes.indexOf(dataType));
//   });
// };

// dataTypes();

// let student1Courses = ["Math", "English", "JSProgramming"];
// let student2Courses = ["Geography", "Spanish", "JSProgramming"];

// const courses = () => {
//   let course = student1Courses.filter((element) =>
//     student2Courses.includes(element)
//   );
//   return course;
// };

// console.log(courses());

// let myArr = [1, 2, "One", true];

// const theArr = (myArr) => {
//   myArr.forEach(function (item) {
//     console.log(item);
//   });
// };

// theArr(myArr);

let furniture = ["Table", "Chairs", "Couch"];

const mobler = () => {
  furniture.forEach(function (meubles) {
    meubles.toString();
    for (let i = 0; i < meubles.length; i++) {
      console.log(meubles.charAt(i));
    }
  });
};

mobler();
