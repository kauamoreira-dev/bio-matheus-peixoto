const config = window.bioConfig || {};

const socialIcons = {
  whatsapp:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.51 0 .16 5.35.16 11.93c0 2.1.55 4.16 1.6 5.97L.06 24l6.25-1.64a11.94 11.94 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.18-3.5-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.86 9.86 0 1 1 8.35 4.6Zm5.42-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" /></svg>',
  instagram:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Z" /></svg>',
  linkedin:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.28 2.37 4.28 5.46v6.29h-.01ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" /></svg>',
  tiktok:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 2c.28 2.38 1.62 3.8 4 3.95v3.38a7.77 7.77 0 0 1-4-1.13v6.3c0 7.99-8.7 10.49-12.2 4.76-2.25-3.69-.87-10.17 6.34-10.43v3.56c-.55.09-1.14.23-1.67.49-1.6.78-2.5 2.24-2.25 3.86.48 3.12 6.17 4.04 5.7-2.05V2h4.08Z" /></svg>',
  facebook:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" /></svg>',
};

const isValidLink = (url) => {
  return typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value || "";
  }
};

const createSocialCard = (link) => {
  const anchor = document.createElement("a");
  const type = link.tipo || "link";
  const icon = socialIcons[type] || "";
  const label = document.createElement("span");
  const strong = document.createElement("strong");

  anchor.className = `main-button ${type} reveal-card`;
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.setAttribute(
    "aria-label",
    `Abrir ${link.nome || "link"} de ${config.nome || "cliente"} em uma nova aba`
  );

  label.innerHTML = icon;
  label.append(document.createTextNode(link.nome || "Link"));
  strong.textContent = link.destaque || "Abrir";

  anchor.append(label, strong);

  return anchor;
};

const renderProfile = () => {
  document.title = `${config.nome || "Bio Profissional"} | Bio Profissional`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && config.descricao) {
    metaDescription.setAttribute("content", config.descricao);
  }

  setText("#profile-name", config.nome);
  setText("#profile-description", config.descricao);

  const photo = document.querySelector("#profile-photo");
  if (photo && config.foto && config.foto.src) {
    photo.src = config.foto.src;
    photo.alt = config.foto.alt || `Foto de ${config.nome || "perfil"}`;
  }

  const status = document.querySelector("#profile-status");
  const statusText = document.querySelector("[data-status-text]");
  if (status && statusText) {
    if (config.status) {
      statusText.textContent = config.status;
    } else {
      status.hidden = true;
    }
  }
};

const renderSocialLinks = () => {
  const socialLinks = document.querySelector("#social-links");
  const links = Array.isArray(config.linksSociais) ? config.linksSociais : [];
  const validLinks = links.filter((link) => link && isValidLink(link.url));

  if (!socialLinks || validLinks.length === 0) {
    if (socialLinks) {
      socialLinks.hidden = true;
    }
    return;
  }

  const fragment = document.createDocumentFragment();
  validLinks.forEach((link) => fragment.appendChild(createSocialCard(link)));
  socialLinks.appendChild(fragment);
};

const renderFinalCta = () => {
  const finalCta = document.querySelector("#final-cta");
  const ctaText = document.querySelector("[data-cta-text]");
  const ctaButton = document.querySelector("[data-cta-button]");
  const cta = config.ctaFinal || {};
  const hasButton = ctaButton && isValidLink(cta.linkPrincipal);

  if (!finalCta) {
    return;
  }

  if (!cta.texto && !hasButton) {
    finalCta.hidden = true;
    return;
  }

  if (ctaText) {
    ctaText.textContent = cta.texto || "";
    ctaText.hidden = !cta.texto;
  }

  if (ctaButton) {
    if (hasButton) {
      ctaButton.href = cta.linkPrincipal;
      ctaButton.textContent = cta.botao || "Começar agora";
      ctaButton.setAttribute(
        "aria-label",
        `${cta.botao || "Começar agora"} com ${config.nome || "cliente"}`
      );
    } else {
      ctaButton.hidden = true;
    }
  }
};

const setupRevealAnimation = () => {
  const revealItems = document.querySelectorAll(".reveal, .reveal-card");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

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
};

const setupTouchFeedback = () => {
  const interactiveLinks = document.querySelectorAll(".main-button, .cta-button");

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
};

renderProfile();
renderSocialLinks();
renderFinalCta();
setupRevealAnimation();
setupTouchFeedback();
