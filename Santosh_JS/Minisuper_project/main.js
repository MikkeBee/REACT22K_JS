let inputItem = document.querySelector(".inputBox");
const button = document.querySelector(".inputSubmit");
const itemList = document.querySelector(".listItems");

const addItem = () => {
  console.log(inputItem.value);
  const inputValue = itemList.insertAdjacentHTML(
    "beforeend",
    `<li><i class="fa-solid fa-angle-right"></i>${inputItem.value}</li>`
  );
  inputItem.value = "";
  return inputValue;
};

button.addEventListener("click", addItem);
button.addEventListener("keyup", addItem);
