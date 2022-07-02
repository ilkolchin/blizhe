const BtnActivation = () => {
  const btn = document.getElementById("button");

  const handleClick = () => {
    console.log("click on Btn");
  };

  btn.addEventListener("click", handleClick);
};

// BtnActivation();
