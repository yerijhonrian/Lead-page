document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-up, .animate-left, .animate-right"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-show");
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  animatedElements.forEach(el => observer.observe(el));
});
