import IMask from "imask";

const Mask = () => {
  const telInput = document.querySelector(".form__input--tel");

  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };

  IMask(telInput, maskOptions);
};

export const FormMask = () => {
  Mask();
};
