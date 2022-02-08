const initClickGreeting = () => {
  const button = document.querySelector("#my-button");
  button.addEventListener("click", () => {
    console.log("Welcome!");
  });
};

// Sample usage - do not modify
initClickGreeting();
