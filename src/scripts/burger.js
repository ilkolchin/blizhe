const BurgerActivation = () => {
  const burger = document.querySelector(".burger__icon");
  const menu = document.querySelector(".fullscreenmenu");
  const body = document.querySelector("body");

  const BurgerToggleOpen = () => {
    burger.classList.toggle("open");
    menu.classList.toggle("open");
    body.classList.toggle("locked");
  };
  burger.addEventListener("click", BurgerToggleOpen);
};

BurgerActivation();
