const menuOptions = document.querySelectorAll(".menu__option");
const menu = document.querySelector(".fullscreenmenu");
const burger = document.querySelector(".burger__icon");
const body = document.querySelector("body");

const ToggleMenuAnimation = () => {
  if (!menu.classList.contains("open")) {
    menuOptions.forEach((e) => {
      e.classList.add("open");
    });
  } else {
    menuOptions.forEach((e) => {
      e.classList.remove("open");
    });
  }
};
burger.addEventListener("click", ToggleMenuAnimation);

const BurgerToggleOpen = () => {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
  body.classList.toggle("locked");
};
burger.addEventListener("click", BurgerToggleOpen);
