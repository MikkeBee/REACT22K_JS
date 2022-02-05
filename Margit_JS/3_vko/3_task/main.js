let form = document.querySelector("form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let direction = document.querySelectorAll('input[name="direction"]');
let text;

const setGradient = () => {
  let selectedValue;
  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }

  console.log(selectedValue);
  console.log(color1.value);
  console.log(color2.value);
  console.log(direction);
  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
  return `background-image: linear-gradient(${selectedValue}, ${color1.value}, ${color2.value});`;
};

const calculate = () => {
  let result = document.querySelector("#answerSpace");
  const calc = setGradient();
  document.querySelector("#spaceforCode").style.margin = `auto`;
  document.querySelector("#spaceforCode").style.width = `45%`;
  document.querySelector(
    "#spaceforCode"
  ).style.backgroundColor = `rgba(199, 199, 199)`;
  document.querySelector("#spaceforCode").style.borderRadius = `5px`;
  result.textContent = calc;
  console.log(calc);
};

form.addEventListener("change", setGradient);
