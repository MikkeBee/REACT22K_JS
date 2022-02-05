"use strict";

/**
Complete the function removeFirstApp such that it removes the first element of the apps array it receives and returns the new array (which should not contain the item that was removed).

/**
 * @param {array} apps
 */

function removeFirstApp(apps) {
  let app = apps;
  apps.splice(0, 1);
  return app;
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]
