let formInput = document.querySelector(".inputData");
let resultTable = document.querySelector(".result");

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const carArray = [];

const addCar = (event) => {
  event.preventDefault();
  let license = document.querySelector(".licenseNumber").value;
  let maker = document.querySelector(".carMaker").value;
  let model = document.querySelector(".carModel").value;
  let owner = document.querySelector(".carOwner").value;
  let price = document.querySelector(".carPrice").value;
  let color = document.querySelector(".carColor").value;

  let newCar = new Car(license, maker, model, owner, price, color);

  carArray.push(newCar);
  console.table(carArray);
  console.log(
    "form was submitted",
    license,
    maker,
    model,
    owner,
    +price,
    color
  );
  makeTable();
};

const makeTable = () => {
  let result = "<table border=1>";
  result += "<tr>";
  for (const key in carArray[0]) {
    result += "<th>" + key + "</th>";
  }
  result += "</tr>";
  for (let i = 1; i < carArray.length; i++) {
    result += "<tr>";
    for (const key in carArray[i]) {
      result += "<td>" + carArray[i][key] + "</td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  resultTable.innerHTML = result;
  console.log(result);
};

makeTable();
formInput.addEventListener("submit", addCar);
