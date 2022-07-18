const AboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-br");
    }
  });
});

const ObserverCheck = () => {
  if (window.location.pathname !== "/") return;
  AboutObserver.observe(document.querySelector(".about__image"));
};

ObserverCheck();
