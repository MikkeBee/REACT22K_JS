// const wait = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const seconds = milliseconds / 1000;
//       resolve(seconds);
//     }, milliseconds);
//   });
// };

// wait(2000).then((data) => {
//   console.log(data); // 2 (seconds)
// });

// let p = new Promise((resolve, reject) => {
//   reject(Error("This fails"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));
//Prints "This fails" twice

// let p = new Promise((resolve, reject) => {
//   return Promise.reject(Error("This fails"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));
// Returns an error

// let p = new Promise((resolve, reject) => {
//   reject(Error("This fails"));
// })
//   .catch((error) => console.log(error))
//   .then((error) => console.log(error));
// This fails as well

// let p = new Promise((resolve, reject) => {
//   reject(Error("This fails"));
// })
//   .catch((error) => console.log(error))
//   .catch((error) => console.log(error));

// new Promise((resolve, reject) => {
//   resolve("Success");
// })
//   .then(() => {
//     throw Error("Oh no");
//   })
//   .catch((error) => {
//     return "actually, that works";
//   })
//   .catch((error) => console.log(error));
//  Prints nothing

// Promise.resolve("success")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// prints "SUCCESS"
