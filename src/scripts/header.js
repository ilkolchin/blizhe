const HeaderScroll = () => {
  if (screen.width < 500) return;

  const AddHiddenClass = (height) => {
    const header = document.querySelector("header");
    if (window.scrollY > height) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  };

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollHeight > 7000) {
      AddHiddenClass(6700);
    } else {
      AddHiddenClass(4500);
    }
  });
};

HeaderScroll();
