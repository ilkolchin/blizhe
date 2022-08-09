const img = document.querySelector(".info__image");

const AboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img.classList.add("slide-in-br");
    }
  });
});

const ObserverCheck = () => {
  if (window.location.pathname !== "/") return;
  AboutObserver.observe(document.querySelector(".info__paragraph"));
};

ObserverCheck();
