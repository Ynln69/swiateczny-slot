document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Запобігання стандартній поведінці форми

  // Отримання значень полів форми
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Перевірка на заповненість
  if (!name || !email || !message) {
    alert("Proszę wypełnić wszystkie wymagane pola.");
    return;
  }

  // Валідація формату email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Proszę podać prawidłowy adres email.");
    return;
  }

  // Підготовка даних форми
  const formData = {
    name: name,
    email: email,
    message: message,
  };

  console.log("Form Data Submitted:", formData); // Для перевірки даних у консолі

  // Імітація відправки даних і перенаправлення
  alert("Formularz został wysłany pomyślnie!");
  window.location.href = "./page/thank-you.html"; // Перенаправлення на сторінку подяки
});
