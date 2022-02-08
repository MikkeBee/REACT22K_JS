const getFullName = () => {
  const fName = firstName.value;
  const lName = lastName.value;
  return fName + " " + lName;
};

// Sample usage - do not modify
const fullName = document.querySelector("#full-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const updateFullName = () => {
  fullName.textContent = getFullName();
};
firstName.addEventListener("keyup", () => updateFullName());
lastName.addEventListener("keyup", () => updateFullName());
