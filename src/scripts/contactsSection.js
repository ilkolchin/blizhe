const ObserverCheck = () => {
  if (window.location.pathname !== "/") return;

  const block = document.querySelector(".contacts__text").children[2];
  const img = document.querySelector(".contacts__img");

  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.classList.add("slide-in-bl");
      }
    });
  });

  Observer.observe(block);
};

ObserverCheck();
