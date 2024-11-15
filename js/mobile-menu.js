document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const menuClose = document.querySelector(".menu-close");
  
    // Відкрити мобільне меню
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.add("active");
    });
  
    // Закрити мобільне меню
    menuClose.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
  