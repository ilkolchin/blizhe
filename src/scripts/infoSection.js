const texts = document.querySelectorAll(".info__text");

const Observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      if (entry.target.nextElementSibling.children[0].alt === "SuckmyRouge") {
        entry.target.nextElementSibling.classList.add("slide-in-br");
      } else {
        entry.target.nextElementSibling.classList.add("slide-in-bl");
      }
    }
  }
});

export const InfoSectionObserve = () => {
  for (const text of texts) {
    Observer.observe(text);
  }
};
