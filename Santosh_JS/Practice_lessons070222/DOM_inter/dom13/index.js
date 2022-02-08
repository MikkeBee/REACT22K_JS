/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const welcomeMessage = document.querySelector("#welcome-message");
  welcomeMessage.innerHTML = `Hello <strong>${name}</strong>.`;
  console.log(welcomeMessage.innerHTML);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("Alex");
