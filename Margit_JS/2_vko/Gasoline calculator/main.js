const calculate = () => {
  let price = Number(document.getElementById("gasprice").value);
  let money = Number(document.querySelector("#cashmoney").value);
  let amount = Math.floor(money / price);

  let answer = document.querySelector("#answerSpace");

  let text;

  amount >= 10
    ? (text = `You could get ${amount}L of gasoline. Good, now you can escape.`)
    : (text = `You get could get ${amount}L of gasoline. Oops, you have to stay here.`);

  answer.textContent = text;

  console.log("Price ", price);
  console.log("Money ", money);
  console.log("Amount ", amount);
};
