const getUserComment = () => {
  const userComment = document.querySelector("#user-comment").value;
  return userComment;
};
// Sample usage - do not modify
const userComment = document.querySelector("#user-comment");
userComment.addEventListener("keyup", () => {
  console.log(getUserComment());
});
