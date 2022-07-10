const form = () => {
  const btn = document.querySelector(".form__input--btn");

  const handleClick = (event) => {
    event.preventDefault();
    // alert("Отправлено!");
  };
  btn.addEventListener("click", handleClick);
};

form();
