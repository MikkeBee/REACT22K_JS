"use strict";

/**
Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.
Look at the sample usage to see how the function is being used.*/

// const waitOneSecond = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// };

// // Sample usage - do not modify
// waitOneSecond().then(() => {
//   console.log("Done waiting.");
// });

const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const seconds = milliseconds / 1000;
      resolve(seconds);
    }, milliseconds);
  });
};

wait(2000).then((data) => {
  console.log(data); // 2 (seconds)
});
