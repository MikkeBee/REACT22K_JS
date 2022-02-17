const getIsActiveFromCard = () => {
  const multiPass = document.querySelector("#user-card");
  const idCard = multiPass.dataset.isActive === "true";
  return idCard;
};

// Sample usage - do not modify
console.log(getIsActiveFromCard());
