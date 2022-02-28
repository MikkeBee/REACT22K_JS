// Sample usage (do not modify)
const waitForCompleteClick = () => {
  return new Promise((resolve, reject) => {
    document.querySelector("#complete-btn").addEventListener("click", () => {
      resolve("Complete clicked");
    });
    document.querySelector("#fail-btn").addEventListener("click", () => {
      reject("Fail clicked");
    });
  });
};

/* Update the code in index.js such that the console.log("Complete clicked"); runs after you click on the complete button and console.error("Fail clicked") runs after you click on the fail button.
Unlike the wait() function, this function does not take any parameters.*/

const completeClick = () => {
  waitForCompleteClick()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

completeClick();