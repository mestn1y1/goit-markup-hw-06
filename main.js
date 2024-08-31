document.addEventListener("DOMContentLoaded", () => {
  // Модальное окно
  const heroBtn = document.querySelector(".hero-btn");
  const modalContainer = document.querySelector(".modal-container");
  const modalBtn = document.querySelector(".modal-btn");

  // Открыть модальное окно
  heroBtn.addEventListener("click", () => {
    modalContainer.classList.add("is-open");
  });

  // Закрыть модальное окно
  modalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("is-open");
  });

  // Закрыть модальное окно при клике вне модального окна
  window.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.classList.remove("is-open");
    }
  });

  // Мобильное меню
  const openMenuBtn = document.querySelector(".open-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");

  // Открыть мобильное меню
  openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
  });

  // Закрыть мобильное меню
  mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });

  // Закрыть мобильное меню при клике вне его области
  window.addEventListener("click", (event) => {
    if (event.target === mobileMenu) {
      mobileMenu.classList.remove("is-open");
    }
  });
});
