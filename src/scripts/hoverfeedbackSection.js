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

export const HoverFeedbackObserve = () => {
  Observer.observe(svg);
};
