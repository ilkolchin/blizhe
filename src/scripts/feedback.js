const BtnActivation = () => {
  const btn = document.querySelector(".feedback__btn");
  const section = document.querySelector(".feedback");
  const hoverSection = document.querySelector(".hoverFeedback");
  const span = document.querySelector(".feedback__btn-inner");
  const svg = document.querySelector(".feedback__btn-icon");

  const handleClickOnBtn = () => {
    section.classList.add("active");
    hoverSection.classList.add("active");
  };
  btn.addEventListener("click", handleClickOnBtn);

  const handleClickOnSection = (event) => {
    console.log(event.target);
    if (event.target === btn || event.target === span || event.target === svg)
      return;
    section.classList.remove("active");
    hoverSection.classList.remove("active");
  };
  section.addEventListener("click", handleClickOnSection);

  const handleClickOnHoverSection = () => {
    section.classList.add("active");
    hoverSection.classList.add("active");
  };
  hoverSection.addEventListener("click", handleClickOnHoverSection);
};

BtnActivation();
