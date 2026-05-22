/* ================================
   HOME PAGE ROTATING TITLE
================================ */

const titleLines = document.querySelectorAll(".title-line");

if (titleLines.length > 0) {
  let currentTitle = 0;

  function rotateHeroTitle() {
    titleLines[currentTitle].classList.remove("active");
    currentTitle = (currentTitle + 1) % titleLines.length;
    titleLines[currentTitle].classList.add("active");
  }

  setInterval(rotateHeroTitle, 2800);
}


/* ================================
   MODALS FOR SERVICES + ABOUT
================================ */

const modalTriggers = document.querySelectorAll("[data-modal]");
const modalCloseButtons = document.querySelectorAll(".modal-close");
const serviceModals = document.querySelectorAll(".service-modal");

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalId = trigger.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add("is-open");
      document.body.classList.add("modal-open");
    }
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".service-modal");

    if (modal) {
      modal.classList.remove("is-open");
      document.body.classList.remove("modal-open");
    }
  });
});

serviceModals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("is-open");
      document.body.classList.remove("modal-open");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    serviceModals.forEach((modal) => {
      modal.classList.remove("is-open");
    });

    document.body.classList.remove("modal-open");
  }
});