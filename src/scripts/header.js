const HeaderScroll = () => {
  if (screen.width < 500) return;

  const header = document.querySelector("header");

  document.addEventListener("scroll", () => {
    if (window.scrollY > 5000) {
      header.classList.add("hidden");
    } else if (window.scrollY < 5000) {
      header.classList.remove("hidden");
    }
  });
};

HeaderScroll();
