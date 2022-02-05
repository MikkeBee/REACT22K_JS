// task 1
// for (let number = 0; number < 100; number++){
// if (number % 2 !== 0) {
//   console.log(number);
// }
// }
// for (let i = 1; i < 100; i += 2){
//  console.log(i)}   ==> alternate solution

// task 2
// for (let number = 0; number < 100; number++) {
//   if (number % 2 == 0) {
//     console.log(number);
//   } else if (number % 2 == 1) {
//     console.log(99 - number);
//   }
//   if (number == 50) {
//     break;
//   }
// }

// 3.
// do {
//   km = prompt("How many kilometers have you travelled?");
//   hours = prompt("How many hours did it take?");
// } while (km > 0 && hours > 0);
// {
//   let kmh = (km / hours);
// }
// if (km || hours == 0) {
//   stop;
// }
// Proper solution!
// let distance, time;
// while (distance != 0) {
//   distance = prompt("enter");
//   time = prompt("enter");
//  Number(distance);
//  Number(time);
//   let average = distance / time;
//   console.log("average is", average);
// }

//4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

// do {
//   numbers = prompt("Please enter 20 numbers");
// } while (numbers.length <= 20);
// console.log(numbers);
//
// SOLUTIONS
//let even = 0;

// for (let counter = 0; counter < 5; counter++) {
//   let input = Number(prompt("enter a number"));
//   if (input % 2 == 0) {
//     even++;
//   }
// }
// console.log("There was", even, "numbers");

// let count = 0;

//  for (let l = 0; l < 5; l++) {
//   num = prompt('Enter a number:');
//   if (num % 2 === 0) count++;
//   }
//   console.log('The number of even numbers: ' + count);

//5. Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

// let averageArray = [];
// let average = 0;

// const lol = (previousValue, currentValue) => previousValue + currentValue;

// for (let l = 0; ; l++) {
//   numbers = Number(prompt("Enter a number"));
// if (numbers === 0) break;
//     averageArray.push(numbers);
//     const asd = averageArray.reduce(lol);
//     average = asd / averageArray.length;

// }
// console.log(average);

//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

// let averageArray = [];
// let average = 0;

// const lol = (previousValue, currentValue) => previousValue + currentValue;

// for (let l = 1; l <= 5; l++) {
//   numbers = Number(prompt("Enter a number"));
//   if (numbers === 0) break;
//   averageArray.push(numbers);
//   const asd = averageArray.reduce(lol);
//   average = asd / averageArray.length;
// }
// console.log(average);

// 7. Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

// let averageArray = [];
// let average = 0;

// const lol = (previousValue, currentValue) => previousValue + currentValue;

// for (let l = 1; ; l++) {
//   numbers = Number(prompt("Enter a number"));
//   wannaContinue = prompt(
//     "Do you want to conintue? Enter y for yes or n for no."
//   );
//   if (wannaContinue === "n") break;
//   averageArray.push(numbers);
//   const asd = averageArray.reduce(lol);
//   average = asd / averageArray.length;
// }
// console.log(average);

// 8. Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

let minimum;

let howMany = Number(prompt("How many numbers do you want to enter?"));

for (let l = 1; l <= howMany; l++) {
  numbers = Number(prompt("Enter a number. Enter 0 to escape."));
  if (minimum == null) {
    minimum = numbers;
  } else if (numbers < minimum) {
    minimum = numbers;
  }
}
console.log(minimum);

// 9. Make a program that asks ten numbers and in the end prints out two biggest numbers.
let maximum1;
let maximum2;

for (let l = 1; l <= 10; l++) {
  numbers = Number(prompt("Please enter 10 numbers."));
  if (maximum1 == null && maximum2 == null) {
    maximum1 = numbers;
    maximum2 = numbers;
  } else if (numbers > maximum1) {
    maximum1 = numbers;
  } else if (numbers < maximum1 && numbers > maximum2) {
    maximum2 = numbers;
  }
}
console.log(maximum1);
console.log(maximum2);

// 10. Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.
