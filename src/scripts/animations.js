//About

const AboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-br");
    }
  });
});
AboutObserver.observe(document.querySelector(".about__image"));

//Contacts

// const ContactsObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("slide-in-fwd-center-2");
//     }
//   });
// });
// ContactsObserver.observe(document.querySelector(".contacts__innerimages-1"));

// const ContactsObserver2 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("slide-in-fwd-center");
//     }
//   });
// });
// ContactsObserver2.observe(document.querySelector(".contacts__innerimages-2"));

// const ContactsObserver3 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("slide-in-fwd-center-3");
//     }
//   });
// });
// ContactsObserver3.observe(document.querySelector(".contacts__image"));
