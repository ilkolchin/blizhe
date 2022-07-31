const ObserverCheck = () => {
  if (window.location.pathname !== "/") return;

  const block = document.querySelector(".contacts__text").children[2];
  const img1 = document.querySelector(".contacts__img");
  const img2 = document.querySelector(".contacts__images-img1");
  const img3 = document.querySelector(".contacts__images-img2");

  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img2.classList.add("slide-in-fwd-center");
        img3.classList.add("slide-in-fwd-center-2");
        img1.classList.add("slide-in-fwd-center-3");
      }
    });
  });

  Observer.observe(block);
};

ObserverCheck();
