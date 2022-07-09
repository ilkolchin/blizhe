const BtnActivation = () => {
  const btn = document.querySelector(".feedback__btn");
  const section = document.querySelector(".feedback");
  const hoverSection = document.querySelector(".hoverFeedback");

  const handleClickOnBtn = () => {
    section.classList.add("active");
    hoverSection.classList.add("active");
  };
  btn.addEventListener("click", handleClickOnBtn);

  const handleClickOnSection = (event) => {
    console.log(event.target);
    if (event.target === btn) return;
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
