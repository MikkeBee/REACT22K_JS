const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("#item");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

//saving items locally
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items")); //get items from local storage

const listFunction = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  listFunction(input.value);
  input.value = "";
});

data.forEach((item) => {
  listFunction(item);
});

const listReset = () => {
  localStorage.clear();
  console.log("hey");
};

button.addEventListener("click", listReset());
