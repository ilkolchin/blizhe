const titles = document.querySelectorAll(".question__title");

document.addEventListener("click", (event) => {
  // console.log(event);
});

const ToggleText = (event) => {
  const block = event.composedPath()[2];
  block.classList.toggle("open");
};

titles.forEach((element) => {
  element.addEventListener("click", ToggleText);
});
