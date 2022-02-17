class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor() {
    this.passport = [];
  }

  getFirstName() {
    return firstName.toLowerCase();
  }

  getLastName() {
    return lastName.toUpperCase();
  }

  getFullName() {
    return (this.passport = `${firstName} + ${lastName}`);
  }

  getInitials() {
    let a = firstName.charAt(0);
    let b = lastName.charAt(0);
    return (this.passport = `${a} + ${b}`);
  }

  getIsValidName() {}
}

//Sample usage do not modify (but feel free to read)
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let answer5 = document.querySelector("#answer5");

function render() {
  let passport = new Passport(firstName.value, lastName.value);
  console.log(answer1.textContent);
  console.log(passport);

  answer1.textContent = passport.getFirstName();
  answer2.textContent = passport.getLastName();
  answer3.textContent = passport.getFullName();
  answer4.textContent = passport.getInitials();
  answer5.textContent = passport.getIsValidName();
}

firstName.addEventListener("keyup", render);
lastName.addEventListener("keyup", render);
