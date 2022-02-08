/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  const welcomeMessage = document.querySelector("#name");
  welcomeMessage.textContent = `${name}`;
  console.log(welcomeMessage.textContent);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("<h2>You have been hacked</h2>");
