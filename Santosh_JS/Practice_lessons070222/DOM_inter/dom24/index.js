// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'
const menuButton = document.querySelector("#menu-sidebar");
const sidebar = document.querySelector("#app-sidebar");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
