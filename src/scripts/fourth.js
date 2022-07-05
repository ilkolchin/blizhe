const BtnActivation = () => {
  const btn = document.getElementById("button");
  const section = document.querySelector(".fourth");
  const activeBlock = document.querySelector(".fourth__hover");

  const handleClickOnBtn = () => {
    activeBlock.classList.toggle("active");
  };
  btn.addEventListener("click", handleClickOnBtn);

  const handleClickOnSection = () => {
    // if (activeBlock.classList.contains("active")) {
    //   console.log(true);
    // }
    // activeBlock.classList.toggle("active");
  };
  section.addEventListener("click", handleClickOnSection);
};

BtnActivation();
