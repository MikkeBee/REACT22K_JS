"use strict";

/**
Complete the function removeSecondApp such that it removes the second element from the apps array it receives and returns the new array (which should not contain the item that was removed).

/**
 * @param {array} apps
 */
// function removeSecondApp(apps) {
//   let app = apps;
//   apps.splice(1, 1);
//   return app;
// }

// // Sample usage
// const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
// console.log(removeSecondApp(apps)); // ["Calculator", "Chrome", "Firefox"]

const asd = [1, 2, 3, 4];
const lol = { id: "123", name: "Tiina", age: 34 };

const huraa = (x) => {
  const iii = Object.entries(x).map(([key, value]) => {
    console.log("MIKÄ ON KEY", key);
    console.log("MIKÄ ON VALUE", value);
    return key;
  });
  console.log(iii);
};

huraa(lol);
