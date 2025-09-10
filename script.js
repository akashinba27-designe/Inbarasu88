// Dark / Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    body.style.background = "#111";
    body.style.color = "#f9f9f9";
    themeToggle.textContent = "☀️";
  } else {
    body.style.background = "#f9f9f9";
    body.style.color = "#333";
    themeToggle.textContent = "🌙";
  }
});
