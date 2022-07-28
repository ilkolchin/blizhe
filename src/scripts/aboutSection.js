const img = document.querySelector(".about__image");

const AboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img.classList.add("slide-in-br");
    }
  });
});

const ObserverCheck = () => {
  if (window.location.pathname !== "/") return;
  AboutObserver.observe(document.querySelector(".about__paragraph"));
};

ObserverCheck();
