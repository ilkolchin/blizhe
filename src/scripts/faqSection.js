const titles = document.querySelectorAll(".question__title");

const ToggleText = (event) => {
  const children = event.composedPath()[1].children;

  for (const child of children) {
    child.classList.toggle("open");
  }
};

titles.forEach((element) => {
  element.addEventListener("click", ToggleText);
});
