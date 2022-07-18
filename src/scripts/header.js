const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 3700) {
    header.classList.add("hidden");
  } else if (window.scrollY < 3700) {
    header.classList.remove("hidden");
  }
});
