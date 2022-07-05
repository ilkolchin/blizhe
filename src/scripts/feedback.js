const BtnActivation = () => {
  const btn = document.getElementById("button");
  const section = document.querySelector(".feedback");
  const hoverSection = document.querySelector('.hoverFeedback');

  const handleClickOnBtn = () => {
    section.classList.add("active");
    hoverSection.classList.add("active");
  };
  btn.addEventListener("click", handleClickOnBtn);

  const handleClickOnSection = (event) => {
    if (event.target === btn) return;
    section.classList.remove("active");
    hoverSection.classList.remove("active");
  };
  section.addEventListener("click", handleClickOnSection);
};

BtnActivation();
