"use strict";

/**
Complete the fakeFetch function such that it returns a promise that resolves successfully after 1 second with the following object
{
/*  departed:false
    delayed: true
}.
*/

const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dataToResolve = {
        departed: false,
        delayed: true,
      };
      resolve(dataToResolve);
    }, 1000);
  });
  // TODO: implement fake fetch
};

// Sample usage - do not modify
fakeFetch().then((data) => {
  console.log(data);
});
