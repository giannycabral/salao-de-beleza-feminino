document.addEventListener("DOMContentLoaded", () => {
  // Menu Mobile
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuBtn.innerHTML = mobileMenu.classList.contains("active")
      ? '<i class="fas fa-times text-2xl text-rose-800"></i>'
      : '<i class="fas fa-bars text-2xl text-rose-800"></i>';
  });

  // Links do menu mobile - fechar ao clicar
  const mobileLinks = mobileMenu.getElementsByTagName("a");
  Array.from(mobileLinks).forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuBtn.innerHTML = '<i class="fas fa-bars text-2xl text-rose-800"></i>';
    });
  });

  // Botão Voltar ao Topo
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Formulário de Agendamento
  const bookingForm = document.querySelector("#booking form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Obrigado! Seu agendamento foi recebido. Entraremos em contato em breve para confirmar."
      );
      bookingForm.reset();
    });
  }

  // Formulário de Contato
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Obrigado pela sua mensagem! Responderemos em breve.");
      contactForm.reset();
    });
  }

  // Animação de aparecimento ao scroll
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".card, .sec-header, .about-wrap")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
        "opacity 0.5s ease-out, transform 0.5s ease-out";
      observer.observe(element);
    });

  // Classe para animação
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <style>
            .fade-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `
  );
});
