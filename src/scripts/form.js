const Form = () => {
  if (window.location.pathname !== "/") return;

  const btn = document.querySelector(".form__input--btn");

  const handleClick = (event) => {
    event.preventDefault();
    // alert("Отправлено!");
  };
  btn.addEventListener("click", handleClick);
};

Form();
