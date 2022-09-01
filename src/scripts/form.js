import emailjs from "@emailjs/browser";

export const Form = () => {
  if (window.location.pathname !== "/") return;

  const form = document.getElementById("form");
  const btn = document.querySelector(".form__input--btn");

  const FormReset = () => {
    form.reset();
    btn.value = "Отправить";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    btn.value = "Отправляем...";

    emailjs
      .sendForm(
        "service_dtowekq",
        "template_p5hh2i4",
        "#form",
        "WFeAfJdEW2XFd--9t"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          btn.value = "Успешно отправлено!";
          setTimeout(FormReset, 1500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          btn.value = "Упс! Что-то пошло не так...";
        }
      );
  };
  form.addEventListener("submit", handleSubmit);
}
