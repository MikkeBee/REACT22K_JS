// TODO: log the button's textContent when it's clicked

const theButton = document.querySelector("#my-button");

theButton.addEventListener("click", () => {
  console.log(theButton.textContent);
});
