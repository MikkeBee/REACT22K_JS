// TODO: The user can select a currency by clicking on it (add the class `active`). However, only one currency can be chosen at a time.

const moneyMoney = document.querySelectorAll("button");

moneyMoney.forEach((button) => {
  button.addEventListener("click", (event) => {
    moneyMoney.classList.toggle("active");
    console.log(event.currentTarget);
  });
});

// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
// button.addEventListener("click", (event) => {
// buttons.forEach((btn) => btn.classList.remove("active"));
// this.classList.add("active");
// event.currentTarget.classList.add("active");
// });
// });

// const buttons = document.querySelectorAll(".card");

// buttons.forEach((button) => {
//  button.addEventListener("click", (event) => {
//  buttons.forEach((button) => {
//  button.classList.remove("active");
//  });
//  event.currentTarget.classList.toggle("active");
//  });
// });
