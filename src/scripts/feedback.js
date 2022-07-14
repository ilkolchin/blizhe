const BtnActivation = () => {
  const btn = document.querySelector(".feedback__btn");
  const section = document.querySelector(".feedback");
  const hoverSection = document.querySelector(".hoverFeedback");
  const btnMobile = document.querySelector(".hoverFeedback__btn");

  const activeSection = (event) => {
    section.classList.add("active");
    hoverSection.classList.add("active");
    event.stopPropagation();
  };

  btn.addEventListener("click", activeSection);
  hoverSection.addEventListener("click", activeSection);

  const disActivateSection = (event) => {
    section.classList.remove("active");
    hoverSection.classList.remove("active");
    event.stopPropagation();
  };
  section.addEventListener("click", disActivateSection);
  btnMobile.addEventListener("click", disActivateSection);
};

BtnActivation();
