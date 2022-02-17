const header = document.querySelector("header");
const button = document.querySelector("#myBtn");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    // header.style.backgroundColor = "#ffbf71";
    header.classList.add("bg");
    button.style.display = "block";
  } else {
    header.classList.remove("bg");
    button.style.display = "none";
    // header.style.backgroundColor = "#ff8c00";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 200 ||
//     document.documentElement.scrollTop > 200
//   ) {
//     header.style.backgroundColor = "#ffbf71";
//   } else {
//     header.style.backgroundColor = "#ff8c00";
//   }
// }

// const scrollFunction = () =>
//   document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
//     ? (header.style.backgroundColor = "white")
//     : (header.style.backgroundColor = "#82a8c7");
