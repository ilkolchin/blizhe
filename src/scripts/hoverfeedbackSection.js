const svg = document.querySelector(".hoverFeedback__btn-svg");

const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      svg.classList.add("active");
    } else {
      svg.classList.remove("active");
    }
  });
});

const ObserverCheck = () => {
  if (window.location.pathname !== "/") return;
  Observer.observe(svg);
};

ObserverCheck();
