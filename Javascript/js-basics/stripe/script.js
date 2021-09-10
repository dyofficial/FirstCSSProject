const navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {
  if (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
  } else {
    navLinks.classList.add("show-links");
  }
});
