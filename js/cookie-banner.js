// Перевірка, чи користувач вже прийняв кукі
function checkCookiesConsent() {
  return localStorage.getItem("cookiesAccepted") === "true";
}

// Показуємо банер, якщо згода не була дана
function showCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  if (cookieBanner && !checkCookiesConsent()) {
    cookieBanner.classList.add("show");
  }
}

// Приховуємо банер і записуємо згоду в localStorage
function acceptCookies() {
  const cookieBanner = document.getElementById("cookie-banner");
  if (cookieBanner) {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.remove("show");
  }
}

// Додаємо слухач для кнопки прийняття кукі
document.addEventListener("DOMContentLoaded", () => {
  const acceptButton = document.getElementById("accept-cookies");
  if (acceptButton) {
    acceptButton.addEventListener("click", acceptCookies);
  }

  // Показуємо банер після завантаження сторінки
  showCookieBanner();
});
