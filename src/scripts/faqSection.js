const titles = document.querySelectorAll(".question__title");

const ToggleText = (event) => {
  const block = event.composedPath()[2];
  block.classList.toggle("open");
};

titles.forEach((element) => {
  element.addEventListener("click", ToggleText);
});
