const navBtn = document.querySelector(".btn");
const navLinks = document.querySelector(".links");

navBtn.addEventListener("click", function () {
  console.log(navLinks.classList);
  if (navLinks.classList.contains("links-active")) {
    navLinks.classList.remove("links-active");
  } else {
    navLinks.classList.add("links-active");
  }
  // navLinks.classList.toggle("links-active");
});
