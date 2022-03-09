let inputItem = document.querySelector(".inputBox");
const button = document.querySelector(".inputSubmit");
const itemList = document.querySelector(".listItems");
const delButton = document.querySelector(".listItem button");

const addItem = () => {
  console.log(inputItem.value);
  const inputValue = itemList.insertAdjacentHTML(
    "beforeend",
    `<li class="listItem"><i class="fa-solid fa-angle-right"></i>${inputItem.value}<button>Remove item?</button></li>`
  );
  const items = document.querySelectorAll(".listItem");
  for (var index = 0; index < items.length; index++) {
    items[index].querySelector("button").addEventListener("click", function () {
      this.closest(".listItem").remove();
    });
  }
  inputItem.value = "";
  return inputValue;
};

//  const deleteStuff = () => {
//    console.log("hey");
//    this.closest(".listItem").remove();
//  };

button.addEventListener("click", addItem);
button.addEventListener("keyup", addItem);
