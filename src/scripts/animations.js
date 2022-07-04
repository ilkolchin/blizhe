const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-br");
    }
  });
});

observer.observe(document.querySelector(".about__image"));
