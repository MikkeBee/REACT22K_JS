const getShortTextParagraphs = () => {
  const shortStuff = [...document.querySelectorAll("p")];
  return [...shortStuff].map((paragraph) => paragraph.textContent.length < 10);
};

// const getShortTextParagraphs = () => {
//   const paragraphs = document.querySelectorAll("p");
//   return (allParagraphs = [...paragraphs].filter(
//     ((paragraph) => paragraph.textContent.length < 10).map(
//       (el) => el.textContent
//     )
//   ));
// };

// Sample usage - do not modify
console.log(getShortTextParagraphs());
