const getSelectedCountry = () => {
  const countries = document.querySelector("#countries-dropdown").value;
  return countries;
};

// Sample usage - do not modify
const dropdown = document.querySelector("#countries-dropdown");
dropdown.addEventListener("change", () => {
  console.log(getSelectedCountry());
});
