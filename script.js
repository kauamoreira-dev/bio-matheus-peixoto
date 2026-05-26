const revealItems = document.querySelectorAll(".reveal, .reveal-card");
const temporaryLinks = document.querySelectorAll('a[href="#"]');
const interactiveLinks = document.querySelectorAll(".main-button, .cta-button");

if (!("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealOnScroll.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealItems.forEach((item) => revealOnScroll.observe(item));
}

// Mantem os links temporarios sem recarregar a pagina durante os testes.
temporaryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

// Feedback visual curto para toque/clique, sem atrasar links externos reais.
interactiveLinks.forEach((link) => {
  link.addEventListener("pointerdown", () => {
    link.classList.add("is-pressing");
  });

  link.addEventListener("pointerup", () => {
    link.classList.remove("is-pressing");
  });

  link.addEventListener("pointerleave", () => {
    link.classList.remove("is-pressing");
  });
});
