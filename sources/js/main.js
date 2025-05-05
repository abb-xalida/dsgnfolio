// Button "to-top" activity

const toTopButton = document.getElementById("to-top");

// Listen for scroll events
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
});

// Toggle button

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});
