"use strict";

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
}

/*
You can get the list of chapters by using the following endpoint https://  programmingjs-90a13-default-rtdb.europe-west1.fi rebasedatabase.app/chapters.json. Call  the displayCompletedChapters with only the chapters that have been completed.

*/

const getChapters = () => {
  // TODO
  const API = new FetchWrapper(
    "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app"
  );
  API.get("/chapters.json").then((data) => {
    console.log(data);
    const displayCompChap = data.filter((item) => item.isCompleted);
    displayCompletedChapters(displayCompChap);
  });
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();
