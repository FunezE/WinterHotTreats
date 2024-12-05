const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("scroll-anim-done");
    }
  });
});

document.querySelectorAll(".scroll-anim").forEach((card) => {
  observer.observe(card, { threshold: 1.0 });
});
