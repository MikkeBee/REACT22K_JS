"use strict";

/**
Complete the getUserIdFromCard function such that it returns the value of data-user-id (number)
from the user-card element.
**/

const getUserIdFromCard = () => {
  const multiPass = document.querySelector("#user-card");
  const idCard = multiPass.dataset.userId;
  return idCard;
};

// Sample usage - do not modify
console.log(getUserIdFromCard());
