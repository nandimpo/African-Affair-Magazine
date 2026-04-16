// subtle scroll reveal
const elements = document.querySelectorAll(".fashion-card, .feature-image");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// initial state
elements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s ease";
});
