// TODO: toggle the class active on my-button when it's clicked

const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", () => {
  myButton.classList.toggle("active");
});
