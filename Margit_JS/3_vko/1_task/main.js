const calculate = () => {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.querySelector("#height").value) / 100;
  let bmi = (weight / (height * height)).toFixed(1);
  let result = document.querySelector("#answerSpace");
  let text;
  let color;

  if (bmi < 18.5) {
    text = `BMI is ${bmi} - Underweight`;
    color = "warning";
  } else if (bmi <= 24.9) {
    text = `BMI is ${bmi} - Normal or Healthy Weight`;
    color = "goodtoGo";
  } else if (bmi <= 29.9) {
    text = `BMI is ${bmi} - Pre-obesity`;
    color = "warning";
  } else if (bmi >= 30.0) {
    text = `BMI is ${bmi} - Obesity`;
    color = "dangerDanger";
  }

  result.textContent = text;
  result.classList.add(color);
};
