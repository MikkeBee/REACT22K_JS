// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>

const themeButton = document.querySelector("#theme-btn");
const HooTeeMEl = document.querySelector("html");

themeButton.addEventListener("click", () => {
  HooTeeMEl.classList.toggle("dark");
});
