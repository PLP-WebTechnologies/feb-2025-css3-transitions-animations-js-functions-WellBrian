const animateBtn = document.getElementById("animateBtn");
const themeBtn = document.getElementById("themeBtn");

    // Bounce animation on click
    animateBtn.addEventListener("click", () => {
      animateBtn.classList.add("bounce");
      setTimeout(() => animateBtn.classList.remove("bounce"), 600);
    });

    // Toggle theme and save preference
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", mode);
    });

    // Load theme preference
    window.addEventListener("DOMContentLoaded", () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
      }
    });
  