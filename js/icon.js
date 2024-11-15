document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".dynamic-icon");
  
    // Додати додаткові рандомні рухи
    icons.forEach((icon) => {
      setInterval(() => {
        const randomX = Math.random() * 100 - 50; // Рандомний рух по осі X
        const randomY = Math.random() * 100 - 50; // Рандомний рух по осі Y
        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }, 3000);
    });
  });
  